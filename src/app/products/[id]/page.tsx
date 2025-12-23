import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import { NavLink } from '@/components/layout/nav-link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getProductById, getProducts } from '@/lib/firebase/firestore';
import type { Product } from '@/lib/products';
import { Metadata } from 'next';
import { use } from 'react';

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product: Product | null = await getProductById((await params).id);
  if (!product) {
    return {
      title: 'Product Not Found',
      description: "The page you are looking for is not available, Please try another page."
    };
  }
  return {
    title: product.name,
    description: product.details,
  };
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product: Product | null = await getProductById((await params).id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mb-8">
          <Button asChild variant="outline">
            <NavLink href="/products">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Products
            </NavLink>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="relative aspect-square w-full">
            <Card className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                data-ai-hint={product.hint}
                fill
                className="object-cover rounded-lg"
              />
            </Card>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-headline text-3xl font-bold text-primary">{product.name}</h1>
            <p className="mt-4 text-xl font-semibold text-foreground">₹ {product.price}</p>
            <div className="mt-6 text-base text-foreground/70" dangerouslySetInnerHTML={{ __html: product.htmlProductDetails }} />

            <div className="mt-8">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <NavLink href={product.addToCartUrl ? product.addToCartUrl : '/'}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now
                </NavLink>
              </Button>
            </div>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="font-headline text-lg font-bold">Ingredients</h3>
                <p className="mt-2 text-sm text-foreground/70">{product.ingredients.join(', ')}</p>
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold">Usage</h3>
                <p className="mt-2 text-sm text-foreground/70">{product.usage}</p>
              </div>
              {product.dosageList && (
                <div>
                  <h3 className="font-headline text-lg font-bold">Dosage</h3>
                  <Card className="mt-2">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Age Group</TableHead>
                          <TableHead>Dosage</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {product.dosageList.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.ageGroup}</TableCell>
                            <TableCell>{item.dosage}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
