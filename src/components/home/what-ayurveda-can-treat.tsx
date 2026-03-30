import { NavLink } from "../layout/nav-link";
import { Button } from "../ui/button";

export function WhatAyurvedaCanTreat() {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12 scale-up-content-animation">
      <div className="mx-auto max-w-10xl text-center">
        <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
          What Ayurveda can treat?
        </h2>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">
          Ayurveda is a natural healing system that focuses on restoring balance in the body,
          mind, and spirit 🌿. It can help manage a wide range of conditions such as
          digestive problems like acidity and bloating, stress and anxiety, sleep issues,
          skin concerns like acne and eczema, joint pain and arthritis, and hormonal imbalances.
          It is also known for boosting immunity, supporting detoxification, and helping with
          lifestyle disorders like diabetes and obesity. ✨ Instead of just treating symptoms,
          Ayurveda aims to heal from the root cause and promote overall well-being.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto"
            style={{ borderRadius: "100px" }}
          >
            <NavLink
              openInNewTab={false}
              href={`/treatments/diseases`}
            >
              View all diseases
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
