import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { AXES, formatDate, getBlogPosts, getServices } from "@/lib/content";
import { SITE_NAME, LAWYER_NAME, PHONE, PHONE_DISPLAY, EMAIL } from "@/lib/schema";

export const metadata: Metadata = {
  ...buildMetadata({
    title: SITE_NAME,
    description:
      "Gerçek Hukuk ve Arabuluculuk Bürosu — Av. Kazım Onur Gerçek LL.M. Şirketlere hukuki danışmanlık ve mevzuata uyum, dava ve uyuşmazlık çözümü, hukukta iş geliştirme ve kurumsallaşma.",
    path: "",
  }),
  title: { absolute: `${SITE_NAME} | ${LAWYER_NAME}` },
};

export default function AnasayfaPage() {
  const sonYazilar = getBlogPosts().slice(0, 3);
  const hizmetler = getServices();

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
                Avukat · Arabulucu
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
                Gerçek Hukuk ve
                <br />
                <em style={{ fontStyle: "italic", color: "var(--text-muted)" }}>
                  Arabuluculuk Bürosu
                </em>
              </h1>

              <div style={{ width: "64px", height: "1.5px", background: "var(--gold)", margin: "2.5rem 0" }} />

              <p style={{ color: "var(--text-muted)", maxWidth: "36rem", fontSize: "1rem", lineHeight: 1.8 }}>
                Av. Kazım Onur Gerçek LL.M. Şirketlere hukuki danışmanlık ve mevzuata uyum, dava ve uyuşmazlık çözümü, hukukta iş geliştirme ve kurumsallaşma. İstanbul 1 No&apos;lu Barosu.
              </p>

              <div className="flex flex-wrap gap-3 mt-10">
                <Link href="/iletisim" className="btn-primary">
                  Randevu Talep Et
                </Link>
                <Link href="/hakkimda" className="btn-secondary">
                  Hakkımda
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
                {AXES.map((e) => (
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
              <p className="section-label">Çalışma Alanları</p>
              <h2
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.2,
                }}
              >
                Hangi konuda yardım almak istiyorsunuz?
              </h2>
            </div>
            <Link
              href="/hizmetler"
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
              Tümünü Gör
            </Link>
          </div>

          {AXES.map((axis) => (
            <div key={axis.key} style={{ marginBottom: "2.5rem" }}>
              <h3 className="section-label">{axis.label}</h3>
              <div style={{ borderTop: "1px solid var(--border)" }}>
                {hizmetler
                  .filter((h) => h.axis === axis.key)
                  .map((h) => (
                    <Link key={h.slug} href={`/hizmetler/${h.slug}`} className="service-row" style={{ textDecoration: "none" }}>
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
              <p className="section-label">Hakkımda</p>
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
                {[
                  "Marmara Ünv. Hukuk Fakültesi",
                  "Yeditepe Ünv. Özel Hukuk LL.M",
                  "Gazi Ünv. Adli Bilişim Y.L.",
                  "İstanbul 1 No'lu Baro Üyesi",
                ].map((item) => (
                  <p
                    key={item}
                    style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.5 }}
                  >
                    {item}
                  </p>
                ))}
              </div>

              <div style={{ marginTop: "2.5rem", display: "flex", gap: "0.75rem" }}>
                <Link href="/iletisim" className="btn-primary">
                  Randevu Talep Et
                </Link>
                <Link href="/hakkimda" className="btn-secondary">
                  Özgeçmiş
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
                2008&apos;de Marmara Üniversitesi Hukuk Fakültesi&apos;nden mezun oldu. 2014–2020 yılları arasında Yeditepe Üniversitesi&apos;nde kıdemli avukat olarak kurumun ve bağlı şirketlerinin dava ve sözleşme süreçlerini, KVKK uyum sürecini ve YÖK nezdindeki işlerini yürüttü.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                Ekim 2020&apos;den bu yana serbest avukat olarak çalışıyor; 2023&apos;ten beri arabulucu.
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
                Kadıköy, İstanbul — Pazartesi–Cuma 09:00–18:00
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
                <p className="section-label">Hukuki Değerlendirmeler</p>
                <h2
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                    fontWeight: 500,
                    color: "var(--text)",
                  }}
                >
                  Son Yazılar
                </h2>
              </div>
              <Link
                href="/yazilar"
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
                Tümünü Gör
              </Link>
            </div>

            <div style={{ borderTop: "1px solid var(--border)" }}>
              {sonYazilar.map((post) => (
                <Link
                  key={post.slug}
                  href={`/yazilar/${post.slug}`}
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
                    {formatDate(post.date)}
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
                Hukuki sorununuzu birlikte değerlendirelim.
              </h2>
              <p style={{ marginTop: "1.25rem", fontSize: "1rem", lineHeight: 1.75, color: "var(--text-muted)", maxWidth: "34rem" }}>
                Randevu talebi için formu doldurabilir, arayabilir veya WhatsApp ile yazabilirsiniz. Pazartesi–Cuma 09:00–18:00.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.5rem" }}>
                <Link href="/iletisim" className="btn-primary">
                  Randevu Talep Et
                </Link>
                <a
                  href={`https://api.whatsapp.com/send?phone=${PHONE.replace("+", "")}&text=Merhaba`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp ile Yazın
                </a>
              </div>
            </div>
            <div style={{ borderLeft: "1.5px solid var(--border)", paddingLeft: "3rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { label: "Telefon", value: PHONE_DISPLAY, href: `tel:${PHONE}` },
                  { label: "E-posta", value: EMAIL, href: `mailto:${EMAIL}` },
                  { label: "Konum", value: "Kadıköy, İstanbul", href: null },
                  { label: "Çalışma Saatleri", value: "Pzt–Cum 09:00–18:00", href: null },
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
