"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaArrowRight as FiArrowRight,
  FaChevronDown as FiChevronDown,
  FaQuestionCircle as FiHelpCircle,
  FaWhatsapp as FiMessageCircle,
} from "react-icons/fa";

import { homeFaqs } from "@/data/faq";
import { site } from "@/data/site";

/* =========================================================
   COMPONENT
========================================================= */

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const whatsappUrl = `https://wa.me/${
    site.contact.whatsapp
  }?text=${encodeURIComponent(
    "Hello Oceanic Spa Vashi, I have a question about treatments and appointment availability."
  )}`;

  const toggleFaq = (id: number) => {
    setOpenId((current) =>
      current === id ? null : id
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
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
              Frequently Asked Questions
            </span>

            <span className="h-px w-7 bg-[#D8C2A0]" />
          </div>

          <h2
            id="faq-heading"
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
            Everything you need to know
            <span className="text-[#175C5A]">.</span>
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
            Have questions about our treatments,
            appointments or location? Find quick answers
            below.
          </p>
        </div>

        {/* ===================================================
            FAQ CONTENT
        ==================================================== */}

        <div
          className="
            mx-auto
            mt-10
            grid
            max-w-5xl
            gap-8
            lg:mt-14
            lg:grid-cols-[0.72fr_1.28fr]
            lg:items-start
          "
        >
          {/* =================================================
              LEFT INFO CARD
          ================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[1.5rem]
              bg-[#175C5A]
              p-6
              shadow-[0_18px_50px_rgba(23,92,90,0.12)]
              sm:p-7
              lg:sticky
              lg:top-28
            "
          >
            {/* Decorative circles */}

            <div
              aria-hidden="true"
              className="
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                border
                border-white/[0.07]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-20
                -left-16
                h-40
                w-40
                rounded-full
                bg-[#D8C2A0]/10
                blur-[50px]
              "
            />

            <div className="relative">

              <div
                className="
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
                <FiHelpCircle size={20} />
              </div>

              <h3
                className="
                  mt-6
                  font-serif
                  text-2xl
                  leading-tight
                  text-white
                "
              >
                Still have a question?
              </h3>

              <p
                className="
                  mt-3
                  text-xs
                  leading-6
                  text-white/60
                "
              >
                Our team can help you choose a treatment,
                check availability and answer questions
                before your visit.
              </p>

              {/* CTA */}

              <Link
                href="/contact"
                className="
                  group
                  mt-6
                  flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#D8C2A0]
                  px-5
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
                Contact Oceanic Spa

                <FiArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* WhatsApp */}

              <div
                className="
                  mt-4
                  border-t
                  border-white/10
                  pt-4
                "
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.1em]
                    text-white/60
                    transition-colors
                    hover:text-white
                  "
                >
                  <FiMessageCircle size={13} />

                  Ask us on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* =================================================
              ACCORDION
          ================================================== */}

          <div
            className="
              overflow-hidden
              rounded-[1.5rem]
              border
              border-[#E1E8E5]
              bg-white
              shadow-[0_8px_30px_rgba(36,48,47,0.045)]
            "
          >
            {homeFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`
                    ${
                      index !== homeFaqs.length - 1
                        ? "border-b border-[#E9EEEC]"
                        : ""
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="
                      group
                      flex
                      w-full
                      min-h-[70px]
                      items-center
                      justify-between
                      gap-4
                      px-5
                      py-4
                      text-left
                      transition-colors
                      duration-200
                      hover:bg-[#F8FAF9]
                      sm:px-6
                    "
                  >
                    {/* Question */}

                    <span className="flex min-w-0 items-start gap-3.5">

                      {/* Number */}

                      <span
                        className={`
                          mt-0.5
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          text-[9px]
                          font-bold
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "bg-[#175C5A] text-white"
                              : "bg-[#EEF7F5] text-[#175C5A]"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          pt-1
                          text-xs
                          font-bold
                          leading-5
                          transition-colors
                          duration-200
                          sm:text-[13px]
                          ${
                            isOpen
                              ? "text-[#175C5A]"
                              : "text-[#34413E]"
                          }
                        `}
                      >
                        {faq.question}
                      </span>
                    </span>

                    {/* Chevron */}

                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "rotate-180 bg-[#175C5A] text-white"
                            : "bg-[#F1F4F2] text-[#687371]"
                        }
                      `}
                    >
                      <FiChevronDown size={15} />
                    </span>
                  </button>

                  {/* Answer */}

                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-300
                      ease-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pl-[4.35rem] pr-12 sm:px-6 sm:pb-6 sm:pl-[4.9rem]">
                        <p
                          id={`faq-question-${faq.id}`}
                          className="
                            max-w-2xl
                            text-xs
                            leading-6
                            text-[#727D7A]
                            sm:text-[13px]
                            sm:leading-6.5
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM SEO TEXT
        ==================================================== */}

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <p
            className="
              text-[10px]
              leading-5
              text-[#929A97]
              sm:text-[11px]
            "
          >
            Looking for a massage or spa experience in
            Vashi, Navi Mumbai? Explore our treatments,
            check availability and contact Oceanic Spa
            before your visit.
          </p>
        </div>
      </div>
    </section>
  );
}
