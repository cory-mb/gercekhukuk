import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content");

export interface BlogPost {
  slug: string;
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

export function getBlogPosts(): BlogPost[] {
  return readEntries("blog")
    .map(({ slug, data, content }) => ({
      slug,
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

export function getBlogPost(slug: string): BlogPost | null {
  return getBlogPosts().find((p) => p.slug === slug) ?? null;
}

export function getBlogSlugs(): string[] {
  return getBlogPosts().map((p) => p.slug);
}

export function getServices(): Service[] {
  return readEntries("hizmetler")
    .map(({ slug, data, content }) => ({
      slug,
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

export function getService(slug: string): Service | null {
  return getServices().find((s) => s.slug === slug) ?? null;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

export const AXES: { key: Axis; label: string; desc: string }[] = [
  { key: "danismanlik", label: "Şirketlere Hukuki Danışmanlık ve Mevzuata Uyum", desc: "Şirketler hukuku, sözleşme yönetimi, hukuki risk ve uyum süreçleri." },
  { key: "dava", label: "Dava ve Uyuşmazlık Çözümü", desc: "Yükseköğretim, iş, borçlar, icra, aile hukuku, bilişim suçları ve arabuluculuk." },
  { key: "kurumsallasma", label: "İş Geliştirme ve Kurumsallaşma", desc: "Hukuk bürolarına iş geliştirme ve kurumsallaşma desteği." },
];
