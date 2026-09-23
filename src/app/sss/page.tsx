import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Sık Sorulan Sorular — Hukuki Danışmanlık",
  description:
    "Doçentlik davaları, iş hukuku, arabuluculuk ve daha fazlası hakkında sık sorulan sorular. Av. Kazım Onur Gerçek LL.M.",
  path: "/sss",
});

const SSS_KATEGORILER = [
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
          "En az 1 yıl çalışmış olmak ve iş sözleşmesinin; işveren tarafından haksız fesih, emeklilik, askerlik, evlilik (kadın işçi) veya ölüm nedeniyle sona ermesi gerekir. Kendi isteğiyle istifa eden işçi kıdem tazminatı alamaz.",
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
    kategori: "Kira Hukuku",
    sorular: [
      {
        question: "Kiracı kirayı ödemezse ne yapılır?",
        answer:
          "Kira bedelinin ödenmemesi halinde kiraya veren; noter aracılığıyla ihtarname çekerek 30 günlük ödeme süresi tanıyabilir. Bu süre içinde ödeme yapılmaması halinde tahliye davası veya icra yoluyla tahliye talep edilebilir.",
      },
      {
        question: "Ev sahibi kira sözleşmesini feshedebilir mi?",
        answer:
          "Belirli süreli kira sözleşmeleri; süre dolduğunda belirli koşullarla, belirsiz süreli sözleşmeler ise yasal fesih ihbar sürelerine uyularak feshedilebilir. Konut kiralarında kiraya veren, süre sonunda ihtiyaç veya tahliye taahhüdü dışında sözleşmeyi feshedemez.",
      },
    ],
  },
];

export default function SSSPage() {
  const tumSorular = SSS_KATEGORILER.flatMap((k) => k.sorular);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(tumSorular)) }}
      />

      <div className="page-header">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Sık Sorulan Sorular", href: "/sss" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Sık Sorulan Sorular
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-14">
        {SSS_KATEGORILER.map((kategori) => (
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
            Sorunuz burada yer almıyor mu?
          </p>
          <a href="/iletisim" className="btn-primary">
            İletişime Geç
          </a>
        </div>
      </div>
    </>
  );
}
