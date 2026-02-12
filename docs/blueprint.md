# **App Name**: Shri Vishvasuta Ayurved & Panchkarma Clinic

## Core Features:

- Blog: Read articles and posts about Ayurveda and wellness.
- About Us: Display a comprehensive 'About Us' section detailing the clinic's history, philosophy, and the practitioners' expertise.
- Contact Form: Enable users to easily send inquiries and book appointments.
- Site Navigation: Provide easy navigation with the app site.
- Image Banner: Implement a banner with auto-sliding images related to Ayurveda.
- Personalized Wellness Tips: Implement an AI tool that suggests personalized wellness tips based on user input about their lifestyle.
- Product Listing: Display a list of Ayurvedic products available for purchase.
- Product Details: Show detailed information for each product, including ingredients, benefits, and usage instructions.
- Treatments: Information about various treatments offered, including Panchakarma, disease-specific treatments, and wellness packages.
- Firebase Integration: Utilize Firebase Firestore to store and manage product and blog data.

## Style Guidelines:

- Primary color: Earthy green (#8FBC8F) to evoke a sense of nature and healing.
- Background color: Muted brown (#F5F5DC) to provide a calm and grounding backdrop.
- Accent color: Gold (#D4A27A) for highlights and calls to action to represent purity and enlightenment.
- Body and headline font: 'Literata', serif, for a readable and classic look, ideal for conveying trust and expertise.
- Modular grid layout with clear section separation to promote readability and a professional feel.
- Smooth transitions and subtle hover effects for an engaging user experience.
- Use line icons that match the earthy and natural theme, and maintain simplicity to reinforce the serene ambiance.

## Current Status:

The project is currently in a foundational stage. The basic structure of the Next.js application has been set up, and key pages and components have been created.

### Existing Pages:

- Home (`src/app/page.tsx`): The main landing page.
- About (`src/app/about/page.tsx`): A page to describe the clinic.
- Contact (`src/app/contact/page.tsx`): A page with a contact form.
- Products (`src/app/products/page.tsx`): A page to list Ayurvedic products.
- Product Details (`src/app/products/[id]/page.tsx`): A dynamic page to show details for a specific product.
- Blogs (`src/app/blogs/page.tsx`): A page to list all blog posts.
- Blog Details (`src/app/blogs/[slug]/page.tsx`): A dynamic page to show a single blog post.
- Treatments:
    - Diseases (`src/app/treatments/diseases/page.tsx`): Page for disease-specific treatments.
    - Packages (`src/app/treatments/packages/page.tsx`): Page for treatment packages.
    - Panchkarma (`src/app/treatments/panchkarma/page.tsx`): Page for Panchkarma treatments.


### Existing Components:

- **Layout**: `Header`, `Footer`, `NavLink`, `TopLoader`
- **UI**: A rich set of UI components are available in `src/components/ui`, including `Accordion`, `Button`, `Card`, `Carousel`, `Dialog`, `Form`, `Input`, `Sheet`, `Toast`, and more.
- **Home Page**: `HeroCarousel`, `FeaturedBlogs`, `FeaturedProducts`, `Faq`
- **About Page**: `ImageGallery`
- **Theme**: `ThemeProvider`, `ThemeToggle`

### Firebase Integration:

- Firebase is configured in the project (`src/lib/firebase/config.ts`).
- Firestore is used to fetch data for products and blogs (`src/lib/firebase/firestore.ts`).

## Next Steps & Future Development:

- **Content Population**: Populate the pages and blog with actual content, including text, images, and product information.
- **Contact Form Logic**: Implement the logic for the contact form to send emails or store inquiries in Firestore.
- **Personalized Wellness Tips**: Develop the AI-powered wellness tips feature. This will likely involve creating a new API route and integrating with a third-party AI service.
- **Authentication**: If user-specific features are planned (e.g., saving wellness tips, order history), implement user authentication using Firebase Authentication.
- **Shopping Cart & Checkout**: If the products are to be sold directly, a full e-commerce flow with a shopping cart and payment gateway integration will be necessary.
- **Testing**: Write unit and integration tests to ensure the application is robust and reliable.
- **Deployment**: The project is set up for deployment on Firebase Hosting.
