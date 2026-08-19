export interface GalleryImage {
  id: number;
  image: string;
  alt: string;
  title: string;
  description?: string;
  category: GalleryCategory;
  featured?: boolean;
}

export type GalleryCategory =
  | "All"
  | "Spa Interior"
  | "Treatment Room"
  | "Massage"
  | "Couple Experience"
  | "Jacuzzi"
  | "Wellness";

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    image: "/gallery/gallery-1.jpg",
    alt: "Oceanic Spa Vashi premium spa interior in Navi Mumbai",
    title: "Premium Spa Interior",
    description:
      "A comfortable and relaxing interior at Oceanic Spa Vashi in Navi Mumbai.",
    category: "Spa Interior",
    featured: true,
  },

  {
    id: 2,
    image: "/gallery/gallery-2.jpg",
    alt: "Relaxing massage treatment room at Oceanic Spa Vashi",
    title: "Relaxing Treatment Room",
    description:
      "A peaceful treatment room designed for a comfortable spa experience.",
    category: "Treatment Room",
    featured: true,
  },

  {
    id: 3,
    image: "/gallery/gallery-3.jpg",
    alt: "Professional massage treatment at Oceanic Spa Vashi",
    title: "Massage Experience",
    description:
      "A relaxing massage experience at Oceanic Spa Vashi.",
    category: "Massage",
    featured: true,
  },

  {
    id: 4,
    image: "/gallery/gallery-4.jpg",
    alt: "Luxury spa treatment room at Oceanic Spa Vashi Navi Mumbai",
    title: "Luxury Treatment Space",
    description:
      "A private and comfortable space for spa and massage treatments.",
    category: "Treatment Room",
  },

  {
    id: 5,
    image: "/gallery/gallery-5.jpg",
    alt: "Relaxing body massage experience at Oceanic Spa Vashi",
    title: "Body Massage Experience",
    description:
      "A calm environment for a relaxing body massage session.",
    category: "Massage",
  },

  {
    id: 6,
    image: "/gallery/gallery-6.jpg",
    alt: "Couple spa treatment experience at Oceanic Spa Vashi",
    title: "Couple Spa Experience",
    description:
      "A relaxing spa experience designed for couples.",
    category: "Couple Experience",
    featured: true,
  },

  {
    id: 7,
    image: "/gallery/gallery-7.jpg",
    alt: "Couple massage treatment room at Oceanic Spa Vashi",
    title: "Couple Treatment Room",
    description:
      "A comfortable treatment setting for a couple spa experience.",
    category: "Couple Experience",
  },

  {
    id: 8,
    image: "/gallery/gallery-8.jpg",
    alt: "Jacuzzi facility at Oceanic Spa Vashi Navi Mumbai",
    title: "Jacuzzi Experience",
    description:
      "A relaxing jacuzzi experience available with selected spa treatments.",
    category: "Jacuzzi",
    featured: true,
  },

  {
    id: 9,
    image: "/gallery/gallery-9.jpg",
    alt: "Spa jacuzzi area at Oceanic Spa Vashi",
    title: "Private Jacuzzi",
    description:
      "A comfortable jacuzzi area for a relaxing spa experience.",
    category: "Jacuzzi",
  },

  {
    id: 10,
    image: "/gallery/gallery-10.jpg",
    alt: "Calm wellness environment at Oceanic Spa Vashi",
    title: "Wellness Ambience",
    description:
      "A peaceful atmosphere created for relaxation and wellness.",
    category: "Wellness",
  },

  {
    id: 11,
    image: "/gallery/gallery-11.jpg",
    alt: "Oceanic Spa Vashi massage room in Navi Mumbai",
    title: "Massage Room",
    description:
      "A clean and comfortable room for massage treatments.",
    category: "Treatment Room",
  },

  {
    id: 12,
    image: "/gallery/gallery-12.jpg",
    alt: "Spa interior and relaxation area at Oceanic Spa Vashi",
    title: "Relaxation Area",
    description:
      "A relaxing area at Oceanic Spa Vashi for guests to unwind.",
    category: "Spa Interior",
  },

  {
    id: 13,
    image: "/gallery/gallery-3.jpg",
    alt: "Professional spa treatment environment at Oceanic Spa Vashi",
    title: "Spa Treatment Experience",
    description:
      "A professional and relaxing treatment environment.",
    category: "Massage",
  },

  {
    id: 14,
    image: "/gallery/gallery-10.jpg",
    alt: "Premium wellness space at Oceanic Spa Vashi",
    title: "Premium Wellness Space",
    description:
      "A comfortable wellness space designed for relaxation.",
    category: "Wellness",
  },

  {
    id: 15,
    image: "/gallery/gallery-1.jpg",
    alt: "Oceanic Spa Vashi luxury spa ambience in Navi Mumbai",
    title: "Luxury Spa Ambience",
    description:
      "The relaxing ambience of Oceanic Spa Vashi in Navi Mumbai.",
    category: "Spa Interior",
    featured: true,
  },
];

export const featuredGalleryImages = galleryImages.filter(
  (image) => image.featured
);

export const getGalleryByCategory = (
  category: GalleryCategory
): GalleryImage[] => {
  if (category === "All") {
    return galleryImages;
  }

  return galleryImages.filter(
    (image) => image.category === category
  );
};

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Spa Interior",
  "Treatment Room",
  "Massage",
  "Couple Experience",
  "Jacuzzi",
  "Wellness",
];
