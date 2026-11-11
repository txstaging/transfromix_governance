import Image from "next/image";

import { SocialLinks } from "@/components/layout/SocialLinks";
import { SmartLink } from "@/components/ui/SmartLink";
import { footerCopyright, footerGroups, footerTagline } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/** Figma frame 4559:8264 "فوتر ترانسفورمكس". */
export function Footer() {
  return (
    <footer className="bg-navy-900 px-6 pt-12 pb-7 [--tx-focus-color:var(--tx-color-surface)] md:px-10 xl:px-gutter">
      <div className="mx-auto flex max-w-content flex-col gap-8">
        <div className="flex flex-col items-stretch gap-8 xl:flex-row xl:items-start xl:gap-14">
          <div className="flex shrink-0 flex-col items-start gap-4 xl:w-[220px]">
            <div className="relative h-[69.33px] w-[208px] overflow-hidden">
              <Image
                src="/images/logo-footer.jpg"
                alt={siteConfig.name}
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
            <p className="w-full type-caption text-surface">{footerTagline}</p>
            <SocialLinks />
          </div>

          <nav
            aria-label="روابط التذييل"
            className="grid grid-cols-2 items-start gap-8 md:grid-cols-3 lg:grid-cols-5 xl:min-w-0 xl:flex-1"
          >
            {footerGroups.map((group) => (
              <div key={group.title} className="flex min-w-0 flex-col gap-3.5">
                <h2 className="type-action text-surface">{group.title}</h2>
                <ul className="flex flex-col gap-3.5">
                  {group.items.map((item) => (
                    <li key={item.label} className="type-caption text-footer-text">
                      {item.href ? (
                        <SmartLink
                          href={item.href}
                          lang={item.lang}
                          dir={item.lang ? "ltr" : undefined}
                          className="inline-block max-w-full"
                        >
                          {item.label}
                        </SmartLink>
                      ) : (
                        item.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <hr className="h-px border-0 bg-divider-inverse" />

        <p className="text-center type-label text-footer-text">{footerCopyright}</p>
      </div>
    </footer>
  );
}
