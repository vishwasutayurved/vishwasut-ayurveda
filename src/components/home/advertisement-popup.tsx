"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { KEY_FEATURE_AD_POPUP as KEY_FEATURE_AD_POPUP_DATE } from "@/lib/constants";
import { Advertisement } from "@/lib/advertisement";

const AdvertisementPopup = ({ advertisementData }: { advertisementData: Advertisement[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [advertisementToBeDisplayed, setAdvertisementToBeDisplayed] = useState<Advertisement>(advertisementData[0]);

  useEffect(() => {
    if (advertisementData.length === 0) {
      console.log("No cards available");
      return;
    }

    if (advertisementData.length === 1) {
      setAdvertisementToBeDisplayed(advertisementData[0]);
      return;
    }

    const timer = setInterval(() => {
      const now = new Date();
      const futureAdPopUpDate = Cookies.get(KEY_FEATURE_AD_POPUP_DATE);
      if (!futureAdPopUpDate) {
        setAdvertisementToBeDisplayed(advertisementData[Math.floor(Math.random() * advertisementData.length)]);
        Cookies.set(KEY_FEATURE_AD_POPUP_DATE, 'active', {
          expires: new Date(now.getTime() + 10 * 60 * 1000),   //Expires in 10 mins.
          path: "/"
        });
        setIsOpen(true);
      }
    }, 10000);

    return () => clearInterval(timer);
  }, [advertisementData]);

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
              src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${advertisementToBeDisplayed.logo}/512.gif`}
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto mb-4 emoji-dance"
            />
            <h2 className="text-2xl font-bold mb-4">{advertisementToBeDisplayed.title}</h2>
            <p>
              {advertisementToBeDisplayed.description}
            </p>
            <Button asChild className="mt-4">
              <a
                href={advertisementToBeDisplayed.navigationLink} target="_blank"
                onClick={handleClose}
              >
                Click here for more details
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }


};

export default AdvertisementPopup;
