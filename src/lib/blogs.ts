import { Timestamp } from "firebase/firestore";

export interface Blog {
  slug: string;
  title: string;
  description: string;
  image: string;
  hint: string;
  content: string;
  htmlBlogDetails: string;
  isFeatured: boolean;
  lastModifiedAt: Timestamp;
}
