
import { CLINIC_IMAGES_WITH_DESCRIPTION } from "@/lib/constants";
import Image from "next/image";


export function ImageGallery() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-4xl font-bold text-center text-primary">Our Clinic Gallery</h2>
        <p className="text-center text-lg text-foreground/70 mt-4 mb-12 max-w-2xl mx-auto">
          Step inside our serene and healing environment. Our clinic is designed to provide a peaceful and comfortable space for your wellness journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {CLINIC_IMAGES_WITH_DESCRIPTION.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg group transform transition-transform duration-300 hover:scale-105">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.aiHint}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold text-center px-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
