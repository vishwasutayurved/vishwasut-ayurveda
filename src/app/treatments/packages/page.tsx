import type { Metadata } from "next";
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/layout/nav-link";
import { ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "Packages",
  description: "Treatment packages.",
};

const practitioners = [
  {
    name: '1 Day DETOX',
    title: '1399',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczN5cJeFn4jwUWABllFlTqDeM9FX7IzHOiVFi3FsO0Y-AbXgldftz_VLbyg49UwrLorB_FRvBKrnJtMD16-8EOc5T-2Bxd4M4SJumYR9yNQjHOn8w0cT14Erx9YAlJaahPEbTDf-YfdpTWOWOrQfmpHn=w459-h347-s-no-gm?authuser=0',
    fallback: 'ND',
    bio: '1 Abhyangam (Body massage) ,+ 1 Swedanam (Steam Bath ).',
    hint: 'doctor portrait'
  },
  {
    name: 'Dr. Nishant Dahake 1',
    title: '111111',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczN5cJeFn4jwUWABllFlTqDeM9FX7IzHOiVFi3FsO0Y-AbXgldftz_VLbyg49UwrLorB_FRvBKrnJtMD16-8EOc5T-2Bxd4M4SJumYR9yNQjHOn8w0cT14Erx9YAlJaahPEbTDf-YfdpTWOWOrQfmpHn=w459-h347-s-no-gm?authuser=0',
    fallback: 'ND',
    bio: 'With over 3+ years of experience, Dr. Nishant is dedicated to reviving ancient Ayurvedic traditions to address modern health challenges. He specializes in Panchakarma and women\'s health.',
    hint: 'doctor portrait'
  },
  {
    name: 'Day 3 Detox',
    title: '11111',
    image: 'https://lh3.googleusercontent.com/pw/AP1GczN5cJeFn4jwUWABllFlTqDeM9FX7IzHOiVFi3FsO0Y-AbXgldftz_VLbyg49UwrLorB_FRvBKrnJtMD16-8EOc5T-2Bxd4M4SJumYR9yNQjHOn8w0cT14Erx9YAlJaahPEbTDf-YfdpTWOWOrQfmpHn=w459-h347-s-no-gm?authuser=0',
    fallback: 'ND',
    bio: 'With over 3+ years of experience, Dr. Nishant is dedicated to reviving ancient Ayurvedic traditions to address modern health challenges. He specializes in Panchakarma and women\'s health.',
    hint: 'doctor portrait'
  }
];

export default function PackagesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Special Packages
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Receive continuous support and follow-up care to ensure your health and well-being after the consultation.
          </p>
        </div>

        <section className="mt-16 sm:mt-24">
          <div className="mt-12 grid grid-cols-1 gap-9 md:grid-cols-3">
            {practitioners.map((practitioner) => (
              <Card key={practitioner.name} className="p-6 text-center">
                <CardContent className="flex flex-col items-center">
                  <Avatar className="h-32 w-32 border-4 border-primary/20">
                    <AvatarImage src={practitioner.image} alt={practitioner.name} data-ai-hint={practitioner.hint} />
                    <AvatarFallback>{practitioner.fallback}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-6 font-headline text-2xl font-bold">{practitioner.name}</h3>
                  <h4 className="mt-6 font-headline text-xl font-bold">Rs {practitioner.title}</h4>
                  <p className="mt-4 text-foreground/70">{practitioner.bio}</p>
                  <div className="mt-8">
                    <Button size="lg" asChild className="w-full sm:w-auto">
                      <NavLink href='/'>
                        {/* <ShoppingCart className="mr-2 h-5 w-5" /> */}
                        Try Now
                      </NavLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
