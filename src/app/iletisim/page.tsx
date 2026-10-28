import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, PHONE_DISPLAY, EMAIL } from "@/lib/schema";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "İletişim ve Randevu Talebi",
  description:
    "Gerçek Hukuk ve Arabuluculuk Bürosu ile iletişim: randevu talep formu, telefon, e-posta ve WhatsApp. Pazartesi–Cuma 09:00–18:00.",
  path: "/iletisim",
});

const BILGILER = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Adres",
    value: "Kadıköy, İstanbul / Türkiye",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Telefon",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
  },
  {
    icon: null,
    label: "E-posta",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Çalışma Saatleri",
    value: "Pazartesi – Cuma: 09:00 – 18:00",
  },
];

export default function IletisimPage() {
  const waUrl = `https://api.whatsapp.com/send?phone=${PHONE.replace("+", "")}&text=Merhaba%2C%20hukuki%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.`;

  return (
    <>
      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "İletişim", href: "/iletisim" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            İletişim
          </h1>
          <p style={{ marginTop: "0.75rem", color: "var(--text-muted)", fontSize: "0.9375rem" }}>
            Randevu talebiniz için formu doldurabilir, arayabilir veya WhatsApp üzerinden yazabilirsiniz.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* İletişim bilgileri */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>
                İletişim Bilgileri
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {BILGILER.map((b) => (
                  <li key={b.label}>
                    <p style={{ fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-light)", fontFamily: "'Lato', sans-serif", marginBottom: "0.25rem" }}>
                      {b.label}
                    </p>
                    {b.href ? (
                      <a href={b.href} style={{ fontSize: "0.9375rem", color: "var(--text)", textDecoration: "none" }}>
                        {b.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "0.9375rem", color: "var(--text)" }}>{b.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "1.25rem 1.5rem", background: "#25d366", color: "white", textDecoration: "none", transition: "opacity 0.2s" }}
              >
                <svg viewBox="0 0 24 24" style={{ width: "1.75rem", height: "1.75rem", fill: "currentColor", flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.875rem" }}>WhatsApp ile Yaz</p>
                  <p style={{ fontSize: "0.75rem", opacity: 0.8 }}>Hızlı yanıt için tercih edin</p>
                </div>
              </a>

              <div style={{ marginTop: "1.25rem", padding: "1.25rem", border: "1px solid var(--border)", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                <strong style={{ color: "var(--text)", display: "block", marginBottom: "0.375rem" }}>Baro Bilgileri</strong>
                İstanbul 1 No&apos;lu Barosu üyesi<br />
                Av. Kazım Onur Gerçek LL.M
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
