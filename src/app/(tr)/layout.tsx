import type { Metadata } from "next";
import "../globals.css";
import SiteShell from "@/components/SiteShell";
import { SITE_URL, SITE_NAME } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Av. Kazım Onur Gerçek – Avukatlık Bürosu. Avukat ve arabulucu. Şirketlere hukuki danışmanlık ve mevzuata uyum, dava ve uyuşmazlık çözümü, hukukta iş geliştirme ve kurumsallaşma.",
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  verification: {
    google: "Auz9f-HEQz1Foy533LbNzNTL8cs-_5Z1qUX71nq1yLg",
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="tr">{children}</SiteShell>;
}
