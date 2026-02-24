import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import { NavLink } from '@/components/layout/nav-link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getProductById, getProducts } from '@/lib/firebase/firestore';
import type { Product } from '@/lib/products';
import { Metadata } from 'next';
import { ProductImageGallery } from '@/components/product-image-gallery';


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
    openGraph: {
      url: "https://vishwasutayurveda.web.app/",
      type: "website",
      locale: "en_US",
      title: product.name,
      description: product.description
    },
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product: Product | null = await getProductById((await params).id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="mb-8">
          <Button asChild variant="outline">
            <NavLink href="/products">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Products
            </NavLink>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProductImageGallery images={product.images} alt={product.name} />
          <div className="flex flex-col justify-start">
            <h1 className="font-headline text-2xl sm:text-3xl font-bold text-primary">{product.name}</h1>
            <p className="mt-2 sm:mt-4 text-lg sm:text-xl font-semibold text-foreground">₹ {product.price}</p>
            <div dangerouslySetInnerHTML={{ __html: product.htmlProductDetails }} />

            <div className="mt-6 sm:mt-8">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <NavLink openInNewTab={true} href={product.addToCartUrl ? product.addToCartUrl : '/'}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Buy Now
                </NavLink>
              </Button>
            </div>

            <div className="mt-8 sm:mt-10 space-y-6">
              <div>
                <h3 className="font-headline text-lg font-bold">Ingredients</h3>
                <p>{product.ingredients.join(', ')}</p>
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold">Usage</h3>
                <p>{product.usage}</p>
              </div>
              {(product.dosageList && product.dosageList.length > 0) && (
                <div>
                  <h3 className="font-headline text-lg font-bold">Dosage</h3>
                  <Card className="mt-2 overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="whitespace-nowrap">Age Group</TableHead>
                          <TableHead className="whitespace-nowrap">Dosage</TableHead>
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
