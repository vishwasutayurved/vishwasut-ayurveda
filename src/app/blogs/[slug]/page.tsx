import { getBlogBySlug } from '@/lib/firebase/firestore';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

export const dynamic = "force-dynamic";

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
        <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
          <div className="mb-8 text-center">
            <h1 className="font-headline text-3xl font-bold text-primary md:text-5xl">{blog.title}</h1>
            <p className="mt-4 text-lg text-foreground/80">{blog.description}</p>
          </div>

          <div className="relative mb-8 h-60 w-full overflow-hidden rounded-lg shadow-lg md:h-96">
            <Image
              src={blog.image}
              alt={blog.title}
              data-ai-hint={blog.hint}
              fill
              className="object-cover"
            />
          </div>

          <div dangerouslySetInnerHTML={{ __html: blog.htmlBlogDetails }} />
        </article>
      </div>
    </div>
  );
}
