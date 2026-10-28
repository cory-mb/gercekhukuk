import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { BOOKING_URL, PAYMENT_URL, faqSchema } from "@/lib/schema";
import { LINKS, type Lang } from "@/lib/dict";

const COPY = {
  tr: {
    title: "Online Danışmanlık",
    description: "Av. Kazım Onur Gerçek ile video görüşme yoluyla online hukuki danışmanlık: görüşme talebi, randevu, TBB onaylı ödeme altyapısı ve görüşme adımları.",
    intro: "Büroya gelmeden, video görüşme yoluyla hukuki danışmanlık alabilirsiniz.",
    how: "Nasıl işler?",
    steps: [
      { baslik: "Görüşme talebi", metin: "İletişim formunda konu olarak “Online görüşme”yi seçin ve konunuzu kısaca yazın." },
      { baslik: "Randevu ve ücret", metin: "Uygun saatler ve görüşme ücreti size e-postayla bildirilir. Ücret, Avukatlık Asgari Ücret Tarifesi'nin altında olamaz." },
      { baslik: "Ödeme", metin: "Ödeme, Türkiye Barolar Birliği onaylı ödeme altyapısı üzerinden kartla yapılır. Kart bilgileriniz bu siteye iletilmez; ödeme için serbest meslek makbuzu düzenlenir." },
      { baslik: "Görüşme", metin: "Belirlenen saatte video görüşme bağlantısı gönderilir. Belgeleriniz varsa görüşmeden önce iletebilirsiniz." },
    ],
    request: "Görüşme Talep Et", pay: "Ödeme Sayfası",
    before: "Görüşmeden önce",
    beforeList: [
      "Sözleşme, tebligat, yazışma gibi belgeleri bir araya getirin.",
      "Sormak istediğiniz soruları ve önemli tarihleri not edin.",
      "Sağlık bilgisi gibi özel nitelikli kişisel verileri yalnızca gerektiği ölçüde paylaşın.",
    ],
    data: "Kişisel verileriniz",
    dataText: "Görüşme ve randevu için kullanılan araçların sunucuları yurt dışında bulunabilir. Verilerinizin nasıl işlendiğini şu metinde bulabilirsiniz:",
    dataLink: "Aydınlatma Metni",
    faq: "Sık Sorulan Sorular",
    faqs: [
      { question: "Online görüşme ücretli mi?", answer: "Evet. Görüşme ücreti randevu sırasında bildirilir ve Avukatlık Asgari Ücret Tarifesi'nin altında olamaz." },
      { question: "Görüşmeden sonra dava takibi de yapılabilir mi?", answer: "Görüşme, durumunuzun değerlendirilmesi ve yol haritası içindir. Dava veya icra takibi gibi işler için ayrıca avukatlık sözleşmesi yapılır." },
      { question: "Yurt dışından görüşme yapılabilir mi?", answer: "Evet. Görüşmeler video konferansla yapıldığından bulunduğunuz yer önemli değildir; Türk hukukuna ilişkin konularda danışmanlık verilir." },
    ],
  },
  en: {
    title: "Online Consultation",
    description: "Online legal consultation by video call with Av. Kazım Onur Gerçek, Istanbul: request, appointment, payment through a TBB-approved system and the call itself.",
    intro: "Get legal advice on Turkish law by video call, without visiting the office.",
    how: "How it works",
    steps: [
      { baslik: "Request", metin: "Choose “Online consultation” as the subject in the contact form and briefly describe your matter." },
      { baslik: "Appointment and fee", metin: "Available times and the consultation fee are sent to you by email. The fee cannot be lower than the Turkish minimum attorney fee tariff." },
      { baslik: "Payment", metin: "Payment is made by card through a payment system approved by the Union of Turkish Bar Associations. Your card details are not passed to this website; a fee receipt is issued." },
      { baslik: "Consultation", metin: "A video call link is sent for the agreed time. You can send any documents before the call." },
    ],
    request: "Request a Consultation", pay: "Payment Page",
    before: "Before the call",
    beforeList: [
      "Gather documents such as contracts, notices and correspondence.",
      "Note your questions and any important dates.",
      "Share special category data such as health information only as far as necessary.",
    ],
    data: "Your personal data",
    dataText: "The tools used for appointments and calls may run on servers outside Turkey. See how your data is processed in our",
    dataLink: "Privacy Notice",
    faq: "Frequently Asked Questions",
    faqs: [
      { question: "Is the online consultation paid?", answer: "Yes. The fee is communicated when the appointment is arranged and cannot be lower than the Turkish minimum attorney fee tariff." },
      { question: "Can you take on the case after the consultation?", answer: "The consultation is for assessing your situation and planning next steps. Litigation or enforcement work requires a separate engagement agreement." },
      { question: "Can I have a consultation from abroad?", answer: "Yes. Calls are held by video, so your location does not matter; advice is given on matters of Turkish law." },
    ],
  },
};

export const onlineMetadata = (lang: Lang): Metadata =>
  buildMetadata({ title: COPY[lang].title, description: COPY[lang].description, path: LINKS[lang].online, lang });

export default function OnlineView({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(c.faqs)) }} />
      <div className="page-header">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Breadcrumb lang={lang} items={[{ label: c.title, href: LINKS[lang].online }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            {c.title}
          </h1>
          <p style={{ marginTop: "0.75rem", color: "var(--text-muted)", fontSize: "0.9375rem" }}>
            {c.intro}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-14 prose-content">
        <h2>{c.how}</h2>
        <ol>
          {c.steps.map((a) => (
            <li key={a.baslik}>
              <strong>{a.baslik}:</strong> {a.metin}
            </li>
          ))}
        </ol>

        <div className="not-prose" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", margin: "2rem 0" }}>
          <Link href={BOOKING_URL || LINKS[lang].contact} className="btn-primary">
            {c.request}
          </Link>
          {PAYMENT_URL && (
            <a href={PAYMENT_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {c.pay}
            </a>
          )}
        </div>

        <h2>{c.before}</h2>
        <ul>
          {c.beforeList.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        <h2>{c.data}</h2>
        <p>
          {c.dataText} <Link href={LINKS[lang].privacy}>{c.dataLink}</Link>.
        </p>

        <h2>{c.faq}</h2>
        {c.faqs.map((f) => (
          <details key={f.question} className="faq-item">
            <summary>{f.question}</summary>
            <div className="faq-answer">{f.answer}</div>
          </details>
        ))}
      </div>
    </>
  );
}
