import { site } from "@/data/site";

export interface Offer {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  discount: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  active?: boolean;
  validityLabel: string;
  keywords: string[];
  seo: {
    title: string;
    description: string;
    h1: string;
  };
}

export const offers: Offer[] = [
  {
    id: 1,
    slug: "membership-plan",
    title: "Membership Plan",
    subtitle: "Spa Special Offer",
    description:
      "Save on your wellness visits with the Oceanic Spa Vashi membership plan. Contact us to check current membership benefits and availability.",
    discount: "25% OFF",
    image:
      "/images/offercards/offer1.webp",
    imageAlt:
      "Oceanic Spa Vashi membership plan offer in Vashi Navi Mumbai",
    featured: true,
    active: true,
    validityLabel: "Limited period offer",
    keywords: [
      "spa membership offer Vashi",
      "spa offers in Vashi",
      "Oceanic Spa Vashi offers",
      "massage offers Vashi",
    ],
    seo: {
      title:
        "Membership Plan Offer in Vashi | Oceanic Spa Vashi",
      description:
        "Explore the Oceanic Spa Vashi membership plan offer. Contact us to check current spa membership benefits, pricing and availability in Vashi, Navi Mumbai.",
      h1: "Membership Plan Offer in Vashi",
    },
  },
  {
    id: 2,
    slug: "couple-massage",
    title: "Couple Massage",
    subtitle: "Spa Special Offer",
    description:
      "Enjoy a couple-focused spa experience at Oceanic Spa Vashi. Contact us to confirm current offer details and appointment slots.",
    discount: "20% OFF",
    image:
      "/images/offercards/offer2.webp",
    imageAlt:
      "Oceanic Spa Vashi couple massage offer in Vashi Navi Mumbai",
    active: true,
    validityLabel: "Limited period offer",
    keywords: [
      "couple massage offer Vashi",
      "couple spa offer Vashi",
      "spa offers Navi Mumbai",
      "massage offer Vashi",
    ],
    seo: {
      title:
        "Couple Massage Offer in Vashi | Oceanic Spa Vashi",
      description:
        "Explore the couple massage offer at Oceanic Spa Vashi. Contact us to check availability and current offer details in Vashi, Navi Mumbai.",
      h1: "Couple Massage Offer in Vashi",
    },
  },
  {
    id: 3,
    slug: "all-services",
    title: "All Services",
    subtitle: "Spa Special Offer",
    description:
      "Ask about current savings across selected massage and spa services at Oceanic Spa Vashi before booking your appointment.",
    discount: "20% OFF",
    image:
      "/images/offercards/offer3.webp",
    imageAlt:
      "Oceanic Spa Vashi all services massage offer in Vashi Navi Mumbai",
    active: true,
    validityLabel: "Limited period offer",
    keywords: [
      "massage offers Vashi",
      "spa discount Vashi",
      "spa offers in Navi Mumbai",
      "Oceanic Spa offers",
    ],
    seo: {
      title:
        "Massage and Spa Offers in Vashi | Oceanic Spa Vashi",
      description:
        "Explore current massage and spa offers at Oceanic Spa Vashi. Contact us to confirm eligible services, prices and booking availability.",
      h1: "Massage and Spa Offers in Vashi",
    },
  },
];

export const activeOffers = offers.filter(
  (offer) => offer.active !== false
);

export const featuredOffers = activeOffers.filter(
  (offer) => offer.featured
);

export function getOfferBySlug(
  slug: string
): Offer | undefined {
  return activeOffers.find(
    (offer) => offer.slug === slug
  );
}

export function getOfferWhatsAppUrl(offer: Offer): string {
  return `https://wa.me/${
    site.contact.whatsapp
  }?text=${encodeURIComponent(
    `Hello Oceanic Spa Vashi, I want to enquire about the ${offer.title} offer. Please share current price, terms and availability.`
  )}`;
}
