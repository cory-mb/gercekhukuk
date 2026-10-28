import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { SERVICE_LINKS } from "@/lib/nav";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımda — Av. Kazım Onur Gerçek LL.M",
  description:
    "Av. Kazım Onur Gerçek LL.M: Marmara Üniversitesi Hukuk Fakültesi (2008), Gazi Üniversitesi Adli Bilişim ve Yeditepe Üniversitesi Özel Hukuk yüksek lisansı. 2023'ten beri arabulucu.",
  path: "/hakkimda",
});

const EGITIM = [
  { kurum: "Marmara Üniversitesi", bolum: "Hukuk Fakültesi — Lisans (2008)" },
  { kurum: "Gazi Üniversitesi", bolum: "Adli Bilişim Yüksek Lisansı (2015)" },
  { kurum: "Yeditepe Üniversitesi", bolum: "Özel Hukuk Yüksek Lisansı — LL.M (2020)" },
];

export default function HakkimdaPage() {
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }} />
      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Hakkımda", href: "/hakkimda" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Av. Kazım Onur Gerçek LL.M
          </h1>
          <p style={{ marginTop: "0.5rem", color: "var(--text-muted)", fontSize: "0.9375rem" }}>
            Avukat · Arabulucu · Hukuk Danışmanı
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
                  Eğitim
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {EGITIM.map((e) => (
                    <li key={e.kurum}>
                      <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.125rem" }}>{e.kurum}</p>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{e.bolum}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>
                  Baro
                </p>
                <p style={{ fontSize: "0.9375rem", color: "var(--text)" }}>İstanbul 1 No&apos;lu Barosu üyesi</p>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link href="/iletisim" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Randevu Talep Et
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
            <p>
              Av. Kazım Onur Gerçek, 2008 yılında Marmara Üniversitesi Hukuk Fakültesi&apos;nden mezun oldu. Gazi Üniversitesi&apos;nde Adli Bilişim yüksek lisansını (2015) ve Yeditepe Üniversitesi&apos;nde Özel Hukuk yüksek lisansını (2020) tamamladı.
            </p>

            <h2>Ankara (2009–2014)</h2>
            <p>
              2009–2014 yılları arasında Ankara&apos;da Tahir Yahya İlhan Hukuk Bürosu&apos;nda enerji, inşaat, maden ve halı sektörlerinde büyük çaplı şirketlere, kamu yararına çalışan uzman hekim derneklerine ve bireysel müvekkillere ticaret, iş, borçlar, fikri mülkiyet, idare, sağlık, icra ve iflas hukuku alanlarında hukuki destek sundu.
            </p>

            <h2>Yeditepe Üniversitesi (2014–2020)</h2>
            <p>
              2014–2020 yılları arasında Yeditepe Üniversitesi&apos;nde kıdemli avukat olarak kurumun ve bağlı şirketlerinin tüm dava ve sözleşme süreçlerini, KVKK uyum sürecini ve YÖK nezdindeki süreçlerini yürüttü; hukuk ekibine liderlik etti.
            </p>

            <h2>Serbest Avukatlık ve Arabuluculuk (2020 – Günümüz)</h2>
            <p>
              Ekim 2020&apos;den bu yana serbest avukat olarak yükseköğretim, şirketler, iş, borçlar, icra hukuku, hukuki risk yönetimi, KVKK uyum, iş geliştirme ve kurumsallaşma gibi alanlarda çalışmaktadır. 2023&apos;ten beri arabulucudur. İstanbul 1 No&apos;lu Barosu üyesidir.
            </p>

            <h2>Çalışma Alanları</h2>
            <div className="not-prose" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
              {SERVICE_LINKS.map((u) => (
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
