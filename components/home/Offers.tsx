import Link from "next/link";
import { FaArrowRight as FiArrowRight } from "react-icons/fa";

import OfferCard from "@/components/cards/OfferCard";
import { activeOffers } from "@/data/offer";

export default function Offers() {
  const previewOffers = activeOffers.slice(0, 3);

  if (previewOffers.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="home-offers-heading"
      className="
        bg-[#F7FAF9]
        px-4
        py-14
        sm:px-6
        sm:py-16
        lg:px-8
        lg:py-20
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div className="max-w-2xl">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#175C5A]
              "
            >
              Spa Offers
            </p>

            <h2
              id="home-offers-heading"
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
              Current offers at Oceanic Spa Vashi
            </h2>
          </div>

          <Link
            href="/offers"
            className="
              inline-flex
              min-h-11
              w-fit
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-[#175C5A]/20
              bg-white
              px-5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#175C5A]
              transition-all
              hover:bg-[#EEF7F5]
            "
          >
            View All
            <FiArrowRight size={14} />
          </Link>
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
          {previewOffers.map((offer, index) => (
            <OfferCard
              key={offer.slug}
              offer={offer}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
