import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Doçentlik İptal Davası 2026 — Başvuru Reddi ve Hukuki Süreç",
  description:
    "Doçentlik başvurusunun reddi kararına karşı iptal davası nasıl açılır? Süreç, süreler ve emsal kararlar. Av. Kazım Onur Gerçek LL.M ile ücretsiz ön görüşme.",
  path: "/hizmetler/docentlik-iptal-davalari",
});

const FAQ_ITEMS = [
  {
    question: "Doçentlik başvurusu reddedilirse ne yapılabilir?",
    answer:
      "Doçentlik başvurusunun reddi kararı, üniversitelerarası kurulun idari bir işlemidir. Bu karara karşı 60 gün içinde idare mahkemesinde iptal davası açılabilir. Ret kararının hukuka aykırı olduğu tespit edilirse iptal kararıyla birlikte yeniden değerlendirme yapılması sağlanabilir.",
  },
  {
    question: "Doçentlik iptal davası hangi mahkemede açılır?",
    answer:
      "Üniversitelerarası Kurul (ÜAK) Ankara'da bulunduğu için doçentlik iptal davaları Ankara İdare Mahkemeleri'nde açılır. Yetki bakımından Ankara idare mahkemeleri görevlidir.",
  },
  {
    question: "Doçentlik iptal davası için dava açma süresi ne kadar?",
    answer:
      "İdari işlemin tebliğinden itibaren 60 günlük dava açma süresi mevcuttur. Bu süre hak düşürücü süre niteliğinde olduğundan kesinlikle kaçırılmamalıdır. Ret kararını alan akademisyenlerin en kısa sürede avukata danışması önerilir.",
  },
  {
    question: "Doçentlik başvurusu hangi sebeplerle reddedilir?",
    answer:
      "Yayın kriterlerini karşılamamak, bilimsel araştırma ve yayın etiği ihlalleri, jüri değerlendirmesinde yetersizlik kararı ve minimum başvuru şartlarının sağlanamaması başlıca red sebepleridir. Her ret gerekçesi farklı hukuki çözümler gerektirir.",
  },
  {
    question: "Doçentlik iptal davası ne kadar sürer?",
    answer:
      "İdare mahkemelerindeki yoğunluğa göre değişmekle birlikte, genellikle 1-3 yıl arasında sonuçlanmaktadır. Yürütmeyi durdurma kararı talep edilmesi halinde bu süreçte akademik faaliyetlerin sürdürülmesi mümkün olabilir.",
  },
];

export default function DocentlikIptalPage() {
  const bc = breadcrumbSchema([
    { name: "Anasayfa", url: SITE_URL },
    { name: "Hizmetler", url: `${SITE_URL}/hizmetler` },
    { name: "Doçentlik İptal Davaları", url: `${SITE_URL}/hizmetler/docentlik-iptal-davalari` },
  ]);
  const faq = faqSchema(FAQ_ITEMS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb
            items={[
              { label: "Hizmetler", href: "/hizmetler" },
              { label: "Doçentlik İptal Davaları" },
            ]}
          />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Doçentlik İptal Davası
          </h1>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            Güncelleme: Eylül 2026 · Okuma süresi: 8 dakika
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 prose-content">
            <h2>Doçentlik Başvurusu Reddi Nedir?</h2>
            <p>
              Doçentlik unvanı, Üniversitelerarası Kurul (ÜAK) tarafından yürütülen bir değerlendirme süreci sonucunda verilmektedir. Bu süreçte başvurunun reddedilmesi, adayın akademik kariyerinde ciddi bir engel oluşturmaktadır. Ancak ret kararları her zaman hukuka uygun olmayabilir; bilimsel değerlendirme sürecindeki hatalar, usul ihlalleri veya hatalı uygulamalar sonucu verilen ret kararları, idare mahkemelerinde iptal davası yoluyla hukuki denetim altına alınabilir.
            </p>

            <h2>Doçentlik Başvurusunun Reddedilme Sebepleri</h2>
            <p>Doçentlik başvurusunun reddedilmesinde başlıca sebepler şunlardır:</p>
            <ul>
              <li><strong>Yayın kriterleri eksikliği:</strong> Asgari yayın şartlarının karşılanamaması</li>
              <li><strong>Bilimsel etik ihlali:</strong> İntihal, çarpıtma veya uydurma iddiasıyla olumsuz jüri raporu</li>
              <li><strong>Jüri değerlendirmesi:</strong> Çoğunluk jürisinin olumsuz sonuç vermesi</li>
              <li><strong>Başvuru kriterleri değişikliği:</strong> YÖK kriterleri değiştiğinde önceki başvuruların etkilenmesi</li>
            </ul>

            <h2>Doçentlik İptal Davası Nasıl Açılır?</h2>
            <p>
              Doçentlik başvurusunun reddi kararı, ÜAK&apos;ın idari bir işlemi niteliğindedir. Bu işleme karşı idare mahkemesinde iptal davası açılabilir. Dava açma süreci şu adımlardan oluşur:
            </p>
            <ol>
              <li><strong>Ret kararının tebellüğü:</strong> Kararın yazılı olarak alınması ya da idarenin sessiz kalması</li>
              <li><strong>60 günlük dava açma süresi:</strong> Tebliğden itibaren 60 gün içinde dava açılması zorunludur</li>
              <li><strong>Ankara İdare Mahkemesi&apos;nde dava:</strong> ÜAK&apos;ın bulunduğu yer mahkemesi olan Ankara İdare Mahkemesi yetkilidir</li>
              <li><strong>Yürütmeyi durdurma talebi:</strong> Tedbir niteliğinde yürütmenin durdurulması talep edilebilir</li>
              <li><strong>Esasa ilişkin karar:</strong> Mahkeme delilleri inceleyerek iptal veya ret kararı verir</li>
            </ol>

            <h2>Bilimsel Araştırma ve Yayın Etiği Nedeniyle Red</h2>
            <p>
              Doçentlik sürecinde en tartışmalı red gerekçelerinden biri bilimsel araştırma ve yayın etiğine aykırılık iddiasıdır. Doçentlik Yönetmeliği&apos;nin 6. maddesi uyarınca, etiğe aykırı eylemler değerlendirme sürecini doğrudan etkiler. Bu süreçlerde avukat temsili kritik önem taşır; zira:
            </p>
            <ul>
              <li>Jüri raporlarındaki hukuki hatalar tespit edilebilir</li>
              <li>Usul ihlalleri gerekçesiyle iptal kararı alınabilir</li>
              <li>Yeniden değerlendirme yaptırılabilir</li>
            </ul>

            <h2>2023 Sonrası Kriter Değişiklikleri</h2>
            <p>
              Yükseköğretim Genel Kurulu&apos;nun 15.06.2023 tarihli ve 2023.10.183 sayılı kararıyla doçentlik başvuru kriterleri değiştirilmiştir. Bu değişikliklerden önce başvuruda bulunmuş ya da süreçleri devam eden adayların hukuki durumları farklılık gösterebilir. Mevcut durumunuz için hukuki danışmanlık almanız önerilir.
            </p>

            <h2>Doçentlik Davalarında Neden Uzman Avukat?</h2>
            <p>
              Doçentlik iptal davaları, hem idare hukukunu hem de yükseköğretim mevzuatını bütünlüklü biçimde gerektiren nitelikli davalardır. Av. Kazım Onur Gerçek LL.M, yükseköğretim hukuku alanındaki geniş kurumsal deneyimi ile bu davalarda müvekkillerine etkin hukuki destek sunmaktadır.
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
                  Hukuki Danışmanlık
                </p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--stone)", lineHeight: 1.3, marginBottom: "1.5rem" }}>
                  60 günlük dava süresini kaçırmadan iletişime geçin.
                </p>
                <Link href="/iletisim" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Ücretsiz Ön Görüşme
                </Link>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "1rem" }}>
                  İlgili Hizmetler
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {[
                    { href: "/hizmetler/yuksekogrenim-hukuku", label: "Yükseköğretim Hukuku" },
                    { href: "/hizmetler/is-hukuku", label: "İş Hukuku" },
                    { href: "/hizmetler/idare-hukuku", label: "İdare Hukuku" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "1rem" }}>
                  İlgili Yazılar
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {[
                    {
                      href: "/yazilar/docentlik-basvurusunun-reddi-iptali-islemlerine-karsi-acilacak-iptal-davalari",
                      label: "Doçentlik Başvurusu Reddi İptal Davaları",
                    },
                    {
                      href: "/yazilar/docentlik-basvurularinda-bilimsel-arastirma-ve-yayin-etigi",
                      label: "Doçentlikte Bilimsel Araştırma Etiği",
                    },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
