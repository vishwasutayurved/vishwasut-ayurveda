import Link from "next/link";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold">श्री विश्वसुता आयुर्वेदिक आणि पंचकर्म क्लिनिक</span>
            </Link>
            <p className="mt-4 text-foreground/70">
              Your path to holistic wellness and natural healing.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-foreground/70 hover:text-primary">About Us</Link></li>
              <li><Link href="/therapies" className="text-foreground/70 hover:text-primary">Therapies</Link></li>
              <li><Link href="/products" className="text-foreground/70 hover:text-primary">Products</Link></li>
              <li><Link href="/contact" className="text-foreground/70 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-foreground/70 hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground/70">123 Wellness Lane, Ayurveda City, 45678</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="text-foreground/70 hover:text-primary">(123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <a href="mailto:info@dahakeayurveda.com" className="text-foreground/70 hover:text-primary">info@dahakeayurveda.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} श्री विश्वसुता आयुर्वेदिक आणि पंचकर्म क्लिनिक. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
