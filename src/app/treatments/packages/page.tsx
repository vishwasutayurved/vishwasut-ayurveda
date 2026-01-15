import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages",
  description: "Treatment packages.",
};

export default function PackagesPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl text-center">
        Packages
      </h1>
    </div>
  );
}
