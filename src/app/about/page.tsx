import type { Metadata } from 'next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { ImageGallery } from '@/components/about/image-gallery';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the history, philosophy, and expert practitioners at Shri Vishvasuta Ayurved & Panchkarma Clinic.',
};

//"YYYY-MM-DD" format of date as input
function calculateYearDifferenceDecimal(educationDate: string | Date): number {
  const startDate = new Date(educationDate);
  const currentDate = new Date();

  if (isNaN(startDate.getTime())) {
    throw new Error("Invalid education date");
  }

  const diffInMs: number = currentDate.getTime() - startDate.getTime();
  const diffInDays: number = diffInMs / (1000 * 60 * 60 * 24);

  return Number((diffInDays / 365.25).toFixed(1));
}

const practitioners = [
  {
    name: 'Dr. Nishant Dahake',
    title: 'Ayurveda and Panchakarma Consultant',
    image: '/Nishant Dahake.png',
    fallback: 'ND',
    bio: `With over ${calculateYearDifferenceDecimal("2022-06-17")} years of experience of
     Ayurvedacharya &amp; Panchkarma Consultant, helping people overcome chronic pain, lifestyle disorders, and long-standing health issues through authentic, result-oriented Ayurvedic treatment.
    <br><br>At my clinic — Shri Vishvasut Ayurved &amp; Panchkarma Clinic, Nagpur — I focus on transforming patient outcomes with:<br>✨ Panchkarma therapies tailored to root-cause diagnosis<br>✨ Ayurvedic solutions for back pain, joint disorders, skin issues, acidity, stress &amp; hormonal imbalance<br>✨ Long-term wellness planning with simple, practical guidance
    `,
    hint: 'doctor portrait'
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Our Journey in Healing
          </h1>
          <p className="mt-6 leading-relaxed text-foreground/80">
            Shri Vishvasuta Ayurved & Panchkarma Clinic was founded with a simple yet profound mission: to make the holistic wisdom of Ayurveda accessible to all, fostering a community of health, balance, and harmony.
          </p>
        </div>

        <ImageGallery />

        <section className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
              Meet Our Practitioners
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Our team of dedicated professionals is the heart of our clinic, committed to guiding you with compassion and expertise.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            {practitioners.map((practitioner) => (
              <Card key={practitioner.name} className="p-6 text-center scale-up-content-animation">
                <CardContent className="flex flex-col items-center">
                  <Avatar className="h-32 w-32 border-4 border-primary/20">
                    <AvatarImage src={practitioner.image} alt={practitioner.name} data-ai-hint={practitioner.hint} />
                    <AvatarFallback>{practitioner.fallback}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-6 font-headline text-2xl font-bold">{practitioner.name}</h3>
                  <p className="mt-1 text-primary">{practitioner.title}</p>
                  <div className='text-left' dangerouslySetInnerHTML={{ __html: practitioner.bio }} />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
