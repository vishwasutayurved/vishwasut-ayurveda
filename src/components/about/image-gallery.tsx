import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Doctor with stethoscope",
    hint: "healthcare professional",
  },
  {
    src: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ayurvedic herbs and spices",
    hint: "natural remedies",
  },
  {
    src: "https://images.unsplash.com/photo-1605810232479-50366b965842?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Person practicing yoga",
    hint: "holistic wellness",
  },
  {
    src: "https://images.unsplash.com/photo-1620253456382-f365cec0277e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Massage oil and flowers",
    hint: "ayurvedic therapy",
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg scale-up-content-animation"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  data-ai-hint={image.hint}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
