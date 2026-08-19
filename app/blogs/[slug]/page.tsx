import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaArrowLeft as FiArrowLeft,
  FaArrowRight as FiArrowRight,
  FaCalendarAlt as FiCalendar,
  FaClock as FiClock,
  FaHeart as FiHeart,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
} from "react-icons/fa";

import {
  activeBlogPosts,
  getBlogPostBySlug,
} from "@/data/blog";

import BlogArticleContent from "@/components/blogs/BlogArticleContent";
import { site } from "@/data/site";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return activeBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Oceanic Spa Vashi",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const image =
    post.image || "/gallery/gallery-1.png";

  return {
    title: post.seo.title,

    description: post.seo.description,

    keywords: post.seo.keywords,

    authors: [
      {
        name: post.author,
      },
    ],

    alternates: {
      canonical: `/blogs/${post.slug}`,
    },

    openGraph: {
      title: post.seo.title,

      description: post.seo.description,

      url: `/blogs/${post.slug}`,

      siteName: site.name,

      type: "article",

      locale: "en_IN",

      publishedTime: post.publishedAt,

      modifiedTime:
        post.updatedAt || post.publishedAt,

      authors: [post.author],

      section: post.category,

      tags: post.tags,

      images: [
        {
          url: image,
          width: 1200,
          height: 800,
          alt: post.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: post.seo.title,

      description: post.seo.description,

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

export default async function BlogPostPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  /* =======================================================
     RELATED POSTS
  ======================================================== */

  const relatedPosts = activeBlogPosts
    .filter((item) => item.slug !== post.slug)
    .map((item) => {
      const sharedTags = item.tags.filter((tag) =>
        post.tags.some(
          (postTag) =>
            postTag.toLowerCase() ===
            tag.toLowerCase()
        )
      ).length;

      const sameCategory =
        item.category === post.category
          ? 2
          : 0;

      return {
        item,
        score: sharedTags + sameCategory,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ item }) => item);

  /* =======================================================
     WHATSAPP
  ======================================================== */

  const whatsappUrl =
    `https://wa.me/${site.contact.whatsapp}` +
    `?text=${encodeURIComponent(
      `Hello Oceanic Spa Vashi, I read your article "${post.title}" and would like to know more about your spa treatments.`
    )}`;

  /* =======================================================
     ARTICLE JSON-LD
  ======================================================== */

  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    "@id": `${site.url}/blogs/${post.slug}#article`,

    headline: post.title,

    description: post.seo.description,

    image: [
      `${site.url}${post.image}`,
    ],

    datePublished: post.publishedAt,

    dateModified:
      post.updatedAt || post.publishedAt,

    author: {
      "@type": "Organization",
      name: post.author,
      url: site.url,
    },

    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blogs/${post.slug}`,
    },

    articleSection: post.category,

    keywords: post.tags.join(", "),

    inLanguage: "en-IN",
  };

  /* =======================================================
     BREADCRUMB JSON-LD
  ======================================================== */

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
        name: "Blogs",
        item: `${site.url}/blogs`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${site.url}/blogs/${post.slug}`,
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
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* ===================================================
          HERO / ARTICLE HEADER
      ==================================================== */}

      <section
        aria-labelledby="article-heading"
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
        {/* Background */}

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
            max-w-5xl
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
              flex-wrap
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

            <Link
              href="/blogs"
              className="hover:text-[#175C5A]"
            >
              Blogs
            </Link>

            <span className="text-[#C4CCC9]">
              /
            </span>

            <span
              className="
                max-w-[220px]
                truncate
                text-[#175C5A]
                sm:max-w-[400px]
              "
              aria-current="page"
            >
              {post.title}
            </span>
          </nav>

          {/* Article header */}

          <div className="mx-auto mt-8 max-w-4xl text-center">

            {/* Category */}

            <span
              className="
                inline-flex
                rounded-full
                border
                border-[#175C5A]/10
                bg-[#EEF7F5]
                px-3
                py-1.5
                text-[8px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#175C5A]
              "
            >
              {post.category}
            </span>

            {/* H1 */}

            <h1
              id="article-heading"
              className="
                mt-5
                font-serif
                text-3xl
                font-normal
                leading-[1.08]
                tracking-tight
                text-[#24302F]
                sm:text-4xl
                lg:text-5xl
              "
            >
              {post.title}
            </h1>

            {/* Excerpt */}

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
              {post.excerpt}
            </p>

            {/* Meta */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#89918F]
              "
            >
              <span className="inline-flex items-center gap-1.5">
                <FiCalendar size={11} />

                {formatDate(post.publishedAt)}
              </span>

              <span className="inline-flex items-center gap-1.5">
                <FiClock size={11} />

                {post.readingTime}
              </span>

              <span>
                By {post.author}
              </span>
            </div>
          </div>

          {/* Featured image */}

          <div
            className="
              relative
              mt-8
              aspect-[1.35/1]
              overflow-hidden
              rounded-[1.5rem]
              bg-[#E9EFEC]
              shadow-[0_25px_70px_rgba(36,48,47,0.10)]
              sm:mt-10
              sm:aspect-[1.8/1]
              lg:mt-12
            "
          >
            <Image
              src={
                post.image ||
                "/gallery/gallery-1.png"
              }
              alt={post.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#123B3A]/35
                via-transparent
                to-transparent
              "
            />
          </div>
        </div>
      </section>

      {/* ===================================================
          ARTICLE BODY
      ==================================================== */}

      <section
        aria-label="Article content"
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
              gap-10
              lg:grid-cols-[minmax(0,1fr)_280px]
              lg:items-start
              lg:gap-14
            "
          >

            {/* =================================================
                CONTENT
            ================================================== */}

            <article
              className="
                mx-auto
                w-full
                max-w-3xl
              "
            >
              <BlogArticleContent
                content={post.content}
              />

              {/* Tags */}

              {post.tags.length > 0 && (
                <div
                  className="
                    mt-10
                    border-t
                    border-[#E1E8E5]
                    pt-6
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#8B9692]
                    "
                  >
                    Related Topics
                  </p>

                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-[#E1E8E5]
                          bg-[#F7FAF9]
                          px-3
                          py-1.5
                          text-[8px]
                          font-medium
                          text-[#687371]
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Article CTA */}

              <div
                className="
                  mt-10
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-[#175C5A]
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
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#D8C2A0]
                      "
                    >
                      Ready to Relax?
                    </p>

                    <h2
                      className="
                        mt-2
                        font-serif
                        text-2xl
                        font-normal
                        text-white
                      "
                    >
                      Experience the treatment
                      yourself.
                    </h2>

                    <p
                      className="
                        mt-2
                        max-w-lg
                        text-xs
                        leading-6
                        text-white/60
                      "
                    >
                      Contact Oceanic Spa Vashi to
                      enquire about treatments and
                      appointment availability.
                    </p>
                  </div>

                  <div
                    className="
                      grid
                      shrink-0
                      gap-2
                      sm:flex
                    "
                  >
                    <Link
                      href="/contact"
                      className="
                        inline-flex
                        min-h-11
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-[#D8C2A0]
                        px-5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#24302F]
                        transition-colors
                        hover:bg-[#E6D5BA]
                      "
                    >
                      Book Appointment

                      <FiArrowRight size={13} />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        min-h-11
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-[#25D366]/30
                        bg-[#25D366]/10
                        px-5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#8EF0B3]
                        transition-colors
                        hover:bg-[#25D366]/15
                      "
                    >
                      <FiMessageCircle size={13} />

                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Back */}

              <div className="mt-8">
                <Link
                  href="/blogs"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-[#175C5A]
                  "
                >
                  <FiArrowLeft size={13} />

                  Back to all articles
                </Link>
              </div>
            </article>

            <aside className="space-y-4 lg:sticky lg:top-24">
              <div className="rounded-[1.35rem] bg-[#175C5A] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#D8C2A0]">
                  <FiCalendar size={17} />
                </div>

                <h2 className="mt-4 font-serif text-xl text-white">
                  Looking for a massage?
                </h2>

                <p className="mt-2 text-xs leading-6 text-white/60">
                  Explore our treatments or contact us to find the right option for you.
                </p>

                <Link
                  href="/services"
                  className="mt-4 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#D8C2A0] px-4 text-[9px] font-bold uppercase tracking-[0.12em] text-[#24302F] hover:bg-[#E6D5BA]"
                >
                  View Services
                  <FiArrowRight size={12} />
                </Link>
              </div>

              <div
                className="
                  rounded-[1.35rem]
                  border
                  border-[#E1E8E5]
                  bg-[#F7FAF9]
                  p-5
                "
              >
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#175C5A]
                  "
                >
                  Need Help?
                </p>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-6
                    text-[#727D7A]
                  "
                >
                  Ask us about treatments,
                  timings or availability.
                </p>

                <div className="mt-4 space-y-2">

                  <a
                    href={`tel:${site.contact.phone}`}
                    className="
                      flex
                      min-h-10
                      items-center
                      gap-2
                      rounded-xl
                      bg-white
                      px-3
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-[#2563EB]
                    "
                  >
                    <FiPhone size={13} />

                    Call Us
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      min-h-10
                      items-center
                      gap-2
                      rounded-xl
                      bg-[#25D366]/10
                      px-3
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-[#168B45]
                    "
                  >
                    <FiMessageCircle size={13} />

                    WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===================================================
          RELATED POSTS
      ==================================================== */}

      {relatedPosts.length > 0 && (
        <section
          aria-labelledby="related-posts-heading"
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
                Continue Reading
              </p>

              <h2
                id="related-posts-heading"
                className="
                  mt-2
                  font-serif
                  text-2xl
                  font-normal
                  text-[#24302F]
                  sm:text-3xl
                "
              >
                You may also like
              </h2>
            </div>

            <div
              className="
                mt-7
                grid
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blogs/${related.slug}`}
                  className="
                    group
                    overflow-hidden
                    rounded-[1.25rem]
                    border
                    border-[#E1E8E5]
                    bg-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#175C5A]/20
                    hover:shadow-[0_15px_40px_rgba(36,48,47,0.07)]
                  "
                >
                  <div
                    className="
                      relative
                      aspect-[1.6/1]
                      overflow-hidden
                      bg-[#E9EFEC]
                    "
                  >
                    <Image
                      src={
                        related.image ||
                        "/gallery/gallery-1.png"
                      }
                      alt={related.imageAlt}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.05]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#123B3A]/50
                        to-transparent
                      "
                    />
                  </div>

                  <div className="p-5">
                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#175C5A]
                      "
                    >
                      {related.category}
                    </p>

                    <h3
                      className="
                        mt-2
                        font-serif
                        text-xl
                        leading-tight
                        text-[#24302F]
                        transition-colors
                        group-hover:text-[#175C5A]
                      "
                    >
                      {related.title}
                    </h3>

                    <span
                      className="
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#175C5A]
                      "
                    >
                      Read Article

                      <FiArrowRight
                        size={12}
                        className="
                          transition-transform
                          group-hover:translate-x-1
                        "
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================
          FINAL CTA
      ==================================================== */}

      <section
        className="
          bg-white
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
              bg-[#F7FAF9]
              p-6
              text-center
              sm:p-8
            "
          >
            <div
              className="
                mx-auto
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
              <FiHeart size={17} />
            </div>

            <h2
              className="
                mt-4
                font-serif
                text-2xl
                text-[#24302F]
                sm:text-3xl
              "
            >
              Your relaxation starts here
            </h2>

            <p
              className="
                mx-auto
                mt-2
                max-w-xl
                text-xs
                leading-6
                text-[#727D7A]
              "
            >
              Explore Oceanic Spa Vashi&apos;s massage
              treatments or contact us for your next
              appointment.
            </p>

            <div
              className="
                mt-5
                flex
                flex-wrap
                justify-center
                gap-2
              "
            >
              <Link
                href="/services"
                className="
                  inline-flex
                  min-h-10
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#175C5A]
                  px-5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-white
                "
              >
                Explore Services

                <FiArrowRight size={12} />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  min-h-10
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#D8C2A0]
                  bg-white
                  px-5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#8B6F45]
                "
              >
                Contact Us

                <FiArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   DATE
========================================================= */

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
