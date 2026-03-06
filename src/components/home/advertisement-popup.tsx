"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { KEY_FEATURE_AD_POPUP as KEY_FEATURE_AD_POPUP_DATE, NOTIFICATION_COOKIE_KEY } from "@/lib/constants";
import { Advertisement } from "@/lib/advertisement";
import { formatDate } from "@/lib/utils";
import NotificationPopup from "./notification-popup";
import { getFCMToken } from "@/lib/firebase/messaging";

const AdvertisementPopup = ({ advertisementData }: { advertisementData: Advertisement[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isNotificationPermissionPopup, setIsNotificationPermissionPopup] = useState(false);
  const [advertisementToBeDisplayed, setAdvertisementToBeDisplayed] = useState<Advertisement>(advertisementData[0]);


  function registerForNotification() {
    const notificationPrompted = Cookies.get(NOTIFICATION_COOKIE_KEY);
    const notificationPermission = Notification.permission;

    if (!notificationPrompted && notificationPermission !== "denied") {
      setTimeout(() => {
        if (notificationPermission === "granted") {
          getFCMToken();
          Cookies.set(NOTIFICATION_COOKIE_KEY, "prompted", { expires: 5 });
          setIsNotificationPermissionPopup(false);
        } else {
          setIsOpen(true);
          setIsNotificationPermissionPopup(true);
        }

      }, 8000); // Show after 8 seconds

    }
  }


  useEffect(() => {
    if (advertisementData.length === 0) {
      console.log("No cards available");
      return;
    }

    const todayDate = formatDate(new Date(), "numeric", "2-digit", "2-digit", "en-CA", "Asia/Kolkata");
    advertisementData = advertisementData.filter((data) => {
      return (data.startDate <= todayDate &&
        (data.endDate >= todayDate || data.isPermanent));
    });

    const timer = setInterval(() => {

      registerForNotification();

      const now = new Date();
      const futureAdPopUpDate = Cookies.get(KEY_FEATURE_AD_POPUP_DATE);
      if (!futureAdPopUpDate) {

        let listOfDisplayedAdsIds: string[] = [];
        let filteredDisplayAdsList: Advertisement[] = [];
        let randomAdsIndex = 0;
        const futureAdPopUpDateSession = sessionStorage.getItem(KEY_FEATURE_AD_POPUP_DATE);

        if (futureAdPopUpDateSession) {
          listOfDisplayedAdsIds = futureAdPopUpDateSession.split(",");
        } else {
          sessionStorage.setItem(KEY_FEATURE_AD_POPUP_DATE, "");
        }

        const isEveryAdsDisplayed = advertisementData.every((advertisement) => {
          return listOfDisplayedAdsIds.includes(advertisement.id);
        });

        if (isEveryAdsDisplayed) {
          sessionStorage.setItem(KEY_FEATURE_AD_POPUP_DATE, "");
          listOfDisplayedAdsIds = [];
        }

        filteredDisplayAdsList = advertisementData.filter((advertisement) => {
          return !listOfDisplayedAdsIds.includes(advertisement.id);
        });
        randomAdsIndex = Math.floor(Math.random() * filteredDisplayAdsList.length);

        setAdvertisementToBeDisplayed(filteredDisplayAdsList[randomAdsIndex]);
        sessionStorage.setItem(KEY_FEATURE_AD_POPUP_DATE, listOfDisplayedAdsIds.concat(filteredDisplayAdsList[randomAdsIndex].id).join(","));
        Cookies.set(KEY_FEATURE_AD_POPUP_DATE, KEY_FEATURE_AD_POPUP_DATE, {
          expires: new Date(now.getTime() + 5 * 60 * 1000),   //Expires in 5 mins.
          path: "/"
        });
        setIsOpen(true);
      }
    }, 5000);

    return () => {

      clearInterval(timer);
    }
  }, [advertisementData]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsNotificationPermissionPopup(false);
      setIsOpen(false);
      setIsClosing(false);
    }, 500); // Match animation duration
  };

  if (!isOpen) {
    return null;
  } else if (isOpen && isNotificationPermissionPopup) {
    return <NotificationPopup
      openState={[isOpen, setIsOpen]}
      closingState={[isClosing, setIsClosing]}
      notificationPermissionPopup={[isNotificationPermissionPopup, setIsNotificationPermissionPopup]} />;
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
