import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type ProductPageProps = {
  params: {
    id: string
  }
}
export async function generateMetadata({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }
  return {
    title: product.name,
    description: product.details,
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/products">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
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
                className="object-cover"
              />
            </Card>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-headline text-4xl font-bold text-primary">{product.name}</h1>
            <p className="mt-4 text-2xl font-semibold text-foreground">${product.price}</p>
            <p className="mt-6 text-lg text-foreground/70">{product.details}</p>

            <div className="mt-8">
              <Button size="lg" className="w-full sm:w-auto">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="font-headline text-xl font-bold">Ingredients</h3>
                <p className="mt-2 text-foreground/70">{product.ingredients.join(', ')}</p>
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold">Usage</h3>
                <p className="mt-2 text-foreground/70">{product.usage}</p>
              </div>
              {product.dosage && (
                <div>
                  <h3 className="font-headline text-xl font-bold">Dosage</h3>
                  <Card className="mt-2">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Age Group</TableHead>
                          <TableHead>Daily Dosage</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {product.dosage.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.ageGroup}</TableCell>
                            <TableCell>{item.dailyDosage}</TableCell>
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
