import { Timestamp } from "firebase/firestore";

export interface Treatments {
    id: string;
    title: string;
    amount: number;
    image: string;
    description: string;
    hint: string;
    whatsAppMessage: string;
    lastModifiedAt: Timestamp;
}
