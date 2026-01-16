
export type Product = {
    id: string;
    name: string;
    price: number;
    images: string[];
    hint: string;
    description: string;
    details: string;
    htmlProductDetails: string;
    ingredients: string[];
    usage: string;
    addToCartUrl: string;
    isFeatured?: boolean;
    dosageList?: {
        ageGroup: string;
        dosage: string;
    }[];
};
