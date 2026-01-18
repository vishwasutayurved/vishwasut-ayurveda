'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';

type NavLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  target?: string;
};

export function NavLink({ children, href, className, target, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === href) {
      e.preventDefault();
      return;
    }
    // Start NProgress in the next event loop tick to avoid a race condition
    // with the Next.js router.
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
