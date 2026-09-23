import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Arabulucu İstanbul — İş, Kira ve Ticari Uyuşmazlıklarda Arabuluculuk",
  description:
    "İstanbul arabuluculuk hizmeti. İş hukuku, kira ve ticari uyuşmazlıklarda zorunlu ve ihtiyari arabuluculuk. +500 dosyada anlaşma sağlayan deneyimli arabulucu. Av. Kazım Onur Gerçek LL.M.",
  path: "/hizmetler/arabuluculuk",
});

const FAQ_ITEMS = [
  {
    question: "Arabuluculuk zorunlu mu?",
    answer:
      "İş hukuku uyuşmazlıklarında (2018'den itibaren) ve bazı ticari uyuşmazlıklarda (2019'dan itibaren) dava açmadan önce arabulucuya başvurmak dava şartı olarak düzenlenmiştir. Kira uyuşmazlıklarında ise ihtiyari arabuluculuk mümkündür. Zorunlu arabuluculuğa başvurulmadan açılan dava, dava şartı yokluğu nedeniyle usulden reddedilir.",
  },
  {
    question: "Arabuluculuk ne kadar sürer?",
    answer:
      "Dava şartı arabuluculukta yasal süre iş hukukunda 3 hafta, ticari uyuşmazlıklarda 6 haftadır; tarafların anlaşmasıyla uzatılabilir. İhtiyari arabuluculukta taraflar süreyi serbestçe belirler. Deneyimli arabulucu ile çoğu uyuşmazlık ilk oturumda veya kısa sürede sonuçlanır.",
  },
  {
    question: "Arabuluculukta anlaşma belgesi nedir?",
    answer:
      "Arabuluculuk sürecinde taraflar anlaştığında imzalanan belge, icra edilebilirlik şerhi alındığında mahkeme ilamı hükmündedir. Bu sayede uzun yargılama ve icraya gitmeden anlaşma doğrudan uygulanabilir hale gelir.",
  },
  {
    question: "Arabuluculukta avukat desteği almak gerekli mi?",
    answer:
      "Arabuluculuk sürecinde avukat bulundurma zorunlu değildir; ancak hak kaybını önlemek açısından kritik önem taşır. Özellikle işveren tarafı genellikle avukatıyla geldiğinden, karşı tarafın avukatsız olması müzakere dengesizliğine yol açabilir. Avukat desteği, hem sürecin doğru yönetilmesini hem de anlaşma belgesinin ileride sorun çıkarmayacak şekilde düzenlenmesini sağlar.",
  },
  {
    question: "Arabuluculukta anlaşma sağlanamazsa ne olur?",
    answer:
      "Arabuluculukta anlaşma sağlanaması halinde son tutanak düzenlenir ve tarafların dava yoluna gitmesi önünde bir engel kalmaz. Zorunlu arabuluculukta bu tutanak, mahkemede dava açılabilmesinin ön koşulunu yerine getirir.",
  },
];

const ISTATISTIKLER = [
  { sayi: "+500", label: "Anlaşmayla Sonuçlanan Dosya" },
  { sayi: "3", label: "Yıllık Arabuluculuk Deneyimi" },
  { sayi: "3", label: "Uzmanlık Alanı" },
];

export default function ArabuluculukPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Anasayfa", url: SITE_URL }, { name: "Hizmetler", url: `${SITE_URL}/hizmetler` }, { name: "Arabuluculuk", url: `${SITE_URL}/hizmetler/arabuluculuk` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }} />

      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Hizmetler", href: "/hizmetler" }, { label: "Arabuluculuk" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Arabuluculuk
          </h1>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            Güncelleme: Eylül 2026 · Okuma süresi: 6 dakika
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 prose-content">
            <div className="not-prose" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border)", marginBottom: "3rem" }}>
              {ISTATISTIKLER.map((s) => (
                <div key={s.label} style={{ background: "var(--stone-2)", padding: "1.5rem 1rem", textAlign: "center" }}>
                  <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "2rem", fontWeight: 500, color: "var(--text)" }}>{s.sayi}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem", lineHeight: 1.4 }}>{s.label}</p>
                </div>
              ))}
            </div>

            <h2>İstanbul Arabuluculuk Hizmetleri</h2>
            <p>
              Arabuluculuk, tarafların mahkeme süreçlerine girmeden bağımsız ve tarafsız bir üçüncü kişi aracılığıyla uyuşmazlıklarını çözdüğü alternatif bir yöntemdir. Daha hızlı, daha az maliyetli ve taraflar açısından daha sürdürülebilir çözümler üretir. İstanbul&apos;da iş hukuku, kira ve ticari uyuşmazlıklarda hem zorunlu hem de ihtiyari arabuluculuk hizmeti sunulmaktadır.
            </p>
            <p>
              Av. Kazım Onur Gerçek LL.M, Adalet Bakanlığı sicilinde kayıtlı arabulucu olup 500&apos;ü aşkın dosyada anlaşma sağlamıştır. Arabulucu ve avukat kimliğini bir arada taşıması, tarafların hukuki pozisyonlarını, haklarını ve riskleri bütünlüklü biçimde değerlendirmesine olanak tanımaktadır.
            </p>

            <h2>Hizmet Alanları</h2>

            <h3>İş Hukuku Arabuluculuğu</h3>
            <p>
              İş sözleşmesinin feshinden doğan uyuşmazlıklar, kıdem ve ihbar tazminatı, fazla mesai ve yıllık izin alacakları ile işe iade taleplerinde dava şartı arabuluculuk süreci yürütülmektedir. Bu alanda 2018&apos;den bu yana yüzlerce dosyada deneyim kazanılmıştır.
            </p>

            <h3>Kira Uyuşmazlıklarında Arabuluculuk</h3>
            <p>
              Kira artışı, tahliye, kira bedeli tespiti ve kira sözleşmesinden doğan uyuşmazlıklarda ihtiyari arabuluculuk hizmeti verilmektedir. Özellikle uzun vadeli kiracılık ilişkilerinde ve işyeri kiralarında arabuluculuk, mahkeme yerine kalıcı bir çözüm sunar.
            </p>

            <h3>Ticari Uyuşmazlıklarda Arabuluculuk</h3>
            <p>
              Ticaret mahkemelerinin görev alanına giren para alacağı ve tazminat talepleri içeren uyuşmazlıklarda dava şartı arabuluculuk zorunludur. Sözleşme ihtilafları, alacak uyuşmazlıkları ve ortaklık anlaşmazlıklarında deneyimli arabulucu olarak hizmet sunulmaktadır.
            </p>

            <h2>Arabuluculuk Süreci Nasıl İşler?</h2>
            <p>
              Arabuluculuk süreci; başvurudan anlaşmaya kadar birkaç aşamadan oluşur. Taraflara davetiye gönderilir, bilgilendirme toplantısı yapılır ve müzakere oturumları düzenlenir. Anlaşma sağlanırsa icra edilebilirlik şerhli son tutanak hazırlanır; sağlanamazsa taraflar mahkeme yoluna gidebilir. Süreç gizlilik ilkesiyle yürütülür: arabuluculukta söylenenler dava aşamasında delil olarak kullanılamaz.
            </p>

            <h2>Sık Sorulan Sorular</h2>
            <div className="not-prose" style={{ borderTop: "1px solid var(--border)" }}>
              {FAQ_ITEMS.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>
                    {faq.question}
                    <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: "1rem", height: "1rem", color: "var(--gold)", flexShrink: 0, transition: "transform 0.2s" }}>
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div className="dark-panel">
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", marginBottom: "0.75rem" }}>
                  Arabulucu Randevusu
                </p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--stone)", lineHeight: 1.3, marginBottom: "1.5rem" }}>
                  Uyuşmazlığınız için arabuluculuk süreci hakkında bilgi alın.
                </p>
                <Link href="/iletisim" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  İletişime Geç
                </Link>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "1rem" }}>
                  İlgili Hizmetler
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  <li><Link href="/hizmetler/is-hukuku" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>İş Hukuku</Link></li>
                  <li><Link href="/hizmetler/kira-hukuku" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>Kira Hukuku</Link></li>
                  <li><Link href="/hizmetler/ticaret-hukuku" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>Ticaret Hukuku</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
