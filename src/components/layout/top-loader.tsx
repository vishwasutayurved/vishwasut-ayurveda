"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

export function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // This effect will run when the route changes to stop the progress bar.
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.done();
  }, [pathname, searchParams]);

  // This effect runs once on mount to set up the progress bar for navigation.
  useEffect(() => {
    const originalPushState = history.pushState;

    // Patch pushState to start the progress bar.
    history.pushState = function (...args) {
      const [data, unused, url] = args;
      // Start progress only if the URL is different.
      if (window.location.pathname !== url) {
        NProgress.start();
      }
      originalPushState.apply(history, args);
    };

    // Handle back/forward navigation.
    const handlePopState = () => {
      NProgress.start();
    };
    window.addEventListener('popstate', handlePopState);

    // Cleanup when the component unmounts.
    return () => {
      history.pushState = originalPushState;
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return null;
}
