import type { Metadata } from 'next';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Ayurvedic Therapies',
  description: 'Explore traditional Ayurvedic therapies like Panchakarma, Abhyanga, and Shirodhara offered at Shri Vishvasuta Ayurved & Panchkarma Clinic.',
};

export default function TherapiesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Our Signature Therapies
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            We offer a comprehensive range of authentic Ayurvedic treatments, each designed to promote detoxification, rejuvenation, and profound healing by restoring your body's natural balance.
          </p>
        </div>

        <Card className="mt-16 overflow-hidden">
          <div className="grid grid-cols-1 items-stretch md:grid-cols-2">
            <div className="relative min-h-[300px] w-full md:min-h-full">
              <Image
                src="https://placehold.co/800x1000.png"
                alt="Panchakarma therapy illustration"
                data-ai-hint="ayurveda treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col p-8 md:p-12">
              <h2 className="font-headline text-3xl font-bold">Panchakarma: The Ultimate Detox</h2>
              <p className="mt-4 text-foreground/70">
                Panchakarma is the cornerstone of Ayurvedic healing. It is a profound purification process that works to cleanse the body of deep-seated toxins and ama (undigested metabolic waste) that accumulate over time, leading to disease. This therapy is not just a detox; it's a reset for your entire system.
              </p>
              
              <div className="mt-8 flex-grow">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-headline text-lg">Key Benefits</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc space-y-2 pl-5 text-foreground/70">
                        <li>Eliminates toxins and rejuvenates tissues.</li>
                        <li>Restores constitutional balance (Vata, Pitta, Kapha).</li>
                        <li>Boosts immunity and energy levels.</li>
                        <li>Improves mental clarity, focus, and emotional well-being.</li>
                        <li>Reduces stress and its effects on the body.</li>
                        <li>Promotes healthy digestion and metabolism.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="font-headline text-lg">The Process</AccordionTrigger>
                    <AccordionContent>
                      Panchakarma consists of three stages. First, <strong className="text-primary">Purvakarma</strong> (preparatory procedures) like oil massage and steam therapy prepare the body. Second, <strong className="text-primary">Pradhanakarma</strong> (main procedures) involves the five core cleansing actions. Finally, <strong className="text-primary">Paschatkarma</strong> (post-therapeutic measures) includes lifestyle and diet regimens to maintain the benefits. Each program is customized after a thorough consultation.
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="item-3">
                    <AccordionTrigger className="font-headline text-lg">Is It Right For Me?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/70">
                        Panchakarma is beneficial for both preventing and treating a wide range of health issues. It is particularly effective for chronic conditions, autoimmune disorders, digestive problems, and as a seasonal cleanse for maintaining optimal health. A consultation with our Ayurvedic doctor is required to determine your suitability and create a personalized treatment plan.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Placeholder for other therapies */}
        <div className="mt-16 text-center">
          <h3 className="font-headline text-2xl font-bold">More Therapies Coming Soon</h3>
          <p className="mt-2 text-foreground/70">We are currently updating our website with more information on other traditional treatments like Abhyanga, Shirodhara, and more.</p>
        </div>
      </div>
    </div>
  );
}
