import Link from "next/link";
import {
  FaCalendarAlt as FiCalendar,
  FaCheck as FiCheck,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
  FaStar as FiStar,
} from "react-icons/fa";

import { site } from "@/data/site";
import { serviceCtaTrustPoints } from "@/data/service-ui";
import { getServiceWhatsAppUrl } from "@/lib/contact";

interface ServiceCTAProps {
  serviceName?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function ServiceCTA({
  serviceName = "this treatment",
  title = "Ready to make time for yourself?",
  description = "Choose your preferred treatment and contact Oceanic Spa Vashi to check availability and book your appointment.",
  className = "",
}: ServiceCTAProps) {
  const whatsappUrl = getServiceWhatsAppUrl(serviceName);

  const phoneUrl = `tel:${site.contact.phone}`;

  return (
    <section
      aria-labelledby="service-cta-heading"
      className={`
        relative
        overflow-hidden
        bg-[#175C5A]
        py-14
        sm:py-18
        lg:py-20
        ${className}
      `}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Large circles */}

        <div
          className="
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            border
            border-white/[0.07]
          "
        />

        <div
          className="
            absolute
            -right-12
            -top-12
            h-40
            w-40
            rounded-full
            border
            border-white/[0.06]
          "
        />

        {/* Gold glow */}

        <div
          className="
            absolute
            -bottom-32
            -left-24
            h-80
            w-80
            rounded-full
            bg-[#D8C2A0]/10
            blur-[100px]
          "
        />

        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-72
            w-72
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.025]
            blur-[90px]
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            overflow-hidden
            rounded-[1.75rem]
            border
            border-white/10
            bg-white/[0.055]
            shadow-[0_25px_70px_rgba(0,0,0,0.12)]
            backdrop-blur-sm
          "
        >
          <div
            className="
              grid
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >
            {/* =================================================
                CONTENT
            ================================================== */}

            <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
              {/* Eyebrow */}

              <div className="flex items-center gap-2.5">
                <span className="h-px w-7 bg-[#D8C2A0]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#D8C2A0]
                  "
                >
                  Your wellness moment
                </span>
              </div>

              {/* Heading */}

              <h2
                id="service-cta-heading"
                className="
                  mt-4
                  max-w-2xl
                  font-serif
                  text-3xl
                  font-normal
                  leading-[1.1]
                  tracking-tight
                  !text-white
                  sm:text-4xl
                  lg:text-[2.8rem]
                "
              >
                {title}
              </h2>

              {/* Description */}

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-6.5
                  text-white/60
                  sm:text-[15px]
                  sm:leading-7
                "
              >
                {description}
              </p>

              {/* =================================================
                  TRUST POINTS
              ================================================== */}

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-x-5
                  gap-y-2.5
                "
              >
                {serviceCtaTrustPoints.map((point) => (
                  <TrustPoint
                    key={point}
                    icon={<FiCheck size={12} />}
                  >
                    {point}
                  </TrustPoint>
                ))}
              </div>

              {/* Selected treatment */}

              <div
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.05]
                  px-3
                  py-1.5
                "
              >
                <FiStar
                  size={11}
                  className="text-[#D8C2A0]"
                />

                <span
                  className="
                    max-w-[240px]
                    truncate
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.1em]
                    text-white/55
                  "
                >
                  {serviceName}
                </span>
              </div>
            </div>

            {/* =================================================
                ACTIONS
            ================================================== */}

            <div
              className="
                border-t
                border-white/10
                p-5
                sm:p-6
                lg:w-[300px]
                lg:border-l
                lg:border-t-0
                lg:p-8
              "
            >
              <p
                className="
                  mb-4
                  text-center
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white/40
                  lg:text-left
                "
              >
                Book your treatment
              </p>

              <div className="grid gap-2.5">
                {/* =================================================
                    PRIMARY BOOKING
                ================================================== */}

                <Link
                  href="/contact"
                  className="
                    group
                    flex
                    min-h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#D8C2A0]
                    px-5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#24302F]
                    shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#E6D5BA]
                  "
                >
                  <FiCalendar size={15} />

                  <span>Book Appointment</span>

                </Link>

                {/* =================================================
                    WHATSAPP
                ================================================== */}

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    min-h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#25D366]/30
                    bg-[#25D366]/10
                    px-5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#8EF0B3]
                    transition-all
                    duration-300
                    hover:border-[#25D366]/60
                    hover:bg-[#25D366]/15
                  "
                >
                  <FiMessageCircle size={15} />

                  <span>WhatsApp Us</span>
                </a>

                {/* =================================================
                    CALL
                ================================================== */}

                <a
                  href={phoneUrl}
                  className="
                    flex
                    min-h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#3B82F6]/30
                    bg-[#3B82F6]/10
                    px-5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#93C5FD]
                    transition-all
                    duration-300
                    hover:border-[#3B82F6]/60
                    hover:bg-[#3B82F6]/15
                  "
                >
                  <FiPhone size={15} />

                  <span>Call Us</span>
                </a>
              </div>

              {/* Contact number */}

              <p
                className="
                  mt-4
                  text-center
                  text-[9px]
                  text-white/35
                  lg:text-left
                "
              >
                {site.contact.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TRUST POINT
========================================================= */

function TrustPoint({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span
      className="
        inline-flex
        items-center
        gap-1.5
        text-[9px]
        font-medium
        text-white/50
      "
    >
      <span className="text-[#D8C2A0]">{icon}</span>
      <span>{children}</span>
    </span>
  );
}
