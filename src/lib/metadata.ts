import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "./schema";
import { getPathPairs } from "./content";
import type { Lang } from "./dict";

export function alternatesFor(path: string, lang: Lang) {
  const self = path || (lang === "tr" ? "/" : "/en");
  const pair = getPathPairs().find((p) => p[lang === "tr" ? 0 : 1] === self);
  const languages = pair
    ? { "tr-TR": `${SITE_URL}${pair[0] === "/" ? "" : pair[0]}`, en: `${SITE_URL}${pair[1]}`, "x-default": `${SITE_URL}${pair[0] === "/" ? "" : pair[0]}` }
    : undefined;
  return { canonical: `${SITE_URL}${path}`, languages };
}

export function buildMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  lang = "tr",
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  lang?: Lang;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  // Layout title.template site adını ekler; OG/Twitter template almadığı için elle eklenir.
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: alternatesFor(path, lang),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: lang === "tr" ? "tr_TR" : "en_GB",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  };
}
