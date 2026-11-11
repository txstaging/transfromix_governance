import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";
import { fontVariables } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={siteConfig.locale} dir={siteConfig.direction} className={fontVariables}>
      <body>
        <a
          href="#main"
          className="sr-only z-50 rounded-card bg-surface type-action text-primary focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:px-6 focus:py-4"
        >
          تخطَّ إلى المحتوى
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
