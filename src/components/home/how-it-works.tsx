'use client';

import Image from 'next/image';

const processSteps = [
  {
    title: "Consultation",
    description: "Your journey begins with a 60-minute in-clinic consultation to understand your health in detail.",
    image: "https://drvani.piahc.com/assets/images/image06.jpg?v=e7e27d87",
  },
  {
    title: "Prescription",
    description: "Get a personalised Ayurvedic prescription designed to address the root cause—safe, natural, and effective.",
    image: "https://drvani.piahc.com/assets/images/image06.jpg?v=e7e27d87",
  },
  {
    title: "Medication",
    description: "Receive authentic Ayurvedic medicines from our in-house pharmacy, tailored to your treatment plan.",
    image: "https://drvani.piahc.com/assets/images/image06.jpg?v=e7e27d87",
  },
  {
    title: "Panchakarma",
    description: "Experience therapeutic Panchakarma treatments that help detoxify, heal, and restore balance in the body.",
    image: "https://drvani.piahc.com/assets/images/image06.jpg?v=e7e27d87",
  },
  {
    title: "Diet & Lifestyle",
    description: "Follow a custom diet and lifestyle plan curated specifically for your condition and long-term wellness.",
    image: "https://drvani.piahc.com/assets/images/image06.jpg?v=e7e27d87",
  },
  {
    title: "Post-consultation care",
    description: "Get continuous guidance and support to ensure you stay on track and achieve the best results.",
    image: "https://drvani.piahc.com/assets/images/image06.jpg?v=e7e27d87",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">How it works</h2>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">We go through process to make sure everything works.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center scale-up-content-animation">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="text-sm text-foreground/80 max-w-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
