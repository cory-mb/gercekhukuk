// İstemci + sunucu ortak: fs okumaz. Sayfa metinleri view bileşenlerinde, ortak UI metinleri burada.
export type Lang = "tr" | "en";

export const LINKS = {
  tr: {
    home: "/", about: "/hakkimda", services: "/hizmetler", contact: "/iletisim", faq: "/sss", articles: "/yazilar",
    privacy: "/kvkk", calculators: "/hesaplama-araclari", online: "/online-danismanlik",
  },
  en: {
    home: "/en", about: "/en/about", services: "/en/services", contact: "/en/contact", faq: "/en/faq", articles: "/en/articles",
    privacy: "/en/privacy-notice", calculators: "/en/calculators", online: "/en/online-consultation",
  },
};

export const SERVICE_LINKS = {
  tr: [
    { href: "/hizmetler/yuksekogrenim-hukuku", label: "Vakıf Üniversiteleri Uyuşmazlıkları" },
    { href: "/hizmetler/docentlik-iptal-davalari", label: "Doçentlik İptal Davaları" },
    { href: "/hizmetler/is-hukuku", label: "İş Hukuku" },
    { href: "/hizmetler/sirketler-hukuku-ve-sozlesme-yonetimi", label: "Şirketler Hukuku ve Sözleşme Yönetimi" },
    { href: "/hizmetler/borclar-hukuku", label: "Borçlar Hukuku" },
    { href: "/hizmetler/bilisim-suclari", label: "Bilişim Suçları" },
    { href: "/hizmetler/icra-hukuku", label: "İcra Hukuku" },
    { href: "/hizmetler/aile-hukuku", label: "Aile Hukuku" },
    { href: "/hizmetler/hukuki-risk-yonetimi-ve-mevzuata-uyum", label: "Hukuki Risk Yönetimi ve Mevzuata Uyum" },
    { href: "/hizmetler/hukukta-is-gelistirme-ve-kurumsallasma", label: "Hukukta İş Geliştirme ve Kurumsallaşma" },
    { href: "/hizmetler/arabuluculuk", label: "Arabuluculuk" },
  ],
  en: [
    { href: "/en/services/foundation-university-disputes", label: "Foundation University Disputes" },
    { href: "/en/services/associate-professorship-annulment-actions", label: "Associate Professorship Annulment Actions" },
    { href: "/en/services/employment-law", label: "Employment Law" },
    { href: "/en/services/corporate-law-and-contract-management", label: "Corporate Law and Contract Management" },
    { href: "/en/services/law-of-obligations", label: "Law of Obligations" },
    { href: "/en/services/cybercrime", label: "Cybercrime" },
    { href: "/en/services/enforcement-law", label: "Enforcement Law" },
    { href: "/en/services/family-law", label: "Family Law" },
    { href: "/en/services/legal-risk-management-and-compliance", label: "Legal Risk Management and Compliance" },
    { href: "/en/services/business-development-for-law-firms", label: "Business Development for Law Firms" },
    { href: "/en/services/mediation", label: "Mediation" },
  ],
};

export const AXES = {
  tr: [
    { key: "danismanlik", label: "Şirketlere Hukuki Danışmanlık ve Mevzuata Uyum", desc: "Şirketler hukuku, sözleşme yönetimi, hukuki risk ve uyum süreçleri." },
    { key: "dava", label: "Dava ve Uyuşmazlık Çözümü", desc: "Yükseköğretim, iş, borçlar, icra, aile hukuku, bilişim suçları ve arabuluculuk." },
    { key: "kurumsallasma", label: "İş Geliştirme ve Kurumsallaşma", desc: "Hukuk bürolarına iş geliştirme ve kurumsallaşma desteği." },
  ],
  en: [
    { key: "danismanlik", label: "Corporate Advisory and Regulatory Compliance", desc: "Corporate law, contract management, legal risk and compliance." },
    { key: "dava", label: "Litigation and Dispute Resolution", desc: "Higher education, employment, obligations, enforcement, family law, cybercrime and mediation." },
    { key: "kurumsallasma", label: "Business Development and Institutionalisation", desc: "Business development and institutional structuring for law firms." },
  ],
} as const;

export const UI = {
  tr: {
    home: "Anasayfa", services: "Hizmetler", about: "Hakkımda", articles: "Yazılar", calculators: "Hesaplama", calculatorsLong: "Hesaplama Araçları",
    faq: "SSS", contact: "İletişim", online: "Online Danışmanlık", privacy: "KVKK", cta: "Randevu Talep Et",
    switchLabel: "English", switchLang: "en", menu: "Menüyü aç/kapat", breadcrumb: "Sayfa yolu",
    tagline: "Av. Kazım Onur Gerçek LL.M — Şirketlere hukuki danışmanlık ve mevzuata uyum, dava ve uyuşmazlık çözümü, iş geliştirme ve kurumsallaşma.",
    hours: "Pzt–Cum 09:00–18:00", hoursLong: "Pazartesi – Cuma: 09:00 – 18:00", location: "Kadıköy, İstanbul", rights: "Tüm hakları saklıdır.", bar: "İstanbul 1 No'lu Barosu üyesi",
    whatsappAria: "WhatsApp ile iletişime geç", whatsappText: "Merhaba, hukuki danışmanlık almak istiyorum.",
    updated: "Güncelleme", readTime: "Okuma süresi", faqTitle: "Sık Sorulan Sorular", related: "İlgili Hizmetler",
    asideText: "Durumunuzu görüşmek için randevu talep edebilirsiniz.", relatedService: "İlgili hizmet",
    allPosts: "← Tüm Yazılar", readMore: "Devamını Oku", noPosts: "Henüz yazı eklenmemiş.", author: "Yazar hakkında", cv: "Özgeçmiş",
    authorBio: "Av. Kazım Onur Gerçek LL.M, 2009'dan bu yana avukat, 2023'ten bu yana arabulucudur. 2014–2020 yılları arasında bir vakıf üniversitesinde kıdemli avukat olarak kurumun dava, sözleşme ve KVKK uyum süreçlerini yürüttü.",
    postCta: "Bu konuda hukuki destek almak ister misiniz?", toolCta: "Sonucu kendi durumunuza göre değerlendirmek ister misiniz?",
    params: "Parametreler", toolDisclaimer: "Sonuçlar bilgilendirme amaçlı bir tahmindir ve hukuki görüş yerine geçmez.",
    phone: "Telefon", email: "E-posta",
  },
  en: {
    home: "Home", services: "Services", about: "About", articles: "Articles", calculators: "Calculators", calculatorsLong: "Legal Calculators",
    faq: "FAQ", contact: "Contact", online: "Online Consultation", privacy: "Privacy Notice", cta: "Request an Appointment",
    switchLabel: "Türkçe", switchLang: "tr", menu: "Toggle menu", breadcrumb: "Breadcrumb",
    tagline: "Av. Kazım Onur Gerçek LL.M — Corporate advisory and regulatory compliance, litigation and dispute resolution, business development and institutionalisation.",
    hours: "Mon–Fri 09:00–18:00", hoursLong: "Monday – Friday: 09:00 – 18:00", location: "Kadıköy, Istanbul", rights: "All rights reserved.", bar: "Member of the Istanbul Bar Association",
    whatsappAria: "Contact via WhatsApp", whatsappText: "Hello, I would like to ask about legal advice.",
    updated: "Updated", readTime: "Reading time", faqTitle: "Frequently Asked Questions", related: "Related Services",
    asideText: "You can request an appointment to discuss your matter.", relatedService: "Related service",
    allPosts: "← All articles", readMore: "Read more", noPosts: "No articles yet.", author: "About the author", cv: "Profile",
    authorBio: "Av. Kazım Onur Gerçek LL.M has practised law since 2009 and has been a registered mediator since 2023. From 2014 to 2020 he was senior counsel at a foundation university, handling its litigation, contracts and data protection compliance.",
    postCta: "Would you like legal support on this matter?", toolCta: "Would you like your result reviewed for your situation?",
    params: "Parameters", toolDisclaimer: "Results are an estimate for information only and do not constitute legal advice.",
    phone: "Phone", email: "Email",
  },
};

export function langOf(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "tr";
}
