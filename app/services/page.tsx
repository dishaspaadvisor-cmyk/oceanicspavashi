import type { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRight as FiArrowRight,
  FaCalendarAlt as FiCalendar,
  FaCheck as FiCheck,
  FaHeart as FiHeart,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
} from "react-icons/fa";

import { activeServices } from "@/data/service";
import { site } from "@/data/site";
import ServiceCard from "@/components/service/ServiceCard";

/* =========================================================
   SEO
========================================================= */

export const metadata: Metadata = {
  title:
    "Spa & Massage Services in Vashi | Oceanic Spa Vashi",

  description:
    "Explore massage and spa services at Oceanic Spa Vashi, Navi Mumbai. Discover Deep Tissue, Swedish, Balinese, Thai, Foot Reflexology, Four Hand Massage, Lomi-Lomi and more treatments.",

  keywords: [
    "spa services in Vashi",
    "massage services in Vashi",
    "spa treatments Vashi",
    "massage treatments Vashi",
    "body massage Vashi",
    "full body massage Vashi",
    "Swedish massage Vashi",
    "Balinese massage Vashi",
    "Thai massage Vashi",
    "deep tissue massage Vashi",
    "foot reflexology Vashi",
    "four hand massage Vashi",
    "Lomi Lomi massage Vashi",
    "spa treatments Navi Mumbai",
    "massage services Navi Mumbai",
    "Oceanic Spa Vashi services",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Spa & Massage Services in Vashi | Oceanic Spa Vashi",

    description:
      "Explore relaxing massage and spa treatments at Oceanic Spa Vashi, Navi Mumbai.",

    url: "/services",

    siteName: site.name,

    type: "website",

    locale: "en_IN",
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
   PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden bg-[#F7FAF9]/90">
      {/* ===================================================
          HERO
      ==================================================== */}

      <section
        aria-labelledby="services-page-heading"
        className="
          relative
          overflow-hidden
          bg-[#F7FAF9]
          pb-14
          pt-10
          sm:pb-18
          sm:pt-14
          lg:pb-20
          lg:pt-18
        "
      >
        {/* Background decoration */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="
              absolute
              -left-40
              -top-32
              h-96
              w-96
              rounded-full
              bg-[#175C5A]/[0.045]
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              -right-40
              bottom-0
              h-[28rem]
              w-[28rem]
              rounded-full
              bg-[#D8C2A0]/[0.12]
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
          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="
              flex
              items-center
              gap-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.1em]
              text-[#8B9692]
            "
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#175C5A]"
            >
              Home
            </Link>

            <span className="text-[#C4CCC9]">
              /
            </span>

            <span
              className="text-[#175C5A]"
              aria-current="page"
            >
              Services
            </span>
          </nav>

          {/* Header */}

          <div
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-center
              sm:mt-10
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-2.5
              "
            >
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
                Our Treatments
              </span>

              <span className="h-px w-7 bg-[#D8C2A0]" />
            </div>

            <h1
              id="services-page-heading"
              className="
                mt-4
                font-serif
                text-4xl
                font-normal
                leading-[1.05]
                tracking-tight
                text-[#24302F]
                sm:text-5xl
                lg:text-[4rem]
              "
            >
              Spa & Massage Services
              <span className="text-[#175C5A]">.</span>
            </h1>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-[#687371]
                sm:text-[15px]
              "
            >
              Discover a selection of massage and wellness
              treatments at Oceanic Spa Vashi, designed to
              help you relax, recharge and enjoy your time
              away from the everyday.
            </p>
          </div>

          {/* Trust row */}

          <div
            className="
              mx-auto
              mt-7
              flex
              max-w-2xl
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-2.5
            "
          >
            <TrustPoint>
              <FiCheck size={12} />
              Relaxation-focused treatments
            </TrustPoint>

            <TrustPoint>
              <FiCheck size={12} />
              Comfortable environment
            </TrustPoint>

            <TrustPoint>
              <FiCheck size={12} />
              Vashi, Navi Mumbai
            </TrustPoint>
          </div>
        </div>
      </section>

      {/* ===================================================
          SERVICES GRID
      ==================================================== */}

      <section
        aria-labelledby="all-treatments-heading"
        className="
          bg-white
          py-14
          sm:py-18
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* Section heading */}

          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#175C5A]
                "
              >
                Explore treatments
              </p>

              <h2
                id="all-treatments-heading"
                className="
                  mt-2
                  font-serif
                  text-2xl
                  font-normal
                  text-[#24302F]
                  sm:text-3xl
                "
              >
                Find your way to relax
              </h2>
            </div>

            <p
              className="
                max-w-md
                text-xs
                leading-6
                text-[#89918F]
              "
            >
              Choose a treatment based on your preferred
              massage style and experience.
            </p>
          </div>

          {/* Cards */}

          <div
            className="
              mt-8
              grid
              gap-5
              sm:grid-cols-2
              lg:mt-10
              lg:grid-cols-3
              lg:gap-6
            "
          >
            {activeServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                variant={
                  index === 0
                    ? "featured"
                    : "default"
                }
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          BOOKING CTA
      ==================================================== */}

      <section
        aria-labelledby="services-cta-heading"
        className="
          relative
          overflow-hidden
          bg-[#175C5A]
          py-14
          sm:py-18
          lg:py-20
        "
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="
              absolute
              -right-28
              -top-28
              h-72
              w-72
              rounded-full
              border
              border-white/[0.07]
            "
          />

          <div
            className="
              absolute
              -bottom-32
              -left-20
              h-72
              w-72
              rounded-full
              bg-[#D8C2A0]/10
              blur-[90px]
            "
          />
        </div>

        <div
          className="
            relative
            mx-auto
            max-w-5xl
            px-4
            text-center
            sm:px-6
            lg:px-8
          "
        >
          <div
            className="
              mx-auto
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-white/10
              text-[#D8C2A0]
            "
          >
            <FiHeart size={19} />
          </div>

          <h2
            id="services-cta-heading"
            className="
              mt-5
              font-serif
              text-3xl
              font-normal
              leading-tight
              text-white
              sm:text-4xl
            "
          >
            Not sure which treatment to choose?
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-6.5
              text-white/60
            "
          >
            Contact Oceanic Spa Vashi and ask about the
            available treatments, timings and appointment
            options.
          </p>

          {/* CTA buttons */}

          <div
            className="
              mx-auto
              mt-7
              grid
              max-w-lg
              gap-2.5
              sm:flex
              sm:justify-center
            "
          >
            {/* Book */}

            <Link
              href="/contact"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#D8C2A0]
                px-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#24302F]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#E6D5BA]
              "
            >
              <FiCalendar size={15} />

              Book Appointment

              <FiArrowRight size={14} />
            </Link>

            {/* WhatsApp */}

            <a
              href={`https://wa.me/${
                site.contact.whatsapp
              }?text=${encodeURIComponent(
                "Hello Oceanic Spa Vashi, I would like help choosing a massage treatment."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#25D366]/30
                bg-[#25D366]/10
                px-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#8EF0B3]
                transition-all
                duration-300
                hover:border-[#25D366]/60
                hover:bg-[#25D366]/15
              "
            >
              <FiMessageCircle size={15} />

              WhatsApp Us
            </a>

            {/* Call */}

            <a
              href={`tel:${site.contact.phone}`}
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#3B82F6]/30
                bg-[#3B82F6]/10
                px-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#93C5FD]
                transition-all
                duration-300
                hover:border-[#3B82F6]/60
                hover:bg-[#3B82F6]/15
              "
            >
              <FiPhone size={15} />

              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================
          SEO CONTENT
      ==================================================== */}

      <section
        aria-labelledby="services-info-heading"
        className="
          bg-[#F7FAF9]
          py-12
          sm:py-16
        "
      >
        <div
          className="
            mx-auto
            max-w-4xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div
            className="
              rounded-[1.5rem]
              border
              border-[#E1E8E5]
              bg-white
              p-6
              shadow-[0_5px_25px_rgba(36,48,47,0.035)]
              sm:p-8
            "
          >
            <h2
              id="services-info-heading"
              className="
                font-serif
                text-2xl
                text-[#24302F]
                sm:text-3xl
              "
            >
              Massage & spa treatments in Vashi
            </h2>

            <div
              className="
                mt-4
                space-y-4
                text-sm
                leading-7
                text-[#727D7A]
              "
            >
              <p>
                Oceanic Spa Vashi offers a variety of
                massage and spa treatments for guests
                looking for a relaxing wellness experience
                in Vashi, Navi Mumbai. Our treatment menu
                includes different massage styles and
                experiences to suit individual preferences.
              </p>

              <p>
                Explore treatments such as Deep Tissue
                Massage, Swedish Massage, Balinese
                Massage, Thai Massage, Foot Reflexology,
                Lomi-Lomi Massage and Four Hand Massage.
                Each treatment has its own dedicated page
                where you can learn more about the
                experience before booking.
              </p>

              <p>
                If you are unsure which massage is suitable
                for you, contact Oceanic Spa Vashi by phone
                or WhatsApp and our team can help you
                understand the available options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   TRUST POINT
========================================================= */

function TrustPoint({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      className="
        inline-flex
        items-center
        gap-1.5
        text-[9px]
        font-medium
        text-[#7D8884]
      "
    >
      <span className="text-[#175C5A]">
        {children}
      </span>
    </span>
  );
}
