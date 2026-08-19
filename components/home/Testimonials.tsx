"use client";

import Link from "next/link";
import {
  FaArrowRight as FiArrowRight,
  FaCheck as FiCheck,
  FaHeart as FiHeart,
  FaStar as FiStar,
} from "react-icons/fa";

import { featuredTestimonials } from "@/data/testimonials";

/* =========================================================
   HOME TESTIMONIALS
========================================================= */

const HOME_TESTIMONIAL_COUNT = 6;

export default function Testimonials() {
  const items = featuredTestimonials
    .filter(
      (item) =>
        item.approved !== false &&
        !item.review
          .toLowerCase()
          .includes("add the customer's actual")
    )
    .slice(0, HOME_TESTIMONIAL_COUNT);

  if (!items.length) {
    return null;
  }

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-[#175C5A]/[0.045]
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-96
            w-96
            rounded-full
            bg-[#D8C2A0]/[0.12]
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-10
            h-32
            w-32
            -translate-x-1/2
            rounded-full
            bg-[#C9826D]/[0.035]
            blur-[70px]
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
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}

          <div className="flex items-center justify-center gap-2.5">
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
              Guest Experiences
            </span>

            <span className="h-px w-7 bg-[#D8C2A0]" />
          </div>

          {/* Heading */}

          <h2
            id="testimonials-heading"
            className="
              mt-4
              font-serif
              text-3xl
              font-normal
              leading-[1.12]
              tracking-tight
              text-[#24302F]
              sm:text-4xl
              lg:text-[3.1rem]
            "
          >
            Loved by guests who{" "}
            <span className="text-[#175C5A]">
              choose to unwind
            </span>
          </h2>

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
            Discover what guests have to say about their
            relaxation and wellness experience at Oceanic
            Spa Vashi.
          </p>
        </div>

        {/* ===================================================
            RATING SUMMARY
        ==================================================== */}

        <div
          className="
            mx-auto
            mt-8
            flex
            w-fit
            flex-col
            items-center
            gap-3
            rounded-2xl
            border
            border-[#E3E8E6]
            bg-[#F7FAF9]
            px-5
            py-3.5
            sm:flex-row
            sm:gap-4
          "
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <FiStar
                key={index}
                size={14}
                className="fill-[#D8A85D] text-[#D8A85D]"
              />
            ))}
          </div>

          <span className="hidden h-4 w-px bg-[#DDE4E1] sm:block" />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#687371]
            "
          >
            Guest satisfaction
          </span>
        </div>

        {/* ===================================================
            TESTIMONIAL GRID
        ==================================================== */}

        <div
          className="
            mt-10
            grid
            gap-5
            sm:mt-12
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {items.map((testimonial, index) => (
            <TestimonialCard
              key={
                testimonial.id ??
                `${testimonial.name}-${index}`
              }
              testimonial={testimonial}
              featured={index === 0}
            />
          ))}
        </div>

        {/* ===================================================
            BOTTOM CTA
        ==================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            gap-4
            text-center
            sm:mt-12
          "
        >
          <div className="flex items-center gap-2">
            <FiHeart
              size={14}
              className="text-[#C9826D]"
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#89918F]
              "
            >
              Your experience matters to us
            </span>
          </div>

          <Link
            href="/contact"
            className="
              group
              inline-flex
              min-h-11
              items-center
              gap-2
              rounded-xl
              border
              border-[#175C5A]/20
              bg-[#EEF7F5]
              px-5
              text-xs
              font-bold
              text-[#175C5A]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#175C5A]
              hover:bg-[#175C5A]
              hover:text-white
            "
          >
            Share Your Experience

            <FiArrowRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: {
    id?: number | string;
    name: string;
    text?: string;
    review?: string;
    message?: string;
    rating?: number;
    date?: string;
    service?: string;
    verified?: boolean;
  };
  featured?: boolean;
}) {
  const content =
    testimonial.text ||
    testimonial.review ||
    testimonial.message ||
    "";

  const rating = Math.min(
    5,
    Math.max(1, testimonial.rating ?? 5)
  );

  return (
    <article
      className={`
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[1.5rem]
        border
        p-5
        shadow-[0_6px_25px_rgba(36,48,47,0.045)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(36,48,47,0.09)]
        sm:p-6
        ${
          featured
            ? `
              border-[#175C5A]/15
              bg-[#F7FAF9]
            `
            : `
              border-[#E3E8E6]
              bg-white
            `
        }
      `}
    >
      {/* Decorative quote */}

      <span
        aria-hidden="true"
        className="
          absolute
          right-5
          top-3
          font-serif
          text-6xl
          leading-none
          text-[#175C5A]/[0.06]
          transition-colors
          duration-500
          group-hover:text-[#175C5A]/[0.10]
        "
      >
        &quot;
      </span>

      {/* ===================================================
          TOP
      ==================================================== */}

      <div className="relative flex items-center justify-between gap-3">

        {/* Avatar */}

        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#175C5A]
              font-serif
              text-sm
              font-medium
              text-white
            "
          >
            {getInitials(testimonial.name)}
          </div>

          <div className="min-w-0">
            <p
              className="
                truncate
                text-xs
                font-bold
                text-[#24302F]
              "
            >
              {testimonial.name}
            </p>

            {testimonial.verified && (
              <div
                className="
                  mt-1
                  flex
                  items-center
                  gap-1
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#247B55]
                "
              >
                <FiCheck size={10} />

                Verified Guest
              </div>
            )}
          </div>
        </div>

        {/* Rating */}

        <div
          className="
            flex
            items-center
            gap-0.5
            rounded-lg
            bg-[#F8F3E9]
            px-2
            py-1.5
          "
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map(
            (_, index) => (
              <FiStar
                key={index}
                size={10}
                className={
                  index < rating
                    ? "fill-[#D8A85D] text-[#D8A85D]"
                    : "text-[#D8DCD9]"
                }
              />
            )
          )}
        </div>
      </div>

      {/* ===================================================
          REVIEW
      ==================================================== */}

      <blockquote
        className="
          relative
          mt-5
          flex-1
        "
      >
        <p
          className="
            text-sm
            leading-6
            text-[#5F6966]
          "
        >
          &quot;{content}&quot;
        </p>
      </blockquote>

      {/* ===================================================
          FOOTER
      ==================================================== */}

      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          gap-3
          border-t
          border-[#E9EEEC]
          pt-4
        "
      >
        {testimonial.service ? (
          <span
            className="
              truncate
              rounded-full
              bg-[#EEF7F5]
              px-2.5
              py-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.08em]
              text-[#175C5A]
            "
          >
            {testimonial.service}
          </span>
        ) : (
          <span />
        )}

        {testimonial.date && (
          <time
            className="
              shrink-0
              text-[9px]
              text-[#9AA29F]
            "
          >
            {testimonial.date}
          </time>
        )}
      </div>
    </article>
  );
}

/* =========================================================
   INITIALS
========================================================= */

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}
