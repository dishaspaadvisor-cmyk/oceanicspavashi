"use client";

import {
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { site } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/contact";

interface FloatingCTAProps {
  message?: string;
  className?: string;
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
  gtag("event", eventName, params);
}

export default function FloatingCTA({
  message = "Hello Oceanic Spa Vashi, I would like to enquire about spa treatments and appointment availability.",
  className = "",
}: FloatingCTAProps) {
  const whatsappUrl = getWhatsAppUrl(message);

  const handleCallClick = () => {
    trackConversion("call_click", {
      location: "floating_cta",
      phone: site.contact.phone,
    });
  };

  const handleWhatsAppClick = () => {
    trackConversion("whatsapp_click", {
      location: "floating_cta",
    });
  };

  return (
    <div
      aria-label="Quick contact options"
      style={{
        position: "fixed",
        zIndex: 50,
      }}
      className={`
        pointer-events-none
        fixed
        z-50
        inset-x-3
        bottom-[calc(0.75rem+env(safe-area-inset-bottom))]
        md:inset-x-auto
        md:bottom-auto
        md:right-5
        md:top-1/2
        md:-translate-y-1/2
        lg:inset-x-auto
        lg:right-6
        ${className}
      `}
    >
      <div
        className="
          pointer-events-auto
          grid
          grid-cols-2
          gap-2.5
          rounded-[1.15rem]
          border
          border-white/80
          bg-white/95
          p-2
          shadow-[0_18px_48px_rgba(36,48,47,0.18)]
          backdrop-blur-xl
          md:w-16
          md:grid-cols-1
          md:rounded-full
          md:border-[#E5E0D7]
          md:bg-white/90
          md:p-2
          lg:w-[4.25rem]
        "
      >
        <a
          href={`tel:${site.contact.phone}`}
          onClick={handleCallClick}
          aria-label={`Call ${site.name}`}
          title="Call Oceanic Spa"
          className="
            group
            inline-flex
            min-h-11
            items-center
            justify-center
            gap-2
            rounded-[0.85rem]
            border
            border-[#C8DCF0]
            bg-[#3B82F6]
            px-3
            text-[10px]
            font-bold
            uppercase
            tracking-[0.1em]
            text-white
            transition-all
            hover:-translate-y-0.5
            hover:border-[#2563EB]
            hover:bg-[#2563EB]
            hover:text-white
            active:scale-[0.98]
            md:h-12
            md:min-h-12
            md:w-12
            md:rounded-full
            md:p-0
            md:shadow-[0_10px_24px_rgba(59,130,246,0.22)]
          "
        >
          <FaPhoneAlt size={15} />
          <span className="md:sr-only">Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          aria-label={`WhatsApp ${site.name}`}
          title="WhatsApp Oceanic Spa"
          className="
            group
            inline-flex
            min-h-11
            items-center
            justify-center
            gap-2
            rounded-[0.85rem]
            bg-[#25D366]
            px-3
            text-[10px]
            font-bold
            uppercase
            tracking-[0.1em]
            text-white
            shadow-[0_8px_22px_rgba(37,211,102,0.20)]
            transition-all
            hover:-translate-y-0.5
            hover:bg-[#1FB85A]
            active:scale-[0.98]
            md:h-12
            md:min-h-12
            md:w-12
            md:rounded-full
            md:p-0
            md:shadow-[0_10px_24px_rgba(37,211,102,0.22)]
          "
        >
          <FaWhatsapp size={15} />
          <span className="md:sr-only">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
