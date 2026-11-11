import Link from "next/link";
import type { ComponentProps } from "react";

type SmartLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
};

/** Uses next/link for app routes and a plain anchor for hashes, mailto: and external URLs. */
export function SmartLink({ href, ...props }: SmartLinkProps) {
  if (href.startsWith("/")) {
    return <Link href={href} {...props} />;
  }
  return <a href={href} {...props} />;
}
