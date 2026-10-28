import { test } from "node:test";
import assert from "node:assert/strict";
import { arabuluculukUcreti, kidemIhbar, kiraArtis, yasalFaiz } from "./index.ts";
import { validateContact } from "../contact.ts";

test("kıdem ve ihbar: 6 yıl 9 ay, tavan altı", () => {
  const r = kidemIhbar("2020-01-01", "2026-10-01", 50000, 0.15)!;
  assert.equal(r.gun, 2465);
  assert.equal(r.kidemBrut, 337671.23);
  assert.equal(r.kidemDamga, 2562.92);
  assert.equal(r.hafta, 8);
  assert.equal(r.ihbarBrut, 93333.33);
  assert.equal(r.ihbarNet, 78624.93);
});

test("kıdem: tavan uygulanır, ihbar 4 hafta", () => {
  const r = kidemIhbar("2025-03-15", "2026-03-15", 100000, 0.15)!;
  assert.equal(r.tavanUygulandi, true);
  assert.equal(r.kidemBrut, 64948.77);
  assert.equal(r.hafta, 4);
});

test("kıdem: 1 yıldan az çalışma, ihbar 2 hafta", () => {
  const r = kidemIhbar("2026-01-01", "2026-05-01", 40000, 0.15)!;
  assert.equal(r.kidemHakki, false);
  assert.equal(r.kidemBrut, 0);
  assert.equal(r.hafta, 2);
});

test("kıdem: geçersiz girdi", () => {
  assert.equal(kidemIhbar("2026-05-01", "2026-01-01", 40000, 0.15), null);
  assert.equal(kidemIhbar("2026-01-01", "2026-05-01", 0, 0.15), null);
});

test("kira artışı", () => {
  assert.deepEqual(kiraArtis(20000, 31.49), { artis: 6298, yeniKira: 26298 });
  assert.equal(kiraArtis(-1, 10), null);
});

test("arabuluculuk ücreti", () => {
  assert.equal(arabuluculukUcreti("is", 0, true, 100000).ucret, 9000);
  assert.equal(arabuluculukUcreti("ticari", 0, true, 1000000).ucret, 56000);
  assert.equal(arabuluculukUcreti("is", 0, false).ucret, 4520);
});

test("yasal faiz: oran değişimini böler", () => {
  const r = yasalFaiz(100000, "2026-07-01", "2026-09-01")!;
  assert.deepEqual(r.donemler.map((d) => [d.oran, d.gun, d.faiz]), [[24, 30, 1972.6], [31, 32, 2717.81]]);
  assert.equal(r.faiz, 4690.41);
});

test("iletişim formu doğrulaması", () => {
  const f = (o: Record<string, string>) => {
    const fd = new FormData();
    Object.entries(o).forEach(([k, v]) => fd.set(k, v));
    return fd;
  };
  const ok = { ad: "A", soyad: "B", email: "a@b.co", konu: "İş Hukuku", mesaj: "x", kvkk: "on" };
  assert.ok("fields" in validateContact(f(ok)));
  assert.deepEqual(validateContact(f({ ...ok, kvkk: "" })), { error: "required" });
  assert.deepEqual(validateContact(f({ ...ok, email: "yok" })), { error: "email" });
  assert.deepEqual(validateContact(f({ ...ok, mesaj: "x".repeat(5001) })), { error: "length" });
});
