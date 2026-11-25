"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LINKS, SERVICE_LINKS, UI, type Lang } from "@/lib/dict";
import { SITE_NAME } from "@/lib/schema";
import ServicesNav, { type NavGroup } from "@/components/ServicesNav";

// pairs: [trYolu, enYolu] — layout sunucuda içerikten üretir, burada dil değiştirici için kullanılır.
export default function Header({ lang, pairs, groups, tools }: { lang: Lang; pairs: [string, string][]; groups: NavGroup[]; tools: NavGroup }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = UI[lang];
  const L = LINKS[lang];
  const NAV = [
    { href: L.services, label: t.services, children: SERVICE_LINKS[lang] },
    { href: L.about, label: t.about },
    { href: L.articles, label: t.articles },
    { href: L.calculators, label: t.calculators },
    { href: L.faq, label: t.faq },
    { href: L.contact, label: t.contact },
  ];
  const pair = pairs.find((p) => p[lang === "tr" ? 0 : 1] === pathname);
  const switchHref = pair ? pair[lang === "tr" ? 1 : 0] : LINKS[t.switchLang as Lang].home;

  return (
    <header
      style={{ background: "var(--white)", borderBottom: "1px solid var(--border)" }}
      className="sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={L.home} className="flex items-center">
            <Image
              src="/logo.png"
              alt={SITE_NAME}
              width={160}
              height={48}
              priority
              className="h-10 w-auto logo-img"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) =>
              item.children ? (
                <ServicesNav key={item.href} label={item.label} href={item.href} allLabel={t.allServices} groups={groups} tools={tools} active={pathname.startsWith(item.href)} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative hover:text-[var(--gold)] ${pathname === item.href ? "text-[var(--text)]" : "text-[var(--text-muted)]"}`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-px"
                      style={{ background: "var(--gold)" }}
                    />
                  )}
                </Link>
              )
            )}
            <Link
              href={L.contact}
              style={{
                marginLeft: "0.75rem",
                padding: "0.625rem 1.5rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid var(--text)",
                background: "var(--text)",
                color: "var(--white)",
                textDecoration: "none",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--text)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--white)";
              }}
            >
              {t.cta}
            </Link>
            <span className="pl-4 pr-1 py-2 text-sm font-medium text-[var(--text-muted)]">
              {(["tr", "en"] as const).map((l, i) => (
                <span key={l}>
                  {i > 0 && <span aria-hidden> / </span>}
                  {l === lang ? (
                    <span aria-current="true" className="font-bold text-[var(--text)]">{l.toUpperCase()}</span>
                  ) : (
                    <Link href={switchHref} hrefLang={l} lang={l} aria-label={t.switchLabel} title={t.switchLabel} className="hover:text-[var(--gold)]">
                      {l.toUpperCase()}
                    </Link>
                  )}
                </span>
              ))}
            </span>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[var(--text)] p-2"
            onClick={() => setOpen(!open)}
            aria-label={t.menu}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-[var(--border)] py-3 overflow-y-auto overscroll-contain" style={{ maxHeight: "calc(100dvh - 4rem)" }}>
            {NAV.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium transition-colors"
                  style={{ color: pathname === item.href ? "var(--text)" : "var(--text-muted)" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children &&
                  groups.map((g) => (
                      <div key={g.label}>
                        <p className="pl-8 pr-4 pt-3 pb-1 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--gold-muted)" }}>{g.label}</p>
                        {g.items.map((child) => (
                          <Link key={child.href} href={child.href} className="block pl-8 pr-4 py-2 text-[var(--text-muted)] hover:text-[var(--gold)] text-sm" onClick={() => setOpen(false)}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                  ))}
              </div>
            ))}
            <Link href={switchHref} hrefLang={t.switchLang} lang={t.switchLang} className="block px-4 py-3 text-sm font-medium text-[var(--text-muted)]" onClick={() => setOpen(false)}>
              {t.switchLabel}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
