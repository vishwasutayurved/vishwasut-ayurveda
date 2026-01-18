"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NavLink } from "./nav-link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/products", label: "Products" },
  {
    label: "Treatments",
    subItems: [
      { href: "/treatments/panchkarma", label: "Panchkarma" },
      { href: "/treatments/packages", label: "Packages" },
      { href: "/treatments/diseases", label: "Diseases" },
    ],
  },
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
          <img src="./logo.png" alt="Shri Vishvasuta Ayurved & Panchkarma Clinic" className="h-10 w-10" />
          <span className="font-bold font-headline text-lg hidden sm:inline-block">
            Shri Vishvasuta Ayurved & Panchkarma Clinic
          </span>
        </NavLink>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden items-center md:flex md:gap-1">
            {navItems.map((item) => (
              item.subItems ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={cn(
                      "flex items-center text-lg font-medium transition-colors hover:text-primary sm:text-sm px-3",
                      item.subItems.some(sub => pathname.startsWith(sub.href)) ? "text-primary" : "text-foreground/60"
                    )}>
                      {item.label}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.subItems.map(subItem => (
                      <NavLink key={subItem.href} href={subItem.href} className="w-full">
                        <DropdownMenuItem key={subItem.href} >
                          {subItem.label}
                        </DropdownMenuItem>
                      </NavLink>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavLink
                  key={item.href}
                  href={item.href!}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-primary sm:text-sm px-3",
                    pathname === item.href ? "text-primary" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </nav>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation menu</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col p-6">
                <NavLink href="/" className="mb-8 flex items-center space-x-2">
                  <span className="font-bold font-headline text-lg">Shri Vishvasuta Ayurved & Panchkarma Clinic</span>
                </NavLink>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    item.subItems ? (
                      <div key={item.label} className="flex flex-col gap-2">
                        <span className="text-lg font-medium text-foreground/60">{item.label}</span>
                        <nav className="ml-4 flex flex-col gap-2">
                          {item.subItems.map(subItem => (
                            <NavLink
                              key={subItem.href}
                              href={subItem.href}
                              className={cn(
                                "text-lg font-medium",
                                pathname === subItem.href ? "text-primary" : "text-foreground/80"
                              )}
                            >
                              {subItem.label}
                            </NavLink>
                          ))}
                        </nav>
                      </div>
                    ) : (
                      <NavLink
                        key={item.href}
                        href={item.href!}
                        className={cn(
                          "text-lg font-medium",
                          pathname === item.href ? "text-primary" : "text-foreground/80"
                        )}
                      >
                        {item.label}
                      </NavLink>
                    )
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
