"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useAccessibility } from "../context/AccessibilityContext";
import { clinicConfig } from "../data/clinicConfig";
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  Activity
} from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();
  const { speakText } = useAccessibility();
  const [mounted, setMounted] = React.useState(false);
  const [logoSrc, setLogoSrc] = React.useState("/logo.jpg");
  const [logoError, setLogoError] = React.useState(false);

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

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: language === "en" ? "About Us" : "ഞങ്ങളെക്കുറിച്ച്" },
    { href: "#services", label: language === "en" ? "Services" : "സേവനങ്ങൾ" },
    { href: "#palliative", label: language === "en" ? "Community Programs" : "കമ്മ്യൂണിറ്റി പ്രോഗ്രാമുകൾ" },
    { href: "#facilities", label: language === "en" ? "Facilities" : "സൗകര്യങ്ങൾ" },
    { href: "#gallery", label: language === "en" ? "Gallery" : "ഗാലറി" },
    { href: "#reviews", label: language === "en" ? "Reviews" : "അഭിപ്രായങ്ങൾ" },
    { href: "#team", label: language === "en" ? "Our Team" : "ഞങ്ങളുടെ ടീം" },
    { href: "#contact", label: language === "en" ? "Contact & Map" : "സമ്പർക്കം" },
  ];

  return (
    <footer className="w-full bg-brand-dark text-brand-lightest border-t border-brand-slate/20 transition-colors duration-500 ease-out">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Core Subsidies Banner */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-brand-slate/40 to-brand-dark border border-brand-slate/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-lightest/15 text-brand-lightest border border-brand-lightest/30">
              <Heart className="h-6 w-6 fill-brand-lightest/10 stroke-[2]" />
            </div>
            <div>
              <h4 
                className="text-base font-display font-black text-white tracking-tight"
                onMouseEnter={() => handleSpeech(language === "en" ? "Our Compassionate Care Promise" : "കാരുണ്യപൂർണ്ണമായ പരിചരണ വാഗ്ദാനം")}
              >
                {language === "en" ? "Our Compassionate Care Promise" : "കാരുണ്യപൂർണ്ണമായ പരിചരണ വാഗ്ദാനം"}
              </h4>
              <p 
                className="text-sm text-brand-light mt-1 max-w-2xl leading-relaxed"
                onMouseEnter={() => handleSpeech(language === "en" ? "We ensure no patient in need is turned away." : "അർഹരായ ഒരു രോഗിക്കും പരിചരണം നിഷേധിക്കില്ലെന്ന് ഞങ്ങൾ ഉറപ്പുനൽകുന്നു.")}
              >
                {language === "en" 
                  ? "We ensure no patient in need is turned away. Our physical rehabilitation therapies are 100% free of charge, funded entirely by generous community donations and trust well-wishers to support underprivileged families in Edappal and surrounding regions." 
                  : "ആവശ്യക്കാരായ ഒരു രോഗിക്കും പരിചരണം നിഷേധിക്കില്ലെന്ന് ഞങ്ങൾ ഉറപ്പുനൽകുന്നു. ഞങ്ങളുടെ എല്ലാ ഫിസിയോതെറാപ്പിയും പുനരധിവാസ ചികിത്സകളും 100% സൗജന്യമാണ്. ഉദാരമനസ്കരുടെയും സംഭാവനകളുടെയും പിന്തുണയോടെയാണ് ഇത് പ്രവർത്തിക്കുന്നത്."}
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="rounded-xl bg-brand-light hover:bg-white text-brand-dark font-bold text-sm px-6 py-3 transition-colors shrink-0 text-center w-full md:w-auto shadow-md uppercase tracking-wider"
            onMouseEnter={() => handleSpeech(language === "en" ? "Contact NPO" : "സമ്പർക്കം")}
          >
            {language === "en" ? "Contact NPO" : "സമ്പർക്കം"}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-brand-slate/20">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <a 
              href="#" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 text-brand-light"
              onMouseEnter={() => handleSpeech(clinicConfig.name)}
            >
              {mounted && !logoError ? (
                <img 
                  src={logoSrc} 
                  alt="Care Village Logo" 
                  className="h-7 w-7 shrink-0 object-contain rounded bg-white/5 border border-brand-light/35 p-0.5 smooth-transition"
                  onError={handleLogoError}
                />
              ) : (
                <Activity className="h-6 w-6 stroke-[2.5]" />
              )}
              <span className="font-display text-lg font-black text-white leading-none">
                Care Village
              </span>
            </a>
            <p className="text-sm text-brand-light leading-relaxed">
              {language === "en"
                ? "Restoring pain-free mobility and dignity. A premier registered non-profit rehabilitation center and community welfare trust located near Salafi Masjid, Edappal, Kerala."
                : "വേദനരഹിതമായ ചലനശേഷിയും അന്തസ്സും വീണ്ടെടുക്കുന്നു. എടപ്പാൾ സലഫി മസ്ജിദിന് സമീപം പ്രവർത്തിക്കുന്ന മികച്ച പുനരധിവാസ കേന്ദ്രവും കമ്മ്യൂണിറ്റി വെൽഫെയർ ട്രസ്റ്റും."}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-lightest bg-brand-slate/20 border border-brand-slate/40 px-3 py-1.5 rounded-lg w-fit">
              <Award className="h-3.5 w-3.5" />
              <span>{clinicConfig.npoRegNumber}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs uppercase tracking-widest font-black text-white">
              {language === "en" ? "Quick Navigation" : "ദ്രുത നാവിഗേഷൻ"}
            </h5>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-brand-light hover:text-white transition-colors flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-slate/40"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs uppercase tracking-widest font-black text-white">
              {language === "en" ? "Contact Details" : "സമ്പർക്ക വിവരങ്ങൾ"}
            </h5>
            <ul className="flex flex-col gap-3.5 text-sm text-brand-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 shrink-0 text-brand-lightest mt-0.5" />
                <span onMouseEnter={() => handleSpeech(clinicConfig.address)}>{clinicConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-brand-lightest" />
                <a href={`tel:${clinicConfig.phone}`} className="hover:text-white transition-colors">{clinicConfig.phoneFormatted}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4.5 w-4.5 text-brand-lightest" />
                <a href={`mailto:${clinicConfig.email}`} className="hover:text-white transition-colors">{clinicConfig.email}</a>
              </li>
            </ul>
          </div>

          {/* Social Presence & Timings */}
          <div className="flex flex-col gap-4">
            <h5 className="text-xs uppercase tracking-widest font-black text-white">
              {language === "en" ? "Connect & Support" : "പിന്തുണയും സമ്പർക്കവും"}
            </h5>
            <p className="text-xs text-brand-light leading-relaxed">
              {language === "en" 
                ? "Follow Care Charitable Trust to stay informed about free rural health camps, medical equipment distribution, and rehabilitation workshops."
                : "സൗജന്യ മെഡിക്കൽ ക്യാമ്പുകൾ, ഉപകരണ വിതരണങ്ങൾ എന്നിവയെക്കുറിച്ച് അറിയുന്നതിനായി കെയർ ചാരിറ്റബിൾ ട്രസ്റ്റ് പിന്തുടരുക."}
            </p>
            <div className="flex items-center gap-3">
              {clinicConfig.socials.facebook && (
                <a href={clinicConfig.socials.facebook} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-slate/20 hover:bg-white hover:text-brand-dark text-white transition-colors" title="Facebook">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>
              )}
              {clinicConfig.socials.instagram && (
                <a href={clinicConfig.socials.instagram} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-slate/20 hover:bg-white hover:text-brand-dark text-white transition-colors" title="Instagram">
                  <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}
              {clinicConfig.socials.linkedin && (
                <a href={clinicConfig.socials.linkedin} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-slate/20 hover:bg-white hover:text-brand-dark text-white transition-colors" title="LinkedIn">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-gray">
          <span>
            &copy; {currentYear} {clinicConfig.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <span>Operated by</span>
            <span className="font-bold text-white">{clinicConfig.npoName}</span>
            <span className="h-3 w-px bg-brand-slate/40"></span>
            <span>Edappal, Kerala ❤️</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
