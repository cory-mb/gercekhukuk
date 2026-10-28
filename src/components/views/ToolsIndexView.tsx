import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { formatDate, getTools } from "@/lib/content";
import { GUNCELLEME } from "@/lib/hesaplama/parametreler.ts";
import { LINKS, UI, type Lang } from "@/lib/dict";

const COPY = {
  tr: {
    title: "Hukuki Hesaplama Araçları",
    description: "Kıdem ve ihbar tazminatı, kira artış oranı, arabuluculuk ücreti ve yasal faiz hesaplama araçları. 2026 güncel tavan, tarife ve oranlarla.",
    intro: `Sık karşılaşılan hesapları kendiniz yapabilmeniz için hazırlandı. Parametreler en son ${formatDate(GUNCELLEME, "tr")} tarihinde güncellendi.`,
    disclaimer: "Sonuçlar bilgilendirme amaçlıdır ve hukuki görüş yerine geçmez.",
  },
  en: {
    title: "Legal Calculators (Turkey)",
    description: "Calculators for Turkish severance and notice pay, rent increase cap, mediation fees and statutory interest, using 2026 ceilings, tariffs and rates.",
    intro: `Calculators for common Turkish-law figures. Parameters last updated on ${formatDate(GUNCELLEME, "en")}.`,
    disclaimer: "Results are for information only and do not constitute legal advice.",
  },
};

export const toolsIndexMetadata = (lang: Lang): Metadata =>
  buildMetadata({ title: COPY[lang].title, description: COPY[lang].description, path: LINKS[lang].calculators, lang });

export default function ToolsIndexView({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const u = UI[lang];
  return (
    <>
      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb lang={lang} items={[{ label: u.calculatorsLong, href: LINKS[lang].calculators }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            {u.calculatorsLong}
          </h1>
          <p style={{ marginTop: "0.75rem", color: "var(--text-muted)", fontSize: "0.9375rem", maxWidth: "42rem" }}>
            {c.intro}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {getTools(lang).map((t) => (
            <Link key={t.slug} href={`${LINKS[lang].calculators}/${t.slug}`} className="service-row">
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.625rem", fontWeight: 700, color: "var(--text-light)", letterSpacing: "0.08em" }}>
                {String(t.order).padStart(2, "0")}
              </span>
              <div>
                <span style={{ display: "block", fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--text)", marginBottom: "0.375rem" }}>
                  {t.title}
                </span>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{t.summary}</p>
              </div>
              <svg viewBox="0 0 20 20" fill="currentColor" className="service-row-arrow" style={{ width: "1.125rem", height: "1.125rem" }}>
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          ))}
        </div>
        <p style={{ marginTop: "2rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
          {c.disclaimer}
        </p>
      </div>
    </>
  );
}
