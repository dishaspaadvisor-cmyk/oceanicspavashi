"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowLeft as FiArrowLeft,
  FaArrowRight as FiArrowRight,
  FaCalendarAlt as FiCalendar,
  FaHome as FiHome,
  FaWhatsapp as FiMessageCircle,
  FaPhoneAlt as FiPhone,
} from "react-icons/fa";

import { site } from "@/data/site";

export default function NotFound() {
  const whatsappUrl = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Hello Oceanic Spa Vashi, I would like to know more about your services."
  )}`;

  return (
    <main className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0c0b09] px-4 py-24 text-white sm:px-6 lg:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a86a]/5 blur-[120px]" />

        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#c9a86a]/5 blur-[100px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c9a86a]/5 blur-[110px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a86a]/40 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-4xl">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <Link
            href="/"
            aria-label={`${site.name} home`}
            className="group"
          >
            <Image
              src={site.branding.logo}
              alt={site.branding.logoAlt}
              width={160}
              height={64}
              className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80 sm:h-16"
            />
          </Link>
        </div>

        {/* Main card */}
        <div className="overflow-hidden rounded-[28px] border border-[#c9a86a]/15 bg-[#11100e]/90 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            {/* 404 */}
            <div className="relative mx-auto mb-7 w-fit">
              <span className="select-none text-[100px] font-light leading-none tracking-[-0.08em] text-[#c9a86a]/15 sm:text-[140px]">
                404
              </span>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-light tracking-tight text-[#d9b97a] sm:text-6xl">
                  404
                </span>
              </div>
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c9a86a]">
              Page Not Found
            </p>

            <h1 className="mx-auto mt-4 max-w-2xl text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl">
              Looks like this page{" "}
              <span className="text-[#d9b97a]">
                has wandered away.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              The page you are looking for may have been
              moved, renamed, or is no longer available.
              Let us help you find your way back to
              Oceanic Spa Vashi.
            </p>

            {/* Primary actions */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-[#c9a86a] px-6 text-xs font-bold text-[#171512] transition-all duration-300 hover:bg-[#d9b97a] hover:shadow-[0_10px_35px_rgba(201,168,106,0.2)]"
              >
                <FiHome
                  size={16}
                  className="transition-transform group-hover:scale-110"
                />

                Back to Home
              </Link>

              <Link
                href="/services"
                className="group flex h-12 items-center justify-center gap-2 rounded-xl border border-[#c9a86a]/25 px-6 text-xs font-semibold text-[#d9b97a] transition-all duration-300 hover:border-[#c9a86a]/50 hover:bg-[#c9a86a]/10"
              >
                Explore Services

                <FiArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Helpful links */}
          <div className="border-t border-white/10 bg-[#0c0b09]/60 px-5 py-7 sm:px-8">
            <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
              Looking for something?
            </p>

            <div className="grid gap-2 sm:grid-cols-3">
              <Link
                href="/services"
                className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-[#c9a86a]/20 hover:bg-[#c9a86a]/5"
              >
                <span className="text-xs text-white/60 group-hover:text-white/80">
                  Our Services
                </span>

                <FiArrowRight
                  size={14}
                  className="text-[#c9a86a] transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/offers"
                className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-[#c9a86a]/20 hover:bg-[#c9a86a]/5"
              >
                <span className="text-xs text-white/60 group-hover:text-white/80">
                  Current Offers
                </span>

                <FiArrowRight
                  size={14}
                  className="text-[#c9a86a] transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-[#c9a86a]/20 hover:bg-[#c9a86a]/5"
              >
                <span className="text-xs text-white/60 group-hover:text-white/80">
                  Contact Us
                </span>

                <FiArrowRight
                  size={14}
                  className="text-[#c9a86a] transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-7 flex flex-col items-center gap-3 text-center">
          <p className="text-xs text-white/35">
            Need help booking your spa experience?
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href={`tel:${site.contact.phone}`}
              className="flex h-10 items-center gap-2 rounded-full border border-white/10 px-4 text-[11px] font-semibold text-white/60 transition-colors hover:border-[#c9a86a]/30 hover:text-[#d9b97a]"
            >
              <FiPhone size={14} />
              {site.contact.phone}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center gap-2 rounded-full border border-[#c9a86a]/20 bg-[#c9a86a]/5 px-4 text-[11px] font-semibold text-[#d9b97a] transition-colors hover:bg-[#c9a86a]/10"
            >
              <FiMessageCircle size={14} />
              WhatsApp Us
            </a>

            <Link
              href="/contact"
              className="flex h-10 items-center gap-2 rounded-full bg-white/5 px-4 text-[11px] font-semibold text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <FiCalendar size={14} />
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 text-[11px] font-medium text-white/30 transition-colors hover:text-[#d9b97a]"
          >
            <FiArrowLeft
              size={13}
              className="transition-transform group-hover:-translate-x-1"
            />

            Go back to previous page
          </button>
        </div>
      </div>
    </main>
  );
}
