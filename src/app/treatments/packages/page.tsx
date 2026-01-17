import type { Metadata } from "next";
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/layout/nav-link";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { getAllTreatments } from "@/lib/firebase/firestore";

export const metadata: Metadata = {
  title: "Packages",
  description: "Treatment packages.",
};

// const treatments = [
//   {
//     name: '1 Day DETOX',
//     amount: '1399',
//     image: 'https://lh3.googleusercontent.com/pw/AP1GczN5cJeFn4jwUWABllFlTqDeM9FX7IzHOiVFi3FsO0Y-AbXgldftz_VLbyg49UwrLorB_FRvBKrnJtMD16-8EOc5T-2Bxd4M4SJumYR9yNQjHOn8w0cT14Erx9YAlJaahPEbTDf-YfdpTWOWOrQfmpHn=w459-h347-s-no-gm?authuser=0',
//     description: '1 Abhyangam (Body massage) ,+ 1 Swedanam (Steam Bath ).',
//     hint: 'doctor portrait'
//   },
//   {
//     name: 'Dr. Nishant Dahake 1',
//     amount: '111111',
//     image: 'https://lh3.googleusercontent.com/pw/AP1GczN5cJeFn4jwUWABllFlTqDeM9FX7IzHOiVFi3FsO0Y-AbXgldftz_VLbyg49UwrLorB_FRvBKrnJtMD16-8EOc5T-2Bxd4M4SJumYR9yNQjHOn8w0cT14Erx9YAlJaahPEbTDf-YfdpTWOWOrQfmpHn=w459-h347-s-no-gm?authuser=0',
//     description: 'With over 3+ years of experience, Dr. Nishant is dedicated to reviving ancient Ayurvedic traditions to address modern health challenges. He specializes in Panchakarma and women\'s health.',
//     hint: 'doctor portrait'
//   },
//   {
//     name: 'Day 3 Detox',
//     amount: '11111',
//     image: 'https://lh3.googleusercontent.com/pw/AP1GczN5cJeFn4jwUWABllFlTqDeM9FX7IzHOiVFi3FsO0Y-AbXgldftz_VLbyg49UwrLorB_FRvBKrnJtMD16-8EOc5T-2Bxd4M4SJumYR9yNQjHOn8w0cT14Erx9YAlJaahPEbTDf-YfdpTWOWOrQfmpHn=w459-h347-s-no-gm?authuser=0',
//     description: 'With over 3+ years of experience, Dr. Nishant is dedicated to reviving ancient Ayurvedic traditions to address modern health challenges. He specializes in Panchakarma and women\'s health.',
//     hint: 'doctor portrait'
//   }
// ];

export default async function PackagesPage() {
  const treatments = await getAllTreatments();
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
            {treatments.map((treatment) => (
              <Card key={treatment.title} className="p-6 text-center scale-up-content-animation">
                <CardContent className="flex flex-col items-center">
                  <Avatar className="h-32 w-32 border-4 border-primary/20">
                    <AvatarImage src={treatment.image} alt={treatment.title} data-ai-hint={treatment.hint} />
                  </Avatar>
                  <h3 className="mt-6 font-headline text-2xl font-bold">{treatment.title}</h3>
                  <h4 className="mt-4 font-headline text-xl text-primary font-bold">₹ {treatment.amount}</h4>
                  <p className="mt-4 text-foreground/70">{treatment.description}</p>
                  <div className="mt-8">
                    <Button size="lg" asChild className="w-full sm:w-auto">
                      <NavLink href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(treatment.whatsAppMessage)}`}>
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
