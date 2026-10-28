import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumb from "@/components/Breadcrumb";
import Calculator, { type ToolKey } from "@/components/Calculators";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { formatDate, getService, getTools } from "@/lib/content";
import { GUNCELLEME } from "@/lib/hesaplama/parametreler.ts";
import { LINKS, UI, type Lang } from "@/lib/dict";

export function toolMetadata(lang: Lang, slug: string): Metadata {
  const t = getTools(lang).find((x) => x.slug === slug);
  if (!t) return {};
  return buildMetadata({ title: t.seoTitle ?? t.title, description: t.description, path: `${LINKS[lang].calculators}/${slug}`, lang });
}

export default function ToolView({ lang, slug }: { lang: Lang; slug: string }) {
  const t = getTools(lang).find((x) => x.slug === slug);
  if (!t) notFound();
  const u = UI[lang];
  const L = LINKS[lang];
  const service = t.service ? getService(t.service, lang) : null;

  return (
    <>
      {t.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(t.faqs.map((f) => ({ question: f.q, answer: f.a })))) }}
        />
      )}

      <div className="page-header">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Breadcrumb lang={lang} items={[{ label: u.calculatorsLong, href: L.calculators }, { label: t.title, href: `${L.calculators}/${slug}` }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            {t.title}
          </h1>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>{u.params}: {formatDate(GUNCELLEME, lang)}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-14">
        <Calculator tool={t.tool as ToolKey} lang={lang} />
        <p style={{ marginTop: "0.75rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
          {u.toolDisclaimer}
        </p>

        <div className="prose-content" style={{ marginTop: "3rem" }}>
          <MDXRemote source={t.content} />

          {t.faqs.length > 0 && (
            <>
              <h2>{u.faqTitle}</h2>
              {t.faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}</summary>
                  <div className="faq-answer">{f.a}</div>
                </details>
              ))}
            </>
          )}
        </div>

        <div style={{ marginTop: "3rem", background: "var(--stone-2)", padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
          <div>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--text)" }}>
              {u.toolCta}
            </p>
            {service && (
              <Link href={`${L.services}/${service.slug}`} style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                {u.relatedService}: {service.title}
              </Link>
            )}
          </div>
          <Link href={L.contact} className="btn-primary">
            {u.cta}
          </Link>
        </div>
      </div>
    </>
  );
}
