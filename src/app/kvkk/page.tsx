import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni",
  description: "Kişisel verilerin işlenmesi hakkında aydınlatma metni — Gerçek Hukuk ve Arabuluculuk Bürosu.",
  path: "/kvkk",
  noIndex: true,
});

export default function KvkkPage() {
  return (
    <>
      <div className="page-header">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "KVKK Aydınlatma Metni" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Kişisel Verilerin İşlenmesi Hakkında Aydınlatma Metni
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-14 prose-content">
        <p>
          Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun 10. maddesi kapsamında, veri sorumlusu sıfatıyla Gerçek Hukuk ve Arabuluculuk Bürosu tarafından hazırlanmıştır.
        </p>

        <h2>Veri Sorumlusu</h2>
        <p>
          Gerçek Hukuk ve Arabuluculuk Bürosu<br />
          Av. Kazım Onur Gerçek LL.M<br />
          Kadıköy, İstanbul<br />
          gercekavukatlik@gmail.com
        </p>

        <h2>Hangi Verileriniz İşleniyor?</h2>
        <p>Web sitemizdeki iletişim formu aracılığıyla ad, soyad, e-posta adresi, telefon numarası ve mesaj içeriği işlenebilir.</p>

        <h2>Verilerin İşlenme Amacı</h2>
        <p>Toplanan kişisel veriler; hukuki danışmanlık hizmeti sunmak, randevu ve iletişim taleplerini yanıtlamak amacıyla işlenmektedir.</p>

        <h2>Hukuki Dayanak</h2>
        <p>KVKK&apos;nın 5/2(c) maddesi uyarınca sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması sebebiyle.</p>

        <h2>Haklarınız</h2>
        <p>
          KVKK&apos;nın 11. maddesi kapsamında kişisel verilerinize ilişkin bilgi edinme, düzeltme, silme ve itiraz haklarınızı kullanmak için gercekavukatlik@gmail.com adresine başvurabilirsiniz.
        </p>

        <p className="text-xs text-gray-400 mt-8">Son güncelleme: Eylül 2026</p>
      </div>
    </>
  );
}
