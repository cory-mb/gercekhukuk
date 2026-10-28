import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { PHONE, PHONE_DISPLAY, EMAIL } from "@/lib/schema";
import ContactForm from "@/components/ContactForm";
import { LINKS, UI, type Lang } from "@/lib/dict";

const COPY = {
  tr: {
    title: "İletişim ve Randevu Talebi",
    description: "Gerçek Hukuk ve Arabuluculuk Bürosu ile iletişim: randevu talep formu, telefon, e-posta ve WhatsApp. Pazartesi–Cuma 09:00–18:00.",
    intro: "Randevu talebiniz için formu doldurabilir, arayabilir veya WhatsApp üzerinden yazabilirsiniz.",
    info: "İletişim Bilgileri", address: "Adres", addressValue: "Kadıköy, İstanbul / Türkiye", hours: "Çalışma Saatleri",
    wa: "WhatsApp ile Yaz", waSub: "Hızlı yanıt için tercih edin",
    onlinePre: "Büroya gelemiyorsanız", onlineLink: "online danışmanlık", onlinePost: "seçeneğine bakabilirsiniz.",
    bar: "Baro Bilgileri", barText: "İstanbul 1 No'lu Barosu üyesi",
  },
  en: {
    title: "Contact and Appointments",
    description: "Contact Gerçek Law and Mediation Office in Istanbul: appointment request form, phone, email and WhatsApp. Monday–Friday 09:00–18:00.",
    intro: "To request an appointment, fill in the form, call or write to us on WhatsApp. We work in Turkish and English.",
    info: "Contact Details", address: "Address", addressValue: "Kadıköy, Istanbul / Turkey", hours: "Office Hours",
    wa: "Write on WhatsApp", waSub: "Usually the quickest way to reach us",
    onlinePre: "If you cannot visit the office, see", onlineLink: "online consultation", onlinePost: ".",
    bar: "Bar Membership", barText: "Member of the Istanbul Bar Association",
  },
};

export const contactMetadata = (lang: Lang): Metadata =>
  buildMetadata({ title: COPY[lang].title, description: COPY[lang].description, path: LINKS[lang].contact, lang });

export default function ContactView({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const t = UI[lang];
  const waUrl = `https://api.whatsapp.com/send?phone=${PHONE.replace("+", "")}&text=${encodeURIComponent(t.whatsappText)}`;
  const BILGILER: { label: string; value: string; href?: string }[] = [
    { label: c.address, value: c.addressValue },
    { label: t.phone, value: PHONE_DISPLAY, href: `tel:${PHONE}` },
    { label: t.email, value: EMAIL, href: `mailto:${EMAIL}` },
    { label: c.hours, value: t.hoursLong },
  ];

  return (
    <>
      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb lang={lang} items={[{ label: t.contact, href: LINKS[lang].contact }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            {t.contact}
          </h1>
          <p style={{ marginTop: "0.75rem", color: "var(--text-muted)", fontSize: "0.9375rem" }}>
            {c.intro}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm lang={lang} />
          </div>

          {/* İletişim bilgileri */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>
                {c.info}
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
                  <p style={{ fontWeight: 700, fontSize: "0.875rem" }}>{c.wa}</p>
                  <p style={{ fontSize: "0.75rem", opacity: 0.8 }}>{c.waSub}</p>
                </div>
              </a>

              <p style={{ marginTop: "1.25rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                {c.onlinePre} <a href={LINKS[lang].online} style={{ color: "var(--text)", textDecoration: "underline" }}>{c.onlineLink}</a> {c.onlinePost}
              </p>

              <div style={{ marginTop: "1.25rem", padding: "1.25rem", border: "1px solid var(--border)", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                <strong style={{ color: "var(--text)", display: "block", marginBottom: "0.375rem" }}>{c.bar}</strong>
                {c.barText}<br />
                Av. Kazım Onur Gerçek LL.M
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
