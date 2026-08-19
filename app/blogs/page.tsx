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
  FaStar as FiStar,
} from "react-icons/fa";

import {
  activeBlogPosts,
  featuredBlogPosts,
} from "@/data/blog";

import BlogCard from "@/components/blogs/BlogCard";
import { site } from "@/data/site";

/* =========================================================
   SEO
========================================================= */

export const metadata: Metadata = {
  title:
    "Spa & Massage Blog in Vashi | Oceanic Spa",

  description:
    "Read the Oceanic Spa Vashi blog for massage guides, spa and wellness tips, treatment information and helpful advice for choosing your next spa experience in Vashi, Navi Mumbai.",

  keywords: [
    "spa blog Vashi",
    "massage blog Vashi",
    "spa tips Vashi",
    "massage guide Vashi",
    "wellness blog Navi Mumbai",
    "massage benefits",
    "spa Vashi",
    "massage Vashi",
    "Oceanic Spa Vashi blog",
  ],

  alternates: {
    canonical: "/blogs",
  },

  openGraph: {
    title:
      "Spa & Massage Blog in Vashi | Oceanic Spa",

    description:
      "Explore massage guides, spa information and wellness articles from Oceanic Spa Vashi.",

    url: "/blogs",

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

export default function BlogsPage() {
  const featured =
    featuredBlogPosts[0] ||
    activeBlogPosts[0];

  const remainingPosts = activeBlogPosts.filter(
    (post) => post.id !== featured?.id
  );

  const categories = Array.from(
    new Set(
      activeBlogPosts.map(
        (post) => post.category
      )
    )
  );

  const whatsappUrl =
    `https://wa.me/${site.contact.whatsapp}` +
    `?text=${encodeURIComponent(
      "Hello Oceanic Spa Vashi, I would like to book a spa appointment."
    )}`;

  return (
    <main className="overflow-x-hidden bg-[#F7FAF9]/90">

      {/* ===================================================
          HERO
      ==================================================== */}

      <section
        aria-labelledby="blogs-page-heading"
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
              Blogs
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
                Spa Journal
              </span>

              <span className="h-px w-7 bg-[#D8C2A0]" />
            </div>

            <h1
              id="blogs-page-heading"
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
              Discover More About
              <br />
              <span className="text-[#175C5A]">
                Massage & Wellness
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
              Helpful guides, treatment information and
              wellness insights to help you choose a spa
              experience that feels right for you.
            </p>
          </div>

          {/* Trust points */}

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
            <TrustPoint icon={<FiHeart size={11} />}>
              Massage guides
            </TrustPoint>

            <TrustPoint icon={<FiStar size={11} />}>
              Wellness information
            </TrustPoint>

            <TrustPoint icon={<FiMapPin size={11} />}>
              Vashi, Navi Mumbai
            </TrustPoint>
          </div>
        </div>
      </section>

      {/* ===================================================
          CATEGORY NAVIGATION
      ==================================================== */}

      {categories.length > 0 && (
        <section
          aria-label="Blog categories"
          className="
            border-y
            border-[#E1E8E5]
            bg-white
          "
        >
          <div
            className="
              mx-auto
              max-w-7xl
              overflow-x-auto
              px-4
              py-3
              sm:px-6
              lg:px-8
            "
          >
            <div
              className="
                flex
                min-w-max
                items-center
                justify-center
                gap-2
              "
            >
              <span
                className="
                  rounded-full
                  bg-[#175C5A]
                  px-4
                  py-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                "
              >
                All Articles
              </span>

              {categories.map((category) => (
                <span
                  key={category}
                  className="
                    rounded-full
                    border
                    border-[#E1E8E5]
                    bg-[#F7FAF9]
                    px-4
                    py-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.1em]
                    text-[#687371]
                  "
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================
          FEATURED ARTICLE
      ==================================================== */}

      {featured && (
        <section
          aria-labelledby="featured-article-heading"
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
                mb-7
                flex
                items-end
                justify-between
                gap-4
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
                  Featured Article
                </p>

                <h2
                  id="featured-article-heading"
                  className="
                    mt-2
                    font-serif
                    text-2xl
                    font-normal
                    text-[#24302F]
                    sm:text-3xl
                  "
                >
                  Start here
                </h2>
              </div>
            </div>

            <article
              className="
                group
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#E1E8E5]
                bg-[#F7FAF9]
              "
            >
              <div
                className="
                  grid
                  lg:grid-cols-[1.05fr_0.95fr]
                "
              >
                {/* Image */}

                <Link
                  href={`/blogs/${featured.slug}`}
                  aria-label={`Read ${featured.title}`}
                  className="
                    relative
                    block
                    aspect-[1.25/1]
                    overflow-hidden
                    bg-[#E9EFEC]
                    sm:aspect-[1.6/1]
                    lg:aspect-auto
                    lg:min-h-[430px]
                  "
                >
                  <Image
                    src={
                      featured.image ||
                      "/gallery/gallery-1.png"
                    }
                    alt={featured.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 55vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#123B3A]/55
                      via-transparent
                      to-transparent
                    "
                  />

                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      border
                      border-white/20
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
                    {featured.category}
                  </span>
                </Link>

                {/* Content */}

                <div
                  className="
                    flex
                    flex-col
                    justify-center
                    p-6
                    sm:p-8
                    lg:p-10
                  "
                >
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-x-4
                      gap-y-2
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.1em]
                      text-[#8B9692]
                    "
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <FiCalendar size={11} />
                      {formatDate(
                        featured.publishedAt
                      )}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <FiClock size={11} />
                      {featured.readingTime}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-2xl
                      font-normal
                      leading-tight
                      text-[#24302F]
                      sm:text-3xl
                    "
                  >
                    {featured.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-[#727D7A]
                    "
                  >
                    {featured.excerpt}
                  </p>

                  <div className="mt-6">
                    <Link
                      href={`/blogs/${featured.slug}`}
                      className="
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
                      Read Article

                      <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* ===================================================
          ALL ARTICLES
      ==================================================== */}

      {remainingPosts.length > 0 && (
        <section
          aria-labelledby="all-articles-heading"
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
                gap-3
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
                  Latest Articles
                </p>

                <h2
                  id="all-articles-heading"
                  className="
                    mt-2
                    font-serif
                    text-2xl
                    font-normal
                    text-[#24302F]
                    sm:text-3xl
                  "
                >
                  Massage & wellness guides
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
                Explore our articles before choosing
                your next treatment.
              </p>
            </div>

            <div
              className="
                mt-8
                grid
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {remainingPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================
          CTA
      ==================================================== */}

      <section
        aria-labelledby="blogs-cta-heading"
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
            id="blogs-cta-heading"
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
            Ready to experience it
            yourself?
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
            Reading about massage is one thing.
            Experiencing a relaxing treatment is another.
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
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#E6D5BA]
              "
            >
              <FiCalendar size={15} />

              Book Appointment

              <FiArrowRight size={14} />
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
                duration-300
                hover:border-[#25D366]/60
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
    </main>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
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

