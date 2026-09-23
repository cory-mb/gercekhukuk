import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "KVKK Danışmanlığı İstanbul — Kişisel Veri Uyum ve Kurul Temsili",
  description:
    "İstanbul KVKK danışmanlığı. VERBİS kaydı, aydınlatma metni, veri işleme envanteri, ihlal bildirimi, Kurul temsili. Yeditepe Üniversitesi KVKK uyum deneyimi. Av. Kazım Onur Gerçek LL.M.",
  path: "/hizmetler/kvkk-danismanligi",
});

const FAQ_ITEMS = [
  {
    question: "Hangi şirketler VERBİS'e kayıt olmak zorundadır?",
    answer:
      "Yıllık çalışan sayısı 50'den fazla olan veya yıllık mali bilanço toplamı 25 milyon TL'yi aşan veri sorumlularının VERBİS'e kaydolması zorunludur. Küçük ölçekli işletmeler VERBİS'ten muaf tutulmuş olsa da kişisel veri işliyorlarsa aydınlatma yükümlülüğü başta olmak üzere KVKK kapsamındaki diğer yükümlülüklerden muaf değildir.",
  },
  {
    question: "Aydınlatma metni ile açık rıza arasındaki fark nedir?",
    answer:
      "Aydınlatma metni, kişisel verilerini işlediğiniz kişilere veri işlemenin amacı, kapsamı ve hakları hakkında bilgi verme yükümlülüğünüzü karşılar; her durumda gereklidir. Açık rıza ise yalnızca belirli işlemler için hukuki dayanak olarak kullanılır. KVKK'da 6 farklı işleme dayanağı bulunmakta olup açık rıza bunlardan sadece biridir. Açık rızanın her veri işleme için dayanak olduğunu düşünmek yaygın bir hatadır.",
  },
  {
    question: "Veri ihlali halinde ne yapılmalıdır?",
    answer:
      "Kişisel veri ihlali öğrenilmesinden itibaren en geç 72 saat içinde Kişisel Verileri Koruma Kurulu'na bildirilmelidir. İhlalden etkilenen kişilerin zarar görme ihtimali varsa bu kişiler de en kısa sürede bilgilendirilmelidir. Bildirimin gecikmesi veya yapılmaması idari para cezasına yol açabilir. Ayrıca 72 saat içinde bildirim yapılması mümkün değilse, gecikmenin gerekçesi de Kurul'a iletilmelidir.",
  },
  {
    question: "KVKK ihlali halinde ne kadar ceza uygulanır?",
    answer:
      "KVKK kapsamında Kurul tarafından verilebilecek idari para cezaları, ihlal türüne ve şirket büyüklüğüne göre farklılık göstermektedir. Aydınlatma yükümlülüğünün ihlali, veri güvenliğine ilişkin tedbirlerin alınmaması ve Kurul kararlarına uyulmaması ayrı ayrı yaptırımlara tabi tutulmaktadır. Bu cezalara itiraz idare mahkemelerinde yapılır.",
  },
  {
    question: "KVKK uyumu için nereden başlanmalıdır?",
    answer:
      "KVKK uyum sürecine veri envanteri çıkarmakla başlanır: şirketin hangi kişisel verileri, hangi amaçlarla, kimden topladığı ve bu verilerin nerede tutulduğu tespit edilir. Ardından VERBİS kaydı yapılır, aydınlatma metinleri hazırlanır ve veri işleme sözleşmeleri güncellenir. Son olarak iç politika ve prosedürler oluşturularak personel eğitimleri planlanır.",
  },
];

export default function KvkkDanismanligiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Anasayfa", url: SITE_URL }, { name: "Hizmetler", url: `${SITE_URL}/hizmetler` }, { name: "KVKK Danışmanlığı", url: `${SITE_URL}/hizmetler/kvkk-danismanligi` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }} />

      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Hizmetler", href: "/hizmetler" }, { label: "KVKK Danışmanlığı" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            KVKK Danışmanlığı
          </h1>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            Güncelleme: Eylül 2026 · Okuma süresi: 6 dakika
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 prose-content">
            <h2>İstanbul KVKK Uyum Danışmanlığı</h2>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu, kişisel veri işleyen tüm gerçek ve tüzel kişilere kapsamlı yükümlülükler getirmektedir. KVKK uyumu yalnızca bir defaya mahsus bir proje değil; veri işleme süreçlerinin sürekli olarak hukuka uygun yürütüldüğünün izlenmesini gerektiren bir süreçtir. İstanbul&apos;da kurumsal ve bireysel KVKK danışmanlığı hizmeti sunulmaktadır.
            </p>
            <p>
              Yeditepe Üniversitesi&apos;nin KVKK uyum sürecini hukuki açıdan yönetmiş bir avukat olarak, bu alandaki kurumsal deneyim pratikte karşılaşılan gerçek sorunlara dayanmaktadır. VERBİS kaydından veri ihlali bildirimine, Kurul soruşturmalarından bireysel başvuru yanıtlarına kadar sürecin tüm aşamalarında hizmet verilmektedir.
            </p>

            <h2>Hizmet Alanları</h2>

            <h3>Kurumsal KVKK Uyum Programı</h3>
            <ul>
              <li>Veri envanteri ve veri akış haritasının hazırlanması</li>
              <li>VERBİS kaydı ve periyodik güncelleme işlemleri</li>
              <li>Aydınlatma metni ve açık rıza beyanlarının hazırlanması</li>
              <li>Veri işleme sözleşmeleri ve üçüncü taraf değerlendirmesi</li>
              <li>İç KVKK politikası ve prosedürlerinin oluşturulması</li>
              <li>Personel KVKK farkındalık eğitimi</li>
            </ul>

            <h3>Kişisel Verileri Koruma Kurulu Süreçleri</h3>
            <ul>
              <li>Kurul şikayetlerine cevap verilmesi</li>
              <li>Kurul soruşturmalarında veri sorumlusu temsili</li>
              <li>İdari para cezalarına itiraz (idare mahkemesi)</li>
              <li>Veri ihlali bildirimi hazırlanması ve yönetimi</li>
            </ul>

            <h3>İlgili Kişi Talep Yönetimi</h3>
            <ul>
              <li>Erişim, düzeltme, silme ve itiraz taleplerine hukuka uygun yanıt süreçleri</li>
              <li>Talep yönetim süreç şemalarının oluşturulması</li>
              <li>Otomatik karar verme ve profilleme süreçlerinde hukuki danışmanlık</li>
            </ul>

            <h3>Bireysel KVKK Hakları</h3>
            <ul>
              <li>Veri sorumlusuna başvuru ve erişim hakkının kullanımı</li>
              <li>Silme, yok etme ve anonim hale getirme talepleri</li>
              <li>Kurul&apos;a şikayet başvurusu</li>
              <li>Hukuka aykırı veri işlemden kaynaklanan tazminat davaları</li>
            </ul>

            <h2>KVKK Uyumunda Risk Yönetimi</h2>
            <p>
              KVKK&apos;ya aykırılık; idari para cezasının ötesinde kurumsal itibar riski de taşımaktadır. Kurul kararları kamuoyuyla paylaşıldığından bir veri ihlalinin veya şikayet kararının kurum üzerindeki etkisi yalnızca mali değil, itibar boyutludur. Bu nedenle reaktif (sonradan düzeltme) yerine proaktif (önden uyum) bir yaklaşım benimsemek, uzun vadede çok daha az maliyet oluşturur. Uyum programı, hem yasal yükümlülükleri karşılar hem de veri güvenliği kültürünü kuruma kazandırır.
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
                  KVKK Uyum Danışmanlığı
                </p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--stone)", lineHeight: 1.3, marginBottom: "1.5rem" }}>
                  Kurumunuzun KVKK uyumunu değerlendirin.
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
                  <li><Link href="/hizmetler/ticaret-hukuku" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>Ticaret Hukuku</Link></li>
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
