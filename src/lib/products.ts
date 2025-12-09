
export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    hint: string;
    description: string;
    details: string;
    ingredients: string[];
    usage: string;
    isFeatured?: boolean;
    dosage?: {
        ageGroup: string;
        dailyDosage: string;
    }[];
};
