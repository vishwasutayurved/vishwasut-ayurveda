import type { MetadataRoute } from 'next';

export const dynamic = "force-dynamic";
const appUrl: string = "https://vishvasutayurveda.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
        {
            url: appUrl + '/products/triphala-guggulu',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];
}