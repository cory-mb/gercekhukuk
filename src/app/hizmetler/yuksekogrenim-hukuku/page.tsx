import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Yükseköğretim Hukuku — Vakıf Üniversitesi Uyuşmazlıkları",
  description:
    "Vakıf yükseköğretim kurumlarında öğrenci, akademik ve idari personel hukuku. Doçentlik davaları, disiplin soruşturmaları, özlük hakları. Av. Kazım Onur Gerçek LL.M.",
  path: "/hizmetler/yuksekogrenim-hukuku",
});

const FAQ_ITEMS = [
  {
    question: "Vakıf üniversitesi öğrencisi hangi hukuki yollara başvurabilir?",
    answer:
      "Vakıf üniversitesi öğrencileri; disiplin cezalarına itiraz, diploma iptali, sınav sonuçlarına itiraz, burs/indirim hakları ve kayıt silme işlemlerine karşı hem idare mahkemelerinde iptal davası hem de alternatif çözüm yollarına başvurabilir.",
  },
  {
    question: "Akademik personelin özlük hakları için nereye başvurulur?",
    answer:
      "Vakıf üniversitesinde çalışan akademik personel, iş sözleşmesinden doğan uyuşmazlıklarda iş mahkemelerine, idari işlemlerden doğan uyuşmazlıklarda ise idare mahkemelerine başvurabilir. Duruma göre arabuluculuk da etkili bir çözüm yolu olabilir.",
  },
  {
    question: "Doçentlik atanma talebinin reddi nasıl itiraz edilir?",
    answer:
      "Doçentlik unvanı alınmış olmasına rağmen kadro atamasının yapılmaması veya reddedilmesi ayrı bir idari işlem olup buna karşı da idare mahkemesinde iptal davası açılabilir. 60 günlük dava açma süresi kritik öneme sahiptir.",
  },
];

export default function YuksekogrenimHukukuPage() {
  const bc = breadcrumbSchema([
    { name: "Anasayfa", url: SITE_URL },
    { name: "Hizmetler", url: `${SITE_URL}/hizmetler` },
    { name: "Yükseköğretim Hukuku", url: `${SITE_URL}/hizmetler/yuksekogrenim-hukuku` },
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
              { label: "Yükseköğretim Hukuku" },
            ]}
          />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Yükseköğretim Hukuku
          </h1>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            Güncelleme: Eylül 2026 · Okuma süresi: 6 dakika
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 prose-content">
            <h2>Yükseköğretim Hukuku Nedir?</h2>
            <p>
              Yükseköğretim hukuku; üniversiteler, yüksekokullar ve diğer yükseköğretim kurumlarının yönetimi, bu kurumlar ile öğrenci, akademik personel ve idari personel arasındaki ilişkileri düzenleyen hukuk dalıdır. Türkiye&apos;de yükseköğretim kurumları devlet ve vakıf üniversiteleri olarak ikiye ayrılmakta; her iki türdeki kurumların farklı hukuki rejimlere tabi olması, uyuşmazlıkların çözümünü karmaşık hale getirmektedir.
            </p>

            <h2>Vakıf Yükseköğretim Kurumlarında Uyuşmazlıklar</h2>
            <p>
              Av. Kazım Onur Gerçek LL.M, özellikle vakıf yükseköğretim kurumlarındaki uyuşmazlıklarda uzmanlaşmıştır. Yeditepe Üniversitesi&apos;nde 6 yıl boyunca kıdemli avukat olarak görev yapmış; yüzlerce dava ve soruşturmayı yönetmiş, kurumun KVKK uyum sürecini yürütmüştür.
            </p>

            <h3>Öğrenci Uyuşmazlıkları</h3>
            <ul>
              <li>Disiplin soruşturmaları ve cezalarına itiraz</li>
              <li>Diploma iptali ve geçersizlik işlemlerine karşı dava</li>
              <li>Sınav sonuçlarına ve not değerlendirmesine itiraz</li>
              <li>Burs, indirim ve kayıt hakları uyuşmazlıkları</li>
              <li>Kayıt silme ve ilişik kesme işlemlerine karşı hukuki süreç</li>
            </ul>

            <h3>Akademik Personel Uyuşmazlıkları</h3>
            <ul>
              <li>Doçentlik iptal davaları</li>
              <li>Akademik atanma ve yükseltme uyuşmazlıkları</li>
              <li>İş sözleşmesi feshi ve tazminat davaları</li>
              <li>Disiplin soruşturmaları</li>
              <li>Özlük hakları uyuşmazlıkları</li>
            </ul>

            <h3>İdari Personel Uyuşmazlıkları</h3>
            <ul>
              <li>İş akdi feshi ve kıdem/ihbar tazminatı</li>
              <li>Mobing ve haksız muamele iddiaları</li>
              <li>Ücret ve sosyal haklar uyuşmazlıkları</li>
            </ul>

            <h2>Yükseköğretimde Kurumsal Hukuki Danışmanlık</h2>
            <p>
              Yükseköğretim kurumlarına da kurumsal hukuki danışmanlık verilmektedir:
            </p>
            <ul>
              <li>İç mevzuat hazırlanması ve güncellenmesi</li>
              <li>KVKK uyum sürecinin yönetimi</li>
              <li>Kurumsal sözleşmeler</li>
              <li>Personel ve öğrenci eğitimleri</li>
            </ul>

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
                  Ücretsiz Ön Görüşme
                </p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--stone)", lineHeight: 1.3, marginBottom: "1.5rem" }}>
                  Yükseköğretim hukuku kapsamındaki sorununuzu değerlendirin.
                </p>
                <Link href="/iletisim" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  İletişime Geç
                </Link>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "1rem" }}>
                  Bağlantılı Hizmetler
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {[
                    { href: "/hizmetler/docentlik-iptal-davalari", label: "Doçentlik İptal Davaları" },
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
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
