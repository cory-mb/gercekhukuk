"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type NavGroup = { key: string; label: string; desc: string; items: { href: string; label: string }[] };

const Chevron = ({ open }: { open: boolean }) => (
  <svg className="w-4 h-4" style={{ transition: "transform .2s", transform: open ? "rotate(180deg)" : "none" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const btn = "flex items-center gap-1 px-3 py-2 text-[var(--text-muted)] hover:text-[var(--gold)] text-sm font-medium transition-colors";
const itemCls = "block py-1.5 px-2 -mx-2 text-sm hover:bg-[var(--stone-2)] text-[var(--text-muted)] hover:text-[var(--gold)] hover:underline underline-offset-4 decoration-[var(--gold)] transition-colors";
const groupTitle: React.CSSProperties = { fontFamily: "'EB Garamond', serif", fontSize: "1.0625rem", fontWeight: 500, color: "var(--text)", lineHeight: 1.25 };

type Props = { label: string; href: string; allLabel: string; groups: NavGroup[]; tools: NavGroup; active: boolean };

export default function ServicesNav({ label, href, allLabel, groups, tools, active }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (!open) return;
    const away = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", away);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", away); document.removeEventListener("keydown", esc); };
  }, [open]);

  const color = { color: active ? "var(--text)" : undefined };

  const hover = {
    onMouseEnter: () => { clearTimeout(timer.current); setOpen(true); },
    onMouseLeave: () => { timer.current = setTimeout(() => setOpen(false), 150); },
  };
  const close = () => setOpen(false);

  return (
    <div ref={ref} className="relative" {...hover}>
      {/* Etiket gerçek bağlantı (/hizmetler); ok klavye ve dokunmatik için. */}
      <div className="flex items-center">
        <Link href={href} className={btn + " !pr-0"} style={color} onClick={close}>{label}</Link>
        <button className="px-1.5 py-2 text-[var(--text-muted)] hover:text-[var(--gold)]" aria-expanded={open} aria-label={label} onClick={() => setOpen(!open)}>
          <Chevron open={open} />
        </button>
      </div>

      {open && (
        <>
          <div className="absolute left-0 right-0 top-full h-8" aria-hidden />
          <div className="fixed left-0 right-0 top-16 lg:top-20 z-50 shadow-xl" style={{ background: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1.5px solid var(--gold)" }}>
            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-3 gap-10">
              {[
                groups.filter((g) => g.key !== "dava"),
                groups.filter((g) => g.key === "dava"),
                [tools],
              ].map((col, n) => (
                <div key={n} style={{ display: "flex", flexDirection: "column", gap: "1.75rem", ...(n === 2 && { borderLeft: "1px solid var(--border)", paddingLeft: "2.5rem" }) }}>
                  {col.map((g) => (
                    <div key={g.key}>
                      <p style={groupTitle}>{g.label}</p>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", margin: "0.25rem 0 0.75rem", lineHeight: 1.45 }}>{g.desc}</p>
                      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "0.5rem" }}>
                        {g.items.map((i) => (
                          <Link key={i.href} href={i.href} className={itemCls} onClick={close}>{i.label}</Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ background: "var(--stone-2)" }}>
              <div className="max-w-7xl mx-auto px-8 py-3">
                <Link href={href} onClick={close} className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--gold)] hover:underline underline-offset-4">{allLabel} →</Link>
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
}
