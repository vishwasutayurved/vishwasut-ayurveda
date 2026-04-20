'use client';

import { NavLink } from "@/components/layout/nav-link";
import { Button } from "@/components/ui/button";
import { WHATSAPP_APPOINTMENT_MESSAGE, WHATSAPP_NUMBER } from "@/lib/constants";

export function StickyNotification() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-amber-700 text-white p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg">Book Consultation Now!</p>
          <p className="text-md">
            <span className="line-through mr-2">₹500</span>
            <span className="font-bold">₹199</span>
          </p>
        </div>
        <Button asChild className="bg-white text-amber-700 hover:bg-stone-100">
          <NavLink
            openInNewTab={true}
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_APPOINTMENT_MESSAGE)}`}
          >
            Book Now
          </NavLink>
        </Button>
      </div>
    </div>
  );
}
