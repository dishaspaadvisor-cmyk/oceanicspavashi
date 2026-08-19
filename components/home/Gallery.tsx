"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight as FiArrowRight,
  FaExternalLinkAlt as FiArrowUpRight,
  FaCamera as FiCamera,
  FaExpandAlt as FiMaximize2,
} from "react-icons/fa";

import { galleryImages } from "@/data/gallery";

/* =========================================================
   HOME GALLERY
========================================================= */

const HOME_GALLERY_COUNT = 6;

export default function Gallery() {
  const images = galleryImages.slice(
    0,
    HOME_GALLERY_COUNT
  );

  if (!images.length) {
    return null;
  }

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
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
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Ocean glow */}

        <div
          className="
            absolute
            -right-40
            top-10
            h-80
            w-80
            rounded-full
            bg-[#175C5A]/[0.045]
            blur-[110px]
          "
        />

        {/* Sand glow */}

        <div
          className="
            absolute
            -left-40
            bottom-0
            h-80
            w-80
            rounded-full
            bg-[#D8C2A0]/[0.12]
            blur-[110px]
          "
        />

        {/* Terracotta glow */}

        <div
          className="
            absolute
            left-[42%]
            top-20
            h-40
            w-40
            rounded-full
            bg-[#C9826D]/[0.035]
            blur-[80px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Heading */}

          <div className="max-w-2xl">

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
                Our Gallery
              </span>
            </div>

            {/* Heading */}

            <h2
              id="gallery-heading"
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
              A glimpse into your{" "}
              <span className="text-[#175C5A]">
                Oceanic experience
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-[#687371]
                sm:text-[15px]
              "
            >
              Take a look inside Oceanic Spa Vashi -
              from peaceful treatment rooms to relaxing
              spaces designed to help you slow down,
              switch off and unwind.
            </p>
          </div>

          {/* Desktop CTA */}

          <Link
            href="/gallery"
            className="
              group
              hidden
              shrink-0
              items-center
              gap-2
              rounded-xl
              border
              border-[#175C5A]/20
              bg-[#EEF7F5]
              px-5
              py-3
              text-xs
              font-bold
              text-[#175C5A]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#175C5A]
              hover:bg-[#175C5A]
              hover:text-white
              sm:inline-flex
            "
          >
            View Full Gallery

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

        {/* ===================================================
            GALLERY GRID
        ==================================================== */}

        <div
          className="
    mt-10
    grid
    grid-cols-2
    items-stretch
    gap-2.5
    sm:mt-12
    sm:gap-4
    lg:grid-cols-12
    lg:grid-rows-[230px_230px]
    lg:gap-5
  "
        >
          {images.map((image, index) => (
            <GalleryItem

              key={image.id ?? image.image}
              image={image}
              index={index}
            />
          ))}
        </div>

        {/* ===================================================
            MOBILE CTA
        ==================================================== */}

        <div className="mt-7 flex justify-center sm:hidden">
          <Link
            href="/gallery"
            className="
              group
              inline-flex
              min-h-11
              items-center
              gap-2
              rounded-xl
              bg-[#175C5A]
              px-5
              text-xs
              font-bold
              text-white
              shadow-[0_8px_22px_rgba(23,92,90,0.15)]
              transition-all
              duration-300
              active:scale-[0.98]
            "
          >
            View Full Gallery

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

        {/* ===================================================
            BOTTOM TRUST STRIP
        ==================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            rounded-[1.5rem]
            border
            border-[#E3E8E6]
            bg-[#F7FAF9]
            px-5
            py-5
            sm:mt-12
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-7
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#EEF7F5]
                text-[#175C5A]
              "
            >
              <FiCamera size={17} />
            </span>

            <div>
              <p
                className="
                  text-xs
                  font-bold
                  text-[#24302F]
                "
              >
                See the Oceanic difference
              </p>

              <p
                className="
                  mt-1
                  text-[11px]
                  text-[#89918F]
                "
              >
                Explore our spa, treatment spaces and
                relaxing ambience.
              </p>
            </div>
          </div>

          <Link
            href="/gallery"
            className="
              group
              inline-flex
              items-center
              gap-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#175C5A]
              transition-colors
              hover:text-[#C9826D]
            "
          >
            Explore Gallery

            <FiArrowUpRight
              size={13}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   GALLERY ITEM
========================================================= */

function GalleryItem({
  image,
  index,
}: {
  image: {
    id?: number | string;
    image: string;
    alt: string;
    title?: string;
    category?: string;
    featured?: boolean;
  };
  index: number;
}) {
  /*
    Desktop masonry-style arrangement:

    Item 1 - large featured
    Item 2 - normal
    Item 3 - normal
    Item 4 - normal
    Item 5 - normal
    Item 6 - large

    Mobile - simple 2-column grid.
  */

  const layoutClasses = [
    "lg:col-span-5 lg:row-span-2",
    "lg:col-span-3 lg:row-span-1",
    "lg:col-span-4 lg:row-span-1",
    "lg:col-span-3 lg:row-span-1",
    "lg:col-span-4 lg:row-span-1",
    "lg:col-span-5 lg:row-span-1",
  ];

  const layout =
    layoutClasses[index % layoutClasses.length];

  return (
    <Link
      href="/gallery"
      aria-label={`View ${image.title || image.alt} in gallery`}
      className={`
        group
        relative
        block
        overflow-hidden
        rounded-xl
        bg-[#EEF2F0]
        sm:rounded-2xl
        ${layout}
      `}
    >
      {/* ===================================================
          IMAGE
      ==================================================== */}

      <div
        className={`
          relative
          h-full
          min-h-[165px]
          ${index === 0
            ? "sm:min-h-[250px]"
            : "sm:min-h-[190px]"
          }
          lg:min-h-0
        `}
      >
        <Image
          src={image.image}
          alt={image.alt}
          fill
          loading="eager"
          sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 42vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.06]
          "
        />

        {/* =================================================
            IMAGE OVERLAY
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#123B3A]/75
            via-[#123B3A]/10
            to-transparent
            opacity-75
            transition-opacity
            duration-500
            group-hover:opacity-90
          "
        />

        {/* =================================================
            TOP CATEGORY
        ================================================== */}

        {image.category && (
          <span
            className="
              absolute
              left-3
              top-3
              rounded-full
              border
              border-white/25
              bg-[#123B3A]/45
              px-2.5
              py-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-white
              backdrop-blur-md
              sm:left-4
              sm:top-4
            "
          >
            {image.category}
          </span>
        )}

        {/* =================================================
            IMAGE NUMBER
        ================================================== */}

        <span
          className="
            absolute
            right-3
            top-3
            flex
            h-7
            min-w-7
            items-center
            justify-center
            rounded-lg
            border
            border-white/20
            bg-[#123B3A]/40
            px-1.5
            text-[8px]
            font-bold
            tracking-widest
            text-white
            backdrop-blur-md
            sm:right-4
            sm:top-4
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* =================================================
            DESKTOP CENTER ICON
        ================================================== */}

        <span
          className="
            absolute
            left-1/2
            top-1/2
            hidden
            h-12
            w-12
            -translate-x-1/2
            -translate-y-[35%]
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#175C5A]
            opacity-0
            shadow-xl
            transition-all
            duration-500
            group-hover:-translate-y-1/2
            group-hover:opacity-100
            md:flex
          "
        >
          <FiMaximize2 size={18} />
        </span>

        {/* =================================================
            TITLE
        ================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            p-3.5
            sm:p-5
          "
        >
          <div className="flex items-end justify-between gap-3">

            <div className="min-w-0">
              {image.title && (
                <p
                  className="
                    truncate
                    font-serif
                    text-sm
                    leading-tight
                    text-white
                    sm:text-base
                  "
                >
                  {image.title}
                </p>
              )}

              <p
                className="
                  mt-1
                  line-clamp-1
                  text-[9px]
                  leading-4
                  text-white/70
                  sm:text-[10px]
                "
              >
                {image.alt}
              </p>
            </div>

            {/* Mobile icon */}

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
                transition-transform
                duration-300
                group-active:scale-95
                md:hidden
              "
            >
              <FiMaximize2 size={14} />
            </span>
          </div>
        </div>
      </div>



    </Link>
  );
}
