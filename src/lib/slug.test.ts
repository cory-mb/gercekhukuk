import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

// Slug kuralı: ASCII, küçük harf, tire ayraçlı. İçerik dosya adı = URL slug'ı.
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const root = path.join(process.cwd(), "src/content");

function files(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? files(path.join(dir, e.name)) : [path.join(dir, e.name)],
  );
}

test("içerik dosya adları (URL slug'ları) ASCII ve tire ayraçlı", () => {
  const bad = files(root)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => path.basename(f).replace(/\.mdx?$/, ""))
    .filter((s) => !SLUG.test(s));
  assert.deepEqual(bad, []);
});
