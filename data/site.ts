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

export const site: SiteData = {
  name: "Oceanic Spa Vashi",
  shortName: "Oceanic Spa",
  tagline: "Premium spa and massage in Vashi",

  url: "https://oceanic-spa-vashi.com",

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
      "Oceanic Spa Vashi | Best Spa & Massage Spa in Vashi, Navi Mumbai",

    description:
      "Looking for a premium spa in Vashi, Navi Mumbai? Oceanic Spa offers relaxing body massages and wellness treatments in a comfortable and professional spa environment.",

    keywords: [
      "spa in Vashi",
      "spa in Vashi Navi Mumbai",
      "best spa in Vashi",
      "massage spa in Vashi",
      "body massage in Vashi",
      "spa near Vashi",
      "massage spa in Vashi",
      "spa in Navi Mumbai",
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
