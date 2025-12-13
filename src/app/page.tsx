"use client";

import Image from 'next/image';
import { NavLink } from '@/components/layout/nav-link';
import { ArrowRight } from 'lucide-react';
import { HeroCarousel } from '@/components/home/hero-carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getFeaturedProducts } from '@/lib/firebase/firestore';
import type { Product } from '@/lib/products';
import { useEffect, useRef, useState } from 'react';
import { Pagination } from '@/components/ui/pagination';

const blogs = [
  {
    title: 'The Power of Turmeric',
    description: 'A deep dive into the benefits of this golden spice in Ayurvedic medicine.',
    image: 'https://placehold.co/400x400.png',
    hint: 'ayurvedic herbs'
  },
  {
    title: 'Understanding Your Dosha',
    description: 'Learn about the three doshas (Vata, Pitta, and Kapha) and how they relate to your health.',
    image: 'https://placehold.co/400x400.png',
    hint: 'dosha illustration'
  },
  {
    title: 'Daily Rituals for a Balanced Life',
    description: 'Simple Ayurvedic practices you can incorporate into your daily routine for better health.',
    image: 'https://placehold.co/400x400.png',
    hint: 'morning routine'
  },
  {
    title: 'The Importance of Agni (Digestive Fire)',
    description: 'Discover how to maintain a strong digestive fire for optimal health and well-being.',
    image: 'https://placehold.co/400x400.png',
    hint: 'digestive system'
  },
  {
    title: 'Herbs for a Healthy Heart',
    description: 'Explore Ayurvedic herbs that support cardiovascular health.',
    image: 'https://placehold.co/400x400.png',
    hint: 'heart health'
  },
  {
    title: 'Ayurvedic Skin Care',
    description: 'Natural ways to achieve radiant and healthy skin.',
    image: 'https://placehold.co/400x400.png',
    hint: 'skin care'
  }
];

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [currentProductPage, setCurrentProductPage] = useState(1);
  const [currentBlogPage, setCurrentBlogPage] = useState(1);
  const productsPerPage = 4;
  const blogsPerPage = 4;

  const productsSectionRef = useRef<HTMLDivElement>(null);
  const blogsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getFeaturedProducts();
      setFeaturedProducts(products);
    }
    fetchProducts();
  }, []);

  const handleProductPageChange = (pageNumber: number) => {
    setCurrentProductPage(pageNumber);
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBlogPageChange = (pageNumber: number) => {
    setCurrentBlogPage(pageNumber);
    if (blogsSectionRef.current) {
      blogsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Products Pagination
  const indexOfLastProduct = currentProductPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = featuredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginateProducts = (pageNumber: number) => handleProductPageChange(pageNumber);
  const nextProductPage = () => handleProductPageChange(currentProductPage + 1);
  const prevProductPage = () => handleProductPageChange(currentProductPage - 1);
  const firstProductPage = () => handleProductPageChange(1);
  const lastProductPage = () => handleProductPageChange(Math.ceil(featuredProducts.length / productsPerPage));

  // Blogs Pagination
  const indexOfLastBlog = currentBlogPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginateBlogs = (pageNumber: number) => handleBlogPageChange(pageNumber);
  const nextBlogPage = () => handleBlogPageChange(currentBlogPage + 1);
  const prevBlogPage = () => handleBlogPageChange(currentBlogPage - 1);
  const firstBlogPage = () => handleBlogPageChange(1);
  const lastBlogPage = () => handleBlogPageChange(Math.ceil(blogs.length / blogsPerPage));

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
            At Shri Vishvasuta Ayurved & Panchkarma Clinic, we believe in the timeless wisdom of Ayurveda to restore harmony and vitality. Our holistic approach addresses the root cause of imbalance, guiding you on a transformative journey to optimal health and well-being.
          </p>
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section ref={productsSectionRef} className="bg-background py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h3 className="font-headline text-3xl font-bold md:text-4xl">Featured Products</h3>
              <p className="mt-4 text-foreground/70">
                Handpicked selections to support your wellness journey.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {currentProducts.map((product) => (
                <Card key={product.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <NavLink href={`/products/${product.id}`} className="flex-shrink-0">
                    <div className="relative h-56 w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        data-ai-hint={product.hint}
                        fill
                        className="object-cover"
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

      <section ref={blogsSectionRef} className="bg-secondary/50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="font-headline text-3xl font-bold md:text-4xl">From Our Blog</h3>
            <p className="mt-4 text-foreground/70">
              Explore our latest articles on Ayurvedic wisdom and holistic wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {currentBlogs.map((blog) => (
              <Card key={blog.title} className="transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className="md:w-5/12 p-4 flex items-center justify-center">
                     <div className="relative aspect-square w-full">
                      <Image src={blog.image} alt={blog.title} data-ai-hint={blog.hint} fill className="object-cover rounded-md" />
                    </div>
                  </div>
                  <div className="md:w-7/12 flex flex-col p-6 justify-center">
                    <h4 className="font-headline text-2xl font-bold">{blog.title}</h4>
                    <p className="mt-2 text-foreground/70 flex-grow">{blog.description}</p>
                    <Button asChild variant="link" className="self-start mt-4 p-0 h-auto text-primary">
                      <NavLink href="/blogs">Read More <ArrowRight className="ml-2 h-4 w-4" /></NavLink>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Pagination
              itemsPerPage={blogsPerPage}
              totalItems={blogs.length}
              currentPage={currentBlogPage}
              paginate={paginateBlogs}
              nextPage={nextBlogPage}
              prevPage={prevBlogPage}
              firstPage={firstBlogPage}
              lastPage={lastBlogPage}
            />
          </div>
        </div>
      </section>

    </div>
  );
}
