

import type { Metadata } from "next";


import { site } from "@/data/site";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Offers from "@/components/home/Offers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import Location from "@/components/home/Location";
import FAQ from "@/components/home/FAQ";

/* =========================================================
   SEO
========================================================= */

export const metadata: Metadata = {
  title:
    "Oceanic Spa Vashi | Best Spa & Massage in Vashi, Navi Mumbai",

  description:
    "Experience relaxing spa and massage treatments at Oceanic Spa Vashi, Navi Mumbai. Explore Deep Tissue, Swedish, Balinese, Thai, Foot Reflexology, Four Hand Massage and more.",

  keywords: [
    "Oceanic Spa Vashi",
    "spa in Vashi",
    "spa in Vashi Navi Mumbai",
    "best spa in Vashi",
    "massage in Vashi",
    "spa near Vashi",
    "massage spa in Vashi",
    "body massage in Vashi",
    "full body massage Vashi",
    "massage center in Vashi",
    "spa center in Vashi",
    "Swedish massage Vashi",
    "Balinese massage Vashi",
    "Thai massage Vashi",
    "deep tissue massage Vashi",
    "foot reflexology Vashi",
    "four hand massage Vashi",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Oceanic Spa Vashi | Premium Spa & Massage in Vashi",

    description:
      "Discover premium massage and spa treatments at Oceanic Spa Vashi, Navi Mumbai.",

    url: "/",

    siteName: site.name,

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: site.branding.logo,
        width: 1200,
        height: 630,
        alt: site.branding.logoAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Oceanic Spa Vashi | Premium Spa & Massage",

    description:
      "Relax, recharge and rejuvenate at Oceanic Spa Vashi, Navi Mumbai.",

    images: [site.branding.logo],
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

/* =========================================================
   HOME PAGE
========================================================= */

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* ===================================================
          HERO
      ==================================================== */}

      <Hero />

      {/* ===================================================
          SERVICES
      ==================================================== */}

      <Services />

      {/* ===================================================
          OFFERS
      ==================================================== */}

      <Offers />

      {/* ===================================================
          WHY CHOOSE US
      ==================================================== */}

      <WhyChooseUs />

      {/* ===================================================
          GALLERY
      ==================================================== */}

      <Gallery />

      {/* ===================================================
          TESTIMONIALS
      ==================================================== */}

      <Testimonials />

      {/* ===================================================
          LOCATION
      ==================================================== */}

      <Location />

      {/* ===================================================
          FAQ
      ==================================================== */}

      <FAQ />
    </main>
  );
}