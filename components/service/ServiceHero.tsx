import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight as FiArrowRight,
  FaCalendarAlt as FiCalendar,
  FaCheck as FiCheck,
  FaHeart as FiHeart,
  FaMapMarkerAlt as FiMapPin,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
} from "react-icons/fa";

import { site } from "@/data/site";
import {
  serviceTrustNotes,
  serviceUiText,
} from "@/data/service-ui";
import { getServiceWhatsAppUrl } from "@/lib/contact";

interface ServiceHeroProps {
  service: {
    id?: number | string;
    slug: string;
    name: string;
    description?: string;
    image?: string;
    images?: string[];
    imageAlt?: string;
    duration?: string;
    popular?: boolean;
    category?: string;
  };

  listingHref?: "/services" | "/massage";
  listingLabel?: string;

  className?: string;
}

export default function ServiceHero({
  service,
  listingHref = "/services",
  listingLabel = "Services",
  className = "",
}: ServiceHeroProps) {
  const image =
    service.image ||
    service.images?.[0] ||
    "/gallery/gallery-1.png";

  const whatsappUrl = getServiceWhatsAppUrl(service.name);

  return (
    <section
      className={`
        relative
        overflow-hidden
        bg-[#F7FAF9]
        ${className}
      `}
      aria-labelledby="service-hero-title"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            -left-48
            -top-32
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-[#175C5A]/[0.045]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -right-40
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-[#D8C2A0]/[0.13]
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          pb-12
          pt-6
          sm:px-6
          sm:pb-16
          sm:pt-8
          lg:px-8
          lg:pb-20
          lg:pt-10
        "
      >
        {/* ===================================================
            BREADCRUMB
        ==================================================== */}

        <nav
          aria-label="Breadcrumb"
          className="
            mb-6
            flex
            items-center
            gap-2
            overflow-hidden
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.1em]
            text-[#8B9692]
            sm:mb-8
          "
        >
          <Link
            href="/"
            className="
              shrink-0
              transition-colors
              hover:text-[#175C5A]
            "
          >
            Home
          </Link>

          <span
            aria-hidden="true"
            className="text-[#C4CCC9]"
          >
            /
          </span>

          <Link
            href={listingHref}
            className="
              shrink-0
              transition-colors
              hover:text-[#175C5A]
            "
          >
            {listingLabel}
          </Link>

          <span
            aria-hidden="true"
            className="text-[#C4CCC9]"
          >
            /
          </span>

          <span
            className="
              truncate
              text-[#175C5A]
            "
            aria-current="page"
          >
            {service.name}
          </span>
        </nav>

        {/* ===================================================
            HERO GRID
        ==================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className="
              order-2
              lg:order-1
            "
          >
            {/* Eyebrow */}

            <div className="flex items-center gap-2.5">
              <span className="h-px w-7 bg-[#D8C2A0]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#175C5A]
                "
              >
                {serviceUiText.brandEyebrow}
              </span>
            </div>

            {/* Category */}

            {service.category && (
              <p
                className="
                  mt-5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#9AA29F]
                "
              >
                {service.category}
              </p>
            )}

            {/* =================================================
                H1
            ================================================== */}

            <h1
              id="service-hero-title"
              className="
                mt-3
                max-w-2xl
                font-serif
                text-4xl
                font-normal
                leading-[1.04]
                tracking-tight
                text-[#24302F]
                sm:text-5xl
                lg:text-[4.15rem]
                xl:text-[4.5rem]
              "
            >
              {service.name}
              <span className="text-[#175C5A]">.</span>
            </h1>

            {/* Description */}

            {service.description && (
              <p
                className="
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#687371]
                  sm:text-[15px]
                  sm:leading-7.5
                "
              >
                {service.description}
              </p>
            )}

            {/* =================================================
                META
            ================================================== */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2
              "
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#D8C2A0]/70
                  bg-[#F6F0E7]
                  px-3
                  py-2
                  shadow-[0_4px_16px_rgba(216,194,160,0.16)]
                  animate-spa-pulse
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
                    bg-white
                    text-[#2563EB]
                  "
                >
                  <FiPhone size={13} />
                </span>

                <div>
                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-[#9AA29F]
                    "
                  >
                    Price
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      font-semibold
                      text-[#8B6F45]
                    "
                  >
                    {serviceUiText.priceEnquiryLabel}
                  </p>
                </div>
              </div>

              {service.popular && (
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#E8D9D4]
                    bg-[#FCF5F2]
                    px-3
                    py-2
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
                      bg-[#C9826D]/10
                      text-[#C9826D]
                    "
                  >
                    <FiHeart size={13} />
                  </span>

                  <div>
                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.1em]
                        text-[#9AA29F]
                      "
                    >
                      Guest Choice
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[11px]
                        font-semibold
                        text-[#394441]
                      "
                    >
                      Popular Treatment
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* =================================================
                CTA
            ================================================== */}

            <div
              className="
                mt-7
                grid
                gap-2.5
                sm:flex
              "
            >
              {/* Primary */}

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#175C5A]
                  px-6
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  shadow-[0_10px_28px_rgba(23,92,90,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#124B49]
                "
              >
                <FiCalendar size={15} />

                <span>Book Appointment</span>

                <FiArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* WhatsApp */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#25D366]/25
                  bg-[#25D366]/10
                  px-5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#168B45]
                  transition-all
                  duration-300
                  hover:border-[#25D366]/50
                  hover:bg-[#25D366]/15
                "
              >
                <FiMessageCircle size={15} />

                <span>WhatsApp</span>
              </a>
            </div>

            {/* =================================================
                TRUST ROW
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
              {serviceTrustNotes.map((note) => (
                <TrustPoint key={note}>{note}</TrustPoint>
              ))}
            </div>

            {/* =================================================
                PHONE
            ================================================== */}

            <a
              href={`tel:${site.contact.phone}`}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-semibold
                text-[#7D8884]
                transition-colors
                hover:text-[#175C5A]
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
                  bg-[#EEF7F5]
                  text-[#2563EB]
                "
              >
                <FiPhone size={13} />
              </span>

              <span>{site.contact.phone}</span>

              <span className="text-[#B0B8B5]">
                -
              </span>

              <span>Call to check availability</span>
            </a>
          </div>

          {/* =================================================
              IMAGE
          ================================================== */}

          <div
            className="
              order-1
              lg:order-2
            "
          >
            <div
              className="
                relative
                mx-auto
                max-w-2xl
                lg:ml-auto
              "
            >
              {/* Decorative frame */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-3
                  -left-3
                  h-full
                  w-full
                  rounded-[1.75rem]
                  border
                  border-[#D8C2A0]/40
                  sm:-bottom-4
                  sm:-left-4
                "
              />

              {/* Image */}

              <div
                className="
                  relative
                  aspect-[4/4.7]
                  overflow-hidden
                  rounded-[1.75rem]
                  bg-[#E9EFEC]
                  shadow-[0_25px_70px_rgba(36,48,47,0.13)]
                  sm:aspect-[4/4.5]
                "
              >
                <Image
                  src={image}
                  alt={
                    service.imageAlt ||
                    `${service.name} at Oceanic Spa Vashi`
                  }
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="
                    object-cover
                    object-center
                  "
                />

                {/* Image gradient */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#123B3A]/65
                    via-transparent
                    to-[#123B3A]/5
                  "
                />

                {/* =================================================
                    TOP BADGE
                ================================================== */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/25
                    bg-[#123B3A]/55
                    px-3
                    py-2
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-white
                    backdrop-blur-md
                    sm:left-6
                    sm:top-6
                  "
                >
                  <FiHeart
                    size={10}
                    className="text-[#D8C2A0]"
                  />

                  {serviceUiText.brandEyebrow}
                </div>

                {/* =================================================
                    IMAGE BOTTOM INFO
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-5
                    sm:p-7
                  "
                >
                  <div
                    className="
                      flex
                      items-end
                      justify-between
                      gap-4
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#D8C2A0]
                        "
                      >
                        {serviceUiText.treatmentImageEyebrow}
                      </p>

                      <p
                        className="
                          mt-1.5
                          font-serif
                          text-xl
                          leading-tight
                          !text-white
                          sm:text-2xl
                        "
                      >
                        {serviceUiText.treatmentImageCaption}
                      </p>
                    </div>

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[#175C5A]
                        shadow-xl
                      "
                    >
                      <FiArrowRight size={17} />
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING LOCATION CARD
              ================================================== */}

              <div
                className="
                  absolute
                  -bottom-5
                  right-4
                  hidden
                  items-center
                  gap-2.5
                  rounded-2xl
                  border
                  border-white/70
                  bg-white/95
                  px-4
                  py-3
                  shadow-[0_12px_35px_rgba(36,48,47,0.12)]
                  backdrop-blur-md
                  sm:flex
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#EEF7F5]
                    text-[#175C5A]
                  "
                >
                  <FiMapPin size={14} />
                </span>

                <div>
                  <p
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-[#9AA29F]
                    "
                  >
                    Visit Us
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      font-semibold
                      text-[#394441]
                    "
                  >
                    Vashi, Navi Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            SCROLL / CONTENT HINT
        ==================================================== */}

        <div
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-2
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[#9AA29F]
            lg:mt-14
          "
        >
          <span className="h-px w-8 bg-[#D8C2A0]" />

          Explore treatment details below

          <span className="h-px w-8 bg-[#D8C2A0]" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TRUST POINT
========================================================= */

function TrustPoint({
  children,
}: {
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
        text-[#7D8884]
      "
    >
      <span
        className="
          flex
          h-4
          w-4
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#EEF7F5]
          text-[#175C5A]
        "
      >
        <FiCheck size={10} />
      </span>

      <span>{children}</span>
    </span>
  );
}
