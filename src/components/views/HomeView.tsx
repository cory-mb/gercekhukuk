import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { formatDate, getBlogPosts, getServices } from "@/lib/content";
import { AXES, LINKS, UI, type Lang } from "@/lib/dict";
import { SITE_NAME, LAWYER_NAME, PHONE, PHONE_DISPLAY, EMAIL } from "@/lib/schema";

const COPY = {
  tr: {
    description: "Gerçek Hukuk ve Arabuluculuk Bürosu — Av. Kazım Onur Gerçek LL.M. Şirketlere hukuki danışmanlık ve mevzuata uyum, dava ve uyuşmazlık çözümü, hukukta iş geliştirme ve kurumsallaşma.",
    kicker: "Avukat · Arabulucu",
    h1a: "Gerçek Hukuk ve", h1b: "Arabuluculuk Bürosu",
    lead: "Av. Kazım Onur Gerçek LL.M. Şirketlere hukuki danışmanlık ve mevzuata uyum, dava ve uyuşmazlık çözümü, hukukta iş geliştirme ve kurumsallaşma. İstanbul 1 No'lu Barosu.",
    areasLabel: "Çalışma Alanları", areasH2: "Hangi konuda yardım almak istiyorsunuz?", seeAll: "Tümünü Gör",
    creds: ["Marmara Ünv. Hukuk Fakültesi", "Yeditepe Ünv. Özel Hukuk LL.M", "Gazi Ünv. Adli Bilişim Y.L.", "İstanbul 1 No'lu Baro Üyesi"],
    cv: "Özgeçmiş",
    bio1: "2008'de Marmara Üniversitesi Hukuk Fakültesi'nden mezun oldu. 2014–2020 yılları arasında Yeditepe Üniversitesi'nde kıdemli avukat olarak kurumun ve bağlı şirketlerinin dava ve sözleşme süreçlerini, KVKK uyum sürecini ve YÖK nezdindeki işlerini yürüttü.",
    bio2: "Ekim 2020'den bu yana serbest avukat olarak çalışıyor; 2023'ten beri arabulucu.",
    place: "Kadıköy, İstanbul — Pazartesi–Cuma 09:00–18:00",
    postsLabel: "Hukuki Değerlendirmeler", postsH2: "Son Yazılar",
    ctaH2: "Hukuki sorununuzu birlikte değerlendirelim.",
    ctaText: "Randevu talebi için formu doldurabilir, arayabilir veya WhatsApp ile yazabilirsiniz. Pazartesi–Cuma 09:00–18:00.",
    wa: "WhatsApp ile Yazın", location: "Konum", hours: "Çalışma Saatleri",
  },
  en: {
    description: "Gerçek Law and Mediation Office, Istanbul — Av. Kazım Onur Gerçek LL.M. Corporate advisory and regulatory compliance, litigation and dispute resolution, business development and institutionalisation.",
    kicker: "Attorney · Mediator",
    h1a: "Gerçek Law and", h1b: "Mediation Office",
    lead: "Av. Kazım Onur Gerçek LL.M. Corporate advisory and regulatory compliance, litigation and dispute resolution, business development and institutionalisation. Istanbul Bar Association.",
    areasLabel: "Practice Areas", areasH2: "How can we help?", seeAll: "View all",
    creds: ["Marmara University, Faculty of Law", "Yeditepe University, LL.M in Private Law", "Gazi University, MSc Forensic Informatics", "Member of the Istanbul Bar"],
    cv: "Profile",
    bio1: "Graduated from Marmara University Faculty of Law in 2008. From 2014 to 2020 he was senior counsel at Yeditepe University, handling the litigation and contracts of the university and its affiliates, its data protection compliance and its proceedings before the Council of Higher Education.",
    bio2: "In independent practice since October 2020; mediator since 2023.",
    place: "Kadıköy, Istanbul — Monday–Friday 09:00–18:00",
    postsLabel: "Legal Notes", postsH2: "Latest Articles",
    ctaH2: "Let's look at your legal matter together.",
    ctaText: "To request an appointment, fill in the contact form, call or write on WhatsApp. Monday–Friday 09:00–18:00 (Istanbul time).",
    wa: "Write on WhatsApp", location: "Location", hours: "Office Hours",
  },
};

export const homeMetadata = (lang: Lang): Metadata => ({
  ...buildMetadata({ title: SITE_NAME, description: COPY[lang].description, path: lang === "tr" ? "" : "/en", lang }),
  title: { absolute: `${SITE_NAME} | ${LAWYER_NAME}` },
});

export default function HomeView({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const t = UI[lang];
  const L = LINKS[lang];
  const sonYazilar = getBlogPosts(lang).slice(0, 3);
  const hizmetler = getServices(lang);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: "var(--stone)", paddingTop: "8rem", paddingBottom: "6rem" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            {/* Left — main content */}
            <div className="lg:col-span-8">
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "2.5rem",
                }}
              >
                {c.kicker}
              </p>

              <h1
                style={{
                  fontFamily: "'EB Garamond', Georgia, serif",
                  fontSize: "clamp(3rem, 7vw, 5.25rem)",
                  lineHeight: 1.07,
                  fontWeight: 500,
                  color: "var(--text)",
                  letterSpacing: "-0.025em",
                }}
              >
                {c.h1a}
                <br />
                <em style={{ fontStyle: "italic", color: "var(--text-muted)" }}>
                  {c.h1b}
                </em>
              </h1>

              <div style={{ width: "64px", height: "1.5px", background: "var(--gold)", margin: "2.5rem 0" }} />

              <p style={{ color: "var(--text-muted)", maxWidth: "36rem", fontSize: "1rem", lineHeight: 1.8 }}>
                {c.lead}
              </p>

              <div className="flex flex-wrap gap-3 mt-10">
                <Link href={L.contact} className="btn-primary">
                  {t.cta}
                </Link>
                <Link href={L.about} className="btn-secondary">
                  {t.about}
                </Link>
              </div>
            </div>

            {/* Right — credential panel */}
            <div className="lg:col-span-4">
              <div
                style={{
                  borderLeft: "1.5px solid var(--gold)",
                  paddingLeft: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.75rem",
                }}
              >
                {AXES[lang].map((e) => (
                  <div key={e.label}>
                    <div
                      style={{
                        fontFamily: "'EB Garamond', serif",
                        fontSize: "1.375rem",
                        fontWeight: 500,
                        color: "var(--text)",
                        lineHeight: 1.25,
                      }}
                    >
                      {e.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--text-muted)",
                        marginTop: "0.375rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {e.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* ── HIZMETLER ── */}
      <section style={{ background: "var(--white)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="section-label">{c.areasLabel}</p>
              <h2
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.2,
                }}
              >
                {c.areasH2}
              </h2>
            </div>
            <Link
              href={L.services}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {c.seeAll}
            </Link>
          </div>

          {AXES[lang].map((axis) => (
            <div key={axis.key} style={{ marginBottom: "2.5rem" }}>
              <h3 className="section-label">{axis.label}</h3>
              <div style={{ borderTop: "1px solid var(--border)" }}>
                {hizmetler
                  .filter((h) => h.axis === axis.key)
                  .map((h) => (
                    <Link key={h.slug} href={`${L.services}/${h.slug}`} className="service-row" style={{ textDecoration: "none" }}>
                      <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.06em", color: "var(--text-light)" }}>
                        {String(h.order).padStart(2, "0")}
                      </span>
                      <div>
                        <span style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.375rem", fontWeight: 500, color: "var(--text)", lineHeight: 1.3 }}>
                          {h.title}
                        </span>
                        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, marginTop: "0.25rem" }}>
                          {h.summary}
                        </p>
                      </div>
                      <svg viewBox="0 0 20 20" fill="currentColor" className="service-row-arrow" style={{ width: "1.125rem", height: "1.125rem" }}>
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HAKKINDA ── */}
      <section style={{ background: "var(--stone)", paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — name + credentials */}
            <div>
              <p className="section-label">{t.about}</p>
              <h2
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "clamp(1.875rem, 4vw, 3rem)",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.15,
                }}
              >
                Av. Kazım Onur Gerçek LL.M
              </h2>

              <div
                style={{
                  borderLeft: "1.5px solid var(--gold)",
                  paddingLeft: "1.5rem",
                  marginTop: "2.5rem",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.875rem",
                }}
              >
                {c.creds.map((item) => (
                  <p
                    key={item}
                    style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.5 }}
                  >
                    {item}
                  </p>
                ))}
              </div>

              <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem" }}>
                <Link href={L.contact} className="btn-primary">
                  {t.cta}
                </Link>
                <Link href={L.about} className="btn-secondary">
                  {c.cv}
                </Link>
              </div>
            </div>

            {/* Right — biography */}
            <div
              style={{
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "var(--text-muted)",
              }}
            >
              <p>
                {c.bio1}
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                {c.bio2}
              </p>

              <div
                style={{
                  marginTop: "2.5rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.8125rem",
                  color: "var(--text-muted)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width: "1rem", height: "1rem", color: "var(--gold)", flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {c.place}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SON YAZILAR ── */}
      {sonYazilar.length > 0 && (
        <section style={{ background: "var(--white)", paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", gap: "1rem", flexWrap: "wrap" }}>
              <div>
                <p className="section-label">{c.postsLabel}</p>
                <h2
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                    fontWeight: 500,
                    color: "var(--text)",
                  }}
                >
                  {c.postsH2}
                </h2>
              </div>
              <Link
                href={L.articles}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                }}
              >
                {c.seeAll}
              </Link>
            </div>

            <div style={{ borderTop: "1px solid var(--border)" }}>
              {sonYazilar.map((post) => (
                <Link
                  key={post.slug}
                  href={`${L.articles}/${post.slug}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "2rem",
                    alignItems: "start",
                    padding: "1.75rem 0",
                    borderBottom: "1px solid var(--border)",
                    textDecoration: "none",
                    transition: "background 0.15s ease",
                    margin: "0 -1.5rem",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                  }}
                  className="service-row"
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.5625rem",
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {post.category}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'EB Garamond', serif",
                        fontSize: "1.25rem",
                        fontWeight: 500,
                        color: "var(--text)",
                        lineHeight: 1.35,
                        marginBottom: "0.375rem",
                      }}
                    >
                      {post.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
                      {post.description}
                    </p>
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-light)",
                      whiteSpace: "nowrap",
                      paddingTop: "0.25rem",
                    }}
                  >
                    {formatDate(post.date, lang)}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section style={{ background: "var(--stone)", paddingTop: "6rem", paddingBottom: "6rem", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.15,
                }}
              >
                {c.ctaH2}
              </h2>
              <p style={{ marginTop: "1.25rem", fontSize: "1rem", lineHeight: 1.75, color: "var(--text-muted)", maxWidth: "34rem" }}>
                {c.ctaText}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.5rem" }}>
                <Link href={L.contact} className="btn-primary">
                  {t.cta}
                </Link>
                <a
                  href={`https://api.whatsapp.com/send?phone=${PHONE.replace("+", "")}&text=${encodeURIComponent(t.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  {c.wa}
                </a>
              </div>
            </div>
            <div style={{ borderLeft: "1.5px solid var(--border)", paddingLeft: "3rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { label: t.phone, value: PHONE_DISPLAY, href: `tel:${PHONE}` },
                  { label: t.email, value: EMAIL, href: `mailto:${EMAIL}` },
                  { label: c.location, value: t.location, href: null },
                  { label: c.hours, value: t.hours, href: null },
                ].map((item) => (
                  <div key={item.label}>
                    <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-light)", fontFamily: "'Lato', sans-serif", marginBottom: "0.25rem" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: "0.9375rem", color: "var(--text)", textDecoration: "none" }}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "0.9375rem", color: "var(--text)" }}>{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
