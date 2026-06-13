"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useAccessibility } from "../context/AccessibilityContext";
import { 
  Menu, 
  X, 
  Globe
} from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const { language, toggleLanguage } = useLanguage();
  const { speakText } = useAccessibility();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/logo.jpg");
  const [logoError, setLogoError] = useState(false);

  const handleLogoError = () => {
    if (logoSrc === "/logo.jpg") {
      setLogoSrc("/logo.png");
    } else if (logoSrc === "/logo.png") {
      setLogoSrc("/logo.jpeg");
    } else if (logoSrc === "/logo.jpeg") {
      setLogoSrc("/logo.webp");
    } else if (logoSrc === "/logo.webp") {
      setLogoSrc("/logo.svg");
    } else {
      setLogoError(true);
    }
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: language === "en" ? "About" : "ഞങ്ങളെക്കുറിച്ച്" },
    { href: "#services", label: language === "en" ? "Services" : "സേവനങ്ങൾ" },
    { href: "#donate", label: language === "en" ? "Donate" : "സംഭാവന" },
    { href: "#palliative", label: language === "en" ? "Palliative" : "പാലിയേറ്റീവ്" },
    { href: "#facilities", label: language === "en" ? "Facilities" : "സൗകര്യങ്ങൾ" },
    { href: "#gallery", label: language === "en" ? "Gallery" : "ഗാലറി" },
    { href: "#reviews", label: language === "en" ? "Reviews" : "അഭിപ്രായങ്ങൾ" },
    { href: "#team", label: language === "en" ? "Team" : "ഞങ്ങളുടെ ടീം" },
    { href: "#contact", label: language === "en" ? "Contact" : "സമ്പർക്കം" },
  ];

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-500 bg-brand-dark/95 border-b border-brand-slate/25 backdrop-blur-md shadow-md py-2.5 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Section with Dedicated Placeholder Space */}
          <div className="flex items-center">
            <Link 
              href="#" 
              className="flex items-center gap-3 group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onMouseEnter={() => handleSpeech("Care Village - Care Charitable Trust")}
            >
              {/* Elegant Custom Logo Container with Fallback */}
              {mounted && !logoError ? (
                <img 
                  src={logoSrc} 
                  alt="Care Village Logo" 
                  className="h-11 w-11 shrink-0 object-contain rounded-xl bg-white/5 border border-brand-light/35 p-1 smooth-transition group-hover:scale-105"
                  onError={handleLogoError}
                />
              ) : (
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-light/30 bg-brand-lightest/10 text-brand-light font-display font-black text-xs tracking-wider uppercase select-none smooth-transition group-hover:bg-brand-lightest/20 group-hover:text-white">
                  CV
                </div>
              )}
              <div className="flex flex-col text-left">
                <span className="font-display text-lg font-black tracking-tight leading-none group-hover:text-brand-light transition-colors duration-300">
                  Care Village
                </span>
                <span className="text-[9px] font-bold tracking-wider uppercase text-brand-gray mt-1">
                  Care Charitable Trust
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-brand-light hover:text-white transition-colors duration-300 relative py-1"
                  onMouseEnter={() => handleSpeech(link.label)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Controls (Tidied as requested: No light toggle, No CTA button, Clean Malayalam toggle) */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Donate Button */}
            <a
              href="#donate"
              className="flex h-9 items-center justify-center gap-1.5 rounded-xl bg-brand-lightest border border-brand-light/30 px-4 text-xs font-black uppercase tracking-wider text-brand-slate hover:bg-white hover:text-brand-dark transition-all hover:scale-105 active:scale-95 shadow-sm animate-pulse-slow"
              onMouseEnter={() => handleSpeech(language === "en" ? "Donate Now to Support Our Cause" : "സംഭാവന നൽകുക")}
            >
              <span className="h-2 w-2 rounded-full bg-brand-slate animate-ping shrink-0" />
              <span>{language === "en" ? "Donate" : "സംഭാവന"}</span>
            </a>

            {/* Malayalam Language Selector */}
            <button
              onClick={toggleLanguage}
              className="flex h-9 items-center gap-2 rounded-xl border border-brand-slate/40 px-3 text-xs font-bold text-brand-light hover:border-white hover:text-white transition-colors duration-300"
              title="Change Language / ഭാഷ മാറ്റുക"
              onMouseEnter={() => handleSpeech(language === "en" ? "Change language to Malayalam" : "ഭാഷ ഇംഗ്ലീഷ് ആക്കുക")}
            >
              <Globe className="h-4 w-4 text-brand-light" />
              <span className="tracking-wide">{language === "en" ? "മലയാളം" : "English"}</span>
            </button>



          </div>

          {/* Mobile Action buttons & Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex h-8 items-center gap-1 rounded-lg border border-brand-slate/40 px-2.5 text-[10px] font-bold text-brand-light"
            >
              <Globe className="h-3 w-3" />
              <span>{language === "en" ? "ML" : "EN"}</span>
            </button>



            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-slate/40 text-brand-light bg-brand-slate/10"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-brand-dark/98 border-b border-brand-slate/25 p-4 shadow-xl animate-fade-in transition-colors duration-300">
          <nav className="flex flex-col gap-3 text-left">
            {navLinks.map((link) => {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-wider font-semibold py-2 px-3 rounded-lg text-brand-light hover:bg-brand-slate/20 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
            <hr className="border-brand-slate/20 my-1" />
            
            <div className="flex items-center justify-between gap-3 pt-2">

            </div>

          </nav>
        </div>
      )}
      {/* Scroll Progress Bar at the bottom of the sticky header */}
      <div 
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-brand-lightest via-brand-light to-brand-slate transition-all duration-150 ease-out z-50" 
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
}
