"use server";

import { EMAIL } from "@/lib/schema";
import { validateContact } from "@/lib/contact";

export type ContactState = { ok: boolean; error?: string } | null;

const ERRORS = {
  required: "Lütfen zorunlu alanları doldurun ve aydınlatma metnini okuduğunuzu işaretleyin.",
  length: "Alanlardan biri izin verilen uzunluğu aşıyor.",
  email: "Lütfen geçerli bir e-posta adresi girin.",
  send: `Mesajınız şu anda iletilemedi. Lütfen ${EMAIL} adresine e-posta gönderin veya telefonla ulaşın.`,
};

export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Honeypot doluysa bot: başarılı gibi dön, gönderme.
  if (form.get("website")) return { ok: true };

  const v = validateContact(form);
  if ("error" in v) return { ok: false, error: ERRORS[v.error] };
  const f = v.fields;

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("contact: RESEND_API_KEY tanımlı değil");
    return { ok: false, error: ERRORS.send };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      // shortcut: domain doğrulanana kadar Resend test göndericisi; DNS sonrası CONTACT_FROM ile değiştir.
      from: process.env.CONTACT_FROM ?? "Web Sitesi <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? EMAIL],
      reply_to: f.email,
      subject: `[Web] ${f.konu} — ${f.ad} ${f.soyad}`,
      text: `Ad Soyad: ${f.ad} ${f.soyad}\nE-posta: ${f.email}\nTelefon: ${f.telefon || "-"}\nKonu: ${f.konu}\n\n${f.mesaj}`,
    }),
  });

  if (!res.ok) {
    console.error("contact: Resend", res.status, await res.text());
    return { ok: false, error: ERRORS.send };
  }
  return { ok: true };
}
