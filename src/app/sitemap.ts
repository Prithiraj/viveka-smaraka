import type { MetadataRoute } from "next";
import { contentRepository } from "@/lib/content";
import { absoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [programmes, events] = await Promise.all([
    contentRepository.getProgrammes(),
    contentRepository.getEvents(),
  ]);

  const staticRoutes = ["", "/programs", "/events", "/visit", "/heritage", "/impact", "/about", "/support"];

  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route || "/") })),
    ...programmes.map((programme) => ({ url: absoluteUrl(`/programs/${programme.slug}`) })),
    ...events.map((event) => ({ url: absoluteUrl(`/events/${event.slug}`) })),
  ];
}
