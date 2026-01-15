'use client';

import Image from 'next/image';
import { NavLink } from '@/components/layout/nav-link';
import { ArrowRight } from 'lucide-react';
import { HeroCarousel } from '@/components/home/hero-carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getFeaturedProducts, getFeaturedBlogs } from '@/lib/firebase/firestore';
import type { Product } from '@/lib/products';
import type { Blog } from '@/lib/blogs';
import { useEffect, useRef, useState } from 'react';
import { Pagination } from '@/components/ui/pagination';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([]);
  const [currentProductPage, setCurrentProductPage] = useState(1);
  const [currentBlogPage, setCurrentBlogPage] = useState(1);
  const productsPerPage = 4;
  const blogsPerPage = 3;

  const productsSectionRef = useRef<HTMLDivElement>(null);
  const blogsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getFeaturedProducts();
      setFeaturedProducts(products);
    }
    async function fetchBlogs() {
      const blogs = await getFeaturedBlogs();
      setFeaturedBlogs(blogs);
    }
    fetchProducts();
    fetchBlogs();
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
  const currentBlogs = featuredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginateBlogs = (pageNumber: number) => handleBlogPageChange(pageNumber);
  const nextBlogPage = () => handleBlogPageChange(currentBlogPage + 1);
  const prevBlogPage = () => handleBlogPageChange(currentBlogPage - 1);
  const firstBlogPage = () => handleBlogPageChange(1);
  const lastBlogPage = () => handleBlogPageChange(Math.ceil(featuredBlogs.length / blogsPerPage));

  return (
    <div className="flex flex-col">
      <section className="relative w-full">
        <HeroCarousel />
      </section>

      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl" style={{ color: "green" }}>
            Embrace Balance, Embrace Life
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            At Shri Vishvasuta Ayurved & Panchkarma Clinic, we believe in the timeless wisdom of Ayurveda to restore harmony and vitality. Our holistic approach addresses the root cause of imbalance, guiding you on a transformative journey to optimal health and well-being.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl" style={{ color: "green" }}>
            Book an appointment
          </h2>
          <div className="mt-6 text-lg leading-relaxed text-foreground/80">
            Heal from the root with the Ayurveda, One-to-One personalized consultation.
            <div className="mt-8">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <NavLink href={`https://wa.me/+919270220033?text=I'm%20interested%20in%20your%20car%20for%20sale`}>
                  {/* <ShoppingCart className="mr-2 h-5 w-5" /> */}
                  Book an appointment Now
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section ref={productsSectionRef} className="bg-background py-8 sm:py-12">
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

      {featuredBlogs.length > 0 && (
        <section ref={blogsSectionRef} className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h3 className="font-headline text-3xl font-bold md:text-4xl">From Our Blogs</h3>
              <p className="mt-4 text-foreground/70">
                Insights and knowledge from the world of Ayurveda.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {currentBlogs.map((blog) => (
                <Card key={blog.slug} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <NavLink href={`/blogs/${blog.slug}`} className="flex-shrink-0">
                    <div className="relative h-56 w-full">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        data-ai-hint={blog.hint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </NavLink>
                  <CardHeader className="flex-grow">
                    <CardTitle>
                      <NavLink href={`/blogs/${blog.slug}`} className="text-lg font-bold hover:text-primary">
                        {blog.title}
                      </NavLink>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-foreground/70">{blog.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" size="sm" className="p-0">
                      <NavLink href={`/blogs/${blog.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </NavLink>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12">
              <Pagination
                itemsPerPage={blogsPerPage}
                totalItems={featuredBlogs.length}
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
      )}

      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="font-headline text-3xl font-bold md:text-4xl">Our Instagram</h3>
            <p className="mt-4 text-foreground/70">
              Follow us on Instagram for the latest updates and wellness tips.
            </p>
          </div>
          <div className="flex justify-center">
            <iframe
              src="https://www.instagram.com/vd_nishant_dahake/embed"
              width="100%"
              height="480"
              style={{ border: 'none', overflow: 'hidden' }}
              title="Instagram Post"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
