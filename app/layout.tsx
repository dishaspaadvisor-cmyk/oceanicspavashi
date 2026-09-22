import type { Metadata, Viewport } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MainContent from "@/components/layout/MainContent";
import FloatingCTA from "@/components/cards/FloatingCTA";
import BottomCTA from "@/components/cards/BottomCTA";
import Popup from "@/components/Popup";

import { site } from "@/data/site";

import {
  defaultMetadata,
  getLocalBusinessSchema,
  getWebsiteSchema,
} from "@/lib/seo";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  ...defaultMetadata,

  title: {
    default: site.seo.title,
    template: `%s | ${site.shortName}`,
  },

  description: site.seo.description,

  keywords: site.seo.keywords,

  metadataBase: new URL(site.url),

  alternates: {
    canonical: site.url,
  },

  applicationName: site.name,

  category: "Health & Wellness",

  authors: [
    {
      name: site.name,
    },
  ],

  creator: site.name,

  publisher: site.name,

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
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

  icons: {
    icon: site.branding.favicon,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",

    url: site.url,

    siteName: site.name,

    title: site.seo.title,

    description: site.seo.description,

    images: [
      {
        url: site.seo.ogImage,
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

    images: [site.seo.ogImage],
  },
};

/* =========================================================
   VIEWPORT
========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,

  themeColor: "#0c0b09",

  colorScheme: "dark",
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = getLocalBusinessSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <head>
        {/* =================================================
            LOCAL BUSINESS SCHEMA
        ================================================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />





        {/* =================================================
            WEBSITE SCHEMA
        ================================================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body
        className="min-h-screen text-white antialiased"
        suppressHydrationWarning
      >
        {/* =================================================
            GLOBAL NAVBAR
        ================================================= */}

        <Navbar />

        {/* =================================================
            PAGE CONTENT
        ================================================= */}

        <MainContent>{children}</MainContent>

        {/* =================================================
            GLOBAL POPUP
            Mounted outside page content so it appears on
            every route.
        ================================================= */}

        <Popup />

        {/* =================================================
            GLOBAL BOTTOM CTA
        ================================================= */}

        <BottomCTA />

        {/* =================================================
            GLOBAL FOOTER
        ================================================= */}

        <Footer />

        {/* =================================================
            GLOBAL FLOATING CTA
        ================================================= */}

        <FloatingCTA />

        {/* =================================================
            GOOGLE ANALYTICS
        ================================================= */}
        {/* <!-- Google tag (gtag.js) --> */}



      </body>
    </html>
  );
}
