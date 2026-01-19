import { NavLink } from "./nav-link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <NavLink href="/home" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Shri Vishvasuta Ayurved & Panchkarma Clinic" className="h-10 w-10" />
              <span className="font-headline text-xl font-bold">Shri Vishvasuta Ayurved & Panchkarma Clinic</span>
            </NavLink>
            <p className="mt-4 text-foreground/70">
              Your path to holistic wellness and natural healing.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink href="/" className="text-foreground/70 hover:text-primary">Home</NavLink></li>
              <li><NavLink href="/blogs" className="text-foreground/70 hover:text-primary">Blogs</NavLink></li>
              <li><NavLink href="/products" className="text-foreground/70 hover:text-primary">Products</NavLink></li>
              <li><NavLink href="/about" className="text-foreground/70 hover:text-primary">About Us</NavLink></li>
              <li><NavLink href="/contact" className="text-foreground/70 hover:text-primary">Contact</NavLink></li>
              <li><NavLink href="/treatments/panchkarma" className="text-foreground/70 hover:text-primary">Panchkarma</NavLink></li>
              <li><NavLink href="/treatments/packages" className="text-foreground/70 hover:text-primary">Packages</NavLink></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="font-headline text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink href="#" className="text-foreground/70 hover:text-primary">Privacy Policy</NavLink></li>
              <li><NavLink href="#" className="text-foreground/70 hover:text-primary">Terms of Service</NavLink></li>
            </ul>
          </div> */}
          <div>
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground/70">Plot no 11 A, Hudkeshwar Rd, opposite Domino's Nasare Sabaguha, Dubey Nagar, Chandrakiran Nagar, Nagpur, Maharashtra 440034</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div className="flex flex-col">
                  <a href="tel:+919270220033" className="text-foreground/70 hover:text-primary">+919270220033</a>
                  <a href="tel:+919975797624" className="text-foreground/70 hover:text-primary">+919975797624</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <a href="mailto:vishwasutayurved@gmail.com" className="text-foreground/70 hover:text-primary">vishwasutayurved@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Shri Vishvasuta Ayurved & Panchkarma Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
