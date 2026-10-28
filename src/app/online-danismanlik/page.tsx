import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { BOOKING_URL, PAYMENT_URL, faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Online Danışmanlık",
  description:
    "Av. Kazım Onur Gerçek ile video görüşme yoluyla online hukuki danışmanlık: görüşme talebi, randevu, TBB onaylı ödeme altyapısı ve görüşme adımları.",
  path: "/online-danismanlik",
});

const ADIMLAR = [
  { baslik: "Görüşme talebi", metin: "İletişim formunda konu olarak “Online görüşme”yi seçin ve konunuzu kısaca yazın." },
  { baslik: "Randevu ve ücret", metin: "Uygun saatler ve görüşme ücreti size e-postayla bildirilir. Ücret, Avukatlık Asgari Ücret Tarifesi'nin altında olamaz." },
  { baslik: "Ödeme", metin: "Ödeme, Türkiye Barolar Birliği onaylı ödeme altyapısı üzerinden kartla yapılır. Kart bilgileriniz bu siteye iletilmez; ödeme için serbest meslek makbuzu düzenlenir." },
  { baslik: "Görüşme", metin: "Belirlenen saatte video görüşme bağlantısı gönderilir. Belgeleriniz varsa görüşmeden önce iletebilirsiniz." },
];

const SSS = [
  {
    question: "Online görüşme ücretli mi?",
    answer: "Evet. Avukatlık hizmeti ücretlidir ve meslek kuralları gereği ücretsiz danışmanlık verilmez. Görüşme ücreti randevu sırasında bildirilir.",
  },
  {
    question: "Görüşmeden sonra dava takibi de yapılabilir mi?",
    answer: "Görüşme, durumunuzun değerlendirilmesi ve yol haritası içindir. Dava veya icra takibi gibi işler için ayrıca avukatlık sözleşmesi yapılır.",
  },
  {
    question: "Yurt dışından görüşme yapılabilir mi?",
    answer: "Evet. Görüşmeler video konferansla yapıldığından bulunduğunuz yer önemli değildir; Türk hukukuna ilişkin konularda danışmanlık verilir.",
  },
];

export default function OnlineDanismanlikPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(SSS)) }} />
      <div className="page-header">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Online Danışmanlık", href: "/online-danismanlik" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Online Danışmanlık
          </h1>
          <p style={{ marginTop: "0.75rem", color: "var(--text-muted)", fontSize: "0.9375rem" }}>
            Büroya gelmeden, video görüşme yoluyla hukuki danışmanlık alabilirsiniz.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-14 prose-content">
        <h2>Nasıl işler?</h2>
        <ol>
          {ADIMLAR.map((a) => (
            <li key={a.baslik}>
              <strong>{a.baslik}:</strong> {a.metin}
            </li>
          ))}
        </ol>

        <div className="not-prose" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", margin: "2rem 0" }}>
          <Link href={BOOKING_URL || "/iletisim"} className="btn-primary">
            Görüşme Talep Et
          </Link>
          {PAYMENT_URL && (
            <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Ödeme Sayfası
            </a>
          )}
        </div>

        <h2>Görüşmeden önce</h2>
        <ul>
          <li>Sözleşme, tebligat, yazışma gibi belgeleri bir araya getirin.</li>
          <li>Sormak istediğiniz soruları ve önemli tarihleri not edin.</li>
          <li>Sağlık bilgisi gibi özel nitelikli kişisel verileri yalnızca gerektiği ölçüde paylaşın.</li>
        </ul>

        <h2>Kişisel verileriniz</h2>
        <p>
          Görüşme ve randevu için kullanılan araçların sunucuları yurt dışında bulunabilir. Verilerinizin nasıl işlendiğini{" "}
          <Link href="/kvkk">Aydınlatma Metni</Link>&apos;nde bulabilirsiniz.
        </p>

        <h2>Sık Sorulan Sorular</h2>
        {SSS.map((f) => (
          <details key={f.question} className="faq-item">
            <summary>{f.question}</summary>
            <div className="faq-answer">{f.answer}</div>
          </details>
        ))}
      </div>
    </>
  );
}
