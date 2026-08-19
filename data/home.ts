import type { IconType } from "react-icons";
import {
  FaCheck as FiCheck,
  FaClock as FiClock,
  FaHeart as FiHeart,
  FaMapMarkerAlt as FiMapPin,
  FaShieldAlt as FiShield,
  FaStar as FiStar,
  FaUsers as FiUsers,
} from "react-icons/fa";

export const homeServiceSlugs = [
  "deep-tissue-massage",
  "foot-reflexology",
  "four-hand-couple-special-treatment",
  "four-hand-couple-treatment-jacuzzi",
  "swedish-massage",
  "balinese-massage",
];

export const heroTrustPoints = [
  "Relaxing Environment",
  "Wide Range of Treatments",
  "Convenient Vashi Location",
];

export const serviceTrustPoints: {
  icon: IconType;
  label: string;
}[] = [
  {
    icon: FiHeart,
    label: "Relaxation focused",
  },
  {
    icon: FiCheck,
    label: "Professional experience",
  },
  {
    icon: FiStar,
    label: "Multiple treatments",
  },
];

export const whyChooseReasons: {
  id: string;
  icon: IconType;
  title: string;
  description: string;
}[] = [
  {
    id: "01",
    icon: FiHeart,
    title: "Relaxation First",
    description:
      "A calm environment designed to help you step away from everyday stress and fully unwind.",
  },
  {
    id: "02",
    icon: FiUsers,
    title: "Experienced Service",
    description:
      "Enjoy a professional spa experience with treatments selected around comfort and relaxation.",
  },
  {
    id: "03",
    icon: FiShield,
    title: "Comfortable & Private",
    description:
      "Relax in a clean, comfortable and private setting where your experience remains the priority.",
  },
  {
    id: "04",
    icon: FiClock,
    title: "Convenient Hours",
    description:
      "Flexible opening hours make it easier to find a time that fits into your day.",
  },
  {
    id: "05",
    icon: FiMapPin,
    title: "Vashi Location",
    description:
      "Conveniently located in Vashi, Navi Mumbai for an easy-to-reach wellness escape.",
  },
  {
    id: "06",
    icon: FiStar,
    title: "Variety of Treatments",
    description:
      "Choose from relaxing massage experiences including Swedish, Balinese, Thai and more.",
  },
];
