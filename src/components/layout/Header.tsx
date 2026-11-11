import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { SmartLink } from "@/components/ui/SmartLink";
import { headerCta, headerLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/** Figma frame 4559:8172 "هيدر ترانسفورمكس". */
export function Header() {
  return (
    <header className="bg-surface px-6 stroke-bottom md:px-10 xl:px-header-gutter">
      <div className="mx-auto flex h-[88px] max-w-header items-center justify-between md:h-header-bar">
        <Link href="/" className="shrink-0" aria-label={`${siteConfig.name} — الصفحة الرئيسية`}>
          <Image
            src="/images/logo-header.png"
            alt=""
            width={2172}
            height={724}
            sizes="190px"
            loading="eager"
            className="h-[44.52px] w-[133.56px] object-cover md:h-[63.33px] md:w-[190px]"
          />
        </Link>

        <nav aria-label="التنقل الرئيسي" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {headerLinks.map((link) => (
              <li key={link.label} className="shrink-0">
                <SmartLink href={link.href} className="type-nav whitespace-nowrap text-muted">
                  {link.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 md:block">
          <ButtonLink href={headerCta.href} shape="pill">
            {headerCta.label}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
