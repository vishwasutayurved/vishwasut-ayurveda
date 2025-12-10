"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X } from "lucide-react";
import { NavLink } from "./nav-link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { ThemeToggle } from "../theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/therapies", label: "Therapies" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <NavLink href="/" className="mr-6 flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg hidden sm:inline-block">
          Shri Vishvasuta Ayurved & Panchkarma Clinic
          </span>
        </NavLink>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex md:gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-primary sm:text-sm",
                  pathname === item.href ? "text-primary" : "text-foreground/60"
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          {/* <ThemeToggle /> */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col p-6">
                <NavLink href="/" className="mb-8 flex items-center space-x-2">
                   {/* <Leaf className="h-6 w-6 text-primary" /> */}
                   <span className="font-bold font-headline text-lg">Shri Vishvasuta Ayurved & Panchkarma Clinic</span>
                </NavLink>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium",
                        pathname === item.href ? "text-primary" : "text-foreground/80"
                      )}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
