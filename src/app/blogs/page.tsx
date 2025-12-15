import { getBlogs } from '@/lib/firebase/firestore';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { NavLink } from '@/components/layout/nav-link';
import Image from 'next/image';
import type { Blog } from '@/lib/blogs';

export default async function BlogsPage() {
const blogs: Blog[] = await getBlogs();

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">Our Blogs</h1>
          <p className="mt-4 text-lg text-foreground/80">
            Insights, articles, and news from the world of Ayurveda.
          </p>
        </div>

        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {blogs.map((blog) => (
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
        ) : (
          <div className="text-center">
            <p className="text-lg text-foreground/70">No blogs found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
