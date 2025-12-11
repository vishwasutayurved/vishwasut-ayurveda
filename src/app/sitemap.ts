import type { MetadataRoute } from 'next'

export const dynamic = "force-dynamic";
const appUrl: string = "https://vishwasutayurveda.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: appUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: appUrl + '/about',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: appUrl + '/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        }, {
            url: appUrl + '/products',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: appUrl + '/therapies',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: appUrl + '/products/triphala-guggulu',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        }
    ];
}