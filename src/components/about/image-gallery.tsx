'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Doctor with stethoscope',
    hint: 'healthcare professional',
  },
  {
    src: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Ayurvedic herbs and spices',
    hint: 'natural remedies',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Doctor with stethoscope',
    hint: 'healthcare professional',
  },
  {
    src: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Ayurvedic herbs and spices',
    hint: 'natural remedies',
  },
];

export function ImageGallery() {

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
            Our Clinic Gallery
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            A glimpse into our serene and healing environment.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              data-index={index}
              className={`${((index + 1) % 2 === 0 ?
                "scale-left-content-animation" : "scale-right-content-animation")}`}
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative aspect-video w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
