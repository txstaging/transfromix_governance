import type { ReactNode } from "react";

import { SmartLink } from "@/components/ui/SmartLink";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  /** `pill` is the header instance override (corner radius 100). */
  shape?: "rounded" | "pill";
  className?: string;
};

/**
 * Figma component "Services / Button / AR", Style=Primary.
 * Default fill #1c4499 → Hover fill #5b3379; nothing else changes.
 */
export function ButtonLink({ href, children, shape = "rounded", className }: ButtonLinkProps) {
  return (
    <SmartLink
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 overflow-hidden bg-primary px-6 py-4 type-button whitespace-nowrap text-surface hover:bg-primary-hover",
        shape === "pill" ? "rounded-pill" : "rounded-card",
        className,
      )}
    >
      {children}
    </SmartLink>
  );
}
