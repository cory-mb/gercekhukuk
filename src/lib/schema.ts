export const SITE_URL = "https://www.gercekhukuk.com.tr";
export const SITE_NAME = "Gerçek Hukuk ve Arabuluculuk Bürosu";
export const LAWYER_NAME = "Av. Kazım Onur Gerçek LL.M";
export const PHONE = "+905356823872";
export const EMAIL = "gercekavukatlik@gmail.com";
export const ADDRESS = {
  streetAddress: "Kadıköy",
  addressLocality: "Kadıköy",
  addressRegion: "İstanbul",
  postalCode: "34738",
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.9881,
      longitude: 29.0232,
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
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yükseköğretim Hukuku" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Doçentlik İptal Davaları" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "İş Hukuku" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arabuluculuk" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kira Hukuku" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sözleşmeler Hukuku" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "İdare Hukuku" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "KVKK Danışmanlığı" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ticaret Hukuku" } },
      ],
    },
    sameAs: [
      "https://www.linkedin.com/in/kaz%C4%B1m-onur-ger%C3%A7ek-ll-m-213648104",
    ],
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
