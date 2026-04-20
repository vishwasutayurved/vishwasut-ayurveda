'use client';

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/layout/nav-link";
import { WHATSAPP_APPOINTMENT_MESSAGE, WHATSAPP_NUMBER } from "@/lib/constants";
import { Clock, Languages, HeartPulse, Stethoscope } from 'lucide-react';

const infoItems = [
    {
      icon: <Stethoscope className="w-8 h-8 text-amber-600" />,
      label: "Consultation",
      value: "Online & In-Clinic",
    },
    {
      icon: <Languages className="w-8 h-8 text-amber-600" />,
      label: "Languages",
      value: "English, Hindi, Marathi",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-amber-600" />,
      label: "Specialties",
      value: "Panchkarma, Gut Health",
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-600" />,
      label: "Timings",
      value: "10am - 7pm",
    },
  ];

export function HeroBanner() {
  return (
    <section className="w-full bg-stone-50 py-12 md:py-20" style={{backgroundImage: "url('/background.svg')"}}>
      <div className="container mx-auto text-center px-4">
        {/* Headline */}
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-red-600 sm:text-5xl md:text-6xl">
                Still Not Getting Better?
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-medium text-stone-800">
                Because you’re treating symptoms—not the cause.
            </p>
            <p className="mt-6 text-sm md:text-lg leading-relaxed text-stone-600">
              From <strong className='text-primary'>Gut issues</strong> and stress to <strong className='text-primary'>PCOD</strong>, <strong className='text-primary'>diabetes</strong>, <strong className='text-primary'>skin</strong>, <strong className='text-primary'>spine</strong>, and <strong className='text-primary'>infertility</strong> — our Ayurvedic approach targets the root to restore real health.
            </p>
        </div>

        {/* Content Section */}
        <div className="mt-12 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://lh3.googleusercontent.com/pw/AP1GczPz00pU00rMSchI_vw9VmQ9iBDzUzLg46sFe3H-KZY4XuUCy7JX2Os-P3O_Z8HUj357h7H5JngNF4IF-DuIha0nE5-LhZhG87QYuDB7NdpikXxJ5MGYtQeZ--IABb2LWNPMQssJqK2GuazD61YB00uK=w1024-h559-s-no-gm?authuser=0"
              alt="Healthy food and lifestyle for gut health"
              width={1887}
              height={1258}
              className="object-cover"
            />
          </div>

          {/* Info Box */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-2 gap-6">
                {infoItems.map((item) => (
                    <div key={item.label} className="flex flex-col items-center justify-center p-4 rounded-lg bg-stone-50 border border-stone-200/80">
                        {item.icon}
                        <p className="mt-3 text-xs font-semibold text-stone-500 tracking-wider uppercase">{item.label}</p>
                        <p className="mt-1 text-base font-bold text-stone-800">{item.value}</p>
                    </div>
                ))}
            </div>
            <Button asChild size="lg" className="w-full mt-6 bg-amber-600 hover:bg-amber-700">
              <NavLink 
                openInNewTab={true}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_APPOINTMENT_MESSAGE)}`}>
                Book a Consultation
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
