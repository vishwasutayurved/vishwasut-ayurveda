import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Panchakarma?",
    answer:
      "Panchakarma is a set of five therapeutic treatments in Ayurveda that are designed to detoxify the body and restore balance. It includes Vamana (emesis), Virechana (purgation), Basti (enema), Nasya (nasal administration), and Raktamokshana (bloodletting).",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by calling us directly at our contact number, or by using the contact form on our website. We will get back to you to confirm your booking.",
  },
  {
    question: "What are your clinic hours?",
    answer:
      "Our clinic is open from 10:00 AM to 8:00 PM, Monday to Saturday. We are closed on Sundays.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes, we offer online consultations for patients who are unable to visit our clinic in person. Please contact us to schedule an online appointment.",
  },
];

export function Faq() {
  return (
    <section className="py-8 sm:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h3 className="font-headline text-4xl font-bold text-primary md:text-5xl">FAQs</h3>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            Frequently Asked Questions
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
