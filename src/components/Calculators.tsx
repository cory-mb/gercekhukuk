"use client";

import { useState } from "react";
import { arabuluculukUcreti, kidemIhbar, kiraArtis, yasalFaiz, type ArabuluculukTuru } from "@/lib/hesaplama/index.ts";
import { ARABULUCULUK_TURLERI, GELIR_VERGISI_DILIMLERI, KIRA_ARTIS } from "@/lib/hesaplama/parametreler.ts";

type Lang = "tr" | "en";

const T = {
  tr: {
    giris: "İşe giriş tarihi", cikis: "İşten çıkış tarihi", ucret: "Aylık brüt ücret (düzenli yan ödemeler dahil)", gv: "İhbar tazminatı için gelir vergisi dilimi",
    kidem: "Kıdem tazminatı", ihbar: "İhbar tazminatı", brut: "Brüt", damga: "Damga vergisi", gelir: "Gelir vergisi", net: "Net",
    sure: "Çalışma süresi", gun: "gün", hafta: "hafta", tavanNot: "Ücret kıdem tavanını aştığı için tavan esas alındı:", tavanYok: "Bu çıkış tarihi için tavan tanımlı değil; kıdem tazminatı hesaplanmadı.",
    kidemYok: "Bir yıldan az çalışmada kıdem tazminatı hakkı doğmaz.",
    kira: "Mevcut aylık kira", oran: "Artış oranı (%)", oranNot: `${KIRA_ARTIS.donem} için TÜFE 12 aylık ortalama: %${KIRA_ARTIS.oran.toLocaleString("tr-TR")}`, artis: "Artış tutarı", yeni: "Yeni kira",
    tur: "Uyuşmazlık türü", taraf: "Taraf sayısı", sonuc: "Sonuç", anlasma: "Anlaşma sağlandı", anlasmama: "Anlaşma sağlanamadı", tutar: "Anlaşılan tutar",
    ucretSonuc: "Arabuluculuk ücreti", nispi: "Nispi hesap", asgari: "Asgari ücret", saat: "Saat ücreti", anlasmamaNot: "Dava şartı arabuluculukta iki saatlik ücret Adalet Bakanlığı bütçesinden ödenir.", anlasmaNot: "Aksi kararlaştırılmadıkça taraflarca eşit ödenir.",
    anapara: "Anapara", bas: "Başlangıç (temerrüt) tarihi", bit: "Hesap tarihi", faiz: "Faiz", toplam: "Toplam", donem: "Dönem", oranKisa: "Oran",
  },
  en: {
    giris: "Start date", cikis: "Termination date", ucret: "Monthly gross pay (incl. regular benefits)", gv: "Income tax bracket for notice pay",
    kidem: "Severance pay", ihbar: "Notice pay", brut: "Gross", damga: "Stamp duty", gelir: "Income tax", net: "Net",
    sure: "Length of service", gun: "days", hafta: "weeks", tavanNot: "Pay exceeds the severance ceiling, so the ceiling was used:", tavanYok: "No ceiling is defined for this termination date; severance pay was not calculated.",
    kidemYok: "Severance pay requires at least one year of service.",
    kira: "Current monthly rent", oran: "Increase rate (%)", oranNot: `12-month average CPI change for ${KIRA_ARTIS.donemEn}: ${KIRA_ARTIS.oran}%`, artis: "Increase", yeni: "New rent",
    tur: "Dispute type", taraf: "Number of parties", sonuc: "Outcome", anlasma: "Settlement reached", anlasmama: "No settlement", tutar: "Settlement amount",
    ucretSonuc: "Mediation fee", nispi: "Proportional fee", asgari: "Minimum fee", saat: "Hourly fee", anlasmamaNot: "In mandatory mediation, two hours' fee is paid from the Ministry of Justice budget.", anlasmaNot: "Shared equally by the parties unless agreed otherwise.",
    anapara: "Principal", bas: "Start (default) date", bit: "Calculation date", faiz: "Interest", toplam: "Total", donem: "Period", oranKisa: "Rate",
  },
};

const TURLER_EN: Record<ArabuluculukTuru, string> = {
  is: "Employment", ticari: "Commercial", tuketici: "Consumer", kira: "Lease, condominium, neighbour", ortaklik: "Partition of co-ownership", aile: "Family", diger: "Other",
};

const bugun = () => new Date().toISOString().slice(0, 10);

const box = { border: "1px solid var(--border)", background: "var(--white)", padding: "1.5rem" } as const;
const inputStyle = { width: "100%", border: "1px solid var(--border)", background: "var(--white)", color: "var(--text)", padding: "0.625rem 0.75rem", fontSize: "0.9375rem" } as const;
const labelStyle = { display: "block", fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.375rem" } as const;

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "block" }}>
      <span style={labelStyle}>{label}</span>
      {children}
    </label>
  );
}

function Rows({ rows }: { rows: [string, string, boolean?][] }) {
  return (
    <dl style={{ marginTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
      {rows.map(([k, v, strong]) => (
        <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", padding: "0.625rem 0", borderBottom: "1px solid var(--border)", fontWeight: strong ? 700 : 400 }}>
          <dt style={{ color: strong ? "var(--text)" : "var(--text-muted)" }}>{k}</dt>
          <dd style={{ color: "var(--text)", textAlign: "right" }}>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

const num = (s: string) => Number(s.replace(",", "."));
const money = (lang: Lang) => (n: number) =>
  new Intl.NumberFormat(lang === "tr" ? "tr-TR" : "en-GB", { style: "currency", currency: "TRY" }).format(n);

function Kidem({ lang }: { lang: Lang }) {
  const t = T[lang];
  const m = money(lang);
  const [giris, setGiris] = useState("");
  const [cikis, setCikis] = useState(bugun);
  const [ucret, setUcret] = useState("");
  const [gv, setGv] = useState(GELIR_VERGISI_DILIMLERI[0]);
  const r = giris && cikis && ucret ? kidemIhbar(giris, cikis, num(ucret), gv) : null;

  return (
    <div style={box}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t.giris}><input type="date" value={giris} onChange={(e) => setGiris(e.target.value)} style={inputStyle} /></Field>
        <Field label={t.cikis}><input type="date" value={cikis} onChange={(e) => setCikis(e.target.value)} style={inputStyle} /></Field>
        <Field label={t.ucret}><input inputMode="decimal" value={ucret} onChange={(e) => setUcret(e.target.value)} style={inputStyle} placeholder="50000" /></Field>
        <Field label={t.gv}>
          <select value={gv} onChange={(e) => setGv(Number(e.target.value))} style={inputStyle}>
            {GELIR_VERGISI_DILIMLERI.map((d) => <option key={d} value={d}>%{d * 100}</option>)}
          </select>
        </Field>
      </div>
      {r && (
        <>
          <Rows
            rows={[
              [t.sure, `${r.gun} ${t.gun}`],
              [`${t.kidem} — ${t.brut}`, m(r.kidemBrut)],
              [`${t.kidem} — ${t.damga}`, m(r.kidemDamga)],
              [`${t.kidem} — ${t.net}`, m(r.kidemNet), true],
              [`${t.ihbar} (${r.hafta} ${t.hafta}) — ${t.brut}`, m(r.ihbarBrut)],
              [`${t.ihbar} — ${t.gelir}`, m(r.ihbarGelirVergisi)],
              [`${t.ihbar} — ${t.damga}`, m(r.ihbarDamga)],
              [`${t.ihbar} — ${t.net}`, m(r.ihbarNet), true],
            ]}
          />
          <div style={{ marginTop: "1rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            {!r.kidemHakki && <p>{t.kidemYok}</p>}
            {r.kidemHakki && r.tavan === null && <p>{t.tavanYok}</p>}
            {r.tavanUygulandi && r.tavan !== null && <p>{t.tavanNot} {m(r.tavan)}</p>}
          </div>
        </>
      )}
    </div>
  );
}

function Kira({ lang }: { lang: Lang }) {
  const t = T[lang];
  const m = money(lang);
  const [kira, setKira] = useState("");
  const [oran, setOran] = useState(String(KIRA_ARTIS.oran));
  const r = kira ? kiraArtis(num(kira), num(oran)) : null;

  return (
    <div style={box}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t.kira}><input inputMode="decimal" value={kira} onChange={(e) => setKira(e.target.value)} style={inputStyle} placeholder="20000" /></Field>
        <Field label={t.oran}><input inputMode="decimal" value={oran} onChange={(e) => setOran(e.target.value)} style={inputStyle} /></Field>
      </div>
      <p style={{ marginTop: "0.75rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>{t.oranNot}</p>
      {r && <Rows rows={[[t.artis, m(r.artis)], [t.yeni, m(r.yeniKira), true]]} />}
    </div>
  );
}

function Arabuluculuk({ lang }: { lang: Lang }) {
  const t = T[lang];
  const m = money(lang);
  const [tur, setTur] = useState<ArabuluculukTuru>("is");
  const [taraf, setTaraf] = useState<0 | 1 | 2 | 3>(0);
  const [anlasma, setAnlasma] = useState(true);
  const [tutar, setTutar] = useState("");
  const r = arabuluculukUcreti(tur, taraf, anlasma, num(tutar || "0"));

  return (
    <div style={box}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={t.tur}>
          <select value={tur} onChange={(e) => setTur(e.target.value as ArabuluculukTuru)} style={inputStyle}>
            {(Object.keys(ARABULUCULUK_TURLERI) as ArabuluculukTuru[]).map((k) => (
              <option key={k} value={k}>{lang === "tr" ? ARABULUCULUK_TURLERI[k].ad : TURLER_EN[k]}</option>
            ))}
          </select>
        </Field>
        <Field label={t.taraf}>
          <select value={taraf} onChange={(e) => setTaraf(Number(e.target.value) as 0 | 1 | 2 | 3)} style={inputStyle}>
            {["2", "3–5", "6–10", "11+"].map((l, i) => <option key={l} value={i}>{l}</option>)}
          </select>
        </Field>
        <Field label={t.sonuc}>
          <select value={anlasma ? "1" : "0"} onChange={(e) => setAnlasma(e.target.value === "1")} style={inputStyle}>
            <option value="1">{t.anlasma}</option>
            <option value="0">{t.anlasmama}</option>
          </select>
        </Field>
        {anlasma && (
          <Field label={t.tutar}><input inputMode="decimal" value={tutar} onChange={(e) => setTutar(e.target.value)} style={inputStyle} placeholder="100000" /></Field>
        )}
      </div>
      <Rows
        rows={
          anlasma
            ? [[t.nispi, m(r.nispi)], [t.asgari, m(r.asgari)], [t.ucretSonuc, m(r.ucret), true]]
            : [[t.saat, m(r.saatUcreti)], [t.ucretSonuc, m(r.ucret), true]]
        }
      />
      <p style={{ marginTop: "1rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>{anlasma ? t.anlasmaNot : t.anlasmamaNot}</p>
    </div>
  );
}

function Faiz({ lang }: { lang: Lang }) {
  const t = T[lang];
  const m = money(lang);
  const [anapara, setAnapara] = useState("");
  const [bas, setBas] = useState("");
  const [bit, setBit] = useState(bugun);
  const r = anapara && bas && bit ? yasalFaiz(num(anapara), bas, bit) : null;

  return (
    <div style={box}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label={t.anapara}><input inputMode="decimal" value={anapara} onChange={(e) => setAnapara(e.target.value)} style={inputStyle} placeholder="100000" /></Field>
        <Field label={t.bas}><input type="date" value={bas} onChange={(e) => setBas(e.target.value)} style={inputStyle} /></Field>
        <Field label={t.bit}><input type="date" value={bit} onChange={(e) => setBit(e.target.value)} style={inputStyle} /></Field>
      </div>
      {r && (
        <Rows
          rows={[
            ...r.donemler.map((d) => [`${t.donem}: ${d.bas} → ${d.son} (${d.gun} ${t.gun}, %${d.oran})`, m(d.faiz)] as [string, string]),
            [t.faiz, m(r.faiz)],
            [t.toplam, m(r.toplam), true],
          ]}
        />
      )}
    </div>
  );
}

const TOOLS = {
  "kidem-ve-ihbar-tazminati": Kidem,
  "kira-artis-orani": Kira,
  "arabuluculuk-ucreti": Arabuluculuk,
  "yasal-faiz": Faiz,
};

export type ToolKey = keyof typeof TOOLS;

export default function Calculator({ tool, lang = "tr" }: { tool: ToolKey; lang?: Lang }) {
  const C = TOOLS[tool];
  return <C lang={lang} />;
}
