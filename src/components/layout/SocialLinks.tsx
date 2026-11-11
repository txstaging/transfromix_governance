import Image from "next/image";

import { SmartLink } from "@/components/ui/SmartLink";
import { socialLinks } from "@/config/navigation";

/** Figma frame 4559:8295 "التواصل الاجتماعي" — 40 × 40 icons, 4 px gap. */
export function SocialLinks() {
  return (
    <ul className="flex items-start gap-1">
      {socialLinks.map((social) => (
        <li key={social.label}>
          <SmartLink href={social.href} aria-label={social.label} className="block size-10">
            <Image
              src={social.icon}
              alt=""
              width={40}
              height={40}
              unoptimized
              className="block size-10"
            />
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}
