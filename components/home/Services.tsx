"use client";

import Link from "next/link";
import { FaArrowRight as FiArrowRight } from "react-icons/fa";

import {
  homeServiceSlugs,
  serviceTrustPoints,
} from "@/data/home";
import { activeServices } from "@/data/service";
import ServiceCard from "@/components/service/ServiceCard";

/* =========================================================
   FEATURED SERVICES
========================================================= */

export default function Services() {
  const services = homeServiceSlugs
    .map((slug) =>
      activeServices.find(
        (service) => service.slug === slug
      )
    )
    .filter(
      (
        service
      ): service is NonNullable<typeof service> =>
        Boolean(service)
    );

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
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
        {/* Ocean */}
        <div
          className="
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-[#175C5A]/[0.055]
            blur-[110px]
          "
        />

        {/* Sand */}
        <div
          className="
            absolute
            -right-40
            bottom-0
            h-96
            w-96
            rounded-full
            bg-[#D8C2A0]/[0.13]
            blur-[110px]
          "
        />

        {/* Terracotta */}
        <div
          className="
            absolute
            right-[18%]
            top-10
            h-48
            w-48
            rounded-full
            bg-[#C9826D]/[0.035]
            blur-[90px]
          "
        />

        {/* Decorative line */}
        <div
          className="
            absolute
            right-0
            top-32
            hidden
            h-px
            w-40
            bg-gradient-to-l
            from-[#D8C2A0]/50
            to-transparent
            lg:block
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}

          <div
            className="
              inline-flex
              items-center
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

          {/* Heading */}

          <h2
            id="services-heading"
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
            Massage treatments for{" "}
            <span className="text-[#175C5A]">
              complete relaxation
            </span>
          </h2>

          {/* Description */}

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
            Discover relaxing massage treatments at
            Oceanic Spa Vashi, carefully selected to
            help release tension, restore comfort and
            leave you feeling refreshed.
          </p>
        </div>

        {/* ===================================================
            TRUST POINTS
        ==================================================== */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-3
            sm:mt-10
          "
        >
          {serviceTrustPoints.map(({ icon: Icon, label }) => (
            <TrustPoint key={label} icon={<Icon size={13} />}>
              {label}
            </TrustPoint>
          ))}
        </div>

        {/* ===================================================
            SERVICE GRID
        ==================================================== */}

        {services.length > 0 ? (
          <div
            className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:mt-14
              lg:grid-cols-3
              lg:gap-6
            "
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={{
                  ...service,
                  id:
                    service.id ??
                    index + 1,
                }}
                priority={index < 2}
                variant={
                  index === 0
                    ? "featured"
                    : "default"
                }
              />
            ))}
          </div>
        ) : (
          <EmptyServices />
        )}

        {/* ===================================================
            COMPLETE SERVICES CTA
        ==================================================== */}

        <div
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[1.75rem]
            border
            border-[#DDE7E4]
            bg-white
            shadow-[0_8px_30px_rgba(36,48,47,0.045)]
            sm:mt-12
          "
        >
          {/* Decorative accent */}

          <div
            aria-hidden="true"
            className="
              absolute
              -right-16
              -top-20
              h-44
              w-44
              rounded-full
              bg-[#175C5A]/[0.045]
              blur-[50px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-6
              px-5
              py-6
              sm:px-7
              sm:py-7
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-xl">

              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-[#C9826D]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#C9826D]
                  "
                >
                  More ways to unwind
                </span>
              </div>

              <h3
                className="
                  mt-2
                  font-serif
                  text-xl
                  text-[#24302F]
                  sm:text-2xl
                "
              >
                Explore our complete treatment menu
              </h3>

              <p
                className="
                  mt-1.5
                  text-xs
                  leading-5.5
                  text-[#7B8582]
                "
              >
                From relaxing full-body massages to
                specialized wellness experiences, find
                a treatment that suits your needs.
              </p>
            </div>

            <Link
              href="/services"
              className="
                group
                inline-flex
                min-h-11
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#175C5A]
                px-5
                text-xs
                font-bold
                text-white
                shadow-[0_8px_22px_rgba(23,92,90,0.16)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#104846]
                hover:shadow-[0_12px_28px_rgba(23,92,90,0.22)]
              "
            >
              View All Services

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
            SMALL SEO SUPPORTING TEXT
        ==================================================== */}

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-center
            text-[11px]
            leading-5
            text-[#89918F]
          "
        >
          Explore massage and spa treatments in Vashi,
          Navi Mumbai, including deep tissue, Swedish,
          Balinese and relaxing full-body massage
          experiences.
        </p>
      </div>
    </section>
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
    <div
      className="
        inline-flex
        items-center
        gap-2
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.08em]
        text-[#6F7A78]
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
        {icon}
      </span>
      {children}
    </div>
  );
}

/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyServices() {
  return (
    <div
      className="
        mx-auto
        mt-12
        max-w-lg
        rounded-2xl
        border
        border-[#E3E8E6]
        bg-white
        px-6
        py-10
        text-center
      "
    >
      <p className="text-sm font-semibold text-[#24302F]">
        Treatments coming soon
      </p>

      <p className="mt-2 text-xs text-[#89918F]">
        Please contact Oceanic Spa Vashi for our
        current treatment availability.
      </p>
    </div>
  );
}
