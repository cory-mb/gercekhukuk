import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "İstanbul Avukat — Yükseköğretim, İdare ve İş Hukuku",
  description:
    "Av. Kazım Onur Gerçek LL.M — İstanbul Kadıköy'de yükseköğretim hukuku, doçentlik iptal davaları, iş hukuku, idare hukuku, KVKK danışmanlığı, ticaret hukuku ve arabuluculuk alanlarında uzman avukat.",
  path: "",
});

const HIZMETLER = [
  {
    href: "/hizmetler/yuksekogrenim-hukuku",
    title: "Yükseköğretim Hukuku",
    featured: true,
    desc: "Vakıf yükseköğretim kurumları ile öğrenci, akademik ve idari personeller arasındaki uyuşmazlıklar ve hak ihlali davaları.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    href: "/hizmetler/docentlik-iptal-davalari",
    title: "Doçentlik İptal Davaları",
    featured: true,
    desc: "Doçentlik başvurusunun reddi kararlarına karşı Danıştay ve idare mahkemelerinde iptal davası açılması ve yürütülmesi.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    href: "/hizmetler/is-hukuku",
    title: "İş Hukuku",
    desc: "İşçi-işveren uyuşmazlıkları, iş akdi feshi, kıdem ve ihbar tazminatı, mobing ve iş kazası davaları.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    href: "/hizmetler/arabuluculuk",
    title: "Arabuluculuk",
    desc: "+500 dosyada anlaşma sağlamış deneyimli arabulucu. İş hukuku, kira ve ticari uyuşmazlıklarda dava dışı çözüm.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    href: "/hizmetler/kira-hukuku",
    title: "Kira Hukuku",
    desc: "Tahliye davaları, kira artış uyuşmazlıkları, kira tespiti ve kira sözleşmesi hazırlanması.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    href: "/hizmetler/sozlesmeler-hukuku",
    title: "Sözleşmeler Hukuku",
    desc: "Sözleşme hazırlanması, incelenmesi, müzakeresi ve ihlallerinde hukuki süreç yönetimi.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: "/hizmetler/idare-hukuku",
    title: "İdare Hukuku",
    desc: "İdari işlem iptali, tam yargı davaları, idari para cezaları ve yükseköğretim kurumu uyuşmazlıkları.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    href: "/hizmetler/kvkk-danismanligi",
    title: "KVKK Danışmanlığı",
    desc: "Kişisel veri uyum süreçleri, VERBİS kaydı, aydınlatma metni hazırlama ve veri ihlali yönetimi.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    href: "/hizmetler/ticaret-hukuku",
    title: "Ticaret Hukuku",
    desc: "Şirket kuruluş ve yapılandırma, ticari sözleşme uyuşmazlıkları, ortaklık anlaşmazlıkları ve alacak tahsili.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export default function AnasayfaPage() {
  const sonYazilar = getBlogPosts().slice(0, 3);

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
                İstanbul Barosu Üyesi
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
                Hukukta Deneyim,
                <br />
                <em style={{ fontStyle: "italic", color: "var(--gold-muted)" }}>
                  Sonuçta Güven.
                </em>
              </h1>

              <div style={{ width: "64px", height: "1.5px", background: "var(--gold)", margin: "2.5rem 0" }} />

              <p style={{ color: "var(--text-muted)", maxWidth: "36rem", fontSize: "1rem", lineHeight: 1.8 }}>
                Av. Kazım Onur Gerçek LL.M — Yükseköğretim hukuku ve doçentlik davalarında uzman. İş hukuku, idare hukuku, KVKK ve ticari uyuşmazlıklarda deneyimli avukat ve arabulucu. Kadıköy, İstanbul.
              </p>

              <div className="flex flex-wrap gap-3 mt-10">
                <Link href="/iletisim" className="btn-primary">
                  Ücretsiz Görüşme
                </Link>
                <Link href="/hakkimda" className="btn-secondary">
                  Özgeçmiş
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
                {[
                  { num: "15+", label: "Yıllık Deneyim" },
                  { num: "+500", label: "Arabuluculuk Dosyası" },
                  { num: "+250", label: "Dava" },
                  { num: "+1000", label: "Sözleşme" },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        fontFamily: "'EB Garamond', serif",
                        fontSize: "2rem",
                        fontWeight: 500,
                        color: "var(--text)",
                        lineHeight: 1,
                      }}
                    >
                      {item.num}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.625rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        marginTop: "0.25rem",
                      }}
                    >
                      {item.label}
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
              <p className="section-label">Uzmanlık Alanları</p>
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

          <div style={{ borderTop: "1px solid var(--border)" }}>
            {HIZMETLER.map((h, i) => (
              <Link
                key={h.href}
                href={h.href}
                className="service-row"
                style={{ textDecoration: "none" }}
              >
                {/* Index */}
                <span
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "var(--text-light)",
                  }}
                >
                  0{i + 1}
                </span>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "'EB Garamond', serif",
                        fontSize: "1.375rem",
                        fontWeight: 500,
                        color: "var(--text)",
                        lineHeight: 1.3,
                      }}
                    >
                      {h.title}
                    </span>
                    {h.featured && (
                      <span
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: "0.5625rem",
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                        }}
                      >
                        Uzman
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                      marginTop: "0.25rem",
                    }}
                  >
                    {h.desc}
                  </p>
                </div>

                {/* Arrow */}
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="service-row-arrow"
                  style={{ width: "1.125rem", height: "1.125rem" }}
                >
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
      </section>

      {/* ── HAKKINDA ── */}
      <section style={{ background: "var(--stone)", paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — name + credentials */}
            <div>
              <p className="section-label">Av. Kazım Onur Gerçek LL.M</p>
              <h2
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "clamp(1.875rem, 4vw, 3rem)",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: 1.15,
                }}
              >
                Deneyimli temsil,
                <br />
                <em style={{ fontStyle: "italic", color: "var(--gold-muted)" }}>güvenilir sonuçlar.</em>
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
                  Randevu Al
                </Link>
                <Link href="/hakkimda" className="btn-secondary">
                  Özgeçmişi İncele
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
                Marmara Üniversitesi Hukuk Fakültesi mezunu. 2014–2020 yılları arasında Yeditepe Üniversitesi&apos;nde kıdemli avukat olarak 250&apos;den fazla dava yürüttü, 1000&apos;i aşkın sözleşme hazırladı.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                2020&apos;den bu yana serbest avukat olarak vakıf yükseköğretim kurumları, doçentlik davaları ve arabuluculuk alanlarında uzmanlaşmış; 500&apos;ü aşkın arabuluculuk dosyasını anlaşmayla sonuçlandırmıştır.
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
                    {post.date}
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
                Ücretsiz ön görüşme için formu doldurun veya WhatsApp ile ulaşın. Pazartesi–Cuma 09:00–18:00.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.5rem" }}>
                <Link href="/iletisim" className="btn-primary">
                  Randevu Talep Edin
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=905356823872&text=Merhaba"
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
                  { label: "E-posta", value: "gercekavukatlik@gmail.com", href: "mailto:gercekavukatlik@gmail.com" },
                  { label: "WhatsApp", value: "+90 535 682 38 72", href: "https://api.whatsapp.com/send?phone=905356823872&text=Merhaba" },
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
