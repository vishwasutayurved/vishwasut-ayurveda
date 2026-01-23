'use client';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Blog } from "@/lib/blogs";
import Image from "next/image";
import { NavLink } from "../layout/nav-link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Pagination } from "../ui/pagination";

export const FeaturedBlogs = ({featuredBlogs}: {featuredBlogs: Blog[]}) => {
    const [currentBlogPage, setCurrentBlogPage] = useState(1);
    const blogsPerPage = 3;
    const blogsSectionRef = useRef<HTMLDivElement>(null);

    const handleBlogPageChange = (pageNumber: number) => {
        setCurrentBlogPage(pageNumber);
        if (blogsSectionRef.current) {
            blogsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const indexOfLastBlog = currentBlogPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = featuredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginateBlogs = (pageNumber: number) => handleBlogPageChange(pageNumber);
    const nextBlogPage = () => handleBlogPageChange(currentBlogPage + 1);
    const prevBlogPage = () => handleBlogPageChange(currentBlogPage - 1);
    const firstBlogPage = () => handleBlogPageChange(1);
    const lastBlogPage = () => handleBlogPageChange(Math.ceil(featuredBlogs.length / blogsPerPage));

    return (
        <>
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
                                <Card key={blog.slug} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl scale-up-content-animation">
                                    <NavLink href={`/blogs/${blog.slug}`} className="flex-shrink-0">
                                        <div className="relative h-56 w-full">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                data-ai-hint={blog.hint}
                                                fill
                                                className="object-cover transition-transform duration-500 hover:scale-110"
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
        </>
    )
}
