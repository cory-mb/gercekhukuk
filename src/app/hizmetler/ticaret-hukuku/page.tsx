import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Ticaret Hukuku Avukatı İstanbul — Şirket ve Ticari Uyuşmazlık",
  description:
    "İstanbul ticaret hukuku avukatı. Şirket kuruluşu, ortaklık uyuşmazlıkları, ticari sözleşmeler, haksız rekabet, alacak tahsili. Av. Kazım Onur Gerçek LL.M — Kadıköy.",
  path: "/hizmetler/ticaret-hukuku",
});

const FAQ_ITEMS = [
  {
    question: "Ticari uyuşmazlıklarda dava açmadan önce arabuluculuk zorunlu mu?",
    answer:
      "Evet. 2019 yılından itibaren ticaret mahkemelerinin görev alanına giren para alacağı ve tazminat talepleri içeren uyuşmazlıklarda dava açılmadan önce arabulucuya başvurmak zorunludur. Arabuluculukta anlaşma sağlanamazsa dava yoluna gidilebilir. Bu süreç doğru yönetildiğinde hem zaman hem de maliyet açısından avantaj sağlar.",
  },
  {
    question: "Şirket ortakları arasındaki anlaşmazlıklarda ne yapılabilir?",
    answer:
      "Ortaklık anlaşmazlıklarında önce şirket ana sözleşmesi ve varsa ortaklar arası sözleşme incelenir. Uzlaşı sağlanamazsa; ortaklıktan çıkarma davası, kar payı alacağı davası, genel kurul kararının iptali veya ortaklığın feshi yollarına başvurulabilir. Erken hukuki danışmanlık çoğunlukla dava sürecini önler.",
  },
  {
    question: "Haksız rekabet halinde hangi hukuki yollara başvurulabilir?",
    answer:
      "Haksız rekabette tespit davası, men davası, maddi ve manevi tazminat davası açılabilir; ayrıca ihtiyati tedbir talep edilebilir. TTK kapsamında rakibin yanıltıcı reklamları, ticari sırların ifşası veya müşteri transferine yönelik hileli davranışlar haksız rekabet oluşturur.",
  },
  {
    question: "Ticari sözleşmelerde avukat desteği ne zaman alınmalıdır?",
    answer:
      "İmzadan önce. Özellikle yüksek bedelli işlemler, uzun vadeli taahhütler veya tek taraflı hazırlanmış sözleşmelerde imza öncesi hukuki inceleme, ileride doğabilecek davaların büyük bölümünü engeller. Sözleşme imzalandıktan sonra yapılabilecek düzeltmeler çok daha sınırlı kalır.",
  },
  {
    question: "Ticari alacaklarım için önce dava mı açmalıyım, icra mı başlatmalıyım?",
    answer:
      "Karşı tarafın borcunu kabul edip etmediğine ve elinizde belge bulunup bulunmadığına göre yol belirlenir. İmzalı sözleşme veya bono/çek gibi kambiyo senedi varsa doğrudan icra takibi başlatılabilir. Belge yoksa veya borç tartışmalıysa önce dava açarak ilamı elde etmek gerekir.",
  },
];

export default function TicaretHukukuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Anasayfa", url: SITE_URL }, { name: "Hizmetler", url: `${SITE_URL}/hizmetler` }, { name: "Ticaret Hukuku", url: `${SITE_URL}/hizmetler/ticaret-hukuku` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }} />

      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Hizmetler", href: "/hizmetler" }, { label: "Ticaret Hukuku" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Ticaret Hukuku
          </h1>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            Güncelleme: Eylül 2026 · Okuma süresi: 6 dakika
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 prose-content">
            <h2>İstanbul Ticaret Hukuku Avukatlık Hizmetleri</h2>
            <p>
              Ticaret hukuku; şirketlerin kuruluşundan tasfiyesine, ticari sözleşmelerden haksız rekabet davalarına, ortaklık yapısından kambiyo senetlerine kadar ticari hayatın tüm hukuki boyutlarını kapsar. İstanbul&apos;da faaliyet gösteren bireysel tacirler ve kurumsal şirketler için danışmanlık ve dava hizmeti sunulmaktadır.
            </p>
            <p>
              Ankara döneminde enerji, inşaat, maden ve halı sektöründeki büyük şirketlere ticaret hukuku danışmanlığı yapılmış; Yeditepe Üniversitesi&apos;nde kıdemli avukat olarak 1000&apos;i aşkın sözleşme hazırlanmış ve incelenmiştir. Bu birikim, hem önleyici hukuk danışmanlığında hem de ticari uyuşmazlık çözümünde somut sonuçlar ortaya koymaktadır.
            </p>

            <h2>Hizmet Alanları</h2>

            <h3>Şirketler Hukuku</h3>
            <ul>
              <li>Anonim ve limited şirket kuruluşu, ana sözleşme hazırlanması</li>
              <li>Şirket birleşme, bölünme ve devralma süreçleri</li>
              <li>Sermaye artırımı ve azaltımı işlemleri</li>
              <li>Genel kurul ve yönetim kurulu kararlarının düzenlenmesi</li>
              <li>Genel kurul kararı iptal ve butlan davaları</li>
              <li>Ortaklar arası anlaşmalar ve hisse devri sözleşmeleri</li>
            </ul>

            <h3>Ticari Sözleşmeler</h3>
            <ul>
              <li>Satış, tedarik, dağıtım ve bayilik sözleşmeleri</li>
              <li>Franchise, lisans ve acentelik sözleşmeleri</li>
              <li>Gizlilik (NDA) ve rekabet yasağı sözleşmeleri</li>
              <li>Ortak girişim (joint venture) sözleşmeleri</li>
              <li>Mevcut sözleşmelerin hukuki risk analizi ve revizyonu</li>
            </ul>

            <h3>Ticari Uyuşmazlıklar ve Alacak Tahsili</h3>
            <ul>
              <li>Ticaret mahkemelerinde alacak ve tazminat davaları</li>
              <li>İtirazın iptali ve menfi tespit davaları</li>
              <li>Ortaklık anlaşmazlıkları ve şirketten çıkarma davaları</li>
              <li>Kambiyo senetlerinden (çek, bono, poliçe) doğan uyuşmazlıklar</li>
              <li>Ticari arabuluculuk (dava şartı ve ihtiyari)</li>
            </ul>

            <h3>Haksız Rekabet</h3>
            <ul>
              <li>Yanıltıcı reklam ve ticari itibar zedeleme davları</li>
              <li>Ticari sırların ifşası ve müşteri transferine yönelik hileli eylemler</li>
              <li>İhtiyati tedbir talepleri ve men davaları</li>
              <li>Maddi ve manevi tazminat talepleri</li>
            </ul>

            <h3>Kurumsal Danışmanlık</h3>
            <ul>
              <li>Şirket iç mevzuatının (yönetmelik, prosedür) hazırlanması</li>
              <li>Mevzuata uyum (KVKK, iş hukuku, vergi) danışmanlığı</li>
              <li>Ticaret sicili ve ilgili kurum süreçlerinin yürütülmesi</li>
            </ul>

            <h2>Önleyici Hukuk Yaklaşımı</h2>
            <p>
              Ticaret hukukunda avukatın en değerli katkısı çoğunlukla dava salonunda değil, dava başlamadan önce ortaya çıkar. Sözleşmelerin imzalanmadan incelenmesi, şirket belgelerinin mevzuata uygun hazırlanması ve ortaklık yapısının doğru kurulması; ileride çıkabilecek davaların büyük bölümünü engeller. Bu nedenle kuruluş ve büyüme süreçlerinde erken danışmanlık almak, uzun vadede hem zaman hem de maliyet tasarrufu sağlar.
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
                  Ticari Hukuki Danışmanlık
                </p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--stone)", lineHeight: 1.3, marginBottom: "1.5rem" }}>
                  Şirketinizin hukuki süreçlerini güvenle yönetin.
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
                  <li><Link href="/hizmetler/sozlesmeler-hukuku" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>Sözleşmeler Hukuku</Link></li>
                  <li><Link href="/hizmetler/arabuluculuk" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>Arabuluculuk</Link></li>
                  <li><Link href="/hizmetler/kvkk-danismanligi" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>KVKK Danışmanlığı</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
