import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { formatDate, getBlogPosts } from "@/lib/content";
import { LINKS, UI, type Lang } from "@/lib/dict";

const COPY = {
  tr: {
    title: "Hukuki Yazılar ve Makaleler",
    h1: "Hukuki Yazılar",
    description: "Doçentlik davaları, yükseköğretim, KVKK ve mevzuata uyum, iş hukuku ve arabuluculuk konularında hukuki yazılar. Av. Kazım Onur Gerçek LL.M.",
    intro: "Doçentlik davaları, yükseköğretim, KVKK ve mevzuata uyum, iş hukuku ve arabuluculuk konularında değerlendirmeler.",
  },
  en: {
    title: "Legal Articles",
    h1: "Articles",
    description: "Articles on associate professorship litigation, higher education, data protection compliance, employment law and mediation in Turkey. Av. Kazım Onur Gerçek LL.M.",
    intro: "Notes on associate professorship litigation, higher education, data protection compliance, employment law and mediation under Turkish law.",
  },
};

export const articlesIndexMetadata = (lang: Lang): Metadata =>
  buildMetadata({ title: COPY[lang].title, description: COPY[lang].description, path: LINKS[lang].articles, lang });

export default function BlogIndexView({ lang }: { lang: Lang }) {
  const posts = getBlogPosts(lang);
  const t = UI[lang];
  const c = COPY[lang];
  const base = LINKS[lang].articles;

  return (
    <>
      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb lang={lang} items={[{ label: t.articles, href: base }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            {c.h1}
          </h1>
          <p style={{ marginTop: "0.75rem", color: "var(--text-muted)", fontSize: "0.9375rem", maxWidth: "42rem" }}>
            {c.intro}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        {posts.length === 0 ? (
          <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem" }}>{t.noPosts}</p>
        ) : (
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {posts.map((post) => (
              <article key={post.slug} style={{ padding: "2rem 0", borderBottom: "1px solid var(--border)" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.625rem" }}>
                  {post.category}
                </p>
                <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.375rem", fontWeight: 500, color: "var(--text)", lineHeight: 1.3, marginBottom: "0.5rem" }}>
                  <Link href={`${base}/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1rem" }}>{post.description}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-light)" }}>{formatDate(post.date, lang)} &nbsp;·&nbsp; {post.readTime}</span>
                  <Link
                    href={`${base}/${post.slug}`}
                    style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none" }}
                  >
                    {t.readMore}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
