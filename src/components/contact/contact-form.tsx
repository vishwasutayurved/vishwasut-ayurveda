'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import QrCodeModal from './qr-code-modal';

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [whatsappUrl, setWhatsappUrl] = useState('');
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDeviceType = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        checkDeviceType();
        window.addEventListener('resize', checkDeviceType);
        return () => window.removeEventListener('resize', checkDeviceType);
    }, []);

    const onSubmit = (data: ContactFormValues) => {
        const message = `Hello Dr. Nishant Dahake,

I am contacting you through the website. Here are my details:

*Name:* ${data.name}
*Email:* ${data.email}
*Subject:* ${data.subject}
*Message:* ${data.message}`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        if (isDesktop) {
            setWhatsappUrl(url);
            setIsModalOpen(true);
        } else {
            window.open(url, '_blank');
        }
    };

    return (
        <>
            <Card className="p-2">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground">Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground">Email Address</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="your@email.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground">Subject</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Reason for your inquiry" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground">Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Please describe your inquiry in detail..."
                                                rows={6}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                                Send Message
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <QrCodeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                url={whatsappUrl}
            />
        </>
    );
}
