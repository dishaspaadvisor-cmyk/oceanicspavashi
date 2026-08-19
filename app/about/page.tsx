import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight as FiArrowRight,
  FaCalendarAlt as FiCalendar,
  FaCheck as FiCheck,
  FaHeart as FiHeart,
  FaMapMarkerAlt as FiMapPin,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
  FaShieldAlt as FiShield,
  FaStar as FiStar,
} from "react-icons/fa";

import ContactForm from "@/components/cards/ContactForm";
import { site } from "@/data/site";

/* =========================================================
   SEO
========================================================= */

export const metadata: Metadata = {
  title:
    "About Oceanic Spa Vashi | Spa & Massage in Navi Mumbai",

  description:
    "Learn more about Oceanic Spa Vashi, a relaxing spa in Vashi, Navi Mumbai offering a range of massage and wellness treatments in a comfortable environment.",

  keywords: [
    "about Oceanic Spa Vashi",
    "Oceanic Spa Vashi",
    "spa Vashi",
    "massage spa Vashi",
    "spa Navi Mumbai",
    "massage Vashi Navi Mumbai",
    "wellness spa Vashi",
    "best spa Vashi",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "About Oceanic Spa Vashi | Spa & Massage in Navi Mumbai",

    description:
      "Discover Oceanic Spa Vashi and our approach to creating a comfortable and relaxing spa experience in Vashi, Navi Mumbai.",

    url: "/about",

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

export default function AboutPage() {
  const whatsappUrl =
    `https://wa.me/${site.contact.whatsapp}` +
    `?text=${encodeURIComponent(
      "Hello Oceanic Spa Vashi, I would like to know more about your spa and massage treatments."
    )}`;

  /* =======================================================
     LOCAL BUSINESS JSON-LD
  ======================================================== */

  const localBusinessSchema = {
    "@context": "https://schema.org",

    "@type": "DaySpa",

    "@id": `${site.url}#spa`,

    name: site.name,

    url: site.url,

    telephone: site.contact.phone,

    ...(site.contact.email
      ? {
          email: site.contact.email,
        }
      : {}),

    ...(site.contact.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: site.contact.address,
            addressLocality: "Vashi",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        }
      : {}),

    areaServed: [
      {
        "@type": "Place",
        name: "Vashi",
      },
      {
        "@type": "Place",
        name: "Navi Mumbai",
      },
    ],

    sameAs: [],
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
        name: "About",
        item: `${site.url}/about`,
      },
    ],
  };

  return (
    <main className="overflow-x-hidden bg-[#F7FAF9]/90">

      {/* ===================================================
          STRUCTURED DATA
      ==================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* ===================================================
          HERO
      ==================================================== */}

      <section
        aria-labelledby="about-page-heading"
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
              className="hover:text-[#175C5A]"
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
              About
            </span>
          </nav>

          {/* Hero */}

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
                About Oceanic Spa
              </span>

              <span className="h-px w-7 bg-[#D8C2A0]" />
            </div>

            <h1
              id="about-page-heading"
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
              Your Space to
              <br />
              <span className="text-[#175C5A]">
                Pause & Relax
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
              Welcome to Oceanic Spa Vashi, a place
              created for those looking to step away from
              their busy routine and enjoy a relaxing spa
              and massage experience.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================
          INTRODUCTION
      ==================================================== */}

      <section
        aria-labelledby="about-introduction-heading"
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
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[0.95fr_1.05fr]
              lg:items-center
              lg:gap-14
            "
          >
            {/* Image */}

            <div
              className="
                relative
                aspect-[1/1.05]
                overflow-hidden
                rounded-[1.5rem]
                bg-[#E9EFEC]
                sm:aspect-[1.15/1]
              "
            >
              <Image
                src={
                  "/gallery/gallery-1.png"
                }
                alt="Oceanic Spa Vashi relaxing spa interior"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#123B3A]/45
                  via-transparent
                  to-transparent
                "
              />

              {/* Image label */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-2xl
                  border
                  border-white/15
                  bg-[#123B3A]/60
                  p-4
                  backdrop-blur-md
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#D8C2A0]
                  "
                >
                  <FiHeart size={14} />

                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                    "
                  >
                    Relax • Restore • Reconnect
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}

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
                Our Story
              </p>

              <h2
                id="about-introduction-heading"
                className="
                  mt-2
                  font-serif
                  text-3xl
                  font-normal
                  leading-tight
                  text-[#24302F]
                  sm:text-4xl
                "
              >
                A comfortable place
                to slow down.
              </h2>

              <div
                className="
                  mt-5
                  space-y-4
                  text-sm
                  leading-7
                  text-[#727D7A]
                "
              >
                <p>
                  At Oceanic Spa Vashi, we believe that
                  taking time for yourself is an important
                  part of a balanced lifestyle.
                </p>

                <p>
                  Our spa experience brings together a
                  comfortable environment and a range of
                  massage treatments so that you can
                  choose an experience that matches your
                  preferences.
                </p>

                <p>
                  Whether you are looking for a relaxing
                  full body massage, traditional Thai
                  massage, Swedish massage, Balinese
                  massage, aroma massage or another
                  treatment, our goal is to make your
                  visit comfortable from start to finish.
                </p>
              </div>

              {/* Mini stats */}

              <div
                className="
                  mt-7
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-3
                "
              >
                <MiniStat
                  icon={<FiHeart size={15} />}
                  title="Relaxing"
                  text="Spa ambience"
                />

                <MiniStat
                  icon={<FiStar size={15} />}
                  title="Variety"
                  text="Massage options"
                />

                <MiniStat
                  icon={<FiMapPin size={15} />}
                  title="Vashi"
                  text="Navi Mumbai"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          EXPERIENCE
      ==================================================== */}

      <section
        aria-labelledby="experience-heading"
        className="
          bg-[#F7FAF9]
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
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#175C5A]
              "
            >
              The Oceanic Experience
            </p>

            <h2
              id="experience-heading"
              className="
                mt-2
                font-serif
                text-3xl
                font-normal
                text-[#24302F]
                sm:text-4xl
              "
            >
              Designed around your
              comfort
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-[#727D7A]
              "
            >
              From choosing your treatment to leaving
              the spa, every part of the experience should
              feel calm, comfortable and unhurried.
            </p>
          </div>

          <div
            className="
              mt-8
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            <ExperienceCard
              icon={<FiHeart size={19} />}
              number="01"
              title="Relaxing Environment"
              description="A calm environment designed to help you step away from your everyday routine."
            />

            <ExperienceCard
              icon={<FiStar size={19} />}
              number="02"
              title="Treatment Variety"
              description="Choose from different massage styles based on the experience you prefer."
            />

            <ExperienceCard
              icon={<FiShield size={19} />}
              number="03"
              title="Comfort First"
              description="Your comfort and treatment preferences remain an important part of the experience."
            />

            <ExperienceCard
              icon={<FiMapPin size={19} />}
              number="04"
              title="Convenient Location"
              description="A convenient spa destination for guests in Vashi and nearby areas of Navi Mumbai."
            />
          </div>
        </div>
      </section>

      {/* ===================================================
          MASSAGE EXPERIENCE
      ==================================================== */}

      <section
        aria-labelledby="massage-experience-heading"
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
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[1.05fr_0.95fr]
              lg:items-center
              lg:gap-14
            "
          >
            {/* Content */}

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
                Massage & Wellness
              </p>

              <h2
                id="massage-experience-heading"
                className="
                  mt-2
                  font-serif
                  text-3xl
                  font-normal
                  leading-tight
                  text-[#24302F]
                  sm:text-4xl
                "
              >
                Find a treatment
                that suits you.
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-[#727D7A]
                "
              >
                Everyone has a different idea of
                relaxation. That is why Oceanic Spa Vashi
                offers a variety of massage treatments,
                allowing you to explore different styles
                and choose what feels right for you.
              </p>

              <div className="mt-6 space-y-3">
                <CheckPoint>
                  Full Body Massage
                </CheckPoint>

                <CheckPoint>
                  Swedish Massage
                </CheckPoint>

                <CheckPoint>
                  Full Body Thai Massage
                </CheckPoint>

                <CheckPoint>
                  Balinese Massage
                </CheckPoint>

                <CheckPoint>
                  French Aroma Massage
                </CheckPoint>

                <CheckPoint>
                  Deep Tissue Massage
                </CheckPoint>
              </div>

              <Link
                href="/services"
                className="
                  mt-7
                  inline-flex
                  min-h-11
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#175C5A]
                  px-5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#124B49]
                "
              >
                Explore All Services

                <FiArrowRight size={14} />
              </Link>
            </div>

            {/* Visual */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[1.5rem]
                bg-[#175C5A]
                p-6
                sm:p-8
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-20
                  -top-20
                  h-52
                  w-52
                  rounded-full
                  border
                  border-white/[0.08]
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-24
                  -left-16
                  h-52
                  w-52
                  rounded-full
                  bg-[#D8C2A0]/10
                  blur-[70px]
                "
              />

              <div className="relative">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/10
                    text-[#D8C2A0]
                  "
                >
                  <FiHeart size={20} />
                </div>

                <h3
                  className="
                    mt-6
                    font-serif
                    text-2xl
                    font-normal
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  Your time.
                  <br />
                  Your treatment.
                  <br />
                  Your experience.
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-white/60
                  "
                >
                  Take a break from the everyday and
                  enjoy dedicated time for relaxation at
                  Oceanic Spa Vashi.
                </p>

                <div
                  className="
                    mt-7
                    grid
                    gap-2
                    sm:flex
                  "
                >
                  <Link
                    href="/contact"
                    className="
                      inline-flex
                      min-h-11
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#D8C2A0]
                      px-4
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#24302F]
                      hover:bg-[#E6D5BA]
                    "
                  >
                    <FiCalendar size={14} />

                    Book Appointment
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      min-h-11
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-[#25D366]/30
                      bg-[#25D366]/10
                      px-4
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#8EF0B3]
                      hover:bg-[#25D366]/15
                    "
                  >
                    <FiMessageCircle size={14} />

                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          LOCATION
      ==================================================== */}

      <section
        aria-labelledby="about-location-heading"
        className="
          bg-[#F7FAF9]
          py-12
          sm:py-16
        "
      >
        <div
          className="
            mx-auto
            max-w-5xl
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
              sm:p-8
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
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
                  Find Us
                </p>

                <h2
                  id="about-location-heading"
                  className="
                    mt-2
                    font-serif
                    text-2xl
                    font-normal
                    text-[#24302F]
                    sm:text-3xl
                  "
                >
                  Oceanic Spa Vashi
                </h2>

                <div
                  className="
                    mt-3
                    flex
                    items-start
                    gap-2
                    text-sm
                    leading-6
                    text-[#727D7A]
                  "
                >
                  <FiMapPin
                    size={16}
                    className="
                      mt-1
                      shrink-0
                      text-[#175C5A]
                    "
                  />

                  <span>
                    {site.contact.address}
                  </span>
                </div>
              </div>

              {site.contact.mapUrl && (
                <a
                  href={site.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    min-h-11
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#175C5A]/20
                    bg-[#EEF7F5]
                    px-5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#175C5A]
                    transition-colors
                    hover:bg-[#E3F1EE]
                  "
                >
                  <FiMapPin size={13} />

                  Get Directions

                  <FiArrowRight size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          APPOINTMENT FORM
      ==================================================== */}

      <section
        aria-labelledby="about-form-heading"
        className="
          bg-white
          px-4
          py-12
          sm:px-6
          sm:py-16
          lg:px-8
          lg:py-20
        "
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#175C5A]
              "
            >
              Plan Your Visit
            </p>

            <h2
              id="about-form-heading"
              className="
                mt-3
                font-serif
                text-3xl
                font-normal
                leading-tight
                text-[#24302F]
                sm:text-4xl
              "
            >
              Enquire about your spa experience
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-[#687371]
              "
            >
              Send your details and our team can help
              with treatment options, current availability
              and appointment planning.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* ===================================================
          FINAL CTA
      ==================================================== */}

      <section
        aria-labelledby="about-cta-heading"
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
            id="about-cta-heading"
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
            Make time for yourself.
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
            Explore our massage treatments or contact
            Oceanic Spa Vashi to plan your next relaxing
            visit.
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
            <Link
              href="/services"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/10
                px-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                hover:bg-white/15
              "
            >
              Explore Services

              <FiArrowRight size={14} />
            </Link>

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
                hover:bg-[#E6D5BA]
              "
            >
              <FiCalendar size={15} />

              Book Appointment
            </Link>

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
                text-[#BFDBFE]
                transition-all
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
    </main>
  );
}

/* =========================================================
   MINI STAT
========================================================= */

function MiniStat({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-[#E1E8E5]
        bg-[#F7FAF9]
        p-3
      "
    >
      <span
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-lg
          bg-[#175C5A]/10
          text-[#175C5A]
        "
      >
        {icon}
      </span>

      <p
        className="
          mt-2
          text-[10px]
          font-bold
          text-[#24302F]
        "
      >
        {title}
      </p>

      <p
        className="
          mt-0.5
          text-[9px]
          text-[#89918F]
        "
      >
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({
  icon,
  number,
  title,
  description,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article
      className="
        group
        rounded-[1.25rem]
        border
        border-[#E1E8E5]
        bg-white
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#175C5A]/20
        hover:shadow-[0_15px_40px_rgba(36,48,47,0.06)]
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
        "
      >
        <span
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-[#175C5A]/10
            text-[#175C5A]
            transition-colors
            group-hover:bg-[#175C5A]
            group-hover:text-white
          "
        >
          {icon}
        </span>

        <span
          className="
            text-[9px]
            font-bold
            tracking-[0.15em]
            text-[#C8D1CE]
          "
        >
          {number}
        </span>
      </div>

      <h3
        className="
          mt-5
          font-serif
          text-xl
          font-normal
          text-[#24302F]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-xs
          leading-6
          text-[#727D7A]
        "
      >
        {description}
      </p>
    </article>
  );
}

/* =========================================================
   CHECK POINT
========================================================= */

function CheckPoint({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2.5
        text-sm
        text-[#56625F]
      "
    >
      <span
        className="
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#EEF7F5]
          text-[#175C5A]
        "
      >
        <FiCheck size={11} />
      </span>

      {children}
    </div>
  );
}
