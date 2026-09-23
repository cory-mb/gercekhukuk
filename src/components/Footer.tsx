import Link from "next/link";
import Image from "next/image";
import { PHONE, EMAIL } from "@/lib/schema";

const HIZMETLER = [
  { href: "/hizmetler/yuksekogrenim-hukuku", label: "Yükseköğretim Hukuku" },
  { href: "/hizmetler/docentlik-iptal-davalari", label: "Doçentlik İptal Davaları" },
  { href: "/hizmetler/is-hukuku", label: "İş Hukuku" },
  { href: "/hizmetler/arabuluculuk", label: "Arabuluculuk" },
  { href: "/hizmetler/kira-hukuku", label: "Kira Hukuku" },
  { href: "/hizmetler/sozlesmeler-hukuku", label: "Sözleşmeler Hukuku" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface-dark)", color: "rgba(255,255,255,0.55)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="Gerçek Hukuk ve Arabuluculuk Bürosu"
                width={140}
                height={42}
                className="h-9 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)", maxWidth: "20rem" }}>
              Av. Kazım Onur Gerçek LL.M — Yükseköğretim hukuku, iş hukuku ve arabuluculuk.
            </p>
            <a
              href="https://www.linkedin.com/in/kaz%C4%B1m-onur-ger%C3%A7ek-ll-m-213648104"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1.25rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
            >
              <svg style={{ width: "1rem", height: "1rem" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Hizmetler */}
          <div>
            <p style={{ fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem", fontFamily: "'Lato', sans-serif" }}>
              Hizmetler
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {HIZMETLER.map((h) => (
                <li key={h.href}>
                  <Link href={h.href} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}>
                    {h.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <p style={{ fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem", fontFamily: "'Lato', sans-serif" }}>
              İletişim
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <li>
                <a href={`mailto:${EMAIL}`} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                  {EMAIL}
                </a>
              </li>
              <li style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)" }}>
                Kadıköy, İstanbul
              </li>
              <li style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)" }}>
                Pzt–Cum 09:00–18:00
              </li>
            </ul>
            <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {[
                { href: "/hakkimda", label: "Hakkımda" },
                { href: "/sss", label: "SSS" },
                { href: "/kvkk", label: "KVKK" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.75rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "0.75rem",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          <p>© {new Date().getFullYear()} Gerçek Hukuk ve Arabuluculuk Bürosu. Tüm hakları saklıdır.</p>
          <p>İstanbul Barosu Üyesi</p>
        </div>
      </div>
    </footer>
  );
}
