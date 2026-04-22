'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: "8+", label: "Years\nPractice" },
  { value: "5,000+", label: "Patients\nHealed" },
  { value: "4.8+", label: "Google\nRating" },
];

const targets = stats.map(stat => parseFloat(stat.value.replace(/,/g, '')));

export function DoctorStats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentValues, setCurrentValues] = useState(targets.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrameId: any;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const newValues = targets.map(target => target * progress);
      setCurrentValues(newValues);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible]);

  const formatValue = (value: any, index: any) => {
    const originalString = stats[index].value;
    const target = targets[index];

    if (value >= target) {
      return originalString;
    }

    let displayValue;
    if (originalString.includes('.')) {
      displayValue = value.toFixed(1);
    } else {
      displayValue = Math.floor(value).toLocaleString('en-US');
    }

    if (originalString.includes('+')) {
      return `${displayValue}+`;
    }

    return displayValue;
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg bg-card p-6 text-center shadow-sm border">
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              Dr. Nishant Dahake is a young, energetic Ayurvedic doctor delivering result-focused
              treatment for a wide range of conditions, blending traditional healing with modern
              diagnostics to target the root cause effectively.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 text-center divide-x divide-border">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col items-center px-4">
                <p className="text-2xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
                  {formatValue(currentValues[index], index)}
                </p>
                <p className="mt-2 text-xs text-center text-muted-foreground whitespace-pre-line md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
