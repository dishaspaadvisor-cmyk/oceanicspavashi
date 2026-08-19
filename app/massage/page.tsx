import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight as FiArrowRight,
  FaCalendarAlt as FiCalendar,
  FaClock as FiClock,
  FaHeart as FiHeart,
  FaMapMarkerAlt as FiMapPin,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
  FaSearch as FiSearch,
  FaShieldAlt as FiShield,
  FaStar as FiStar,
} from "react-icons/fa";

import { activeServices } from "@/data/service";
import { site } from "@/data/site";

/* =========================================================
   SEO
========================================================= */

export const metadata: Metadata = {
  title:
    "Massage in Vashi, Navi Mumbai | Oceanic Spa",

  description:
    "Explore massage treatments at Oceanic Spa Vashi, Navi Mumbai. Choose from deep tissue, Swedish, Thai, Balinese, aroma, full body, foot reflexology and other relaxing massage experiences.",

  keywords: [
    "massage Vashi",
    "massage in Vashi",
    "massage spa Vashi",
    "massage Vashi Navi Mumbai",
    "best massage Vashi",
    "full body massage Vashi",
    "Thai massage Vashi",
    "Swedish massage Vashi",
    "Balinese massage Vashi",
    "deep tissue massage Vashi",
    "aroma massage Vashi",
    "foot reflexology Vashi",
    "spa massage Navi Mumbai",
    "massage near Vashi",
    "massage near me Vashi",
  ],

  alternates: {
    canonical: "/massage",
  },

  openGraph: {
    title:
      "Massage in Vashi, Navi Mumbai | Oceanic Spa",

    description:
      "Explore Oceanic Spa Vashi's massage treatments including Thai, Swedish, Balinese, deep tissue, aroma and full body massage.",

    url: "/massage",

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

export default function MassagePage() {
  const whatsappUrl =
    `https://wa.me/${site.contact.whatsapp}` +
    `?text=${encodeURIComponent(
      "Hello Oceanic Spa Vashi, I would like to enquire about your massage treatments."
    )}`;

  /* =======================================================
     FEATURED SERVICES
  ======================================================== */

  const popularServices = activeServices.filter(
    (service) => service.popular
  );

  const featuredServices =
    popularServices.length > 0
      ? popularServices.slice(0, 4)
      : activeServices.slice(0, 4);

  /* =======================================================
     JSON-LD
  ======================================================== */

  const itemListSchema = {
    "@context": "https://schema.org",

    "@type": "ItemList",

    "@id": `${site.url}/massage#itemlist`,

    name: "Massage Treatments at Oceanic Spa Vashi",

    url: `${site.url}/massage`,

    numberOfItems: activeServices.length,

    itemListElement: activeServices.map(
      (service, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: service.name,

        url: `${site.url}/massage/${service.slug}`,
      })
    ),
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
        name: "Massage",
        item: `${site.url}/massage`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",

    "@type": "DaySpa",

    "@id": `${site.url}#spa`,

    name: site.name,

    url: site.url,

    telephone: site.contact.phone,

    areaServed: [
      {
        "@type": "City",
        name: "Vashi",
      },
      {
        "@type": "City",
        name: "Navi Mumbai",
      },
    ],

    address: {
      "@type": "PostalAddress",

      streetAddress:
        site.contact.address,

      addressLocality: "Vashi",

      addressRegion: "Maharashtra",

      addressCountry: "IN",
    },
  };

  return (
    <main className="overflow-x-hidden bg-[#F7FAF9]/90">

      {/* ===================================================
          STRUCTURED DATA
      ==================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema
          ),
        }}
      />

      {/* ===================================================
          HERO
      ==================================================== */}

      <section
        aria-labelledby="massage-page-heading"
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
              Massage
            </span>
          </nav>

          {/* Hero content */}

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
                Massage Treatments
              </span>

              <span className="h-px w-7 bg-[#D8C2A0]" />
            </div>

            <h1
              id="massage-page-heading"
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
              Massage in
              <br />
              <span className="text-[#175C5A]">
                Vashi, Navi Mumbai
              </span>
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
              Explore a variety of massage treatments at
              Oceanic Spa Vashi and choose an experience
              that matches your relaxation and wellness
              preferences.
            </p>

            {/* Trust points */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2.5
              "
            >
              <TrustPoint icon={<FiHeart size={11} />}>
                Multiple massage options
              </TrustPoint>

              <TrustPoint icon={<FiMapPin size={11} />}>
                Vashi location
              </TrustPoint>

              <TrustPoint icon={<FiStar size={11} />}>
                Relaxing experience
              </TrustPoint>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FEATURED MASSAGES
      ==================================================== */}

      {featuredServices.length > 0 && (
        <section
          aria-labelledby="featured-massage-heading"
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
            <SectionHeading
              eyebrow="Popular Choices"
              title="Massage treatments to explore"
              description="Start with some of the treatments guests commonly explore at Oceanic Spa Vashi."
              id="featured-massage-heading"
            />

            <div
              className="
                mt-8
                grid
                gap-5
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {featuredServices.map(
                (service) => (
                  <MassageCard
                    key={service.id}
                    service={service}
                  />
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================
          ALL MASSAGES
      ==================================================== */}

      <section
        id="all-massage-treatments"
        aria-labelledby="all-massage-heading"
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
                Our Massage Menu
              </p>

              <h2
                id="all-massage-heading"
                className="
                  mt-2
                  font-serif
                  text-3xl
                  font-normal
                  text-[#24302F]
                  sm:text-4xl
                "
              >
                Explore all treatments
              </h2>
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-[#89918F]
              "
            >
              <FiSearch size={12} />

              {activeServices.length} treatments
            </div>
          </div>

          {activeServices.length > 0 ? (
            <div
              className="
                mt-8
                grid
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {activeServices.map(
                (service) => (
                  <MassageCard
                    key={service.id}
                    service={service}
                    large
                  />
                )
              )}
            </div>
          ) : (
            <div
              className="
                mt-8
                rounded-[1.5rem]
                border
                border-[#E1E8E5]
                bg-white
                p-10
                text-center
              "
            >
              <p
                className="
                  text-sm
                  text-[#727D7A]
                "
              >
                Massage treatments will be available
                shortly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===================================================
          HOW TO CHOOSE
      ==================================================== */}

      <section
        aria-labelledby="choose-massage-heading"
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
              lg:grid-cols-[0.85fr_1.15fr]
              lg:items-center
              lg:gap-14
            "
          >
            {/* Left */}

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
                Not Sure?
              </p>

              <h2
                id="choose-massage-heading"
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
                Which massage
                should you choose?
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#727D7A]
                "
              >
                There is no single massage that is right
                for everyone. Your preferred pressure,
                massage style and overall experience can
                all influence your choice.
              </p>

              <div
                className="
                  mt-6
                  rounded-[1.25rem]
                  bg-[#175C5A]
                  p-5
                "
              >
                <div
                  className="
                    flex
                    gap-3
                  "
                >
                  <FiMessageCircle
                    size={18}
                    className="
                      mt-0.5
                      shrink-0
                      text-[#D8C2A0]
                    "
                  />

                  <div>
                    <h3
                      className="
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      Need help choosing?
                    </h3>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-6
                        text-white/60
                      "
                    >
                      Contact Oceanic Spa Vashi and ask
                      about the treatments available for
                      your preferences.
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-4
                    inline-flex
                    min-h-10
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
                  "
                >
                  <FiMessageCircle size={13} />

                  Ask on WhatsApp
                </a>
              </div>
            </div>

            {/* Right */}

            <div
              className="
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              <GuideCard
                number="01"
                title="Want relaxation?"
                description="Explore relaxing full body, Swedish, aroma or Balinese massage options."
              />

              <GuideCard
                number="02"
                title="Prefer traditional styles?"
                description="Explore Thai massage and other traditional massage experiences."
              />

              <GuideCard
                number="03"
                title="Looking for focused pressure?"
                description="Deep tissue and back massage may be worth exploring depending on your preferences."
              />

              <GuideCard
                number="04"
                title="Want something different?"
                description="Explore foot reflexology, four hand massage and other specialty treatments."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          WHY OCEANIC
      ==================================================== */}

      <section
        aria-labelledby="why-oceanic-massage-heading"
        className="
          bg-[#F7FAF9]
          py-12
          sm:py-16
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
          <SectionHeading
            eyebrow="Why Oceanic Spa"
            title="More than just a massage"
            description="A relaxing environment, treatment variety and a convenient Vashi location come together for a comfortable spa experience."
            id="why-oceanic-massage-heading"
          />

          <div
            className="
              mt-8
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            <WhyCard
              icon={<FiHeart size={18} />}
              title="Relaxing Ambience"
              text="Take a break from your everyday routine in a calm spa environment."
            />

            <WhyCard
              icon={<FiStar size={18} />}
              title="Treatment Variety"
              text="Choose from a range of massage styles and treatment experiences."
            />

            <WhyCard
              icon={<FiShield size={18} />}
              title="Comfort Focus"
              text="Your comfort and preferences are an important part of the experience."
            />

            <WhyCard
              icon={<FiMapPin size={18} />}
              title="Vashi Location"
              text="Conveniently located for guests looking for massage in Vashi, Navi Mumbai."
            />
          </div>
        </div>
      </section>

      {/* ===================================================
          LOCAL SEO CONTENT
      ==================================================== */}

      <section
        aria-labelledby="massage-vashi-heading"
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
              bg-[#F7FAF9]
              p-6
              sm:p-8
            "
          >
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#175C5A]
              "
            >
              Massage in Vashi
            </p>

            <h2
              id="massage-vashi-heading"
              className="
                mt-2
                font-serif
                text-2xl
                font-normal
                text-[#24302F]
                sm:text-3xl
              "
            >
              Explore massage treatments in
              Vashi, Navi Mumbai
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
                massage treatments for guests looking for
                a relaxing spa experience in Vashi, Navi
                Mumbai.
              </p>

              <p>
                Our massage menu includes options such as
                deep tissue massage, foot reflexology,
                Swedish massage, Balinese massage, Thai
                massage, full body massage, aroma massage,
                back massage and specialty four hand
                treatments.
              </p>

              <p>
                If you are searching for a massage spa in
                Vashi or looking for massage near Vashi,
                explore the treatments above to learn more
                about each experience.
              </p>
            </div>

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2
              "
            >
              <KeywordPill>
                Massage Vashi
              </KeywordPill>

              <KeywordPill>
                Massage in Vashi
              </KeywordPill>

              <KeywordPill>
                Spa Vashi
              </KeywordPill>

              <KeywordPill>
                Massage Navi Mumbai
              </KeywordPill>

              <KeywordPill>
                Massage near Vashi
              </KeywordPill>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FINAL CTA
      ==================================================== */}

      <section
        aria-labelledby="massage-cta-heading"
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
            id="massage-cta-heading"
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
            Ready for some time
            for yourself?
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
            Choose your preferred massage treatment or
            contact Oceanic Spa Vashi for help deciding.
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
   MASSAGE CARD
========================================================= */

function MassageCard({
  service,
  large = false,
}: {
  service: (typeof activeServices)[number];
  large?: boolean;
}) {
  const image =
    service.images?.[0] ||
    service.image ||
    "/gallery/gallery-1.png";

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[1.35rem]
        border
        border-[#E1E8E5]
        bg-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#175C5A]/20
        hover:shadow-[0_20px_50px_rgba(36,48,47,0.08)]
      "
    >
      <Link
        href={`/massage/${service.slug}`}
        aria-label={`View ${service.name}`}
      >
        <div
          className={`
            relative
            overflow-hidden
            bg-[#E9EFEC]
            ${
              large
                ? "aspect-[1.35/1]"
                : "aspect-[1.25/1]"
            }
          `}
        >
          <Image
            src={image}
            alt={`${service.name} at Oceanic Spa Vashi`}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.06]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#123B3A]/70
              via-[#123B3A]/10
              to-transparent
            "
          />

          {service.popular && (
            <span
              className="
                absolute
                right-4
                top-4
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-white/20
                bg-[#C9826D]/90
                px-3
                py-1.5
                text-[8px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
                backdrop-blur-md
              "
            >
              <FiHeart size={10} />

              Popular
            </span>
          )}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              p-5
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
              <h3
                className="
                  max-w-[82%]
                  font-serif
                  text-xl
                  font-normal
                  leading-tight
                  text-white
                  sm:text-2xl
                "
              >
                {service.name}
              </h3>

              <span
                className="
                  flex
                  h-9
                  w-9
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
                  group-hover:bg-[#175C5A]
                  group-hover:text-white
                "
              >
                <FiArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-5">
        {service.description && (
          <p
            className="
              line-clamp-2
              text-xs
              leading-6
              text-[#727D7A]
            "
          >
            {service.description}
          </p>
        )}

        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            gap-3
          "
        >
          {service.duration ? (
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#89918F]
              "
            >
              <FiClock
                size={11}
                className="text-[#175C5A]"
              />

              {service.duration}
            </span>
          ) : (
            <span />
          )}

          <Link
            href={`/massage/${service.slug}`}
            className="
              inline-flex
              items-center
              gap-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.1em]
              text-[#175C5A]
              transition-colors
              hover:text-[#C9826D]
            "
          >
            View

            <FiArrowRight size={11} />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: string;
  description: string;
  id: string;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#175C5A]
        "
      >
        {eyebrow}
      </p>

      <h2
        id={id}
        className="
          mt-2
          font-serif
          text-3xl
          font-normal
          text-[#24302F]
          sm:text-4xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-3
          max-w-2xl
          text-sm
          leading-7
          text-[#727D7A]
        "
      >
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   TRUST POINT
========================================================= */

function TrustPoint({
  icon,
  children,
}: {
  icon: React.ReactNode;
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
        {icon}
      </span>

      {children}
    </span>
  );
}

/* =========================================================
   GUIDE CARD
========================================================= */

function GuideCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article
      className="
        rounded-[1.25rem]
        border
        border-[#E1E8E5]
        bg-[#F7FAF9]
        p-5
      "
    >
      <span
        className="
          text-[9px]
          font-bold
          tracking-[0.15em]
          text-[#D8C2A0]
        "
      >
        {number}
      </span>

      <h3
        className="
          mt-3
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
   WHY CARD
========================================================= */

function WhyCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article
      className="
        rounded-[1.2rem]
        border
        border-[#E1E8E5]
        bg-white
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#175C5A]/20
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
        "
      >
        {icon}
      </span>

      <h3
        className="
          mt-4
          font-serif
          text-lg
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
        {text}
      </p>
    </article>
  );
}

/* =========================================================
   KEYWORD PILL
========================================================= */

function KeywordPill({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      className="
        rounded-full
        border
        border-[#E1E8E5]
        bg-white
        px-3
        py-1.5
        text-[8px]
        font-medium
        text-[#687371]
      "
    >
      {children}
    </span>
  );
}
