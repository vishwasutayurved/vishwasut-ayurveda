# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.


If you want to migrate the code from firebase to another platform
Follow the steps to remove trailing slashed.
1. Remove it from sitemap.ts
2. Remove "trailingSlash" config part from next.config.mjs file.
3. Modify nav-link.ts component condition of ignoring progress bar.