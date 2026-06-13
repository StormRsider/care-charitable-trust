"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AccessibilityProvider } from "../context/AccessibilityContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AppointmentModal from "./AppointmentModal";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);

  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setBookingOpen(true);
  };



  // Setup elegant window-level listener to let deep page cards trigger modals directly
  useEffect(() => {
    const handleOpenBookingEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceId?: string }>;
      handleOpenBooking(customEvent.detail?.serviceId);
    };



    window.addEventListener("open-booking", handleOpenBookingEvent);


    return () => {
      window.removeEventListener("open-booking", handleOpenBookingEvent);

    };
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <AccessibilityProvider>
          <Navbar 
            onOpenBooking={() => handleOpenBooking()} 
          />
          <main className="flex-1 flex flex-col w-full animate-fade-in">
            {children}
          </main>
          <Footer />
          
          {/* Overlays */}
          <AppointmentModal 
            isOpen={bookingOpen} 
            onClose={() => setBookingOpen(false)} 
            preselectedServiceId={preselectedService}
          />

        </AccessibilityProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
