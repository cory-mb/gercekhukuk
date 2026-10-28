"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/hizmetler/yuksekogrenim-hukuku", label: "Yükseköğretim Hukuku" },
  {
    href: "/hizmetler",
    label: "Hizmetler",
    children: [
      { href: "/hizmetler/docentlik-iptal-davalari", label: "Doçentlik İptal Davaları" },
      { href: "/hizmetler/is-hukuku", label: "İş Hukuku" },
      { href: "/hizmetler/arabuluculuk", label: "Arabuluculuk" },
      { href: "/hizmetler/kira-hukuku", label: "Kira Hukuku" },
      { href: "/hizmetler/sozlesmeler-hukuku", label: "Sözleşmeler Hukuku" },
    ],
  },
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
      style={{ background: "var(--surface-dark)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
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
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-gray-200 hover:text-white text-sm font-medium transition-colors"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {item.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className="absolute top-full left-0 mt-1 w-56 shadow-xl py-1 z-50"
                    style={{ background: "var(--surface-dark-2)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    hidden={!dropdownOpen}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
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
                      ? { color: "var(--gold-light)" }
                      : item.href === "/hizmetler/yuksekogrenim-hukuku"
                      ? { color: "var(--gold)" }
                      : { color: "rgba(255,255,255,0.75)" }
                  }
                >
                  {item.label}
                  {pathname === item.href && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-px"
                      style={{ background: "var(--gold-light)" }}
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
                border: "1px solid rgba(201,168,76,0.6)",
                color: "var(--gold-light)",
                textDecoration: "none",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--surface-dark)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-light)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.6)";
              }}
            >
              Randevu Talep Et
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-gray-200 p-2"
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
          <div className="lg:hidden border-t border-white/10 py-3">
            {NAV.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium transition-colors"
                  style={{ color: pathname === item.href ? "var(--gold-light)" : "rgba(255,255,255,0.75)" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-8 pr-4 py-2.5 text-gray-400 hover:text-gray-200 text-sm"
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
