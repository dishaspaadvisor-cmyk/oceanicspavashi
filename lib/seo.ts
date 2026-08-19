import type { Metadata } from "next";

import { site } from "@/data/site";
import type { Service } from "@/data/service";
import type { SEOPage } from "@/data/keyword";

/* =========================================================
   TYPES
========================================================= */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/* =========================================================
   BASE URL
========================================================= */

export const SITE_URL = site.url.replace(/\/$/, "");

/* =========================================================
   URL HELPERS
========================================================= */

export const absoluteUrl = (path: string = "/"): string => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${SITE_URL}${normalizedPath}`;
};

/* =========================================================
   IMAGE URL
========================================================= */

export const absoluteImageUrl = (image: string): string => {
  return absoluteUrl(image);
};

/* =========================================================
   DEFAULT METADATA
========================================================= */

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: site.seo.title,
    template: `%s | ${site.shortName}`,
  },

  description: site.seo.description,

  keywords: site.seo.keywords,

  authors: [
    {
      name: site.name,
    },
  ],

  creator: site.name,

  publisher: site.name,

  alternates: {
    canonical: SITE_URL,
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

  openGraph: {
    type: "website",
    locale: "en_IN",

    url: SITE_URL,

    siteName: site.name,

    title: site.seo.title,

    description: site.seo.description,

    images: [
      {
        url: absoluteImageUrl(site.seo.ogImage),
        width: 1200,
        height: 630,
        alt: `${site.name} - ${site.tagline}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: site.seo.title,

    description: site.seo.description,

    images: [absoluteImageUrl(site.seo.ogImage)],
  },

  icons: {
    icon: site.branding.favicon,
  },
};

/* =========================================================
   PAGE METADATA
========================================================= */

export const createPageMetadata = (
  page: SEOPage
): Metadata => {
  const canonicalPath =
    page.slug === "" ? "/" : `/${page.slug}`;

  const canonicalUrl = absoluteUrl(canonicalPath);

  return {
    title: page.title,

    description: page.description,

    keywords: [
      page.primaryKeyword,
      ...page.secondaryKeywords,
    ],

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: page.index,
      follow: page.follow,

      googleBot: {
        index: page.index,
        follow: page.follow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",

      url: canonicalUrl,

      title: page.title,

      description: page.description,

      siteName: site.name,

      locale: "en_IN",

      images: [
        {
          url: absoluteImageUrl(site.seo.ogImage),
          width: 1200,
          height: 630,
          alt: page.h1,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: page.title,

      description: page.description,

      images: [absoluteImageUrl(site.seo.ogImage)],
    },
  };
};

/* =========================================================
   SERVICE METADATA
========================================================= */

export const createServiceMetadata = (
  service: Service
): Metadata => {
  const canonicalPath = `/services/${service.slug}`;

  const canonicalUrl = absoluteUrl(canonicalPath);

  return {
    title: service.seo.title,

    description: service.seo.description,

    keywords: service.keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: service.active,
      follow: service.active,

      googleBot: {
        index: service.active,
        follow: service.active,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",

      url: canonicalUrl,

      siteName: site.name,

      title: service.seo.title,

      description: service.seo.description,

      locale: "en_IN",

      images: [
        {
          url: absoluteImageUrl(service.image),
          width: 1200,
          height: 800,
          alt: service.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: service.seo.title,

      description: service.seo.description,

      images: [absoluteImageUrl(service.image)],
    },
  };
};

/* =========================================================
   LOCAL BUSINESS SCHEMA
========================================================= */

export const getLocalBusinessSchema = () => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    "@id": `${SITE_URL}/#localbusiness`,

    name: site.name,

    url: SITE_URL,

    image: absoluteImageUrl(site.seo.ogImage),

    logo: absoluteImageUrl(site.branding.logo),

    description: site.seo.description,

    telephone: `+91${site.contact.phone}`,

    email: site.contact.email,

    priceRange: site.business.priceRange,

    address: {
      "@type": "PostalAddress",

      streetAddress: site.address.street,

      addressLocality: site.address.city,

      addressRegion: site.address.state,

      postalCode: site.address.postalCode,

      addressCountry: site.address.country,
    },

    areaServed: site.business.areaServed.map(
      (area) => ({
        "@type": "Place",
        name: area,
      })
    ),

    openingHoursSpecification:
      site.hours.map((item) => ({
        "@type": "OpeningHoursSpecification",

        dayOfWeek: item.day,

        opens: convertTimeTo24Hour(item.open),

        closes: convertTimeTo24Hour(item.close),
      })),

    sameAs: Object.values(site.social).filter(Boolean),
  };

  if (site.coordinates) {
    schema.geo = {
      "@type": "GeoCoordinates",

      latitude: site.coordinates.latitude,

      longitude: site.coordinates.longitude,
    };
  }

  return schema;
};

/* =========================================================
   WEBSITE SCHEMA
========================================================= */

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  name: site.name,

  url: SITE_URL,

  description: site.seo.description,

  publisher: {
    "@id": `${SITE_URL}/#localbusiness`,
  },

  inLanguage: "en-IN",
});

/* =========================================================
   SERVICE SCHEMA
========================================================= */

export const getServiceSchema = (
  service: Service
) => {
  const serviceUrl = absoluteUrl(
    `/services/${service.slug}`
  );

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",

    "@type": "Service",

    "@id": `${serviceUrl}/#service`,

    name: service.name,

    description: service.description,

    url: serviceUrl,

    image: absoluteImageUrl(service.image),

    provider: {
      "@type": "LocalBusiness",

      "@id": `${SITE_URL}/#localbusiness`,

      name: site.name,

      url: SITE_URL,

    },

    areaServed: {
      "@type": "City",

      name: "Vashi",
    },
  };

  if (service.price !== undefined) {
    schema.offers = {
      "@type": "Offer",

      price: service.price,

      priceCurrency: "INR",

      availability:
        "https://schema.org/InStock",

      url: serviceUrl,
    };
  }

  return schema;
};

/* =========================================================
   FAQ SCHEMA
========================================================= */

export const getFAQSchema = (
  faqs: FAQItem[]
) => {
  if (!faqs.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };
};

/* =========================================================
   BREADCRUMB SCHEMA
========================================================= */

export const getBreadcrumbSchema = (
  items: BreadcrumbItem[]
) => ({
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  itemListElement: items.map(
    (item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: absoluteUrl(item.url),
    })
  ),
});

/* =========================================================
   CONTACT / PHONE HELPERS
========================================================= */

export const getPhoneHref = (): string => {
  return `tel:${site.contact.phone}`;
};

export const getWhatsAppHref = (
  message?: string
): string => {
  const phone = site.contact.whatsapp;

  if (!message) {
    return `https://wa.me/${phone}`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;
};

/* =========================================================
   GOOGLE MAPS
========================================================= */

export const getGoogleMapsHref = (): string => {
  return site.maps.googleMapsUrl;
};

export const getDirectionsHref = (): string => {
  return site.maps.directionsUrl;
};

/* =========================================================
   TIME CONVERTER
========================================================= */

const convertTimeTo24Hour = (
  time: string
): string => {
  const match = time.match(
    /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i
  );

  if (!match) {
    return time;
  }

  let hour = Number(match[1]);

  const minute = match[2];

  const period = match[3].toUpperCase();

  if (period === "AM" && hour === 12) {
    hour = 0;
  }

  if (period === "PM" && hour !== 12) {
    hour += 12;
  }

  return `${String(hour).padStart(
    2,
    "0"
  )}:${minute}`;
};

/* =========================================================
   JSON-LD SCRIPT HELPER
========================================================= */

export const jsonLd = (
  data: Record<string, unknown> | null
) => {
  if (!data) {
    return null;
  }

  return {
    __html: JSON.stringify(data).replace(
      /</g,
      "\\u003c"
    ),
  };
};