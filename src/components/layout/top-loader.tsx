"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

export function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPath = useRef(pathname + searchParams.toString());

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    const currentPath = pathname + searchParams.toString();
    if (previousPath.current !== currentPath) {
      NProgress.start();
    }
    previousPath.current = currentPath;

    const handleStop = () => {
      NProgress.done();
    };
    
    // The 'load' event is a good fallback for when the page is fully interactive.
    if (document.readyState === 'complete') {
        handleStop();
    } else {
        window.addEventListener('load', handleStop);
        return () => window.removeEventListener('load', handleStop);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return null;
}
