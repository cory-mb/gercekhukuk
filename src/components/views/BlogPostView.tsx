import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumb from "@/components/Breadcrumb";
import { formatDate, getBlogPost, getService } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { articleSchema, LAWYER_NAME, SITE_URL } from "@/lib/schema";
import { LINKS, UI, type Lang } from "@/lib/dict";

export function postMetadata(lang: Lang, slug: string): Metadata {
  const post = getBlogPost(slug, lang);
  if (!post) return {};
  const m = buildMetadata({ title: post.seoTitle ?? post.title, description: post.description, path: `${LINKS[lang].articles}/${slug}`, lang });
  return { ...m, openGraph: { ...m.openGraph, type: "article", publishedTime: post.date, authors: [LAWYER_NAME] } };
}

export default function BlogPostView({ lang, slug }: { lang: Lang; slug: string }) {
  const post = getBlogPost(slug, lang);
  if (!post) notFound();
  const t = UI[lang];
  const L = LINKS[lang];
  const service = post.service ? getService(post.service, lang) : null;

  const schema = {
    ...articleSchema({
      title: post.title,
      description: post.description,
      url: `${SITE_URL}${L.articles}/${slug}`,
      datePublished: post.date,
    }),
    inLanguage: lang === "tr" ? "tr-TR" : "en",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-header">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Breadcrumb
            lang={lang}
            items={[
              { label: t.articles, href: L.articles },
              { label: post.title, href: `${L.articles}/${slug}` },
            ]}
          />
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 lg:px-12 py-14">
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
          {post.category}
        </p>
        <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 500, color: "var(--text)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
          {post.title}
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
          <Link href={L.about} rel="author" style={{ color: "inherit" }}>Av. Kazım Onur Gerçek LL.M</Link>
          <span style={{ color: "var(--border)" }}>·</span>
          <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
          <span style={{ color: "var(--border)" }}>·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="prose-content">
          <MDXRemote source={post.content} />
        </div>

        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid var(--border)" }}>
          <div style={{ marginBottom: "2rem", fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text-muted)" }}>
            <p style={{ fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>{t.author}</p>
            <p>
              {t.authorBio} <Link href={L.about}>{t.cv}</Link>
            </p>
          </div>
          <div style={{ background: "var(--stone-2)", padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
            <div>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--text)" }}>
                {t.postCta}
              </p>
              {service && (
                <Link href={`${L.services}/${service.slug}`} style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                  {t.relatedService}: {service.title}
                </Link>
              )}
            </div>
            <Link href={L.contact} className="btn-primary">
              {t.cta}
            </Link>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Link href={L.articles} style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textDecoration: "none" }}>
              {t.allPosts}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
