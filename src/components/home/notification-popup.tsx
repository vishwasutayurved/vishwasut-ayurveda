"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Bell, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NOTIFICATION_COOKIE_KEY = "notification_prompt";

const NotificationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const notificationPrompted = Cookies.get(NOTIFICATION_COOKIE_KEY);
    const notificationPermission = Notification.permission;

    if (!notificationPrompted && notificationPermission !== "granted" && notificationPermission !== "denied") {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 8000); // Show after 8 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500); // Match animation duration
  };

  const handleAllow = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Notification permission granted.");
      new Notification("Welcome!", {
        body: "You will now receive notifications from our site.",
        icon: "/logo.png",
      });
    } else {
      console.log("Notification permission denied.");
    }
    Cookies.set(NOTIFICATION_COOKIE_KEY, "prompted", { expires: 365 }); // Remember for a year
    handleClose();
  };

  const handleLater = () => {
    Cookies.set(NOTIFICATION_COOKIE_KEY, "prompted", { expires: 1 }); // Remember for a day
    handleClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`relative max-w-sm w-full mx-4 bg-white rounded-lg shadow-lg p-6 text-center ${
          isClosing ? "fly-out-spinner-animation" : "fly-in-spinner-animation"
        }`}
      >
        <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 animate-bounce">
          <Bell size={40} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Stay Updated!</h2>
        <p className="text-gray-600 mb-6">
          Enable notifications to receive the latest news, articles, and
          updates from our clinic.
        </p>
        <div className="flex justify-center space-x-4">
          <Button onClick={handleAllow} className="w-full">
            Allow Notifications
          </Button>
          <Button onClick={handleLater} variant="outline" className="w-full">
            Maybe Later
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute top-2 right-2"
        >
          <X size={20} />
        </Button>
      </div>
    </div>
  );
};

export default NotificationPopup;
