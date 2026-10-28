import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı / Page not found",
  robots: { index: false },
};

// İki root layout olduğundan eşleşmeyen URL'ler için ortak 404 (next.config experimental.globalNotFound).
export default function GlobalNotFound() {
  return (
    <html lang="tr">
      <body style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Sayfa bulunamadı</h1>
          <p style={{ color: "var(--text-muted)" }}>
            <a href="/">Anasayfaya dönün</a> · <a href="/en" lang="en">Page not found — go to the English homepage</a>
          </p>
        </div>
      </body>
    </html>
  );
}
