import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight as FiArrowRight,
  FaCalendarAlt as FiCalendar,
  FaCheck as FiCheck,
  FaHeart as FiHeart,
  FaImage as FiImage,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
  FaStar as FiStar,
} from "react-icons/fa";

import { site } from "@/data/site";
import {
  serviceExperienceHighlights,
  serviceUiText,
} from "@/data/service-ui";
import { getServiceWhatsAppUrl } from "@/lib/contact";

interface ServiceDetailsProps {
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

  className?: string;
}

export default function ServiceDetails({
  service,
  className = "",
}: ServiceDetailsProps) {
  const images = getServiceImages(service);

  const primaryImage = images[0];

  const whatsappUrl = getServiceWhatsAppUrl(service.name);

  return (
    <section
      aria-labelledby="service-details-heading"
      className={`
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-18
        lg:py-24
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
        <div
          className="
            absolute
            -left-48
            top-20
            h-96
            w-96
            rounded-full
            bg-[#175C5A]/[0.035]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-48
            bottom-0
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-[#D8C2A0]/[0.10]
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
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            MAIN GRID
        ==================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-start
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =================================================
              IMAGE SIDE
          ================================================== */}

          <div className="lg:sticky lg:top-28">
            <div
              className="
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-[#E3E8E6]
                bg-[#EEF2F0]
                shadow-[0_18px_55px_rgba(36,48,47,0.09)]
              "
            >
              {/* Main image */}

              <div
                className="
                  relative
                  aspect-[1/1]
                  min-h-[340px]
                  sm:min-h-[430px]
                  lg:min-h-[520px]
                "
              >
                <Image
                  src={primaryImage}
                  alt={
                    service.imageAlt ||
                    `${service.name} at Oceanic Spa Vashi`
                  }
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 52vw"
                  className="
                    object-cover
                    object-center
                  "
                />

                {/* Image overlay */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#123B3A]/70
                    via-[#123B3A]/5
                    to-transparent
                  "
                />

                {/* Number */}

                {service.id !== undefined && (
                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      h-9
                      min-w-9
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/25
                      bg-[#123B3A]/55
                      px-2.5
                      text-[9px]
                      font-bold
                      tracking-[0.14em]
                      text-white
                      backdrop-blur-md
                    "
                  >
                    {String(service.id).padStart(2, "0")}
                  </span>
                )}

                {/* Popular */}

                {service.popular && (
                  <span
                    className="
                      absolute
                      right-5
                      top-5
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/25
                      bg-[#C9826D]/90
                      px-3
                      py-1.5
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white
                      backdrop-blur-md
                    "
                  >
                    <FiHeart size={10} />

                    Popular Treatment
                  </span>
                )}

                {/* Bottom image title */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-5
                    sm:p-7
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#D8C2A0]
                    "
                  >
                    {serviceUiText.brandEyebrow}
                  </p>

                  <h2
                    className="
                      mt-2
                      max-w-xl
                      font-serif
                      text-2xl
                      font-normal
                      leading-tight
                      !text-white
                      sm:text-3xl
                    "
                  >
                    {service.name}
                  </h2>
                </div>
              </div>
            </div>

            {/* =================================================
                IMAGE STRIP
            ================================================== */}

            {images.length > 1 && (
              <div
                className="
                  mt-3
                  grid
                  grid-cols-3
                  gap-3
                  sm:grid-cols-4
                "
              >
                {images.slice(0, 4).map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="
                      relative
                      aspect-square
                      overflow-hidden
                      rounded-xl
                      border
                      border-[#E3E8E6]
                      bg-[#EEF2F0]
                    "
                  >
                    <Image
                      src={image}
                      alt={`${service.name} treatment image ${
                        index + 1
                      }`}
                      fill
                      sizes="(max-width: 639px) 25vw, 120px"
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        hover:scale-105
                      "
                    />

                    {index === 3 &&
                      images.length > 4 && (
                        <div
                          className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            bg-[#123B3A]/55
                            text-white
                          "
                        >
                          <div className="text-center">
                            <FiImage
                              className="mx-auto"
                              size={17}
                            />

                            <span
                              className="
                                mt-1
                                block
                                text-[9px]
                                font-bold
                              "
                            >
                              +{images.length - 4} more
                            </span>
                          </div>
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* =================================================
              DETAILS SIDE
          ================================================== */}

          <div>
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
                {serviceUiText.treatmentDetailsEyebrow}
              </span>
            </div>

            {/* Heading */}

            <h2
              id="service-details-heading"
              className="
                mt-4
                font-serif
                text-3xl
                font-normal
                leading-[1.1]
                tracking-tight
                text-[#24302F]
                sm:text-4xl
                lg:text-[3.25rem]
              "
            >
              {service.name}
              <span className="text-[#175C5A]">.</span>
            </h2>

            {/* Category */}

            {service.category && (
              <p
                className="
                  mt-3
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#89918F]
                "
              >
                {service.category}
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
                  py-2.5
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

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#E3E8E6]
                  bg-[#F7FAF9]
                  px-3
                  py-2.5
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
                    bg-[#F8F3E9]
                    text-[#D8A85D]
                  "
                >
                  <FiStar
                    size={13}
                    className="fill-current"
                  />
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
                    Experience
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      font-semibold
                      text-[#394441]
                    "
                  >
                    Relax & Rejuvenate
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            {service.description && (
              <div className="mt-7">
                <p
                  className="
                    text-[15px]
                    leading-7
                    text-[#606B68]
                  "
                >
                  {service.description}
                </p>
              </div>
            )}

            {/* =================================================
                HIGHLIGHTS
            ================================================== */}

            <div
              className="
                mt-7
                rounded-[1.5rem]
                border
                border-[#E3E8E6]
                bg-[#F7FAF9]
                p-5
                sm:p-6
              "
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#175C5A]
                    text-white
                  "
                >
                  <FiHeart size={16} />
                </span>

                <div>
                  <h3
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-[#24302F]
                    "
                  >
                    Your experience
                  </h3>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      text-[#89918F]
                    "
                  >
                    Designed around relaxation and comfort
                  </p>
                </div>
              </div>

              <ul
                className="
                  mt-5
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                {serviceExperienceHighlights.map((highlight) => (
                  <DetailPoint key={highlight}>
                    {highlight}
                  </DetailPoint>
                ))}
              </ul>
            </div>

            {/* =================================================
                ACTIONS
            ================================================== */}

            <div
              className="
                mt-7
                grid
                gap-3
                sm:grid-cols-3
              "
            >
              {/* Book */}

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
                  bg-[#175C5A]
                  px-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-white
                  shadow-[0_10px_25px_rgba(23,92,90,0.14)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#124B49]
                "
              >
                <FiCalendar size={14} />

                <span>Book</span>

                <FiArrowRight
                  size={13}
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
                  flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#25D366]/25
                  bg-[#25D366]/10
                  px-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-[#168B45]
                  transition-all
                  duration-300
                  hover:border-[#25D366]/50
                  hover:bg-[#25D366]/15
                "
              >
                <FiMessageCircle size={14} />

                <span>WhatsApp</span>
              </a>

              {/* Call */}

              <a
                href={`tel:${site.contact.phone}`}
                className="
                  flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#3B82F6]/20
                  bg-[#EFF6FF]
                  px-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-[#2563EB]
                  transition-all
                  duration-300
                  hover:border-[#3B82F6]/40
                  hover:bg-[#DBEAFE]
                "
              >
                <FiPhone size={14} />

                <span>Call</span>
              </a>
            </div>

            {/* =================================================
                SMALL TRUST NOTE
            ================================================== */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-[9px]
                leading-5
                text-[#929A97]
              "
            >
              <span
                className="
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EEF7F5]
                  text-[#175C5A]
                "
              >
                <FiCheck size={11} />
              </span>

              {serviceUiText.availabilityNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DETAIL POINT
========================================================= */

function DetailPoint({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li
      className="
        flex
        items-start
        gap-2.5
        text-xs
        leading-5
        text-[#697470]
      "
    >
      <span
        className="
          mt-0.5
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#E4F2EE]
          text-[#175C5A]
        "
      >
        <FiCheck size={11} />
      </span>

      <span>{children}</span>
    </li>
  );
}

/* =========================================================
   IMAGE HELPER
========================================================= */

function getServiceImages(service: {
  image?: string;
  images?: string[];
}) {
  const images = [
    ...(service.images ?? []),
    ...(service.image ? [service.image] : []),
  ].filter(Boolean);

  return images.length
    ? Array.from(new Set(images))
    : ["/gallery/gallery-1.png"];
}
