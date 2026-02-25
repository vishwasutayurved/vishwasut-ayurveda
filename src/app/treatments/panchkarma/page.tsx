import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FlipCard } from "@/components/ui/flip-card";
import { WHATSAPP_NUMBER, WHATSAPP_PANCHAKARMA_MESSAGE } from "@/lib/constants";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Panchkarma",
  description: "Panchkarma treatment.",
};

const therapies = [
  {
    name: "Vaman",
    description:
      "In this therapy, the patient undergoes both internal and external oil massages along with warm poultice treatments over several days, supported by specific Ayurvedic medicines. Once the toxins are softened and move toward the upper regions of the body, herbal preparations are administered to induce therapeutic vomiting, often followed by a special medicinal soup. This process effectively eliminates harmful substances from the body. Vamana therapy is particularly recommended for conditions associated with excess kapha, such as obesity, asthma, and hyperacidity.",
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczPz2mG51M_4hRHKnWoUdSCnn7oigGQ-iXrd4fQwZwNkBTULc5S0OHXLZ1_sATKRF-UPlCXXOWs1S76vCdsdVNIKf7UUOt8IfOKDbNS-JTgP919fiOtRhod1ago0cCdvX2n2o5oLXVqHYi6YdCm6EOVb=w913-h913-s-no-gm?authuser=0",
  },
  {
    name: "Virechan",
    description:
      "In Virechana therapy, toxins are eliminated from the body through the cleansing of the bowels. During this procedure, the patient receives both internal and external oleation treatments along with heat therapy. Afterward, a natural herbal laxative is administered to cleanse the intestines, aiding in the removal of accumulated toxins. This therapy is primarily recommended for pitta-dominant conditions such as herpes zoster, jaundice, colitis, and celiac disease.",
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczOVVUkKo3heNnW9TfYlbBkC1-GGqimRsvcvtgnyX7eMdbw5ulSa6xgnopqgSaV8cY856POZeyE7AIxDxq-04rrjCX1gIxx8E1xyIvdBLgPwwTnmJrEMwKMEPslDsGajck0R6LKdf_9RoCLMLmLFJ-tw=w609-h913-s-no-gm?authuser=0",
  },
  {
    name: "Basti",
    description:
      "In Ayurveda, administering medicated substances through enema therapy is a specialized and effective approach for treating various illnesses, particularly chronic and complex conditions. Depending on the nature of the disorder, carefully prepared herbal decoctions, oils, ghee, or milk are introduced through the rectum, producing significant therapeutic benefits. This treatment is especially effective for disorders caused by an imbalance in vata, such as arthritis, hemorrhoids, and chronic constipation.",
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczO_JcRw4imjXzwEclwoUPqlXsliXd-cs25oGsVVcsqibVgRgXSamLF_s2976N8zXjscfCo98pu5tRP3fhPVVf4CmxVtUD9A5QqVbGAGb2LfgwfUVeBuB1C40zxo-pGztSfuwq0zeJpXk_c71TrZE-yF=w609-h913-s-no-gm?authuser=0",
  },
  {
    name: "Nasya",
    description:
      "This therapy is highly effective in cleansing and purifying the head region. The treatment begins with a gentle massage and the application of warmth to the head and shoulders. Following this, medicated nasal drops are administered into both nostrils. This process helps cleanse the entire head area and alleviates various conditions, including headaches, neurological discomfort, hair-related disorders, sleep disturbances, nervous system imbalances, sinus infections, chronic nasal discharge, and breathing difficulties.",
      imageUrl: "https://images.unsplash.com/photo-1605200332828-a627237c89f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Raktamokshan",
    description:
      "This treatment is designed to purify the blood and is highly effective for health conditions that arise from blood impurities. It may be applied either to a specific area or to the entire body, depending on the condition. This therapy is particularly beneficial for various skin disorders such as psoriasis and dermatitis, as well as for localized problems including infections and skin discoloration.",
      imageUrl: "https://images.unsplash.com/photo-1512291319078-3a1e9c5b0c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function PanchkarmaPage() {
  return (
    <div className="bg-background py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
          <div className="mb-12 text-center">
            <h1 className="font-headline text-3xl font-bold text-primary md:text-5xl">
              What is Panchakarma Treatment?
            </h1>
          </div>

          <div className="relative mb-12 h-60 w-full overflow-hidden rounded-lg shadow-lg md:h-96">
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczMflWMkB9qW70ce3hiC0HnlkCMBFRQkBayk76ejn7Sbi1p2263r6pCVXcVe0gg_-4CYflQt0Qd1593-iaT5Bi_ohMWnve6Z60DIzeI8e_FdWfnvg2LFkrtZvuHI2p2qNm9AgK7GwTXy4lqQ3fjH7ukZ=w1020-h450-s-no-gm?authuser=0"
              alt="Panchakarma Treatment"
              fill
              className="object-cover"
              data-ai-hint="ayurvedic treatment banner"
            />
          </div>

          <p>
            Indian Ayurveda has made significant contributions to the world.
            Its principles have influenced lifestyles and promoted healthier living,
            helping societies move from widespread illness toward overall well-being and fitness.
            The value of Ayurveda is immense, and it stands as one of the most influential systems of alternative medicine.
          </p>
          <br />
          <p>
            One of the most recognized aspects of Ayurveda is Panchakarma.
            The term Panchakarma means <b>Five Actions,</b> reflecting its use of five specialized therapeutic procedures
            designed to cleanse and balance the body. These procedures include Vamana (therapeutic vomiting),
            Virechana (purgation), Niruha, Anuvasana, and Nasya.
            Panchakarma serves as a foundational healing approach and plays a vital role in many Ayurvedic treatments.
          </p>
          <br />
          <p>
            Panchakarma works most effectively when specially formulated medicated oils are used,
            as they assist in eliminating toxins and deep-seated impurities from the body.
            This healing therapy truly embodies the fundamental principles of Ayurveda and
            is widely respected for its effectiveness, reliability, and long-standing therapeutic benefits.
          </p>

          <h2 className="font-headline text-2xl font-bold text-primary md:text-3xl mt-16 mb-8">
            Panchakarma Treatment Stages
          </h2>
          <ul>
            <li>
              <strong>Oleation:</strong> This process involves the application of oil or other oily substances to the body.
              Ayurveda employs a wide variety of herbal and mineral-based oils, primarily for external use,
              while ghee is commonly used for internal consumption. The fatty nature of these substances enables
              medicinal components to penetrate deeply into body tissues,
              reaching individual cells and assisting in the effective removal of toxins trapped within them.
            </li>
            <br />
            <li>
              <strong>Fomentation:</strong> Treatments that induce sweating are known as fomentation therapies.
              These therapies are usually performed after oleation procedures.
              While oleation softens and loosens the body tissues, fomentation further enhances their
              flexibility. Additionally, toxins released during oleation are broken down through fomentation
              and are then effectively eliminated from the body.
            </li>
          </ul>

          <h2 className="font-headline text-2xl font-bold text-primary md:text-3xl mt-16 mb-8">
            Benefits of Panchakarma
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            <li>Completely purifies the body</li>
            <li>Riddance of toxins</li>
            <li>Speeds up metabolism</li>
            <li>Aids in weight reduction</li>
            <li>Enhances digestive strength</li>
            <li>Opens up blocked channels</li>
            <li>Relaxes the mind and body</li>
            <li>Rejuvenates tissues</li>
            <li>Boosts Immunity</li>
            <li>Relieves stress</li>
          </ul>
        </article>

        <section className="mx-auto max-w-7xl mt-24">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl text-center mb-12">
            The Five Panchakarma Therapies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {therapies.map((therapy) => (
              <FlipCard
                key={therapy.name}
                className="h-96"
                frontContent={
                  <div className="relative h-full w-full">
                    <Image
                      src={therapy.imageUrl}
                      alt={therapy.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
                      <h3 className="text-white text-2xl font-bold font-headline">{therapy.name}</h3>
                      <p className="text-white text-sm mt-2">Click to read more</p>
                    </div>
                  </div>
                }
                backContent={
                  <Card className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl font-bold">
                        {therapy.name}
                      </CardTitle>
                    </CardHeader>
                    <ScrollArea className="flex-grow">
                      <CardContent>
                        <p>{therapy.description}</p>
                      </CardContent>
                    </ScrollArea>
                  </Card>
                }
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl mt-24 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl mb-8">
            Book Your Panchakarma Appointment
          </h2>
          <p className="prose prose-lg dark:prose-invert mx-auto">
            Ready to experience the rejuvenating benefits of Panchakarma? Contact us
            to schedule your consultation with our Ayurvedic expert.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a
                href="https://api.whatsapp.com/send?phone=919911550185&text=Hello!%20I'm%20interested%20in%20booking%20a%20Panchakarma%20appointment."
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on WhatsApp
              </a>
            </Button>
          </div>
        </section>

        <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert mt-24">
          <h2 className="font-headline text-2xl font-bold text-primary md:text-3xl mt-16 mb-8">
            Why Undergo a Panchakarma Therapy?
          </h2>
          <p>
            Factors such as stress, polluted air and water, and unhealthy lifestyle habits can cause
            the accumulation of harmful substances within the body’s tissues and blood.
            When these toxins build up over time, they disturb the body’s
            natural balance and may eventually lead to a wide range of physical and mental health problems.
          </p>
          <br />
          <p>
            Panchakarma helps quickly reverse this harmful process,
            producing visible results that are often long-lasting.
            It employs a comprehensive approach that includes therapeutic massages,
            herbal steam treatments, specially designed diets, nutritional guidance, mild fasting,
            and colon cleansing techniques. Together, these methods effectively eliminate accumulated toxins
            from the body and restore overall balance and well-being.
          </p>
          <br />
          <p>
            Your personalized Panchakarma program starts with a detailed consultation with an Ayurvedic doctor,
            allowing the specialist to design a treatment plan tailored to your specific health needs.
            As the therapy progresses, you will follow a specially prescribed Ayurvedic diet and use selected herbs and
            oils at home. These practices support the liver and digestive system, enhancing their ability to efficiently
            eliminate toxins and promote overall wellness.
          </p>
          <h2 className="font-headline text-2xl font-bold text-primary md:text-3xl mt-16 mb-8">
            What Can I Expect from Panchakarma Therapy?
          </h2>
          <p>
          The Panchakarma cleansing process affects individuals on multiple levels, 
          influencing the mind, body, and emotions. During the course of treatment, 
          many people experience what is known as a <b>healing crisis.</b> This is a natural part of the 
          recovery process and often indicates that the body is actively eliminating toxins and moving toward 
          improved health and balance.
          </p>
          <h2 className="font-headline text-2xl font-bold text-primary md:text-3xl mt-16 mb-8">
            Panchakarma Purifies the Body and Mind
          </h2>
          <p>
          According to Ayurveda, maintaining good health depends on our ability to fully process every aspect 
          of life—absorbing what is beneficial and releasing what is not. When we are unable to properly digest food, 
          experiences, or emotions, toxins accumulate in the body’s tissues, causing imbalance and eventually 
          leading to illness. Panchakarma is a specialized cleansing therapy designed to eliminate these stored 
          toxins, restore balance, and support the body’s natural healing abilities.
          </p>

          <h3 className="font-headline text-xl font-bold text-primary md:text-2xl mt-12 mb-6">
            The Foundation of Health and Well-being
          </h3>
          <p>
          When toxins accumulate in the body, they obstruct the free flow of energy, 
          signals, and nutrients throughout the system. In Ayurveda, this buildup is considered 
          a primary cause of most illnesses. A common example occurs when the body struggles 
          to process excess fat and cholesterol, which then collect in the blood vessels and arteries. 
          Over time, this can impede blood circulation and increase the risk of serious conditions such as heart attacks.
          </p>
          <br />
          <p>
          While it is easy to notice how food impacts the body, it’s equally important to recognize that the brain 
          and heart are constantly processing energy and information. In Ayurveda, your emotional agni, or digestive fire, 
          helps you navigate and metabolize feelings and emotions—whether it’s the warmth of a loved one’s smile, the surprise 
          of unexpected feedback at work, or the excitement of a new relationship—allowing your mind and heart to stay balanced and healthy.
          </p>
          <h3 className="font-headline text-xl font-bold text-primary md:text-2xl mt-12 mb-6">
            Restoring the Body’s Innate Balance
          </h3>
          <p>
          When your emotional agni, or digestive fire, is functioning properly, you can absorb what is beneficial 
          from your experiences and release what is not. If emotions are not properly processed, it is similar to having 
          undigested food, leaving harmful residues in the body. In fact, unresolved anger, prolonged sadness, and lingering guilt 
          can often cause more disruption to one’s well-being than physical digestive issues, affecting both the mind and body.
          </p>
          <br />
          <p>
          To maintain optimal health, it is essential to support strong digestion and eliminate harmful toxins from the body. Panchakarma offers a natural, 
          holistic approach to cleanse the system, restore the body’s inner balance, and revitalize energy, promoting overall well-being.
          </p>
          <p className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 mt-12">
            <strong>Note: </strong>Panchakarma treatments are not recommended during fever, injuries, or pregnancy. 
            It is essential to consult a qualified and experienced Ayurvedic doctor before beginning any therapy. 
            This ensures that the treatment is carefully tailored to your individual health needs and current condition, maximizing safety and effectiveness.
          </p>
        </article>

        
        <section className="mx-auto max-w-4xl mt-24 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl mb-8">
            Book Your Panchakarma Appointment
          </h2>
          <p className="prose prose-lg dark:prose-invert mx-auto">
            Ready to experience the rejuvenating benefits of Panchakarma? Contact us
            to schedule your consultation with our Ayurvedic expert.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a
                href={`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_PANCHAKARMA_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}