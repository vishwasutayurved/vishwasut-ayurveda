import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }).max(50, { message: 'Name must be no more than 50 characters long.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters long.' }).max(100, { message: 'Subject must be no more than 100 characters long.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }).max(500, { message: 'Message must be no more than 500 characters long.' }),
});
