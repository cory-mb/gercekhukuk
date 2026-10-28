import type { Metadata } from "next";
import "../../globals.css";
import SiteShell from "@/components/SiteShell";
import { SITE_URL, SITE_NAME, LAWYER_NAME } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${LAWYER_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Gerçek Hukuk ve Arabuluculuk Bürosu (Gerçek Law and Mediation Office), Istanbul — Av. Kazım Onur Gerçek LL.M. Corporate advisory and compliance, litigation and dispute resolution, mediation.",
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
