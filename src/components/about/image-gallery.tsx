
import Image from "next/image";

const clinicImages = [
  {
    src: "https://fazlaninaturesnest.com/wp-content/uploads/2024/02/relaxed-man-enjoying-back-massage-with-herbal-compress-during-spa-treatment-2.webp",
    alt: "Clinic Reception Area",
    aiHint: "clinic reception area"
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPD6_lLvbh4BuXR8kzK9efp848vTCn8Vl7J6l3v5FPfnTEVKrhiF5uiiub_BLf7_5ukfaNOncZDKIA98CTDJWhZuMVBOAhx8b3NPN-z-KILLTYflDhqi3EOzlUbFGHF7fKxcsumO8-VI4PpcCFCJR8=w913-h913-s-no-gm?authuser=0",
    alt: "Spacious Consultation Room",
    aiHint: "spacious consultation room"
  },
  {
    src: "https://www.shutterstock.com/image-photo/ayurvedic-herbs-collage-on-wooden-600nw-2518490771.jpg",
    alt: "Panchkarma Therapy Room with modern equipment",
    aiHint: "panchkarma therapy room with modern equipment"
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczOIRqhs8hvqqSmK-fhG4omOwMuD5u9a_GDStp5bluk92Y3NznJ6aLSBghm5ZI2ASXZA_rC_7Z-VTuWILi3K-mW88um_bWp0bphuDnKoAp252VcJD1xWu1rFIlEmePlkWjvnmBtu9EPcbq961jR9z43D=w1024-h683-s-no-gm?authuser=0",
    alt: "Display of authentic herbal medicines",
    aiHint: "display of authentic herbal medicines"
  }
];

export function ImageGallery() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-4xl font-bold text-center text-primary">Our Clinic Gallery</h2>
        <p className="text-center text-lg text-foreground/70 mt-4 mb-12 max-w-2xl mx-auto">
          Step inside our serene and healing environment. Our clinic is designed to provide a peaceful and comfortable space for your wellness journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {clinicImages.map((image, index) => (
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
