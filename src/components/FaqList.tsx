"use client";

import Link from "next/link";
import { useState } from "react";

type Group = { slug: string; title: string; href: string; faqs: { q: string; a: string }[] };

// Türkçe harf ve büyük/küçük harf farkını yok sayar ("İş" = "is" = "IŞ").
const norm = (s: string) =>
  s.toLocaleLowerCase("tr").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ı/g, "i");

const T = {
  tr: { placeholder: "Soru ara…", label: "Sorularda ara", none: "Eşleşen soru bulunamadı.", found: (n: number) => `${n} soru bulundu`, go: "Bu alanın sayfasına git" },
  en: { placeholder: "Search questions…", label: "Search questions", none: "No matching questions.", found: (n: number) => `${n} questions found`, go: "Go to this practice area" },
};

const Chevron = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: "1rem", height: "1rem", color: "var(--gold)", flexShrink: 0, transition: "transform 0.2s" }}>
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

export default function FaqList({ groups, lang }: { groups: Group[]; lang: "tr" | "en" }) {
  const t = T[lang];
  const [query, setQuery] = useState("");
  const tokens = norm(query).split(/\s+/).filter(Boolean);
  const searching = tokens.length > 0;

  const shown = groups
    .map((g) => ({
      ...g,
      faqs: searching ? g.faqs.filter((f) => { const hay = norm(f.q + " " + f.a); return tokens.every((x) => hay.includes(x)); }) : g.faqs,
    }))
    .filter((g) => g.faqs.length > 0);
  const total = shown.reduce((n, g) => n + g.faqs.length, 0);

  return (
    <>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t.placeholder}
        aria-label={t.label}
        style={{ width: "100%", border: "1px solid var(--border)", background: "var(--white)", color: "var(--text)", padding: "0.75rem 1rem", fontSize: "1rem", marginBottom: "0.75rem" }}
      />
      <p aria-live="polite" style={{ minHeight: "1.25rem", marginBottom: "1rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
        {searching ? (total ? t.found(total) : t.none) : ""}
      </p>

      <div style={{ borderTop: "1px solid var(--border)" }}>
        {shown.map((s) => (
          <details key={`${s.slug}-${searching ? "o" : "c"}`} className="faq-item" open={searching}>
            <summary style={{ fontWeight: 700 }}>
              <span>
                {s.title} <span style={{ color: "var(--text-muted)", fontSize: "0.875rem", fontWeight: 400 }}>({s.faqs.length})</span>
              </span>
              <Chevron />
            </summary>
            <div style={{ paddingLeft: "1rem", paddingBottom: "1.25rem", borderTop: "1px solid var(--border)" }}>
              {s.faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>
                    {f.q}
                    <Chevron />
                  </summary>
                  <div className="faq-answer">{f.a}</div>
                </details>
              ))}
              <Link href={s.href} style={{ display: "inline-block", marginTop: "1rem", fontSize: "0.875rem", color: "var(--gold-muted)" }}>
                {t.go} →
              </Link>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
