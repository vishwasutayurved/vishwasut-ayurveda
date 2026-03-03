
import { cache } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { firebaseConfig } from './config';
import type { Product } from '@/lib/products';
import type { Blog } from '@/lib/blogs';
import { Treatments } from '../treatments';
import { Advertisement } from '../advertisement';
import { formatDate } from '../utils';
import { get } from 'http';

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

const productsCollection = collection(db, 'products');
const blogsCollection = collection(db, 'blogs');
const treatmentsCollection = collection(db, 'treatments');
const advertisementsCollection = collection(db, 'advertisement');

// Function to get all products
export async function getProducts(): Promise<Product[]> {
    try {
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

// Function to get a single product by its ID
export const getProductById = cache(async (id: string): Promise<Product | null> => {
    try {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() } as Product;
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        return null;
    }
});

// Function to get featured products
export async function getFeaturedProducts(): Promise<Product[]> {
    try {
        const q = query(productsCollection, where("isFeatured", "==", true));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
    } catch (error) {
        console.error("Error fetching featured products:", error);
        return [];
    }
}

// Function to get all blogs
export async function getBlogs(): Promise<Blog[]> {
    try {
        const snapshot = await getDocs(blogsCollection);
        return snapshot.docs.map(doc => ({ slug: doc.id, ...doc.data() } as Blog));
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
}

// Function to get a single blog by its slug
export const getBlogBySlug = cache(async (slug: string): Promise<Blog | null> => {
    if (!slug) {
        return null;
    }
    try {
        const docRef = doc(db, 'blogs', slug);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { slug: docSnap.id, ...docSnap.data() } as Blog;
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching blog by slug:", error);
        return null;
    }
});

// Function to get featured blogs
export async function getFeaturedBlogs(): Promise<Blog[]> {
    try {
        const q = query(blogsCollection, where("isFeatured", "==", true));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ slug: doc.id, ...doc.data() } as Blog));
    } catch (error) {
        console.error("Error fetching featured blogs:", error);
        return [];
    }
}

// Function to get featured blogs
export async function getAllTreatments(): Promise<Treatments[]> {
    try {
        const snapshot = await getDocs(treatmentsCollection);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Treatments));
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
}

// Function to get active ads blogs
export async function getActiveAdvertisements(): Promise<Advertisement[]> {
    try {

        const snapshot = await getDocs(advertisementsCollection);

        if (snapshot.docs.length === 0) return [];

        const todayDate = formatDate(new Date(), "numeric", "2-digit", "2-digit", "en-CA", "Asia/Kolkata");

        const resultAds = snapshot.docs.filter((data) => {
            return (data.data().startDate <= todayDate &&
                (data.data().endDate >= todayDate || data.data().isPermanent));
        });

        return resultAds.map(doc => ({ id: doc.id, ...doc.data() } as Advertisement));
    } catch (error) {
        console.error("Error fetching featured advertisements:", error);
        return [];
    }
}