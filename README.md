# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.


If you want to migrate the code from firebase to another platform
Follow the steps to remove trailing slash implmentation.
1. Remove it from sitemap.ts
2. Remove "trailingSlash" config part from next.config.mjs file.
3. Modify nav-link.tsx component condition of ignoring progress bar.
4. Modify condition at line no 87 in header.tsx component for highlight logic
5. ((pathname === "/" && item.href === "/") || (pathname === (item.href + '/'))) This logic needs to be changed for point 3 & 4. Changed to this: (pathname === href).