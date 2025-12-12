import type { MetadataRoute } from 'next';
import { getProducts } from '@/lib/firebase/firestore';
import type { Product } from '@/lib/products';

export const dynamic = "force-dynamic";
const appUrl: string = "https://vishwasutayurveda.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const products: Product[] = await getProducts();

    const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${appUrl}/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
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
            url: appUrl + '/therapies',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        ...productEntries,
    ];
}