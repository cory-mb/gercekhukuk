// Hesaplama araçlarının tek parametre kaynağı. Her değer için yürürlük ve kaynak yazılı.
// Bakım: kıdem tavanı Ocak/Temmuz, kira oranı her ay TÜİK bülteninden (ayın 3'ü), arabuluculuk tarifesi her yıl Aralık sonu.
export const GUNCELLEME = "28 Ekim 2026";

// Hazine ve Maliye Bakanlığı Mali ve Sosyal Haklar Genelgesi; tarih = iş sözleşmesinin sona erdiği gün.
export const KIDEM_TAVANI = [
  { baslangic: "2026-01-01", bitis: "2026-06-30", tutar: 64948.77 },
  { baslangic: "2026-07-01", bitis: "2026-12-31", tutar: 73729.87 },
];

export const DAMGA_VERGISI = 0.00759;
export const GELIR_VERGISI_DILIMLERI = [0.15, 0.2, 0.27, 0.35, 0.4];

// TBK m.344: bir önceki kira yılında TÜFE 12 aylık ortalamalara göre değişim (TÜİK, Eylül 2026 bülteni, 05.10.2026).
export const KIRA_ARTIS = { donem: "Ekim 2026", oran: 31.49 };

// 2026 Arabuluculuk Asgari Ücret Tarifesi (RG 26.12.2025). Saat ücretleri toplam: [2 taraf, 3-5, 6-10, 11+].
export const ARABULUCULUK_TURLERI = {
  is: { ad: "İşçi–işveren", saat: [2260, 2460, 2560, 2660], asgari: 9000 },
  ticari: { ad: "Ticari", saat: [3000, 3200, 3300, 3400], asgari: 13000 },
  tuketici: { ad: "Tüketici", saat: [2000, 2200, 2300, 2400], asgari: 9000 },
  kira: { ad: "Kira, kat mülkiyeti, komşu hakkı", saat: [2340, 2540, 2640, 2740], asgari: 9000 },
  ortaklik: { ad: "Ortaklığın giderilmesi", saat: [2340, 2540, 2640, 2740], asgari: 13000 },
  aile: { ad: "Aile", saat: [2000, 2200, 2300, 2400], asgari: 9000 },
  diger: { ad: "Diğer", saat: [2000, 2200, 2300, 2400], asgari: 9000 },
} as const;
// Anlaşma halinde nispi ücret, tek arabulucu: [dilim genişliği, oran]
export const ARABULUCULUK_DILIMLERI: [number, number][] = [
  [600000, 0.06],
  [960000, 0.05],
  [1560000, 0.04],
  [3120000, 0.03],
  [9360000, 0.02],
  [12480000, 0.015],
  [24960000, 0.01],
  [Infinity, 0.005],
];

// 3095 sayılı Kanun m.1 (7589 sayılı Kanun ile değişik, RG 31.07.2026): TCMB reeskont oranının %80'i.
export const YASAL_FAIZ = [
  { baslangic: "2006-01-01", oran: 9 },
  { baslangic: "2024-06-01", oran: 24 },
  { baslangic: "2026-07-31", oran: 31 },
];
