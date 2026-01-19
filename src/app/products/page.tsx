
import type { Metadata } from 'next';
import Image from 'next/image';
import { NavLink } from '@/components/layout/nav-link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { getProducts } from '@/lib/firebase/firestore';
import type { Product } from '@/lib/products';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Browse our collection of authentic Ayurvedic medicines and wellness products.',
};

export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Our Ayurvedic Products
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Discover nature's finest remedies, crafted with care to support your journey to holistic health and balance. Each product is formulated based on ancient Ayurvedic wisdom.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <NavLink href={`/products/${product.id}`} className="flex-shrink-0">
                <div className="relative h-56 w-full">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    data-ai-hint={product.hint}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    unoptimized
                  />
                </div>
              </NavLink>
              <CardHeader className="flex-grow">
                <CardTitle>
                  <NavLink href={`/products/${product.id}`} className="text-lg font-bold hover:text-primary">
                    {product.name}
                  </NavLink>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/70">{product.description}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <p className="text-lg font-semibold text-primary">₹ {product.price}</p>
                <Button asChild size="sm">
                  <NavLink href={`/products/${product.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
