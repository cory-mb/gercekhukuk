import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { localBusinessSchema } from "@/lib/schema";
import { SITE_URL, SITE_NAME, LAWYER_NAME } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${LAWYER_NAME} - İstanbul`,
    template: `%s | ${LAWYER_NAME} - İstanbul`,
  },
  description:
    "Av. Kazım Onur Gerçek LL.M — İstanbul'da yükseköğretim hukuku, doçentlik iptal davaları, iş hukuku, arabuluculuk, kira hukuku ve sözleşmeler hukuku alanlarında uzman avukat.",
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
  const schema = localBusinessSchema();

  return (
    <html lang="tr" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
