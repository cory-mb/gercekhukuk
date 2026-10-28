"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/iletisim/actions";
import { SERVICE_LINKS } from "@/lib/nav";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(sendContact, null);

  if (state?.ok) {
    return (
      <div className="p-8 text-center" style={{ background: "var(--stone-2)", border: "1px solid var(--border)" }}>
        <div className="text-4xl mb-4">✓</div>
        <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
          Mesajınız İletildi
        </h2>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          En kısa sürede size dönüş yapılacaktır. Pazartesi–Cuma 09:00–18:00 saatleri arasında yanıt verilmektedir.
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
      {/* Honeypot: insanlar görmez, botlar doldurur */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ad" className={labelClass} style={labelStyle}>Ad *</label>
          <input id="ad" name="ad" type="text" required maxLength={80} autoComplete="given-name" className={inputClass} style={inputStyle} placeholder="Adınız" />
        </div>
        <div>
          <label htmlFor="soyad" className={labelClass} style={labelStyle}>Soyad *</label>
          <input id="soyad" name="soyad" type="text" required maxLength={80} autoComplete="family-name" className={inputClass} style={inputStyle} placeholder="Soyadınız" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass} style={labelStyle}>E-Posta *</label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={inputClass} style={inputStyle} placeholder="ornek@email.com" />
        </div>
        <div>
          <label htmlFor="telefon" className={labelClass} style={labelStyle}>Telefon</label>
          <input id="telefon" name="telefon" type="tel" maxLength={40} autoComplete="tel" className={inputClass} style={inputStyle} placeholder="+90 5xx xxx xx xx" />
        </div>
      </div>

      <div>
        <label htmlFor="konu" className={labelClass} style={labelStyle}>Konu *</label>
        <select id="konu" name="konu" required className={inputClass} style={inputStyle} defaultValue="">
          <option value="">Konu seçin...</option>
          {SERVICE_LINKS.map((s) => (
            <option key={s.href}>{s.label}</option>
          ))}
          <option>Online görüşme</option>
          <option>Diğer</option>
        </select>
      </div>

      <div>
        <label htmlFor="mesaj" className={labelClass} style={labelStyle}>Mesaj *</label>
        <textarea id="mesaj" name="mesaj" required maxLength={5000} rows={5} className={inputClass} style={inputStyle} placeholder="Konuyu kısaca açıklayın..." />
      </div>

      {/* Kademeli aydınlatma: kısa bilgi burada, tam metin /kvkk */}
      <div className="text-xs leading-relaxed p-4" style={{ background: "var(--stone-2)", color: "var(--text-muted)" }}>
        <strong style={{ color: "var(--text)" }}>Kişisel verileriniz hakkında kısa bilgi:</strong> Veri sorumlusu Av. Kazım Onur Gerçek&apos;tir.
        Formdaki bilgileriniz, talebinizi yanıtlamak ve randevu sürecini yürütmek amacıyla, sözleşmenin kurulmasıyla doğrudan ilgili olması
        hukuki sebebine (KVKK m.5/2-c) dayanılarak işlenir. Mesajınız, sunucuları yurt dışında bulunan barındırma ve e-posta hizmet sağlayıcıları
        üzerinden iletilir. Lütfen bu formda sağlık, ceza mahkûmiyeti gibi özel nitelikli kişisel veri paylaşmayınız. Haklarınız ve ayrıntılar için{" "}
        <a href="/kvkk" target="_blank" className="underline" style={{ color: "var(--text)" }}>
          Aydınlatma Metni
        </a>
        .
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" name="kvkk" required id="kvkk" className="mt-0.5" />
        <label htmlFor="kvkk" className="text-xs" style={{ color: "var(--text-muted)" }}>
          Kişisel Verilerin İşlenmesi Hakkında Aydınlatma Metni&apos;ni okudum. *
        </label>
      </div>

      {state?.error && (
        <p role="alert" className="text-sm" style={{ color: "var(--danger)" }}>
          {state.error}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn-primary w-full justify-center">
        {pending ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>
    </form>
  );
}
