"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: bağlan API route veya Formspree endpoint'e
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
  }

  if (sent) {
    return (
      <div
        className="rounded-sm p-8 text-center"
        style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.3)" }}
      >
        <div className="text-4xl mb-4">✓</div>
        <h2 className="text-xl font-bold mb-2" style={{ color: "var(--navy)" }}>
          Mesajınız İletildi
        </h2>
        <p className="text-sm text-gray-600">
          En kısa sürede size geri dönüş yapılacaktır. Pazartesi–Cuma 09:00–18:00 saatleri arasında yanıt verilmektedir.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all";
  const focusStyle = { "--tw-ring-color": "var(--gold)" } as React.CSSProperties;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Ad *</label>
          <input type="text" required className={inputClass} style={focusStyle} placeholder="Adınız" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Soyad *</label>
          <input type="text" required className={inputClass} style={focusStyle} placeholder="Soyadınız" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">E-Posta *</label>
          <input type="email" required className={inputClass} style={focusStyle} placeholder="ornek@email.com" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Telefon</label>
          <input type="tel" className={inputClass} style={focusStyle} placeholder="+90 5xx xxx xx xx" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Konu *</label>
        <select required className={inputClass} style={focusStyle}>
          <option value="">Konu seçin...</option>
          <option>Yükseköğretim Hukuku</option>
          <option>Doçentlik İptal Davası</option>
          <option>İş Hukuku</option>
          <option>Arabuluculuk</option>
          <option>Kira Hukuku</option>
          <option>Sözleşmeler Hukuku</option>
          <option>Diğer</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Mesaj *</label>
        <textarea
          required
          rows={5}
          className={inputClass}
          style={focusStyle}
          placeholder="Hukuki sorununuzu kısaca açıklayın..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" required id="kvkk" className="mt-0.5" />
        <label htmlFor="kvkk" className="text-xs text-gray-500">
          <a href="/kvkk" className="underline" style={{ color: "var(--gold)" }}>
            Kişisel Verilerin İşlenmesi Hakkında Aydınlatma Metni
          </a>
          &apos;ni okudum, onaylıyorum. *
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center"
      >
        {loading ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>
    </form>
  );
}
