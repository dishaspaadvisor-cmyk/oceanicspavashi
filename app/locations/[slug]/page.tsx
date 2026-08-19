import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight as FiArrowRight,
  FaCalendarAlt as FiCalendar,
  FaCheck as FiCheck,
  FaMapMarkerAlt as FiMapPin,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
} from "react-icons/fa";

import {
  locations,
  getLocationBySlug,
} from "@/data/location";

import {
  getServiceBySlug,
  type Service,
} from "@/data/service";
import { site } from "@/data/site";

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return locations
    .filter((location) => location.active !== false)
    .map((location) => ({
      slug: location.slug,
    }));
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;

  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found | Oceanic Spa Vashi",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title =
    location.seo?.title ||
    `${location.name} | Oceanic Spa Vashi`;

  const description =
    location.seo?.description ||
    location.description;

  const image =
    location.image ||
    "/gallery/gallery-1.png";

  return {
    title,

    description,

    keywords: location.keywords || [],

    alternates: {
      canonical: `/locations/${location.slug}`,
    },

    openGraph: {
      title,
      description,

      url: `/locations/${location.slug}`,

      siteName: site.name,

      type: "website",

      locale: "en_IN",

      images: [
        {
          url: image,
          width: 1200,
          height: 800,
          alt:
            location.imageAlt ||
            `${location.name} - Oceanic Spa Vashi`,
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

export default async function LocationPage({
  params,
}: LocationPageProps) {
  const { slug } = await params;

  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const whatsappMessage =
    `Hello Oceanic Spa Vashi, I would like to know more about ` +
    `${location.name} and available spa services.`;

  const whatsappUrl =
    `https://wa.me/${site.contact.whatsapp}` +
    `?text=${encodeURIComponent(whatsappMessage)}`;

  const locationServices = location.services
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter(
      (service): service is Service =>
        Boolean(service)
    );

  return (
    <main className="overflow-x-hidden bg-[#F7FAF9]/90">

      {/* ===================================================
          HERO
      ==================================================== */}

      <section
        aria-labelledby="location-page-heading"
        className="
          relative
          overflow-hidden
          bg-[#F7FAF9]
          pb-14
          pt-6
          sm:pb-18
          sm:pt-8
          lg:pb-20
          lg:pt-10
        "
      >
        {/* Decorative background */}

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
              -left-40
              -top-32
              h-[28rem]
              w-[28rem]
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

          {/* =================================================
              BREADCRUMB
          ================================================== */}

          <nav
            aria-label="Breadcrumb"
            className="
              flex
              items-center
              gap-2
              overflow-hidden
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
                shrink-0
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
              className="
                shrink-0
              "
            >
              Locations
            </span>

            <span className="text-[#C4CCC9]">
              /
            </span>

            <span
              className="
                truncate
                text-[#175C5A]
              "
              aria-current="page"
            >
              {location.name}
            </span>
          </nav>

          {/* =================================================
              HERO GRID
          ================================================== */}

          <div
            className="
              mt-7
              grid
              gap-8
              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-center
              lg:gap-14
              xl:gap-20
            "
          >

            {/* =================================================
                CONTENT
            ================================================== */}

            <div className="order-2 lg:order-1">

              {/* Eyebrow */}

              <div className="flex items-center gap-2.5">
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
                  Oceanic Spa
                </span>
              </div>

              {/* Location */}

              <div
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#DCE5E2]
                  bg-white
                  px-3
                  py-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#687371]
                  shadow-[0_4px_16px_rgba(36,48,47,0.035)]
                "
              >
                <FiMapPin
                  size={12}
                  className="text-[#175C5A]"
                />

                {location.city}
              </div>

              {/* H1 */}

              <h1
                id="location-page-heading"
                className="
                  mt-4
                  max-w-2xl
                  font-serif
                  text-4xl
                  font-normal
                  leading-[1.04]
                  tracking-tight
                  text-[#24302F]
                  sm:text-5xl
                  lg:text-[4rem]
                "
              >
                {location.seo?.h1 ||
                  location.name}

                <span className="text-[#175C5A]">
                  .
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#687371]
                  sm:text-[15px]
                "
              >
                {location.description}
              </p>

              {/* =================================================
                  TRUST POINTS
              ================================================== */}

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-x-5
                  gap-y-2.5
                "
              >
                <TrustPoint>
                  Relaxation-focused treatments
                </TrustPoint>

                <TrustPoint>
                  Comfortable environment
                </TrustPoint>

                <TrustPoint>
                  Convenient location
                </TrustPoint>
              </div>

              {/* =================================================
                  CTA
              ================================================== */}

              <div
                className="
                  mt-7
                  grid
                  gap-2.5
                  sm:flex
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
                    bg-[#175C5A]
                    px-6
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white
                    shadow-[0_10px_28px_rgba(23,92,90,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#124B49]
                  "
                >
                  <FiCalendar size={15} />

                  Book Appointment

                  <FiArrowRight size={14} />
                </Link>

                {/* WhatsApp */}

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
                    border
                    border-[#25D366]/25
                    bg-[#25D366]/10
                    px-5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#168B45]
                    transition-all
                    duration-300
                    hover:border-[#25D366]/50
                    hover:bg-[#25D366]/15
                  "
                >
                  <FiMessageCircle size={15} />

                  WhatsApp
                </a>
              </div>

              {/* Phone */}

              <a
                href={`tel:${site.contact.phone}`}
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-[10px]
                  font-semibold
                  text-[#7D8884]
                  transition-colors
                  hover:text-[#175C5A]
                "
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#EEF7F5]
                    text-[#2563EB]
                  "
                >
                  <FiPhone size={13} />
                </span>

                {site.contact.phone}
              </a>
            </div>

            {/* =================================================
                IMAGE
            ================================================== */}

            <div
              className="
                order-1
                lg:order-2
              "
            >
              <div
                className="
                  relative
                  mx-auto
                  max-w-2xl
                "
              >
                {/* Decorative frame */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-3
                    -left-3
                    h-full
                    w-full
                    rounded-[1.75rem]
                    border
                    border-[#D8C2A0]/40
                    sm:-bottom-4
                    sm:-left-4
                  "
                />

                <div
                  className="
                    relative
                    aspect-[4/4.3]
                    overflow-hidden
                    rounded-[1.75rem]
                    bg-[#E9EFEC]
                    shadow-[0_25px_70px_rgba(36,48,47,0.13)]
                    sm:aspect-[4/3.6]
                  "
                >
                  <Image
                    src={
                      location.image ||
                      "/gallery/gallery-1.png"
                    }
                    alt={
                      location.imageAlt ||
                      `${location.name} - Oceanic Spa Vashi`
                    }
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 55vw"
                    className="object-cover object-center"
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#123B3A]/65
                      via-transparent
                      to-[#123B3A]/5
                    "
                  />

                  {/* Image label */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/25
                      bg-[#123B3A]/55
                      px-3
                      py-2
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white
                      backdrop-blur-md
                    "
                  >
                    <FiMapPin
                      size={10}
                      className="text-[#D8C2A0]"
                    />

                    {location.city}
                  </div>

                  {/* Bottom */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      p-5
                      sm:p-7
                    "
                  >
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#D8C2A0]
                      "
                    >
                      Oceanic Spa
                    </p>

                    <p
                      className="
                        mt-1.5
                        font-serif
                        text-xl
                        leading-tight
                        text-white
                        sm:text-2xl
                      "
                    >
                      Relax. Recharge. Reconnect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES AVAILABLE
      ====================================================== */}

      {locationServices.length > 0 && (
        <section
          aria-labelledby="location-services-heading"
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
            <div className="max-w-2xl">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#175C5A]
                "
              >
                Treatments
              </p>

              <h2
                id="location-services-heading"
                className="
                  mt-2
                  font-serif
                  text-3xl
                  font-normal
                  text-[#24302F]
                  sm:text-4xl
                "
              >
                Spa services available here
              </h2>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-[#727D7A]
                "
              >
                Explore massage and wellness treatments
                available at this Oceanic Spa location.
              </p>
            </div>

            <div
              className="
                mt-8
                grid
                gap-3
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {locationServices.map(
                (service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="
                      group
                      flex
                      min-h-20
                      items-start
                      justify-between
                      gap-4
                      rounded-xl
                      border
                      border-[#E1E8E5]
                      bg-[#F7FAF9]
                      p-4
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#175C5A]/20
                      hover:bg-[#EEF7F5]
                    "
                  >
                    <span className="min-w-0">
                      <span
                        className="
                          block
                          text-sm
                          font-semibold
                          leading-5
                          text-[#394441]
                          transition-colors
                          group-hover:text-[#175C5A]
                        "
                      >
                        {service.name}
                      </span>

                      <span
                        className="
                          mt-1
                          line-clamp-2
                          block
                          text-[11px]
                          leading-5
                          text-[#727D7A]
                        "
                      >
                        {service.shortDescription}
                      </span>
                    </span>

                    <FiArrowRight
                      size={14}
                      className="
                        text-[#A3ADA9]
                        shrink-0
                        mt-0.5
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#175C5A]
                      "
                    />
                  </Link>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          SEO CONTENT
      ====================================================== */}

      <section
        aria-labelledby="location-info-heading"
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
              id="location-info-heading"
              className="
                font-serif
                text-2xl
                text-[#24302F]
                sm:text-3xl
              "
            >
              {location.name}
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
                {location.description}
              </p>

              {location.longDescription && (
                <p>
                  {location.longDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      {location.faqs?.length > 0 && (
        <section
          aria-labelledby="location-faq-heading"
          className="
            bg-white
            py-14
            sm:py-18
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
            <div className="text-center">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#175C5A]
                "
              >
                Frequently Asked Questions
              </p>

              <h2
                id="location-faq-heading"
                className="
                  mt-2
                  font-serif
                  text-3xl
                  font-normal
                  text-[#24302F]
                  sm:text-4xl
                "
              >
                Questions about this location
              </h2>
            </div>

            <div className="mt-8 space-y-3">
              {location.faqs.map(
                (
                  faq: {
                    question: string;
                    answer: string;
                  },
                  index: number
                ) => (
                  <details
                    key={index}
                    className="
                      group
                      rounded-2xl
                      border
                      border-[#E1E8E5]
                      bg-[#F7FAF9]
                      px-5
                      py-4
                    "
                  >
                    <summary
                      className="
                        cursor-pointer
                        list-none
                        pr-6
                        text-sm
                        font-semibold
                        text-[#394441]
                        marker:hidden
                      "
                    >
                      {faq.question}
                    </summary>

                    <p
                      className="
                        mt-3
                        border-t
                        border-[#E1E8E5]
                        pt-3
                        text-xs
                        leading-6
                        text-[#727D7A]
                      "
                    >
                      {faq.answer}
                    </p>
                  </details>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="
          bg-[#175C5A]
          py-14
          sm:py-18
        "
      >
        <div
          className="
            mx-auto
            max-w-4xl
            px-4
            text-center
            sm:px-6
            lg:px-8
          "
        >
          <h2
            className="
              font-serif
              text-3xl
              font-normal
              text-white
              sm:text-4xl
            "
          >
            Ready to take some time for yourself?
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
            Contact Oceanic Spa Vashi to check
            treatment availability and book your
            appointment.
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
                hover:bg-[#25D366]/15
              "
            >
              <FiMessageCircle size={15} />

              WhatsApp
            </a>

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
          h-4
          w-4
          items-center
          justify-center
          rounded-full
          bg-[#EEF7F5]
          text-[#175C5A]
        "
      >
        <FiCheck size={9} />
      </span>

      {children}
    </span>
  );
}
