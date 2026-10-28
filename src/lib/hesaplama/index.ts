import {
  ARABULUCULUK_DILIMLERI,
  ARABULUCULUK_TURLERI,
  DAMGA_VERGISI,
  KIDEM_TAVANI,
  YASAL_FAIZ,
} from "./parametreler.ts";

const GUN = 86400000;
const gunFarki = (a: string, b: string) => Math.round((Date.parse(b) - Date.parse(a)) / GUN);
const yuvarla = (n: number) => Math.round(n * 100) / 100;

function ayEkle(tarih: string, ay: number) {
  const d = new Date(tarih + "T00:00:00Z");
  d.setUTCMonth(d.getUTCMonth() + ay);
  return d.toISOString().slice(0, 10);
}

export function kidemIhbar(giris: string, cikis: string, brutUcret: number, gelirVergisiOrani: number) {
  const gun = gunFarki(giris, cikis);
  if (!(gun > 0) || !(brutUcret > 0)) return null;

  const tavan = KIDEM_TAVANI.find((t) => cikis >= t.baslangic && cikis <= t.bitis)?.tutar ?? null;
  const kidemHakki = gun >= 365;
  const kidemBrut = kidemHakki && tavan !== null ? yuvarla((Math.min(brutUcret, tavan) * gun) / 365) : 0;
  const kidemDamga = yuvarla(kidemBrut * DAMGA_VERGISI);

  // İş K. m.17: 6 ay, 1,5 yıl, 3 yıl eşikleri
  const hafta = cikis < ayEkle(giris, 6) ? 2 : cikis < ayEkle(giris, 18) ? 4 : cikis < ayEkle(giris, 36) ? 6 : 8;
  const ihbarBrut = yuvarla((brutUcret / 30) * hafta * 7);
  const ihbarGelirVergisi = yuvarla(ihbarBrut * gelirVergisiOrani);
  const ihbarDamga = yuvarla(ihbarBrut * DAMGA_VERGISI);

  return {
    gun,
    tavan,
    tavanUygulandi: tavan !== null && brutUcret > tavan,
    kidemHakki,
    kidemBrut,
    kidemDamga,
    kidemNet: yuvarla(kidemBrut - kidemDamga),
    hafta,
    ihbarBrut,
    ihbarGelirVergisi,
    ihbarDamga,
    ihbarNet: yuvarla(ihbarBrut - ihbarGelirVergisi - ihbarDamga),
  };
}

export function kiraArtis(mevcutKira: number, oran: number) {
  if (!(mevcutKira > 0) || !(oran >= 0)) return null;
  const artis = yuvarla((mevcutKira * oran) / 100);
  return { artis, yeniKira: yuvarla(mevcutKira + artis) };
}

export type ArabuluculukTuru = keyof typeof ARABULUCULUK_TURLERI;

export function arabuluculukUcreti(tur: ArabuluculukTuru, tarafGrubu: 0 | 1 | 2 | 3, anlasma: boolean, tutar = 0) {
  const t = ARABULUCULUK_TURLERI[tur];
  const saatUcreti = t.saat[tarafGrubu];
  if (!anlasma) return { ucret: saatUcreti * 2, saatUcreti, nispi: 0, asgari: t.asgari };

  let kalan = Math.max(tutar, 0);
  let nispi = 0;
  for (const [genislik, oran] of ARABULUCULUK_DILIMLERI) {
    const dilim = Math.min(kalan, genislik);
    nispi += dilim * oran;
    kalan -= dilim;
    if (kalan <= 0) break;
  }
  nispi = yuvarla(nispi);
  return { ucret: Math.max(nispi, t.asgari), saatUcreti, nispi, asgari: t.asgari };
}

export function yasalFaiz(anapara: number, baslangic: string, bitis: string) {
  if (!(anapara > 0) || !(gunFarki(baslangic, bitis) > 0)) return null;
  const donemler = YASAL_FAIZ.map((d, i) => ({
    oran: d.oran,
    bas: d.baslangic,
    son: YASAL_FAIZ[i + 1]?.baslangic ?? "9999-12-31",
  }))
    .map((d) => ({ oran: d.oran, bas: d.bas > baslangic ? d.bas : baslangic, son: d.son < bitis ? d.son : bitis }))
    .filter((d) => d.son > d.bas)
    .map((d) => {
      const gun = gunFarki(d.bas, d.son);
      return { ...d, gun, faiz: yuvarla((anapara * d.oran * gun) / 36500) };
    });
  const faiz = yuvarla(donemler.reduce((t, d) => t + d.faiz, 0));
  return { donemler, faiz, toplam: yuvarla(anapara + faiz) };
}
