import { NavLink } from "@/components/layout/nav-link";
import { Button } from "@/components/ui/button";
import { SOCIALKIT_WIDGET_ID, WHATSAPP_APPOINTMENT_MESSAGE, WHATSAPP_NUMBER } from "@/lib/constants";
import { Faq } from "@/components/home/faq";
import { FeaturedProducts } from "@/components/home/featured-products";
import { FeaturedBlogs } from "@/components/home/featured-blogs";
import { getFeaturedBlogs, getFeaturedProducts } from "@/lib/firebase/firestore";
import { WhatAyurvedaCanTreat } from "@/components/home/what-ayurveda-can-treat";
import { DoctorStats } from "@/components/home/doctor-stats";
import { HeroBanner } from "@/components/home/hero-banner";
import Image from "next/image";

export default async function HomePage() {
  // Fetch featured products and blogs from Firestore
  const featuredProducts = await getFeaturedProducts();
  const featuredBlogs = await getFeaturedBlogs();

  const aboutDoctor = {
    src: "https://fazlaninaturesnest.com/wp-content/uploads/2024/02/relaxed-man-enjoying-back-massage-with-herbal-compress-during-spa-treatment-2.webp",
    alt: "Panchakarma therapy setup",
    title: "Dr. Nishant Dahake",
    hint: "spa therapy",
  };


  return (
    <div className="container flex flex-col">
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-11/12 mx-auto my-8 rounded-lg overflow-hidden">
        <Image
          src={aboutDoctor.src}
          alt={aboutDoctor.alt}
          data-ai-hint={aboutDoctor.hint}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 sm:p-8 md:p-12 w-full md:w-2/3 lg:w-1/2 text-white">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
            {aboutDoctor.title}
          </h1>
          <ul className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl list-disc list-inside drop-shadow-md">
            <li>BAMS, MD (Ayurveda)</li>
            <li>Root-cause Disease Specialist</li>
          </ul>
        </div>
      </div>

      {/* Doctor Stats Section */}
      <DoctorStats />

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 scale-up-content-animation">
        <div className="mx-auto max-w-10xl text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Embrace Balance, Embrace Life
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">
            At Shri Vishvasuta Ayurved & Panchkarma Clinic, we believe in the
            timeless wisdom of Ayurveda to restore harmony and vitality. Our
            holistic approach addresses the root cause of imbalance, guiding you
            on a transformative journey to optimal health and well-being.
            <br />
            Heal from the root with the Ayurveda, One-to-One personalized
            consultation.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto"
              style={{ borderRadius: "100px" }}
            >
              <NavLink
                openInNewTab={true}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  WHATSAPP_APPOINTMENT_MESSAGE
                )}`}
              >
                Book an appointment Now
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* What Ayurveda Can Treat Section */}
      <WhatAyurvedaCanTreat />

      {/* Featured Products Section */}
      <FeaturedProducts featuredProducts={featuredProducts} />

      {/* Pushya Nakshatra Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 scale-up-content-animation">
        <div className="mx-auto max-w-10xl text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            What is Pushya Nakshatra?
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">
            Pushya is the eighth nakshatra in Indian astrology. It is
            considered the most auspicious among all the nakshatras. The symbol
            of this nakshatra is the udder of a cow, which represents
            nourishment and fulfillment. The presiding deity of Pushya
            Nakshatra is Brihaspati, the guru of the gods, who bestows wisdom,
            knowledge, and prosperity.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto"
              style={{ borderRadius: "100px" }}
            >
              <NavLink href="/pushya-nakshatra/">
                Read more about Pushya Nakshatra
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <FeaturedBlogs featuredBlogs={featuredBlogs} />

      {/* Testimonial Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="font-headline text-4xl font-bold text-primary md:text-5xl">
              Testimonial
            </h3>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">
              Please hear out from our all happy customer's.
            </p>
          </div>
          <div className="flex justify-center scale-up-content-animation">
            <iframe
              src={`https://widgets.sociablekit.com/google-reviews/iframe/${SOCIALKIT_WIDGET_ID}`}
              frameBorder="0"
              width="100%"
              height="480"
              title="Google Reviews"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="font-headline text-4xl font-bold text-primary md:text-5xl">
              Our Instagram
            </h3>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/8.0">
              Follow us on Instagram for the latest updates and wellness tips.
            </p>
          </div>
          <div className="flex justify-center scale-up-content-animation">
            <iframe
              src="https://www.instagram.com/vd_nishant_dahake/embed"
              width="100%"
              height="480"
              style={{ border: "none", overflow: "hidden" }}
              title="Instagram Post"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
