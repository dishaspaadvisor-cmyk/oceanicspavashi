/* =========================================================
   SERVICE TYPES
========================================================= */

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon?:
  | "activity"
  | "heart"
  | "moon"
  | "refresh"
  | "smile"
  | "star"
  | "zap";
}

export interface Service {
  id: string;
  slug: string;
  name: string;

  category:
  | "Massage"
  | "Couple Treatment"
  | "Special Treatment";

  image: string;
  imageAlt: string;

  /**
   * Additional gallery images for the service.
   * Optional because most services currently have
   * one primary image.
   */
  images?: string[];

  shortDescription: string;
  description: string;

  duration?: string;
  price?: number;
  priceLabel?: string;

  benefits: ServiceBenefit[];

  highlights: string[];

  keywords: string[];

  faqs: ServiceFAQ[];

  /**
   * Slugs of related services.
   */
  relatedServices: string[];

  seo: {
    title: string;
    description: string;
    h1: string;
  };

  featured: boolean;
  popular?: boolean;
  active: boolean;
}

/* =========================================================
   SERVICES
========================================================= */

export const services: Service[] = [
  /* =======================================================
     01. DEEP TISSUE MASSAGE
  ======================================================== */

  {
    id: "deep-tissue-massage",
    slug: "deep-tissue-massage-in-oceanicspa-vashi",
    name: "Deep Tissue Massage",
    category: "Massage",

    image: "/services/deep-tissue-massage.png",
    imageAlt:
      "Deep Tissue Massage at Oceanic Spa Vashi",

    shortDescription:
      "A focused massage experience designed to help you relax and unwind.",

    description:
      "Experience Deep Tissue Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Enjoy a comfortable and relaxing massage experience designed around your wellness preferences.",

    duration: "60 Minutes",

    benefits: [
      {
        title: "Deep Relaxation",
        description:
          "Enjoy a focused massage experience designed to help you slow down and relax.",
        icon: "moon",
      },
      {
        title: "Muscle Comfort",
        description:
          "A treatment focused on areas where you may experience everyday muscular tension.",
        icon: "activity",
      },
      {
        title: "Refresh & Recharge",
        description:
          "Take time away from your routine and enjoy a restorative wellness experience.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Comfortable spa environment",
      "Relaxation-focused experience",
      "Professional treatment",
      "Convenient Vashi location",
    ],

    keywords: [
      "deep tissue massage Vashi",
      "deep tissue massage in Vashi",
      "deep tissue massage Navi Mumbai",
      "deep tissue massage near Vashi",
      "spa in Vashi",
      "massage in Vashi",
    ],

    faqs: [
      {
        question:
          "What is Deep Tissue Massage?",
        answer:
          "Deep Tissue Massage is a focused massage experience that uses deeper pressure according to individual comfort and treatment preferences.",
      },
      {
        question:
          "Where can I get Deep Tissue Massage in Vashi?",
        answer:
          "You can experience Deep Tissue Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I book Deep Tissue Massage?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp to check availability and book an appointment.",
      },
    ],

    relatedServices: [
      "swedish-massage",
      "balinese-massage",
      "full-body-oil-massage",
    ],

    seo: {
      title:
        "Deep Tissue Massage in Vashi, Navi Mumbai | Oceanic Spa",
      description:
        "Experience Deep Tissue Massage at Oceanic Spa Vashi, Navi Mumbai. Explore treatment details and contact us to check availability and book an appointment.",
      h1:
        "Deep Tissue Massage in Vashi, Navi Mumbai",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     02. FOOT REFLEXOLOGY
  ======================================================== */

  {
    id: "foot-reflexology",
    slug: "foot-reflexology-in-oceanicspa-vashi",
    name: "Foot Reflexology",
    category: "Massage",

    image: "/services/foot-reflexology.png",
    imageAlt:
      "Foot Reflexology at Oceanic Spa Vashi",

    shortDescription:
      "A soothing foot-focused treatment for relaxation and comfort.",

    description:
      "Enjoy Foot Reflexology at Oceanic Spa Vashi, a relaxing treatment focused on the feet and designed to provide a comfortable wellness experience.",

    duration: "60 Minutes",

    benefits: [
      {
        title: "Foot Relaxation",
        description:
          "A dedicated foot-focused experience designed to help you relax.",
        icon: "heart",
      },
      {
        title: "Comfort",
        description:
          "Enjoy a calm treatment experience in a comfortable spa environment.",
        icon: "smile",
      },
      {
        title: "Refresh",
        description:
          "Take a break from your daily routine and enjoy a restorative treatment.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Foot-focused treatment",
      "Relaxing environment",
      "Comfortable experience",
      "Vashi location",
    ],

    keywords: [
      "foot reflexology Vashi",
      "foot reflexology in Vashi",
      "foot massage Vashi",
      "reflexology Navi Mumbai",
      "spa in Vashi",
    ],

    faqs: [
      {
        question:
          "What is Foot Reflexology?",
        answer:
          "Foot Reflexology is a foot-focused wellness treatment designed around relaxation and comfort.",
      },
      {
        question:
          "Where can I get Foot Reflexology in Vashi?",
        answer:
          "Foot Reflexology is available at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I book Foot Reflexology?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp to check treatment availability.",
      },
    ],

    relatedServices: [
      "head-massage",
      "back-massage",
      "swedish-massage",
    ],

    seo: {
      title:
        "Foot Reflexology in Vashi, Navi Mumbai | Oceanic Spa",
      description:
        "Experience Foot Reflexology at Oceanic Spa Vashi in Navi Mumbai. Discover a relaxing foot-focused treatment and contact us for appointment availability.",
      h1:
        "Foot Reflexology in Vashi, Navi Mumbai",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     03. FOUR HAND COUPLE SPECIAL TREATMENT
  ======================================================== */

  {
    id: "four-hand-couple-special-treatment",
    slug: "four-hand-couple-special-treatment-in-oceanicspa-vashi",
    name: "Four Hand Couple Special Treatment",
    category: "Couple Treatment",

    image:
      "/services/four-hand-couple-special-treatment.png",
    imageAlt:
      "Four Hand Couple Special Treatment at Oceanic Spa Vashi",

    shortDescription:
      "A special couple-focused treatment designed for a shared relaxation experience.",

    description:
      "Enjoy a Four Hand Couple Special Treatment at Oceanic Spa Vashi in Vashi, Navi Mumbai. A couple-focused spa experience designed around relaxation and comfort.",

    duration: "60 Minutes",

    benefits: [
      {
        title: "Shared Experience",
        description:
          "Enjoy a relaxing treatment experience designed for couples.",
        icon: "heart",
      },
      {
        title: "Relax Together",
        description:
          "Spend quality time together in a comfortable spa environment.",
        icon: "smile",
      },
      {
        title: "Premium Experience",
        description:
          "A special treatment designed to make your wellness visit memorable.",
        icon: "star",
      },
    ],

    highlights: [
      "Couple-focused treatment",
      "Relaxing environment",
      "Shared wellness experience",
      "Vashi location",
    ],

    keywords: [
      "couple spa Vashi",
      "couple massage Vashi",
      "four hand couple massage Vashi",
      "couple treatment Vashi",
      "couple spa Navi Mumbai",
    ],

    faqs: [
      {
        question:
          "What is the Four Hand Couple Special Treatment?",
        answer:
          "It is a couple-focused spa treatment designed around a shared and relaxing wellness experience.",
      },
      {
        question:
          "Is this treatment suitable for couples?",
        answer:
          "Yes. The treatment is specifically presented as a couple-focused experience.",
      },
      {
        question:
          "How can I check availability?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp before visiting to confirm availability.",
      },
    ],

    relatedServices: [
      "four-hand-couple-treatment-jacuzzi",
      "four-hand-massage",
      "four-hand-massage-jacuzzi",
    ],

    seo: {
      title:
        "Four Hand Couple Special Treatment in Vashi | Oceanic Spa",
      description:
        "Experience Four Hand Couple Special Treatment at Oceanic Spa Vashi. Explore a relaxing couple-focused spa experience in Vashi, Navi Mumbai.",
      h1:
        "Four Hand Couple Special Treatment in Vashi",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     04. FOUR HAND COUPLE + JACUZZI
  ======================================================== */

  {
    id: "four-hand-couple-treatment-jacuzzi",
    slug: "four-hand-couple-treatment-jacuzzi-in-oceanicspa-vashi",
    name: "Four Hand Couple Treatment + Jacuzzi",
    category: "Couple Treatment",

    image:
      "/services/four-hand-couple-treatment-jacuzzi.png",
    imageAlt:
      "Four Hand Couple Treatment with Jacuzzi at Oceanic Spa Vashi",

    shortDescription:
      "A couple treatment combining a four-hand massage experience with Jacuzzi time.",

    description:
      "Enjoy Four Hand Couple Treatment with Jacuzzi at Oceanic Spa Vashi in Vashi, Navi Mumbai, for a relaxing couple-focused wellness experience.",

    duration: "90 Minutes",

    benefits: [
      {
        title: "Couple Relaxation",
        description:
          "Enjoy a shared treatment experience designed for couples.",
        icon: "heart",
      },
      {
        title: "Four Hand Experience",
        description:
          "A coordinated treatment experience designed around relaxation.",
        icon: "activity",
      },
      {
        title: "Jacuzzi Experience",
        description:
          "Enjoy additional relaxation with the Jacuzzi component of the treatment.",
        icon: "moon",
      },
    ],

    highlights: [
      "Couple treatment",
      "Four hand experience",
      "Jacuzzi included",
      "Relaxing spa environment",
    ],

    keywords: [
      "couple massage with jacuzzi Vashi",
      "couple spa with jacuzzi Vashi",
      "four hand couple treatment Vashi",
      "couple jacuzzi spa Vashi",
      "couple spa Navi Mumbai",
    ],

    faqs: [
      {
        question:
          "Does this couple treatment include Jacuzzi?",
        answer:
          "Yes. The treatment name includes a Jacuzzi experience as part of the treatment.",
      },
      {
        question:
          "Is this a couple-focused treatment?",
        answer:
          "Yes. It is designed as a couple-focused treatment experience.",
      },
      {
        question:
          "How can I check availability?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp before visiting.",
      },
    ],

    relatedServices: [
      "four-hand-couple-special-treatment",
      "four-hand-massage-jacuzzi",
      "four-hand-massage",
    ],

    seo: {
      title:
        "Four Hand Couple Treatment + Jacuzzi in Vashi | Oceanic Spa",
      description:
        "Experience Four Hand Couple Treatment with Jacuzzi at Oceanic Spa Vashi in Vashi, Navi Mumbai. Contact us for availability and booking.",
      h1:
        "Four Hand Couple Treatment + Jacuzzi in Vashi",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     05. FOUR HAND MASSAGE
  ======================================================== */

  {
    id: "four-hand-massage",
    slug: "four-hand-massage-in-oceanicspa-vashi",
    name: "Four Hand Massage",
    category: "Massage",

    image: "/services/four-hand-massage.png",
    imageAlt:
      "Four Hand Massage at Oceanic Spa Vashi",

    shortDescription:
      "A coordinated four-hand massage experience designed for deep relaxation.",

    description:
      "Experience Four Hand Massage at Oceanic Spa Vashi, Vashi, Navi Mumbai. Enjoy a coordinated massage experience designed around relaxation and comfort.",

    duration: "60 Minutes",

    benefits: [
      {
        title: "Four Hand Experience",
        description:
          "A coordinated massage experience designed to create a relaxing treatment.",
        icon: "activity",
      },
      {
        title: "Deep Relaxation",
        description:
          "Enjoy time away from your routine in a comfortable spa setting.",
        icon: "moon",
      },
      {
        title: "Rejuvenating Experience",
        description:
          "A wellness-focused treatment designed to help you unwind.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Four hand massage",
      "Relaxing environment",
      "Comfort-focused treatment",
      "Vashi location",
    ],

    keywords: [
      "four hand massage Vashi",
      "four hands massage Vashi",
      "four hand massage Navi Mumbai",
      "spa massage Vashi",
      "massage in Vashi",
    ],

    faqs: [
      {
        question:
          "What is Four Hand Massage?",
        answer:
          "Four Hand Massage is a coordinated massage experience designed around relaxation and comfort.",
      },
      {
        question:
          "Where can I get Four Hand Massage in Vashi?",
        answer:
          "You can experience Four Hand Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I book this treatment?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp to check availability.",
      },
    ],

    relatedServices: [
      "four-hand-massage-scrub",
      "four-hand-massage-jacuzzi",
      "four-hand-couple-special-treatment",
    ],

    seo: {
      title:
        "Four Hand Massage in Vashi, Navi Mumbai | Oceanic Spa",
      description:
        "Experience Four Hand Massage at Oceanic Spa Vashi in Navi Mumbai. Discover treatment details and contact us for appointment availability.",
      h1:
        "Four Hand Massage in Vashi, Navi Mumbai",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     06. FOUR HAND MASSAGE + SCRUB
  ======================================================== */

  {
    id: "four-hand-massage-scrub",
    slug: "four-hand-massage-scrub-in-oceanicspa-vashi",
    name: "Four Hand Massage + Scrub",
    category: "Massage",

    image:
      "/services/four-hand-massage-scrub.png",
    imageAlt:
      "Four Hand Massage with Scrub at Oceanic Spa Vashi",

    shortDescription:
      "A four-hand massage experience combined with a body scrub treatment.",

    description:
      "Experience Four Hand Massage with Scrub at Oceanic Spa Vashi in Vashi, Navi Mumbai. A combined wellness treatment designed around relaxation and body care.",

    duration: "90 Minutes",

    benefits: [
      {
        title: "Relaxing Massage",
        description:
          "Enjoy a coordinated four-hand massage experience.",
        icon: "heart",
      },
      {
        title: "Scrub Experience",
        description:
          "Includes a body scrub component as part of the treatment.",
        icon: "smile",
      },
      {
        title: "Complete Wellness",
        description:
          "Combine massage relaxation with a body-care experience.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Four hand massage",
      "Body scrub",
      "Relaxing experience",
      "Vashi location",
    ],

    keywords: [
      "four hand massage scrub Vashi",
      "four hand scrub massage Vashi",
      "massage scrub Vashi",
      "spa treatment Vashi",
    ],

    faqs: [
      {
        question:
          "Does Four Hand Massage + Scrub include a scrub?",
        answer:
          "Yes. A scrub component is included in the treatment.",
      },
      {
        question:
          "Where is this treatment available?",
        answer:
          "The treatment is available at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I check availability?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp.",
      },
    ],

    relatedServices: [
      "four-hand-massage",
      "four-hand-massage-jacuzzi",
      "full-body-massage-scrub",
    ],

    seo: {
      title:
        "Four Hand Massage + Scrub in Vashi | Oceanic Spa",
      description:
        "Experience Four Hand Massage with Scrub at Oceanic Spa Vashi in Vashi, Navi Mumbai. Contact us for treatment availability and booking.",
      h1:
        "Four Hand Massage + Scrub in Vashi",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     07. FOUR HAND MASSAGE + JACUZZI
  ======================================================== */

  {
    id: "four-hand-massage-jacuzzi",
    slug: "four-hand-massage-jacuzzi-in-oceanicspa-vashi",
    name: "Four Hand Massage + Jacuzzi",
    category: "Massage",

    image:
      "/services/four-hand-massage-jacuzzi.png",
    imageAlt:
      "Four Hand Massage with Jacuzzi at Oceanic Spa Vashi",

    shortDescription:
      "A four-hand massage experience with an added Jacuzzi experience.",

    description:
      "Enjoy Four Hand Massage with Jacuzzi at Oceanic Spa Vashi, Vashi, Navi Mumbai. This treatment combines a coordinated massage experience with Jacuzzi relaxation.",

    duration: "90 Minutes",

    benefits: [
      {
        title: "Four Hand Relaxation",
        description:
          "Enjoy a coordinated massage experience designed for relaxation.",
        icon: "activity",
      },
      {
        title: "Jacuzzi Experience",
        description:
          "Relax further with the Jacuzzi component of the treatment.",
        icon: "moon",
      },
      {
        title: "Rejuvenating Time",
        description:
          "Take time away from your routine and enjoy a complete wellness experience.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Four hand massage",
      "Jacuzzi included",
      "Relaxation-focused",
      "Vashi location",
    ],

    keywords: [
      "four hand massage jacuzzi Vashi",
      "massage with jacuzzi Vashi",
      "four hands jacuzzi Vashi",
      "spa with jacuzzi Vashi",
    ],

    faqs: [
      {
        question:
          "Does this treatment include a Jacuzzi?",
        answer:
          "Yes. The treatment includes a Jacuzzi experience.",
      },
      {
        question:
          "Is this a four-hand massage?",
        answer:
          "Yes. The treatment is listed as Four Hand Massage + Jacuzzi.",
      },
      {
        question:
          "How can I book?",
        answer:
          "Contact Oceanic Spa Vashi to check availability and appointment timings.",
      },
    ],

    relatedServices: [
      "four-hand-massage",
      "four-hand-massage-scrub-jacuzzi",
      "four-hand-couple-treatment-jacuzzi",
    ],

    seo: {
      title:
        "Four Hand Massage + Jacuzzi in Vashi | Oceanic Spa",
      description:
        "Experience Four Hand Massage with Jacuzzi at Oceanic Spa Vashi. Discover this relaxing treatment in Vashi, Navi Mumbai.",
      h1:
        "Four Hand Massage + Jacuzzi in Vashi",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     08. FOUR HAND MASSAGE + SCRUB + JACUZZI
  ======================================================== */

  {
    id: "four-hand-massage-scrub-jacuzzi",
    slug: "four-hand-massage-scrub-jacuzzi-in-oceanicspa-vashi",
    name: "Four Hand Massage + Scrub + Jacuzzi",
    category: "Massage",

    image:
      "/services/four-hand-massage-scrub-jacuzzi.png",
    imageAlt:
      "Four Hand Massage with Scrub and Jacuzzi at Oceanic Spa Vashi",

    shortDescription:
      "A complete four-hand treatment combining massage, scrub and Jacuzzi.",

    description:
      "Enjoy Four Hand Massage with Scrub and Jacuzzi at Oceanic Spa Vashi in Vashi, Navi Mumbai. A comprehensive spa experience combining multiple treatment elements.",

    duration: "120 Minutes",

    benefits: [
      {
        title: "Four Hand Massage",
        description:
          "Enjoy a coordinated massage experience focused on relaxation.",
        icon: "activity",
      },
      {
        title: "Body Scrub",
        description:
          "Includes a scrub component as part of the treatment.",
        icon: "smile",
      },
      {
        title: "Jacuzzi",
        description:
          "Complete the experience with Jacuzzi relaxation.",
        icon: "moon",
      },
    ],

    highlights: [
      "Four hand massage",
      "Body scrub",
      "Jacuzzi included",
      "Complete spa experience",
    ],

    keywords: [
      "four hand massage scrub jacuzzi Vashi",
      "four hand spa treatment Vashi",
      "massage scrub jacuzzi Vashi",
      "spa jacuzzi Vashi",
    ],

    faqs: [
      {
        question:
          "What does this treatment include?",
        answer:
          "The treatment combines Four Hand Massage, Scrub and Jacuzzi.",
      },
      {
        question:
          "Where is this treatment available?",
        answer:
          "It is available at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I check availability?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp before visiting.",
      },
    ],

    relatedServices: [
      "four-hand-massage",
      "four-hand-massage-scrub",
      "four-hand-massage-jacuzzi",
    ],

    seo: {
      title:
        "Four Hand Massage + Scrub + Jacuzzi in Vashi | Oceanic Spa",
      description:
        "Experience Four Hand Massage with Scrub and Jacuzzi at Oceanic Spa Vashi in Vashi, Navi Mumbai. Contact us for availability and booking.",
      h1:
        "Four Hand Massage + Scrub + Jacuzzi in Vashi",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     09. FRENCH AROMA MASSAGE
  ======================================================== */

  {
    id: "french-aroma-massage",
    slug: "french-aroma-massage-in-oceanicspa-vashi",
    name: "French Aroma Massage",
    category: "Massage",

    image:
      "/services/french-aroma-massage.png",
    imageAlt:
      "French Aroma Massage at Oceanic Spa Vashi",

    shortDescription:
      "A soothing aroma-focused massage experience designed for relaxation.",

    description:
      "Experience French Aroma Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Enjoy a calming massage experience designed around relaxation and comfort.",

    duration: "60 Minutes",

    benefits: [
      {
        title: "Aromatic Experience",
        description:
          "Enjoy a relaxing massage experience with an aroma-focused atmosphere.",
        icon: "smile",
      },
      {
        title: "Mindful Relaxation",
        description:
          "A calm environment designed to help you slow down and unwind.",
        icon: "moon",
      },
      {
        title: "Rejuvenation",
        description:
          "Take time for yourself and enjoy a restorative spa experience.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Aroma-focused treatment",
      "Relaxing environment",
      "Comfortable experience",
      "Vashi location",
    ],

    keywords: [
      "French aroma massage Vashi",
      "aroma massage Vashi",
      "aroma massage Navi Mumbai",
      "spa massage Vashi",
    ],

    faqs: [
      {
        question:
          "What is French Aroma Massage?",
        answer:
          "It is an aroma-focused massage experience designed around relaxation and comfort.",
      },
      {
        question:
          "Where can I get Aroma Massage in Vashi?",
        answer:
          "French Aroma Massage is available at Oceanic Spa Vashi.",
      },
      {
        question:
          "How can I book this treatment?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp to check availability.",
      },
    ],

    relatedServices: [
      "swedish-massage",
      "balinese-massage",
      "full-body-oil-massage",
    ],

    seo: {
      title:
        "French Aroma Massage in Vashi | Oceanic Spa",
      description:
        "Experience French Aroma Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Contact us for treatment details and appointment availability.",
      h1:
        "French Aroma Massage in Vashi, Navi Mumbai",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     10. FULL BODY DRY MASSAGE
  ======================================================== */

  {
    id: "full-body-dry-massage",
    slug: "full-body-dry-massage-in-oceanicspa-vashi",
    name: "Full Body Dry Massage",
    category: "Massage",

    image:
      "/services/full-body-dry-massage.png",
    imageAlt:
      "Full Body Dry Massage at Oceanic Spa Vashi",

    shortDescription:
      "A full-body massage experience without oil, focused on relaxation and comfort.",

    description:
      "Enjoy Full Body Dry Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. A full-body treatment designed around relaxation and a comfortable spa experience.",

    duration: "60 Minutes",

    benefits: [
      {
        title: "Full Body Relaxation",
        description:
          "Enjoy a treatment covering the body with a relaxation-focused approach.",
        icon: "heart",
      },
      {
        title: "Oil-Free Experience",
        description:
          "A dry massage option for guests who prefer a treatment without massage oil.",
        icon: "smile",
      },
      {
        title: "Refresh & Recharge",
        description:
          "Take a break from your routine in a peaceful spa environment.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Full-body treatment",
      "Dry massage",
      "Relaxation-focused",
      "Vashi location",
    ],

    keywords: [
      "full body dry massage Vashi",
      "dry massage Vashi",
      "full body massage Vashi",
      "body massage Navi Mumbai",
    ],

    faqs: [
      {
        question:
          "What is Full Body Dry Massage?",
        answer:
          "It is a full-body massage experience performed without massage oil.",
      },
      {
        question:
          "Is Full Body Dry Massage available in Vashi?",
        answer:
          "Yes. It is available at Oceanic Spa Vashi.",
      },
      {
        question:
          "How can I book?",
        answer:
          "Contact Oceanic Spa Vashi to check availability and appointment timings.",
      },
    ],

    relatedServices: [
      "full-body-oil-massage",
      "swedish-massage",
      "balinese-massage",
    ],

    seo: {
      title:
        "Full Body Dry Massage in Vashi | Oceanic Spa",
      description:
        "Experience Full Body Dry Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Explore treatment details and contact us for booking.",
      h1:
        "Full Body Dry Massage in Vashi, Navi Mumbai",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     11. FULL BODY MASSAGE + SCRUB
  ======================================================== */

  {
    id: "full-body-massage-scrub",
    slug: "full-body-massage-scrub-in-oceanicspa-vashi",
    name: "Full Body Massage + Scrub",
    category: "Massage",

    image:
      "/services/full-body-massage-scrub.png",
    imageAlt:
      "Full Body Massage with Scrub at Oceanic Spa Vashi",

    shortDescription:
      "A full-body massage combined with a body scrub experience.",

    description:
      "Enjoy Full Body Massage with Scrub at Oceanic Spa Vashi in Vashi, Navi Mumbai. This treatment combines a relaxing massage with a body scrub experience.",

    duration: "90 Minutes",

    benefits: [
      {
        title: "Full Body Relaxation",
        description:
          "Enjoy a full-body massage designed around relaxation and comfort.",
        icon: "heart",
      },
      {
        title: "Body Scrub",
        description:
          "Includes a body scrub component as part of the treatment.",
        icon: "smile",
      },
      {
        title: "Complete Experience",
        description:
          "Combine massage and body care during one spa visit.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Full-body massage",
      "Body scrub",
      "Relaxing environment",
      "Vashi location",
    ],

    keywords: [
      "full body massage scrub Vashi",
      "body scrub massage Vashi",
      "full body spa Vashi",
      "spa treatment Vashi",
    ],

    faqs: [
      {
        question:
          "Does Full Body Massage + Scrub include a scrub?",
        answer:
          "Yes. A body scrub is included as part of this treatment.",
      },
      {
        question:
          "Where is the treatment available?",
        answer:
          "It is available at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I check availability?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp.",
      },
    ],

    relatedServices: [
      "full-body-massage-scrub-jacuzzi",
      "full-body-oil-massage",
      "full-body-dry-massage",
    ],

    seo: {
      title:
        "Full Body Massage + Scrub in Vashi | Oceanic Spa",
      description:
        "Experience Full Body Massage with Scrub at Oceanic Spa Vashi in Vashi, Navi Mumbai. Contact us for treatment availability and booking.",
      h1:
        "Full Body Massage + Scrub in Vashi",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     12. FULL BODY MASSAGE + SCRUB + JACUZZI
  ======================================================== */

  {
    id: "full-body-massage-scrub-jacuzzi",
    slug: "full-body-massage-scrub-jacuzzi-in-oceanicspa-vashi",
    name: "Full Body Massage + Scrub + Jacuzzi",
    category: "Massage",

    image:
      "/services/full-body-massage-scrub-jacuzzi.png",
    imageAlt:
      "Full Body Massage with Scrub and Jacuzzi at Oceanic Spa Vashi",

    shortDescription:
      "A complete full-body treatment combining massage, scrub and Jacuzzi.",

    description:
      "Enjoy Full Body Massage with Scrub and Jacuzzi at Oceanic Spa Vashi in Vashi, Navi Mumbai. A combined spa experience designed around relaxation and comfort.",

    duration: "120 Minutes",

    benefits: [
      {
        title: "Full Body Massage",
        description:
          "Enjoy a full-body massage experience designed around relaxation.",
        icon: "heart",
      },
      {
        title: "Body Scrub",
        description:
          "Includes a body scrub component within the treatment.",
        icon: "smile",
      },
      {
        title: "Jacuzzi Relaxation",
        description:
          "Enjoy additional relaxation with the Jacuzzi experience.",
        icon: "moon",
      },
    ],

    highlights: [
      "Full-body massage",
      "Body scrub",
      "Jacuzzi included",
      "Complete spa experience",
    ],

    keywords: [
      "full body massage scrub jacuzzi Vashi",
      "massage scrub jacuzzi Vashi",
      "full body spa jacuzzi Vashi",
      "spa treatment Vashi",
    ],

    faqs: [
      {
        question:
          "What does the treatment include?",
        answer:
          "The treatment combines Full Body Massage, Scrub and Jacuzzi.",
      },
      {
        question:
          "Where can I experience this treatment?",
        answer:
          "It is available at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I check availability?",
        answer:
          "Contact Oceanic Spa Vashi before visiting to confirm availability.",
      },
    ],

    relatedServices: [
      "full-body-massage-scrub",
      "full-body-oil-massage-jacuzzi",
      "full-body-thai-massage-scrub-jacuzzi",
    ],

    seo: {
      title:
        "Full Body Massage + Scrub + Jacuzzi in Vashi | Oceanic Spa",
      description:
        "Experience Full Body Massage with Scrub and Jacuzzi at Oceanic Spa Vashi in Vashi, Navi Mumbai. Contact us for availability and booking.",
      h1:
        "Full Body Massage + Scrub + Jacuzzi in Vashi",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     13. FULL BODY OIL MASSAGE + JACUZZI
  ======================================================== */

  {
    id: "full-body-oil-massage-jacuzzi",
    slug: "full-body-oil-massage-jacuzzi-in-oceanicspa-vashi",
    name: "Full Body Oil Massage + Jacuzzi",
    category: "Massage",

    image:
      "/services/full-body-oil-massage-jacuzzi.png",
    imageAlt:
      "Full Body Oil Massage with Jacuzzi at Oceanic Spa Vashi",

    shortDescription:
      "A full-body oil massage combined with a Jacuzzi relaxation experience.",

    description:
      "Experience Full Body Oil Massage with Jacuzzi at Oceanic Spa Vashi in Vashi, Navi Mumbai. Enjoy a relaxing combination of massage and Jacuzzi time.",

    duration: "90 Minutes",

    benefits: [
      {
        title: "Oil Massage",
        description:
          "Enjoy a relaxing full-body oil massage experience.",
        icon: "heart",
      },
      {
        title: "Jacuzzi Experience",
        description:
          "Add Jacuzzi relaxation to your wellness experience.",
        icon: "moon",
      },
      {
        title: "Rejuvenation",
        description:
          "Take time away from your routine and enjoy a restorative spa visit.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Full-body oil massage",
      "Jacuzzi included",
      "Relaxation-focused",
      "Vashi location",
    ],

    keywords: [
      "full body oil massage jacuzzi Vashi",
      "oil massage with jacuzzi Vashi",
      "full body spa jacuzzi Vashi",
      "oil massage Vashi",
    ],

    faqs: [
      {
        question:
          "Does this treatment include Jacuzzi?",
        answer:
          "Yes. The treatment includes a Jacuzzi experience.",
      },
      {
        question:
          "What type of massage is included?",
        answer:
          "The treatment is listed as Full Body Oil Massage + Jacuzzi.",
      },
      {
        question:
          "How can I book?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp to check availability.",
      },
    ],

    relatedServices: [
      "full-body-oil-massage",
      "full-body-massage-scrub-jacuzzi",
      "full-body-thai-massage-jacuzzi",
    ],

    seo: {
      title:
        "Full Body Oil Massage + Jacuzzi in Vashi | Oceanic Spa",
      description:
        "Experience Full Body Oil Massage with Jacuzzi at Oceanic Spa Vashi in Vashi, Navi Mumbai. Contact us for treatment availability.",
      h1:
        "Full Body Oil Massage + Jacuzzi in Vashi",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     14. FULL BODY OIL MASSAGE
  ======================================================== */

  {
    id: "full-body-oil-massage",
    slug: "full-body-oil-massage-in-oceanicspa-vashi",
    name: "Full Body Oil Massage",
    category: "Massage",

    image:
      "/services/full-body-oil-massage.png",
    imageAlt:
      "Full Body Oil Massage at Oceanic Spa Vashi",

    shortDescription:
      "A relaxing full-body oil massage designed around comfort and relaxation.",

    description:
      "Enjoy Full Body Oil Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. A relaxing full-body treatment designed around comfort and a peaceful spa experience.",

    duration: "60 Minutes",

    benefits: [
      {
        title: "Full Body Relaxation",
        description:
          "Enjoy a full-body massage experience designed to help you unwind.",
        icon: "heart",
      },
      {
        title: "Oil Massage",
        description:
          "A full-body oil massage for guests who prefer an oil-based treatment.",
        icon: "smile",
      },
      {
        title: "Refresh & Recharge",
        description:
          "Take a break from your routine and enjoy a calming wellness experience.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Full-body oil massage",
      "Relaxing environment",
      "Comfort-focused treatment",
      "Vashi location",
    ],

    keywords: [
      "full body oil massage Vashi",
      "oil massage Vashi",
      "full body massage Vashi",
      "oil massage Navi Mumbai",
    ],

    faqs: [
      {
        question:
          "What is Full Body Oil Massage?",
        answer:
          "It is a full-body massage experience using massage oil and designed around relaxation and comfort.",
      },
      {
        question:
          "Where can I get Full Body Oil Massage?",
        answer:
          "You can experience it at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I check availability?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp before visiting.",
      },
    ],

    relatedServices: [
      "full-body-oil-massage-jacuzzi",
      "full-body-dry-massage",
      "swedish-massage",
    ],

    seo: {
      title:
        "Full Body Oil Massage in Vashi | Oceanic Spa",
      description:
        "Experience Full Body Oil Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Explore treatment details and contact us for appointment availability.",
      h1:
        "Full Body Oil Massage in Vashi, Navi Mumbai",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     15. FULL BODY THAI MASSAGE
  ======================================================== */

  {
    id: "full-body-thai-massage",
    slug: "full-body-thai-massage-in-oceanicspa-vashi",
    name: "Full Body Thai Massage",
    category: "Massage",

    image:
      "/services/full-body-thai-massage.png",
    imageAlt:
      "Full Body Thai Massage at Oceanic Spa Vashi",

    shortDescription:
      "A traditional Thai-inspired full-body massage experience.",

    description:
      "Experience Full Body Thai Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Enjoy a traditional Thai-inspired massage experience in a comfortable spa environment.",

    duration: "60 Minutes",

    benefits: [
      {
        title: "Thai Massage Experience",
        description:
          "Enjoy a Thai-inspired massage experience focused on relaxation and comfort.",
        icon: "activity",
      },
      {
        title: "Full Body Treatment",
        description:
          "A treatment designed to provide a complete full-body wellness experience.",
        icon: "heart",
      },
      {
        title: "Rejuvenation",
        description:
          "Take time away from your daily routine and relax in a peaceful environment.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Thai-inspired massage",
      "Full-body treatment",
      "Relaxing environment",
      "Vashi location",
    ],

    keywords: [
      "Thai massage Vashi",
      "full body Thai massage Vashi",
      "Thai massage in Vashi",
      "Thai massage Navi Mumbai",
      "Thai spa Vashi",
    ],

    faqs: [
      {
        question:
          "What is Full Body Thai Massage?",
        answer:
          "It is a full-body Thai-inspired massage experience designed around relaxation and comfort.",
      },
      {
        question:
          "Where can I get Thai Massage in Vashi?",
        answer:
          "Thai Massage is available at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I book Thai Massage?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp to check availability.",
      },
    ],

    relatedServices: [
      "full-body-thai-massage-jacuzzi",
      "full-body-thai-massage-scrub",
      "balinese-massage",
    ],

    seo: {
      title:
        "Full Body Thai Massage in Vashi, Navi Mumbai | Oceanic Spa",
      description:
        "Experience Full Body Thai Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Discover treatment details and contact us for booking.",
      h1:
        "Full Body Thai Massage in Vashi, Navi Mumbai",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     16. FULL BODY THAI MASSAGE + JACUZZI
  ======================================================== */

  {
    id: "full-body-thai-massage-jacuzzi",
    slug: "full-body-thai-massage-jacuzzi-in-oceanicspa-vashi",
    name: "Full Body Thai Massage + Jacuzzi",
    category: "Massage",

    image:
      "/services/full-body-thai-massage-jacuzzi.png",
    imageAlt:
      "Full Body Thai Massage with Jacuzzi at Oceanic Spa Vashi",

    shortDescription:
      "A Thai-inspired full-body massage combined with Jacuzzi relaxation.",

    description:
      "Enjoy Full Body Thai Massage with Jacuzzi at Oceanic Spa Vashi in Vashi, Navi Mumbai. A combined treatment designed around relaxation and comfort.",

    duration: "90 Minutes",

    benefits: [
      {
        title: "Thai Massage",
        description:
          "Enjoy a Thai-inspired full-body massage experience.",
        icon: "activity",
      },
      {
        title: "Jacuzzi Relaxation",
        description:
          "Enjoy additional relaxation with the Jacuzzi experience.",
        icon: "moon",
      },
      {
        title: "Complete Wellness",
        description:
          "Combine massage and Jacuzzi time during one relaxing visit.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Full-body Thai massage",
      "Jacuzzi included",
      "Relaxation-focused",
      "Vashi location",
    ],

    keywords: [
      "Thai massage jacuzzi Vashi",
      "full body Thai massage jacuzzi Vashi",
      "Thai spa jacuzzi Vashi",
      "Thai massage Navi Mumbai",
    ],

    faqs: [
      {
        question:
          "Does the Thai Massage treatment include Jacuzzi?",
        answer:
          "Yes. This treatment includes a Jacuzzi experience.",
      },
      {
        question:
          "Where can I experience it?",
        answer:
          "It is available at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I check availability?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp.",
      },
    ],

    relatedServices: [
      "full-body-thai-massage",
      "full-body-thai-massage-scrub-jacuzzi",
      "full-body-oil-massage-jacuzzi",
    ],

    seo: {
      title:
        "Full Body Thai Massage + Jacuzzi in Vashi | Oceanic Spa",
      description:
        "Experience Full Body Thai Massage with Jacuzzi at Oceanic Spa Vashi in Vashi, Navi Mumbai. Contact us for availability and booking.",
      h1:
        "Full Body Thai Massage + Jacuzzi in Vashi",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     17. FULL BODY THAI MASSAGE + SCRUB
  ======================================================== */

  {
    id: "full-body-thai-massage-scrub",
    slug: "full-body-thai-massage-scrub-in-oceanicspa-vashi",
    name: "Full Body Thai Massage + Scrub",
    category: "Massage",

    image:
      "/services/full-body-thai-massage-scrub.png",
    imageAlt:
      "Full Body Thai Massage with Scrub at Oceanic Spa Vashi",

    shortDescription:
      "A Thai-inspired full-body massage combined with a body scrub.",

    description:
      "Experience Full Body Thai Massage with Scrub at Oceanic Spa Vashi in Vashi, Navi Mumbai. A combined treatment designed around relaxation and body care.",

    duration: "90 Minutes",

    benefits: [
      {
        title: "Thai Massage",
        description:
          "Enjoy a Thai-inspired full-body massage experience.",
        icon: "activity",
      },
      {
        title: "Body Scrub",
        description:
          "Includes a body scrub component as part of the treatment.",
        icon: "smile",
      },
      {
        title: "Relaxation",
        description:
          "Enjoy a calm and comfortable spa experience.",
        icon: "heart",
      },
    ],

    highlights: [
      "Full-body Thai massage",
      "Body scrub",
      "Relaxing environment",
      "Vashi location",
    ],

    keywords: [
      "Thai massage scrub Vashi",
      "full body Thai massage scrub Vashi",
      "Thai scrub massage Vashi",
      "spa treatment Vashi",
    ],

    faqs: [
      {
        question:
          "Does this treatment include a body scrub?",
        answer:
          "Yes. A body scrub is included in this treatment.",
      },
      {
        question:
          "Where is this treatment available?",
        answer:
          "It is available at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I book?",
        answer:
          "Contact Oceanic Spa Vashi to check availability and appointment timings.",
      },
    ],

    relatedServices: [
      "full-body-thai-massage",
      "full-body-thai-massage-scrub-jacuzzi",
      "full-body-massage-scrub",
    ],

    seo: {
      title:
        "Full Body Thai Massage + Scrub in Vashi | Oceanic Spa",
      description:
        "Experience Full Body Thai Massage with Scrub at Oceanic Spa Vashi in Vashi, Navi Mumbai. Contact us for treatment availability.",
      h1:
        "Full Body Thai Massage + Scrub in Vashi",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     18. FULL BODY THAI MASSAGE + SCRUB + JACUZZI
  ======================================================== */

  {
    id: "full-body-thai-massage-scrub-jacuzzi",
    slug: "full-body-thai-massage-scrub-jacuzzi-in-oceanicspa-vashi",
    name: "Full Body Thai Massage + Scrub + Jacuzzi",
    category: "Massage",

    image:
      "/services/full-body-thai-massage-scrub-jacuzzi.png",
    imageAlt:
      "Full Body Thai Massage with Scrub and Jacuzzi at Oceanic Spa Vashi",

    shortDescription:
      "A complete Thai-inspired treatment combining massage, scrub and Jacuzzi.",

    description:
      "Enjoy Full Body Thai Massage with Scrub and Jacuzzi at Oceanic Spa Vashi in Vashi, Navi Mumbai. A complete spa experience combining massage, body care and Jacuzzi relaxation.",

    duration: "120 Minutes",

    benefits: [
      {
        title: "Thai Massage",
        description:
          "Enjoy a full-body Thai-inspired massage experience.",
        icon: "activity",
      },
      {
        title: "Body Scrub",
        description:
          "Includes a body scrub component within the treatment.",
        icon: "smile",
      },
      {
        title: "Jacuzzi",
        description:
          "Enjoy additional relaxation with the Jacuzzi component.",
        icon: "moon",
      },
    ],

    highlights: [
      "Full-body Thai massage",
      "Body scrub",
      "Jacuzzi included",
      "Complete spa experience",
    ],

    keywords: [
      "Thai massage scrub jacuzzi Vashi",
      "full body Thai massage scrub jacuzzi Vashi",
      "Thai spa jacuzzi Vashi",
      "Thai massage Vashi",
    ],

    faqs: [
      {
        question:
          "What does this Thai treatment include?",
        answer:
          "The treatment combines Full Body Thai Massage, Scrub and Jacuzzi.",
      },
      {
        question:
          "Where is it available?",
        answer:
          "It is available at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I check availability?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp before visiting.",
      },
    ],

    relatedServices: [
      "full-body-thai-massage",
      "full-body-thai-massage-scrub",
      "full-body-thai-massage-jacuzzi",
    ],

    seo: {
      title:
        "Full Body Thai Massage + Scrub + Jacuzzi in Vashi | Oceanic Spa",
      description:
        "Experience Full Body Thai Massage with Scrub and Jacuzzi at Oceanic Spa Vashi in Vashi, Navi Mumbai. Contact us for availability and booking.",
      h1:
        "Full Body Thai Massage + Scrub + Jacuzzi in Vashi",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     19. HEAD MASSAGE
  ======================================================== */

  {
    id: "head-massage",
    slug: "head-massage-in-oceanicspa-vashi",
    name: "Head Massage",
    category: "Massage",

    image: "/services/head-massage.png",
    imageAlt:
      "Head Massage at Oceanic Spa Vashi",

    shortDescription:
      "A focused head massage experience designed for relaxation and comfort.",

    description:
      "Enjoy Head Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. A focused treatment designed around relaxation and a peaceful spa experience.",

    duration: "30 Minutes",

    benefits: [
      {
        title: "Head Relaxation",
        description:
          "A focused treatment designed to provide a relaxing experience.",
        icon: "moon",
      },
      {
        title: "Short Wellness Break",
        description:
          "A convenient treatment option when you want a shorter spa experience.",
        icon: "smile",
      },
      {
        title: "Refresh",
        description:
          "Take a relaxing break from your daily routine.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Head-focused treatment",
      "Short wellness session",
      "Relaxing environment",
      "Vashi location",
    ],

    keywords: [
      "head massage Vashi",
      "head massage in Vashi",
      "head massage Navi Mumbai",
      "spa massage Vashi",
    ],

    faqs: [
      {
        question:
          "What is Head Massage?",
        answer:
          "Head Massage is a focused wellness treatment designed around relaxation and comfort.",
      },
      {
        question:
          "Where can I get Head Massage in Vashi?",
        answer:
          "Head Massage is available at Oceanic Spa Vashi.",
      },
      {
        question:
          "How can I book a Head Massage?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp.",
      },
    ],

    relatedServices: [
      "back-massage",
      "foot-reflexology",
      "swedish-massage",
    ],

    seo: {
      title:
        "Head Massage in Vashi, Navi Mumbai | Oceanic Spa",
      description:
        "Experience Head Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Enjoy a focused relaxing treatment and contact us for availability.",
      h1:
        "Head Massage in Vashi, Navi Mumbai",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     20. HERITAGE LADIES SPECIAL
  ======================================================== */

  {
    id: "heritage-ladies-special",
    slug: "heritage-ladies-special-in-oceanicspa-vashi",
    name: "Heritage Ladies Special",
    category: "Special Treatment",

    image:
      "/services/heritage-ladies-special.png",
    imageAlt:
      "Heritage Ladies Special at Oceanic Spa Vashi",

    shortDescription:
      "A special treatment designed as a relaxing wellness experience for women.",

    description:
      "Experience Heritage Ladies Special at Oceanic Spa Vashi in Vashi, Navi Mumbai. A special spa treatment designed around comfort and relaxation.",

    duration: "60 Minutes",

    benefits: [
      {
        title: "Relaxing Experience",
        description:
          "Enjoy a calm treatment designed around relaxation and comfort.",
        icon: "heart",
      },
      {
        title: "Special Treatment",
        description:
          "A dedicated wellness experience with a distinctive treatment concept.",
        icon: "star",
      },
      {
        title: "Comfort",
        description:
          "Enjoy your treatment in a comfortable spa environment.",
        icon: "smile",
      },
    ],

    highlights: [
      "Special treatment",
      "Relaxation-focused",
      "Comfortable environment",
      "Vashi location",
    ],

    keywords: [
      "ladies spa Vashi",
      "ladies special spa Vashi",
      "women spa Vashi",
      "spa for women Vashi",
      "ladies massage Vashi",
    ],

    faqs: [
      {
        question:
          "What is Heritage Ladies Special?",
        answer:
          "Heritage Ladies Special is a dedicated special treatment designed around relaxation and comfort.",
      },
      {
        question:
          "Where is this treatment available?",
        answer:
          "It is available at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I check availability?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp before visiting.",
      },
    ],

    relatedServices: [
      "swedish-massage",
      "french-aroma-massage",
      "full-body-oil-massage",
    ],

    seo: {
      title:
        "Heritage Ladies Special in Vashi | Oceanic Spa",
      description:
        "Experience Heritage Ladies Special at Oceanic Spa Vashi in Vashi, Navi Mumbai. Explore the treatment and contact us for availability.",
      h1:
        "Heritage Ladies Special in Vashi",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     21. LOMI-LOMI MASSAGE
  ======================================================== */

  {
    id: "lomi-lomi-massage",
    slug: "lomi-lomi-massage-in-oceanicspa-vashi",
    name: "Lomi-Lomi Massage",
    category: "Massage",

    image:
      "/services/lomi-lomi-massage.png",
    imageAlt:
      "Lomi-Lomi Massage at Oceanic Spa Vashi",

    shortDescription:
      "A flowing massage experience inspired by traditional Lomi-Lomi techniques.",

    description:
      "Experience Lomi-Lomi Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Enjoy a flowing and relaxing massage experience in a comfortable spa environment.",

    duration: "60 Minutes",

    benefits: [
      {
        title: "Flowing Massage Experience",
        description:
          "Enjoy a smooth and relaxing massage experience.",
        icon: "activity",
      },
      {
        title: "Deep Relaxation",
        description:
          "A calming treatment designed to help you unwind.",
        icon: "moon",
      },
      {
        title: "Rejuvenation",
        description:
          "Take time away from your routine and enjoy a restorative wellness experience.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Lomi-Lomi inspired treatment",
      "Relaxing environment",
      "Comfort-focused experience",
      "Vashi location",
    ],

    keywords: [
      "Lomi Lomi massage Vashi",
      "Lomi-Lomi massage Vashi",
      "Lomi Lomi massage Navi Mumbai",
      "spa massage Vashi",
    ],

    faqs: [
      {
        question:
          "What is Lomi-Lomi Massage?",
        answer:
          "Lomi-Lomi Massage is a flowing massage style inspired by traditional techniques and focused on relaxation.",
      },
      {
        question:
          "Where can I get Lomi-Lomi Massage?",
        answer:
          "Lomi-Lomi Massage is available at Oceanic Spa Vashi.",
      },
      {
        question:
          "How can I book?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp to check availability.",
      },
    ],

    relatedServices: [
      "balinese-massage",
      "swedish-massage",
      "french-aroma-massage",
    ],

    seo: {
      title:
        "Lomi-Lomi Massage in Vashi, Navi Mumbai | Oceanic Spa",
      description:
        "Experience Lomi-Lomi Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Discover treatment details and contact us for appointment availability.",
      h1:
        "Lomi-Lomi Massage in Vashi, Navi Mumbai",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     22. SWEDISH MASSAGE
  ======================================================== */

  {
    id: "swedish-massage",
    slug: "swedish-massage-in-oceanicspa-vashi",
    name: "Swedish Massage",
    category: "Massage",

    image:
      "/services/swedish-massage.png",
    imageAlt:
      "Swedish Massage at Oceanic Spa Vashi",

    shortDescription:
      "A classic relaxing massage experience designed around comfort and wellness.",

    description:
      "Experience Swedish Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. A classic massage experience designed for guests looking for relaxation and comfort.",

    duration: "60 Minutes",

    benefits: [
      {
        title: "Classic Relaxation",
        description:
          "Enjoy a traditional massage experience designed around relaxation.",
        icon: "heart",
      },
      {
        title: "Comfort",
        description:
          "A comfortable treatment experience in a peaceful spa environment.",
        icon: "smile",
      },
      {
        title: "Refresh & Recharge",
        description:
          "Take time away from your daily routine and unwind.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Classic massage",
      "Relaxation-focused",
      "Comfortable environment",
      "Vashi location",
    ],

    keywords: [
      "Swedish massage Vashi",
      "Swedish massage in Vashi",
      "Swedish massage Navi Mumbai",
      "best Swedish massage Vashi",
      "massage in Vashi",
    ],

    faqs: [
      {
        question:
          "What is Swedish Massage?",
        answer:
          "Swedish Massage is a classic massage style commonly associated with relaxation and comfort.",
      },
      {
        question:
          "Where can I get Swedish Massage in Vashi?",
        answer:
          "Swedish Massage is available at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I book Swedish Massage?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp to check availability.",
      },
    ],

    relatedServices: [
      "balinese-massage",
      "deep-tissue-massage",
      "full-body-oil-massage",
    ],

    seo: {
      title:
        "Swedish Massage in Vashi, Navi Mumbai | Oceanic Spa",
      description:
        "Experience Swedish Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Discover a classic relaxing massage and contact us for booking.",
      h1:
        "Swedish Massage in Vashi, Navi Mumbai",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     23. BACK MASSAGE
  ======================================================== */

  {
    id: "back-massage",
    slug: "back-massage-in-oceanicspa-vashi",
    name: "Back Massage",
    category: "Massage",

    image:
      "/services/back-massage.png",
    imageAlt:
      "Back Massage at Oceanic Spa Vashi",

    shortDescription:
      "A focused back massage experience designed around relaxation and comfort.",

    description:
      "Enjoy Back Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. A focused treatment designed to provide a comfortable and relaxing massage experience.",

    duration: "30 Minutes",

    benefits: [
      {
        title: "Focused Treatment",
        description:
          "A focused massage experience for guests looking for a shorter treatment.",
        icon: "activity",
      },
      {
        title: "Relaxation",
        description:
          "Enjoy a calm and comfortable massage experience.",
        icon: "heart",
      },
      {
        title: "Quick Wellness Break",
        description:
          "A convenient option when you want to take a short break from your routine.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Back-focused treatment",
      "Short wellness session",
      "Relaxing environment",
      "Vashi location",
    ],

    keywords: [
      "back massage Vashi",
      "back massage in Vashi",
      "back massage Navi Mumbai",
      "back spa Vashi",
      "massage Vashi",
    ],

    faqs: [
      {
        question:
          "What is Back Massage?",
        answer:
          "Back Massage is a focused treatment designed around relaxation and comfort.",
      },
      {
        question:
          "Where can I get Back Massage in Vashi?",
        answer:
          "Back Massage is available at Oceanic Spa Vashi.",
      },
      {
        question:
          "How can I book?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp to check availability.",
      },
    ],

    relatedServices: [
      "head-massage",
      "foot-reflexology",
      "deep-tissue-massage",
    ],

    seo: {
      title:
        "Back Massage in Vashi, Navi Mumbai | Oceanic Spa",
      description:
        "Experience Back Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Explore treatment details and contact us for appointment availability.",
      h1:
        "Back Massage in Vashi, Navi Mumbai",
    },

    featured: false,
    active: true,
  },

  /* =======================================================
     24. BALINESE MASSAGE
  ======================================================== */

  {
    id: "balinese-massage",
    slug: "balinese-massage-in-oceanicspa-vashi",
    name: "Balinese Massage",
    category: "Massage",

    image:
      "/services/balinese-massage.png",
    imageAlt:
      "Balinese Massage at Oceanic Spa Vashi",

    shortDescription:
      "A relaxing Balinese-inspired massage experience combining soothing massage techniques.",

    description:
      "Experience Balinese Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Enjoy a relaxing Balinese-inspired massage experience in a comfortable spa environment.",

    duration: "60 Minutes",

    benefits: [
      {
        title: "Balinese Experience",
        description:
          "Enjoy a Balinese-inspired massage experience designed around relaxation.",
        icon: "activity",
      },
      {
        title: "Deep Relaxation",
        description:
          "A calming treatment designed to help you unwind.",
        icon: "moon",
      },
      {
        title: "Rejuvenation",
        description:
          "Take time away from your routine and enjoy a restorative wellness experience.",
        icon: "refresh",
      },
    ],

    highlights: [
      "Balinese-inspired massage",
      "Relaxation-focused",
      "Comfortable environment",
      "Vashi location",
    ],

    keywords: [
      "Balinese massage Vashi",
      "Balinese massage in Vashi",
      "Balinese massage Navi Mumbai",
      "best Balinese massage Vashi",
      "spa massage Vashi",
    ],

    faqs: [
      {
        question:
          "What is Balinese Massage?",
        answer:
          "Balinese Massage is a massage style inspired by traditional Balinese techniques and focused on relaxation.",
      },
      {
        question:
          "Where can I get Balinese Massage?",
        answer:
          "Balinese Massage is available at Oceanic Spa Vashi in Vashi, Navi Mumbai.",
      },
      {
        question:
          "How can I book Balinese Massage?",
        answer:
          "Contact Oceanic Spa Vashi by phone or WhatsApp to check availability.",
      },
    ],

    relatedServices: [
      "swedish-massage",
      "lomi-lomi-massage",
      "full-body-thai-massage",
    ],

    seo: {
      title:
        "Balinese Massage in Vashi, Navi Mumbai | Oceanic Spa",
      description:
        "Experience Balinese Massage at Oceanic Spa Vashi in Vashi, Navi Mumbai. Discover treatment details and contact us for appointment availability.",
      h1:
        "Balinese Massage in Vashi, Navi Mumbai",
    },

    featured: false,
    active: true,
  },
];

/* =========================================================
   ACTIVE SERVICES
========================================================= */

export const activeServices = services.filter(
  (service) => service.active
);

/* =========================================================
   FEATURED SERVICES
========================================================= */

export const featuredServices = services.filter(
  (service) =>
    service.featured && service.active
);

/* =========================================================
   GET SERVICE BY SLUG
========================================================= */

export const getServiceBySlug = (
  slug: string
) =>
  services.find(
    (service) =>
      service.slug === slug &&
      service.active
  );

/* =========================================================
   GET RELATED SERVICES
========================================================= */

export const getRelatedServices = (
  service: Service
) =>
  service.relatedServices
    .map((slug) =>
      getServiceBySlug(slug)
    )
    .filter(
      (service): service is Service =>
        Boolean(service)
    );
