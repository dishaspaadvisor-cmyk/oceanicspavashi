export interface BlogPost {
  id: number;
  slug: string;

  title: string;
  excerpt: string;
  content: string;

  category: string;
  tags: string[];

  image: string;
  imageAlt: string;

  author: string;
  publishedAt: string;
  updatedAt?: string;

  readingTime: string;

  featured?: boolean;
  active?: boolean;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

/* =========================================================
   BLOG POSTS
========================================================= */

export const blogPosts: BlogPost[] = [
  {
    id: 1,

    slug: "benefits-of-full-body-massage",

    title: "Benefits of Full Body Massage for Relaxation and Wellness",

    excerpt:
      "Discover how a professional full body massage can help you relax, release everyday tension and enjoy a more comfortable sense of well-being.",

    content: `
A full body massage can be a relaxing way to take a break from a busy routine. Different massage techniques are used across the body to create a calm and comfortable experience.

At Oceanic Spa Vashi, full body massage treatments are designed around relaxation and wellness. Depending on your selected treatment, massage techniques may focus on areas where you commonly experience everyday tension.

## Why choose a full body massage?

A full body massage gives you dedicated time to slow down and relax. The experience can be especially useful when you want to step away from your regular routine and enjoy some quiet time.

Massage treatments may also help you feel more relaxed after a busy day. The combination of a comfortable environment and professional massage can create a calming wellness experience.

## Choosing the right massage

Different massage styles offer different experiences. Swedish massage, Thai massage, Balinese massage, aroma massage and deep tissue massage can each provide a different approach.

If you are unsure which treatment to choose, speak with the spa team before your appointment and explain what kind of experience you are looking for.

## Enjoy a relaxing spa experience in Vashi

Oceanic Spa Vashi offers a range of massage and spa treatments for guests looking for a relaxing wellness experience in Vashi, Navi Mumbai.
    `.trim(),

    category: "Massage & Wellness",

    tags: [
      "full body massage",
      "massage Vashi",
      "spa Vashi",
      "wellness",
      "relaxation",
    ],

    image: "/services/full-body-oil-massage.png",

    imageAlt:
      "Full body massage treatment at Oceanic Spa Vashi",

    author: "Oceanic Spa Vashi",

    publishedAt: "2026-01-10",

    updatedAt: "2026-01-10",

    readingTime: "5 min read",

    featured: true,

    active: true,

    seo: {
      title:
        "Benefits of Full Body Massage | Oceanic Spa Vashi",

      description:
         "Oceanic Spa Vashi offers professional spa and full body massage services in Vashi, Navi Mumbai, including aromatherapy, Ayurvedic, Balinese, deep tissue, hot stone, Thai and Swedish massage.",

  keywords: [
    "Oceanic Spa Vashi",
    "spa in Vashi",
    "spa in Vashi Navi Mumbai",
    "best spa in Vashi",
    "spa in Navi Mumbai",
    "massage spa in Vashi",
    "massage in Vashi",
    "full body massage in Vashi",
    "full body massage in Vashi Navi Mumbai",
    "body massage in Vashi",
    "massage centre in Vashi",
    "massage center in Vashi",
    "aromatherapy massage in Vashi",
    "Ayurvedic massage in Vashi",
    "Balinese massage in Vashi",
    "deep tissue massage in Vashi",
    "hot stone massage in Vashi",
    "Thai massage in Vashi",
    "Swedish massage in Vashi",
    "couples massage in Vashi",
    "Jacuzzi massage in Vashi",
    "Lomi Lomi massage in Vashi",
  ],
    },
  },

  {
    id: 2,

    slug: "swedish-massage-vashi",

    title: "Swedish Massage in Vashi: What to Expect",

    excerpt:
      "Learn what a Swedish massage is, what you can expect during the treatment and why it is a popular choice for a relaxing spa experience.",

    content: `
Swedish massage is one of the most commonly recognised massage styles and is often chosen by people looking for a relaxing and comfortable massage experience.

The treatment generally uses flowing massage movements and a comfortable pace to create a calming experience.

## What is Swedish massage?

Swedish massage uses a variety of massage movements across different areas of the body. The overall experience is generally focused on relaxation and comfort.

It can be a suitable option for people who are new to massage and want to experience a traditional full body massage style.

## What happens during a Swedish massage?

Your therapist will guide you through the treatment and help you get comfortable before the massage begins.

The massage is performed in a calm environment with attention given to your comfort throughout the session.

## Is Swedish massage right for you?

If you prefer a gentle and relaxing massage experience, Swedish massage can be a good treatment to consider.

You can also speak with the Oceanic Spa Vashi team before booking if you would like help choosing between Swedish, Balinese, Thai, aroma or other massage options.
    `.trim(),

    category: "Massage Guide",

    tags: [
      "Swedish massage",
      "Swedish massage Vashi",
      "massage Vashi",
      "spa Vashi",
    ],

    image: "/services/swedish-massage.png",

    imageAlt:
      "Swedish massage treatment at Oceanic Spa Vashi",

    author: "Oceanic Spa Vashi",

    publishedAt: "2026-01-15",

    updatedAt: "2026-01-15",

    readingTime: "4 min read",

    active: true,

    seo: {
      title:
        "Swedish Massage in Vashi | What to Expect",

      description:
         "Oceanic Spa Vashi offers professional spa and full body massage services in Vashi, Navi Mumbai, including aromatherapy, Ayurvedic, Balinese, deep tissue, hot stone, Thai and Swedish massage.",

    keywords: [
    "Oceanic Spa Vashi",
    "spa in Vashi",
    "spa in Vashi Navi Mumbai",
    "best spa in Vashi",
    "spa in Navi Mumbai",
    "massage spa in Vashi",
    "massage in Vashi",
    "full body massage in Vashi",
    "full body massage in Vashi Navi Mumbai",
    "body massage in Vashi",
    "massage centre in Vashi",
    "massage center in Vashi",
    "aromatherapy massage in Vashi",
    "Ayurvedic massage in Vashi",
    "Balinese massage in Vashi",
    "deep tissue massage in Vashi",
    "hot stone massage in Vashi",
    "Thai massage in Vashi",
    "Swedish massage in Vashi",
    "couples massage in Vashi",
    "Jacuzzi massage in Vashi",
    "Lomi Lomi massage in Vashi",
  ],
    },
  },

  {
    id: 3,

    slug: "deep-tissue-massage-vashi",

    title: "Deep Tissue Massage: A Guide for First-Time Visitors",

    excerpt:
      "Considering deep tissue massage? Learn what this massage style involves and what to know before booking your treatment in Vashi.",

    content: `
Deep tissue massage is a massage style that generally uses more focused and deeper pressure than relaxing massage techniques.

People often consider this type of massage when they prefer a more targeted massage experience.

## What is deep tissue massage?

Deep tissue massage focuses on applying deliberate pressure through different massage techniques. The experience can feel different from a lighter relaxation-focused massage.

Because pressure preferences vary from person to person, it is important to communicate comfortably with your therapist during the treatment.

## What should first-time visitors know?

If you are trying deep tissue massage for the first time, let your therapist know that it is your first session.

Discuss your preferred pressure level and mention any areas that you would like the therapist to pay particular attention to.

## Choosing a massage in Vashi

Oceanic Spa Vashi offers several massage styles, including deep tissue, Swedish, Balinese, Thai and aroma massage.

Our team can help you understand the available options before you make your appointment.
    `.trim(),

    category: "Massage Guide",

    tags: [
      "deep tissue massage",
      "deep tissue massage Vashi",
      "massage Vashi",
      "spa Navi Mumbai",
    ],

    image: "/services/deep-tissue-massage.png",

    imageAlt:
      "Deep tissue massage treatment at Oceanic Spa Vashi",

    author: "Oceanic Spa Vashi",

    publishedAt: "2026-01-20",

    updatedAt: "2026-01-20",

    readingTime: "5 min read",

    active: true,

    seo: {
      title:
        "Deep Tissue Massage in Vashi | First-Time Guide",

      description:
         "Oceanic Spa Vashi offers professional spa and full body massage services in Vashi, Navi Mumbai, including aromatherapy, Ayurvedic, Balinese, deep tissue, hot stone, Thai and Swedish massage.",

    keywords: [
    "Oceanic Spa Vashi",
    "spa in Vashi",
    "spa in Vashi Navi Mumbai",
    "best spa in Vashi",
    "spa in Navi Mumbai",
    "massage spa in Vashi",
    "massage in Vashi",
    "full body massage in Vashi",
    "full body massage in Vashi Navi Mumbai",
    "body massage in Vashi",
    "massage centre in Vashi",
    "massage center in Vashi",
    "aromatherapy massage in Vashi",
    "Ayurvedic massage in Vashi",
    "Balinese massage in Vashi",
    "deep tissue massage in Vashi",
    "hot stone massage in Vashi",
    "Thai massage in Vashi",
    "Swedish massage in Vashi",
    "couples massage in Vashi",
    "Jacuzzi massage in Vashi",
    "Lomi Lomi massage in Vashi",
  ],
    },
  },

  {
    id: 4,

    slug: "thai-massage-vashi",

    title: "Thai Massage in Vashi: What You Should Know",

    excerpt:
      "Explore the basics of Thai massage and learn what to expect when choosing a Thai massage experience at a spa in Vashi.",

    content: `
Thai massage is a traditional massage style known for its distinctive approach and techniques.

People interested in experiencing a different style of massage may consider Thai massage as part of their spa and wellness routine.

## What makes Thai massage different?

Thai massage can involve a combination of massage techniques and guided movements. The overall experience can feel different from oil-based relaxation massages.

## Before your appointment

Let your therapist know about your comfort preferences before the treatment begins.

Choosing comfortable clothing and communicating clearly throughout the session can also help create a better experience.

## Thai massage at Oceanic Spa Vashi

Oceanic Spa Vashi offers full body Thai massage along with other massage and spa treatments.

Explore our services to find a treatment that matches the kind of spa experience you are looking for.
    `.trim(),

    category: "Massage Guide",

    tags: [
      "Thai massage",
      "Thai massage Vashi",
      "Thai massage Navi Mumbai",
      "spa Vashi",
    ],

    image: "/services/full-body-thai-massage.png",

    imageAlt:
      "Thai massage treatment at Oceanic Spa Vashi",

    author: "Oceanic Spa Vashi",

    publishedAt: "2026-01-25",

    updatedAt: "2026-01-25",

    readingTime: "4 min read",

    active: true,

    seo: {
      title:
        "Thai Massage in Vashi | Oceanic Spa",

      description:
         "Oceanic Spa Vashi offers professional spa and full body massage services in Vashi, Navi Mumbai, including aromatherapy, Ayurvedic, Balinese, deep tissue, hot stone, Thai and Swedish massage.",

      keywords: [
    "Oceanic Spa Vashi",
    "spa in Vashi",
    "spa in Vashi Navi Mumbai",
    "best spa in Vashi",
    "spa in Navi Mumbai",
    "massage spa in Vashi",
    "massage in Vashi",
    "full body massage in Vashi",
    "full body massage in Vashi Navi Mumbai",
    "body massage in Vashi",
    "massage centre in Vashi",
    "massage center in Vashi",
    "aromatherapy massage in Vashi",
    "Ayurvedic massage in Vashi",
    "Balinese massage in Vashi",
    "deep tissue massage in Vashi",
    "hot stone massage in Vashi",
    "Thai massage in Vashi",
    "Swedish massage in Vashi",
    "couples massage in Vashi",
    "Jacuzzi massage in Vashi",
    "Lomi Lomi massage in Vashi",
  ],
    },
  },

  {
    id: 5,

    slug: "balinese-massage-vashi",

    title: "Balinese Massage in Vashi: A Relaxing Spa Experience",

    excerpt:
      "Discover Balinese massage and learn why this traditional massage style can be a relaxing choice for your next spa visit.",

    content: `
Balinese massage is a traditional massage style that can provide a relaxing and calming spa experience.

It is often considered by people looking for a massage that combines different techniques in a comfortable setting.

## What is Balinese massage?

Balinese massage incorporates different massage movements and techniques to create a relaxing treatment experience.

The exact experience can vary depending on the treatment and your individual preferences.

## Why consider Balinese massage?

If you enjoy relaxing massage experiences and want to try something different from Swedish or traditional oil massage, Balinese massage can be an option to consider.

## Balinese massage in Vashi

Oceanic Spa Vashi offers Balinese massage along with a variety of other full body massage treatments.

Contact our team to learn more about available treatments and appointment timings.
    `.trim(),

    category: "Massage Guide",

    tags: [
      "Balinese massage",
      "Balinese massage Vashi",
      "massage Vashi",
      "spa Vashi",
    ],

    image: "/services/balinese-massage.png",

    imageAlt:
      "Balinese massage treatment at Oceanic Spa Vashi",

    author: "Oceanic Spa Vashi",

    publishedAt: "2026-02-01",

    updatedAt: "2026-02-01",

    readingTime: "4 min read",

    active: true,

    seo: {
      title:
        "Balinese Massage in Vashi | Oceanic Spa",

      description:
        "Oceanic Spa Vashi offers professional spa and full body massage services in Vashi, Navi Mumbai, including aromatherapy, Ayurvedic, Balinese, deep tissue, hot stone, Thai and Swedish massage.",

     keywords: [
    "Oceanic Spa Vashi",
    "spa in Vashi",
    "spa in Vashi Navi Mumbai",
    "best spa in Vashi",
    "spa in Navi Mumbai",
    "massage spa in Vashi",
    "massage in Vashi",
    "full body massage in Vashi",
    "full body massage in Vashi Navi Mumbai",
    "body massage in Vashi",
    "massage centre in Vashi",
    "massage center in Vashi",
    "aromatherapy massage in Vashi",
    "Ayurvedic massage in Vashi",
    "Balinese massage in Vashi",
    "deep tissue massage in Vashi",
    "hot stone massage in Vashi",
    "Thai massage in Vashi",
    "Swedish massage in Vashi",
    "couples massage in Vashi",
    "Jacuzzi massage in Vashi",
    "Lomi Lomi massage in Vashi",
  ],
    },
  },

  {
    id: 6,

    slug: "aroma-massage-vashi",

    title: "Aroma Massage in Vashi: A Guide to a Relaxing Experience",

    excerpt:
      "Learn about aroma massage and how it can add a soothing sensory element to your spa experience in Vashi.",

    content: `
Aroma massage combines massage techniques with aromatic oils to create a calming and enjoyable spa experience.

It can be a popular choice for guests who enjoy relaxing scents alongside a massage treatment.

## What is aroma massage?

Aroma massage uses massage techniques together with aromatic oils. The experience is designed around relaxation and comfort.

## Why choose aroma massage?

The combination of massage and pleasant aromas can make the treatment feel especially calming.

If you enjoy relaxing spa experiences and aromatic scents, aroma massage may be worth considering.

## Aroma massage at Oceanic Spa Vashi

Oceanic Spa Vashi offers French aroma massage among its range of massage treatments.

Contact the spa to ask about treatment details, timings and appointment availability.
    `.trim(),

    category: "Massage Guide",

    tags: [
      "aroma massage",
      "aroma massage Vashi",
      "French aroma massage",
      "spa Vashi",
    ],

    image: "/services/french-aroma-massage.png",

    imageAlt:
      "Aroma massage treatment at Oceanic Spa Vashi",

    author: "Oceanic Spa Vashi",

    publishedAt: "2026-02-05",

    updatedAt: "2026-02-05",

    readingTime: "4 min read",

    active: true,

    seo: {
      title:
        "Aroma Massage in Vashi | Oceanic Spa",

      description:
        "Oceanic Spa Vashi offers professional spa and full body massage services in Vashi, Navi Mumbai, including aromatherapy, Ayurvedic, Balinese, deep tissue, hot stone, Thai and Swedish massage.",

      keywords: [
    "Oceanic Spa Vashi",
    "spa in Vashi",
    "spa in Vashi Navi Mumbai",
    "best spa in Vashi",
    "spa in Navi Mumbai",
    "massage spa in Vashi",
    "massage in Vashi",
    "full body massage in Vashi",
    "full body massage in Vashi Navi Mumbai",
    "body massage in Vashi",
    "massage centre in Vashi",
    "massage center in Vashi",
    "aromatherapy massage in Vashi",
    "Ayurvedic massage in Vashi",
    "Balinese massage in Vashi",
    "deep tissue massage in Vashi",
    "hot stone massage in Vashi",
    "Thai massage in Vashi",
    "Swedish massage in Vashi",
    "couples massage in Vashi",
    "Jacuzzi massage in Vashi",
    "Lomi Lomi massage in Vashi",
  ],
    },
  },
];

/* =========================================================
   HELPERS
========================================================= */

export const activeBlogPosts = blogPosts.filter(
  (post) => post.active !== false
);

export const featuredBlogPosts = activeBlogPosts.filter(
  (post) => post.featured
);

export function getBlogPostBySlug(
  slug: string
): BlogPost | undefined {
  return activeBlogPosts.find(
    (post) => post.slug === slug
  );
}

export function getBlogPostsByCategory(
  category: string
): BlogPost[] {
  return activeBlogPosts.filter(
    (post) =>
      post.category.toLowerCase() ===
      category.toLowerCase()
  );
}

export function getBlogPostsByTag(
  tag: string
): BlogPost[] {
  return activeBlogPosts.filter((post) =>
    post.tags.some(
      (item) =>
        item.toLowerCase() === tag.toLowerCase()
    )
  );
}
