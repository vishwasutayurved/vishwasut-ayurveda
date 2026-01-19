import type { MetadataRoute } from 'next';
import { getBlogs, getProducts } from '@/lib/firebase/firestore';
import type { Product } from '@/lib/products';
import { Blog } from '@/lib/blogs';

export const dynamic = "force-static"
const appUrl: string = "https://vishwasutayurveda.web.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const products: Product[] = await getProducts();
    const blogs: Blog[] = await getBlogs();

    const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${appUrl}/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${appUrl}/blogs/${blog.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [
        {
            url: appUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: appUrl + '/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: appUrl + '/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: appUrl + '/products',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: appUrl + '/blogs',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: appUrl + '/treatments/packages',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: appUrl + '/treatments/panchkarma',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        ...productEntries,
        ...blogEntries,
    ];
}