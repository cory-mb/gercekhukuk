import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "İdare Hukuku Avukatı İstanbul — İdari İptal ve Tam Yargı Davaları",
  description:
    "İstanbul idare hukuku avukatı. İdari işlem iptali, tam yargı davaları, idari para cezalarına itiraz, yükseköğretim ve kamu kurumu uyuşmazlıkları. Av. Kazım Onur Gerçek LL.M.",
  path: "/hizmetler/idare-hukuku",
});

const FAQ_ITEMS = [
  {
    question: "İdari işlem iptali davası nedir?",
    answer:
      "İdari işlem iptali davası, idarenin hukuka aykırı işlemlerinin (idari kararlar, disiplin cezaları, izin iptalleri, YÖK kararları vb.) yargı yoluyla ortadan kaldırılması için idare mahkemelerinde açılan davadır. Genellikle işlemin tebliğinden itibaren 60 gün içinde açılması gerekir; bu süre hak düşürücü niteliktedir.",
  },
  {
    question: "Tam yargı davası ne zaman açılır?",
    answer:
      "İdarenin hukuka aykırı eylem veya işlemleri nedeniyle uğranılan maddi ve manevi zararların tazmini için tam yargı davası açılır. Önce idareye başvuru yapılması, başvurunun reddi veya 60 gün içinde cevap verilmemesi halinde idare mahkemesinde dava açılabilir.",
  },
  {
    question: "İdari para cezasına nasıl itiraz edilir?",
    answer:
      "İdari para cezasına itiraz yolu, cezanın türüne göre farklılık gösterir. SGK ve vergi cezaları gibi idari para cezalarında sulh ceza hakimliğine başvurulabilir; KVKK ve bazı düzenleyici kurum cezalarında ise idare mahkemesi yetkilidir. Doğru yolu belirlemek ve süre kaçırmamak için başvuru öncesi hukuki görüş alınması önerilir.",
  },
  {
    question: "Yükseköğretim kurumlarıyla olan anlaşmazlıklarda hangi mahkeme yetkilidir?",
    answer:
      "Vakıf yükseköğretim kurumlarında çalışan akademik ve idari personelin iş sözleşmesinden doğan uyuşmazlıkları iş mahkemelerinde görülür. Buna karşın disiplin işlemleri, YÖK kararları, doçentlik başvurusu reddi gibi idari nitelikteki işlemler idare yargısının konusuna girer.",
  },
  {
    question: "Yürütmenin durdurulması nedir ve nasıl talep edilir?",
    answer:
      "Yürütmenin durdurulması, idari işlemin uygulanmasından doğacak telafi edilemez zararların önlenmesi için dava açılırken veya yargılama süresince mahkemeden talep edilen geçici tedbir kararıdır. Özellikle doçentlik ret kararları, disiplin cezaları ve izin iptalleri gibi süre baskısı yaratan uyuşmazlıklarda kritik önem taşır.",
  },
];

export default function IdareHukukuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Anasayfa", url: SITE_URL }, { name: "Hizmetler", url: `${SITE_URL}/hizmetler` }, { name: "İdare Hukuku", url: `${SITE_URL}/hizmetler/idare-hukuku` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }} />

      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Hizmetler", href: "/hizmetler" }, { label: "İdare Hukuku" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            İdare Hukuku
          </h1>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            Güncelleme: Eylül 2026 · Okuma süresi: 6 dakika
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 prose-content">
            <h2>İstanbul İdare Hukuku Avukatlık Hizmetleri</h2>
            <p>
              İdare hukuku; devlet ve kamu kurumlarının bireyler ile özel kurumlarla ilişkilerini düzenleyen, idari işlemlere karşı yargı yollarını belirleyen hukuk dalıdır. Vergi dairesi, SGK, YÖK, üniversite yönetim kurulları, düzenleyici kurumlar ve belediyeler gibi pek çok kamu otoritesinin işlem ve eylemleri idare hukuku kapsamında denetlenebilir.
            </p>
            <p>
              İdari davalarda süre kuralları son derece katıdır: işlemin tebliğinden itibaren genellikle 60 gün içinde dava açılması gerekmektedir. Bu sürenin kaçırılması, haklı olunsa dahi davanın reddine yol açar. Yeditepe Üniversitesi&apos;nde kıdemli avukat olarak edinilen kurumsal deneyim, özellikle yükseköğretim ve kamu kurumlarıyla ilgili idari uyuşmazlıklarda kapsamlı temsil imkanı sunmaktadır.
            </p>

            <h2>Hizmet Alanları</h2>

            <h3>İdari İşlem İptali Davaları</h3>
            <ul>
              <li>Disiplin cezası ve ihraç kararlarına karşı iptal davası</li>
              <li>İzin, ruhsat ve lisans iptali kararlarına itiraz</li>
              <li>YÖK kararları ve üniversite yönetim kurulu kararlarına karşı dava</li>
              <li>Kamu ihale kararlarının iptali</li>
              <li>Yürütmenin durdurulması talepli acil başvurular</li>
              <li>İdari sessiz kalma (zımni ret) halinde dava açılması</li>
            </ul>

            <h3>Tam Yargı Davaları</h3>
            <ul>
              <li>İdarenin hukuka aykırı işlemlerinden doğan maddi zararların tazmini</li>
              <li>İdarenin eylemsizliğinden kaynaklanan zarar talepleri</li>
              <li>Haksız uygulama nedeniyle özlük haklarına verilen zararlar</li>
              <li>Kamu görevlileri ve akademik personelin tazminat talepleri</li>
            </ul>

            <h3>İdari Para Cezaları ve İtirazlar</h3>
            <ul>
              <li>KVKK idari para cezalarına itiraz</li>
              <li>SGK ve işkur idari yaptırımlarına itiraz</li>
              <li>Vergi cezaları ve uzlaşma süreçleri</li>
              <li>Sulh ceza hakimliği ve idare mahkemesi yolunun belirlenmesi</li>
            </ul>

            <h3>Yükseköğretim ve Kamu Kurumu Uyuşmazlıkları</h3>
            <ul>
              <li>Doçentlik başvurusu reddi kararlarına karşı iptal davası</li>
              <li>Akademik atanma ve yükseltme işlemlerine itiraz</li>
              <li>Üniversite disiplin soruşturmaları ve cezaları</li>
              <li>Öğrenci disiplin kararları ve kayıt silme işlemlerine itiraz</li>
              <li>Kamu kurumu personel uyuşmazlıkları</li>
            </ul>

            <h2>İdari Davada Süre Yönetimi</h2>
            <p>
              İdare hukukunda en kritik nokta süre takibidir. 60 günlük dava açma süresi kamu düzenine ilişkin olup hâkim tarafından re&apos;sen gözetilir; taraflar bu süreyi uzatamaz ya da askıya alamaz. Birçok idari işlemde bu süre tebliğ tarihinden başlar; bazı hallerde ise idarenin sessiz kalması (60 günlük bekleme sonrası zımni red) ayrı bir süre başlatır. Bu nedenle idari bir işleme muhatap olunduğunda hukuki görüş almak vakit kaybetmeksizin yapılmalıdır.
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
                  İdari Dava Danışmanlığı
                </p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--stone)", lineHeight: 1.3, marginBottom: "1.5rem" }}>
                  60 günlük dava süresini kaçırmadan hukuki destek alın.
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
                  <li><Link href="/hizmetler/yuksekogrenim-hukuku" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>Yükseköğretim Hukuku</Link></li>
                  <li><Link href="/hizmetler/docentlik-iptal-davalari" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>Doçentlik İptal Davaları</Link></li>
                  <li><Link href="/hizmetler/is-hukuku" style={{ fontSize: "0.9375rem", color: "var(--text-muted)", textDecoration: "none" }}>İş Hukuku</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
