import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Analytics from "@/components/Analytics";
import { localBusinessSchema } from "@/lib/schema";
import { getPathPairs, getServices, getTools } from "@/lib/content";
import { AXES, LINKS, SERVICE_LINKS, UI, type Lang } from "@/lib/dict";

const TOOLS_DESC = { tr: "Kıdem, kira artışı, yasal faiz ve arabuluculuk ücreti için hızlı hesaplamalar.", en: "Quick calculations for severance, rent increase, statutory interest and mediation fees." };

// İki root layout ((tr) ve (en)) aynı kabuğu kullanır; yalnız <html lang> ve metinler değişir.
export default function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const services = getServices(lang);
  const groups = AXES[lang].map((a) => ({
    key: a.key,
    label: a.label,
    desc: a.desc,
    items: services
      .filter((s) => s.axis === a.key)
      .sort((x, y) => x.order - y.order)
      .map((s) => { const href = `${LINKS[lang].services}/${s.slug}`; return { href, label: SERVICE_LINKS[lang].find((l) => l.href === href)?.label ?? s.title }; }),
  }));
  const tools = {
    key: "tools",
    label: UI[lang].calculatorsLong,
    desc: TOOLS_DESC[lang],
    items: getTools(lang).sort((x, y) => x.order - y.order).map((x) => ({ href: `${LINKS[lang].calculators}/${x.slug}`, label: x.title })),
  };
  return (
    <html lang={lang} className="h-full">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header lang={lang} pairs={getPathPairs()} groups={groups} tools={tools} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} groups={groups} />
        <WhatsAppButton lang={lang} />
        <Analytics />
      </body>
    </html>
  );
}
