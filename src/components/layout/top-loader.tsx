"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

export function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    // We need to use a mutation observer to listen for route changes
    // as the Next.js router events are not always reliable.
    const observer = new MutationObserver((mutations) => {
      const oldUrl = mutations[0]?.target?.baseURI;
      if (oldUrl) {
        const newUrl = window.location.href;
        if (oldUrl !== newUrl) {
          handleStart();
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeOldValue: true,
    });
    
    // Fallback for initial load
    handleStop();


    return () => {
      observer.disconnect();
      handleStop();
    };
  }, []);

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);


  return null;
}
