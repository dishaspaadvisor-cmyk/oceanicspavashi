import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* =========================================================
   TAILWIND CLASS HELPER
========================================================= */

/**
 * Merge Tailwind CSS classes safely.
 *
 * Usage:
 * cn(
 *   "px-4 py-2",
 *   isActive && "bg-primary",
 *   className
 * )
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* =========================================================
   SLUG HELPERS
========================================================= */

/**
 * Convert text into a URL-friendly slug.
 *
 * Example:
 * "Full Body Massage + Jacuzzi"
 * → "full-body-massage-jacuzzi"
 */

export function slugify(value: string): string {
  return value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/* =========================================================
   TEXT HELPERS
========================================================= */

/**
 * Capitalize the first letter of a string.
 */
export function capitalize(value: string): string {
  if (!value) return "";

  return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * Convert a string into title case.
 *
 * Example:
 * "full body massage"
 * → "Full Body Massage"
 */
export function toTitleCase(value: string): string {
  return value
    .toLowerCase()
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

/**
 * Create a short text preview.
 */
export function truncate(
  value: string,
  maxLength: number
): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value
    .slice(0, maxLength)
    .trimEnd()}...`;
}

/**
 * Remove extra whitespace from text.
 */
export function cleanText(value: string): string {
  return value
    .replace(/\s+/g, " ")
    .trim();
}

/* =========================================================
   NUMBER / PRICE HELPERS
========================================================= */

/**
 * Format an Indian currency amount.
 *
 * Example:
 * 1999 → ₹1,999
 */
export function formatPrice(
  amount: number
): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format a number using Indian numbering.
 *
 * Example:
 * 15000 → 15,000
 */
export function formatNumber(
  value: number
): string {
  return new Intl.NumberFormat("en-IN").format(value);
}

/* =========================================================
   URL HELPERS
========================================================= */

/**
 * Normalize a URL path.
 *
 * Example:
 * "/services/"
 * → "/services"
 */
export function normalizePath(
  path: string
): string {
  if (!path) return "/";

  const normalized = `/${path}`.replace(
    /\/+/g,
    "/"
  );

  if (normalized === "/") {
    return "/";
  }

  return normalized.replace(/\/$/, "");
}

/**
 * Check whether a URL is external.
 */
export function isExternalUrl(
  url: string
): boolean {
  return /^https?:\/\//i.test(url);
}

/**
 * Safely join URL path segments.
 */
export function joinUrl(
  ...parts: string[]
): string {
  return parts
    .filter(Boolean)
    .map((part) =>
      part.replace(/^\/+|\/+$/g, "")
    )
    .join("/")
    .replace(/^/, "/");
}

/* =========================================================
   ARRAY HELPERS
========================================================= */

/**
 * Remove duplicate values from an array.
 */
export function unique<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}

/**
 * Split an array into smaller chunks.
 */
export function chunk<T>(
  items: T[],
  size: number
): T[][] {
  if (size <= 0) {
    return [];
  }

  const result: T[][] = [];

  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }

  return result;
}

/* =========================================================
   VALIDATION HELPERS
========================================================= */

/**
 * Check whether a value exists.
 */
export function isDefined<T>(
  value: T | null | undefined
): value is T {
  return value !== null && value !== undefined;
}

/**
 * Check whether a string contains usable content.
 */
export function isNotEmpty(
  value?: string | null
): value is string {
  return Boolean(value?.trim());
}

/* =========================================================
   DATE HELPERS
========================================================= */

/**
 * Format a date for display.
 *
 * Example:
 * 2026-08-17 → August 17, 2026
 */
export function formatDate(
  date: string | Date
): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

/* =========================================================
   PHONE HELPERS
========================================================= */

/**
 * Create a tel: URL.
 */
export function getTelUrl(
  phone: string
): string {
  return `tel:${phone.replace(
    /[^\d+]/g,
    ""
  )}`;
}

/**
 * Create a WhatsApp URL.
 */
export function getWhatsAppUrl(
  phone: string,
  message?: string
): string {
  const cleanPhone = phone.replace(
    /\D/g,
    ""
  );

  const baseUrl = `https://wa.me/${cleanPhone}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(
    message
  )}`;
}

/* =========================================================
   SCROLL / UI HELPERS
========================================================= */

/**
 * Create an ID that can be used for section anchors.
 */
export function sectionId(
  value: string
): string {
  return slugify(value);
}

/* =========================================================
   OBJECT HELPERS
========================================================= */

/**
 * Remove undefined values from an object.
 *
 * Useful for metadata and structured data.
 */
export function removeUndefined<
  T extends Record<string, unknown>
>(object: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(object).filter(
      ([, value]) => value !== undefined
    )
  ) as Partial<T>;
}