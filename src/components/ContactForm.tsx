"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/lib/contact-action";
import { LINKS, SERVICE_LINKS, type Lang } from "@/lib/dict";

const T = {
  tr: {
    sentTitle: "Mesajınız İletildi",
    sentText: "En kısa sürede size dönüş yapılacaktır. Pazartesi–Cuma 09:00–18:00 saatleri arasında yanıt verilmektedir.",
    ad: "Ad", adPh: "Adınız", soyad: "Soyad", soyadPh: "Soyadınız", email: "E-Posta", telefon: "Telefon", konu: "Konu", konuPh: "Konu seçin...",
    online: "Online görüşme", diger: "Diğer", mesaj: "Mesaj", mesajPh: "Konuyu kısaca açıklayın...",
    noticeTitle: "Kişisel verileriniz hakkında kısa bilgi:",
    notice:
      "Veri sorumlusu Av. Kazım Onur Gerçek'tir. Formdaki bilgileriniz, talebinizi yanıtlamak ve randevu sürecini yürütmek amacıyla, sözleşmenin kurulmasıyla doğrudan ilgili olması hukuki sebebine (KVKK m.5/2-c) dayanılarak işlenir. Mesajınız, sunucuları yurt dışında bulunan barındırma ve e-posta hizmet sağlayıcıları üzerinden iletilir. Lütfen bu formda sağlık, ceza mahkûmiyeti gibi özel nitelikli kişisel veri paylaşmayınız. Haklarınız ve ayrıntılar için",
    noticeLink: "Aydınlatma Metni",
    check: "Kişisel Verilerin İşlenmesi Hakkında Aydınlatma Metni'ni okudum.",
    send: "Mesaj Gönder", sending: "Gönderiliyor...",
  },
  en: {
    sentTitle: "Message Sent",
    sentText: "We will get back to you as soon as possible. Replies are sent Monday to Friday, 09:00–18:00 (Istanbul time).",
    ad: "First name", adPh: "First name", soyad: "Last name", soyadPh: "Last name", email: "Email", telefon: "Phone", konu: "Subject", konuPh: "Choose a subject...",
    online: "Online consultation", diger: "Other", mesaj: "Message", mesajPh: "Briefly describe your matter...",
    noticeTitle: "About your personal data:",
    notice:
      "The data controller is Av. Kazım Onur Gerçek. The information in this form is processed to answer your request and arrange an appointment, on the legal ground that it is directly related to entering into a contract (Turkish Data Protection Law, Art. 5(2)(c)). Your message is transmitted through hosting and email providers with servers outside Turkey. Please do not share special category data such as health or criminal record information in this form. For your rights and further details, see the",
    noticeLink: "Privacy Notice",
    check: "I have read the Privacy Notice.",
    send: "Send Message", sending: "Sending...",
  },
};

export default function ContactForm({ lang = "tr" }: { lang?: Lang }) {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(sendContact, null);
  const t = T[lang];

  if (state?.ok) {
    return (
      <div className="p-8 text-center" style={{ background: "var(--stone-2)", border: "1px solid var(--border)" }}>
        <div className="text-4xl mb-4">✓</div>
        <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
          {t.sentTitle}
        </h2>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          {t.sentText}
        </p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all";
  const inputStyle = { border: "1px solid var(--border)", background: "var(--white)", color: "var(--text)", "--tw-ring-color": "var(--gold)" } as React.CSSProperties;
  const labelClass = "block text-xs font-semibold mb-1.5";
  const labelStyle = { color: "var(--text-muted)" };

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="lang" value={lang} />
      {/* Honeypot: insanlar görmez, botlar doldurur */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ad" className={labelClass} style={labelStyle}>{t.ad} *</label>
          <input id="ad" name="ad" type="text" required maxLength={80} autoComplete="given-name" className={inputClass} style={inputStyle} placeholder={t.adPh} />
        </div>
        <div>
          <label htmlFor="soyad" className={labelClass} style={labelStyle}>{t.soyad} *</label>
          <input id="soyad" name="soyad" type="text" required maxLength={80} autoComplete="family-name" className={inputClass} style={inputStyle} placeholder={t.soyadPh} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass} style={labelStyle}>{t.email} *</label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={inputClass} style={inputStyle} placeholder="ornek@email.com" />
        </div>
        <div>
          <label htmlFor="telefon" className={labelClass} style={labelStyle}>{t.telefon}</label>
          <input id="telefon" name="telefon" type="tel" maxLength={40} autoComplete="tel" className={inputClass} style={inputStyle} placeholder="+90 5xx xxx xx xx" />
        </div>
      </div>

      <div>
        <label htmlFor="konu" className={labelClass} style={labelStyle}>{t.konu} *</label>
        <select id="konu" name="konu" required className={inputClass} style={inputStyle} defaultValue="">
          <option value="">{t.konuPh}</option>
          {SERVICE_LINKS[lang].map((s) => (
            <option key={s.href}>{s.label}</option>
          ))}
          <option>{t.online}</option>
          <option>{t.diger}</option>
        </select>
      </div>

      <div>
        <label htmlFor="mesaj" className={labelClass} style={labelStyle}>{t.mesaj} *</label>
        <textarea id="mesaj" name="mesaj" required maxLength={5000} rows={5} className={inputClass} style={inputStyle} placeholder={t.mesajPh} />
      </div>

      {/* Kademeli aydınlatma: kısa bilgi burada, tam metin ayrı sayfada */}
      <div className="text-xs leading-relaxed p-4" style={{ background: "var(--stone-2)", color: "var(--text-muted)" }}>
        <strong style={{ color: "var(--text)" }}>{t.noticeTitle}</strong> {t.notice}{" "}
        <a href={LINKS[lang].privacy} target="_blank" className="underline" style={{ color: "var(--text)" }}>
          {t.noticeLink}
        </a>
        .
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" name="kvkk" required id="kvkk" className="mt-0.5" />
        <label htmlFor="kvkk" className="text-xs" style={{ color: "var(--text-muted)" }}>
          {t.check} *
        </label>
      </div>

      {state?.error && (
        <p role="alert" className="text-sm" style={{ color: "var(--danger)" }}>
          {state.error}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn-primary w-full justify-center">
        {pending ? t.sending : t.send}
      </button>
    </form>
  );
}
