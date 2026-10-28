"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SERVICE_LINKS } from "@/lib/nav";

const NAV = [
  { href: "/hizmetler", label: "Hizmetler", children: SERVICE_LINKS },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/yazilar", label: "Yazılar" },
  { href: "/sss", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      style={{ background: "var(--white)", borderBottom: "1px solid var(--border)" }}
      className="sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Gerçek Hukuk ve Arabuluculuk Bürosu"
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
                <div key={item.href} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-[var(--text-muted)] hover:text-[var(--text)] text-sm font-medium transition-colors"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {item.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className="absolute top-full left-0 mt-1 w-80 shadow-xl py-1 z-50"
                    style={{ background: "var(--white)", border: "1px solid var(--border)" }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    hidden={!dropdownOpen}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--stone-2)] transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium transition-colors relative"
                  style={
                    pathname === item.href
                      ? { color: "var(--text)" }
                      : { color: "var(--text-muted)" }
                  }
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
              href="/iletisim"
              style={{
                marginLeft: "0.75rem",
                padding: "0.5rem 1.25rem",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid var(--text)",
                color: "var(--text)",
                textDecoration: "none",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--text)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--white)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
              }}
            >
              Randevu Talep Et
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[var(--text)] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menüyü aç/kapat"
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
          <div className="lg:hidden border-t border-[var(--border)] py-3">
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
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-8 pr-4 py-2.5 text-[var(--text-muted)] hover:text-[var(--text)] text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
