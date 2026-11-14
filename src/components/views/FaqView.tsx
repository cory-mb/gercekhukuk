import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FaqList from "@/components/FaqList";
import { getServices } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { LINKS, type Lang } from "@/lib/dict";

// Sorular hizmet sayfalarının frontmatter'ından gelir (tek kaynak). SSS şeması hizmet sayfalarındadır; burada tekrarlanmaz.
const COPY = {
  tr: {
    title: "Sık Sorulan Sorular — Hukuki Danışmanlık",
    description: "Çalışma alanlarına göre sık sorulan sorular: doçentlik ve yükseköğretim, iş hukuku, arabuluculuk, kira ve borçlar hukuku, icra, şirketler hukuku, aile hukuku, KVKK ve bilişim. Av. Kazım Onur Gerçek LL.M.",
    h1: "Sık Sorulan Sorular", lead: "Sorular çalışma alanlarına göre gruplanmıştır. Bir başlığa tıklayarak soruları açabilir ya da arama kutusunu kullanabilirsiniz.",
    more: "Sorunuz burada yer almıyor mu?", cta: "İletişime Geç",
  },
  en: {
    title: "Frequently Asked Questions",
    description: "Frequently asked questions by practice area: associate professorship and higher education, employment, mediation, leases and obligations, enforcement, corporate, family, data protection and cybercrime. Av. Kazım Onur Gerçek LL.M.",
    h1: "Frequently Asked Questions", lead: "Questions are grouped by practice area. Click a heading to open its questions, or use the search box.",
    more: "Can't find your question here?", cta: "Contact Us",
  },
};

export const faqMetadata = (lang: Lang): Metadata =>
  buildMetadata({ title: COPY[lang].title, description: COPY[lang].description, path: LINKS[lang].faq, lang });

export default function FaqView({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const groups = getServices(lang).filter((s) => s.faqs.length > 0);

  return (
    <>
      <div className="page-header">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Breadcrumb lang={lang} items={[{ label: c.h1, href: LINKS[lang].faq }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            {c.h1}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-14">
        <p style={{ marginBottom: "2rem", fontSize: "0.9375rem", color: "var(--text-muted)" }}>{c.lead}</p>

        <FaqList lang={lang} groups={groups.map((s) => ({ slug: s.slug, title: s.title, href: `${LINKS[lang].services}/${s.slug}`, faqs: s.faqs }))} />

        <div style={{ marginTop: "3rem", padding: "2.5rem", background: "var(--stone-2)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", borderTop: "1.5px solid var(--gold)" }}>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--text)" }}>
            {c.more}
          </p>
          <a href={LINKS[lang].contact} className="btn-primary">
            {c.cta}
          </a>
        </div>
      </div>
    </>
  );
}
