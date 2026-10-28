import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "./schema";

export function buildMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  // Layout title.template site adını ekler; OG/Twitter template almadığı için elle eklenir.
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
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
