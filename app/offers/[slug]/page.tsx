import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft as FiArrowLeft,
  FaArrowRight as FiArrowRight,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
} from "react-icons/fa";

import {
  activeOffers,
  getOfferBySlug,
  getOfferWhatsAppUrl,
} from "@/data/offer";
import { site } from "@/data/site";

interface OfferPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return activeOffers.map((offer) => ({
    slug: offer.slug,
  }));
}

export async function generateMetadata({
  params,
}: OfferPageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);

  if (!offer) {
    return {
      title: "Offer Not Found | Oceanic Spa Vashi",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: offer.seo.title,
    description: offer.seo.description,
    keywords: offer.keywords,
    alternates: {
      canonical: `/offers/${offer.slug}`,
    },
    openGraph: {
      title: offer.seo.title,
      description: offer.seo.description,
      url: `/offers/${offer.slug}`,
      siteName: site.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: offer.image,
          width: 1200,
          height: 1600,
          alt: offer.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: offer.seo.title,
      description: offer.seo.description,
      images: [offer.image],
    },
  };
}

export default async function OfferDetailPage({
  params,
}: OfferPageProps) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);

  if (!offer) {
    notFound();
  }

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: offer.title,
    description: offer.description,
    url: `${site.url}/offers/${offer.slug}`,
    image: `${site.url}${offer.image}`,
    offeredBy: {
      "@type": "DaySpa",
      name: site.name,
      url: site.url,
      telephone: site.contact.phone,
      address: site.address.full,
    },
    areaServed: {
      "@type": "Place",
      name: "Vashi, Navi Mumbai",
    },
    availability: "https://schema.org/InStock",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Offers",
        item: `${site.url}/offers`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: offer.title,
        item: `${site.url}/offers/${offer.slug}`,
      },
    ],
  };

  return (
    <main className="overflow-x-hidden bg-[#F7FAF9]/90">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <section
        aria-labelledby="offer-heading"
        className="
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
          <Link
            href="/offers"
            className="
              inline-flex
              min-h-10
              items-center
              gap-2
              text-[9px]
              font-bold
              uppercase
              tracking-[0.13em]
              text-[#175C5A]
            "
          >
            <FiArrowLeft size={13} />
            Back to offers
          </Link>

          <div
            className="
              mt-5
              grid
              gap-8
              lg:grid-cols-[0.95fr_1.05fr]
              lg:items-center
              lg:gap-14
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#175C5A]
                "
              >
                {offer.subtitle}
              </p>

              <h1
                id="offer-heading"
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
                {offer.seo.h1}
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
                {offer.description}
              </p>

              <div
                className="
                  mt-6
                  inline-flex
                  rounded-full
                  border
                  border-[#D8C2A0]/70
                  bg-[#F6F0E7]
                  px-4
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#8B6F45]
                "
              >
                {offer.discount} - {offer.validityLabel}
              </div>

              <div
                className="
                  mt-7
                  grid
                  gap-2.5
                  sm:flex
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
                  Call Now
                </a>

                <a
                  href={getOfferWhatsAppUrl(offer)}
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
                    border-[#175C5A]/20
                    bg-white
                    px-6
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#175C5A]
                    transition-all
                    hover:bg-[#EEF7F5]
                  "
                >
                  Contact
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div
              className="
                relative
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#E1E8E5]
                bg-[#123B3A]
                shadow-[0_24px_70px_rgba(36,48,47,0.12)]
              "
            >
              <div className="relative aspect-[289/379]">
                <Image
                  src={offer.image}
                  alt={offer.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
