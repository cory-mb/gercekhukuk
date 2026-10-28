import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/schema";
import { LINKS, UI, type Lang } from "@/lib/dict";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items, lang = "tr" }: { items: BreadcrumbItem[]; lang?: Lang }) {
  const t = UI[lang];
  const schemaItems = [
    { name: t.home, url: lang === "tr" ? SITE_URL : `${SITE_URL}${LINKS.en.home}` },
    ...items.map((item) => ({
      name: item.label,
      url: item.href ? `${SITE_URL}${item.href}` : SITE_URL,
    })),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(schemaItems)) }}
      />
      <nav aria-label={t.breadcrumb} style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href={LINKS[lang].home} style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.15s" }}>
              {t.home}
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <span style={{ color: "var(--border)" }}>/</span>
              {item.href && i < items.length - 1 ? (
                <Link href={item.href} style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.15s" }}>
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: "var(--text)", fontWeight: 500 }}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
