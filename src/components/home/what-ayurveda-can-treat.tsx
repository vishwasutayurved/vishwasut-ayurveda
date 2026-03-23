import { diseaseCategories } from "@/lib/diseases-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "@/components/layout/nav-link";

export function WhatAyurvedaCanTreat() {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-10xl text-center">
        <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl scale-up-content-animation">
          What Ayurveda can treat?
        </h2>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">
          Click on the disease to get additional details.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {diseaseCategories.map((category) => (
            <NavLink href="/treatments/diseases" key={category.title}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 scale-up-content-animation">
                <CardHeader>
                  <CardTitle className="font-headline text-xl font-bold text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
