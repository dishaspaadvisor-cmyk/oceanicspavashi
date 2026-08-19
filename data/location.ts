import { activeServices } from "@/data/service";
import { site } from "@/data/site";

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  city: string;
  description: string;
  longDescription?: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  services: string[];
  faqs: LocationFAQ[];
  active?: boolean;
  seo?: {
    title: string;
    description: string;
    h1: string;
  };
}

export const locations: Location[] = [
  {
    id: "vashi",
    slug: "spa-in-vashi",
    name: "Spa in Vashi, Navi Mumbai",
    city: "Vashi, Navi Mumbai",
    description:
      "Oceanic Spa Vashi offers relaxing massage and spa treatments from Satra Plaza on Palm Beach Road in Vashi, Navi Mumbai.",
    longDescription:
      "Visit Oceanic Spa Vashi for a calm wellness experience with full body massage, Thai massage, Swedish massage, Balinese massage, deep tissue massage, foot reflexology and selected spa treatments with scrub or Jacuzzi options.",
    image: "/gallery/gallery-1.jpg",
    imageAlt:
      "Oceanic Spa Vashi spa location in Navi Mumbai",
    keywords: [
      "spa in Vashi",
      "massage in Vashi",
      "spa in Navi Mumbai",
      "massage in Navi Mumbai",
      "Oceanic Spa Vashi",
    ],
    services: activeServices.map((service) => service.slug),
    faqs: [
      {
        question: "Where is Oceanic Spa Vashi located?",
        answer: site.address.full,
      },
      {
        question: "Can I book a massage in Vashi on WhatsApp?",
        answer:
          "Yes. You can contact Oceanic Spa Vashi on WhatsApp to check treatment availability and appointment timings.",
      },
      {
        question: "Which massage treatments are available in Vashi?",
        answer:
          "Oceanic Spa Vashi offers multiple massage and wellness treatments, including Swedish massage, Thai massage, Balinese massage, deep tissue massage and foot reflexology.",
      },
    ],
    active: true,
    seo: {
      title:
        "Spa in Vashi, Navi Mumbai | Oceanic Spa Vashi",
      description:
        "Visit Oceanic Spa Vashi for relaxing massage and spa treatments in Vashi, Navi Mumbai. Contact us to check availability and book an appointment.",
      h1: "Spa in Vashi, Navi Mumbai",
    },
  },
];

export function getLocationBySlug(
  slug: string
): Location | undefined {
  return locations.find(
    (location) =>
      location.slug === slug &&
      location.active !== false
  );
}
