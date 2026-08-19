import type { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRight as FiArrowRight,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
} from "react-icons/fa";

import OfferCard from "@/components/cards/OfferCard";
import { activeOffers } from "@/data/offer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Spa Offers in Vashi | Oceanic Spa Vashi",
  description:
    "Explore current spa offers and massage offers at Oceanic Spa Vashi in Navi Mumbai. Call or WhatsApp to confirm offer pricing, terms and appointment availability.",
  keywords: [
    "spa offers in Vashi",
    "massage offers Vashi",
    "spa discount Vashi",
    "couple massage offer Vashi",
    "Oceanic Spa Vashi offers",
  ],
  alternates: {
    canonical: "/offers",
  },
  openGraph: {
    title: "Spa Offers in Vashi | Oceanic Spa Vashi",
    description:
      "View current Oceanic Spa Vashi offers and contact us to confirm availability.",
    url: "/offers",
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url:
          activeOffers[0]?.image ||
          site.seo.ogImage,
        width: 1200,
        height: 1600,
        alt:
          activeOffers[0]?.imageAlt ||
          "Oceanic Spa Vashi offers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Offers in Vashi | Oceanic Spa Vashi",
    description:
      "Explore current spa and massage offers at Oceanic Spa Vashi.",
    images: [
      activeOffers[0]?.image || site.seo.ogImage,
    ],
  },
};

export default function OffersPage() {
  const whatsappUrl = `https://wa.me/${
    site.contact.whatsapp
  }?text=${encodeURIComponent(
    "Hello Oceanic Spa Vashi, I want to enquire about current spa offers and appointment availability."
  )}`;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Oceanic Spa Vashi Offers",
    description:
      "Current spa and massage offers at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
    itemListElement: activeOffers.map(
      (offer, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${site.url}/offers/${offer.slug}`,
        name: offer.title,
      })
    ),
  };

  return (
    <main className="overflow-x-hidden bg-[#F7FAF9]/90">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <section
        aria-labelledby="offers-heading"
        className="
          bg-[#F7FAF9]
          px-4
          pb-12
          pt-8
          sm:px-6
          sm:pb-16
          sm:pt-10
          lg:px-8
          lg:pb-20
        "
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#175C5A]
              "
            >
              Oceanic Spa Vashi Offers
            </p>

            <h1
              id="offers-heading"
              className="
                mt-3
                font-serif
                text-4xl
                font-normal
                leading-[1.05]
                text-[#24302F]
                sm:text-5xl
                lg:text-[4rem]
              "
            >
              Spa offers in Vashi
              <span className="text-[#175C5A]">.</span>
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-[#687371]
                sm:text-[15px]
              "
            >
              View current massage and spa offers from
              Oceanic Spa Vashi. Call or WhatsApp us to
              confirm offer terms, price and appointment
              availability before visiting.
            </p>
          </div>

          <div
            className="
              mt-8
              grid
              gap-5
              sm:grid-cols-2
              lg:mt-10
              lg:grid-cols-3
            "
          >
            {activeOffers.map((offer, index) => (
              <OfferCard
                key={offer.slug}
                offer={offer}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="
          bg-[#175C5A]
          px-4
          py-12
          text-center
          sm:px-6
          sm:py-16
          lg:px-8
        "
      >
        <div className="mx-auto max-w-4xl">
          <h2
            className="
              font-serif
              text-3xl
              font-normal
              leading-tight
              text-white
              sm:text-4xl
            "
          >
            Confirm today&apos;s offer before booking
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-7
              text-white/65
            "
          >
            Offers may change based on treatment, slot and
            availability. Contact Oceanic Spa Vashi for
            current details.
          </p>

          <div
            className="
              mt-7
              grid
              gap-2.5
              sm:flex
              sm:justify-center
            "
          >
            <a
              href={`tel:${site.contact.phone}`}
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#3B82F6]
                px-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                hover:bg-[#2563EB]
              "
            >
              <FiPhone size={15} />
              Call Us
            </a>

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
                bg-[#25D366]
                px-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                hover:bg-[#1FB85A]
              "
            >
              <FiMessageCircle size={15} />
              WhatsApp
            </a>

            <Link
              href="/contact"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#D8C2A0]/40
                px-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#D8C2A0]
                transition-all
                hover:bg-[#D8C2A0]/10
              "
            >
              Contact
              <FiArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
