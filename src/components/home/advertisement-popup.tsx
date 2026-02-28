"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { KEY_FEATURE_AD_POPUP as KEY_FEATURE_AD_POPUP_DATE } from "@/lib/constants";

const AdvertisementPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = new Date();
      const futureAdPopUpDate = Cookies.get(KEY_FEATURE_AD_POPUP_DATE);
      if (!futureAdPopUpDate) {
        Cookies.set(KEY_FEATURE_AD_POPUP_DATE, new Date(now.getTime() + 60 * 60 * 1000).toISOString(), {
          expires: new Date(now.getTime() + 60 * 60 * 1000)
        });
        setIsOpen(true);
      } else if (futureAdPopUpDate && now > new Date(futureAdPopUpDate)) {
        Cookies.set(KEY_FEATURE_AD_POPUP_DATE, new Date(now.getTime() + 60 * 60 * 1000).toISOString(), {
          expires: new Date(now.getTime() + 60 * 60 * 1000)
        });
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500); // Match animation duration
  };

  if (!isOpen) {
    return null;
  } else {
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
              src={"https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f_1f3fb/512.gif"}
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto mb-4 emoji-dance"
            />
            <h2 className="text-2xl font-bold mb-4">Welcome to Our Clinic!</h2>
            <p>
              We are happy to see you here. Check out our latest products and offers.
            </p>
            <Button asChild className="mt-4">
              <a
                href="/products" target="_blank"
                onClick={handleClose}
              >
                Explore Products
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }


};

export default AdvertisementPopup;
