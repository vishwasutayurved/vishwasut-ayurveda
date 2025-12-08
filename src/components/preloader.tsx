"use client";

import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
      setTimeout(() => setLoading(false), 500); // Wait for fade out transition
    }, 2500); // Minimum display time

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${closing ? 'opacity-0' : 'opacity-100'
        }`}
    >
      <DotLottieReact
        src="https://lottie.host/3d0a4726-326f-47d4-a24d-a71cfd4630fc/LTRlP4fSwz.lottie"
        loop
        autoplay
      />
    </div>
  );
}
