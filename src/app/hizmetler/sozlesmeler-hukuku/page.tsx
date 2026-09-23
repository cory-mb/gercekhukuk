import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Sözleşme Avukatı İstanbul — Sözleşme Hazırlama, İnceleme ve Uyuşmazlık",
  description:
    "İstanbul sözleşme avukatı. Ticari sözleşme hazırlama, hukuki inceleme, müzakere desteği ve sözleşme ihlali davaları. +1000 sözleşme deneyimi. Av. Kazım Onur Gerçek LL.M.",
  path: "/hizmetler/sozlesmeler-hukuku",
});

const FAQ_ITEMS = [
  {
    question: "Sözleşme incelemesi neden önemlidir?",
    answer:
      "İmzalanmadan önce avukat tarafından incelenen sözleşmeler, ileride oluşabilecek uyuşmazlıkları büyük ölçüde önler. Özellikle yüksek bedelli ticari sözleşmelerde, tek taraflı hazırlanmış sözleşmelerde ve uzun süreli taahhütler içeren sözleşmelerde hukuki inceleme kritik öneme sahiptir. İmzalanmış sözleşmede yapılabilecek düzeltmeler çok daha sınırlı kalır.",
  },
  {
    question: "Hangi tür sözleşmeler hazırlanıyor?",
    answer:
      "Hizmet sözleşmeleri, satış ve tedarik sözleşmeleri, kira sözleşmeleri, iş sözleşmeleri, ortaklık ve hisse devir sözleşmeleri, gizlilik (NDA) sözleşmeleri, franchise ve lisans sözleşmeleri, taşeronluk ve alt işverenlik sözleşmeleri ve daha pek çok ticari sözleşme türü hazırlanmakta ve incelenmektedir.",
  },
  {
    question: "Sözleşme müzakerelerinde avukat desteği ne sağlar?",
    answer:
      "Avukat, karşı tarafın önerdiği sözleşme maddelerindeki hukuki riskleri tespit eder; aleyhte hükümlerin değiştirilmesi ya da sözleşmeye koruyucu düzenlemelerin eklenmesi için gerekçeli önerilerde bulunur. Müzakere sürecinde tarafların hukuki pozisyonunu güçlendirir ve karşı tarafın dayatmaya çalıştığı standart sözleşme şartlarına itiraz zeminini hazırlar.",
  },
  {
    question: "Sözleşme ihlali halinde ne yapılabilir?",
    answer:
      "Sözleşmeyi ihlal eden taraftan önce noter kanalıyla ihtar çekilmesi, çoğu durumda ilk adım olmalıdır. İhtar sonuç vermezse; ifa davası (borcun yerine getirilmesi), tazminat davası, sözleşmeden dönme ve cezai şart talepleri gündeme gelir. Bazı durumlarda ihtiyati tedbir veya ihtiyati haciz talep edilmesi de süreci hızlandırır.",
  },
  {
    question: "Cezai şart maddesi geçerli midir?",
    answer:
      "Cezai şart hükümleri kural olarak geçerlidir ve mahkemece indirilmesi istisnai durumlarda mümkündür. Ancak orantısız yüksek cezai şart maddelerine itiraz yoluyla indirim talep edilebilir. Sözleşme hazırlanırken cezai şart miktarının makul belirlenmesi, ileride mahkeme indirimiyle erozyona uğramasını önler.",
  },
];

export default function SozlesmelerHukukuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Anasayfa", url: SITE_URL }, { name: "Hizmetler", url: `${SITE_URL}/hizmetler` }, { name: "Sözleşmeler Hukuku", url: `${SITE_URL}/hizmetler/sozlesmeler-hukuku` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }} />

      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Hizmetler", href: "/hizmetler" }, { label: "Sözleşmeler Hukuku" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Sözleşmeler Hukuku
          </h1>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            Güncelleme: Eylül 2026 · Okuma süresi: 5 dakika
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 prose-content">
            <h2>İstanbul Sözleşme Hukuku Avukatlık Hizmetleri</h2>
            <p>
              Sözleşmeler, bireyler ve şirketler arasındaki hukuki ilişkilerin temelini oluşturur. Doğru hazırlanmış bir sözleşme; tarafların haklarını korur, ileride çıkabilecek uyuşmazlıkları önler ve anlaşmazlık çıkması halinde çözüm yollarını önceden belirler. İstanbul&apos;da sözleşme hazırlama, inceleme, müzakere ve ihlal davalarında kapsamlı hukuki hizmet sunulmaktadır.
            </p>
            <p>
              Yeditepe Üniversitesi&apos;nde kıdemli avukat olarak 1000&apos;i aşkın sözleşme hazırlanmış ve incelenmiştir. Bu birikim; ticari, kurumsal ve bireysel sözleşmelerdeki standart risk noktalarının hızla tespit edilmesini ve müvekkil lehine çözüm üretilmesini mümkün kılmaktadır.
            </p>

            <h2>Hizmet Alanları</h2>

            <h3>Sözleşme Hazırlama</h3>
            <ul>
              <li>Ticari sözleşmeler: satış, hizmet, tedarik, dağıtım</li>
              <li>Kurumsal sözleşmeler: iş, danışmanlık, alt işverenlik</li>
              <li>Gizlilik (NDA) ve rekabet yasağı sözleşmeleri</li>
              <li>Ortaklık ve hisse devir sözleşmeleri</li>
              <li>Franchise ve lisans sözleşmeleri</li>
              <li>Kira sözleşmeleri ve tahliye taahhütnameleri</li>
            </ul>

            <h3>Sözleşme İnceleme ve Risk Analizi</h3>
            <ul>
              <li>Mevcut sözleşmelerin kapsamlı hukuki risk analizi</li>
              <li>Aleyhte maddelerin tespiti ve revizyon önerileri</li>
              <li>Standart (hazır) sözleşmelerde gizli risk noktalarının belirlenmesi</li>
              <li>Tek taraflı hazırlanmış sözleşmelerin dengeli hale getirilmesi</li>
            </ul>

            <h3>Sözleşme Müzakeresi</h3>
            <ul>
              <li>Karşı tarafla müzakere sürecinde hukuki destek</li>
              <li>Sözleşme değişikliği (addendum) ve ek protokol hazırlama</li>
              <li>Çerçeve sözleşmeler ve sipariş formlarının uyumlaştırılması</li>
            </ul>

            <h3>Sözleşme İhlali Davaları</h3>
            <ul>
              <li>Tazminat ve ifa talepli davalar</li>
              <li>Sözleşmeden dönme ve fesih</li>
              <li>Cezai şart uyuşmazlıkları</li>
              <li>Sözleşme değişikliği (uyarlama) davaları</li>
              <li>İhtiyati tedbir ve ihtiyati haciz talepleri</li>
            </ul>

            <h2>İmzadan Önce: Sözleşme Denetiminin Değeri</h2>
            <p>
              Sözleşme hukukunda en kritik an imzalanmadan öncedir. Taraflarca benimsenen "standart sözleşme" ya da "şirket avukatı hazırladı" gibi ifadeler, diğer tarafı koruyucu incelemeleri atlatmak için kullanılan yaygın bir yaklaşımdır. Tek taraflı hazırlanmış her sözleşme, karşı tarafın çıkarını ön planda tutacak şekilde düzenlenmiştir. Bu nedenle imzalamadan önce alınan kısa süreli hukuki görüş, ileride açılabilecek davaların büyük bölümünü önler.
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
                  Sözleşme İncelemesi
                </p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--stone)", lineHeight: 1.3, marginBottom: "1.5rem" }}>
                  Sözleşmenizi imzalamadan önce hukuki inceleme yaptırın.
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
                  <li><Link href="/hizmetler/ticaret-hukuku" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>Ticaret Hukuku</Link></li>
                  <li><Link href="/hizmetler/is-hukuku" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>İş Hukuku</Link></li>
                  <li><Link href="/hizmetler/kira-hukuku" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>Kira Hukuku</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
