import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { LINKS, SERVICE_LINKS, UI, type Lang } from "@/lib/dict";
import { BARO_SICIL, KEP, PRACTICE_SINCE, TBB_SICIL, personSchema } from "@/lib/schema";

const COPY = {
  tr: {
    title: "Hakkımda",
    description: "Av. Kazım Onur Gerçek LL.M: Marmara Üniversitesi Hukuk Fakültesi (2008), Gazi Üniversitesi Adli Bilişim ve Yeditepe Üniversitesi Özel Hukuk yüksek lisansı. 2023'ten beri arabulucu.",
    subtitle: "Avukat · Arabulucu · Hukuk Danışmanı",
    edu: "Eğitim",
    eduList: [
      { kurum: "Marmara Üniversitesi", bolum: "Hukuk Fakültesi — Lisans (2008)" },
      { kurum: "Gazi Üniversitesi", bolum: "Adli Bilişim Yüksek Lisansı (2015)" },
      { kurum: "Yeditepe Üniversitesi", bolum: "Özel Hukuk Yüksek Lisansı — LL.M (2020)" },
    ],
    bar: "Baro", barText: "İstanbul 1 No'lu Barosu üyesi",
    since: `Mesleğe başlama: ${PRACTICE_SINCE}`, mediator: "Arabulucu: 2023'ten bu yana", baroSicil: "Baro sicil no", tbbSicil: "TBB sicil no", kep: "KEP",
    langTitle: "Yabancı Dil", langText: "İngilizce",
    p1: "Av. Kazım Onur Gerçek, 2008 yılında Marmara Üniversitesi Hukuk Fakültesi'nden mezun oldu. Gazi Üniversitesi'nde Adli Bilişim yüksek lisansını (2015) ve Yeditepe Üniversitesi'nde Özel Hukuk yüksek lisansını (2020) tamamladı.",
    h2: "2009–2014",
    p2: "2009–2014 yılları arasında Ankara'da avukat olarak ticaret, iş, borçlar, fikri mülkiyet, idare, sağlık, icra ve iflas hukuku alanlarında çalıştı.",
    h3: "2014–2020",
    p3: "2014–2020 yılları arasında bir vakıf üniversitesinde kıdemli avukat olarak kurumun ve bağlı şirketlerinin dava ve sözleşme süreçlerini, KVKK uyum sürecini ve YÖK nezdindeki süreçlerini yürüttü.",
    h4: "Serbest Avukatlık ve Arabuluculuk (2020 – Günümüz)",
    p4: "Ekim 2020'den bu yana serbest avukat olarak yükseköğretim, şirketler, iş, borçlar, icra hukuku, hukuki risk yönetimi, KVKK uyum, iş geliştirme ve kurumsallaşma gibi alanlarda çalışmaktadır. 2023'ten beri arabulucudur. İstanbul 1 No'lu Barosu üyesidir.",
    areas: "Çalışma Alanları",
  },
  en: {
    title: "About",
    description: "Av. Kazım Onur Gerçek LL.M: Marmara University Faculty of Law (2008), master's degrees in Forensic Informatics (Gazi University) and Private Law (Yeditepe University). Mediator since 2023.",
    subtitle: "Attorney · Mediator · Legal Adviser",
    edu: "Education",
    eduList: [
      { kurum: "Marmara University", bolum: "Faculty of Law — LL.B (2008)" },
      { kurum: "Gazi University", bolum: "Master's in Forensic Informatics (2015)" },
      { kurum: "Yeditepe University", bolum: "LL.M in Private Law (2020)" },
    ],
    bar: "Bar", barText: "Member of the Istanbul Bar Association",
    since: `Practising since ${PRACTICE_SINCE}`, mediator: "Mediator since 2023", baroSicil: "Bar registration no.", tbbSicil: "TBB registration no.", kep: "Registered email (KEP)",
    langTitle: "Languages", langText: "Turkish, English",
    p1: "Av. Kazım Onur Gerçek graduated from Marmara University Faculty of Law in 2008. He completed a master's degree in Forensic Informatics at Gazi University (2015) and an LL.M in Private Law at Yeditepe University (2020).",
    h2: "2009–2014",
    p2: "From 2009 to 2014 he practised law in Ankara in commercial, employment, obligations, intellectual property, administrative, health, and enforcement and insolvency law.",
    h3: "2014–2020",
    p3: "From 2014 to 2020 he was senior counsel at a foundation university, handling the litigation and contract matters of the university and its affiliated companies, its data protection (KVKK) compliance process and its proceedings before the Council of Higher Education (YÖK).",
    h4: "Independent Practice and Mediation (2020 – present)",
    p4: "Since October 2020 he has practised independently in higher education, corporate, employment, obligations and enforcement law, legal risk management, data protection compliance, and business development and institutionalisation. He has been a mediator since 2023 and is a member of the Istanbul Bar Association.",
    areas: "Practice Areas",
  },
};

export const aboutMetadata = (lang: Lang): Metadata =>
  buildMetadata({ title: COPY[lang].title, description: COPY[lang].description, path: LINKS[lang].about, lang });

export default function AboutView({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const t = UI[lang];
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }} />
      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb lang={lang} items={[{ label: t.about, href: LINKS[lang].about }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Av. Kazım Onur Gerçek LL.M
          </h1>
          <p style={{ marginTop: "0.5rem", color: "var(--text-muted)", fontSize: "0.9375rem" }}>
            {c.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Photo */}
              <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: "-1.5cm 0 0 0" }}>
                  <Image
                    src="/kazim-onur-gercek.jpg"
                    alt="Av. Kazım Onur Gerçek LL.M"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority
                  />
                </div>
              </div>

              {/* Credentials */}
              <div>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>
                  {c.edu}
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {c.eduList.map((e) => (
                    <li key={e.kurum}>
                      <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.125rem" }}>{e.kurum}</p>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{e.bolum}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>
                  {c.bar}
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.375rem", fontSize: "0.9375rem", color: "var(--text)" }}>
                  <li>{c.barText}</li>
                  <li>{c.since}</li>
                  <li>{c.mediator}</li>
                  {BARO_SICIL && <li>{c.baroSicil}: {BARO_SICIL}</li>}
                  {TBB_SICIL && <li>{c.tbbSicil}: {TBB_SICIL}</li>}
                  {KEP && <li>{c.kep}: {KEP}</li>}
                </ul>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>
                  {c.langTitle}
                </p>
                <p style={{ fontSize: "0.9375rem", color: "var(--text)" }}>{c.langText}</p>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link href={LINKS[lang].contact} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  {t.cta}
                </Link>
                <a
                  href="https://www.linkedin.com/in/kaz%C4%B1m-onur-ger%C3%A7ek-ll-m-213648104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          {/* Ana içerik */}
          <div className="lg:col-span-2 prose-content">
            <p>{c.p1}</p>
            <h2>{c.h2}</h2>
            <p>{c.p2}</p>
            <h2>{c.h3}</h2>
            <p>{c.p3}</p>
            <h2>{c.h4}</h2>
            <p>{c.p4}</p>

            <h2>{c.areas}</h2>
            <div className="not-prose" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
              {SERVICE_LINKS[lang].map((u) => (
                <Link
                  key={u.href}
                  href={u.href}
                  style={{ fontSize: "0.75rem", fontWeight: 700, fontFamily: "'Lato', sans-serif", letterSpacing: "0.04em", padding: "0.375rem 0.875rem", background: "var(--stone-2)", color: "var(--text)", border: "1px solid var(--border)", textDecoration: "none" }}
                >
                  {u.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
