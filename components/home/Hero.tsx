"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaChevronDown,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";

import { heroTrustPoints } from "@/data/home";
import { site } from "@/data/site";

/* =========================================================
   GOOGLE CONVERSION TRACKING
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
   HERO
========================================================= */

export default function Hero() {
  const whatsappUrl = `https://wa.me/${
    site.contact.whatsapp
  }?text=${encodeURIComponent(
    "Hello Oceanic Spa Vashi, I would like to book a spa appointment."
  )}`;

  /* =======================================================
     CONVERSION HANDLERS
  ======================================================== */

  const handleCallClick = () => {
    trackConversion("call_click", {
      location: "hero",
      phone: site.contact.phone,
    });
  };

  const handleWhatsAppClick = () => {
    trackConversion("whatsapp_click", {
      location: "hero",
    });
  };

  const handleBookingClick = () => {
    trackConversion("appointment_click", {
      location: "hero",
    });
  };

  return (
    <section
      className="
        relative
        isolate
        min-h-[100svh]
        overflow-hidden
        bg-[#0c0b09]
        text-white
      "
      aria-labelledby="hero-heading"
    >
      {/* =====================================================
          DESKTOP HERO IMAGE
      ====================================================== */}

      <div className="absolute inset-0 -z-20 hidden md:block">
        <Image
          src="/images/hero-desktop.png"
          alt="Premium spa and massage experience at Oceanic Spa Vashi"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />
      </div>

      {/* =====================================================
          MOBILE HERO IMAGE
      ====================================================== */}

      <div className="absolute inset-0 -z-20 md:hidden">
        <Image
          src="/images/hero-phone.png"
          alt="Relaxing massage experience at Oceanic Spa Vashi"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />
      </div>

      {/* =====================================================
          IMAGE OVERLAYS
      ====================================================== */}

      {/* Main darkness */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          bg-black/45
          md:bg-black/40
        "
      />

      {/* Left content readability */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-[#0b0a08]/95
          via-[#0b0a08]/55
          to-transparent
        "
      />

      {/* Bottom cinematic fade */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          -z-10
          h-48
          bg-gradient-to-t
          from-[#0c0b09]
          via-[#0c0b09]/60
          to-transparent
        "
      />

      {/* Top subtle fade */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          top-0
          -z-10
          h-32
          bg-gradient-to-b
          from-[#0c0b09]/55
          to-transparent
        "
      />

      {/* =====================================================
          DECORATIVE GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/4
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#d8c2a0]/10
          blur-[130px]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          mx-auto
          flex
          min-h-[100svh]
          max-w-7xl
          items-center
          px-5
          pb-28
          pt-28
          sm:px-8
          lg:px-10
          lg:pb-16
          lg:pt-32
        "
      >
        <div className="w-full max-w-3xl">

          {/* =================================================
              LOCATION
          ================================================== */}

          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#d8c2a0]/30
              bg-black/20
              px-3.5
              py-2
              backdrop-blur-md
            "
          >
            <FaMapMarkerAlt
              size={12}
              className="text-[#d8c2a0]"
              aria-hidden="true"
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/80
                sm:text-[11px]
              "
            >
              Vashi · Navi Mumbai
            </span>
          </div>

          {/* =================================================
              RATING / TRUST
          ================================================== */}

          <div
            className="
              mb-5
              flex
              items-center
              gap-3
            "
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map(
                (_, index) => (
                  <FaStar
                    key={index}
                    size={12}
                    className="
                      text-[#d8c2a0]
                    "
                    aria-hidden="true"
                  />
                )
              )}
            </div>

            <span
              aria-hidden="true"
              className="
                h-3
                w-px
                bg-white/20
              "
            />

            <span
              className="
                text-[11px]
                font-medium
                text-white/60
              "
            >
              Premium Spa Experience
            </span>
          </div>

          {/* =================================================
              H1
          ================================================== */}

          <h1
            id="hero-heading"
            className="
              max-w-3xl
              !text-white
              text-[2.55rem]
              font-light
              leading-[1.05]
              tracking-normal
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
          "
          >
            Premium Spa &amp;{" "}
            <span className="text-[#d8c2a0]">
              Massage
            </span>{" "}
            in Vashi, Navi Mumbai
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/70
              sm:text-base
              sm:leading-8
            "
          >
            Discover a relaxing spa experience at{" "}
            <strong className="font-medium text-white/90">
              {site.name}
            </strong>
            . Choose from our range of massage and
            wellness treatments in a comfortable,
            private and welcoming environment.
          </p>

          {/* =================================================
              PRIMARY CTAs
          ================================================== */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            {/* Book Appointment */}

            <Link
              href="/contact"
              onClick={handleBookingClick}
              className="
                group
                flex
                h-13
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#d8c2a0]
                px-6
                text-xs
                font-bold
                tracking-wide
                text-[#173c3a]
                shadow-[0_12px_35px_rgba(216,194,160,0.20)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#e4d0b0]
                hover:shadow-[0_16px_45px_rgba(216,194,160,0.30)]
                active:translate-y-0
              "
            >
              <FaCalendarAlt
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                aria-hidden="true"
              />

              Book an Appointment

              <FaArrowRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                aria-hidden="true"
              />
            </Link>

            {/* WhatsApp */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="
                group
                flex
                h-13
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#25D366]/50
                bg-[#25D366]/15
                px-6
                text-xs
                font-semibold
                tracking-wide
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#25D366]
                hover:bg-[#25D366]
                hover:text-white
                active:translate-y-0
              "
            >
              <FaWhatsapp
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                aria-hidden="true"
              />

              WhatsApp Us
            </a>
          </div>

          {/* =================================================
              CALL CTA
          ================================================== */}

          <div className="mt-5 flex items-center">
            <a
              href={`tel:${site.contact.phone}`}
              onClick={handleCallClick}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                py-2
                text-sm
                text-white/65
                transition-colors
                hover:text-white
              "
            >
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#3b82f6]/40
                  bg-[#3b82f6]/15
                  text-[#60a5fa]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:border-[#3b82f6]
                  group-hover:bg-[#3b82f6]
                  group-hover:text-white
                "
              >
                <FaPhoneAlt
                  size={13}
                  aria-hidden="true"
                />
              </span>

              <span>
                <span
                  className="
                    block
                    text-[10px]
                    uppercase
                    tracking-wider
                    text-white/40
                  "
                >
                  Call for appointments
                </span>

                <span
                  className="
                    mt-0.5
                    block
                    font-medium
                    text-white/85
                  "
                >
                  {site.contact.phone}
                </span>
              </span>
            </a>
          </div>

          {/* =================================================
              TRUST POINTS
          ================================================== */}

          <div
            className="
              mt-9
              grid
              max-w-2xl
              grid-cols-2
              gap-x-5
              gap-y-3
              border-t
              border-white/10
              pt-6
              sm:flex
              sm:flex-wrap
              sm:gap-x-7
            "
          >
            {heroTrustPoints.map(
              (point) => (
                <div
                  key={point}
                  className="
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    text-white/55
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#d8c2a0]
                    "
                  />

                  {point}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          DESKTOP LOCATION CARD
      ====================================================== */}

      <div
        className="
          absolute
          bottom-12
          right-8
          hidden
          lg:block
          xl:right-12
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-black/20
            px-5
            py-4
            backdrop-blur-md
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#d8c2a0]/25
              bg-[#d8c2a0]/10
              text-[#d8c2a0]
            "
          >
            <FaMapMarkerAlt
              size={15}
              aria-hidden="true"
            />
          </div>

          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#d8c2a0]
              "
            >
              Visit Oceanic Spa
            </p>

            <p
              className="
                mt-1
                text-xs
                text-white/55
              "
            >
              {site.address.area},{" "}
              {site.address.city}
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/30
          lg:flex
        "
      >
        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.25em]
          "
        >
          Explore
        </span>

        <FaChevronDown
          size={13}
          className="
            animate-bounce
            text-[#d8c2a0]/80
          "
          aria-hidden="true"
        />
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-x-0
          bottom-0
          h-20
          bg-gradient-to-t
          from-[#0c0b09]
          to-transparent
        "
      />
    </section>
  );
}