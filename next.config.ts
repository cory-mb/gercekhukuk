import type { NextConfig } from "next";

// Eski Wix URL'leri → yeni ASCII URL'ler. Kaynaklar Türkçe yazılır, yüzde-kodlu hale çevrilir;
// NFC ve NFD (c + birleşik cedilla) biçimlerinin ikisi de eşlenir.
// Yeni sayfa/yazı slug'ları her zaman ASCII, küçük harf, tire ayraçlı olmalı (bkz. README "Slug kuralı").
const moved = (sources: string[], destination: string) =>
  sources.flatMap((s) =>
    [...new Set([s.normalize("NFC"), s.normalize("NFD")].map(encodeURI))].map((source) => ({
      source,
      destination,
      permanent: true,
    })),
  );

// Wix küçük harf dönüşümü "İ" → "i" + U+0307 (birleşik nokta) üretiyor; Google bu biçimi indeksledi.
const POST = "/post/doçentlik-başvurusunun-reddi-";
const POST_TAIL = "-karşı-açılacak-";

const nextConfig: NextConfig = {
  // İki root layout ((tr), (en)) olduğu için eşleşmeyen URL'ler app/global-not-found.tsx ile karşılanır.
  experimental: { globalNotFound: true },
  async redirects() {
    return [
      // Wix ana sayfaları
      ...moved(["/eki-bi-mi-z", "/hakkimizda"], "/hakkimda"),
      ...moved(["/services-4"], "/hizmetler"),
      ...moved(["/yayinlar-2", "/yayinlar"], "/yazilar"),
      ...moved(["/contact-5"], "/iletisim"),

      // Wix hizmet sayfaları (Google'da gerçek sinyali olan "yükseköğreti-m-hukuku" dahil)
      ...moved(["/yükseköğretimhukuku", "/yükseköğreti-m-hukuku"], "/hizmetler/yuksekogrenim-hukuku"),
      ...moved(["/doçentlikiptaldavaları", "/dava-ve-uyuşmazlık-çözümü"], "/hizmetler/docentlik-iptal-davalari"),
      ...moved(["/i-ş-hukuku"], "/hizmetler/is-hukuku"),
      ...moved(["/arabuluculuk"], "/hizmetler/arabuluculuk"),
      ...moved(["/kira-hukuku"], "/hizmetler/borclar-hukuku"),
      ...moved(["/sözleşmeler-hukuku"], "/hizmetler/sirketler-hukuku-ve-sozlesme-yonetimi"),

      // Wix blog yazıları: sitemap'teki slug + Google'ın indekslediği birleşik-noktalı varyant
      ...moved(
        [
          `${POST}i-ptali-i-şlemlerine${POST_TAIL}i-ptal-davaları`,
          `${POST}i̇ptali-i̇şlemlerine${POST_TAIL}i̇ptal-davaları`,
        ],
        "/yazilar/docentlik-basvurusunun-reddi-iptali-islemlerine-karsi-acilacak-iptal-davalari",
      ),
      ...moved(
        ["/post/doçentlik-başvurularında-bilimsel-araştırma-ve-yayın-etiği"],
        "/yazilar/docentlik-basvurularinda-bilimsel-arastirma-ve-yayin-etigi",
      ),
      ...moved(
        ["/post/doçentlik-başvuru-kriterleri-değiştirildi"],
        "/yazilar/docentlik-basvuru-kriterleri-degistirildi",
      ),
      // Tanımadığımız eski Wix yazı/kategori/rezervasyon URL'leri 404 yerine ilgili listeye gitsin
      { source: "/post/:slug*", destination: "/yazilar", permanent: true },
      { source: "/yayinlar/categories/:slug*", destination: "/yazilar", permanent: true },
      { source: "/service-page/:slug*", destination: "/online-danismanlik", permanent: true },

      // Wix sitemap/RSS dosyalarını Google hâlâ biliyor → yeni sitemap'e yönlendir
      ...["pages", "page", "blog-posts", "blog-categories", "booking-services"].map((n) => ({
        source: `/${n}-sitemap.xml`,
        destination: "/sitemap.xml",
        permanent: true,
      })),
      { source: "/blog-feed.xml", destination: "/yazilar", permanent: true },

      // Owner'ın yeni hizmet yapısında birleşen eski sayfalar
      { source: "/hizmetler/kira-hukuku", destination: "/hizmetler/borclar-hukuku", permanent: true },
      { source: "/hizmetler/ticaret-hukuku", destination: "/hizmetler/sirketler-hukuku-ve-sozlesme-yonetimi", permanent: true },
      { source: "/hizmetler/sozlesmeler-hukuku", destination: "/hizmetler/sirketler-hukuku-ve-sozlesme-yonetimi", permanent: true },
      { source: "/hizmetler/kvkk-danismanligi", destination: "/hizmetler/hukuki-risk-yonetimi-ve-mevzuata-uyum", permanent: true },
      { source: "/hizmetler/idare-hukuku", destination: "/hizmetler/yuksekogrenim-hukuku", permanent: true },
    ];
  },
};

export default nextConfig;
