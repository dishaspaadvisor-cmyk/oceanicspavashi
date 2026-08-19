import type { MetadataRoute } from "next";

import { activeBlogPosts } from "@/data/blog";
import { locations } from "@/data/location";
import { activeOffers } from "@/data/offer";
import { activeServices } from "@/data/service";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/massage",
    "/gallery",
    "/contact",
    "/blogs",
    "/offers",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...activeServices.flatMap((service) => [
      {
        url: `${site.url}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.75,
      },
      {
        url: `${site.url}/massage/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.75,
      },
    ]),
    ...locations
      .filter((location) => location.active !== false)
      .map((location) => ({
        url: `${site.url}/locations/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    ...activeOffers.map((offer) => ({
      url: `${site.url}/offers/${offer.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: offer.featured ? 0.75 : 0.7,
    })),
    ...activeBlogPosts.map((post) => ({
      url: `${site.url}/blogs/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
