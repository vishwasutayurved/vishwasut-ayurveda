
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/layout/nav-link';
import { WHATSAPP_APPOINTMENT_MESSAGE, WHATSAPP_NUMBER, WHATSAPP_PUSHYA_NAKSHATRA_MESSAGE } from '@/lib/constants';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pushya Nakshatra 2024 - A Special Day for Ayurvedic Healing',
  description: 'Learn about the significance of Pushya Nakshatra and why it is considered the most auspicious day for starting any Ayurvedic treatment or taking medicines for enhanced benefits. Find the Pushya Nakshatra dates for 2024.',
  openGraph: {
    title: 'Pushya Nakshatra 2024 - A Special Day for Ayurvedic Healing',
    description: 'Find the Pushya Nakshatra dates for 2024 and understand its importance in Ayurveda.',
    url: 'https://vishwasutayurveda.web.app/pushya-nakshatra',
    type: 'article',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/vishvasut-ayurved.appspot.com/o/images%2Fpushya-nakshatra-banner.jpg?alt=media&token=e3b0b9a3-a7f4-4a6e-b016-368297d025a6',
        width: 1200,
        height: 630,
        alt: 'Pushya Nakshatra Auspicious Day',
      },
    ],
  },
};

const pushyaNakshatraContent = `
<h2 class="text-2xl font-bold text-primary mb-4">What is Pushya Nakshatra?</h2>
<p class="mb-4">Pushya is the eighth nakshatra in Indian astrology. It is considered the most auspicious among all the nakshatras. The symbol of this nakshatra is the udder of a cow, which represents nourishment and fulfillment. The presiding deity of Pushya Nakshatra is Brihaspati, the guru of the gods, who bestows wisdom, knowledge, and prosperity.</p>
<p class="mb-4">The word "Pushya" itself means "to nourish," and this nakshatra is believed to provide the energy for growth, expansion, and good fortune. It is a time when positive energies are at their peak, making it an excellent period for starting new ventures, making important purchases, and engaging in spiritual activities.</p>
<h3 class="text-xl font-bold text-primary mt-6 mb-4">Why is Pushya Nakshatra Important in Ayurveda?</h3>
<p class="mb-4">In the field of Ayurveda, Pushya Nakshatra holds a special significance. It is considered the most favorable time for preparing and administering medicines, as well as for starting any kind of treatment or therapy. According to Ayurvedic texts, any medicine taken during Pushya Nakshatra has a more potent and lasting effect on the body.</p>
<p class="mb-4">This is because the nourishing and healing energies of this nakshatra enhance the efficacy of the herbs and formulations, allowing them to penetrate deeper into the body's tissues (dhatus) and provide optimal results. It is also a great time for rejuvenation therapies like Panchakarma, as the body is more receptive to detoxification and healing during this period.</p>
<p class="mb-4">At our clinic, we give special importance to Pushya Nakshatra by preparing Suvarnaprashan for kids, a unique Ayurvedic immunization method, on this auspicious day to boost their immunity and overall development.</p>
<h3 class="text-xl font-bold text-primary mt-6 mb-4">Benefits of Starting Treatment on Pushya Nakshatra:</h3>
<ul class="list-disc list-inside mb-4 pl-4">
    <li class="mb-2"><strong>Enhanced Efficacy:</strong> Medicines and treatments are more effective.</li>
    <li class="mb-2"><strong>Quicker Recovery:</strong> The healing process is accelerated.</li>
    <li class="mb-2"><strong>Long-lasting Results:</strong> The benefits of the treatment are sustained for a longer period.</li>
    <li class="mb-2"><strong>Boosted Immunity:</strong> It is an excellent time for therapies aimed at strengthening the immune system.</li>
</ul>
`;

const pushyaNakshatraDates2024 = [
    { month: "January", dates: ["25th"] },
    { month: "February", dates: ["21st"] },
    { month: "March", dates: ["19th"] },
    { month: "April", dates: ["15th"] },
    { month: "May", dates: ["12th"] },
    { month: "June", dates: ["8th"] },
    { month: "July", dates: ["5th"] },
    { month: "August", dates: ["1st", "29th"] },
    { month: "September", dates: ["25th"] },
    { month: "October", dates: ["22nd"] },
    { month: "November", dates: ["18th"] },
    { month: "December", dates: ["15th"] },
];

export default function PushyaNakshatraPage() {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_PUSHYA_NAKSHATRA_MESSAGE)}`;

    return (
        <div className="bg-background">
            <div className="relative h-80 w-full md:h-[400px]">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/vishvasut-ayurved.appspot.com/o/images%2Fpushya-nakshatra-banner.jpg?alt=media&token=e3b0b9a3-a7f4-4a6e-b016-368297d025a6"
                    alt="Pushya Nakshatra Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <div className="max-w-3xl px-4">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Pushya Nakshatra 2024</h1>
                        <p className="mt-4 text-xl sm:text-2xl">The Most Auspicious Day for Health & Wellness</p>
                    </div>
                </div>
            </div>

            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content */}
                        <div className="lg:w-2/3">
                            <article>
                                <div
                                    className="prose prose-lg dark:prose-invert max-w-none"
                                    dangerouslySetInnerHTML={{ __html: pushyaNakshatraContent }}
                                />
                            </article>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3">
                            <div className="sticky top-24">
                                <Card className="mb-8">
                                    <CardHeader>
                                        <CardTitle className="text-xl">Pushya Nakshatra Dates 2024</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul>
                                            {pushyaNakshatraDates2024.map((item, index) => (
                                                <li key={index} className="flex items-center mb-3">
                                                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                                                    <span className="font-semibold">{item.month}:</span>
                                                    <span className="ml-2">{item.dates.join(", ")}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                                
                                <Card className="bg-primary/10">
                                    <CardHeader>
                                        <CardTitle className="text-xl">Book Your Appointment</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-6">Don't miss the opportunity to start your healing journey on the auspicious day of Pushya Nakshatra.</p>
                                        <Button size="lg" className="w-full" asChild>
                                            <NavLink href={whatsappUrl} openInNewTab>
                                                Book on WhatsApp
                                            </NavLink>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}
