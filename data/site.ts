export interface BusinessHours {
  day: string;
  open: string;
  close: string;
}

export interface Address {
  street: string;
  area: string;
  city: string;
  state: string;
  postalCode: string;
  pincode?: string;
  country: string;
  full: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface SiteSEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface SiteData {
  name: string;
  shortName: string;
  tagline: string;

  url: string;

  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address?: string;
    mapUrl?: string;
    mapEmbedUrl?: string;
  };

  address: Address;

  coordinates?: Coordinates;

  hours: BusinessHours[];

  social: SocialLinks;

  seo: SiteSEO;

  branding: {
    logo: string;
    logoAlt: string;
    favicon: string;
  };

  business: {
    type: string;
    areaServed: string[];
    priceRange: string;
  };

  maps: {
    googleMapsUrl: string;
    directionsUrl: string;
  };
}

const DEFAULT_SITE_URL = "https://oceanic-spa-vashi.com";

const normalizeSiteUrl = (url: string | undefined): string => {
  const siteUrl = url?.trim() || DEFAULT_SITE_URL;

  return siteUrl.replace(/\/$/, "");
};

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE);

export const site: SiteData = {
  name: "Oceanic Spa Vashi",
  shortName: "Oceanic Spa",
  tagline: "Premium spa and massage in Vashi",

  url: SITE_URL,

  contact: {
    phone: "7045513567",
    whatsapp: "917045513567",
    email: "oceanicspa.vashi@gmail.com",
    address:
      "Shop No. 164, 1st Floor, Satra Plaza, Sector 19, Palm Beach Road, Vashi, Navi Mumbai, Maharashtra 400703, India",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Oceanic+Spa+Vashi%2C+Shop+No.+164%2C+Satra+Plaza%2C+Sector+19%2C+Vashi%2C+Navi+Mumbai",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Oceanic+Spa+Vashi%2C+Shop+No.+164%2C+Satra+Plaza%2C+Sector+19%2C+Vashi%2C+Navi+Mumbai&output=embed",
  },

  address: {
    street: "Shop No. 164, 1st Floor, Satra Plaza",
    area: "Sector 19, Palm Beach Road",
    city: "Vashi, Navi Mumbai",
    state: "Maharashtra",
    postalCode: "400703",
    pincode: "400703",
    country: "India",

    full: "Shop No. 164, 1st Floor, Satra Plaza, Sector 19, Palm Beach Road, Vashi, Navi Mumbai, Maharashtra 400703, India",
  },

  /*
   * Add the exact Google Business Profile coordinates here.
   * Do not use approximate coordinates for LocalBusiness schema.
   */
  coordinates: undefined,

  hours: [
    {
      day: "Monday",
      open: "10:00 AM",
      close: "11:00 PM",
    },
    {
      day: "Tuesday",
      open: "10:00 AM",
      close: "11:00 PM",
    },
    {
      day: "Wednesday",
      open: "10:00 AM",
      close: "11:00 PM",
    },
    {
      day: "Thursday",
      open: "10:00 AM",
      close: "11:00 PM",
    },
    {
      day: "Friday",
      open: "10:00 AM",
      close: "11:00 PM",
    },
    {
      day: "Saturday",
      open: "10:00 AM",
      close: "11:00 PM",
    },
    {
      day: "Sunday",
      open: "10:00 AM",
      close: "11:00 PM",
    },
  ],

  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },

  seo: {
    title:
      "Oceanic Spa Vashi | Spa & Full Body Massage in Vashi, Navi Mumbai",

    description:
      "Looking for a premium spa in Vashi, Navi Mumbai? Oceanic Spa offers relaxing body massages and wellness treatments in a comfortable and professional spa environment.",

keywords: [
  "spa in Vashi",
  "spa in Vashi Navi Mumbai",
  "best spa in Vashi",
  "best spa in Vashi Navi Mumbai",
  "massage spa in Vashi",
  "massage in Vashi",
  "body massage in Vashi",
  "full body massage in Vashi",
  "full body massage in Vashi Navi Mumbai",
  "massage centre in Vashi",
  "massage center in Vashi",
  "spa near Vashi",
  "spa near me in Vashi",
  "massage near me in Vashi",
  "body massage near me in Vashi",
  "spa in Navi Mumbai",
  "best spa in Navi Mumbai",
  "massage spa in Navi Mumbai",
  "full body massage in Navi Mumbai",

  "Thai massage in Vashi",
  "Swedish massage in Vashi",
  "deep tissue massage in Vashi",
  "aromatherapy massage in Vashi",
  "hot oil massage in Vashi",
  "Balinese massage in Vashi",
  "head massage in Vashi",
  "foot massage in Vashi",
  "back massage in Vashi",
  "neck shoulder massage in Vashi",
  "couple massage in Vashi",
  "couple spa in Vashi",

  "luxury spa in Vashi",
  "premium spa in Vashi",
  "wellness spa in Vashi",
  "relaxation spa in Vashi",
  "professional massage in Vashi",
  "spa services in Vashi",
  "massage services in Vashi",
  "spa treatment in Vashi",
  "wellness centre in Vashi",
  "spa appointment in Vashi",

  "Thai massage in Navi Mumbai",
  "Swedish massage in Navi Mumbai",
  "deep tissue massage in Navi Mumbai",
  "couple spa in Navi Mumbai",
  "luxury spa in Navi Mumbai",
  "wellness spa in Navi Mumbai",

  "Oceanic Spa Vashi",
  "Oceanic Spa Navi Mumbai",
  "Oceanic Spa Vashi Navi Mumbai",
],

    ogImage: "/gallery/gallery-10.png",
  },

  branding: {
    logo: "/logo/oceanicspavashi.png",
    logoAlt: "Oceanic Spa Vashi Logo",
    favicon: "/logo/favicon.png",
  },

  business: {
    type: "Spa",

    areaServed: [
      "Vashi",
      "vashi sector 1",
      "Sanpada",
      "Nerul",
      "Seawoods",
      "CBD Belapur",
      "Kopar Khairane",
      "Ghansoli",
      "Airoli",
      "rabale",
      "turbhe",
      "Navi Mumbai",
    ],

    priceRange: "INR",
  },

  maps: {
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5637101015463!2d73.0063096!3d19.0829107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1d9cbf0ee0f%3A0xa27970adba3bb882!2sOceanic%20Spa%20In%20Vashi!5e0!3m2!1sen!2sin!4v1787124573134!5m2!1sen!2sin",
    directionsUrl: "https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3be7c1d9cbf0ee0f:0xa27970adba3bb882!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF",
  },
};
