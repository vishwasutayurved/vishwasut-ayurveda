import type { Metadata } from 'next';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Shri Vishvasuta Ayurved & Panchkarma Clinic to book an appointment or for any inquiries. Find our address, phone number, and contact form here.',
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              We are here to answer any questions you may have about our therapies or your wellness journey. Reach out to us to schedule your consultation.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Clinic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-lg">
                  <div className="flex items-start">
                    <MapPin className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">Our Location</h3>
                      <p className="text-foreground/70">Plot no 11 A, Hudkeshwar Rd, opposite Domino's Nasare Sabaguha, Dubey Nagar, Chandrakiran Nagar, Nagpur, Maharashtra 440034</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">Phone Number</h3>
                      <p className="text-foreground/70">+919270220033</p>
                      <p className="text-foreground/70">+919975797624</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-foreground/70">vishwasutayurved@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.3289354196713!2d79.1222725!3d21.0994483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b9185e882e43%3A0xb7050d53900cc12b!2sDr%20Dahake&#39;s%20Shri%20Vishvasuta%20Ayurved%20%26%20Panchkarma%20Clinic%20%7C%20Panchkarma%20in%20Nagpur!5e0!3m2!1sen!2sin!4v1765634420552!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </Card>
            </div>
            <Card className="p-2">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Reason for your inquiry" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Please describe your inquiry in detail..." rows={6} />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
