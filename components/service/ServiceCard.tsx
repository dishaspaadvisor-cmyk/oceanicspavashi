import Link from "next/link";
import Image from "next/image";
import {
  FaExternalLinkAlt as FiArrowUpRight,
  FaHeart as FiHeart,
  FaPhoneAlt as FiPhone,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { site } from "@/data/site";
import { serviceUiText } from "@/data/service-ui";
import { getServiceWhatsAppUrl } from "@/lib/contact";

interface ServiceCardProps {
  service: {
    id?: number | string;
    slug: string;
    name: string;
    description?: string;
    image?: string;
    images?: string[];
    duration?: string;
    popular?: boolean;
  };

  variant?: "default" | "compact" | "featured";

  priority?: boolean;

  detailBasePath?: "/services" | "/massage";

  className?: string;
}

export default function ServiceCard({
  service,
  variant = "default",
  priority = false,
  detailBasePath = "/services",
  className = "",
}: ServiceCardProps) {
  const image =
    service.image ||
    service.images?.[0] ||
    "/gallery/gallery-1.png";

  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";
  const whatsappUrl = getServiceWhatsAppUrl(service.name);

  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-[1.5rem]
        border
        border-[#E3E8E6]
        bg-white
        shadow-[0_5px_22px_rgba(36,48,47,0.045)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#175C5A]/20
        hover:shadow-[0_20px_50px_rgba(36,48,47,0.10)]
        ${isFeatured ? "lg:rounded-[1.75rem]" : ""}
        ${className}
      `}
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <Link
        href={`${detailBasePath}/${service.slug}`}
        aria-label={`View ${service.name}`}
        className="block"
      >
        <div
          className={`
            relative
            overflow-hidden
            bg-[#EEF2F0]
            ${
              isFeatured
                ? "aspect-[1.45/1]"
                : isCompact
                  ? "aspect-[1.35/1]"
                  : "aspect-[1.18/1]"
            }
          `}
        >
          <Image
            src={image}
            alt={`${service.name} at Oceanic Spa Vashi`}
            fill
            priority={priority}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.06]
            "
          />

          {/* =================================================
              IMAGE GRADIENT
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#123B3A]/75
              via-[#123B3A]/15
              to-transparent
            "
          />

          {/* =================================================
              SERVICE NUMBER
          ================================================== */}

          {service.id !== undefined && (
            <span
              className="
                absolute
                left-4
                top-4
                flex
                h-8
                min-w-8
                items-center
                justify-center
                rounded-lg
                border
                border-white/25
                bg-[#123B3A]/55
                px-2
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

          {/* =================================================
              POPULAR BADGE
          ================================================== */}

          {service.popular && (
            <span
              className="
                absolute
                right-4
                top-4
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

              Popular
            </span>
          )}

          {/* =================================================
              TITLE
          ================================================== */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              p-5
              sm:p-6
            "
          >
            <div className="flex items-end justify-between gap-4">
              <h3
                className={`
                  max-w-[85%]
                  font-serif
                  leading-tight
                  !text-white
                  ${
                    isFeatured
                      ? "text-2xl sm:text-3xl"
                      : "text-xl sm:text-[1.35rem]"
                  }
                `}
              >
                {service.name}
              </h3>

              {/* Arrow */}

              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#175C5A]
                  shadow-lg
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-[#175C5A]
                  group-hover:text-white
                "
              >
                <FiArrowUpRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className={`
          ${isCompact ? "p-4" : "p-5 sm:p-[1.375rem]"}
        `}
      >
        <Link
          href={`${detailBasePath}/${service.slug}`}
          aria-label={`View ${service.name} details`}
          className="block"
        >
          {/* =================================================
              DESCRIPTION
          ================================================== */}

          {service.description && (
            <p
              className="
                line-clamp-2
                text-xs
                leading-[1.375rem]
                text-[#727D7A]
              "
            >
              {service.description}
            </p>
          )}

          {/* =================================================
              PRICE ENQUIRY
          ================================================== */}

          <div
            className="
              mt-4
              inline-flex
              min-h-8
              items-center
              gap-2
              rounded-full
              border
              border-[#D8C2A0]/70
              bg-[#F6F0E7]
              px-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.1em]
              text-[#8B6F45]
              shadow-[0_6px_16px_rgba(216,194,160,0.18)]
              animate-spa-pulse
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#C9826D]
              "
            />

            <span>{serviceUiText.priceEnquiryLabel}</span>
          </div>
        </Link>

        {/* =================================================
            ACTION
        ================================================== */}

        <div
          className="
            mt-5
            grid
            gap-2
            border-t
            border-[#EEF0EE]
            pt-4
            grid-cols-2
          "
        >
          <a
            href={`tel:${site.contact.phone}`}
            aria-label={`Call Oceanic Spa Vashi for ${service.name}`}
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#3B82F6]
              px-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.1em]
              text-white
              shadow-[0_8px_22px_rgba(59,130,246,0.18)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#2563EB]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#3B82F6]
            "
          >
            <FiPhone size={13} />
            Call
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp Oceanic Spa Vashi for ${service.name}`}
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#25D366]
              px-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.1em]
              text-white
              shadow-[0_8px_22px_rgba(37,211,102,0.18)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#1FB85A]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#25D366]
            "
          >
            <FaWhatsapp size={13} />
            WhatsApp
          </a>

        </div>
      </div>

      
    </article>
  );
}
