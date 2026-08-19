
"use client";
import Link from "next/link";
import {
  FaArrowRight as FiArrowRight,
  FaCheck as FiCheck,
} from "react-icons/fa";

import { whyChooseReasons } from "@/data/home";

/* =========================================================
   COMPONENT
========================================================= */

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="
        relative
        overflow-hidden
        bg-[#F7FAF9]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Ocean glow */}

        <div
          className="
            absolute
            -left-48
            top-20
            h-96
            w-96
            rounded-full
            bg-[#175C5A]/[0.055]
            blur-[120px]
          "
        />

        {/* Sand glow */}

        <div
          className="
            absolute
            -right-48
            bottom-0
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-[#D8C2A0]/[0.13]
            blur-[120px]
          "
        />

        {/* Terracotta glow */}

        <div
          className="
            absolute
            left-[45%]
            top-10
            h-40
            w-40
            rounded-full
            bg-[#C9826D]/[0.035]
            blur-[80px]
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
            INTRO
        ==================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
            lg:gap-16
          "
        >
          {/* Heading */}

          <div>
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
                Why Oceanic Spa
              </span>
            </div>

            <h2
              id="why-choose-us-heading"
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
              More than a massage.
              <br />

              <span className="text-[#175C5A]">
                A moment for yourself.
              </span>
            </h2>
          </div>

          {/* Description */}

          <div className="max-w-xl lg:ml-auto">
            <p
              className="
                text-sm
                leading-7
                text-[#687371]
                sm:text-[15px]
              "
            >
              At Oceanic Spa Vashi, every visit is about
              creating time to slow down and reconnect
              with yourself. From the atmosphere to your
              treatment experience, comfort and
              relaxation remain at the heart of what we
              do.
            </p>

            {/* Mini trust line */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-[#89918F]
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EEF7F5]
                  text-[#175C5A]
                "
              >
                <FiCheck size={13} />
              </span>

              A calm experience from arrival to departure
            </div>
          </div>
        </div>

        {/* ===================================================
            REASONS GRID
        ==================================================== */}

        <div
          className="
            mt-10
            grid
            gap-3
            sm:mt-12
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {whyChooseReasons.map((reason) => (
            <ReasonCard
              key={reason.id}
              reason={reason}
            />
          ))}
        </div>

        {/* ===================================================
            EXPERIENCE BANNER
        ==================================================== */}

        <div
          className="
            relative
            mt-5
            overflow-hidden
            rounded-[1.75rem]
            bg-[#175C5A]
            shadow-[0_18px_50px_rgba(23,92,90,0.14)]
            sm:mt-6
          "
        >
          {/* Background details */}

          <div
            aria-hidden="true"
            className="
              absolute
              -right-20
              -top-24
              h-64
              w-64
              rounded-full
              border
              border-white/[0.07]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -right-8
              -top-12
              h-40
              w-40
              rounded-full
              border
              border-white/[0.05]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -bottom-24
              -left-20
              h-48
              w-48
              rounded-full
              bg-[#D8C2A0]/10
              blur-[70px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-6
              p-6
              sm:p-8
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:px-10
              lg:py-9
            "
          >
            {/* Banner content */}

            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-[#D8C2A0]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#D8C2A0]
                  "
                >
                  Your time matters
                </span>
              </div>

              <h3
                className="
                  mt-2.5
                  font-serif
                  text-2xl
                  leading-tight
                  text-white
                  sm:text-3xl
                "
              >
                Ready to make time for yourself?
              </h3>

              <p
                className="
                  mt-2
                  max-w-xl
                  text-xs
                  leading-5.5
                  text-white/60
                  sm:text-sm
                "
              >
                Choose your treatment, find a convenient
                time and let us take care of the rest.
              </p>
            </div>

            {/* CTA */}

            <Link
              href="/contact"
              className="
                group
                inline-flex
                min-h-12
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#D8C2A0]
                px-6
                text-xs
                font-bold
                text-[#24302F]
                shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#E6D5BA]
              "
            >
              Book Your Experience

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

        {/* ===================================================
            SEO SUPPORTING TEXT
        ==================================================== */}

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-center
            text-[10px]
            leading-5
            text-[#929A97]
            sm:text-[11px]
          "
        >
          Discover a relaxing spa experience in Vashi,
          Navi Mumbai with a selection of massage and
          wellness treatments designed around comfort,
          privacy and relaxation.
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   REASON CARD
========================================================= */

function ReasonCard({
  reason,
}: {
  reason: {
    id: string;
    icon: React.ComponentType<{
      size?: number;
      strokeWidth?: number;
    }>;
    title: string;
    description: string;
  };
}) {
  const Icon = reason.icon;

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[1.35rem]
        border
        border-[#E1E8E5]
        bg-white
        p-5
        shadow-[0_5px_20px_rgba(36,48,47,0.035)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#175C5A]/20
        hover:shadow-[0_18px_40px_rgba(36,48,47,0.08)]
        sm:p-6
      "
    >
      {/* ===================================================
          HOVER ACCENT
      ==================================================== */}

      <span
        aria-hidden="true"
        className="
          absolute
          right-0
          top-0
          h-20
          w-20
          rounded-bl-[3rem]
          bg-[#175C5A]/[0.025]
          transition-all
          duration-500
          group-hover:h-28
          group-hover:w-28
          group-hover:bg-[#175C5A]/[0.05]
        "
      />

      {/* ===================================================
          TOP
      ==================================================== */}

      <div className="relative flex items-start justify-between gap-4">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-[#EEF7F5]
            text-[#175C5A]
            transition-all
            duration-300
            group-hover:bg-[#175C5A]
            group-hover:text-white
          "
        >
          <Icon size={19} />
        </div>

        <span
          className="
            font-serif
            text-sm
            text-[#D8C2A0]
            transition-colors
            duration-300
            group-hover:text-[#C9826D]
          "
        >
          {reason.id}
        </span>
      </div>

      {/* ===================================================
          CONTENT
      ==================================================== */}

      <div className="relative mt-5">
        <h3
          className="
            font-serif
            text-lg
            leading-tight
            text-[#24302F]
          "
        >
          {reason.title}
        </h3>

        <p
          className="
            mt-2.5
            text-xs
            leading-5.5
            text-[#78827F]
          "
        >
          {reason.description}
        </p>
      </div>

      {/* ===================================================
          BOTTOM DETAIL
      ==================================================== */}

      <div
        className="
          relative
          mt-5
          flex
          items-center
          gap-2
          border-t
          border-[#EDF0EE]
          pt-4
          text-[9px]
          font-bold
          uppercase
          tracking-[0.1em]
          text-[#89918F]
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#D8C2A0]
            transition-all
            duration-300
            group-hover:bg-[#C9826D]
            group-hover:ring-4
            group-hover:ring-[#C9826D]/10
          "
        />

        Oceanic Spa Vashi
      </div>
    </article>
  );
}
