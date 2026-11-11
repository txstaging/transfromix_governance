/**
 * Pixel comparison between the Figma renders (docs/figma-reference/sections-1440)
 * and the Playwright captures (screenshots/sections-1440), done in headless Chromium
 * with <canvas> so no image library is needed.
 *
 * Usage: npm run screenshots && node scripts/compare-figma.mjs
 * Output: screenshots/compare/<section>.png  (Figma | build | diff) + a summary table.
 */
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { chromium } from "@playwright/test";

const ROOT = path.resolve(import.meta.dirname, "..");
const FIGMA_DIR = path.join(ROOT, "docs/figma-reference/sections-1440");
const BUILD_DIR = path.join(ROOT, "screenshots/sections-1440");
const OUT_DIR = path.join(ROOT, "screenshots/compare");
/** Per-channel tolerance (0–255) for anti-aliasing / font rasterisation noise. */
const TOLERANCE = 48;

const toDataUrl = async (file) =>
  `data:image/png;base64,${(await readFile(file)).toString("base64")}`;

await mkdir(OUT_DIR, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage();
const rows = [];

for (const file of (await readdir(FIGMA_DIR)).filter((f) => f.endsWith(".png"))) {
  const name = path.basename(file, ".png");
  const figma = await toDataUrl(path.join(FIGMA_DIR, file));
  let build;
  try {
    build = await toDataUrl(path.join(BUILD_DIR, file));
  } catch {
    rows.push({ section: name, note: "missing build capture" });
    continue;
  }

  const result = await page.evaluate(
    async ({ figma, build, tolerance }) => {
      const load = (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      const [a, b] = await Promise.all([load(figma), load(build)]);
      const w = Math.max(a.width, b.width);
      const h = Math.max(a.height, b.height);
      const read = (img) => {
        const c = new OffscreenCanvas(w, h);
        const ctx = c.getContext("2d");
        ctx.fillStyle = "#ff00ff";
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0);
        return ctx.getImageData(0, 0, w, h);
      };
      const da = read(a);
      const db = read(b);
      const out = new OffscreenCanvas(w * 3, h);
      const octx = out.getContext("2d");
      octx.drawImage(a, 0, 0);
      octx.drawImage(b, w, 0);
      const diff = octx.createImageData(w, h);
      let mismatched = 0;
      for (let i = 0; i < da.data.length; i += 4) {
        const delta = Math.max(
          Math.abs(da.data[i] - db.data[i]),
          Math.abs(da.data[i + 1] - db.data[i + 1]),
          Math.abs(da.data[i + 2] - db.data[i + 2]),
        );
        const grey = (da.data[i] + da.data[i + 1] + da.data[i + 2]) / 3;
        if (delta > tolerance) {
          mismatched += 1;
          diff.data.set([255, 0, 64, 255], i);
        } else {
          diff.data.set([grey, grey, grey, 70], i);
        }
      }
      octx.putImageData(diff, w * 2, 0);
      const blob = await out.convertToBlob({ type: "image/png" });
      const bytes = new Uint8Array(await blob.arrayBuffer());
      let binary = "";
      for (let i = 0; i < bytes.length; i += 0x8000) {
        binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
      }
      return {
        figma: `${a.width}×${a.height}`,
        build: `${b.width}×${b.height}`,
        mismatch: mismatched / (w * h),
        png: btoa(binary),
      };
    },
    { figma, build, tolerance: TOLERANCE },
  );

  await writeFile(path.join(OUT_DIR, `${name}.png`), Buffer.from(result.png, "base64"));
  rows.push({
    section: name,
    figma: result.figma,
    build: result.build,
    "mismatch %": (result.mismatch * 100).toFixed(2),
  });
}

await browser.close();
console.table(rows);
