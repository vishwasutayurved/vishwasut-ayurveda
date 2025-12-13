import type { Metadata } from 'next';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Our Ayurvedic Blogs',
  description: 'Explore our blog for insights on Ayurvedic remedies, lifestyle tips, and holistic wellness.',
};

export default function BlogsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Our Ayurvedic Insights
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Dive into our collection of articles where we share ancient wisdom, practical tips, and the latest discoveries in the world of Ayurveda to guide you on your path to well-being.
          </p>
        </div>

        <Card className="mt-16 overflow-hidden">
          <div className="grid grid-cols-1 items-stretch md:grid-cols-2">
            <div className="relative min-h-[300px] w-full md:min-h-full">
              <Image
                src="https://placehold.co/800x1000.png"
                alt="Ayurvedic herbs and spices"
                data-ai-hint="ayurveda blog"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col p-8 md:p-12">
              <h2 className="font-headline text-3xl font-bold">The Power of Turmeric</h2>
              <p className="mt-4 text-foreground/70">
                Turmeric is a golden spice that has been used for centuries in Ayurvedic medicine. It's a powerful anti-inflammatory and antioxidant that can help with a wide range of health issues.
              </p>
              
              <div className="mt-8 flex-grow">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-headline text-lg">Key Benefits</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc space-y-2 pl-5 text-foreground/70">
                        <li>Reduces inflammation throughout the body.</li>
                        <li>Boosts the immune system.</li>
                        <li>Improves skin health.</li>
                        <li>Supports digestive health.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="font-headline text-lg">How to Use</AccordionTrigger>
                    <AccordionContent>
                      You can add turmeric to your food, take it as a supplement, or drink it as a tea. A popular Ayurvedic drink is "Golden Milk," which is made with turmeric, milk, and other spices.
                    </AccordionContent>
                  </AccordionItem>
                   <AccordionItem value="item-3">
                    <AccordionTrigger className="font-headline text-lg">Is It Right For Me?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/70">
                        Turmeric is generally safe for most people. However, it's always a good idea to talk to your doctor before taking any new supplements, especially if you have any health conditions or are taking any medications.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="mt-16 text-center">
          <h3 className="font-headline text-2xl font-bold">More Blogs Coming Soon</h3>
          <p className="mt-2 text-foreground/70">We are currently working on more articles to share with you.</p>
        </div>
      </div>
    </div>
  );
}
