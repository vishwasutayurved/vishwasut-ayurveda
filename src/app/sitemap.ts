import type { MetadataRoute } from 'next';
import { getAllTreatments, getBlogs, getProducts } from '@/lib/firebase/firestore';
import type { Product } from '@/lib/products';
import { Blog } from '@/lib/blogs';
import { Treatments } from '@/lib/treatments';
import { Timestamp } from 'firebase/firestore';

export const dynamic = "force-static"
const appUrl: string = "https://vishwasutayurveda.web.app";

const getHighestDateFromList = (timestamps: Timestamp[]): Date => {
    return timestamps.reduce((prev, current) => {
        return prev > current ?
            prev : current;
    })?.toDate();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const products: Product[] = await getProducts();
    const blogs: Blog[] = await getBlogs();
    const treatments: Treatments[] = await getAllTreatments();

    const getHighestDateFromProducts: Date = getHighestDateFromList(products.map(product => product.lastModifiedAt));
    const getHighestDateFromBlogs: Date = getHighestDateFromList(blogs.map(blog => blog.lastModifiedAt));
    const getHighestDateFromTreatments: Date = getHighestDateFromList(treatments.map(treatment => treatment.lastModifiedAt));


    const productEntries: MetadataRoute.Sitemap = products?.map((product) => ({
        url: `${appUrl}/products/${product.id}/`,
        lastModified: product.lastModifiedAt.toDate(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const blogEntries: MetadataRoute.Sitemap = blogs?.map((blog) => ({
        url: `${appUrl}/blogs/${blog.slug}/`,
        lastModified: blog.lastModifiedAt.toDate(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    const treatmentsEntries: MetadataRoute.Sitemap = treatments?.map((treatment) => ({
        url: `${appUrl}/packages/${treatment.id}/`,
        lastModified: treatment.lastModifiedAt.toDate(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [
        {
            url: appUrl,
            lastModified: new Date(2026, 0, 19),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: appUrl + '/about/',
            lastModified: new Date(2026, 0, 19),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: appUrl + '/contact/',
            lastModified: new Date(2026, 0, 19),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: appUrl + '/products/',
            lastModified: getHighestDateFromProducts,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: appUrl + '/blogs/',
            lastModified: getHighestDateFromBlogs,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: appUrl + '/treatments/packages/',
            lastModified: getHighestDateFromTreatments,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: appUrl + '/treatments/panchkarma/',
            lastModified: new Date(2026, 0, 19),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: appUrl + '/treatments/diseases/',
            lastModified: new Date(2026, 0, 19),
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        ...productEntries,
        ...blogEntries,
        ...treatmentsEntries
    ];
}