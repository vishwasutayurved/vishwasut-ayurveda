"use client"

import * as React from "react"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const slides = [
  {
    src: "https://www.shutterstock.com/image-photo/ayurvedic-herbs-collage-on-wooden-600nw-2518490771.jpg",
    alt: "Ayurvedic herbs and spices",
    title: "The Essence of Nature's Healing",
    description: "Discover the power of traditional Ayurvedic remedies.",
    hint: "ayurvedic herbs"
  },
  {
    src: "https://fazlaninaturesnest.com/wp-content/uploads/2024/02/relaxed-man-enjoying-back-massage-with-herbal-compress-during-spa-treatment-2.webp",
    alt: "Relaxing oil massage therapy",
    title: "Rejuvenate Your Body and Soul",
    description: "Experience deep relaxation with our therapeutic massages.",
    hint: "ayurvedic massage"
  },
  {
    src: "https://www.shutterstock.com/image-photo/ayurvedic-herbs-collage-on-wooden-600nw-2518490771.jpg",
    alt: "Woman meditating in a serene setting",
    title: "Find Your Inner Harmony",
    description: "Achieve mental peace and clarity through holistic practices.",
    hint: "meditation nature"
  },
  {
    src: "https://fazlaninaturesnest.com/wp-content/uploads/2024/02/relaxed-man-enjoying-back-massage-with-herbal-compress-during-spa-treatment-2.webp",
    alt: "Panchakarma therapy setup",
    title: "Purify, Balance, and Heal",
    description: "Our signature Panchakarma therapy for complete detoxification.",
    hint: "spa therapy"
  },
]

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [isHovering, setIsHovering] = React.useState(false)

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);

    const interval = setInterval(() => {
      if (!isHovering && api) {
        api.scrollNext();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      api.off("select", onSelect);
    };
  }, [api, isHovering]);

  return (
    <Carousel
      setApi={setApi}
      className="relative w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[60vh] md:h-[80vh] w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                data-ai-hint={slide.hint}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center md:p-16">
                <h1 className="font-headline text-4xl font-bold md:text-6xl drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                  {slide.description}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === current ? 'w-6 bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 transform text-white bg-black/20 hover:bg-black/50 border-white/50" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 transform text-white bg-black/20 hover:bg-black/50 border-white/50" />
    </Carousel>
  )
}
