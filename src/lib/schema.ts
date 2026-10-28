import { SERVICE_LINKS } from "./dict";

export const SITE_URL = "https://www.gercekhukuk.com.tr";
export const SITE_NAME = "Av. Kazım Onur Gerçek – Avukatlık Bürosu";
export const SITE_NAME_EN = "Av. Kazım Onur Gerçek – Law Office";
export const LAWYER_NAME = "Av. Kazım Onur Gerçek LL.M";
export const PHONE = "+905356823872";
export const PHONE_DISPLAY = "+90 535 682 38 72";
export const EMAIL = "gercekavukatlik@gmail.com";
export const PRACTICE_SINCE = "2009";
// Owner'dan gelince doldurulur; boşken sayfada gösterilmez.
export const BARO_SICIL = "";
export const TBB_SICIL = "";
export const KEP = "";
// Online danışmanlık: owner randevu aracını ve TBB onaylı POS ödeme linkini seçince doldurulur; boşken buton forma gider.
export const BOOKING_URL = "";
export const PAYMENT_URL = "";
// Owner istemiyor: sokak/posta kodu/koordinat yok, yalnız ilçe düzeyi.
export const ADDRESS = {
  addressLocality: "Kadıköy",
  addressRegion: "İstanbul",
  addressCountry: "TR",
};

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LegalService"],
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/logo.png`,
    founder: {
      "@type": "Person",
      name: LAWYER_NAME,
      jobTitle: "Avukat & Arabulucu",
      alumniOf: "Marmara Üniversitesi Hukuk Fakültesi",
    },
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: { "@type": "City", name: "İstanbul" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hukuki Hizmetler",
      itemListElement: SERVICE_LINKS.tr.map((l) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: l.label, url: `${SITE_URL}${l.href}` } })),
    },
    sameAs: [
      "https://www.linkedin.com/in/kaz%C4%B1m-onur-ger%C3%A7ek-ll-m-213648104",
    ],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/hakkimda#person`,
    name: LAWYER_NAME,
    url: `${SITE_URL}/hakkimda`,
    image: `${SITE_URL}/kazim-onur-gercek.jpg`,
    jobTitle: "Avukat ve Arabulucu",
    worksFor: { "@type": "LegalService", name: SITE_NAME, url: SITE_URL },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Marmara Üniversitesi" },
      { "@type": "CollegeOrUniversity", name: "Gazi Üniversitesi" },
      { "@type": "CollegeOrUniversity", name: "Yeditepe Üniversitesi" },
    ],
    memberOf: { "@type": "Organization", name: "İstanbul 1 No'lu Barosu" },
    knowsLanguage: ["tr", "en"],
    sameAs: ["https://www.linkedin.com/in/kaz%C4%B1m-onur-ger%C3%A7ek-ll-m-213648104"],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/hakkimda#person`,
      name: LAWYER_NAME,
      url: `${SITE_URL}/hakkimda`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
