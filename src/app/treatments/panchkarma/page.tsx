import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panchkarma",
  description: "Panchkarma treatment.",
};

export default function PanchkarmaPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl text-center">
        Panchkarma
      </h1>
    </div>
  );
}
