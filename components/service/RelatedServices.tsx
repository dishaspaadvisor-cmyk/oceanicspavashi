import Link from "next/link";
import { FaArrowRight as FiArrowRight, FaHeart as FiHeart } from "react-icons/fa";

import { activeServices } from "@/data/service";
import ServiceCard from "@/components/service/ServiceCard";

interface RelatedServicesProps {
  currentSlug: string;

  /**
   * Number of related services to display.
   */
  limit?: number;

  /**
   * Optional heading override.
   */
  title?: string;

  /**
   * Optional description override.
   */
  description?: string;

  detailBasePath?: "/services" | "/massage";
  listingHref?: "/services" | "/massage";
  listingLabel?: string;

  className?: string;
}

export default function RelatedServices({
  currentSlug,
  limit = 3,
  title = "You may also like",
  description = "Explore more massage and wellness treatments available at Oceanic Spa Vashi.",
  detailBasePath = "/services",
  listingHref = "/services",
  listingLabel = "View All Treatments",
  className = "",
}: RelatedServicesProps) {
  const currentService = activeServices.find(
    (service) => service.slug === currentSlug
  );

  const relatedServices = activeServices
    .filter((service) => service.slug !== currentSlug)
    .sort((a, b) => {
      /*
       * Keep popular treatments towards the beginning.
       * Falls back to the original data order when popularity
       * is the same.
       */
      if (a.popular && !b.popular) return -1;
      if (!a.popular && b.popular) return 1;

      return 0;
    })
    .slice(0, limit);

  if (!relatedServices.length) {
    return null;
  }

  return (
    <section
      aria-labelledby="related-services-heading"
      className={`
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
        ${className}
      `}
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
            top-10
            h-80
            w-80
            rounded-full
            bg-[#175C5A]/[0.035]
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
            bg-[#D8C2A0]/[0.10]
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
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          {/* Heading */}

          <div className="max-w-2xl">
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
                More Treatments
              </span>
            </div>

            <h2
              id="related-services-heading"
              className="
                mt-4
                font-serif
                text-3xl
                font-normal
                leading-[1.12]
                tracking-tight
                text-[#24302F]
                sm:text-4xl
                lg:text-[3rem]
              "
            >
              {title}
              <span className="text-[#175C5A]">.</span>
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-[#687371]
                sm:text-[15px]
              "
            >
              {description}
            </p>
          </div>

          {/* Desktop all services link */}

          <Link
            href={listingHref}
            className="
              group
              hidden
              shrink-0
              items-center
              gap-2
              rounded-xl
              border
              border-[#175C5A]/15
              bg-[#EEF7F5]
              px-4
              py-3
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
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
            {listingLabel}

            <FiArrowRight
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* ===================================================
            CURRENT SERVICE CONTEXT
        ==================================================== */}

        {currentService && (
          <div
            className="
              mt-6
              flex
              items-center
              gap-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.1em]
              text-[#98A09D]
            "
          >
            <FiHeart
              size={12}
              className="text-[#C9826D]"
            />

            <span>
              More from Oceanic Spa Vashi
            </span>
          </div>
        )}

        {/* ===================================================
            SERVICES
        ==================================================== */}

        <div
          className="
            mt-8
            grid
            gap-5
            sm:mt-10
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {relatedServices.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              variant={
                index === 0
                  ? "featured"
                  : "default"
              }
              priority={false}
              detailBasePath={detailBasePath}
            />
          ))}
        </div>

        {/* ===================================================
            MOBILE ALL SERVICES
        ==================================================== */}

        <div className="mt-7 sm:hidden">
          <Link
            href={listingHref}
            className="
              group
              flex
              min-h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-[#175C5A]/15
              bg-[#EEF7F5]
              px-5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#175C5A]
              transition-all
              duration-300
              active:scale-[0.98]
              hover:border-[#175C5A]
              hover:bg-[#175C5A]
              hover:text-white
            "
          >
            {listingLabel}

            <FiArrowRight
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* ===================================================
            SEO SUPPORTING TEXT
        ==================================================== */}

        <p
          className="
            mx-auto
            mt-7
            max-w-3xl
            text-center
            text-[10px]
            leading-5
            text-[#A0A8A5]
            sm:text-[11px]
          "
        >
          Discover more massage and spa treatments in
          Vashi, Navi Mumbai and choose the experience
          that best suits your relaxation needs.
        </p>
      </div>
    </section>
  );
}
