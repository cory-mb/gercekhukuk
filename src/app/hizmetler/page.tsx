import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Hizmetler — Hukuki Uzmanlık Alanları",
  description:
    "Gerçek Hukuk ve Arabuluculuk Bürosu hizmetleri: Yükseköğretim hukuku, doçentlik iptal davaları, iş hukuku, idare hukuku, KVKK danışmanlığı, ticaret hukuku, arabuluculuk, kira hukuku ve sözleşmeler hukuku.",
  path: "/hizmetler",
});

const HIZMETLER = [
  {
    href: "/hizmetler/yuksekogrenim-hukuku",
    title: "Yükseköğretim Hukuku",
    desc: "Vakıf yükseköğretim kurumlarında öğrenci, akademik ve idari personel uyuşmazlıkları, disiplin soruşturmaları ve hak ihlali davaları.",
    featured: true,
  },
  {
    href: "/hizmetler/docentlik-iptal-davalari",
    title: "Doçentlik İptal Davaları",
    desc: "Doçentlik başvurusunun reddi kararlarına karşı idare mahkemelerinde iptal davası açılması, yürütmesinin durdurulması ve sonuçlandırılması.",
    featured: true,
  },
  {
    href: "/hizmetler/is-hukuku",
    title: "İş Hukuku",
    desc: "İşçi-işveren uyuşmazlıkları, iş akdinin feshi, kıdem ve ihbar tazminatı, mobing, iş kazası ve meslek hastalığı davaları.",
    featured: false,
  },
  {
    href: "/hizmetler/arabuluculuk",
    title: "Arabuluculuk",
    desc: "Dava şartı ve ihtiyari arabuluculuk. İş hukuku, kira ve ticari uyuşmazlıklarda +500 dosyada anlaşma sağlayan deneyimli arabulucu.",
    featured: false,
  },
  {
    href: "/hizmetler/kira-hukuku",
    title: "Kira Hukuku",
    desc: "Kira sözleşmelerinin hazırlanması, tahliye davaları, kira artış uyuşmazlıkları ve kira tespiti/uyarlama davaları.",
    featured: false,
  },
  {
    href: "/hizmetler/sozlesmeler-hukuku",
    title: "Sözleşmeler Hukuku",
    desc: "Her türlü sözleşmenin hazırlanması, incelenmesi, müzakere edilmesi ve sözleşme ihlallerine karşı hukuki süreç yönetimi.",
    featured: false,
  },
  {
    href: "/hizmetler/idare-hukuku",
    title: "İdare Hukuku",
    desc: "İdari işlem iptali, tam yargı davaları, idari para cezaları ve yükseköğretim kurumu uyuşmazlıkları.",
    featured: false,
  },
  {
    href: "/hizmetler/kvkk-danismanligi",
    title: "KVKK Danışmanlığı",
    desc: "Kişisel veri uyum süreçleri, VERBİS kaydı, aydınlatma metni ve veri ihlali bildirimi yönetimi.",
    featured: false,
  },
  {
    href: "/hizmetler/ticaret-hukuku",
    title: "Ticaret Hukuku",
    desc: "Şirket kuruluş ve yapılandırma, ticari sözleşme uyuşmazlıkları, ortaklık anlaşmazlıkları ve alacak tahsili.",
    featured: false,
  },
];

export default function HizmetlerPage() {
  return (
    <>
      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Hizmetler", href: "/hizmetler" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Hukuki Hizmetler
          </h1>
          <p style={{ marginTop: "0.75rem", color: "var(--text-muted)", fontSize: "0.9375rem", maxWidth: "42rem" }}>
            Bireysel ve kurumsal müvekkillere, geniş bir hukuk alanında profesyonel danışmanlık ve temsil hizmeti sunulmaktadır.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {HIZMETLER.map((h, i) => (
            <Link
              key={h.href}
              href={h.href}
              className="service-row"
            >
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.625rem", fontWeight: 700, color: "var(--text-light)", letterSpacing: "0.08em" }}>
                0{i + 1}
              </span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.375rem" }}>
                  <span style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--text)" }}>
                    {h.title}
                  </span>
                  {h.featured && (
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", border: "1px solid rgba(201,168,76,0.4)", padding: "0.125rem 0.5rem" }}>
                      Uzmanlik
                    </span>
                  )}
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{h.desc}</p>
              </div>
              <svg viewBox="0 0 20 20" fill="currentColor" className="service-row-arrow" style={{ width: "1.125rem", height: "1.125rem" }}>
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "4rem", padding: "2.5rem", background: "var(--stone-2)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", borderTop: "1.5px solid var(--gold)" }}>
          <div>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.375rem", fontWeight: 500, color: "var(--text)" }}>
              Hangi konuda yardım almak istiyorsunuz?
            </p>
            <p style={{ marginTop: "0.375rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
              Hukuki durumunuzu değerlendirmek için ücretsiz ön görüşme talep edin.
            </p>
          </div>
          <Link href="/iletisim" className="btn-primary">
            Randevu Talep Edin
          </Link>
        </div>
      </div>
    </>
  );
}
