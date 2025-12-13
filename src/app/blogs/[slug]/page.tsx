import { getBlogBySlug } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

// export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogBySlug((await params).slug);
  if (!blog) {
    return {};
  }
  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug((await params).slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="relative mb-8 h-80 w-full">
            <Image
              src={blog.image}
              alt={blog.title}
              data-ai-hint={blog.hint}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">{blog.title}</h1>
          <div
            className="prose prose-lg mt-8 max-w-none text-foreground/80 prose-headings:text-primary prose-a:text-primary prose-strong:text-primary"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
}
