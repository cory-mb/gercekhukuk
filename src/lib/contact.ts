// Saf doğrulama: server action ve testler birlikte kullanır.
export const CONTACT_LIMITS = { ad: 80, soyad: 80, email: 200, telefon: 40, konu: 120, mesaj: 5000 } as const;
export type ContactFields = Record<keyof typeof CONTACT_LIMITS, string>;

export function validateContact(form: FormData): { fields: ContactFields } | { error: "required" | "length" | "email" } {
  const fields = Object.fromEntries(
    Object.keys(CONTACT_LIMITS).map((k) => [k, String(form.get(k) ?? "").trim()])
  ) as ContactFields;
  if (!fields.ad || !fields.soyad || !fields.email || !fields.konu || !fields.mesaj || form.get("kvkk") !== "on") {
    return { error: "required" };
  }
  if ((Object.keys(CONTACT_LIMITS) as (keyof ContactFields)[]).some((k) => fields[k].length > CONTACT_LIMITS[k])) {
    return { error: "length" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return { error: "email" };
  return { fields };
}
