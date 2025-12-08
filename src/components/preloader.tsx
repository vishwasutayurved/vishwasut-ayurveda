"use client";

import { useState, useEffect } from 'react';

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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        closing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-7xl mb-4 animate-pulse">
        ❤️
      </div>
      <div className="mt-4 flex items-center space-x-2">
         <p className="font-headline text-lg text-primary">आरोग्य ही संपत्ती आहे</p>
      </div>
    </div>
  );
}
