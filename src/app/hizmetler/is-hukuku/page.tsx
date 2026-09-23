import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "İş Hukuku Avukatı İstanbul — İşçi ve İşveren Davaları",
  description:
    "İstanbul iş hukuku avukatı. Kıdem tazminatı, ihbar tazminatı, işe iade, mobbing, iş kazası davaları. İşveren temsili ve zorunlu arabuluculuk. Av. Kazım Onur Gerçek LL.M — Kadıköy.",
  path: "/hizmetler/is-hukuku",
});

const FAQ_ITEMS = [
  {
    question: "Kıdem tazminatı hakkı ne zaman doğar?",
    answer:
      "Kıdem tazminatına hak kazanmak için işçinin en az 1 yıl çalışmış olması ve iş sözleşmesinin belirli şekillerde sona ermesi gerekir. İşverenin haksız feshi, emeklilik, askerlik, evlilik (kadın işçi için) veya ölüm hallerinde kıdem tazminatı hakkı doğar. İşçinin istifa etmesi kural olarak kıdem tazminatı hakkını ortadan kaldırır; ancak haklı nedenle istifa halinde bu hak korunur.",
  },
  {
    question: "İşe iade davası açabilmek için ne gerekir?",
    answer:
      "30 veya daha fazla işçi çalıştıran işyerlerinde en az 6 ay çalışmış işçiler, belirsiz süreli iş sözleşmesiyle çalışıyorlarsa ve iş güvencesi kapsamındalarsa feshe itiraz edebilir. Fesih tebliğinden itibaren 1 ay içinde arabulucuya başvurulması zorunludur. Arabuluculukta anlaşma sağlanamazsa 2 hafta içinde iş mahkemesinde dava açılabilir.",
  },
  {
    question: "İş hukuku davalarında arabuluculuk zorunlu mu?",
    answer:
      "Evet, 2018 yılından itibaren iş hukukundan doğan uyuşmazlıklarda dava açılmadan önce arabulucuya başvurulması dava şartı olarak getirilmiştir. Arabuluculuğa başvurulmadan açılan dava, dava şartı yokluğu nedeniyle reddedilir. Süreçte avukat desteği hem hak kayıplarını önler hem de anlaşma ihtimalini artırır.",
  },
  {
    question: "Mobbing (psikolojik taciz) davası nasıl açılır?",
    answer:
      "Mobbing davası, işçinin maruz kaldığı sistematik psikolojik baskı, aşağılama veya dışlama eylemlerinin belgelenmesine dayanır. E-postalar, tanık ifadeleri, iş yeri kayıtları delil olarak kullanılabilir. İşçi, iş sözleşmesini haklı nedenle feshedip kıdem tazminatı talep edebilir; ayrıca maddi ve manevi tazminat davası açabilir.",
  },
  {
    question: "İşveren fesihten önce hangi usul kurallarına uymak zorundadır?",
    answer:
      "İş güvencesi kapsamındaki işçilerin iş sözleşmesi feshedilmeden önce savunma alınması zorunludur. Performans veya davranış gerekçesiyle fesihte işçiye savunma hakkı tanınmadan yapılan fesih geçersiz sayılır. İşverenin bu usul kurallarına uymaması, işe iade veya tazminat yükümlülüğüne yol açar.",
  },
];

export default function IsHukukuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Anasayfa", url: SITE_URL }, { name: "Hizmetler", url: `${SITE_URL}/hizmetler` }, { name: "İş Hukuku", url: `${SITE_URL}/hizmetler/is-hukuku` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }} />

      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Hizmetler", href: "/hizmetler" }, { label: "İş Hukuku" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            İş Hukuku
          </h1>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            Güncelleme: Eylül 2026 · Okuma süresi: 6 dakika
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 prose-content">
            <h2>İstanbul İş Hukuku Avukatlık Hizmetleri</h2>
            <p>
              İş hukuku; işçi ile işveren arasındaki hukuki ilişkileri, iş sözleşmesinin kurulmasından sona ermesine, ücret alacaklarından tazminat davalarına kadar geniş bir alanı kapsar. Hem işçilerin hak kayıplarını önlemek hem de işverenlerin mevzuata uygun hareket etmesini sağlamak için İstanbul&apos;da bireysel ve kurumsal danışmanlık hizmeti sunulmaktadır.
            </p>
            <p>
              Yeditepe Üniversitesi&apos;nde kıdemli avukat olarak edinilen kurumsal işveren deneyimi; iş sözleşmesi hazırlamaktan fesih süreçlerini hukuka uygun yönetmeye, toplu iş uyuşmazlıklarından SGK sorunlarına kadar kapsamlı bir birikim sağlamıştır. Bu birikim, hem işçi hem de işveren tarafında somut çözümler üretmektedir.
            </p>

            <h2>Hizmet Alanları</h2>

            <h3>İşçi Hakları Davaları</h3>
            <ul>
              <li>Kıdem ve ihbar tazminatı davaları</li>
              <li>Haksız fesih ve işe iade davaları</li>
              <li>Fazla mesai ve ücret alacakları</li>
              <li>Yıllık izin ücreti alacakları</li>
              <li>Mobbing / psikolojik taciz davaları</li>
              <li>İş kazası ve meslek hastalığı tazminatı</li>
              <li>Eşit işlem ilkesinin ihlalinden doğan tazminat talepleri</li>
            </ul>

            <h3>İşveren Temsili ve Danışmanlığı</h3>
            <ul>
              <li>İş sözleşmesi ve iç yönetmelik hazırlanması</li>
              <li>Fesih süreçlerinin hukuka uygun yönetimi</li>
              <li>Performans ve disiplin prosedürlerinin kurulması</li>
              <li>Savunma alınması ve soruşturma süreçleri</li>
              <li>Toplu iş hukuku danışmanlığı</li>
            </ul>

            <h3>SGK ve Resmi Kurum Uyuşmazlıkları</h3>
            <ul>
              <li>SGK idari para cezalarına itiraz</li>
              <li>İşkur uyuşmazlıkları ve desteklerden yararlanma</li>
              <li>Kayıt dışı çalışma ve sahte sigortalılık iddiaları</li>
              <li>İş müfettişliği inceleme süreçleri</li>
            </ul>

            <h3>İş Hukukunda Arabuluculuk</h3>
            <p>
              İş uyuşmazlıklarında zorunlu arabuluculuk süreci 2018&apos;den itibaren tüm kıdem, ihbar, işe iade ve ücret alacağı davalarının ön şartı haline gelmiştir. Arabulucu sıfatıyla ve avukat olarak 500&apos;ü aşkın dosyada anlaşma sağlanan deneyimle, bu süreç hem tarafsız hem de stratejik biçimde yönetilmektedir.
            </p>

            <h2>Dava Öncesi: Hukuki Risk Değerlendirmesi</h2>
            <p>
              İş hukuku uyuşmazlıklarında en kritik aşama çoğunlukla dava açılmadan öncedir. İşçi açısından bakıldığında; fesih tebligatının alınması, arabuluculuk başvurusu için sürelerin takibi ve delil toplanması erken aşamada yapılmalıdır. İşveren açısından ise fesih gerekçesinin hukuki dayanağı, savunma sürecinin usulü ve belgeleme şekli sonradan açılacak davada belirleyici rol oynar. Bu nedenle tarafların fesih öncesi veya hemen sonrasında avukattan görüş alması, zaman ve maliyet tasarrufu sağlar.
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
                  İş Hukuku Danışmanlığı
                </p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--stone)", lineHeight: 1.3, marginBottom: "1.5rem" }}>
                  İş hukuku konusunda ücretsiz ön görüşme için iletişime geçin.
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
                  <li><Link href="/hizmetler/idare-hukuku" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>İdare Hukuku</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
