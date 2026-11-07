import type { MetadataRoute } from "next";
import { getBlogPosts, getPathPairs } from "@/lib/content";
import { LINKS } from "@/lib/dict";
import { SITE_URL } from "@/lib/schema";

const NOINDEX = new Set(["/kvkk", "/en/privacy-notice"]);

export default function sitemap(): MetadataRoute.Sitemap {
  // lastmod yalnız gerçek bir tarihi olan yazılar için verilir; diğer sayfalarda yoktur (her deploy'da "şimdi" yazmak
  // Google'ın lastmod'u görmezden gelmesine yol açar).
  const dates = new Map<string, string>([
    ...getBlogPosts("tr").map((p) => [`${LINKS.tr.articles}/${p.slug}`, p.date] as [string, string]),
    ...getBlogPosts("en").map((p) => [`${LINKS.en.articles}/${p.slug}`, p.date] as [string, string]),
  ]);
  const mod = (p: string) => (dates.has(p) ? { lastModified: dates.get(p) } : {});
  const url = (p: string) => `${SITE_URL}${p === "/" ? "" : p}`;

  return getPathPairs()
    .filter(([tr]) => !NOINDEX.has(tr))
    .flatMap(([tr, en]) => {
      const alternates = { languages: { "tr-TR": url(tr), en: url(en) } };
      const priority = tr === "/" ? 1 : tr.startsWith("/hizmetler") ? 0.8 : 0.7;
      return [
        { url: url(tr), ...mod(tr), changeFrequency: "monthly" as const, priority, alternates },
        { url: url(en), ...mod(en), changeFrequency: "monthly" as const, priority: priority - 0.1, alternates },
      ];
    });
}
