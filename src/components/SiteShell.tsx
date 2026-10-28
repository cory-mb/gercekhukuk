import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { localBusinessSchema } from "@/lib/schema";
import { getPathPairs } from "@/lib/content";
import type { Lang } from "@/lib/dict";

// İki root layout ((tr) ve (en)) aynı kabuğu kullanır; yalnız <html lang> ve metinler değişir.
export default function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className="h-full">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header lang={lang} pairs={getPathPairs()} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
        <WhatsAppButton lang={lang} />
      </body>
    </html>
  );
}
