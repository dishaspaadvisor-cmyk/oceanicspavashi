import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight as FiArrowRight,
  FaCalendarAlt as FiCalendar,
  FaHeart as FiHeart,
  FaMapMarkerAlt as FiMapPin,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
  FaStar as FiStar,
} from "react-icons/fa";

import { galleryImages } from "@/data/gallery";
import { site } from "@/data/site";

/* =========================================================
   SEO
========================================================= */

export const metadata: Metadata = {
  title: "best spa in Vashi, Navi Mumbai | Oceanic Spa in vashi",

  description:
    "Explore the Oceanic Spa Vashi gallery and discover our spa ambience, massage rooms, treatment spaces and relaxing wellness environment in Vashi, Navi Mumbai.",

  keywords: [
    "spa gallery Vashi",
    "spa photos Vashi",
    "massage spa photos Vashi",
    "Oceanic Spa Vashi photos",
    "Oceanic Spa Vashi gallery",
    "spa interior Vashi",
    "massage room Vashi",
    "spa Navi Mumbai",
    "best spa in Vashi",
     "spa in Vashi",
  ],

  alternates: {
    canonical: "/gallery",
  },

  openGraph: {
    title:
      "Spa Gallery in Vashi, Navi Mumbai | Oceanic Spa",

    description:
      "Explore photos of Oceanic Spa Vashi, including our spa ambience, treatment rooms and wellness spaces.",

    url: "/gallery",

    siteName: site.name,

    type: "website",

    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Oceanic Spa Vashi Gallery",

    description:
      "Explore the spa ambience and treatment spaces at Oceanic Spa Vashi.",

    images: [
      galleryImages[0]?.image ||
      "/gallery/gallery-1.png",
    ],
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

export default function GalleryPage() {
  return (
    <main className="overflow-x-hidden bg-[#F7FAF9]/90">

      {/* ===================================================
          HERO
      ==================================================== */}

      <section
        aria-labelledby="gallery-page-heading"
        className="
          relative
          overflow-hidden
          bg-[#F7FAF9]
          pb-12
          pt-8
          sm:pb-16
          sm:pt-12
          lg:pb-20
          lg:pt-16
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
              -bottom-40
              -right-40
              h-[30rem]
              w-[30rem]
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
              className="
                transition-colors
                hover:text-[#175C5A]
              "
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
              Gallery
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
                Our Gallery
              </span>

              <span className="h-px w-7 bg-[#D8C2A0]" />
            </div>

            <h1
              id="gallery-page-heading"
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
              A Glimpse of
              <br />
              <span className="text-[#175C5A]">
                Oceanic Spa Vashi
              </span>
              .
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
              Explore our spa ambience, treatment spaces
              and relaxing environment before your visit
              to Oceanic Spa Vashi, Navi Mumbai.
            </p>
          </div>

        </div>
      </section>

      {/* ===================================================
          GALLERY
      ==================================================== */}

      <section
        aria-labelledby="gallery-grid-heading"
        className="
          bg-white
          py-12
          sm:py-16
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
          {/* Section intro */}

          <div
            className="
              flex
              flex-col
              gap-4
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
                Inside Oceanic Spa
              </p>

              <h2
                id="gallery-grid-heading"
                className="
                  mt-2
                  font-serif
                  text-2xl
                  font-normal
                  text-[#24302F]
                  sm:text-3xl
                "
              >
                Our spa experience
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
              Take a closer look at the spaces created
              for your relaxation and wellness experience.
            </p>
          </div>

          {/* =================================================
              MASONRY-STYLE GRID
          ================================================== */}

          <div
            className="
              mt-8
              grid
              grid-cols-2
              gap-3
              sm:mt-10
              sm:grid-cols-3
              sm:gap-4
              lg:grid-cols-4
            "
          >
            {galleryImages.map((item, index) => {
              const featured =
                index === 0 ||
                index === 5 ||
                index === 10;

              return (
                <article
                  key={item.id}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    bg-[#E9EFEC]
                    ${featured
                      ? "col-span-2 aspect-[1.55/1] sm:row-span-2 sm:aspect-auto"
                      : "aspect-[1/1.05]"
                    }
                  `}
                >
                  <Image
                    src={item.image}
                    alt={
                      item.alt ||
                      `${item.title} at Oceanic Spa Vashi`
                    }
                    fill
                    priority={index < 3}
                    sizes={
                      featured
                        ? "(max-width: 639px) 100vw, (max-width: 1023px) 66vw, 50vw"
                        : "(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                    }
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.06]
                    "
                  />

                  {/* Overlay */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#123B3A]/75
                      via-[#123B3A]/10
                      to-transparent
                      opacity-70
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* Category */}

                  {item.category && (
                    <span
                      className="
                        absolute
                        left-3
                        top-3
                        rounded-full
                        border
                        border-white/20
                        bg-[#123B3A]/50
                        px-2.5
                        py-1.5
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-[0.13em]
                        text-white
                        backdrop-blur-md
                        sm:left-4
                        sm:top-4
                      "
                    >
                      {item.category}
                    </span>
                  )}

                  {/* Content */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      p-3
                      sm:p-4
                      lg:p-5
                    "
                  >
                    <div
                      className="
                        flex
                        items-end
                        justify-between
                        gap-3
                      "
                    >
                      <div>
                        <h3
                          className={`
                            font-serif
                            leading-tight
                            text-white
                            ${featured
                              ? "text-xl sm:text-2xl"
                              : "text-sm sm:text-base"
                            }
                          `}
                        >
                          {item.title}
                        </h3>

                        {item.description && (
                          <p
                            className="
                              mt-1
                              hidden
                              max-w-md
                              text-[10px]
                              leading-5
                              text-white/65
                              sm:block
                            "
                          >
                            {item.description}
                          </p>
                        )}
                      </div>

                      <span
                        className="
                          flex
                          h-8
                          w-8
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
                        "
                      >
                        <FiArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          EXPERIENCE CTA
      ==================================================== */}

      <section
        aria-labelledby="gallery-cta-heading"
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
          className="
            pointer-events-none
            absolute
            inset-0
          "
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
            max-w-4xl
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
            id="gallery-cta-heading"
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
            Like what you see?
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-7
              text-white/60
            "
          >
            Experience the Oceanic Spa Vashi ambience
            for yourself. Book your preferred treatment
            today.
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
              href={`https://wa.me/${site.contact.whatsapp
                }?text=${encodeURIComponent(
                  "Hello Oceanic Spa Vashi, I would like to book a spa appointment."
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

              WhatsApp
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
              className="
                font-serif
                text-2xl
                text-[#24302F]
                sm:text-3xl
              "
            >
              Oceanic Spa Vashi gallery
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
                Explore the Oceanic Spa Vashi gallery to
                get a glimpse of our spa ambience,
                treatment spaces and relaxing environment
                in Vashi, Navi Mumbai.
              </p>

              <p>
                From relaxing massage treatments to
                comfortable wellness spaces, our goal is
                to provide a calm environment where you
                can take time away from your everyday
                routine.
              </p>

              <p>
                Explore our{" "}
                <Link
                  href="/services"
                  className="
                    font-semibold
                    text-[#175C5A]
                    underline-offset-4
                    hover:underline
                  "
                >
                  massage and spa services
                </Link>{" "}
                and choose a treatment that suits your
                preferences.
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
      <span
        className="
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-[#EEF7F5]
          text-[#175C5A]
        "
      >
        {children}
      </span>

      <span>{children}</span>
    </span>
  );
}
