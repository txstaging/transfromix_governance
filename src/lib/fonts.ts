import { Noto_Kufi_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

/**
 * Headings and buttons — Tajawal Bold (Google Fonts, OFL; public/fonts/Tajawal-OFL.txt).
 *
 * Self-hosted so its vertical metrics can be pinned. Tajawal does not set
 * USE_TYPO_METRICS, so Chrome on Windows lays it out with its tall OS/2 win metrics
 * (1.065 / 0.411 em) while Figma uses hhea (0.643 / 0.357 / gap 0.2 = "Auto" 1.2).
 * That drew every Tajawal line 0.184 em lower than the design. The overrides below make
 * all browsers use the hhea values Figma uses.
 */
export const tajawal = localFont({
  src: "../../public/fonts/Tajawal-Bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-tajawal",
  display: "swap",
  declarations: [
    { prop: "ascent-override", value: "64.3%" },
    { prop: "descent-override", value: "35.7%" },
    { prop: "line-gap-override", value: "20%" },
  ],
});

/** Body, labels and links — Noto Kufi Arabic (variable, 400/500/700 used). */
export const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-noto-kufi-arabic",
  display: "swap",
});

/** Latin card ordinals — Plus Jakarta Sans Bold. */
export const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const fontVariables = [
  tajawal.variable,
  notoKufiArabic.variable,
  plusJakartaSans.variable,
].join(" ");
