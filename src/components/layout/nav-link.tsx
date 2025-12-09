"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";

type NavLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

export function NavLink({ children, href, className, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === href) {
        e.preventDefault();
        return;
    }
    NProgress.start();
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
