import { site } from "@/data/site";

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
}

export function getServiceWhatsAppUrl(serviceName: string): string {
  return getWhatsAppUrl(
    `Hello Oceanic Spa Vashi, I am interested in ${serviceName}. I would like to know about price, availability and booking.`
  );
}
