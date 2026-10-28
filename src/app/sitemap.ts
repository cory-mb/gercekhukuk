import type { MetadataRoute } from "next";
import { getPathPairs } from "@/lib/content";
import { SITE_URL } from "@/lib/schema";

const NOINDEX = new Set(["/kvkk", "/en/privacy-notice"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const url = (p: string) => `${SITE_URL}${p === "/" ? "" : p}`;

  return getPathPairs()
    .filter(([tr]) => !NOINDEX.has(tr))
    .flatMap(([tr, en]) => {
      const alternates = { languages: { "tr-TR": url(tr), en: url(en) } };
      const priority = tr === "/" ? 1 : tr.startsWith("/hizmetler") ? 0.8 : 0.7;
      return [
        { url: url(tr), lastModified: now, changeFrequency: "monthly" as const, priority, alternates },
        { url: url(en), lastModified: now, changeFrequency: "monthly" as const, priority: priority - 0.1, alternates },
      ];
    });
}
