"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaCalendarAlt as FiCalendar,
  FaChevronDown as FiChevronDown,
  FaClock as FiClock,
  FaMapMarkerAlt as FiMapPin,
  FaBars as FiMenu,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
  FaTimes as FiX,
  FaExternalLinkAlt as FiArrowUpRight,
} from "react-icons/fa";

import { site } from "@/data/site";

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    dropdown: true,
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Offers",
    href: "/offers",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   SERVICE DROPDOWN
========================================================= */

const serviceLinks = [
  {
    label: "Deep Tissue Massage",
    href: "/services/deep-tissue-massage-in-oceanicspa-vashi",
    description: "Release deep tension",
  },
  {
    label: "Full Body Oil Massage",
    href: "/services/full-body-oil-massage-in-oceanicspa-vashi",
    description: "Relax and rejuvenate",
  },
  {
    label: "Swedish Massage",
    href: "/services/swedish-massage-in-oceanicspa-vashi",
    description: "Classic relaxation",
  },
  {
    label: "Balinese Massage",
    href: "/services/balinese-massage-in-oceanicspa-vashi",
    description: "Traditional wellness",
  },
  {
    label: "Lomi-Lomi Massage",
    href: "/services/lomi-lomi-massage-in-oceanicspa-vashi",
    description: "Flowing Hawaiian technique",
  },
  {
    label: "Four Hand Massage",
    href: "/services/four-hand-massage-in-oceanicspa-vashi",
    description: "A unique experience",
  },
];

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
   NAVBAR
========================================================= */

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     BODY LOCK
  ======================================================= */

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* =======================================================
     HELPERS
  ======================================================= */

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  /* =======================================================
     CONVERSION EVENTS
  ======================================================= */

  const handleCallClick = () => {
    trackConversion("call_click", {
      location: "navbar",
      phone: site.contact.phone,
    });
  };

  const handleWhatsAppClick = () => {
    trackConversion("whatsapp_click", {
      location: "navbar",
    });
  };

  const handleBookingClick = () => {
    trackConversion("appointment_click", {
      location: "navbar",
    });
  };

  /* =======================================================
     WHATSAPP
  ======================================================= */

  const whatsappUrl = `https://wa.me/${
    site.contact.whatsapp
  }?text=${encodeURIComponent(
    "Hello Oceanic Spa Vashi, I would like to book an appointment."
  )}`;

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        style={{
          position: "fixed",
          zIndex: 50,
        }}
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-300
          ${
            isScrolled
              ? "pt-2 sm:pt-3"
              : "pt-0"
          }
        `}
      >
        <div
          className={`
            mx-auto
            transition-all
            duration-300
            ${
              isScrolled
                ? "max-w-[1240px] px-3 sm:px-5 lg:px-6"
                : "max-w-7xl px-0 sm:px-4 lg:px-8"
            }
          `}
        >
          {/* =================================================
              DESKTOP TOP INFO
          ================================================== */}

          <div
            className={`
              hidden
              items-center
              justify-between
              border-b
              border-[#E5E0D7]
              bg-white
              px-6
              text-[10px]
              text-[#89918F]
              transition-all
              duration-300
              lg:flex
              ${
                isScrolled
                  ? "rounded-t-2xl"
                  : ""
              }
            `}
            style={{
              height: isScrolled ? 0 : 34,
              opacity: isScrolled ? 0 : 1,
              overflow: "hidden",
            }}
          >
            <div className="flex items-center gap-2">
              <FiMapPin
                size={12}
                className="text-[#175C5A]"
              />

              <span>
                {site.address.area},{" "}
                {site.address.city}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FiClock
                  size={12}
                  className="text-[#D8C2A0]"
                />

                <span>
                  Open Daily ·{" "}
                  {site.hours[0]?.open} –{" "}
                  {site.hours[0]?.close}
                </span>
              </div>

              <a
                href={`tel:${site.contact.phone}`}
                onClick={handleCallClick}
                className="
                  flex
                  items-center
                  gap-2
                  font-semibold
                  text-[#5F6A68]
                  transition-colors
                  hover:text-[#3478C5]
                "
              >
                <FiPhone
                  size={12}
                  className="text-[#3478C5]"
                />

                {site.contact.phone}
              </a>
            </div>
          </div>

          {/* =================================================
              MAIN NAVIGATION
          ================================================== */}

          <div
            className={`
              relative
              border
              bg-white/95
              backdrop-blur-xl
              transition-all
              duration-300
              ${
                isScrolled
                  ? `
                    rounded-2xl
                    border-[#DDE4E2]
                    shadow-[0_14px_45px_rgba(36,48,47,0.10)]
                  `
                  : `
                    border-transparent
                    shadow-[0_8px_30px_rgba(36,48,47,0.04)]
                    lg:border-[#E5E0D7]
                  `
              }
            `}
          >
            {/* =================================================
                OCEAN ACCENT LINE
            ================================================== */}

            <div
              className={`
                absolute
                left-1/2
                top-0
                h-[2px]
                -translate-x-1/2
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-[#175C5A]
                to-transparent
                transition-all
                duration-500
                ${
                  isScrolled
                    ? "w-24"
                    : "w-32"
                }
              `}
            />

            <div
              className="
                flex
                h-[68px]
                items-center
                justify-between
                px-4
                sm:h-[74px]
                sm:px-6
                lg:h-[78px]
                lg:px-7
              "
            >
              {/* =================================================
                  LOGO
              ================================================== */}

              <Link
                href="/"
                onClick={closeMenu}
                aria-label={`${site.name} home`}
                className="
                  group
                  relative
                  flex
                  shrink-0
                  items-center
                "
              >
                <div
                  className="
                    absolute
                    -inset-4
                    rounded-full
                    bg-[#175C5A]/[0.07]
                    opacity-0
                    blur-2xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    group-focus-visible:opacity-100
                  "
                />

                <Image
                  src={site.branding.logo}
                  alt={site.branding.logoAlt}
                  width={180}
                  height={72}
                  className="
                    relative
                    h-10
                    w-auto
                    object-contain
                    sm:h-11
                    lg:h-12
                  "
                />
              </Link>

              {/* =================================================
                  DESKTOP NAVIGATION
              ================================================== */}

              <nav
                className="hidden lg:block"
                aria-label="Main navigation"
              >
                <div className="flex items-center gap-0.5">
                  {navigation.map((item) => {
                    if (item.dropdown) {
                      return (
                        <div
                          key={item.href}
                          className="group relative"
                          onMouseEnter={() =>
                            setIsServicesOpen(true)
                          }
                          onMouseLeave={() =>
                            setIsServicesOpen(false)
                          }
                        >
                          {/* Services trigger */}

                          <Link
                            href={item.href}
                            className="
                              relative
                              flex
                              items-center
                              gap-1.5
                              rounded-xl
                              px-4
                              py-3
                              text-[12px]
                              font-semibold
                              tracking-wide
                              !text-[#4D5A58]
                              transition-all
                              duration-200
                              hover:bg-[#EEF7F5]
                              hover:!text-[#175C5A]
                            "
                          >
                            {item.label}

                            <FiChevronDown
                              size={13}
                              className={`
                                transition-transform
                                duration-200
                                ${
                                  isServicesOpen
                                    ? "rotate-180"
                                    : ""
                                }
                              `}
                            />
                          </Link>

                          {/* =================================================
                              DESKTOP SERVICES DROPDOWN
                          ================================================== */}

                          <div
                            className={`
                              absolute
                              left-1/2
                              top-full
                              w-[590px]
                              -translate-x-1/2
                              pt-3
                              transition-all
                              duration-200
                              ${
                                isServicesOpen
                                  ? "visible translate-y-0 opacity-100"
                                  : "invisible -translate-y-2 opacity-0"
                              }
                            `}
                          >
                            <div
                              className="
                                overflow-hidden
                                rounded-2xl
                                border
                                border-[#DDE4E2]
                                bg-white
                                p-2
                                shadow-[0_25px_70px_rgba(36,48,47,0.14)]
                              "
                            >
                              {/* Dropdown Header */}

                              <div
                                className="
                                  flex
                                  items-center
                                  justify-between
                                  border-b
                                  border-[#E5E0D7]
                                  px-4
                                  py-3.5
                                "
                              >
                                <div>
                                  <p
                                    className="
                                      text-[9px]
                                      font-bold
                                      uppercase
                                      tracking-[0.22em]
                                      text-[#175C5A]
                                    "
                                  >
                                    Our Treatments
                                  </p>

                                  <p
                                    className="
                                      mt-1
                                      text-xs
                                      text-[#89918F]
                                    "
                                  >
                                    Discover your preferred
                                    way to relax
                                  </p>
                                </div>

                                <Link
                                  href="/services"
                                  onClick={() =>
                                    setIsServicesOpen(false)
                                  }
                                  className="
                                    rounded-lg
                                    bg-[#EEF7F5]
                                    px-3
                                    py-2
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-[#175C5A]
                                    transition-colors
                                    hover:bg-[#175C5A]
                                    hover:text-white
                                  "
                                >
                                  View All
                                </Link>
                              </div>

                              {/* Services */}

                              <div className="grid grid-cols-2 gap-1 p-1">
                                {serviceLinks.map(
                                  (service, index) => (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      onClick={() =>
                                        setIsServicesOpen(
                                          false
                                        )
                                      }
                                      className="
                                        group/item
                                        flex
                                        items-start
                                        gap-3
                                        rounded-xl
                                        p-3.5
                                        transition-all
                                        duration-200
                                        hover:bg-[#F6FAF9]
                                      "
                                    >
                                      {/* Number */}

                                      <span
                                        className="
                                          flex
                                          h-8
                                          w-8
                                          shrink-0
                                          items-center
                                          justify-center
                                          rounded-lg
                                          border
                                          border-[#DDE4E2]
                                          bg-[#FBF9F5]
                                          text-[10px]
                                          font-bold
                                          text-[#175C5A]
                                          transition-all
                                          group-hover/item:border-[#175C5A]/20
                                          group-hover/item:bg-[#EEF7F5]
                                        "
                                      >
                                        {String(
                                          index + 1
                                        ).padStart(2, "0")}
                                      </span>

                                      <span>
                                        <span
                                          className="
                                            block
                                            text-[12px]
                                            font-semibold
                                            text-[#344341]
                                            transition-colors
                                            group-hover/item:text-[#175C5A]
                                          "
                                        >
                                          {service.label}
                                        </span>

                                        <span
                                          className="
                                            mt-1
                                            block
                                            text-[10px]
                                            text-[#89918F]
                                          "
                                        >
                                          {service.description}
                                        </span>
                                      </span>
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="
                          rounded-xl
                          px-4
                          py-3
                          text-[12px]
                          font-semibold
                          tracking-wide
                          !text-[#4D5A58]
                          transition-all
                          duration-200
                          hover:bg-[#EEF7F5]
                          hover:!text-[#175C5A]
                        "
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* =================================================
                  DESKTOP ACTIONS
              ================================================== */}

              <div className="hidden items-center gap-2 lg:flex">
                {/* Call */}

                <a
                  href={`tel:${site.contact.phone}`}
                  onClick={handleCallClick}
                  aria-label={`Call ${site.name}`}
                  className="
                    group
                    flex
                    h-10
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#C8DCF0]
                    bg-[#EEF5FC]
                    px-3.5
                    text-[11px]
                    font-bold
                    !text-[#3478C5]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#3478C5]
                    hover:bg-[#3478C5]
                    hover:!text-white
                  "
                >
                  <FiPhone
                    size={14}
                    className="
                      transition-transform
                      group-hover:scale-110
                    "
                  />

                  Call
                </a>

                {/* WhatsApp */}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  aria-label="Contact Oceanic Spa Vashi on WhatsApp"
                  className="
                    group
                    flex
                    h-10
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#B9DDCC]
                    bg-[#F1FAF5]
                    px-3.5
                    text-[11px]
                    font-bold
                    !text-[#247B55]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#249B68]
                    hover:bg-[#249B68]
                    hover:!text-white
                  "
                >
                  <FiMessageCircle
                    size={15}
                    className="
                      transition-transform
                      group-hover:scale-110
                    "
                  />

                  WhatsApp
                </a>
              </div>

              {/* =================================================
                  MOBILE ACTIONS
              ================================================== */}

              <div className="flex items-center gap-2 lg:hidden">

                {/* Call */}

                <a
                  href={`tel:${site.contact.phone}`}
                  onClick={handleCallClick}
                  aria-label={`Call ${site.name}`}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#C8DCF0]
                    bg-[#EEF5FC]
                    text-[#3478C5]
                    transition-all
                    active:scale-95
                    hover:border-[#3478C5]/40
                    hover:bg-[#3478C5]
                    hover:text-white
                  "
                >
                  <FiPhone size={16} />
                </a>

                {/* WhatsApp */}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  aria-label={`WhatsApp ${site.name}`}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#25D366]
                    text-white
                    shadow-[0_7px_18px_rgba(37,211,102,0.18)]
                    transition-all
                    active:scale-95
                    hover:bg-[#1FB85A]
                  "
                >
                  <FiMessageCircle size={17} />
                </a>

                {/* Menu */}

                <button
                  type="button"
                  onClick={() =>
                    setIsMenuOpen(
                      (current) => !current
                    )
                  }
                  aria-label={
                    isMenuOpen
                      ? "Close navigation menu"
                      : "Open navigation menu"
                  }
                  aria-expanded={isMenuOpen}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#DDE4E2]
                    bg-white
                    text-[#344341]
                    transition-all
                    active:scale-95
                    hover:border-[#175C5A]/30
                    hover:bg-[#EEF7F5]
                    hover:text-[#175C5A]
                  "
                >
                  {isMenuOpen ? (
                    <FiX size={20} />
                  ) : (
                    <FiMenu size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =======================================================
          MOBILE OVERLAY
      ======================================================= */}

      <div
        style={{
          position: "fixed",
          zIndex: 55,
        }}
        className={`
          fixed
          inset-0
          z-[55]
          bg-[#123B3A]/20
          backdrop-blur-[4px]
          transition-all
          duration-300
          lg:hidden
          ${
            isMenuOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />

      {/* =======================================================
          MOBILE DRAWER
      ======================================================= */}

      <aside
        style={{
          position: "fixed",
          zIndex: 60,
        }}
        className={`
          fixed
          right-0
          top-0
          z-[60]
          flex
          h-dvh
          w-[88%]
          max-w-[390px]
          flex-col
          overflow-hidden
          border-l
          border-[#DDE4E2]
          bg-[#FBF9F5]
          shadow-[-20px_0_70px_rgba(36,48,47,0.15)]
          transition-all
          duration-300
          ease-out
          lg:hidden
          ${
            isMenuOpen
              ? "visible translate-x-0 opacity-100"
              : "invisible translate-x-0 opacity-0 pointer-events-none"
          }
        `}
        aria-label="Mobile navigation"
      >
        {/* =====================================================
            DECORATIVE BACKGROUND
        ====================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            top-20
            h-64
            w-64
            rounded-full
            bg-[#175C5A]/[0.07]
            blur-[80px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-24
            bottom-40
            h-56
            w-56
            rounded-full
            bg-[#C9826D]/[0.05]
            blur-[80px]
          "
        />

        {/* =====================================================
            MOBILE HEADER
        ====================================================== */}

        <div
          className="
            relative
            flex
            h-[72px]
            shrink-0
            items-center
            justify-between
            border-b
            border-[#E5E0D7]
            bg-white/90
            px-5
            backdrop-blur-xl
          "
        >
          <Link
            href="/"
            onClick={closeMenu}
            aria-label={`${site.name} home`}
          >
            <Image
              src={site.branding.logo}
              alt={site.branding.logoAlt}
              width={180}
              height={72}
              className="
                h-11
                w-auto
                object-contain
              "
            />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-[#DDE4E2]
              bg-white
              text-[#344341]
              transition-all
              hover:border-[#175C5A]/30
              hover:bg-[#EEF7F5]
              hover:text-[#175C5A]
            "
          >
            <FiX size={20} />
          </button>
        </div>

        {/* =====================================================
            MOBILE CONTENT
        ====================================================== */}

        <div
          className="
            relative
            flex-1
            overflow-y-auto
            px-5
            py-6
          "
        >
          {/* Welcome card */}

          <div
            className="
              mb-6
              overflow-hidden
              rounded-2xl
              border
              border-[#DDE4E2]
              bg-gradient-to-br
              from-[#EEF7F5]
              to-white
              p-4
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#175C5A]
                  "
                >
                  Oceanic Spa Vashi
                </p>

                <p
                  className="
                    mt-1.5
                    font-serif
                    text-sm
                    text-[#24302F]
                  "
                >
                  {site.tagline}
                </p>
              </div>

              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#175C5A]
                  shadow-[0_3px_12px_rgba(36,48,47,0.06)]
                "
              >
                <FiMapPin size={14} />
              </span>
            </div>

            <div
              className="
                mt-3
                flex
                items-start
                gap-2
                border-t
                border-[#DDE4E2]
                pt-3
                text-[11px]
                leading-5
                text-[#6F7A78]
              "
            >
              <FiMapPin
                size={13}
                className="
                  mt-0.5
                  shrink-0
                  text-[#C9826D]
                "
              />

              <span>
                {site.address.street},{" "}
                {site.address.area}
              </span>
            </div>
          </div>

          {/* Navigation */}

          <nav aria-label="Mobile navigation">
            <div className="space-y-1">
              {navigation.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.href}>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="
                            flex-1
                            rounded-xl
                            px-4
                            py-3.5
                            text-sm
                            font-semibold
                            text-[#344341]
                            transition-colors
                            hover:bg-[#EEF7F5]
                            hover:text-[#175C5A]
                          "
                        >
                          {item.label}
                        </Link>

                        <button
                          type="button"
                          onClick={() =>
                            setIsServicesOpen(
                              (current) =>
                                !current
                            )
                          }
                          aria-label="Toggle services menu"
                          aria-expanded={
                            isServicesOpen
                          }
                          className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-xl
                            text-[#89918F]
                            transition-colors
                            hover:bg-[#EEF7F5]
                            hover:text-[#175C5A]
                          "
                        >
                          <FiChevronDown
                            size={17}
                            className={`
                              transition-transform
                              duration-200
                              ${
                                isServicesOpen
                                  ? "rotate-180"
                                  : ""
                              }
                            `}
                          />
                        </button>
                      </div>

                      {/* Mobile services */}

                      <div
                        className={`
                          overflow-hidden
                          transition-all
                          duration-300
                          ${
                            isServicesOpen
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }
                        `}
                      >
                        <div
                          className="
                            ml-4
                            border-l
                            border-[#D8C2A0]
                            pl-3
                          "
                        >
                          {serviceLinks.map(
                            (service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={closeMenu}
                                className="
                                  group
                                  flex
                                  items-center
                                  gap-3
                                  rounded-lg
                                  px-3
                                  py-2.5
                                  text-xs
                                  text-[#6F7A78]
                                  transition-colors
                                  hover:bg-white
                                  hover:text-[#175C5A]
                                "
                              >
                                <span
                                  className="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-[#D8C2A0]
                                    transition-colors
                                    group-hover:bg-[#C9826D]
                                  "
                                />

                                {service.label}
                              </Link>
                            )
                          )}

                          <Link
                            href="/services"
                            onClick={closeMenu}
                            className="
                              block
                              rounded-lg
                              px-3
                              py-2.5
                              text-xs
                              font-bold
                              text-[#175C5A]
                            "
                          >
                            View All Services
                            <span className="ml-1">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      block
                      rounded-xl
                      px-4
                      py-3.5
                      text-sm
                      font-semibold
                      text-[#344341]
                      transition-colors
                      hover:bg-[#EEF7F5]
                      hover:text-[#175C5A]
                    "
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        {/* =====================================================
            MOBILE CTA
        ====================================================== */}

        <div
          className="
            relative
            shrink-0
            border-t
            border-[#E5E0D7]
            bg-white/95
            p-5
            pb-[calc(1.25rem+env(safe-area-inset-bottom))]
            backdrop-blur-xl
          "
        >
          <div className="mb-4">
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#175C5A]
              "
            >
              Reserve Your Experience
            </p>

            <p
              className="
                mt-1.5
                text-xs
                leading-5
                text-[#6F7A78]
              "
            >
              Call or WhatsApp us to check availability.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">

            {/* Call */}

            <a
              href={`tel:${site.contact.phone}`}
              onClick={handleCallClick}
              className="
                flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#C8DCF0]
                bg-[#EEF5FC]
                text-xs
                font-bold
                text-[#3478C5]
                transition-all
                active:scale-[0.98]
                hover:border-[#3478C5]
                hover:bg-[#3478C5]
                hover:text-white
              "
            >
              <FiPhone size={15} />

              Call Now
            </a>

            {/* WhatsApp */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="
                flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#249B68]
                text-xs
                font-bold
                text-white
                shadow-[0_7px_20px_rgba(36,155,104,0.15)]
                transition-all
                active:scale-[0.98]
                hover:bg-[#1C7F55]
              "
            >
              <FiMessageCircle size={15} />

              WhatsApp
            </a>
          </div>

          {/* Book */}

          <Link
            href="/contact"
            onClick={() => {
              handleBookingClick();
              closeMenu();
            }}
            className="
              btn-primary
              mt-2.5
              h-12
              w-full
              rounded-xl
            "
          >
            <FiCalendar size={16} />

            Book Appointment

            <FiArrowUpRight size={14} />
          </Link>
        </div>
      </aside>
    </>
  );
}
