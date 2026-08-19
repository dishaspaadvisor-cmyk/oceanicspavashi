"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaCheck,
  FaClock,
  FaPhoneAlt,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

import { site } from "@/data/site";

const SHOW_DELAY = 30000;
const OFFER_DURATION_SECONDS = 10 * 60;

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(
    OFFER_DURATION_SECONDS
  );

  /* =========================================================
     SHOW POPUP GLOBALLY AFTER 30 SECONDS
  ========================================================= */

  useEffect(() => {
    const showTimer = window.setTimeout(() => {
      setIsOpen(true);
    }, SHOW_DELAY);

    return () => {
      window.clearTimeout(showTimer);
    };
  }, []);

  /* =========================================================
     COUNTDOWN TIMER
  ========================================================= */

  useEffect(() => {
    if (!isOpen) return;

    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          setIsOpen(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isOpen]);

  /* =========================================================
     ESC CLOSE
  ========================================================= */

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  /* =========================================================
     LOCK BODY SCROLL
  ========================================================= */

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /* =========================================================
     DON'T RENDER WHEN CLOSED
  ========================================================= */

  if (!isOpen) {
    return null;
  }

  /* =========================================================
     TIMER FORMAT
  ========================================================= */

  const minutes = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (secondsLeft % 60)
    .toString()
    .padStart(2, "0");

  /* =========================================================
     WHATSAPP
  ========================================================= */

  const whatsappMessage =
    "Hello Oceanic Spa Vashi, I am visiting your website and would like to claim the ₹1,999 special spa offer. Please share availability.";

  const whatsappUrl = `https://wa.me/${
    site.contact.whatsapp
  }?text=${encodeURIComponent(whatsappMessage)}`;

  /* =========================================================
     POPUP
  ========================================================= */

  return (
    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-start
        justify-center
        overflow-y-auto
        bg-black/65
        p-3
        pt-4
        backdrop-blur-[5px]
        sm:p-6
        sm:pt-8
        md:pt-10
      "
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      {/* =====================================================
          POPUP CARD
      ===================================================== */}

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="spa-offer-heading"
        className="
          relative
          w-full
          max-w-[850px]
          overflow-x-hidden
          overflow-y-auto
          rounded-[28px]
          bg-[#fffaf4]
          shadow-[0_30px_100px_rgba(0,0,0,0.45)]
          sm:rounded-[34px]
        "
      >
        {/* ===================================================
            CLOSE BUTTON
        =================================================== */}

        <button
          type="button"
          aria-label="Close popup"
          onClick={() => setIsOpen(false)}
          className="
            absolute
            right-3
            top-3
            z-50
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/35
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:rotate-90
            hover:bg-black/60
          "
        >
          <FaTimes size={15} />
        </button>

        {/* ===================================================
            MAIN GRID
        =================================================== */}

        <div
          className="
            grid
            md:grid-cols-[1.05fr_0.95fr]
          "
        >
          {/* =================================================
              IMAGE
          ================================================= */}

          <div
            className="
              relative
              h-[245px]
              overflow-hidden
              sm:h-[300px]
              md:min-h-[540px]
              md:h-auto
            "
          >
            <Image
              src="/images/Popup.png"
              alt="Oceanic Spa Vashi special spa offer"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 450px"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* IMAGE OVERLAY */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/15
                to-black/10
                md:bg-gradient-to-r
                md:from-black/35
                md:via-transparent
                md:to-transparent
              "
            />

            {/* =================================================
                MOBILE IMAGE CONTENT
            ================================================= */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-10
                p-5
                text-white
                md:hidden
              "
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/25
                  bg-black/25
                  px-3
                  py-1.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  backdrop-blur-md
                "
              >
                Limited Time Offer
              </div>

              <h2
                id="spa-offer-heading"
                className="
                  mt-3
                  max-w-[290px]
                  font-serif
                  text-[30px]
                  leading-[1.05]
                "
              >
                Relax. Refresh.
                <span className="block text-[#f1c58d]">
                  Rejuvenate.
                </span>
              </h2>
            </div>

            {/* =================================================
                DESKTOP IMAGE CONTENT
            ================================================= */}

            <div
              className="
                absolute
                bottom-8
                left-8
                z-10
                hidden
                max-w-[330px]
                text-white
                md:block
              "
            >
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-white/25
                  bg-black/20
                  px-4
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  backdrop-blur-md
                "
              >
                Oceanic Spa Vashi
              </span>

              <h2
                className="
                  mt-4
                  font-serif
                  text-[42px]
                  leading-[1.02]
                "
              >
                Your time to
                <span className="block text-[#f1c58d]">
                  relax.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-xs
                  text-sm
                  leading-6
                  text-white/80
                "
              >
                Premium wellness therapies in a
                peaceful and comfortable spa
                environment.
              </p>
            </div>
          </div>

          {/* =================================================
              OFFER CONTENT
          ================================================= */}

          <div
            className="
              relative
              flex
              flex-col
              justify-center
              px-5
              py-6
              sm:px-8
              sm:py-8
              md:px-10
              md:py-10
            "
          >
            {/* TOP BADGES */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-3
              "
            >
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-[#8f5b42]
                  px-4
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.13em]
                  text-white
                  shadow-sm
                "
              >
                25% OFF
              </span>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#f4ebe0]
                  px-3
                  py-2
                  text-xs
                  font-bold
                  text-[#9b644a]
                "
              >
                <FaClock size={12} />

                {minutes}:{seconds}
              </div>
            </div>

            {/* DESKTOP HEADING */}

            <div className="hidden md:block">
              <p
                className="
                  mt-7
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#a38d7d]
                "
              >
                Exclusive Welcome Offer
              </p>

              <h3
                className="
                  mt-3
                  font-serif
                  text-[35px]
                  leading-[1.07]
                  text-[#244845]
                "
              >
                Premium Spa Experience
              </h3>
            </div>

            {/* MOBILE HEADING */}

            <div className="md:hidden">
              <p
                className="
                  mt-5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#a38d7d]
                "
              >
                Special Appointment Offer
              </p>
            </div>

            {/* PRICE */}

            <div
              className="
                mt-3
                flex
                items-end
                gap-3
              "
            >
              <span
                className="
                  pb-1
                  text-sm
                  text-[#a9a39c]
                  line-through
                "
              >
                ₹3,999
              </span>

              <span
                className="
                  font-serif
                  text-[46px]
                  leading-none
                  text-[#175c5a]
                  sm:text-[54px]
                "
              >
                ₹1,999
              </span>
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mt-4
                text-[13px]
                leading-6
                text-[#747b78]
              "
            >
              Enjoy a relaxing premium spa
              experience at Oceanic Spa Vashi.
              Contact us now to check available
              treatments and appointment slots.
            </p>

            {/* BENEFITS */}

            <div
              className="
                mt-5
                grid
                gap-2
              "
            >
              {[
                "Professional spa therapists",
                "Premium wellness experience",
                "Comfortable and relaxing ambience",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-[#566360]
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#e4f2ef]
                      text-[#175c5a]
                    "
                  >
                    <FaCheck size={8} />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-3
              "
            >
              <a
                href={`tel:${site.contact.phone}`}
                className="
                  flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#2367a6]
                  px-3
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-white
                  shadow-[0_10px_25px_rgba(35,103,166,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#18558f]
                "
              >
                <FaPhoneAlt size={13} />

                Call Now
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#25D366]
                  px-3
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-white
                  shadow-[0_10px_25px_rgba(37,211,102,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#1ebc59]
                "
              >
                <FaWhatsapp size={17} />

                WhatsApp
              </a>
            </div>

            {/* NOTICE */}

            <p
              className="
                mt-4
                text-center
                text-[9px]
                leading-4
                text-[#aaa29a]
              "
            >
              Limited slots available. Contact us
              directly to confirm your appointment.
            </p>

            {/* TIMER BAR */}

            <div
              className="
                mt-4
                h-[4px]
                w-full
                overflow-hidden
                rounded-full
                bg-[#eee3d8]
              "
            >
              <div
                className="
                  h-full
                  rounded-full
                  bg-[#b4785d]
                  transition-all
                  duration-1000
                "
                style={{
                  width: `${
                    (secondsLeft /
                      OFFER_DURATION_SECONDS) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}