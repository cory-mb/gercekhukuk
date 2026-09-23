import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Kira Hukuku Avukatı İstanbul — Tahliye ve Kira Uyuşmazlıkları",
  description:
    "İstanbul kira hukuku avukatı. Tahliye davası, kira tespit ve uyarlama davaları, kira artış uyuşmazlığı, kira sözleşmesi incelemesi. Av. Kazım Onur Gerçek LL.M — Kadıköy.",
  path: "/hizmetler/kira-hukuku",
});

const FAQ_ITEMS = [
  {
    question: "Kira tespit davası nedir?",
    answer:
      "Kira tespit davası, kiracı ile kiraya veren arasında kira bedeli konusunda anlaşmazlık çıkması halinde mahkemenin piyasa koşullarına uygun kira bedelini belirlemesi için açılan davadır. Her iki taraf da bu davayı açabilir. Kira tespit kararı, yeni kira döneminin başından itibaren geçerli olur ve ilerleyen yıllardaki artışa da esas teşkil eder.",
  },
  {
    question: "Kiracının tahliyesi için hangi yollar vardır?",
    answer:
      "Tahliye; kira bedelinin ödenmemesi (iki haklı ihtar), konutun kötü kullanımı, kiralayanın konut veya işyeri ihtiyacı, yeniden inşa veya tadilat ve tahliye taahhütnamesi nedeniyle istenebilir. Her durumda farklı yasal süreler ve prosedürler geçerlidir. Özellikle ihtiyaç nedeniyle tahliyede bildirimin kira yılı bitmeden yapılması gerekir.",
  },
  {
    question: "Kira artışı için yasal sınır nedir?",
    answer:
      "Konut kira sözleşmelerinde yıllık artış, TÜFE'nin 12 aylık ortalamasını geçemez. Bu sınır yasal düzenlemeyle güvence altına alınmıştır. Sözleşmede daha yüksek bir oran belirlenmiş olsa bile yasal sınırı aşan artış talepleri hukuka aykırı olup itiraz konusu yapılabilir.",
  },
  {
    question: "Tahliye taahhütnamesi nedir ve nasıl kullanılır?",
    answer:
      "Tahliye taahhütnamesi; kiracının, kira sözleşmesi başladıktan sonra imzaladığı ve belirli bir tarihte kiralananı boşaltacağını taahhüt ettiği belgedir. Bu tarihin gelmiş olmasına rağmen tahliye gerçekleşmezse kiraya veren noter kanalıyla ihtarda bulunarak ilamlı icra yoluyla tahliye isteyebilir. Taahhütnamenin geçerli olması için sözleşme tarihinden sonra ve baskı olmaksızın imzalanmış olması gerekir.",
  },
  {
    question: "Kira uyuşmazlıklarında arabuluculuk mümkün mü?",
    answer:
      "Kira uyuşmazlıklarında arabuluculuk ihtiyari niteliktedir; zorunlu değildir. Ancak özellikle tahliye ve kira alacağı gibi konularda mahkeme sürecine girmeden önce arabuluculuk, hem zaman hem de maliyet açısından ciddi avantaj sağlayabilir. Deneyimli bir arabulucu, tarafların uzlaşmasını sağlayarak uzun yargılama süreçlerini önleyebilir.",
  },
];

export default function KiraHukukuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Anasayfa", url: SITE_URL }, { name: "Hizmetler", url: `${SITE_URL}/hizmetler` }, { name: "Kira Hukuku", url: `${SITE_URL}/hizmetler/kira-hukuku` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }} />

      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Hizmetler", href: "/hizmetler" }, { label: "Kira Hukuku" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Kira Hukuku
          </h1>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            Güncelleme: Eylül 2026 · Okuma süresi: 6 dakika
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 prose-content">
            <h2>İstanbul Kira Hukuku Avukatlık Hizmetleri</h2>
            <p>
              Kira hukuku; kiracı ile kiraya veren arasındaki ilişkileri düzenleyen ve günlük hayatta en sık karşılaşılan hukuki uyuşmazlık alanlarından birini oluşturmaktadır. Konut kiraları, işyeri kiraları ve kira sözleşmelerinden doğan uyuşmazlıklarda İstanbul&apos;da hem kiracı hem de kiraya veren tarafına hukuki danışmanlık ve dava hizmeti sunulmaktadır.
            </p>
            <p>
              Kira hukukunda süre ve bildirim kuralları son derece önemlidir. Tahliye için gerekli bildirimin zamanında yapılmaması veya hatalı usulle yapılması, hak kaybına yol açabilir. Bu nedenle hem tahliye sürecine başlamadan önce hem de kira sözleşmesi imzalamadan önce hukuki destek almak, ileride çıkabilecek uyuşmazlıkların büyük bölümünü engeller.
            </p>

            <h2>Hizmet Alanları</h2>

            <h3>Tahliye Davaları</h3>
            <ul>
              <li>Kira bedelinin ödenmemesi nedeniyle tahliye (iki haklı ihtar)</li>
              <li>Kiralayanın konut veya işyeri ihtiyacı nedeniyle tahliye</li>
              <li>Yeniden inşa ve esaslı tadilat nedeniyle tahliye</li>
              <li>Tahliye taahhütnamesine dayalı tahliye</li>
              <li>Kiracının kiralananı kötü kullanması nedeniyle tahliye</li>
              <li>Kiracının alt kiraya vermesi ve devir yasağını ihlali</li>
            </ul>

            <h3>Kira Tespit ve Uyarlama Davaları</h3>
            <ul>
              <li>Kira bedeli tespit davası (konut ve işyeri)</li>
              <li>Aşırı ifa güçlüğü nedeniyle kira uyarlama davası</li>
              <li>Kira artış uyuşmazlıkları ve yasal sınır ihlalleri</li>
              <li>İşyeri kira bedelinin yeniden belirlenmesi</li>
            </ul>

            <h3>Kira Alacağı ve İcra Süreçleri</h3>
            <ul>
              <li>Ödenmemiş kira alacaklarının tahsili</li>
              <li>İcra takibi ve itirazın iptali davaları</li>
              <li>Depozito alacağına ilişkin uyuşmazlıklar</li>
              <li>Kira sözleşmesine aykırılıktan doğan tazminat talepleri</li>
            </ul>

            <h3>Kira Sözleşmesi Hizmetleri</h3>
            <ul>
              <li>Konut ve işyeri kira sözleşmesi hazırlanması</li>
              <li>Mevcut sözleşmenin hukuki inceleme ve risk analizi</li>
              <li>Tahliye taahhütnamesi düzenlenmesi</li>
              <li>Depozito ve yan giderler konusunda danışmanlık</li>
            </ul>

            <h2>Kira Uyuşmazlıklarında Arabuluculuk</h2>
            <p>
              Kira uyuşmazlıklarında dava öncesi arabuluculuk zorunlu olmamakla birlikte, özellikle tarafların gelecekte de ilişkisini sürdüreceği durumlarda (uzun vadeli kiracılık ilişkileri, aile mülkleri, ticari kiracılık) mahkeme öncesi çözüm önemli avantajlar sunar. Arabulucu ve avukat sıfatıyla her iki rolde de hizmet verilmektedir.
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
                  Kira Hukuku Danışmanlığı
                </p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--stone)", lineHeight: 1.3, marginBottom: "1.5rem" }}>
                  Kira uyuşmazlığınız için hızla iletişime geçin.
                </p>
                <Link href="/iletisim" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Randevu Al
                </Link>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "1rem" }}>
                  İlgili Hizmetler
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  <li><Link href="/hizmetler/arabuluculuk" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>Arabuluculuk</Link></li>
                  <li><Link href="/hizmetler/sozlesmeler-hukuku" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>Sözleşmeler Hukuku</Link></li>
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
