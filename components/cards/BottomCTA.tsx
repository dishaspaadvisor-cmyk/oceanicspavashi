"use client";

import Link from "next/link";
import {
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { site } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/contact";

interface BottomCTAProps {
  title?: string;
  description?: string;
  whatsappMessage?: string;
  className?: string;
}

const defaultMessage =
  "Hello Oceanic Spa Vashi, I would like to know more about your spa services and appointment availability.";

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

export default function BottomCTA({
  title = "Ready to make time for yourself?",
  description = "Call or WhatsApp Oceanic Spa Vashi to check current treatment availability, pricing and appointment slots.",
  whatsappMessage = defaultMessage,
  className = "",
}: BottomCTAProps) {
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <section
      aria-labelledby="bottom-cta-heading"
      className={`
        bg-[#FBF9F5]
        px-4
        py-10
        sm:px-6
        sm:py-12
        lg:px-8
        lg:py-14
        ${className}
      `}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-[1.25rem]
            border
            border-[#D8C2A0]/45
            bg-[#123B3A]
            shadow-[0_22px_70px_rgba(23,92,90,0.16)]
          "
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[#175C5A] via-[#123B3A] to-[#0B2322]"
          />

          <div
            aria-hidden="true"
            className="absolute -right-24 -top-28 h-72 w-72 rounded-full border border-white/[0.08]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#D8C2A0]/10 blur-[90px]"
          />

          <div
            className="
              relative
              grid
              gap-7
              px-5
              py-8
              sm:px-7
              sm:py-10
              lg:grid-cols-[1fr_auto]
              lg:items-center
              lg:px-10
              lg:py-11
            "
          >
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-px w-8 bg-[#D8C2A0]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D8C2A0]">
                  Oceanic Spa Vashi
                </span>
              </div>

              <h2
                id="bottom-cta-heading"
                className="
                  max-w-2xl
                  font-serif
                  text-3xl
                  font-normal
                  leading-tight
                  !text-white
                  sm:text-4xl
                  lg:text-[2.7rem]
                "
              >
                {title}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
                {description}
              </p>
            </div>

            <div
              className="
                grid
                gap-2.5
                sm:grid-cols-3
                lg:w-[560px]
              "
            >
              <a
                href={`tel:${site.contact.phone}`}
                onClick={() =>
                  trackConversion("call_click", {
                    location: "bottom_cta",
                    phone: site.contact.phone,
                  })
                }
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#3B82F6]
                  px-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  shadow-[0_10px_25px_rgba(59,130,246,0.18)]
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#2563EB]
                "
              >
                <FaPhoneAlt size={14} />
                Call Now
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackConversion("whatsapp_click", {
                    location: "bottom_cta",
                  })
                }
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#25D366]
                  px-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  shadow-[0_10px_25px_rgba(37,211,102,0.18)]
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#1FB85A]
                "
              >
                <FaWhatsapp size={15} />
                WhatsApp
              </a>

              <Link
                href="/contact"
                onClick={() =>
                  trackConversion("appointment_click", {
                    location: "bottom_cta",
                  })
                }
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#D8C2A0]/35
                  bg-white/10
                  px-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#F3DEC0]
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-white/15
                "
              >
                <FaCalendarAlt size={14} />
                Book
                <FaExternalLinkAlt size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
