// components/home/Location.tsx
"use client";
import Link from "next/link";
import {
  FaArrowRight as FiArrowRight,
  FaClock as FiClock,
  FaExternalLinkAlt as FiExternalLink,
  FaMapMarkerAlt as FiMapPin,
  FaLocationArrow as FiNavigation,
  FaPhoneAlt as FiPhone,
} from "react-icons/fa";

import { site } from "@/data/site";

/* =========================================================
   LOCATION
========================================================= */

export default function Location() {
  const address = [
    site.address.street,
    site.address.area,
    `${site.address.city}, ${site.address.state}`,
    site.address.pincode,
  ]
    .filter(Boolean)
    .join(", ");

  const mapUrl =
    site.maps.directionsUrl ||
    site.maps.googleMapsUrl ||
    site.contact.mapUrl ||
    "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(address);

  const mapEmbedUrl =
    site.contact.mapEmbedUrl ||
    `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  const primaryHours = site.hours?.[0];

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
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
          DECORATIVE BACKGROUND
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
            bg-[#D8C2A0]/[0.13]
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

        <div className="mx-auto max-w-2xl text-center">

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
              Visit Us
            </span>

            <span className="h-px w-7 bg-[#D8C2A0]" />
          </div>

          <h2
            id="location-heading"
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
            Find your way to{" "}
            <span className="text-[#175C5A]">
              Oceanic Spa
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-[#687371]
              sm:text-[15px]
            "
          >
            Conveniently located in Vashi, our spa is
            designed to be an easy escape from the
            everyday.
          </p>
        </div>

        {/* ===================================================
            LOCATION CARD
        ==================================================== */}

        <div
          className="
            mt-10
            overflow-hidden
            rounded-[1.5rem]
            border
            border-[#DCE5E2]
            bg-white
            shadow-[0_20px_60px_rgba(31,61,59,0.08)]
            sm:mt-12
            lg:rounded-[2rem]
          "
        >
          <div
            className="
              grid
              lg:grid-cols-[1.05fr_0.95fr]
            "
          >

            {/* =================================================
                MAP AREA
            ================================================== */}

            <div
              className="
                relative
                min-h-[300px]
                overflow-hidden
                bg-[#DDEBE8]
                sm:min-h-[380px]
                lg:min-h-[500px]
              "
            >
              <iframe
                src={mapEmbedUrl}
                title="Oceanic Spa Vashi location map"
                className="absolute inset-0 h-full min-h-[300px] w-full border-0 sm:min-h-[380px] lg:min-h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map label */}

              <div
                className="
                  absolute
                  left-4
                  top-4
                  rounded-2xl
                  border
                  border-white/70
                  bg-white/90
                  px-4
                  py-3
                  shadow-lg
                  backdrop-blur-md
                  sm:left-6
                  sm:top-6
                "
              >
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#175C5A]
                  "
                >
                  Oceanic Spa Vashi
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    text-[#777F7D]
                  "
                >
                  Your wellness destination
                </p>
              </div>

              {/* Open Maps */}

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  absolute
                  bottom-4
                  right-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/70
                  bg-white/95
                  px-4
                  py-3
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  text-[#175C5A]
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#175C5A]
                  hover:text-white
                  sm:bottom-6
                  sm:right-6
                "
              >
                <FiNavigation size={14} />

                <span>Open in Maps</span>

                <FiExternalLink
                  size={12}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>

            {/* =================================================
                DETAILS
            ================================================== */}

            <div
              className="
                flex
                flex-col
                justify-center
                p-6
                sm:p-8
                lg:p-12
                xl:p-14
              "
            >
              {/* Eyebrow */}

              <div className="flex items-center gap-2.5">
                <span className="h-px w-7 bg-[#D8C2A0]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#175C5A]
                  "
                >
                  Our Location
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
                A peaceful escape in{" "}
                <span className="text-[#175C5A]">
                  Vashi
                </span>
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#687371]
                "
              >
                Step away from the noise and into a
                calm, comfortable environment created
                for relaxation and wellness.
              </p>

              {/* =================================================
                  ADDRESS
              ================================================== */}

              <div
                className="
                  mt-7
                  rounded-2xl
                  border
                  border-[#E3E9E7]
                  bg-[#F8FAF9]
                  p-4
                  sm:p-5
                "
              >
                <div className="flex items-start gap-3.5">
                  <InfoIcon>
                    <FiMapPin size={17} />
                  </InfoIcon>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#175C5A]
                      "
                    >
                      Address
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#596360]
                      "
                    >
                      {site.address.street}
                      <br />
                      {site.address.area}
                      <br />
                      {site.address.city},{" "}
                      {site.address.state}
                      {site.address.pincode && (
                        <>
                          {" "}
                          - {site.address.pincode}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  HOURS + PHONE
              ================================================== */}

              <div
                className="
                  mt-3
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                {/* Hours */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-[#E3E9E7]
                    bg-white
                    p-4
                  "
                >
                  <div className="flex items-center gap-3">
                    <InfoIcon>
                      <FiClock size={16} />
                    </InfoIcon>

                    <div>
                      <p
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#175C5A]
                        "
                      >
                        Opening Hours
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          font-medium
                          text-[#596360]
                        "
                      >
                        {primaryHours?.open
                          ? `${primaryHours.open} - ${primaryHours.close}`
                          : "Open Daily"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}

                <a
                  href={`tel:${site.contact.phone}`}
                  className="
                    group
                    rounded-2xl
                    border
                    border-[#E3E9E7]
                    bg-white
                    p-4
                    transition-all
                    duration-300
                    hover:border-[#175C5A]/30
                    hover:bg-[#F8FAF9]
                  "
                >
                  <div className="flex items-center gap-3">
                    <InfoIcon>
                      <FiPhone size={16} />
                    </InfoIcon>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#175C5A]
                        "
                      >
                        Call Us
                      </p>

                      <p
                        className="
                          mt-1
                          truncate
                          text-xs
                          font-medium
                          text-[#596360]
                          group-hover:text-[#175C5A]
                        "
                      >
                        {site.contact.phone}
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* =================================================
                  CTA
              ================================================== */}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    min-h-12
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#175C5A]
                    px-5
                    text-xs
                    font-bold
                    text-white
                    shadow-[0_10px_28px_rgba(23,92,90,0.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#124B49]
                  "
                >
                  <FiNavigation size={15} />

                  <span>Get Directions</span>

                  <FiArrowRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </a>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    min-h-12
                    flex-1
                    items-center
                    justify-center
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
                  "
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            LOCATION SEO SUPPORT
        ==================================================== */}

        <div className="mt-7 text-center">
          <p
            className="
              text-[10px]
              leading-5
              text-[#929A97]
              sm:text-[11px]
            "
          >
            Conveniently located in {site.address.area},{" "}
            {site.address.city} - easy to reach for your
            next massage and wellness experience.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

function InfoIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      className="
        flex
        h-9
        w-9
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-[#EEF7F5]
        text-[#175C5A]
      "
    >
      {children}
    </span>
  );
}

