import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
} from "react-icons/fa";

import type { Offer } from "@/data/offer";
import { getOfferWhatsAppUrl } from "@/data/offer";
import { site } from "@/data/site";

interface OfferCardProps {
  offer: Offer;
  priority?: boolean;
}

export default function OfferCard({
  offer,
  priority = false,
}: OfferCardProps) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[1.35rem]
        border
        border-[#E1E8E5]
        bg-white
        shadow-[0_16px_45px_rgba(36,48,47,0.08)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#175C5A]/25
        hover:shadow-[0_24px_60px_rgba(36,48,47,0.12)]
      "
    >
      <Link
        href={`/offers/${offer.slug}`}
        aria-label={`View ${offer.title} offer details`}
        className="
          block
          overflow-hidden
          rounded-[1.35rem]
        "
      >
        <div
          className="
            relative
            aspect-[289/379]
            bg-[#123B3A]
          "
        >
          <Image
            src={offer.image}
            alt={offer.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="
              object-contain
              object-center
              transition-transform
              duration-700
              group-hover:scale-[1.025]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-x-0
              bottom-0
              h-28
              bg-gradient-to-t
              from-[#123B3A]/75
              to-transparent
            "
          />
        </div>
      </Link>

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          grid
          grid-cols-2
          gap-2
          p-3
          sm:p-4
        "
      >
        <a
          href={`tel:${site.contact.phone}`}
          aria-label={`Call Oceanic Spa Vashi for ${offer.title} offer`}
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
            shadow-[0_10px_26px_rgba(59,130,246,0.25)]
            backdrop-blur-sm
            transition-all
            hover:-translate-y-0.5
            hover:bg-[#2563EB]
          "
        >
          <FiPhone size={14} />
          Call
        </a>

        <a
          href={getOfferWhatsAppUrl(offer)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp Oceanic Spa Vashi for ${offer.title} offer`}
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
            shadow-[0_10px_26px_rgba(37,211,102,0.25)]
            backdrop-blur-sm
            transition-all
            hover:-translate-y-0.5
            hover:bg-[#1FB85A]
          "
        >
          <FiMessageCircle size={14} />
          WhatsApp
        </a>
      </div>
    </article>
  );
}
