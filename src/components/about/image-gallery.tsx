
import Image from "next/image";

const clinicImages = [
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNpXfY6LiJ73yAmuSOMoMPKCUYLDMx8A_7hFQ7zdZ5KVdc8F3p1ol3cC9NLRdsY7BcqUsqROAUmexYdR4_RIyLXh6l87AiSJdEEEKZJurhQVtHKq5WNpNHfYN-tXFsbo5w4x8HnCUrOHUFExO3VP3WX=w685-h913-s-no-gm?authuser=0",
    alt: "Patients Waiting Area",
    aiHint: "patients waiting area"
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczObIZ_PBWluZoW7CGS7MP44JJEpDs1ZVkKGoBldUpqozHKyQIDLr_89Ih4P6nMbRqv7ZxBF9x-dLcV1WuFUiNEbpoZrbxrHt9DfSYnUw4fA1EM8NHidQV7qPeusR7X_WkKfEuF5AvA4W-ITo2VUsqGW=w491-h913-s-no-gm?authuser=0",
    alt: "Clinic Outer Board",
    aiHint: "Clinic Outer Board"
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMZSICCTo7lyYx5DkGZ8AozqFo21KKtCpNITl21wu0Df5LqcOfsq1s7tP9la5LZdkA-3dcuybRBGtLwWcXY3nTIqCrsFxPD_mjBxtzZ3R3rHBzqGx019CQSY1q33YbI1JQshop-vv9o4MvZ1m59jlEO=w685-h913-s-no-gm?authuser=0",
    alt: "Panchkarma Therapy Room with modern equipment",
    aiHint: "panchkarma therapy room with modern equipment"
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPElwS2h3p6JA4X7esB5M2hSekdOvxUMmkFFdzJaIZnxe-GCNDM3j078zhOTRM7e1Vfq5LsSatbNoYFowsdng15vRx-ljZkysq6BStcz7y2YTJQG3FFQU-fHrGm82aKAydTlXBcblz6E40n5pn9Qqav=w685-h913-s-no-gm?authuser=0",
    alt: "Steam Therapy",
    aiHint: "Steam Therapy"
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPBIdSO6YABYsWBT5f12XFl22zpA81xTr2Urdxzp6P2xfQ5VNlwIhI52nqr-ZiYbtY3_7wHuBdQDKa41Kf_ctAytY0cQNN7KeMmJJ_RfFG6t1WPsomJWp0lRbUXToSfhtVBhoi162oFU0rJH4vx3KpE=w685-h913-s-no-gm?authuser=0",
    alt: "Shirodhara Treatment",
    aiHint: "Shirodhara Treatment"
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
