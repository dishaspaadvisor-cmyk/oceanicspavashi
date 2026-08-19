"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaClock as FiClock,
  FaExternalLinkAlt as FiArrowUpRight,
  FaInstagram as FiInstagram,
  FaMapMarkerAlt as FiMapPin,
  FaPhoneAlt as FiPhone,
  FaWhatsapp as FiWhatsapp,
} from "react-icons/fa";

import { activeServices } from "@/data/service";
import { site } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/contact";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Offers", href: "/offers" },
  { label: "Contact Us", href: "/contact" },
];

const popularServiceSlugs = [
  "deep-tissue-massage-in-oceanicspa-vashi",
  "full-body-oil-massage-in-oceanicspa-vashi",
  "swedish-massage-in-oceanicspa-vashi",
  "balinese-massage-in-oceanicspa-vashi",
  "lomi-lomi-massage-in-oceanicspa-vashi",
  "four-hand-massage-in-oceanicspa-vashi",
];

const localSeoLinks = [
  { label: "Spa in Vashi", href: "/locations/spa-in-vashi" },
  { label: "Massage Services", href: "/services" },
  { label: "Spa Offers", href: "/offers" },
];

function trackConversion(
  eventName: string,
  params?: Record<string, string>
) {
  if (typeof window === "undefined") return;

  const gtag = (
    window as Window & {
      gtag?: (
        command: string,
        eventName: string,
        params?: Record<string, unknown>
      ) => void;
    }
  ).gtag;

  if (typeof gtag !== "function") return;
  gtag("event", eventName, params);
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const popularServices = popularServiceSlugs
    .map((slug) =>
      activeServices.find((service) => service.slug === slug)
    )
    .filter(
      (service): service is (typeof activeServices)[number] =>
        Boolean(service)
    );

  const hasSocialLinks = Boolean(
    site.social.instagram ||
      site.social.facebook ||
      site.social.youtube
  );

  const whatsappUrl = getWhatsAppUrl(
    `Hello ${site.name}, I want to enquire about spa and massage booking in Vashi.`
  );
  const directionsUrl =
    site.maps.directionsUrl ||
    site.contact.mapUrl ||
    site.maps.googleMapsUrl;

  const handleCallClick = () => {
    trackConversion("call_click", {
      location: "footer",
      phone: site.contact.phone,
    });
  };

  const handleWhatsAppClick = () => {
    trackConversion("whatsapp_click", {
      location: "footer",
    });
  };

  const handleBookingClick = () => {
    trackConversion("appointment_click", {
      location: "footer",
    });
  };

  const handleDirectionsClick = () => {
    trackConversion("directions_click", {
      location: "footer",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#FBF9F5] pb-24 text-[#24302F] sm:pb-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#175C5A]/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#175C5A]/[0.04] to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-11 md:grid-cols-2 lg:grid-cols-[1.35fr_0.72fr_1.02fr_1.08fr] lg:gap-12">
            <div>
              <Link
                href="/"
                aria-label={`${site.name} home`}
                className="inline-flex"
              >
                <Image
                  src={site.branding.logo}
                  alt={site.branding.logoAlt}
                  width={180}
                  height={72}
                  className="h-16 w-auto object-contain sm:h-[4.5rem]"
                />
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#5F6A68]">
                {site.seo.description}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D8C2A0]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#175C5A]">
                  Relax - Rejuvenate - Refresh
                </span>
              </div>

              {hasSocialLinks && (
                <div className="mt-7 flex items-center gap-2.5">
                  {site.social.instagram && (
                    <SocialButton
                      href={site.social.instagram}
                      label={`${site.name} on Instagram`}
                    >
                      <FiInstagram size={17} />
                    </SocialButton>
                  )}

                  {site.social.facebook && (
                    <SocialButton
                      href={site.social.facebook}
                      label={`${site.name} on Facebook`}
                    >
                      f
                    </SocialButton>
                  )}

                  {site.social.youtube && (
                    <SocialButton
                      href={site.social.youtube}
                      label={`${site.name} on YouTube`}
                    >
                      YT
                    </SocialButton>
                  )}
                </div>
              )}
            </div>

            <div>
              <FooterHeading label="Explore" />
              <nav aria-label="Footer navigation">
                <ul className="space-y-3.5">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <FooterTextLink href={link.href}>
                        {link.label}
                      </FooterTextLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <FooterHeading label="Popular Treatments" />
              <ul className="space-y-3.5">
                {popularServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-start gap-2.5 text-sm text-[#5F6A68] transition-colors duration-200 hover:text-[#175C5A]"
                    >
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D8C2A0] transition-all duration-200 group-hover:bg-[#C9826D] group-hover:ring-4 group-hover:ring-[#C9826D]/10" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="group mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#175C5A] transition-colors hover:text-[#AE6855]"
              >
                View all treatments
                <FiArrowUpRight
                  size={13}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div>
              <FooterHeading label="Visit Oceanic Spa" />
              <div className="space-y-5">
                <div className="group flex items-start gap-3">
                  <ContactIcon type="ocean">
                    <FiMapPin size={16} />
                  </ContactIcon>
                  <div>
                    <p className="text-xs font-bold text-[#24302F]">
                      Our Location
                    </p>
                    <p className="mt-1.5 text-xs leading-5 text-[#5F6A68]">
                      {site.address.street}
                      <br />
                      {site.address.area}
                      <br />
                      {site.address.city}, {site.address.state}{" "}
                      {site.address.postalCode}
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-3">
                  <ContactIcon type="blue">
                    <FiPhone size={15} />
                  </ContactIcon>
                  <div>
                    <p className="text-xs font-bold text-[#24302F]">
                      Call Us
                    </p>
                    <a
                      href={`tel:${site.contact.phone}`}
                      onClick={handleCallClick}
                      className="mt-1.5 block text-sm font-medium text-[#5F6A68] transition-colors hover:text-[#3478C5]"
                    >
                      {site.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="group flex items-center gap-3">
                  <ContactIcon type="whatsapp">
                    <FiWhatsapp size={16} />
                  </ContactIcon>
                  <div>
                    <p className="text-xs font-bold text-[#24302F]">
                      WhatsApp
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppClick}
                      className="mt-1.5 block text-sm font-medium text-[#5F6A68] transition-colors hover:text-[#128C4B]"
                    >
                      Quick enquiry
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-3">
                  <ContactIcon type="sand">
                    <FiClock size={15} />
                  </ContactIcon>
                  <div>
                    <p className="text-xs font-bold text-[#24302F]">
                      Open Daily
                    </p>
                    <p className="mt-1.5 text-xs leading-5 text-[#5F6A68]">
                      {site.hours[0]?.open} - {site.hours[0]?.close}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 lg:grid-cols-1">
                <Link
                  href="/contact"
                  onClick={handleBookingClick}
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#175C5A] px-3.5 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-[#0F4442]"
                >
                  Plan your visit
                  <FiArrowUpRight
                    size={14}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDirectionsClick}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D8C2A0]/60 bg-white px-3.5 py-2.5 text-xs font-bold text-[#175C5A] shadow-[0_6px_18px_rgba(36,48,47,0.05)] transition-all duration-200 hover:border-[#175C5A]/25 hover:bg-[#EEF7F5]"
                >
                  Get directions
                  <FiMapPin size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E5E0D7] py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] leading-5 text-[#89918F]">
              Best spa in Vashi and massage experience in{" "}
              <span className="font-semibold text-[#5F6A68]">
                Vashi, Navi Mumbai
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-[#89918F]">
              {localSeoLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-[#175C5A]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#E5E0D7] py-6">
          <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-[11px] leading-5 text-[#89918F]">
              &copy; {currentYear} {site.name}. All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-5 text-[11px] text-[#89918F] sm:justify-end">
              <Link
                href="/about"
                className="transition-colors hover:text-[#175C5A]"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition-colors hover:text-[#175C5A]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ label }: { label: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2.5">
        <span className="h-px w-7 bg-[#D8C2A0]" />
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#175C5A]">
          {label}
        </p>
      </div>
    </div>
  );
}

function FooterTextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm text-[#5F6A68] transition-colors duration-200 hover:text-[#175C5A]"
    >
      <span>{children}</span>
      <FiArrowUpRight
        size={12}
        className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
      />
    </Link>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E0D7] bg-white text-sm font-bold text-[#5F6A68] shadow-[0_3px_12px_rgba(36,48,47,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#175C5A]/25 hover:bg-[#EEF7F5] hover:text-[#175C5A]"
    >
      {children}
    </a>
  );
}

function ContactIcon({
  children,
  type = "ocean",
}: {
  children: React.ReactNode;
  type?: "ocean" | "blue" | "sand" | "whatsapp";
}) {
  const styles = {
    ocean: {
      wrapper: "border-[#175C5A]/10 bg-[#EEF7F5]",
      icon: "text-[#175C5A]",
    },
    blue: {
      wrapper: "border-[#3478C5]/10 bg-[#EEF5FC]",
      icon: "text-[#3478C5]",
    },
    sand: {
      wrapper: "border-[#D8C2A0]/35 bg-[#F6F0E7]",
      icon: "text-[#9D8257]",
    },
    whatsapp: {
      wrapper: "border-[#128C4B]/10 bg-[#EEF8F1]",
      icon: "text-[#128C4B]",
    },
  };

  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:-translate-y-0.5 ${styles[type].wrapper} ${styles[type].icon}`}
    >
      {children}
    </span>
  );
}
