import { siteConfig } from "@/config/site";
import type { FooterGroup, LinkItem, SocialLink } from "@/types/content";

/**
 * Figma provides labels only. "#" marks a destination that still needs a real URL
 * (see docs/design-audit.md §7). Order is reading order (right → left in RTL).
 */
export const headerLinks: readonly LinkItem[] = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "#" },
  { label: "الخدمات", href: "#" },
  { label: "الصناعة", href: "#" },
  { label: "القطاعات", href: "#" },
  { label: "التكنولوجيا", href: "#" },
  { label: "أعمالنا", href: "#" },
  { label: "تواصل معنا", href: "#contact" },
];

export const headerCta: LinkItem = {
  label: "اطلب استشارة مجانية",
  href: "#contact",
};

export const footerGroups: readonly FooterGroup[] = [
  {
    title: "الشركة",
    items: [
      { label: "من نحن", href: "#" },
      { label: "أعمالنا", href: "#" },
      { label: "الأحداث والأخبار", href: "#" },
    ],
  },
  {
    title: "الخدمات",
    items: [
      { label: "حلول الأعمال", href: "#" },
      { label: "التصميم والإبداع", href: "#" },
      { label: "البحث والتطوير", href: "#" },
    ],
  },
  {
    title: "القطاعات",
    items: [
      { label: "الصناعة", href: "#" },
      { label: "التجارة", href: "#" },
      { label: "الخدمات", href: "#" },
    ],
  },
  {
    title: "التكنولوجيا",
    items: [
      { label: "أنظمة المؤسسات", href: "#" },
      { label: "الذكاء الاصطناعي", href: "#" },
      { label: "هندسة البرمجيات", href: "#" },
    ],
  },
  {
    title: "تواصل معنا",
    items: [
      { label: siteConfig.email, href: `mailto:${siteConfig.email}`, lang: "en" },
      { label: "حلول رقمية متكاملة" },
      { label: "لنمو أعمالك" },
    ],
  },
];

export const footerTagline = "حلول رقمية متكاملة تدعم نمو أعمالك";

export const footerCopyright = "© جميع الحقوق محفوظة لشركة Transformix";

export const socialLinks: readonly SocialLink[] = [
  { label: "فيسبوك", href: "#", icon: "/icons/facebook.svg" },
  { label: "إنستغرام", href: "#", icon: "/icons/instagram.svg" },
  { label: "لينكدإن", href: "#", icon: "/icons/linkedin.svg" },
  { label: "بيهانس", href: "#", icon: "/icons/behance.svg" },
];
