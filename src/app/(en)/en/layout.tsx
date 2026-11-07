import type { Metadata } from "next";
import "../../globals.css";
import SiteShell from "@/components/SiteShell";
import { SITE_URL, SITE_TITLE } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description:
    "Av. Kazım Onur Gerçek – Law Office, Istanbul. Attorney and mediator. Corporate advisory and compliance, litigation and dispute resolution, mediation.",
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    siteName: SITE_TITLE,
    locale: "en_GB",
    type: "website",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
