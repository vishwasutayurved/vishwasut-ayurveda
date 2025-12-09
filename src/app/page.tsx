
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroCarousel } from '@/components/home/hero-carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getFeaturedProducts } from '@/lib/firebase/firestore';
import type { Product } from '@/lib/products';

export default async function Home() {
  const therapies = [
    {
      title: 'Panchakarma',
      description: 'A comprehensive detoxification process to cleanse the body of accumulated toxins and restore balance.',
      image: 'https://images.unsplash.com/photo-1696642651337-540ed25cac27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8YXl1cnZlZGljfGVufDB8fHx8MTc1NTE5NTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      hint: 'ayurvedic treatment'
    },
    {
      title: 'Abhyanga',
      description: 'A full-body massage with medicated herbal oils to nourish the skin, calm the nerves, and promote deep relaxation.',
      image: 'https://placehold.co/400x400.png',
      hint: 'oil massage'
    },
    {
      title: 'Shirodhara',
      description: 'A therapeutic stream of warm oil on the forehead to soothe the mind, reduce stress, and improve mental clarity.',
      image: 'https://placehold.co/400x400.png',
      hint: 'forehead oil'
    },
    {
      title: 'Swedana',
      description: 'An herbalized steam therapy to induce sweat, open up channels, and eliminate impurities from the body.',
      image: 'https://images.unsplash.com/photo-1742483377931-68488341fb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxzd2VkYW5hJTIwdGhlcmFweSUyMGluJTIwYXl1cnZlZGljfGVufDB8fHx8MTc1NTE5NTAxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      hint: 'herbal steam'
    }
  ];

  const featuredProducts: Product[] = await getFeaturedProducts();

  return (
    <div className="flex flex-col">
      <section className="relative w-full">
        <HeroCarousel />
      </section>

      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Embrace Balance, Embrace Life
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            At श्री विश्वसुता आयुर्वेदिक आणि पंचकर्म क्लिनिक, we believe in the timeless wisdom of Ayurveda to restore harmony and vitality. Our holistic approach addresses the root cause of imbalance, guiding you on a transformative journey to optimal health and well-being.
          </p>
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section className="bg-background py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h3 className="font-headline text-3xl font-bold md:text-4xl">Featured Products</h3>
              <p className="mt-4 text-foreground/70">
                Handpicked selections to support your wellness journey.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <Link href={`/products/${product.id}`} className="flex-shrink-0">
                    <div className="relative h-56 w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        data-ai-hint={product.hint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <CardHeader className="flex-grow">
                    <CardTitle>
                      <Link href={`/products/${product.id}`} className="text-lg font-bold hover:text-primary">
                        {product.name}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-foreground/70">{product.description}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-primary">₹{product.price}</p>
                    <Button asChild size="sm">
                      <Link href={`/products/${product.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-secondary/50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="font-headline text-3xl font-bold md:text-4xl">Our Core Therapies</h3>
            <p className="mt-4 text-foreground/70">
              Discover our range of authentic Ayurvedic treatments designed to detoxify, rejuvenate, and heal.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {therapies.map((therapy) => (
              <Card key={therapy.title} className="transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className="md:w-5/12 p-4 flex items-center justify-center">
                     <div className="relative aspect-square w-full">
                      <Image src={therapy.image} alt={therapy.title} data-ai-hint={therapy.hint} fill className="object-cover rounded-md" />
                    </div>
                  </div>
                  <div className="md:w-7/12 flex flex-col p-6 justify-center">
                    <h4 className="font-headline text-2xl font-bold">{therapy.title}</h4>
                    <p className="mt-2 text-foreground/70 flex-grow">{therapy.description}</p>
                    <Button asChild variant="link" className="self-start mt-4 p-0 h-auto text-primary">
                      <Link href="/therapies">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
