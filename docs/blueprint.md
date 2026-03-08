# **App Name**: Shri Vishvasuta Ayurved & Panchkarma Clinic

## Core Features:

- **Blog**: Read articles and posts about Ayurveda and wellness, fetched from Firebase Firestore.
- **Product Listing**: Display a list of Ayurvedic products available for purchase, with data managed in Firestore.
- **Product Details**: Show detailed information for each product.
- **Treatments**: Information about various treatments offered, including Panchakarma, disease-specific treatments, and wellness packages.
- **Pushya Nakshatra**: A dedicated page with a countdown to the next Pushya Nakshatra and a list of upcoming dates.
- **Site Navigation**: A clear and responsive navigation header and a comprehensive footer.
- **Contact Form**: A dedicated page to allow users to send inquiries.
- **About Us**: A section detailing the clinic's history, philosophy, and practitioners.
- **Home Page**: A comprehensive landing page featuring:
    - Hero Carousel
    - Featured Products
    - Featured Blogs
    - FAQ Section
    - Advertisement Popup
- **Firebase Integration**: Utilizes Firebase Firestore for data management (products, blogs) and Firebase Messaging for push notifications.
- **Theme Customization**: Light and dark mode support.

### Planned Features:

- **Personalized Wellness Tips**: An AI tool to suggest personalized wellness tips.
- **Testimonials**: A section to display customer reviews and testimonials.
- **Instagram Feed**: Embedding an Instagram feed to showcase the latest updates.
- **WhatsApp Integration**: A more direct way for users to book appointments.
- **E-commerce**: Full shopping cart and checkout functionality.

## Tech Stack & Style:

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI - A collection of accessible and composable components built on Radix UI.
- **Forms**: React Hook Form with Zod for validation.
- **Backend**: Firebase (Firestore, Messaging).
- **Primary color**: Earthy green (#8FBC8F)
- **Background color**: Muted brown (#F5F5DC)
- **Accent color**: Gold (#D4A27A)
- **Font**: 'Literata', serif, for a classic and trustworthy feel.

## Current Status:

The project has a solid foundation with a well-structured Next.js application. Most of the core informational pages and the data display from Firebase are implemented. The UI is rich and consistent, thanks to the Shadcn/UI component library.

### Existing Pages:

- **Home**: `src/app/home/page.tsx`
- **About**: `src/app/about/page.tsx`
- **Contact**: `src/app/contact/page.tsx`
- **Products**: `src/app/products/page.tsx`
- **Product Details**: `src/app/products/[id]/page.tsx`
- **Blogs**: `src/app/blogs/page.tsx`
- **Blog Details**: `src/app/blogs/[slug]/page.tsx`
- **Pushya Nakshatra**: `src/app/pushya-nakshatra/page.tsx`
- **Treatments**:
    - Diseases: `src/app/treatments/diseases/page.tsx`
    - Packages: `src/app/treatments/packages/page.tsx`
    - Panchkarma: `src/app/treatments/panchkarma/page.tsx`

### Key Components:

- **Layout**: `Header`, `Footer`, `NavLink`, `TopLoader` (`src/components/layout/`)
- **UI**: A rich set of UI components are in `src/components/ui`, including `Accordion`, `Button`, `Card`, `Carousel`, `Dialog`, `Form`, `Input`, `Sheet`, `Toast`, etc.
- **Home Page**: `HeroCarousel`, `FeaturedBlogs`, `FeaturedProducts`, `Faq`, `AdvertisementPopup` (`src/components/home/`)
- **Firebase**: Configuration and service modules are set up in `src/lib/firebase/`.

## Next Steps & Future Development:

1.  **Content Population**: Populate all pages and the blog with high-quality, final content (text, images).
2.  **Contact Form Logic**: Implement the backend logic for the contact form to actually send emails or store inquiries in Firestore.
3.  **Implement Planned Features**:
    - Develop the AI-powered wellness tips feature.
    - Create components and pages for Testimonials.
    - Integrate the Instagram feed on the home page or a dedicated section.
4.  **E-commerce Implementation**: If products are to be sold directly, this will be a major effort involving:
    - Shopping cart state management.
    - A checkout flow.
    - Integration with a payment gateway.
5.  **Testing**: Write unit and integration tests for key components and functionality to ensure the application is robust.
6.  **Deployment**: The project is configured for deployment with Firebase Hosting, as seen in `firebase.json` and `package.json` scripts. The final step will be to run the deployment command.
