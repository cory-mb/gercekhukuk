import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { EMAIL } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni",
  description: "Kişisel verilerin işlenmesi hakkında aydınlatma metni — Gerçek Hukuk ve Arabuluculuk Bürosu.",
  path: "/kvkk",
  noIndex: true,
});

// Owner'ın mevcut (Wix) aydınlatma metni esas alındı. Değişiklikler: örtülü açık rıza cümlesi çıkarıldı,
// yurt dışı aktarım dayanağı 7499 sonrası m.9'a çekildi, Wix çerez ifadeleri gerçek duruma uyarlandı.
export default function KvkkPage() {
  return (
    <>
      <div className="page-header">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "KVKK Aydınlatma Metni", href: "/kvkk" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Kişisel Verilerin İşlenmesi Hakkında Aydınlatma Metni
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-14 prose-content">
        <p>
          Gerçek Hukuk ve Arabuluculuk Bürosu olarak, internet sitemizi kullanmanız sırasında elde edilen kişisel verilerinizi, 6698 sayılı
          Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) ve ilgili mevzuat kapsamında, veri sorumlusu sıfatıyla aşağıda açıklanan
          kapsamda işlemekteyiz. Veri sorumlusu Av. Kazım Onur Gerçek&apos;tir.
        </p>

        <h2>Kişisel Verilerinizin Toplanma Yöntemi ve İşlenen Kişisel Verileriniz</h2>
        <p>
          Kişisel verileriniz, İletişim bölümünde yer alan elektronik formu doldurarak tarafımıza göndermeniz yoluyla toplanır. Bu formu
          kullanmanız halinde belirttiğiniz ad ve soyad, e-posta adresi, telefon numarası, konu ve mesaj içeriğinde verdiğiniz kişisel
          bilgiler işlenebilecektir.
        </p>
        <p>
          İnternet sitesini ziyaretiniz sırasında, sitenin güvenli ve kesintisiz çalışması amacıyla barındırma hizmet sağlayıcısının
          sunucu kayıtlarında IP adresi, bağlantı tarih ve saati ile tarayıcı bilgileri tutulabilir. Sitemizde reklam veya takip amaçlı
          çerez kullanılmamaktadır.
        </p>

        <h2>Kişisel Verilerinizin İşlenme Amaçları ve Hukuki Sebebi</h2>
        <p>
          Kişisel verileriniz; büromuz tarafından sunulan avukatlık, arabuluculuk ve hukuki danışmanlık hizmetlerinden yararlanabilmeniz,
          talebinizin yanıtlanması, iletişimin yürütülmesi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenecektir.
        </p>
        <p>
          İletişim formu ile paylaştığınız veriler, bir sözleşmenin kurulmasıyla doğrudan ilgili olması (KVKK m.5/2-c); sunucu kayıtları
          ise ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati (KVKK m.5/2-f) hukuki
          sebebine dayanılarak işlenir.
        </p>

        <h2>İşlenen Kişisel Verilerinizin Kimlere ve Hangi Amaçla Aktarılabileceği</h2>
        <p>
          İnternet sitemizin barındırma hizmetini ve form mesajlarının iletildiği e-posta altyapısını sunucuları yurt dışında bulunan
          hizmet sağlayıcılardan almaktayız. Bu nedenle kişisel verileriniz, yalnızca yukarıdaki amaçlarla sınırlı olarak ve KVKK&apos;nın
          9. maddesinde öngörülen şartlar çerçevesinde bu hizmet sağlayıcıların yurt dışındaki sunucularına aktarılmaktadır.
        </p>

        <h2>Kişisel Veri Sahibinin KVKK m.11&apos;de Sayılan Hakları</h2>
        <p>
          KVKK&apos;nın &quot;İstisnalar&quot; başlıklı 28. maddesinde öngörülen haller saklı kalmak kaydıyla, Kanun&apos;un 11. maddesi
          çerçevesinde büromuza başvurarak kişisel verilerinizin;
        </p>
        <ol type="a">
          <li>İşlenip işlenmediğini öğrenme,</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
          <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
          <li>Eksik veya yanlış işlenmiş ise düzeltilmesini isteme,</li>
          <li>Kanun&apos;un 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
          <li>(e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
          <li>Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
          <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
        </ol>
        <p>haklarına sahipsiniz.</p>
        <p>
          Bu haklarınızla ilgili taleplerinizi, kimliğinizi tespit edici bir belge ile veya başvuru yapmaya yetkili olduğunuzu gösterir
          noter tasdikli bir vekâletname ile, ıslak imzalı olarak veri sorumlusu Av. Kazım Onur Gerçek adına Erenköy Mah. Sadi Yaver Ataman
          Sok. No:5/41 Kadıköy/İstanbul adresine gönderebilir veya {EMAIL} adresine konu kısmına &quot;Kişisel Veri Bilgi Talebi&quot;
          yazarak elektronik olarak iletebilirsiniz.
        </p>
        <p>
          Talepleriniz, niteliğine göre en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılır. İşlemin ayrıca bir
          maliyet gerektirmesi halinde, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ&apos;in 7. maddesinde belirlenen ücret
          alınabilir.
        </p>

        <p className="text-xs mt-8" style={{ color: "var(--text-light)" }}>Son güncelleme: Ekim 2026</p>
      </div>
    </>
  );
}
