
import Image from "next/image";
import { NavLink } from "../layout/nav-link";
import { Button } from "../ui/button";

const specializations = [
  {
    name: "Joint and spine disorders",
    icon: "https://drvani.piahc.com/assets/images/image23.jpg?v=e7e27d87",
  },
  {
    name: "Stress, Anxiety & Insomnia",
    icon: "https://drvani.piahc.com/assets/images/image20.jpg?v=e7e27d87",
  },
  {
    name: "Acidity & Gut issues",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczMLNIz3urocKN-AUl7HU4thXegHj19E1K7QkwAniBPZNADZOzd7WdbaJfi0QbMr4VnH2penBo6js78xorO_TuVBeJmGZu8JhY5pUh5Xgg2tFqoLDFnoJEDOGQId2Hh-wePdlRZuXs3e5u2UOMTHqEUg=w913-h913-s-no-gm?authuser=0",
  },
  {
    name: "Skin & Hair",
    icon: "https://drvani.piahc.com/assets/images/image28.jpg?v=e7e27d87",
  },
  {
    name: "PCOD & Gynecological issues",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczPRAlbEAg0qJiW2ptrgITRtEnRBb0clyzIq9jJlVvOV1tTXypFACNzg2hn27hj55l8JqbAjAvzcQj0LG2tkENA3CPxU6SsDpQsm4DE1uQEhovG6W7fiPOkfxiqSybpyB9eBURhkoEnd7YphvRI2FCDr=w913-h913-s-no-gm?authuser=0",
  },
  {
    name: "Diabetes",
    icon: "https://drvani.piahc.com/assets/images/image26.jpg?v=e7e27d87",
  },
  {
    name: "Hypertension",
    icon: "https://drvani.piahc.com/assets/images/image27.jpg?v=e7e27d87",
  },
  {
    name: "Thyroid",
    icon: "https://drvani.piahc.com/assets/images/image31.jpg?v=e7e27d87",
  },
  {
    name: "Male & Female Infertility",
    icon: "https://drvani.piahc.com/assets/images/image34.jpg?v=e7e27d87",
  },
  {
    name: "Asthma & Respiratory Disorders",
    icon: "https://lh3.googleusercontent.com/pw/AP1GczO1oAR9ks_q30laSu4cV3fEzUvxBf7R1JHf0aI3XIb7hP5TIZAVxb0O2EfvmnPcJu4rHiEAVREqjdnirrqx-o9QI64X2kkPFwY-uKjNUxLrANBtxs4GBc9BL82uGN245lslDQTsJTIXqW8WUbE5ASTN=w744-h744-s-no-gm?authuser=0",
  },
  {
    name: "Liver Issues",
    icon: "https://drvani.piahc.com/assets/images/image25.jpg?v=e7e27d87",
  },
];

export function Specialization() {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12 scale-up-content-animation">
      <div className="mx-auto max-w-10xl text-center">
        <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
          Our Specialisation
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {specializations.map((specialization) => (
            <div
              key={specialization.name}
              className="flex flex-col items-center"
            >
              <Image
                src={specialization.icon}
                alt={specialization.name}
                width={100}
                height={100}
              />
              <p className="mt-2 text-lg font-medium text-foreground/80">
                {specialization.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
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
    </section>
  );
}
