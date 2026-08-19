"use client";

import { FormEvent, useState } from "react";
import {
    FaCheckCircle,
    FaExclamationCircle,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaPhoneAlt,
    FaSpinner,
    FaUser,
} from "react-icons/fa";

import { site } from "@/data/site";

const API_URL =
    "https://apibackend.mastercall.in/api/v1/web-leads/submit/";

const FORM_KEY = "frm_oceanic_spa_vashi_235498";

/* =========================================================
   TYPES
========================================================= */

interface FormData {
    name: string;
    phone: string;
    address: string;
    notes: string;
}

interface FormErrors {
    name?: string;
    phone?: string;
    address?: string;
    notes?: string;
    submit?: string;
}

/* =========================================================
   URL / SPAM DETECTION
========================================================= */

/**
 * Detect URLs and common URL-like patterns.
 *
 * We intentionally check more than just https:// because users
 * can also submit:
 *
 * www.example.com
 * example.com
 * http://example.com
 * https://example.com
 */
const URL_PATTERN =
    /(?:https?:\/\/|www\.|(?:[a-z0-9-]+\.)+(?:com|in|net|org|co|io|ai|biz|info|xyz|me|app)(?:[/:?#]|$))/i;

/**
 * Detect obvious HTML / script injection attempts.
 */
const SCRIPT_PATTERN =
    /<\s*(script|iframe|object|embed|style|link|svg|img|form|input|button)[^>]*>/i;

/**
 * Detect javascript/data URLs.
 */
const DANGEROUS_URL_PATTERN =
    /(?:javascript:|data:|vbscript:)/i;

/* =========================================================
   HELPERS
========================================================= */

function containsBlockedContent(value: string) {
    return (
        URL_PATTERN.test(value) ||
        SCRIPT_PATTERN.test(value) ||
        DANGEROUS_URL_PATTERN.test(value)
    );
}

function cleanText(value: string) {
    return value
        .replace(/\s+/g, " ")
        .trim();
}

function trackConversion(
    eventName: string,
    params?: Record<string, string>
) {
    if (typeof window === "undefined") return;

    const gtag = (
        window as Window & {
            gtag?: (
                command: string,
                eventName: string,
                params?: Record<string, unknown>
            ) => void;
        }
    ).gtag;

    if (typeof gtag !== "function") return;

    gtag("event", eventName, {
        ...params,
    });
}

/* =========================================================
   COMPONENT
========================================================= */

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        address: "",
        notes: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [isSuccess, setIsSuccess] =
        useState(false);

    /* =======================================================
       VALIDATION
    ======================================================== */

    const validateField = (
        field: keyof FormData,
        value: string
    ): string | undefined => {
        const trimmed = cleanText(value);

        switch (field) {
            case "name": {
                if (!trimmed) {
                    return "Please enter your name.";
                }

                if (trimmed.length < 2) {
                    return "Name must contain at least 2 characters.";
                }

                if (trimmed.length > 80) {
                    return "Name must be less than 80 characters.";
                }

                if (containsBlockedContent(trimmed)) {
                    return "URLs and links are not allowed.";
                }

                if (
                    /[<>{}[\]\\]/.test(trimmed)
                ) {
                    return "Please enter a valid name.";
                }

                if (
                    !/^[\p{L}\s.'-]+$/u.test(trimmed)
                ) {
                    return "Please enter a valid name.";
                }

                return undefined;
            }

            case "phone": {
                if (!trimmed) {
                    return "Please enter your phone number.";
                }

                if (containsBlockedContent(trimmed)) {
                    return "URLs are not allowed.";
                }

                // Exactly 10 digits.
                if (!/^\d{10}$/.test(trimmed)) {
                    return "Phone number must contain exactly 10 digits.";
                }

                // Basic Indian mobile number validation.
                if (!/^[6-9]\d{9}$/.test(trimmed)) {
                    return "Please enter a valid 10-digit mobile number.";
                }

                return undefined;
            }

            case "address": {
                if (!trimmed) {
                    return "Please enter your address.";
                }

                if (trimmed.length < 5) {
                    return "Please enter a more complete address.";
                }

                if (trimmed.length > 250) {
                    return "Address must be less than 250 characters.";
                }

                if (containsBlockedContent(trimmed)) {
                    return "URLs and links are not allowed.";
                }

                return undefined;
            }

            case "notes": {
                if (trimmed.length > 500) {
                    return "Message must be less than 500 characters.";
                }

                // Notes are allowed to contain normal text,
                // but still block dangerous script injection.
                if (
                    SCRIPT_PATTERN.test(trimmed) ||
                    DANGEROUS_URL_PATTERN.test(trimmed)
                ) {
                    return "Please enter a valid message.";
                }

                return undefined;
            }

            default:
                return undefined;
        }
    };

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};

        (
            Object.keys(formData) as Array<
                keyof FormData
            >
        ).forEach((field) => {
            const error = validateField(
                field,
                formData[field]
            );

            if (error) {
                newErrors[field] = error;
            }
        });

        return newErrors;
    };

    /* =======================================================
       INPUT CHANGE
    ======================================================== */

    const handleChange = (
        field: keyof FormData,
        value: string
    ) => {
        let nextValue = value;

        /*
         * Phone:
         * Only allow digits and maximum 10.
         */
        if (field === "phone") {
            nextValue = value
                .replace(/\D/g, "")
                .slice(0, 10);
        }

        /*
         * Name:
         * Prevent obvious URL characters/patterns from
         * being entered.
         *
         * Validation still runs on submit.
         */
        if (field === "name") {
            nextValue = value.slice(0, 80);
        }

        /*
         * Address:
         * Maximum length.
         */
        if (field === "address") {
            nextValue = value.slice(0, 250);
        }

        /*
         * Notes:
         * Maximum length.
         */
        if (field === "notes") {
            nextValue = value.slice(0, 500);
        }

        setFormData((previous) => ({
            ...previous,
            [field]: nextValue,
        }));

        /*
         * Clear field error while typing.
         */
        if (errors[field]) {
            setErrors((previous) => ({
                ...previous,
                [field]: undefined,
                submit: undefined,
            }));
        }

        /*
         * A new input means a previous success state
         * should disappear.
         */
        if (isSuccess) {
            setIsSuccess(false);
        }
    };

    /* =======================================================
       PASTE PROTECTION
    ======================================================== */

    const handlePaste = (
        field: keyof FormData,
        event: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const pastedText =
            event.clipboardData.getData("text");

        /*
         * Name, phone and address specifically reject
         * URL-like pasted content.
         */
        if (
            ["name", "phone", "address"].includes(field) &&
            containsBlockedContent(pastedText)
        ) {
            event.preventDefault();

            setErrors((previous) => ({
                ...previous,
                [field]:
                    "URLs and links cannot be pasted here.",
            }));

            return;
        }

        /*
         * Phone should only receive digits.
         */
        if (field === "phone") {
            event.preventDefault();

            const digits = pastedText
                .replace(/\D/g, "")
                .slice(0, 10);

            handleChange("phone", digits);
        }
    };

    /* =======================================================
       SUBMIT
    ======================================================== */

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        /*
         * Prevent duplicate requests.
         */
        if (isSubmitting) return;

        setIsSuccess(false);
        setErrors({});

        const validationErrors =
            validateForm();

        if (
            Object.keys(validationErrors).length > 0
        ) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const payload = {
                form_key: FORM_KEY,
                name: cleanText(formData.name),
                phone: formData.phone.trim(),
                address: cleanText(formData.address),
                notes: cleanText(formData.notes),
                submitted_from_url:
                    window.location.href,
            };

            const response = await fetch(
                API_URL,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(payload),
                }
            );

            let responseData: unknown = null;

            try {
                responseData =
                    await response.json();
            } catch {
                responseData = null;
            }

            if (!response.ok) {
                let message =
                    "Unable to submit your enquiry. Please try again.";

                if (
                    typeof responseData === "object" &&
                    responseData !== null &&
                    "detail" in responseData
                ) {
                    const detail = (
                        responseData as {
                            detail?: unknown;
                        }
                    ).detail;

                    if (typeof detail === "string") {
                        message = detail;
                    }
                }

                throw new Error(message);
            }

            /* ===================================================
               SUCCESS
            ================================================== */

            setIsSuccess(true);

            setFormData({
                name: "",
                phone: "",
                address: "",
                notes: "",
            });

            trackConversion(
                "appointment_form_submit",
                {
                    form_key: FORM_KEY,
                    location: "contact_form",
                }
            );
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again.";

            setErrors({
                submit: message,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    /* =======================================================
       RENDER
    ======================================================== */

    return (
        <div
            className="
        relative
        overflow-hidden
        rounded-[1.5rem]
        border
        border-[#E1E8E5]
        bg-white
        shadow-[0_20px_60px_rgba(36,48,47,0.06)]
      "
        >
            {/* ===================================================
          HEADER
      ==================================================== */}

            <div
                className="
          border-b
          border-[#E9EEEC]
          bg-[#F7FAF9]
          px-5
          py-5
          sm:px-7
          sm:py-6
        "
            >
                <div
                    className="
            flex
            items-start
            gap-3
          "
                >
                    <div
                        className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#175C5A]/10
              text-[#175C5A]
            "
                    >
                        <FaPaperPlane size={16} />
                    </div>

                    <div>
                        <p
                            className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#175C5A]
              "
                        >
                            Contact Oceanic Spa
                        </p>

                        <h2
                            className="
                mt-1
                font-serif
                text-2xl
                font-normal
                text-[#24302F]
                sm:text-3xl
              "
                        >
                            Book an Appointment
                        </h2>

                        <p
                            className="
                mt-1.5
                text-xs
                leading-5
                text-[#727D7A]
              "
                        >
                            Share your details and our team will
                            get in touch with you.
                        </p>
                    </div>
                </div>
            </div>

            {/* ===================================================
          FORM
      ==================================================== */}

            <form
                onSubmit={handleSubmit}
                noValidate
                className="
          space-y-5
          p-5
          sm:p-7
        "
            >
                {/* =================================================
            SUCCESS
        ================================================== */}

                {isSuccess && (
                    <div
                        role="status"
                        aria-live="polite"
                        className="
              flex
              items-start
              gap-3
              rounded-xl
              border
              border-[#25D366]/20
              bg-[#25D366]/[0.07]
              p-4
            "
                    >
                        <FaCheckCircle
                            className="
                mt-0.5
                shrink-0
                text-[#168B45]
              "
                            size={17}
                        />

                        <div>
                            <p
                                className="
                  text-sm
                  font-bold
                  text-[#176B3B]
                "
                            >
                                Enquiry submitted successfully.
                            </p>

                            <p
                                className="
                  mt-1
                  text-xs
                  leading-5
                  text-[#528067]
                "
                            >
                                Thank you. Our team will contact you
                                shortly.
                            </p>
                        </div>
                    </div>
                )}

                {/* =================================================
            SUBMIT ERROR
        ================================================== */}

                {errors.submit && (
                    <div
                        role="alert"
                        className="
              flex
              items-start
              gap-3
              rounded-xl
              border
              border-red-200
              bg-red-50
              p-4
            "
                    >
                        <FaExclamationCircle
                            className="
                mt-0.5
                shrink-0
                text-red-500
              "
                            size={17}
                        />

                        <p
                            className="
                text-xs
                leading-5
                text-red-700
              "
                        >
                            {errors.submit}
                        </p>
                    </div>
                )}

                {/* =================================================
            NAME
        ================================================== */}

                <FieldWrapper
                    label="Full Name"
                    htmlFor="contact-name"
                    required
                    error={errors.name}
                >
                    <div className="relative">
                        <FaUser
                            aria-hidden="true"
                            className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-[#89918F]
              "
                            size={13}
                        />

                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={(event) =>
                                handleChange(
                                    "name",
                                    event.target.value
                                )
                            }
                            onPaste={(event) =>
                                handlePaste("name", event)
                            }
                            autoComplete="name"
                            maxLength={80}
                            placeholder="Enter your name"
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={
                                errors.name
                                    ? "contact-name-error"
                                    : undefined
                            }
                            className={inputClass(
                                Boolean(errors.name)
                            )}
                        />
                    </div>
                </FieldWrapper>

                {/* =================================================
            PHONE
        ================================================== */}

                <FieldWrapper
                    label="Phone Number"
                    htmlFor="contact-phone"
                    required
                    error={errors.phone}
                    hint="10-digit mobile number"
                >
                    <div className="relative">
                        <FaPhoneAlt
                            aria-hidden="true"
                            className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-[#89918F]
              "
                            size={13}
                        />

                        <span
                            className="
                pointer-events-none
                absolute
                left-10
                top-1/2
                -translate-y-1/2
                text-xs
                font-medium
                text-[#687371]
              "
                        >
                            +91
                        </span>

                        <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            inputMode="numeric"
                            value={formData.phone}
                            onChange={(event) =>
                                handleChange(
                                    "phone",
                                    event.target.value
                                )
                            }
                            onPaste={(event) =>
                                handlePaste("phone", event)
                            }
                            autoComplete="tel"
                            maxLength={10}
                            placeholder="9876543210"
                            aria-invalid={Boolean(errors.phone)}
                            aria-describedby={
                                errors.phone
                                    ? "contact-phone-error"
                                    : undefined
                            }
                            className={`
                ${inputClass(
                                Boolean(errors.phone)
                            )}
                pl-[4.5rem]
              `}
                        />
                    </div>
                </FieldWrapper>

                {/* =================================================
            ADDRESS
        ================================================== */}

                <FieldWrapper
                    label="Address"
                    htmlFor="contact-address"
                    required
                    error={errors.address}
                >
                    <div className="relative">
                        <FaMapMarkerAlt
                            aria-hidden="true"
                            className="
                pointer-events-none
                absolute
                left-4
                top-4
                text-[#89918F]
              "
                            size={13}
                        />

                        <textarea
                            id="contact-address"
                            name="address"
                            value={formData.address}
                            onChange={(event) =>
                                handleChange(
                                    "address",
                                    event.target.value
                                )
                            }
                            onPaste={(event) =>
                                handlePaste("address", event)
                            }
                            autoComplete="street-address"
                            maxLength={250}
                            rows={3}
                            placeholder="Enter your address"
                            aria-invalid={Boolean(errors.address)}
                            aria-describedby={
                                errors.address
                                    ? "contact-address-error"
                                    : undefined
                            }
                            className={`
                ${inputClass(
                                Boolean(errors.address)
                            )}
                resize-none
                pl-10
                pt-3.5
              `}
                        />
                    </div>

                    <div
                        className="
              mt-1
              text-right
              text-[9px]
              text-[#A0A8A5]
            "
                    >
                        {formData.address.length}/250
                    </div>
                </FieldWrapper>

                {/* =================================================
            NOTES
        ================================================== */}

                <FieldWrapper
                    label="Message"
                    htmlFor="contact-notes"
                    optional
                    error={errors.notes}
                >
                    <textarea
                        id="contact-notes"
                        name="notes"
                        value={formData.notes}
                        onChange={(event) =>
                            handleChange(
                                "notes",
                                event.target.value
                            )
                        }
                        maxLength={500}
                        rows={4}
                        placeholder="Tell us which treatment you are interested in..."
                        aria-invalid={Boolean(errors.notes)}
                        aria-describedby={
                            errors.notes
                                ? "contact-notes-error"
                                : undefined
                        }
                        className={`
              ${inputClass(
                            Boolean(errors.notes)
                        )}
              resize-none
            `}
                    />

                    <div
                        className="
              mt-1
              text-right
              text-[9px]
              text-[#A0A8A5]
            "
                    >
                        {formData.notes.length}/500
                    </div>
                </FieldWrapper>

                {/* =================================================
            PRIVACY NOTE
        ================================================== */}

                <p
                    className="
            text-[9px]
            leading-5
            text-[#89918F]
          "
                >
                    By submitting this form, you agree that
                    Oceanic Spa Vashi may contact you regarding
                    your enquiry or appointment.
                </p>

                {/* =================================================
            SUBMIT
        ================================================== */}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
            group
            flex
            min-h-12
            w-full
            items-center
            justify-center
            gap-2.5
            rounded-xl
            bg-[#175C5A]
            px-5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-white
            shadow-[0_10px_25px_rgba(23,92,90,0.14)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#124B49]
            hover:shadow-[0_14px_30px_rgba(23,92,90,0.18)]
            active:translate-y-0
            disabled:cursor-not-allowed
            disabled:opacity-60
            disabled:hover:translate-y-0
          "
                >
                    {isSubmitting ? (
                        <>
                            <FaSpinner
                                size={14}
                                className="animate-spin"
                            />

                            Sending...
                        </>
                    ) : (
                        <>
                            <FaPaperPlane
                                size={13}
                                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
                            />

                            Send Enquiry
                        </>
                    )}
                </button>

                {/* =================================================
            DIRECT CONTACT
        ================================================== */}

                <div
                    className="
            flex
            items-center
            justify-center
            gap-2
            border-t
            border-[#EEF1EF]
            pt-4
            text-[9px]
            text-[#89918F]
          "
                >
                    <span>
                        Prefer direct booking?
                    </span>

                    <a
                        href={`tel:${site.contact.phone}`}
                        className="
              font-bold
              text-[#3B82F6]
              transition-colors
              hover:text-[#2563EB]
            "
                    >
                        Call Us
                    </a>
                </div>
            </form>
        </div>
    );
}

/* =========================================================
   FIELD WRAPPER
========================================================= */

function FieldWrapper({
    label,
    htmlFor,
    required = false,
    optional = false,
    error,
    hint,
    children,
}: {
    label: string;
    htmlFor: string;
    required?: boolean;
    optional?: boolean;
    error?: string;
    hint?: string;
    children: React.ReactNode;
}) {
    const errorId = `${htmlFor}-error`;

    return (
        <div>
            <div
                className="
          mb-2
          flex
          items-center
          justify-between
          gap-3
        "
            >
                <label
                    htmlFor={htmlFor}
                    className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.1em]
            text-[#3E4B48]
          "
                >
                    {label}

                    {required && (
                        <span
                            className="
                ml-1
                text-[#C9826D]
              "
                        >
                            *
                        </span>
                    )}

                    {optional && (
                        <span
                            className="
                ml-1.5
                text-[8px]
                font-medium
                normal-case
                tracking-normal
                text-[#A0A8A5]
              "
                        >
                            (optional)
                        </span>
                    )}
                </label>

                {hint && !error && (
                    <span
                        className="
              text-[8px]
              text-[#A0A8A5]
            "
                    >
                        {hint}
                    </span>
                )}
            </div>

            {children}

            {error && (
                <p
                    id={errorId}
                    role="alert"
                    className="
            mt-1.5
            flex
            items-center
            gap-1.5
            text-[9px]
            font-medium
            text-red-600
          "
                >
                    <FaExclamationCircle
                        size={10}
                    />

                    {error}
                </p>
            )}
        </div>
    );
}

/* =========================================================
   INPUT CLASS
========================================================= */

function inputClass(hasError: boolean) {
    return `
    min-h-12
    w-full
    rounded-xl
    border
    bg-[#FAFCFB]
    px-4
    text-sm
    text-[#24302F]
    outline-none
    placeholder:text-[#A5AEAB]
    transition-all
    duration-200
    ${hasError
            ? `
          border-red-300
          focus:border-red-400
          focus:ring-4
          focus:ring-red-500/10
        `
            : `
          border-[#DDE5E1]
          focus:border-[#175C5A]/50
          focus:bg-white
          focus:ring-4
          focus:ring-[#175C5A]/10
        `
        }
  `;
}
