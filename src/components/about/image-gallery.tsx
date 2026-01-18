import Image from 'next/image';

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

    <section className="mt-4 sm:mt-18">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
          Our Clinic Gallery
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          A glimpse into our serene and healing environment.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
        {images.map((practitioner, index) => (
          <div key={index} className="relative aspect-video w-full">
            <Image
              src={practitioner.src}
              alt={practitioner.alt}
              data-ai-hint={practitioner.hint}
              fill
              className={`object-cover rounded-lg 
                ${(index + 1) % 2 === 0 ? "scale-left-content-animation" : "scale-right-content-animation"}`}
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
}
