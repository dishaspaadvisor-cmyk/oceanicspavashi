import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { activeServices } from "@/data/service";

import ServicePageContent from "@/components/service/ServicePageContent";

/* =========================================================
   TYPES
========================================================= */

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return activeServices.map((service) => ({
    slug: service.slug,
  }));
}

/* =========================================================
   DYNAMIC METADATA
========================================================= */

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = activeServices.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Treatment Not Found | Oceanic Spa Vashi",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${service.name} in Vashi | Oceanic Spa Vashi`;

  const description =
    service.description ||
    `Experience ${service.name} at Oceanic Spa Vashi, Navi Mumbai. Explore treatment details and contact us to check availability and book your appointment.`;

  const image =
    service.image ||
    service.images?.[0] ||
    "/gallery/gallery-1.png";

  return {
    title,

    description,

    keywords: [
      service.name,
      `${service.name} Vashi`,
      `${service.name} in Vashi`,
      `${service.name} Navi Mumbai`,
      `${service.name} Vashi Navi Mumbai`,
      "spa in Vashi",
      "massage in Vashi",
      "Oceanic Spa Vashi",
    ],

    alternates: {
      canonical: `/services/${service.slug}`,
    },

    openGraph: {
      title,

      description,

      url: `/services/${service.slug}`,

      siteName: "Oceanic Spa Vashi",

      type: "article",

      locale: "en_IN",

      images: [
        {
          url: image,

          width: 1200,

          height: 800,

          alt: `${service.name} at Oceanic Spa Vashi`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [image],
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = activeServices.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     404
  ======================================================== */

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} />;
}
