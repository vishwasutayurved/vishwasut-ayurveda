import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Preloader } from '@/components/preloader';

export const metadata: Metadata = {
  title: {
    default: 'श्री विश्वसुता आयुर्वेदिक आणि पंचकर्म क्लिनिक | Holistic Healing & Wellness',
    template: '%s | श्री विश्वसुता आयुर्वेदिक आणि पंचकर्म क्लिनिक',
  },
  description: 'Experience authentic Ayurvedic treatments and personalized wellness at श्री विश्वसुता आयुर्वेदिक आणि पंचकर्म क्लिनिक. Specializing in Panchakarma and holistic therapies.',
  keywords: ['Ayurveda', 'Dahake Clinic', 'Panchakarma', 'Holistic Health', 'Wellness', 'Ayurvedic Clinic', 'श्री विश्वसुता आयुर्वेदिक आणि पंचकर्म क्लिनिक'],
};
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,700;1,7..72,400&display=swap" rel="stylesheet" />
        <meta name="96bc55d1ba4378cc14437838dec51adcd47df1b7" content="96bc55d1ba4378cc14437838dec51adcd47df1b7" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DNEELWN2GZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DNEELWN2GZ');
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Preloader />
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
