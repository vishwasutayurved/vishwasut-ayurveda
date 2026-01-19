"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
}

export function ProductImageGallery({ images, alt }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <Card className="overflow-hidden">
        <div className="relative aspect-square">
          <Image
            alt={alt}
            className="object-cover w-full h-full rounded-lg"
            src={selectedImage}
            fill
          />
        </div>
      </Card>
      {images.length > 1 && (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/3 sm:basis-1/4">
                <div
                  className={`p-1 rounded-lg cursor-pointer ${
                    selectedImage === image ? "ring-2 ring-gray" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Card className="overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        alt={alt}
                        className="object-cover w-full h-full rounded-lg"
                        src={image}
                        fill
                      />
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
        </Carousel>
      )}
    </div>
  );
}
