export interface Testimonial {
  id: number;

  name: string;
  location?: string;

  rating: number;

  review: string;

  service?: string;

  date?: string;

  avatar?: string;

  featured?: boolean;
  approved?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Customer Review",
    location: "Vashi, Navi Mumbai",
    rating: 5,
    review:
      "Add the customer's actual approved testimonial here.",
    service: "Full Body Massage",
    featured: true,
  },

  {
    id: 2,
    name: "Customer Review",
    location: "Navi Mumbai",
    rating: 5,
    review:
      "Add the customer's actual approved testimonial here.",
    service: "Deep Tissue Massage",
    featured: true,
  },

  {
    id: 3,
    name: "Customer Review",
    location: "Vashi, Navi Mumbai",
    rating: 5,
    review:
      "Add the customer's actual approved testimonial here.",
    service: "Aromatherapy Massage",
    featured: true,
  },

  {
    id: 4,
    name: "Customer Review",
    location: "Navi Mumbai",
    rating: 5,
    review:
      "Add the customer's actual approved testimonial here.",
    service: "Balinese Massage",
  },

  {
    id: 5,
    name: "Customer Review",
    location: "Vashi, Navi Mumbai",
    rating: 5,
    review:
      "Add the customer's actual approved testimonial here.",
    service: "Swedish Massage",
  },

  {
    id: 6,
    name: "Customer Review",
    location: "Navi Mumbai",
    rating: 5,
    review:
      "Add the customer's actual approved testimonial here.",
    service: "Four Hand Massage",
  },
];

export const featuredTestimonials = testimonials.filter(
  (testimonial) => testimonial.featured
);

export const averageRating =
  testimonials.length > 0
    ? testimonials.reduce(
        (total, testimonial) => total + testimonial.rating,
        0
      ) / testimonials.length
    : 0;

export const totalTestimonials = testimonials.length;

export const getTestimonialsByService = (
  service: string
): Testimonial[] => {
  return testimonials.filter(
    (testimonial) =>
      testimonial.service?.toLowerCase() === service.toLowerCase()
  );
};
