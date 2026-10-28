import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Lang } from "./dict";

const contentDir = path.join(process.cwd(), "src/content");

const DIRS = {
  blog: { tr: "blog", en: "en/articles" },
  services: { tr: "hizmetler", en: "en/services" },
  tools: { tr: "hesaplama", en: "en/calculators" },
};

export interface BlogPost {
  slug: string;
  alt?: string;
  title: string;
  seoTitle?: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  service?: string;
  content: string;
}

export type Axis = "danismanlik" | "dava" | "kurumsallasma";

export interface Service {
  slug: string;
  alt?: string;
  title: string;
  seoTitle?: string;
  description: string;
  summary: string;
  axis: Axis;
  order: number;
  related: string[];
  updated: string;
  readTime: string;
  faqs: { q: string; a: string }[];
  content: string;
}

export interface Tool {
  slug: string;
  alt?: string;
  title: string;
  seoTitle?: string;
  description: string;
  summary: string;
  tool: string;
  service?: string;
  order: number;
  faqs: { q: string; a: string }[];
  content: string;
}

function readEntries(dir: string) {
  const full = path.join(contentDir, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(full, file), "utf-8"));
      return { slug: file.replace(/\.(mdx|md)$/, ""), data, content };
    });
}

export function getBlogPosts(lang: Lang = "tr"): BlogPost[] {
  return readEntries(DIRS.blog[lang])
    .map(({ slug, data, content }) => ({
      slug,
      alt: data.alt,
      title: data.title ?? "",
      seoTitle: data.seoTitle,
      description: data.description ?? "",
      date: data.date ?? "",
      category: data.category ?? "Genel",
      readTime: data.readTime ?? "5 dakika",
      service: data.service,
      content,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string, lang: Lang = "tr"): BlogPost | null {
  return getBlogPosts(lang).find((p) => p.slug === slug) ?? null;
}

export function getBlogSlugs(lang: Lang = "tr"): string[] {
  return getBlogPosts(lang).map((p) => p.slug);
}

export function getServices(lang: Lang = "tr"): Service[] {
  return readEntries(DIRS.services[lang])
    .map(({ slug, data, content }) => ({
      slug,
      alt: data.alt,
      title: data.title ?? "",
      seoTitle: data.seoTitle,
      description: data.description ?? "",
      summary: data.summary ?? "",
      axis: data.axis as Axis,
      order: data.order ?? 99,
      related: data.related ?? [],
      updated: data.updated ?? "",
      readTime: data.readTime ?? "6 dakika",
      faqs: data.faqs ?? [],
      content,
    }))
    .sort((a, b) => a.order - b.order);
}

export function getService(slug: string, lang: Lang = "tr"): Service | null {
  return getServices(lang).find((s) => s.slug === slug) ?? null;
}

export function getTools(lang: Lang = "tr"): Tool[] {
  return readEntries(DIRS.tools[lang])
    .map(({ slug, data, content }) => ({
      slug,
      alt: data.alt,
      title: data.title ?? "",
      seoTitle: data.seoTitle,
      description: data.description ?? "",
      summary: data.summary ?? "",
      tool: data.tool ?? slug,
      service: data.service,
      order: data.order ?? 99,
      faqs: data.faqs ?? [],
      content,
    }))
    .sort((a, b) => a.order - b.order);
}

export function formatDate(date: string, lang: Lang = "tr"): string {
  return new Date(date).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
}

// TR yolu ↔ EN yolu. EN içerik dosyaları frontmatter'da `alt: <tr-slug>` taşır.
export function getPathPairs(): [string, string][] {
  const pairs = (items: { slug: string; alt?: string }[], tr: string, en: string) =>
    items.filter((i) => i.alt).map((i) => [`${tr}/${i.alt}`, `${en}/${i.slug}`] as [string, string]);
  return [
    ["/", "/en"],
    ["/hakkimda", "/en/about"],
    ["/hizmetler", "/en/services"],
    ["/iletisim", "/en/contact"],
    ["/sss", "/en/faq"],
    ["/yazilar", "/en/articles"],
    ["/kvkk", "/en/privacy-notice"],
    ["/hesaplama-araclari", "/en/calculators"],
    ["/online-danismanlik", "/en/online-consultation"],
    ...pairs(getServices("en"), "/hizmetler", "/en/services"),
    ...pairs(getBlogPosts("en"), "/yazilar", "/en/articles"),
    ...pairs(getTools("en"), "/hesaplama-araclari", "/en/calculators"),
  ];
}
