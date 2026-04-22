'use client';
import { Building, Calendar, Phone } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { CLINIC_IMAGES_WITH_DESCRIPTION } from "@/lib/constants";

export default function OurCentre() {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );
    return (
        <section className="container mx-auto px-4 py-8 sm:py-12">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl text-center mb-12">
                Our Centre
            </h2>
            <div className="p-6 bg-stone-50 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="font-headline text-2xl font-bold text-lime-700 mb-4">
                            Shri Vishvasuta Ayurved & Panchkarma Clinic
                        </h3>
                        <p className="text-gray-600 mb-6">
                            A full-spectrum integrative Ayurveda centre offering authentic healing therapies, doctor consultations, and personalised wellness programs.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Building className="w-6 h-6 mr-3 text-gray-500 flex-shrink-0" />
                                <span className="font-semibold">Plot no 11 A, Hudkeshwar Rd, opposite Domino's Nasare Sabaguha, Dubey Nagar, Chandrakiran Nagar, Nagpur, Maharashtra 440034</span>
                            </li>
                            <li className="flex items-center">
                                <Calendar className="w-6 h-6 mr-3 text-gray-500" />
                                <span className="font-semibold">Mon - Sat: 09:00 AM – 09:00 PM (Prior Appointment)</span>
                            </li>
                            <li className="flex items-start">
                                <Phone className="w-6 h-6 mr-3 text-gray-500" />
                                <div className="flex flex-col">
                                    <a href="tel:+919270220033" className="hover:underline font-semibold">
                                        +91 92702 20033
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-1">
                        <h3 className="font-headline text-2xl font-bold text-lime-700 mb-4">
                            Gallery
                        </h3>
                        <Carousel className="w-full mx-auto" plugins={[plugin.current]}>
                            <CarouselContent>
                                {CLINIC_IMAGES_WITH_DESCRIPTION.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative aspect-[3/2]">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover rounded-lg shadow-md"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                    <div className="lg:col-span-2">
                        <h3 className="font-headline text-2xl font-bold text-lime-700 mt-8 mb-4">
                            Get Direction
                        </h3>
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.3289354196713!2d79.1222725!3d21.0994483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b9185e882e43%3A0xb7050d53900cc12b!2sDr%20Dahake's%20Shri%20Vishvasuta%20Ayurved%20%26%20Panchkarma%20Clinic%20%7C%20Panchkarma%20in%20Nagpur!5e0!3m2!1sen!2sin!4v1765634420552!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
