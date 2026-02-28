"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AdvertisementPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // setIsOpen(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`relative max-w-lg w-full mx-4 bg-white rounded-lg shadow-lg p-6 ${isClosing ? 'fly-out-spinner-animation' : 'fly-in-spinner-animation'}`}>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute top-4 right-4"
        >
          <X size={24} />
        </Button>
        <div className="text-center">
            <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
            />
          <h2 className="text-2xl font-bold mb-4">Welcome to Our Clinic!</h2>
          <p>
            We are happy to see you here. Check out our latest products and offers.
          </p>
          <Button asChild className="mt-4">
            <a
              href="/products"
              onClick={handleClose}
            >
              Explore Products
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementPopup;
