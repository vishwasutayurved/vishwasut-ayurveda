import { NavLink } from "@/components/layout/nav-link";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { Button } from "@/components/ui/button";
import { SOCIALKIT_WIDGET_ID, WHATSAPP_APPOINTMENT_MESSAGE, WHATSAPP_NUMBER, WHATSAPP_PUSHYA_NAKSHATRA_MESSAGE } from "@/lib/constants";
import { Faq } from "@/components/home/faq";
import { FeaturedProducts } from "@/components/home/featured-products";
import { FeaturedBlogs } from "@/components/home/featured-blogs";
import { getFeaturedBlogs, getFeaturedProducts } from "@/lib/firebase/firestore";

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();
  const featuredBlogs = await getFeaturedBlogs();
  
  return (
    <div className="flex flex-col">
      <section className="relative w-full">
        <HeroCarousel />
      </section>

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

      <FeaturedProducts featuredProducts={featuredProducts} />
      
      <section className="container mx-auto px-4 py-8 sm:py-12 scale-up-content-animation">
        <div className="mx-auto max-w-10xl text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
          What is Pushya Nakshatra?
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80">
          Pushya is the eighth nakshatra in Indian astrology. 
          It is considered the most auspicious among all the nakshatras. 
          The symbol of this nakshatra is the udder of a cow, which represents nourishment and fulfillment.
          The presiding deity of Pushya Nakshatra is Brihaspati, 
          the guru of the gods, who bestows wisdom, knowledge, and prosperity.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto"
              style={{ borderRadius: "100px" }}
            >
              <NavLink
                href="/pushya-nakshatra/"
              >
                Read more about Pushya Nakshatra
              </NavLink>
            </Button>
          </div>

        </div>
      </section>

      <FeaturedBlogs featuredBlogs={featuredBlogs} />

      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="font-headline text-3xl font-bold md:text-4xl">
              Testimonial
            </h3>
            <p className="mt-4 text-foreground/70">
              Please hear out from our all happy customer's.
            </p>
          </div>
          <div className="flex justify-center  scale-up-content-animation">
            <iframe
              src={`https://widgets.sociablekit.com/google-reviews/iframe/${SOCIALKIT_WIDGET_ID}`}
              width="100%"
              height="480"
              style={{ border: "none", overflow: "hidden" }}
              title="Instagram Post"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="font-headline text-3xl font-bold md:text-4xl">
              Our Instagram
            </h3>
            <p className="mt-4 text-foreground/70">
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
      
      <Faq />
    </div>
  );
}
