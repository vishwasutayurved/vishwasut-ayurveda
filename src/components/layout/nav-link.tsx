'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';

type NavLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  openInNewTab?: boolean;
};

export function NavLink({ children, href, className, openInNewTab = false, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const target = openInNewTab ? '_blank' : undefined;
  const rel = openInNewTab ? 'noopener noreferrer' : undefined;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If opening in a new tab, don't do anything special.
    if (openInNewTab) {
      return;
    }

    // Prevent navigation if the link is for the current page.
    if (pathname === (href + "/")) {
      e.preventDefault();
      return;
    }

    // Start NProgress for same-tab navigation.
    setTimeout(() => NProgress.start(), 0);
  };

  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
