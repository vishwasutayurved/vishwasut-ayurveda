import { getBlogBySlug, getBlogs } from '@/lib/firebase/firestore';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogBySlug((await params).slug);
  if (!blog) {
    return {};
  }
  return {
    title: blog.title,
    description: blog.content,
    openGraph: {
      url: "https://vishwasutayurveda.web.app/",
      type: "website",
      locale: "en_US",
      title: blog.title,
      description: blog.description
    },
  };
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug((await params).slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="relative h-96 w-full md:h-[500px]">
        <Image
          src={blog.image}
          alt={blog.title}
          data-ai-hint={blog.hint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{blog.title}</h1>
            <p className="mt-4 text-xl sm:text-2xl">{blog.description}</p>
          </div>
        </div>
      </div>
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link href="/blogs">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Blogs
              </Link>
            </Button>
          </div>
          <article className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
            <div
              className="prose-h2:text-2xl prose-h2:font-bold prose-h2:text-primary prose-h3:text-xl prose-h3:font-bold prose-h3:text-primary"
              dangerouslySetInnerHTML={{ __html: blog.htmlBlogDetails }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}
