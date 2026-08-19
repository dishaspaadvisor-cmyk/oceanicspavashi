"use client";

import Link from "next/link";
import {
  FaExternalLinkAlt as FiArrowUpRight,
  FaCalendarAlt as FiCalendar,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
} from "react-icons/fa";

import { site } from "@/data/site";

/* =========================================================
   ANALYTICS
========================================================= */

const trackConversion = (
  eventName: string,
  params?: Record<string, string>
) => {
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
};

/* =========================================================
   COMPONENT
========================================================= */

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${
    site.contact.whatsapp
  }?text=${encodeURIComponent(
    "Hello Oceanic Spa Vashi, I would like to book an appointment."
  )}`;

  /* =======================================================
     EVENTS
  ======================================================= */

  const handleCallClick = () => {
    trackConversion("call_click", {
      location: "mobile_bottom_bar",
      phone: site.contact.phone,
    });
  };

  const handleWhatsAppClick = () => {
    trackConversion("whatsapp_click", {
      location: "mobile_bottom_bar",
    });
  };

  const handleBookingClick = () => {
    trackConversion("appointment_click", {
      location: "mobile_bottom_bar",
    });
  };

  return (
    <div
      className="
        fixed
        inset-x-0
        bottom-0
        z-[60]
        lg:hidden
      "
    >
      {/* ===================================================
          MAIN BAR
      ==================================================== */}

      <div
        className="
          relative
          border-t
          border-[#E5E0D7]
          bg-white/95
          px-2
          pt-2.5
          shadow-[0_-12px_35px_rgba(36,48,47,0.10)]
          backdrop-blur-xl
        "
      >
        {/* =================================================
            TOP ACCENT
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-0
            h-[2px]
            w-20
            -translate-x-1/2
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#175C5A]
            to-transparent
          "
        />

        {/* =================================================
            ACTIONS
        ================================================== */}

        <div className="mx-auto grid max-w-lg grid-cols-3 gap-2">

          {/* =================================================
              CALL
          ================================================== */}

          <a
            href={`tel:${site.contact.phone}`}
            onClick={handleCallClick}
            aria-label={`Call ${site.name}`}
            className="
              group
              flex
              h-12
              items-center
              justify-center
              gap-1.5
              rounded-xl
              border
              border-[#C8DCF0]
              bg-[#EEF5FC]
              text-[11px]
              font-bold
              text-[#3478C5]
              transition-all
              duration-200
              active:scale-[0.96]
              hover:border-[#3478C5]
              hover:bg-[#3478C5]
              hover:text-white
            "
          >
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                bg-white/80
                transition-transform
                duration-200
                group-hover:scale-105
              "
            >
              <FiPhone size={15} />
            </span>

            <span>Call</span>
          </a>

          {/* =================================================
              WHATSAPP
          ================================================== */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            aria-label={`WhatsApp ${site.name}`}
            className="
              group
              flex
              h-12
              items-center
              justify-center
              gap-1.5
              rounded-xl
              border
              border-[#B9DDCC]
              bg-[#F1FAF5]
              text-[11px]
              font-bold
              text-[#247B55]
              transition-all
              duration-200
              active:scale-[0.96]
              hover:border-[#249B68]
              hover:bg-[#249B68]
              hover:text-white
            "
          >
            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                bg-[#249B68]
                text-white
                transition-transform
                duration-200
                group-hover:scale-105
              "
            >
              <FiMessageCircle size={15} />
            </span>

            <span>WhatsApp</span>
          </a>

          {/* =================================================
              BOOK APPOINTMENT
          ================================================== */}

          <Link
            href="/contact"
            onClick={handleBookingClick}
            aria-label="Book an appointment"
            className="
              group
              relative
              flex
              h-12
              items-center
              justify-center
              gap-1.5
              overflow-hidden
              rounded-xl
              bg-[#175C5A]
              text-[11px]
              font-bold
              text-white
              shadow-[0_8px_22px_rgba(23,92,90,0.20)]
              transition-all
              duration-200
              active:scale-[0.96]
              hover:bg-[#104846]
              hover:shadow-[0_10px_28px_rgba(23,92,90,0.25)]
            "
          >
            {/* Shine */}
            <span
              aria-hidden="true"
              className="
                absolute
                inset-y-0
                -left-10
                w-8
                skew-x-[-20deg]
                bg-white/20
                transition-all
                duration-700
                group-hover:left-[115%]
              "
            />

            <span
              className="
                relative
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                bg-white/10
                transition-transform
                duration-200
                group-hover:scale-105
              "
            >
              <FiCalendar size={15} />
            </span>

            <span className="relative">
              Book
            </span>

            <FiArrowUpRight
              size={12}
              className="
                relative
                transition-transform
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>

        {/* =================================================
            BRAND / TRUST LINE
        ================================================== */}

        <div
          className="
            flex
            h-7
            items-center
            justify-center
          "
        >
          <div className="flex items-center gap-2">
            <span className="h-px w-4 bg-[#D8C2A0]" />

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#89918F]
              "
            >
              Oceanic Spa · Vashi
            </span>

            <span className="h-px w-4 bg-[#D8C2A0]" />
          </div>
        </div>

        {/* =================================================
            SAFE AREA
        ================================================== */}

        <div className="h-[env(safe-area-inset-bottom)]" />
      </div>
    </div>
  );
}