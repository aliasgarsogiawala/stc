import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";

const routes = [
  "",
  "/about",
  "/products",
  "/products/chemicals",
  "/products/food-ingredients",
  "/products/herbs",
  "/products/honey",
  "/products/petals",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route.startsWith("/products") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/products" ? 0.9 : 0.8,
  }));
}
