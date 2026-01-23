'use client';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/lib/products";
import Image from "next/image";
import { NavLink } from "../layout/nav-link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Pagination } from "../ui/pagination";

export const FeaturedProducts = ({featuredProducts}: {featuredProducts: Product[]}) => {
  const [currentProductPage, setCurrentProductPage] = useState(1);
  const productsPerPage = 4;
  const productsSectionRef = useRef<HTMLDivElement>(null);

  const handleProductPageChange = (pageNumber: number) => {
    setCurrentProductPage(pageNumber);
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Products Pagination
  const indexOfLastProduct = currentProductPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = featuredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginateProducts = (pageNumber: number) =>
    handleProductPageChange(pageNumber);
  const nextProductPage = () => handleProductPageChange(currentProductPage + 1);
  const prevProductPage = () => handleProductPageChange(currentProductPage - 1);
  const firstProductPage = () => handleProductPageChange(1);
  const lastProductPage = () =>
    handleProductPageChange(
      Math.ceil(featuredProducts.length / productsPerPage)
    );

  return (
    <>
      {featuredProducts.length > 0 && (
        <section
          ref={productsSectionRef}
          className="bg-background py-8 sm:py-12"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h3 className="font-headline text-3xl font-bold md:text-4xl">
                Featured Products
              </h3>
              <p className="mt-4 text-foreground/70">
                Handpicked selections to support your wellness journey.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {currentProducts.map((product) => (
                <Card
                  key={product.id}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl scale-up-content-animation"
                >
                  <NavLink
                    href={`/products/${product.id}`}
                    className="flex-shrink-0"
                  >
                    <div className="relative h-56 w-full">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        data-ai-hint={product.hint}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </NavLink>
                  <CardHeader className="flex-grow">
                    <CardTitle>
                      <NavLink
                        href={`/products/${product.id}`}
                        className="text-lg font-bold hover:text-primary"
                      >
                        {product.name}
                      </NavLink>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-foreground/70">
                      {product.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-primary">
                      ₹ {product.price}
                    </p>
                    <Button asChild size="sm">
                      <NavLink href={`/products/${product.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </NavLink>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12">
              <Pagination
                itemsPerPage={productsPerPage}
                totalItems={featuredProducts.length}
                currentPage={currentProductPage}
                paginate={paginateProducts}
                nextPage={nextProductPage}
                prevPage={prevProductPage}
                firstPage={firstProductPage}
                lastPage={lastProductPage}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
