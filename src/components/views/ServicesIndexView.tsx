import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { getServices } from "@/lib/content";
import { AXES, LINKS, UI, type Lang } from "@/lib/dict";

const COPY = {
  tr: {
    description: "Gerçek Hukuk ve Arabuluculuk Bürosu hizmetleri: şirketlere hukuki danışmanlık ve mevzuata uyum, dava ve uyuşmazlık çözümü, hukukta iş geliştirme ve kurumsallaşma.",
    intro: "Bireysel ve kurumsal müvekkillere üç ana alanda danışmanlık ve temsil hizmeti verilmektedir.",
    ctaQ: "Hangi konuda yardım almak istiyorsunuz?",
    ctaText: "Hukuki durumunuzu görüşmek için randevu talep edebilirsiniz.",
  },
  en: {
    description: "Services of Gerçek Law and Mediation Office: corporate advisory and regulatory compliance, litigation and dispute resolution, business development for law firms.",
    intro: "We advise and represent individual and corporate clients in three main areas.",
    ctaQ: "Which matter can we help you with?",
    ctaText: "You can request an appointment to discuss your legal situation.",
  },
};

export const servicesIndexMetadata = (lang: Lang): Metadata =>
  buildMetadata({ title: UI[lang].services, description: COPY[lang].description, path: LINKS[lang].services, lang });

export default function ServicesIndexView({ lang }: { lang: Lang }) {
  const services = getServices(lang);
  const t = UI[lang];
  const c = COPY[lang];

  return (
    <>
      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb lang={lang} items={[{ label: t.services, href: LINKS[lang].services }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            {t.services}
          </h1>
          <p style={{ marginTop: "0.75rem", color: "var(--text-muted)", fontSize: "0.9375rem", maxWidth: "42rem" }}>
            {c.intro}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14" style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
        {AXES[lang].map((axis) => (
          <section key={axis.key}>
            <h2 className="section-label">{axis.label}</h2>
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {services
                .filter((s) => s.axis === axis.key)
                .map((s) => (
                  <Link key={s.slug} href={`${LINKS[lang].services}/${s.slug}`} className="service-row">
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.625rem", fontWeight: 700, color: "var(--text-light)", letterSpacing: "0.08em" }}>
                      {String(s.order).padStart(2, "0")}
                    </span>
                    <div>
                      <span style={{ display: "block", fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--text)", marginBottom: "0.375rem" }}>
                        {s.title}
                      </span>
                      <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{s.summary}</p>
                    </div>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="service-row-arrow" style={{ width: "1.125rem", height: "1.125rem" }}>
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                ))}
            </div>
          </section>
        ))}

        <div style={{ padding: "2.5rem", background: "var(--stone-2)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", borderTop: "1.5px solid var(--gold)" }}>
          <div>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.375rem", fontWeight: 500, color: "var(--text)" }}>
              {c.ctaQ}
            </p>
            <p style={{ marginTop: "0.375rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
              {c.ctaText}
            </p>
          </div>
          <Link href={LINKS[lang].contact} className="btn-primary">
            {t.cta}
          </Link>
        </div>
      </div>
    </>
  );
}
