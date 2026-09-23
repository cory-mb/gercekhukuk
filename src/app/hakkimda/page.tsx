import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Hakkımda — Av. Kazım Onur Gerçek",
  description:
    "Av. Kazım Onur Gerçek LL.M — Marmara Üniversitesi Hukuk mezunu, Yeditepe Üniversitesi kıdemli avukatı, İstanbul Barosu üyesi. Yükseköğretim hukuku, doçentlik davaları ve arabuluculuk uzmanı.",
  path: "/hakkimda",
});

const UZMANLIKLAR = [
  "Yükseköğretim Hukuku",
  "Doçentlik İptal Davaları",
  "İş Hukuku",
  "Arabuluculuk",
  "Kira Hukuku",
  "Sözleşmeler Hukuku",
  "KVKK Danışmanlığı",
  "İdare Hukuku",
  "Ticaret Hukuku",
];

const EGITIM = [
  { kurum: "Marmara Üniversitesi", bolum: "Hukuk Fakültesi — Lisans (2008)" },
  { kurum: "Yeditepe Üniversitesi", bolum: "Özel Hukuk Yüksek Lisansı (LL.M)" },
  { kurum: "Gazi Üniversitesi", bolum: "Adli Bilişim Yüksek Lisansı" },
];

export default function HakkimdaPage() {
  return (
    <article>
      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Hakkımda", href: "/hakkimda" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Av. Kazım Onur Gerçek LL.M
          </h1>
          <p style={{ marginTop: "0.5rem", color: "var(--text-muted)", fontSize: "0.9375rem" }}>
            Avukat · Arabulucu · Hukuk Danışmanı
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Photo */}
              <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: "-1.5cm 0 0 0" }}>
                  <Image
                    src="/kazim-onur-gercek.jpg"
                    alt="Av. Kazım Onur Gerçek LL.M"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    priority
                  />
                </div>
              </div>

              {/* Credentials */}
              <div>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>
                  Eğitim
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {EGITIM.map((e) => (
                    <li key={e.kurum}>
                      <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.125rem" }}>{e.kurum}</p>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{e.bolum}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>
                  Baro
                </p>
                <p style={{ fontSize: "0.9375rem", color: "var(--text)" }}>İstanbul 1 No&apos;lu Barosu üyesi</p>
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link href="/iletisim" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Randevu Al
                </Link>
                <a
                  href="https://www.linkedin.com/in/kaz%C4%B1m-onur-ger%C3%A7ek-ll-m-213648104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          {/* Ana içerik */}
          <div className="lg:col-span-2 prose-content">
            <p>
              Marmara Üniversitesi Hukuk Fakültesi&apos;nden 2008 yılında mezun olan Av. Kazım Onur Gerçek, profesyonel kariyerine Ankara&apos;da Tahir Yahya İlhan Hukuk Ofisi&apos;nde başladı. Bu dönemde enerji, inşaat, maden ve halı sektörü başta olmak üzere büyük şirketlere, kamu yararına çalışan uzman hekim derneklerine ve bireysel müvekkillere ticaret hukuku, iş hukuku, borçlar hukuku, fikri mülkiyet hukuku, idare hukuku ve sağlık hukuku alanlarında hukuki destek sundu.
            </p>

            <p>
              Sağlık Bakanlığı&apos;nın &quot;tam gün yasası&quot; olarak bilinen düzenlemesine karşı açılan iptal davalarında aktif rol üstlendi. &quot;Ayten Yıldırmaz&quot; başvurusu olarak bilinen ve Anayasa Mahkemesi&apos;nce aile hayatına saygı hakkının ihlal edildiğine ilişkin verilen ilk kararlardan birini elde etti.
            </p>

            <h2>Yeditepe Üniversitesi Dönemi (2014–2020)</h2>

            <p>
              2014 yılından itibaren Yeditepe Üniversitesi&apos;nde kıdemli avukat olarak görev yapan Av. Gerçek, bu süreçte kurumsal hukukun yalnızca dava boyutunu değil; kurumsal yapı, yönetişim, uyum ve iç işleyişle olan ilişkisini bütüncül olarak gördü.
            </p>

            <ul>
              <li>Adli ve idari yargıda <strong>+250 dava</strong> yürütüldü</li>
              <li><strong>+1000 sözleşme</strong> hazırlandı, incelendi ve müzakere edildi</li>
              <li>Koşuyolu Hastanesi&apos;nin kuruluş süreçlerinde aktif rol üstlenildi</li>
              <li>Üniversite&apos;nin KVKK uyum süreci yönetildi</li>
              <li>Üniversite iç mevzuatının hazırlanmasına destek verildi</li>
              <li>Tüm personele KVKK, disiplin vb. konularda kurum içi eğitimler verildi</li>
            </ul>

            <h2>Serbest Avukatlık (2020 – Günümüz)</h2>

            <p>
              Ekim 2020&apos;den bu yana serbest avukat olarak faaliyet gösteren Av. Gerçek, özellikle aşağıdaki alanlarda bireysel ve kurumsal müvekkillere hizmet vermektedir:
            </p>

            <ul>
              <li>Vakıf yükseköğretim kurumları ile öğrenci, akademik ve idari personeller arasındaki uyuşmazlıklar</li>
              <li>Doçentlik iptal davaları</li>
              <li>İş hukuku ve işçi-işveren uyuşmazlıkları</li>
              <li>Kira hukuku</li>
              <li>Sözleşmeler hukuku ve kişisel verilerin korunması</li>
              <li>Küçük ve orta ölçekli hukuk bürolarına iş geliştirme ve kurumsallaşma danışmanlığı</li>
            </ul>

            <h2>Arabuluculuk (2023 – Günümüz)</h2>

            <p>
              2023&apos;ten bu yana dava şartı ve ihtiyari arabuluculuk süreçlerinde iş hukuku, kira hukuku ve ticari uyuşmazlıklar alanında aktif arabulucu olarak faaliyet göstermekte; kısa sürede <strong>+500 dosyayı</strong> anlaşma ile sonuçlandırmıştır.
            </p>

            <h2>Uzmanlık Alanları</h2>
            <div className="not-prose" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
              {UZMANLIKLAR.map((u) => (
                <span
                  key={u}
                  style={{ fontSize: "0.75rem", fontWeight: 700, fontFamily: "'Lato', sans-serif", letterSpacing: "0.04em", padding: "0.375rem 0.875rem", background: "var(--stone-2)", color: "var(--text)", border: "1px solid var(--border)" }}
                >
                  {u}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
