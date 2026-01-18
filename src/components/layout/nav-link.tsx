"use client";

import Link, { type LinkProps } from "next/link";

type NavLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

export function NavLink({ children, href, className, ...props }: NavLinkProps) {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
