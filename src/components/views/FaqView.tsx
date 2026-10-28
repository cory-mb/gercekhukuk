import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { LINKS, type Lang } from "@/lib/dict";


const TR = [
  {
    kategori: "Doçentlik Davaları",
    sorular: [
      {
        question: "Doçentlik başvurusu reddedilirse kaç günde dava açılmalı?",
        answer:
          "Ret kararının tebliğinden itibaren 60 gün içinde Ankara İdare Mahkemesi'nde iptal davası açılmalıdır. Bu süre hak düşürücü süre olup kesinlikle kaçırılmamalıdır.",
      },
      {
        question: "Doçentlik iptal davası ne kadar sürer?",
        answer:
          "Ankara idare mahkemelerinin iş yüküne göre değişmekle birlikte genellikle 1-3 yıl sürmektedir. Yürütmeyi durdurma kararı alınması halinde bu süreçte akademik çalışmalar sürdürülebilir.",
      },
      {
        question: "Doçentlik atanma reddi ile doçentlik unvanı reddi aynı mı?",
        answer:
          "Hayır. Doçentlik unvanı ÜAK tarafından, kadro ataması ise üniversite tarafından yapılır. Her iki ret kararına karşı ayrı hukuki yollar izlenir. Unvan reddi için Ankara İdare Mahkemesi, atanma reddi için ilgili yerdeki idare mahkemesi yetkili olabilir.",
      },
    ],
  },
  {
    kategori: "İş Hukuku",
    sorular: [
      {
        question: "İşe iade davası için süre ne kadar?",
        answer:
          "Fesih bildiriminin tebliğinden itibaren 1 ay içinde arabulucuya başvurulması zorunludur. Arabuluculukta anlaşma sağlanamazsa son tutanağın düzenlenmesinden itibaren 2 hafta içinde iş mahkemesinde dava açılmalıdır.",
      },
      {
        question: "Kıdem tazminatına hak kazanmak için ne gerekir?",
        answer:
          "En az 1 yıl çalışmış olmak ve iş sözleşmesinin; işveren tarafından haksız fesih, emeklilik, askerlik, evlilik (kadın işçi) veya ölüm nedeniyle sona ermesi gerekir. Haklı bir neden olmadan istifa eden işçi kural olarak kıdem tazminatı alamaz; işçinin haklı nedenle feshinde bu hak korunur.",
      },
      {
        question: "Mobing davası açılabilmek için ne ispatlanmalı?",
        answer:
          "Mobing; sistematik, sürekli ve kasıtlı psikolojik taciz olarak tanımlanır. Tek bir eylem mobingle sonuçlanmaz. İşe gelirken kayıt tutmak, tanıklık, yazışmalar ve raporlar delil olarak kullanılabilir.",
      },
    ],
  },
  {
    kategori: "Arabuluculuk",
    sorular: [
      {
        question: "Arabuluculuk anlaşması mahkeme kararı gibi mi bağlayıcı?",
        answer:
          "İcra edilebilirlik şerhi alınan arabuluculuk anlaşma belgesi, mahkeme ilamı hükmündedir. Taraf, anlaşmaya uymaktan kaçınırsa ilam icrasına başvurulabilir.",
      },
      {
        question: "Arabuluculuk gizli midir?",
        answer:
          "Evet. Arabuluculuk görüşmeleri gizlidir; toplantılarda söylenenler ve sunulan belgeler mahkemede delil olarak kullanılamaz. Bu gizlilik, tarafları daha özgür bir şekilde müzakere etmeye teşvik eder.",
      },
    ],
  },
  {
    kategori: "Kira (Borçlar Hukuku)",
    sorular: [
      {
        question: "Kiracı kirayı ödemezse ne yapılır?",
        answer:
          "Kira bedelinin ödenmemesi halinde kiraya veren; noter aracılığıyla ihtarname çekerek 30 günlük ödeme süresi tanıyabilir. Bu süre içinde ödeme yapılmaması halinde tahliye davası veya icra yoluyla tahliye talep edilebilir.",
      },
      {
        question: "Ev sahibi kira sözleşmesini feshedebilir mi?",
        answer:
          "Konut ve çatılı işyeri kiralarında kiraya veren, sözleşme süresinin bitmesini tek başına gerekçe yapamaz. Sözleşmeyi kural olarak ancak ihtiyaç, yeniden inşa, tahliye taahhüdü gibi kanuni sebeplerle veya on yıllık uzama süresi dolduktan sonra sona erdirebilir.",
      },
      {
        question: "Kira uyuşmazlığında dava açmadan önce arabulucuya gitmek zorunlu mu?",
        answer:
          "Evet. 1 Eylül 2023'ten bu yana kira ilişkisinden doğan uyuşmazlıklarda dava açmadan önce arabulucuya başvurmak dava şartıdır. İcra takibi yoluyla tahliyeye ilişkin hükümler bunun dışındadır.",
      },
    ],
  },
];

const EN = [
  {
    kategori: "Associate Professorship Actions",
    sorular: [
      {
        question: "How many days do I have to sue if my associate professorship application is rejected?",
        answer: "An annulment action must be filed with the Ankara Administrative Court within 60 days of notification of the rejection. The period is strict and must not be missed.",
      },
      {
        question: "How long does an associate professorship annulment action take?",
        answer: "It depends on the workload of the Ankara administrative courts but usually takes one to three years. If a stay of execution is granted, academic work can continue during the case.",
      },
      {
        question: "Is a refusal to appoint the same as a refusal of the title?",
        answer: "No. The title is awarded by ÜAK, while appointment to a position is made by the university. Separate remedies apply to each refusal. The Ankara Administrative Court is competent for the title, while the administrative court where the university is located may be competent for the appointment.",
      },
    ],
  },
  {
    kategori: "Employment Law",
    sorular: [
      {
        question: "What is the deadline for a reinstatement claim?",
        answer: "Mediation must be sought within one month of notification of the termination. If mediation fails, the case must be filed with the labour court within two weeks of the final mediation report.",
      },
      {
        question: "Who is entitled to severance pay?",
        answer: "At least one year of service and termination of the contract by the employer without just cause, retirement, military service, marriage (female employee) or death. An employee who resigns without just cause is generally not entitled; the right is preserved where the employee terminates for just cause.",
      },
      {
        question: "What must be proven in a workplace harassment (mobbing) claim?",
        answer: "Mobbing is systematic, continuous and deliberate psychological harassment; a single act is not enough. Notes kept at the time, witness statements, correspondence and medical reports can be used as evidence.",
      },
    ],
  },
  {
    kategori: "Mediation",
    sorular: [
      {
        question: "Is a mediation agreement binding like a court judgment?",
        answer: "A settlement agreement with an enforceability annotation has the effect of a court judgment. If a party fails to comply, it can be enforced as a judgment.",
      },
      {
        question: "Is mediation confidential?",
        answer: "Yes. Mediation sessions are confidential; statements made and documents presented cannot be used as evidence in court. This encourages the parties to negotiate more freely.",
      },
    ],
  },
  {
    kategori: "Leases (Law of Obligations)",
    sorular: [
      {
        question: "What can a landlord do if the tenant does not pay rent?",
        answer: "The landlord can send a formal notice through a notary giving 30 days to pay. If payment is not made within that period, eviction can be sought through a lawsuit or enforcement proceedings.",
      },
      {
        question: "Can the landlord terminate the lease?",
        answer: "For residential and roofed commercial leases, expiry of the term alone is not a ground for the landlord. As a rule, the lease can only be ended on statutory grounds such as need, reconstruction or a written undertaking to vacate, or after the ten-year extension period has expired.",
      },
      {
        question: "Is mediation mandatory before suing in a lease dispute?",
        answer: "Yes. Since 1 September 2023, mediation is a precondition for suing in disputes arising from a lease. Eviction through enforcement proceedings is excluded.",
      },
    ],
  },
];

const COPY = {
  tr: {
    title: "Sık Sorulan Sorular — Hukuki Danışmanlık",
    description: "Doçentlik davaları, iş hukuku, arabuluculuk ve kira uyuşmazlıkları hakkında sık sorulan sorular. Av. Kazım Onur Gerçek LL.M.",
    h1: "Sık Sorulan Sorular", more: "Sorunuz burada yer almıyor mu?", cta: "İletişime Geç", items: TR,
  },
  en: {
    title: "Frequently Asked Questions",
    description: "Frequently asked questions on associate professorship actions, employment law, mediation and lease disputes in Turkey. Av. Kazım Onur Gerçek LL.M.",
    h1: "Frequently Asked Questions", more: "Can't find your question here?", cta: "Contact Us", items: EN,
  },
};

export const faqMetadata = (lang: Lang): Metadata =>
  buildMetadata({ title: COPY[lang].title, description: COPY[lang].description, path: LINKS[lang].faq, lang });

export default function FaqView({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const tumSorular = c.items.flatMap((k) => k.sorular);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(tumSorular)) }}
      />

      <div className="page-header">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Breadcrumb lang={lang} items={[{ label: c.h1, href: LINKS[lang].faq }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            {c.h1}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-14">
        {c.items.map((kategori) => (
          <div key={kategori.kategori} style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
              {kategori.kategori}
            </h2>
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {kategori.sorular.map((soru) => (
                <details key={soru.question} className="faq-item">
                  <summary>
                    {soru.question}
                    <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: "1rem", height: "1rem", color: "var(--gold)", flexShrink: 0, transition: "transform 0.2s" }}>
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <div className="faq-answer">
                    {soru.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginTop: "3rem", padding: "2.5rem", background: "var(--stone-2)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", borderTop: "1.5px solid var(--gold)" }}>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--text)" }}>
            {c.more}
          </p>
          <a href={LINKS[lang].contact} className="btn-primary">
            {c.cta}
          </a>
        </div>
      </div>
    </>
  );
}
