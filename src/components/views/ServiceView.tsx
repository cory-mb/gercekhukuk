import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { getService, getServices } from "@/lib/content";
import { LINKS, UI, type Lang } from "@/lib/dict";

export function serviceMetadata(lang: Lang, slug: string): Metadata {
  const s = getService(slug, lang);
  if (!s) return {};
  return buildMetadata({ title: s.seoTitle ?? s.title, description: s.description, path: `${LINKS[lang].services}/${slug}`, lang });
}

export default function ServiceView({ lang, slug }: { lang: Lang; slug: string }) {
  const s = getService(slug, lang);
  if (!s) notFound();
  const t = UI[lang];
  const base = LINKS[lang].services;
  const related = getServices(lang).filter((r) => s.related.includes(r.slug));

  return (
    <>
      {s.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(s.faqs.map((f) => ({ question: f.q, answer: f.a })))) }}
        />
      )}

      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb lang={lang} items={[{ label: t.services, href: base }, { label: s.title, href: `${base}/${slug}` }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            {s.title}
          </h1>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            {t.updated}: {s.updated} · {t.readTime}: {s.readTime}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 prose-content">
            <MDXRemote source={s.content} />

            {s.faqs.length > 0 && (
              <>
                <h2>{t.faqTitle}</h2>
                {s.faqs.map((f) => (
                  <details key={f.q} className="faq-item">
                    <summary>
                      {f.q}
                      <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: "1rem", height: "1rem", color: "var(--gold)", flexShrink: 0, transition: "transform 0.2s" }}>
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </summary>
                    <div className="faq-answer">{f.a}</div>
                  </details>
                ))}
              </>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div className="dark-panel">
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.75rem" }}>
                  {s.title}
                </p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--text)", lineHeight: 1.3, marginBottom: "1.5rem" }}>
                  {t.asideText}
                </p>
                <Link href={LINKS[lang].contact} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  {t.cta}
                </Link>
              </div>

              {related.length > 0 && (
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "1rem" }}>
                    {t.related}
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={`${base}/${r.slug}`} style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
