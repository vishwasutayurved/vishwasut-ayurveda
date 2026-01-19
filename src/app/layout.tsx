import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Preloader } from '@/components/preloader';
import { TopLoader } from '@/components/layout/top-loader';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Shri Vishvasuta Ayurved & Panchkarma Clinic',
    template: '%s | Shri Vishvasuta Ayurved & Panchkarma Clinic',
  },
  description: 'Experience authentic Ayurvedic treatments and personalized wellness at Shri Vishvasutayurveda & Panchkarma Clinic. Specializing in Panchakarma and holistic therapies.',
  keywords: ['Ayurveda', 'Nishant Dahake Clinic', 'Panchakarma', 'Holistic Health',
    'Wellness', 'Ayurvedic Clinic', 'Shri Vishvasuta Ayurved & Panchkarma Clinic',
    'Shri Vishvasuta Ayurved and Panchkarma Clinic', 'Shri Vishvasuta Ayurved',
    'Dr Dahake\'s Shri Vishwasut Ayurved & Panchakarma Clinic'
  ],
  openGraph: {
    url: "https://vishwasutayurveda.web.app/",
    type: "website",
    locale: "en_US",
    title: "Shri Vishvasuta Ayurved & Panchkarma Clinic",
    description: "Experience authentic Ayurvedic treatments and personalized wellness at Shri Vishvasuta Ayurved & Panchkarma Clinic. Specializing in Panchakarma and holistic therapies."
  },
  icons: {
    icon: "/vishvasutfav.ico",
    apple: "/vishvasutfav.ico"
  },
  other: {
    "google-site-verification": "bf7_iTFphnpreO9PW-d5YWnTR7-MlulIaMPYmeSSt8M"
  },
  robots: {
    index: true,
    follow: true,
  }
};

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
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Suspense fallback={null}>
            <TopLoader />
          </Suspense>
          <Preloader />
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
        <Script async
          id="tawk-to-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/696b52acc4b651197faa9643/1jf5jlska';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
              `,
          }}
        />
      </body>
    </html>
  );
}
