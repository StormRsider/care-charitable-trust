"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AccessibilityProvider } from "../context/AccessibilityContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AppointmentModal from "./AppointmentModal";
import AccessibilityWidget from "./AccessibilityWidget";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [a11yOpen, setA11yOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setBookingOpen(true);
  };

  const handleOpenA11y = () => {
    setA11yOpen(true);
  };

  // Setup elegant window-level listener to let deep page cards trigger modals directly
  useEffect(() => {
    const handleOpenBookingEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceId?: string }>;
      handleOpenBooking(customEvent.detail?.serviceId);
    };

    const handleOpenA11yEvent = () => {
      handleOpenA11y();
    };

    window.addEventListener("open-booking", handleOpenBookingEvent);
    window.addEventListener("open-a11y", handleOpenA11yEvent);

    return () => {
      window.removeEventListener("open-booking", handleOpenBookingEvent);
      window.removeEventListener("open-a11y", handleOpenA11yEvent);
    };
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <AccessibilityProvider>
          <Navbar 
            onOpenBooking={() => handleOpenBooking()} 
            onOpenA11y={handleOpenA11y} 
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
          <AccessibilityWidget 
            isOpen={a11yOpen} 
            onClose={() => setA11yOpen(false)} 
          />
        </AccessibilityProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
