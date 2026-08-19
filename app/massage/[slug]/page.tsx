import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  activeServices,
  getServiceBySlug,
} from "@/data/service";
import { site } from "@/data/site";

import ServicePageContent from "@/components/service/ServicePageContent";

interface MassagePageProps {
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
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: MassagePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Massage Not Found | Oceanic Spa Vashi",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title =
    service.seo?.title ||
    `${service.name} in Vashi | Oceanic Spa`;

  const description =
    service.seo?.description ||
    `Explore ${service.name} at Oceanic Spa Vashi. Contact us to enquire about treatment details and appointment availability in Vashi, Navi Mumbai.`;

  const image =
    service.images?.[0] ||
    service.image ||
    "/gallery/gallery-1.png";

  return {
    title,
    description,
    keywords:
      service.keywords.length > 0
        ? service.keywords
        : [
            service.name,
            `${service.name} Vashi`,
            `${service.name} Navi Mumbai`,
            "massage Vashi",
            "spa Vashi",
          ],
    alternates: {
      canonical: `/massage/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/massage/${service.slug}`,
      siteName: site.name,
      type: "website",
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

export default async function MassagePage({
  params,
}: MassagePageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <ServicePageContent
      service={service}
      routeType="massage"
    />
  );
}
