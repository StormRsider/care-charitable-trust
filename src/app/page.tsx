"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useAccessibility } from "../context/AccessibilityContext";
import { servicesData } from "../data/servicesData";
import { clinicalFaculty, trustOfficers } from "../data/teamData";
import { clinicConfig } from "../data/clinicConfig";
import { 
  Heart, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Home, 
  MessageCircle, 
  Award,
  Sparkles,
  Smile,
  ChevronRight,
  ChevronLeft,
  Stethoscope,
  Flame
} from "lucide-react";

export default function HomePage() {
  const { language } = useLanguage();
  const { speakText } = useAccessibility();
  const [activeFacility, setActiveFacility] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
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

  const scrollSections = [
    { id: "hero", label: "Home", labelMl: "ഹോം" },
    { id: "about", label: "About", labelMl: "ഞങ്ങളെക്കുറിച്ച്" },
    { id: "services", label: "Services", labelMl: "സേവനങ്ങൾ" },
    { id: "donate", label: "Donate", labelMl: "സംഭാവന" },
    { id: "palliative", label: "Palliative", labelMl: "പാലിയേറ്റീവ്" },
    { id: "facilities", label: "Facilities", labelMl: "സൗകര്യങ്ങൾ" },
    { id: "gallery", label: "Gallery", labelMl: "ഗാലറി" },
    { id: "reviews", label: "Reviews", labelMl: "അഭിപ്രായങ്ങൾ" },
    { id: "team", label: "Team", labelMl: "ഞങ്ങളുടെ ടീം" },
    { id: "contact", label: "Contact", labelMl: "സമ്പർക്കം" },
  ];

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  const triggerCallBooking = (serviceId?: string) => {
    window.dispatchEvent(new CustomEvent("open-booking", { detail: { serviceId } }));
  };

  // Modern Intersection Observer for Smooth Scroll Reveals & Section Spy
  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -80px 0px" }
    );

    const elements = document.querySelectorAll(
      ".reveal-on-scroll, .reveal-on-scroll-left, .reveal-on-scroll-right, .reveal-on-scroll-scale"
    );
    elements.forEach((el) => observer.observe(el));

    // Section scroll-spy observer to track active section
    const sectionObserverOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.05
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, sectionObserverOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((sec) => sectionObserver.observe(sec));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      sections.forEach((sec) => sectionObserver.unobserve(sec));
    };
  }, []);

  const facilities = [
    {
      title: "Parallel Bars",
      titleHindi: "സമാന്തര ബാറുകൾ (Parallel Bars)",
      description: "Essential for restoring walking confidence. Designed for gait training, weight-shifting exercises, and posture correction in stroke, neurological, and post-surgery rehabilitation.",
      descriptionHindi: "സ്ട്രോക്ക്, തളർവാതം, ഓർത്തോപീഡിക് സർജറി എന്നിവയ്ക്ക് ശേഷം രോഗികളുടെ നടത്തം സുഗമമാക്കാനും സന്തുലിതാവസ്ഥ വീണ്ടെടുക്കാനുമുള്ള പാരലൽ ബാർ അസിസ്റ്റഡ് ഗെയ്റ്റ് ട്രെയിനിംഗ്.",
      useCase: "Gait Retraining & Lower Limb Mobilization",
      useCaseHindi: "നടത്ത പരിശീലനവും ചലനശേഷി വീണ്ടെടുക്കലും"
    },
    {
      title: "Therapy Beds",
      titleHindi: "തെറാപ്പി ബെഡ്ഡുകൾ (Therapy Beds)",
      description: "Height-adjustable, heavily cushioned ergonomic platforms built for focused manual therapy, passive joint stretches, and osteopathic alignments in high comfort.",
      descriptionHindi: "രോഗികൾക്ക് മികച്ച കിടപ്പ് സൗകര്യം നൽകിക്കൊണ്ട് സന്ധികൾ ചലിപ്പിക്കാനും മാനുവൽ ഫിസിയോതെറാപ്പി നൽകാനുമുള്ള ഉയരം ക്രമീകരിക്കാവുന്ന അത്യാധുനിക തെറാപ്പി ബെഡ്ഡുകൾ.",
      useCase: "Manual Joint Mobilization & Stretches",
      useCaseHindi: "മാനുവൽ ജോയിന്റ് മൊബിലൈസേഷൻ & സ്ട്രെച്ചിംഗ്"
    },
    {
      title: "TENS Machine",
      titleHindi: "ടെൻസ് മഷീൻ (TENS Machine)",
      description: "Transcutaneous Electrical Nerve Stimulation units that dispatch mild electrical currents to disrupt pain signals, instantly relaxing deep muscle fibers.",
      descriptionHindi: "വേദനയുടെ സിഗ്നലുകളെ തടഞ്ഞുകൊണ്ട് പേശികൾക്ക് വേഗത്തിൽ ആശ്വാസം നൽകുന്ന അത്യാധുനിക അൾട്രാസൗണ്ട്/TENS വൈദ്യുത തരംഗ വേദന സംഹാരി യൂണിറ്റുകൾ.",
      useCase: "Non-Invasive Pain Relief & Muscle Relaxation",
      useCaseHindi: "പാർശ്വഫലങ്ങളില്ലാത്ത വേദന നിവാരണവും മസിൽ റിലാക്സേഷനും"
    },
    {
      title: "Exercise Equipment",
      titleHindi: "വ്യായാമ ഉപകരണങ്ങൾ (Exercise Equipment)",
      description: "A wide deck of rehabilitation equipment including resistance therabands, gym balls, finger pulleys, and dumbbells tailored to build muscular endurance.",
      descriptionHindi: "പേശീബലവും വഴക്കവും വർദ്ധിപ്പിക്കുന്നതിനുള്ള തെറാബാൻഡ് റബ്ബർ വലിപ്പുകൾ, ജിം ബോൾ, ഫിംഗർ പുലി, ഡംബെല്ലുകൾ എന്നിവയടങ്ങുന്ന വിപുലമായ വ്യായാമ വിഭാഗം.",
      useCase: "Stretching, Conditioning & Strength Training",
      useCaseHindi: "സ്ട്രെച്ചിംഗ്, പേശിബലം & വ്യായാമം"
    },
    {
      title: "Robotic Rehabilitation Glove",
      titleHindi: "റോബോട്ടിക് റീഹാബിലിറ്റേഷൻ ഗ്ലൗസ് (Robotic Glove)",
      description: "Innovative pneumatic glove technology that assists hemiplegic and hand-paralysis patients in performing gripping exercises and retraining hand-eye coordination.",
      descriptionHindi: "പക്ഷാഘാതം മൂലം കൈ വിരലുകൾ ചലിപ്പിക്കാൻ പ്രയാസപ്പെടുന്ന രോഗികൾക്ക് വിരലുകൾ മടക്കാനും വസ്തുക്കൾ പിടിക്കാനും സഹായിക്കുന്ന അത്യാധുനിക റോബോട്ടിക് ഗ്ലൗസ് തെറാപ്പി.",
      useCase: "Neuro-Muscular Hand & Finger Retraining",
      useCaseHindi: "വിരലുകളുടെ ചലനശേഷിയും ഏകോപനവും വീണ്ടെടുക്കൽ"
    },
    {
      title: "Walking Support Systems",
      titleHindi: "നടത്ത സഹായ സംവിധാനങ്ങൾ (Walking Supports)",
      description: "Standard folding walkers, heavy-duty quad canes, and specialized pediatric stepping frames constructed to offer active mechanical support during early mobility recovery.",
      descriptionHindi: "പ്രസിദ്ധമായ നടത്തം സുരക്ഷിതമാക്കാൻ ഉപയോഗിക്കുന്ന വാക്കറുകൾ, ഹെവി ക്വാഡ് വാക്കിങ് സ്റ്റിക്കുകൾ, കുട്ടികൾക്കായുള്ള പ്രത്യേക സ്റ്റെപ്പിംഗ് ഫ്രെയിമുകൾ.",
      useCase: "Fall-Prevention & Supported Mobilization",
      useCaseHindi: "വീഴ്ച ഒഴിവാക്കലും സുരക്ഷിതമായ നടത്തവും"
    }
  ];

  const galleryItems = [
    {
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      title: "Modern Clinical Environment",
      titleHindi: "ആധുനിക ക്ലിനിക്കൽ പരിസ്ഥിതി",
      desc: "Our clean, bright, and state-of-the-art physiotherapy room in Edappal."
    },
    {
      url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
      title: "Focused Manual Mobilization",
      titleHindi: "മാനുവൽ ഫിസിയോതെറാപ്പി പരിചരണം",
      desc: "Therapists providing precise, unhurried, and dedicated manual joint stretches."
    },
    {
      url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      title: "Pediatric Rehabilitation",
      titleHindi: "കുട്ടികൾക്കായുള്ള ചികിത്സകൾ",
      desc: "Empathetic, play-focused developmental drills sponsored fully by the trust."
    },
    {
      url: "https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&w=800&q=80",
      title: "Advanced Electrotherapy Unit",
      titleHindi: "അത്യാധുനിക ഇലക്ട്രോതെറാപ്പി বিভাগം",
      desc: "Safe and subsidized modalities to treat inflammation and nerve injuries."
    },
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      title: "Community Welfare Outreach",
      titleHindi: "കമ്മ്യൂണിറ്റി വെൽഫെയർ ഔട്ട്രീച്ച്",
      desc: "Delivering mobility support, aid distribution, and free diagnostics to rural communities."
    }
  ];

  const reviews = [
    {
      name: "Ummer",
      location: "Edappal, Malappuram",
      text: "After suffering from a stroke, I lost the ability to move my right side. The intensive neuro-rehab here helped me regain my movement completely free of cost. Today, I can walk to the masjid without support.",
      textHindi: "സ്ട്രോക്ക് ബാധിച്ച് എന്റെ വലതുഭാഗം തളർന്നുപോയിരുന്നു. കെയർ വില്ലേജിലെ മികച്ച ഫിസിയോതെറാപ്പി കാരണം ഇപ്പോൾ എനിക്ക് സ്വതന്ത്രമായി നടക്കാൻ കഴിയുന്നുണ്ട്. പാവപ്പെട്ടവർക്ക് ഇതൊരു വലിയ അനുഗ്രഹമാണ്.",
      rating: 5,
      date: "12 May 2026",
      condition: "Stroke Recovery"
    },
    {
      name: "Amina",
      location: "Kuttippuram, Malappuram",
      text: "Severe knee pain made it impossible for me to stand or cook. The manual therapy and strengthening exercises provided by the dedicated team fully cured my knee stiffness.",
      textHindi: "പ്രായാധിക്യം മൂലമുള്ള കടുത്ത കാൽമുട്ട് വേദന കാരണം എനിക്ക് നിൽക്കാനോ നടക്കാനോ കഴിഞ്ഞിരുന്നില്ല. ഇവിടെ ചെയ്ത വ്യായാമ ചികിത്സയും പരിചരണവും കാരണം എനിക്ക് പൂർണ്ണ ആശ്വാസം ലഭിച്ചു.",
      rating: 5,
      date: "28 April 2026",
      condition: "Joint Rehabilitation"
    },
    {
      name: "Mohammed CV",
      location: "Ponnani, Malappuram",
      text: "I was suffering from intense back stiffness and nerve compression for months. The electrotherapy and manual exercises offered here, completely free of charge, brought me back to my active life.",
      textHindi: "മാസങ്ങളോളമായി ഞാൻ കടുത്ത നടുവേദനയും പേശി വലിവ് കൊണ്ടും ബുദ്ധിമുട്ടുകയായിരുന്നു. ഇവിടെ ചെയ്ത തികച്ചും സൗജന്യമായ ഇലക്ട്രോതെറാപ്പിയും പരിചരണവും എന്നെ പൂർണ്ണമായും വേഗത്തിൽ സുഖപ്പെടുത്തി.",
      rating: 5,
      date: "04 April 2026",
      condition: "Pain Management"
    }
  ];



  const isMalayalam = language === "ml";

  return (
    <div className="w-full space-y-0">
      
      {/* ================= HERO SECTION (Dark Cinematic Only) ================= */}
      <section id="hero" className="relative w-full h-[92vh] flex items-center justify-center overflow-hidden bg-brand-dark dark-theme-section">
        <video 
          autoPlay 
          loop 
          muted={true}
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-45 scale-105 filter brightness-95 transition-all duration-1000"
        >
          <source 
            src="/hero-bg.mp4" 
            type="video/mp4" 
          />
        </video>

        <div className="absolute inset-0 z-10" style={{ backgroundColor: "rgba(37, 50, 55, 0.72)" }} />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center justify-center h-full space-y-9 animate-fade-in-up">
          
          {/* Dynamic Floating Logo Emblem Above Main Title */}
          {mounted && !logoError ? (
            <img 
              src={logoSrc} 
              alt="Care Village Logo" 
              className="h-16 w-16 shrink-0 object-contain rounded-2xl bg-white/10 border border-brand-light/30 p-1.5 animate-float shadow-xl"
              onError={handleLogoError}
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-light/30 bg-brand-lightest/10 text-brand-light font-display font-black text-xs tracking-wider uppercase select-none animate-float shadow-xl">
              CV
            </div>
          )}

          <div className="space-y-4 max-w-3xl">
            <h1 
              className="font-display text-5xl sm:text-8xl font-black tracking-tighter !text-white drop-shadow-[0_4px_24px_rgba(224,251,252,0.5)] uppercase leading-none"
              style={{ color: '#FFFFFF' }}
              onMouseEnter={() => handleSpeech("Care Village")}
            >
              Care Village
            </h1>
            
            <p 
              className="text-lg sm:text-2xl font-light text-brand-lightest tracking-wider max-w-2xl mx-auto leading-relaxed"
              onMouseEnter={() => handleSpeech("Compassion Through Care, Rehabilitation & Community Support")}
            >
              {language === "en" 
                ? "Compassion Through Care, Rehabilitation & Community Support" 
                : "കാരുണ്യപൂർണ്ണമായ പരിചരണവും മികച്ച പുനരധിവാസവും"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#services"
              className="w-full sm:w-auto h-13 px-8 rounded-xl bg-brand-light hover:bg-white text-brand-dark font-bold text-sm tracking-wider uppercase flex items-center justify-center transition-all duration-500 hover:-translate-y-0.5 shadow-lg active:scale-95"
              onMouseEnter={() => handleSpeech("Explore Services")}
            >
              {language === "en" ? "Explore Services" : "സേവനങ്ങൾ കാണുക"}
            </a>
            <a
              href="#donate"
              className="w-full sm:w-auto h-13 px-8 rounded-xl border border-brand-light/30 bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center transition-all duration-500 hover:-translate-y-0.5 shadow-lg"
              onMouseEnter={() => handleSpeech("Support & Donate")}
            >
              {language === "en" ? "Support & Donate" : "സംഭാവന നൽകുക"}
            </a>
          </div>

          <div className="absolute bottom-20 flex flex-col items-center gap-2 animate-bounce z-30">
            <span className="text-[10px] tracking-widest uppercase text-brand-light font-bold">
              {language === "en" ? "Scroll Down" : "താഴേക്ക് സ്ക്രോൾ ചെയ്യുക"}
            </span>
            <div className="flex h-8 w-5 justify-center rounded-full border border-brand-light/30 p-1">
              <div className="h-2 w-1.5 rounded-full bg-brand-light animate-pulse" />
            </div>
          </div>

        </div>

        {/* Elegant Curved Section Divider at bottom of Hero (Dark to Light Transition) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]" style={{ fill: "var(--background)" }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.35,27.3,160,46.33,251.13,69.49,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* ================= SECTION 1: ABOUT CARE CHARITABLE TRUST ================= */}
      <section id="about" className="pt-24 pb-32 bg-background relative overflow-hidden scroll-mt-16 reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-8 flex flex-col text-left">
              
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-black text-brand-dark bg-brand-lightest px-3 py-1 rounded-full border border-brand-light/40 w-fit block">
                  {language === "en" ? "Registered Non-Profit Organisation" : "രജിസ്റ്റർ ചെയ്ത ചാരിറ്റബിൾ ട്രസ്റ്റ്"}
                </span>
                <h2 
                  className="font-display text-4xl sm:text-6xl font-black text-brand-dark leading-tight tracking-tight"
                  onMouseEnter={() => handleSpeech("About Care Charitable Trust")}
                >
                  {language === "en" ? "Care Charitable Trust" : "കെയർ ചാരിറ്റബിൾ ട്രസ്റ്റ്"}
                </h2>
              </div>

              <div className="space-y-5 text-brand-slate text-base leading-relaxed">
                <p onMouseEnter={() => handleSpeech("Care Charitable Trust is an ethical non-profit healthcare society dedicated to bringing top-tier medical rehabilitation and community palliative care directly to the grassroots layers of society.")}>
                  {language === "en" 
                    ? "Care Charitable Trust is a registered, ethical non-profit healthcare organization founded with a singular vision: to ensure premium rehabilitative care, clinical therapy, and medical support are within reach of every individual, regardless of their financial capacity."
                    : "കെയർ ചാരിറ്റബിൾ ട്രസ്റ്റ് എന്നത് നിർധനരും അർഹരുമായ രോഗികൾക്ക് മികച്ച പുനരധിവാസ ചികിത്സകളും ഫിസിയോതെറാപ്പിയും ലഭ്യമാക്കുക എന്ന സുപ്രധാന ലക്ഷ്യത്തോടെ മലപ്പുറം എടപ്പാളിൽ പ്രവർത്തിക്കുന്ന രജിസ്റ്റർ ചെയ്ത ചാരിറ്റബിൾ സംഘടനയാണ്."}
                </p>
                <p onMouseEnter={() => handleSpeech("Located near Salafi Masjid in Edappal, Kerala, we specialize in high-quality physical therapy and multi-disciplinary community support.")}>
                  {language === "en" 
                    ? "Located near Salafi Masjid in Edappal, Kerala, the 'Care Village' rehabilitation wing offers comprehensive physical therapy completely free of cost to all patients in need. Our operations, modern equipment, and treatments are supported entirely by the compassionate contributions of our donors, well-wishers, and dedicated patrons like adil who stand by our community vision."
                    : "എടപ്പാൾ സലഫി മസ്ജിദിന് സമീപം പ്രവർത്തിക്കുന്ന 'കെയർ വില്ലേജ്' ഫിസിയോതെറാപ്പി വിഭാഗത്തിൽ വരുന്ന എല്ലാ രോഗികൾക്കും തികച്ചും സൗജന്യമായാണ് ഞങ്ങൾ മികച്ച ചികിത്സകൾ നൽകുന്നത്. ഞങ്ങളുടെ പ്രവർത്തനങ്ങളും ഫിസിയോതെറാപ്പി ഉപകരണങ്ങളും പൂർണ്ണമായും കാരുണ്യമനസ്കരും adil പോലുള്ള ഞങ്ങളെ പിന്തുണയ്ക്കുന്നവരും നൽകുന്ന സംഭാവനകൾ വഴിയാണ് മുന്നോട്ട് പോകുന്നത്."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3.5 p-4 bg-white border border-brand-light/40 rounded-2xl smooth-transition hover:border-brand-slate/40 shadow-xs">
                  <div className="h-10 w-10 flex shrink-0 items-center justify-center bg-brand-slate/10 text-brand-dark rounded-xl">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-sm text-brand-dark">{language === "en" ? "Advanced Physiotherapy" : "ആധുനിക ഫിസിയോതെറാപ്പി"}</h4>
                    <span className="text-xs text-brand-slate">{language === "en" ? "9 Specialized clinical therapies" : "9 അത്യാധുനിക ഫിസിയോതെറാപ്പികൾ"}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 bg-white border border-brand-light/40 rounded-2xl smooth-transition hover:border-brand-slate/40 shadow-xs">
                  <div className="h-10 w-10 flex shrink-0 items-center justify-center bg-brand-slate/10 text-brand-dark rounded-xl">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-sm text-brand-dark">{language === "en" ? "Community Programs" : "കമ്മ്യൂണിറ്റി പ്രോഗ്രാമുകൾ"}</h4>
                    <span className="text-xs text-brand-slate">{language === "en" ? "Outreach camps & relief support" : "സൌജന്യ ഔട്ട്രീച്ച് ക്യാമ്പുകൾ"}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 bg-white border border-brand-light/40 rounded-2xl smooth-transition hover:border-brand-slate/40 shadow-xs">
                  <div className="h-10 w-10 flex shrink-0 items-center justify-center bg-brand-slate/10 text-brand-dark rounded-xl">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-sm text-brand-dark">{language === "en" ? "Educational Support" : "വിദ്യഭ്യാസ സഹായം"}</h4>
                    <span className="text-xs text-brand-slate">{language === "en" ? "Sponsoring school supplies for children" : "കുട്ടികൾക്കായുള്ള സ്കൂൾ കിറ്റുകൾ"}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 bg-white border border-brand-light/40 rounded-2xl smooth-transition hover:border-brand-slate/40 shadow-xs">
                  <div className="h-10 w-10 flex shrink-0 items-center justify-center bg-brand-slate/10 text-brand-dark rounded-xl">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-sm text-brand-dark">{language === "en" ? "Community Welfare" : "കമ്മ്യൂണിറ്റി വെൽഫെയർ"}</h4>
                    <span className="text-xs text-brand-slate">{language === "en" ? "Relief camps & awareness programs" : "സൗജന്യ ബോധവൽക്കരണ ക്യാമ്പുകൾ"}</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden glass-panel border border-brand-light p-8 shadow-xl flex flex-col justify-between group smooth-transition hover:border-brand-slate hover:shadow-2xl">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-slate/5 blur-xl -translate-y-6 translate-x-6" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-brand-light/60 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 bg-brand-dark text-white rounded-lg flex items-center justify-center shadow-md">
                        <span className="font-display font-black text-xs text-brand-light">CV</span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-display font-black text-sm text-brand-dark block">Care Village</span>
                        <span className="text-[9px] text-brand-slate tracking-widest font-black uppercase">Edappal Center</span>
                      </div>
                    </div>
                    <span className="text-[9px] bg-green-50 text-green-700 font-bold border border-green-200/40 px-2.5 py-0.5 rounded-full uppercase">
                      Active NGO
                    </span>
                  </div>

                  <p className="font-display font-medium text-brand-dark text-sm leading-relaxed italic text-left">
                    {language === "en"
                      ? "“At Care Village, we provide premium physical therapy and rehabilitation completely free of cost for all patients. We rely entirely on the generosity of our donors to keep our care universal, human, and accessible to everyone in need.”"
                      : "“കെയർ വില്ലേജിൽ വരുന്ന ഏതൊരു രോഗിക്കും ഞങ്ങൾ ഫിസിയോതെറാപ്പിയും മറ്റ് മികച്ച ചികിത്സകളും പൂർണ്ണമായും സൗജന്യമായാണ് നൽകുന്നത്. ഈ കാരുണ്യ പ്രവർത്തനം തടസ്സമില്ലാതെ മുന്നോട്ട് കൊണ്ടുപോകുന്നതിന് നിങ്ങളുടെ ഉദാരമായ സംഭാവനകൾ ഞങ്ങൾ അഭ്യർത്ഥിക്കുന്നു.”"}
                  </p>
                </div>

                <div className="space-y-3.5 pt-4 border-t border-brand-light/60">
                  <div className="flex justify-between items-center text-xs text-brand-slate">
                    <span>{language === "en" ? "Kerala Society Registration" : "സംഘടന രജിസ്ട്രേഷൻ നമ്പർ"}</span>
                    <span className="font-bold text-brand-dark">Reg. 343/2021/IV</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-brand-slate">
                    <span>{language === "en" ? "Clinical Success Rate" : "രോഗമുക്തി നിരക്ക്"}</span>
                    <span className="font-bold text-green-600">96.8% Successful</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Elegant Wavy Section Divider (Light Background to White) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]" style={{ fill: "#FFFFFF" }}>
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86C251.13,69.49,160,46.33,90.35,27.3,57.05,18.3,26.9,8.75,0,0V120H1200V95.83C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* ================= SECTION 2: PHYSIOTHERAPY & REHABILITATION SERVICES ================= */}
      <section id="services" className="pt-24 pb-32 bg-brand-lightest scroll-mt-16 relative overflow-hidden reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-brand-slate">
              {language === "en" ? "Certified Care & Modalities" : "ശാസ്ത്രീയമായ ഫിസിയോതെറാപ്പി വിഭാഗം"}
            </span>
            <h2 
              className="font-display text-4xl sm:text-6xl font-black text-brand-dark tracking-tight"
              onMouseEnter={() => handleSpeech("Physiotherapy and Rehabilitation Services")}
            >
              {language === "en" ? "Physiotherapy & Rehabilitation" : "ഫിസിയോതെറാപ്പി സേവനങ്ങൾ"}
            </h2>
            <p 
              className="text-base text-brand-slate max-w-2xl mx-auto leading-relaxed"
              onMouseEnter={() => handleSpeech(language === "en" ? "Explore our specialized rehabilitation therapies provided completely free of charge to all patients, supported entirely by our community donors." : "രോഗികൾക്ക് പൂർണ്ണമായും സൗജന്യമായി വേദനരഹിതമായ ചലനശേഷിയും ആക്ടീവ് ബലവും നൽകുന്നതിനായി രൂപപ്പെടുത്തിയ ഫിസിയോതെറാപ്പി ചികിത്സകൾ.")}
            >
              {language === "en"
                ? "Professional, evidence-based therapy protocols designed to restore pain-free movement and active strength, provided 100% free of charge to all patients."
                : "രോഗികൾക്ക് പൂർണ്ണമായും സൗജന്യമായി വേദനരഹിതമായ ചലനശേഷിയും ആക്ടീവ് ബലവും നൽകുന്നതിനായി രൂപപ്പെടുത്തിയ ഫിസിയോതെറാപ്പി ചികിത്സകൾ."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const sTitle = isMalayalam ? service.titleHindi : service.title;
              const sDesc = isMalayalam ? service.descriptionHindi : service.description;

              return (
                <div 
                  key={service.id}
                  className="flex flex-col justify-between rounded-2xl bg-white border border-brand-light/60 p-6 shadow-xs hover-scale text-left group animate-fade-in-up"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 bg-brand-lightest text-brand-dark rounded-xl flex items-center justify-center border border-brand-light/60 group-hover:bg-brand-dark group-hover:text-white group-hover:scale-110 transition-all duration-300 shrink-0">
                        {service.iconName === "Zap" && <Zap className="h-6 w-6 stroke-[2]" />}
                        {service.iconName === "Activity" && <Activity className="h-6 w-6 stroke-[2]" />}
                        {service.iconName === "Heart" && <Heart className="h-6 w-6 stroke-[2]" />}
                        {service.iconName === "Smile" && <Smile className="h-6 w-6 stroke-[2]" />}
                        {service.iconName === "Home" && <Home className="h-6 w-6 stroke-[2]" />}
                        {service.iconName === "Flame" && <Flame className="h-6 w-6 stroke-[2]" />}
                      </div>
                      <h3 
                        className="font-display text-base sm:text-lg font-black text-brand-dark group-hover:text-brand-slate transition-colors duration-300"
                        onMouseEnter={() => handleSpeech(sTitle)}
                      >
                        {sTitle}
                      </h3>
                    </div>

                    <p 
                      className="text-xs sm:text-sm text-brand-slate leading-relaxed"
                      onMouseEnter={() => handleSpeech(sDesc)}
                    >
                      {sDesc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Elegant Curved Section Divider at bottom of Services (Light to Dark Transition) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]" style={{ fill: "var(--background)" }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.35,27.3,160,46.33,251.13,69.49,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* ================= SECTION 2B: CARE CHARITABLE TRUST CENTERPIECE ================= */}
      <section id="donate" className="pt-24 pb-32 bg-brand-lightest scroll-mt-16 relative overflow-hidden reveal-on-scroll">
        <div className="absolute top-0 right-0 h-96 w-96 bg-brand-light/30 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-brand-gray/10 rounded-full blur-3xl opacity-30 z-0 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-brand-slate">
              {language === "en" ? "Universal Free Rehabilitation" : "സുതാര്യമായ ധനസഹായ പദ്ധതി"}
            </span>
            <h2 
              className="font-display text-4xl sm:text-6xl font-black text-brand-dark tracking-tight"
              onMouseEnter={() => handleSpeech("Care Charitable Trust")}
            >
              {language === "en" ? "Care Charitable Trust" : "കെയർ ചാരിറ്റബിൾ ട്രസ്റ്റ്"}
            </h2>
            <p className="text-base text-brand-slate max-w-2xl mx-auto leading-relaxed">
              {language === "en"
                ? "Care Village provides 100% free premium clinical care. Direct your generous charity to keep this noble work fully active and self-sustaining."
                : "കെയർ വില്ലേജ് തികച്ചും സൗജന്യമായാണ് അത്യാധുനിക ചികിത്സകൾ നൽകുന്നത്. സദ്പ്രവർത്തികൾ തടസ്സമില്ലാതെ മുന്നോട്ട് കൊണ്ടുപോകാൻ സംഭാവന ചെയ്യൂ."}
            </p>
          </div>

          {/* Federal Bank and UPI Information Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* Left: Federal Bank Coordinates */}
            <div className="lg:col-span-7 rounded-2xl border border-brand-light p-8 bg-white text-left flex flex-col justify-between shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-brand-slate/10 text-brand-dark rounded-xl flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-black text-brand-dark">
                      {language === "en" ? "Direct Bank Transfer" : "ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ"}
                    </h3>
                    <span className="text-[9px] font-black uppercase text-brand-slate tracking-widest block mt-0.5">
                      {language === "en" ? "100% Tax-Exempt Audit Path" : "സുതാര്യമായ ഓഡിറ്റിംഗ്"}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm border-t border-brand-light/60 pt-5">
                  <div>
                    <span className="text-brand-slate text-[10px] font-bold block uppercase tracking-wider">{language === "en" ? "Bank Name" : "ബാങ്ക്"}</span>
                    <span className="font-bold text-brand-dark mt-0.5 block">Federal Bank</span>
                  </div>
                  <div>
                    <span className="text-brand-slate text-[10px] font-bold block uppercase tracking-wider">{language === "en" ? "Branch" : "ബ്രാഞ്ച്"}</span>
                    <span className="font-bold text-brand-dark mt-0.5 block">Edappal</span>
                  </div>
                  <div className="sm:col-span-2 border-t border-brand-light/45 pt-3">
                    <span className="text-brand-slate text-[10px] font-bold block uppercase tracking-wider">{language === "en" ? "Account Name" : "അക്കൗണ്ട് നാമം"}</span>
                    <span className="font-bold text-brand-dark mt-0.5 block">Care Charitable Trust</span>
                  </div>
                  <div className="border-t border-brand-light/45 pt-3">
                    <span className="text-brand-slate text-[10px] font-bold block uppercase tracking-wider">{language === "en" ? "Account Number" : "അക്കൗണ്ട് നമ്പർ"}</span>
                    <span className="font-mono font-bold text-brand-dark text-base mt-0.5 block tracking-wider">16970100034321</span>
                  </div>
                  <div className="border-t border-brand-light/45 pt-3">
                    <span className="text-brand-slate text-[10px] font-bold block uppercase tracking-wider">{language === "en" ? "IFSC Code" : "IFSC കോഡ്"}</span>
                    <span className="font-mono font-bold text-brand-dark text-base mt-0.5 block tracking-wider">FDRL0001697</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-light/60 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const details = `Federal Bank\nBranch: Edappal\nAccount: Care Charitable Trust\nA/C No: 16970100034321\nIFSC: FDRL0001697`;
                    navigator.clipboard.writeText(details);
                    alert(language === "en" ? "Bank details copied to clipboard!" : "ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ കോപ്പി ചെയ്തു!");
                  }}
                  className="flex-1 h-11 rounded-xl border border-brand-slate/30 bg-white hover:bg-brand-lightest text-brand-dark text-xs font-bold uppercase tracking-wider smooth-transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  {language === "en" ? "Copy Account Details" : "വിവരങ്ങൾ കോപ്പി ചെയ്യാം"}
                </button>
              </div>
            </div>

            {/* Right: UPI Coordinates */}
            <div className="lg:col-span-5 rounded-2xl border border-brand-light p-8 bg-brand-dark text-white text-left flex flex-col justify-between shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-white/10 text-white rounded-xl flex items-center justify-center">
                    <Heart className="h-5.5 w-5.5 text-brand-light fill-brand-light/10" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-black text-white">
                      {language === "en" ? "Scan & Pay / UPI ID" : "യുപിഐ വിവരങ്ങൾ"}
                    </h3>
                    <span className="text-[9px] font-black uppercase text-brand-light tracking-widest block mt-0.5">
                      {language === "en" ? "Instant Mobile Donations" : "മൊബൈൽ സംഭാവനകൾ"}
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5 space-y-4">
                  <div>
                    <span className="text-brand-light text-[10px] font-bold block uppercase tracking-wider">{language === "en" ? "Official UPI ID" : "യുപിഐ ഐഡി"}</span>
                    <span className="font-mono font-bold text-white text-lg mt-1 block tracking-wide select-all">carecharity@upi</span>
                  </div>
                  <p className="text-xs text-brand-lightest leading-relaxed">
                    {language === "en"
                      ? "Transfer directly using any payment app (GPay, PhonePe, Paytm, BHIM) to our registered non-profit UPI handle."
                      : "ഗൂഗിൾ പേ, ഫോൺ പേ, പേടിഎം തുടങ്ങിയ ഏത് ആപ്പ് വഴിയും ഞങ്ങളുടെ ഔദ്യോഗിക UPI ഐഡിയിലേക്ക് നേരിട്ട് പണം കൈമാറാം."}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("carecharity@upi");
                    alert(language === "en" ? "UPI ID copied to clipboard!" : "യുപിഐ ഐഡി കോപ്പി ചെയ്തു!");
                  }}
                  className="flex-1 h-11 rounded-xl bg-white hover:bg-brand-lightest text-brand-dark text-xs font-bold uppercase tracking-wider smooth-transition flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                >
                  {language === "en" ? "Copy UPI ID" : "യുപിഐ ഐഡി കോപ്പി ചെയ്യാം"}
                </button>
                <a
                  href={`https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(
                    language === "en"
                      ? "Hello, I have just made a donation using UPI. Please verify the receipt."
                      : "നമസ്കാരം, ഞാൻ യുപിഐ വഴി ഒരു തുക സംഭാവന ചെയ്തിട്ടുണ്ട്. ദയവായി രസീത് പരിശോധിക്കുക."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 h-11 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider smooth-transition flex items-center justify-center gap-1.5"
                >
                  {language === "en" ? "Send Receipt" : "രസീത് അയക്കാം"}
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Elegant Curved Section Divider at bottom of Donate (Light to Dark Transition) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]" style={{ fill: "var(--background)" }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.35,27.3,160,46.33,251.13,69.49,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* ================= SECTION 3: PALLIATIVE CARE & COMMUNITY SUPPORT ================= */}
      <section id="palliative" className="pt-24 pb-32 bg-background scroll-mt-16 relative overflow-hidden reveal-on-scroll">
        <div className="absolute top-1/2 left-0 h-64 w-64 bg-brand-slate/5 rounded-full blur-3xl -translate-x-1/2" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden glass-panel border border-brand-light p-8 shadow-xl flex flex-col justify-between smooth-transition hover:border-brand-slate hover:shadow-2xl">
                
                <div className="space-y-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-dark text-white shadow-lg">
                    <Heart className="h-6 w-6 text-brand-light" />
                  </div>

                  <h3 className="font-display text-xl font-black text-brand-dark text-left">
                    {language === "en" ? "Community Support Mission" : "കമ്മ്യൂണിറ്റി സപ്പോർട്ട് മിഷൻ"}
                  </h3>

                  <p className="text-sm text-brand-slate leading-relaxed text-left">
                    {language === "en"
                      ? "Our community welfare goes beyond physical treatment. We focus on enhancing the quality of life for families in distress, distributing relief materials, and providing active educational backing for their children."
                      : "കമ്മ്യൂണിറ്റി വെൽഫെയർ എന്നത് ഫിസിയോതെറാപ്പിയിൽ മാത്രം ഒതുങ്ങുന്ന ഒന്നല്ല. ബുദ്ധിമുട്ടുന്ന കുടുംബങ്ങൾക്ക് ആശ്വാസവും ജീവകാരുണ്യ പ്രവർത്തനങ്ങളും അവരുടെ കുട്ടികൾക്ക് വിദ്യാഭ്യാസ പിന്തുണയും ലഭ്യമാക്കാൻ ഞങ്ങൾ പ്രവർത്തിക്കുന്നു."}
                  </p>
                </div>



              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 flex flex-col text-left">
              
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest font-black text-brand-dark bg-brand-lightest px-3 py-1 rounded-full border border-brand-light/40 w-fit block">
                  {language === "en" ? "Charitable Outreach Wings" : "ജീവകാരുണ്യ വിഭാഗങ്ങൾ"}
                </span>
                <h2 
                  className="font-display text-4xl sm:text-6xl font-black text-brand-dark leading-tight tracking-tight"
                  onMouseEnter={() => handleSpeech("Community Welfare and Outreach")}
                >
                  {language === "en" ? "Community Welfare & Outreach" : "കമ്മ്യൂണിറ്റി വെൽഫെയർ & ഔട്ട്രീച്ച്"}
                </h2>
              </div>

              <div className="space-y-6">
                
                <div className="flex gap-4 group">
                  <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-brand-slate/10 text-brand-dark font-black text-sm group-hover:bg-brand-dark group-hover:text-white smooth-transition">1</div>
                  <div>
                    <h4 className="font-display font-black text-base text-brand-dark group-hover:text-brand-slate smooth-transition">{language === "en" ? "Community Outreach" : "കമ്മ്യൂണിറ്റി ഔട്ട്രീച്ച് (സൌജന്യ ക്യാമ്പുകൾ)"}</h4>
                    <p className="text-sm text-brand-slate mt-1 leading-relaxed">
                      {language === "en"
                        ? "Our dedicated volunteers and therapists organize routine community health checkups and mobile diagnostics, offering physical screening and posture advice for families inside Edappal and nearby villages."
                        : "എടപ്പാൾ പ്രദേശങ്ങളിലെ ജനങ്ങൾക്കായി ഞങ്ങളുടെ തെറാപ്പിസ്റ്റുകൾ സൌജന്യ മെഡിക്കൽ ക്യാമ്പുകളും ശാരീരിക പരിശോധനകളും നടത്തുന്നു."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-brand-slate/10 text-brand-dark font-black text-sm group-hover:bg-brand-dark group-hover:text-white smooth-transition">2</div>
                  <div>
                    <h4 className="font-display font-black text-base text-brand-dark group-hover:text-brand-slate smooth-transition">{language === "en" ? "Relief Programs" : "രാഹത് കിറ്റുകൾ വിതരണം"}</h4>
                    <p className="text-sm text-brand-slate mt-1 leading-relaxed">
                      {language === "en"
                        ? "Care Charitable Trust transparently coordinates and distributes crucial relief kits, including monthly grocery supplies, adult diapers, customized wheel-chairs, walking support canes, and clean water supplies to eligible BPL families."
                        : "നിർധന രോഗികൾക്ക് എല്ലാ മാസവും പലവ്യഞ്ജന കിറ്റുകൾ, അഡൽറ്റ് ഡയപ്പറുകൾ, വീൽചെയറുകൾ, വാക്കറുകൾ എന്നിവ തികച്ചും സൗജന്യമായി ട്രസ്റ്റ് വിതരണം ചെയ്യുന്നു."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-brand-slate/10 text-brand-dark font-black text-sm group-hover:bg-brand-dark group-hover:text-white smooth-transition">3</div>
                  <div>
                    <h4 className="font-display font-black text-base text-brand-dark group-hover:text-brand-slate smooth-transition">{language === "en" ? "Educational Support" : "വിദ്യാഭ്യാസ പിന്തുണ"}</h4>
                    <p className="text-sm text-brand-slate mt-1 leading-relaxed">
                      {language === "en"
                        ? "We secure the future of the younger generation. The trust sponsors direct educational grants, school supplies, textbooks, uniforms, and tuition sponsorships for underprivileged children in our community."
                        : "നിർധനരായ കുട്ടികളുടെ വിദ്യാഭ്യാസം തടസ്സപ്പെടാതിരിക്കാൻ അവർക്കുള്ള പുസ്തകങ്ങൾ, യൂണിഫോം, സ്കൂൾ ഫീസുകൾ എന്നിവ ട്രസ്റ്റ് നേരിട്ട് സ്പോൺസർ ചെയ്യുന്നു."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-brand-slate/10 text-brand-dark font-black text-sm group-hover:bg-brand-dark group-hover:text-white smooth-transition">4</div>
                  <div>
                    <h4 className="font-display font-black text-base text-brand-dark group-hover:text-brand-slate smooth-transition">{language === "en" ? "Awareness Initiatives" : "ബോധവൽക്കരണ പരിപാടികൾ"}</h4>
                    <p className="text-sm text-brand-slate mt-1 leading-relaxed">
                      {language === "en"
                        ? "We organize non-profit community orthopedic screenings, public posture awareness sessions, geriatric fall-prevention drills, and stroke symptoms recognition drives in local schools and public gatherings."
                        : "നട്ടെല്ലിന്റെ ആരോഗ്യ ഘടനകൾ, തളർവാത രോഗലക്ഷണങ്ങൾ എന്നിവയെക്കുറിച്ച് സ്കൂളുകളിലും കുടുംബശ്രീ യൂണിറ്റുകളിലും ഞങ്ങൾ സൗജന്യ ബോധവൽക്കരണം നൽകുന്നു."}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Elegant Wavy Section Divider (Light Background to White) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]" style={{ fill: "#FFFFFF" }}>
            <path d="M0,0V120H1200V0C1132.19,23.09,1055.71,15.48,985.66,31c-79,20.83-161.88,61.84-241.82,78.65-82.26,17.34-168.06,16.33-250.45-.39-57.84-11.73-114-31.07-172-41.86C251.13,54.49,160,31.33,90.35,12.3,57.05,3.3,26.9-6.25,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* ================= SECTION 4: FACILITIES & EQUIPMENT ================= */}
      <section id="facilities" className="pt-24 pb-32 bg-white scroll-mt-16 relative overflow-hidden reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-brand-slate">
              {language === "en" ? "Modern Clinical Infrastructure" : "ആധുനിക സജ്ജീകരണങ്ങൾ"}
            </span>
            <h2 
              className="font-display text-4xl sm:text-6xl font-black text-brand-dark tracking-tight"
              onMouseEnter={() => handleSpeech("Facilities & Equipment")}
            >
              {language === "en" ? "Facilities & Equipment" : "ചികിത്സാ സജ്ജീകരണങ്ങൾ"}
            </h2>
            <p className="text-base text-brand-slate max-w-2xl mx-auto leading-relaxed">
              {language === "en"
                ? "Our Care Village center features premium equipment and specialized physical therapy devices operated completely free of cost as a charitable mission."
                : "കെയർ വില്ലേജിൽ ലഭ്യമാക്കിയിട്ടുള്ള അത്യാധുനിക ഫിസിയോതെറാപ്പി ഉപകരണങ്ങളും നടത്ത പരിശീലന സാമഗ്രകളും താഴെ പറയുന്നവയാണ്. ഇവയെല്ലാം പൂർണ്ണമായും സൗജന്യമാണ്."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              {facilities.map((fac, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFacility(idx)}
                  className={`text-left p-4 rounded-xl border smooth-transition flex items-center justify-between ${
                    activeFacility === idx
                      ? "bg-brand-dark border-brand-dark text-white shadow-md transform translate-x-1"
                      : "bg-background border-brand-light text-brand-dark hover:bg-brand-lightest hover:border-brand-gray/50"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-display font-black text-sm">
                      {language === "en" ? fac.title : fac.titleHindi}
                    </span>
                    <span className={`text-[10px] mt-0.5 font-semibold ${activeFacility === idx ? "text-brand-light" : "text-brand-slate"}`}>
                      {language === "en" ? fac.useCase : fac.useCaseHindi}
                    </span>
                  </div>
                  <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${activeFacility === idx ? "text-brand-light translate-x-1" : "text-brand-slate"}`} />
                </button>
              ))}
            </div>

            <div className="lg:col-span-8">
              <div className="h-full rounded-2xl border border-brand-light p-8 md:p-10 bg-background relative overflow-hidden flex flex-col justify-between min-h-[360px] shadow-sm smooth-transition hover:border-brand-slate/40 hover:shadow-md">
                <div className="absolute top-0 right-0 h-40 w-40 bg-brand-slate/5 rounded-full blur-2xl -translate-y-6 translate-x-6" />
                
                <div className="space-y-6 relative z-10 text-left">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-brand-dark text-white flex items-center justify-center shadow-md">
                      <Activity className="h-5 w-5 text-brand-light" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-black text-brand-dark">
                        {language === "en" ? facilities[activeFacility].title : facilities[activeFacility].titleHindi}
                      </h3>
                      <span className="text-xs font-black uppercase text-brand-slate tracking-widest mt-1 block">
                        {language === "en" ? "Standard Clinical Modality" : "ഉപകരണ വിവരണം"}
                      </span>
                    </div>
                  </div>

                  <p 
                    className="text-base text-brand-slate leading-relaxed max-w-3xl"
                    onMouseEnter={() => handleSpeech(language === "en" ? facilities[activeFacility].description : facilities[activeFacility].descriptionHindi)}
                  >
                    {language === "en" ? facilities[activeFacility].description : facilities[activeFacility].descriptionHindi}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-light/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-brand-slate uppercase font-black tracking-widest">{language === "en" ? "Clinical Indication:" : "പ്രധാന ഉപയോഗം:"}</span>
                    <span className="text-sm font-black text-brand-dark mt-0.5">
                      {language === "en" ? facilities[activeFacility].useCase : facilities[activeFacility].useCaseHindi}
                    </span>
                  </div>
                  
                  <span className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-brand-light border border-brand-light/65 px-4 text-xs font-bold text-brand-dark">
                    <ShieldCheck className="h-4 w-4" />
                    <span>{language === "en" ? "100% Free of Cost" : "പൂർണ്ണമായും സൗജന്യ ചികിത്സ"}</span>
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Elegant Wavy Section Divider (White to Light Background) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]" style={{ fill: "var(--background)" }}>
            <path d="M1200,0V120H0V0C67.81,23.09,144.29,15.48,214.34,31c79,20.83,161.88,61.84,241.82,78.65,82.26,17.34,168.06,16.33,250.45-.39,57.84-11.73-114-31.07-172-41.86C948.87,54.49,1040,31.33,1109.65,12.3,1142.95,3.3,1173.1-6.25,1200,0Z"></path>
          </svg>
        </div>
      </section>

      {/* ================= SECTION 5: GALLERY & DONATION SECTION ================= */}
      <section id="gallery" className="pt-24 pb-32 bg-background scroll-mt-16 relative overflow-hidden reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-brand-slate">
              {language === "en" ? "NGO Transparency & Trust" : "സുതാര്യതയും കമ്മ്യൂണിറ്റി പിന്തുണയും"}
            </span>
            <h2 
              className="font-display text-4xl sm:text-6xl font-black text-brand-dark tracking-tight"
              onMouseEnter={() => handleSpeech("Care Village Gallery and Donation Support")}
            >
              {language === "en" ? "Gallery & Donation Support" : "ഗാലറിയും സംഭാവനയും"}
            </h2>
            <p className="text-base text-brand-slate max-w-2xl mx-auto leading-relaxed">
              {language === "en"
                ? "Explore our clean clinical environment and outreach checkups, and directly support our mission to keep clinical care 100% free for everyone."
                : "ഞങ്ങളുടെ മികച്ച ഫിസിയോതെറാപ്പി വിഭാഗം, സൗകര്യങ്ങൾ, പ്രദേശങ്ങളിൽ നടത്തിയ സൗജന്യ മെഡിക്കൽ ക്യാമ്പുകൾ എന്നിവയുടെ ദൃശ്യങ്ങൾ കാണുകയും നിർധന രോഗികൾക്ക് സൗജന്യ ചികിത്സ ഉറപ്പുവരുത്താൻ സംഭാവന ചെയ്യുകയും ചെയ്യാം."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Asymmetrical Visual Collage (7/12 Width) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-fit">
              {/* Item 1 - Large / Full Height Column */}
              <div className="relative group overflow-hidden rounded-3xl border border-brand-light/60 bg-brand-slate/10 aspect-3/4 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={galleryItems[0].url} 
                  alt={galleryItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 z-10" />
                <div className="absolute bottom-5 left-5 right-5 z-20 text-left">
                  <span className="text-[10px] bg-brand-light text-brand-dark px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider">
                    {language === "en" ? "Clinic" : "ക്ലിനിക്"}
                  </span>
                  <h4 className="font-display font-black text-sm sm:text-base text-white mt-2 leading-tight">
                    {isMalayalam ? galleryItems[0].titleHindi : galleryItems[0].title}
                  </h4>
                </div>
              </div>

              {/* Stack of two small square ones */}
              <div className="grid grid-rows-2 gap-4">
                <div className="relative group overflow-hidden rounded-3xl border border-brand-light/60 bg-brand-slate/10 aspect-square shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={galleryItems[1].url} 
                    alt={galleryItems[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 z-10" />
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
                    <h4 className="font-display font-black text-xs sm:text-sm text-white leading-tight">
                      {isMalayalam ? galleryItems[1].titleHindi : galleryItems[1].title}
                    </h4>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-3xl border border-brand-light/60 bg-brand-slate/10 aspect-square shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={galleryItems[2].url} 
                    alt={galleryItems[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 z-10" />
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
                    <h4 className="font-display font-black text-xs sm:text-sm text-white leading-tight">
                      {isMalayalam ? galleryItems[2].titleHindi : galleryItems[2].title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Item 4 - Wide Span */}
              <div className="col-span-2 relative group overflow-hidden rounded-3xl border border-brand-light/60 bg-brand-slate/10 aspect-16/9 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={galleryItems[4].url} 
                  alt={galleryItems[4].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 z-10" />
                <div className="absolute bottom-5 left-5 right-5 z-20 text-left">
                  <span className="text-[10px] bg-brand-light text-brand-dark px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider">
                    {language === "en" ? "Outreach" : "ഔട്ട്രീച്ച്"}
                  </span>
                  <h4 className="font-display font-black text-sm sm:text-base text-white mt-2 leading-tight">
                    {isMalayalam ? galleryItems[4].titleHindi : galleryItems[4].title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Right Column: Donation details & Support Panel (5/12 Width) */}
            <div className="lg:col-span-5 flex flex-col justify-between relative rounded-3xl overflow-hidden border border-brand-light/70 p-8 md:p-10 bg-white/70 backdrop-blur-md shadow-xl group smooth-transition hover:border-brand-slate/40 hover:shadow-2xl text-left">
              <div className="absolute top-0 right-0 h-48 w-48 bg-brand-lightest rounded-full blur-3xl -translate-y-8 translate-x-8 opacity-70" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-dark text-white flex items-center justify-center shadow-md">
                    <Heart className="h-5.5 w-5.5 text-brand-light fill-brand-light/10" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-brand-dark">
                      {language === "en" ? "Support Our Mission" : "ഞങ്ങളെ പിന്തുണയ്ക്കാം"}
                    </h3>
                    <span className="text-[10px] font-black uppercase text-brand-slate tracking-widest mt-0.5 block">
                      {language === "en" ? "100% Free Humanitarian Rehab" : "സൗജന്യ ഫിസിയോതെറാപ്പി സംരംഭം"}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-brand-slate leading-relaxed">
                  {language === "en" 
                    ? "Care Village relies completely on public donations and kind well-wishers to provide state-of-the-art physiotherapy treatments free of cost to underprivileged families."
                    : "നിർധന രോഗികൾക്ക് പൂർണ്ണമായും സൗജന്യമായി അത്യാധുനിക ഫിസിയോതെറാപ്പിയും മറ്റ് മികച്ച ചികിത്സകളും നൽകുന്നത് കാരുണ്യമനസ്കരായ ആളുകളുടെ സംഭാവനകൾ വഴിയാണ്."}
                </p>


                {/* GPay & UPI payment details */}
                <div className="rounded-2xl bg-brand-lightest/45 border border-brand-light/65 p-5 space-y-3.5 shadow-inner">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-wider text-brand-slate block font-mono">
                      {language === "en" ? "GPay & UPI Payment" : "ജിപേ & യുപിഐ വിവരങ്ങൾ"}
                    </span>
                    <span className="inline-flex h-4 items-center rounded-md bg-brand-dark/10 px-1.5 text-[8px] font-bold text-brand-dark uppercase tracking-widest">
                      UPI Pay
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs leading-normal">
                    <div className="text-left col-span-2">
                      <span className="text-brand-slate block text-[10px] font-bold">{language === "en" ? "GPay / PhonePe Number" : "ജിപേ / ഫോൺപേ നമ്പർ"}</span>
                      <span className="font-display font-black text-base text-brand-dark tracking-wide block">+91 8281 869769</span>
                    </div>
                    <div className="text-left col-span-2 border-t border-brand-light/40 pt-2.5 flex items-center justify-between gap-1.5">
                      <div>
                        <span className="text-brand-slate block text-[10px] font-bold">{language === "en" ? "UPI ID" : "യുപിഐ ഐഡി"}</span>
                        <span className="font-mono font-bold text-brand-dark block text-xs tracking-wide">8281869769@okaxis</span>
                      </div>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("8281869769@okaxis");
                          alert(language === "en" ? "UPI ID Copied!" : "യുപിഐ ഐഡി കോപ്പി ചെയ്തു!");
                        }}
                        className="text-[9px] font-black text-brand-dark hover:underline uppercase shrink-0 pt-3.5 cursor-pointer"
                      >
                        {language === "en" ? "Copy ID" : "കോപ്പി ചെയ്യാം"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-stretch relative z-10 w-full pt-4 border-t border-brand-light/40">
                <button
                  onClick={() => {
                    const details = `CARE CHARITABLE TRUST\nGPay / PhonePe: +91 8281 869769\nUPI ID: 8281869769@okaxis`;
                    navigator.clipboard.writeText(details);
                    alert(language === "en" ? "GPay Details Copied to Clipboard!" : "ജിപേ വിവരങ്ങൾ കോപ്പി ചെയ്തു!");
                  }}
                  className="flex-1 h-12 rounded-xl border border-brand-slate/30 bg-white hover:bg-brand-lightest text-brand-dark text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
                >
                  {language === "en" ? "Copy Details" : "വിവരങ്ങൾ കോപ്പി ചെയ്യാം"}
                </button>
                <a
                  href={`https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(
                    language === "en"
                      ? "Hello, I would like to support Care Charitable Trust with a donation. Please guide me."
                      : "നമസ്കാരം, കെയർ ചാരിറ്റബിൾ ട്രസ്റ്റിലേക്ക് സംഭാവന നൽകാൻ ഞാൻ ആഗ്രഹിക്കുന്നു. ദയവായി വിവരങ്ങൾ നൽകുക."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 h-12 rounded-xl bg-brand-dark hover:bg-brand-slate text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                >
                  {language === "en" ? "Send Receipt" : "രസീത് അയക്കാം"}
                </a>
              </div>

              <div className="mt-6 pt-3 border-t border-dashed border-brand-light flex justify-between items-center text-[10px] text-brand-slate font-bold relative z-10">
                <span>{language === "en" ? "Charitable Trust Reg No:" : "ചാരിറ്റബിൾ ട്രസ്റ്റ് രജിസ്റ്റർ നമ്പർ:"}</span>
                <span className="text-brand-dark">{clinicConfig.ngoRegNumber}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Elegant Wavy Section Divider (Light Background to White) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]" style={{ fill: "#FFFFFF" }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.35,27.3,160,46.33,251.13,69.49,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* ================= SECTION 6: COMMUNITY REVIEWS ================= */}
      <section id="reviews" className="pt-24 pb-32 bg-white scroll-mt-16 relative overflow-hidden reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-brand-slate">
              {language === "en" ? "Stories of Direct Recovery" : "രോഗമുക്തി അനുഭവിച്ചറിഞ്ഞവർ"}
            </span>
            <h2 
              className="font-display text-4xl sm:text-6xl font-black text-brand-dark tracking-tight"
              onMouseEnter={() => handleSpeech("Community Reviews")}
            >
              {language === "en" ? "What Our Community Says" : "രോഗികളുടെ പ്രതികരണങ്ങൾ"}
            </h2>
            <p className="text-base text-brand-slate max-w-2xl mx-auto leading-relaxed">
              {language === "en"
                ? "Hear honest recovery journals from stroke survivors, children, and elderly patients treated at our Edappal rehabilitation clinic."
                : "എടപ്പാൾ കെയർ വില്ലേജിൽ ചികിത്സ സ്വീകരിച്ച് വേദനകളിൽ നിന്നും പക്ഷാഘാത അവശതകളിൽ നിന്നും മോചിതരായവരുടെ പ്രതികരണങ്ങൾ."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div 
                key={idx}
                className="flex flex-col justify-between rounded-2xl bg-white border border-brand-light/60 p-6 shadow-xs hover-scale"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-brand-slate">
                      {[...Array(rev.rating)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-brand-dark bg-brand-light px-2.5 py-0.5 rounded-full border border-brand-light/80">
                      {rev.condition}
                    </span>
                  </div>

                  <p 
                    className="text-xs text-brand-slate leading-relaxed italic text-left"
                    onMouseEnter={() => handleSpeech(language === "en" ? rev.text : rev.textHindi)}
                  >
                    {language === "en" ? `“${rev.text}”` : `“${rev.textHindi}”`}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-light/50 flex items-center justify-between">
                  <div className="flex flex-col text-left">
                    <span className="font-display font-black text-sm text-brand-dark">{rev.name}</span>
                    <span className="text-[10px] text-brand-slate">{rev.location}</span>
                  </div>
                  <span className="text-[9px] text-brand-gray font-bold">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Elegant Wavy Section Divider (White to Light Background) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]" style={{ fill: "var(--background)" }}>
            <path d="M0,0V120H1200V0C1132.19,23.09,1055.71,15.48,985.66,31c-79,20.83-161.88,61.84-241.82,78.65-82.26,17.34-168.06,16.33-250.45-.39-57.84-11.73-114-31.07-172-41.86C251.13,54.49,160,31.33,90.35,12.3,57.05,3.3,26.9-6.25,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* ================= SECTION 7: MEET THE TEAM ================= */}
      <section id="team" className="pt-24 pb-32 bg-background scroll-mt-16 relative overflow-hidden reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-brand-slate">
              {language === "en" ? "Dedicated Personnel & Leaders" : "അംഗങ്ങൾ & ചികിത്സാ വിദഗ്ദ്ധർ"}
            </span>
            <h2 
              className="font-display text-4xl sm:text-6xl font-black text-brand-dark tracking-tight"
              onMouseEnter={() => handleSpeech("Meet The Team")}
            >
              {language === "en" ? "Meet Our Specialists & Officers" : "ഞങ്ങളുടെ വിദഗ്ദ്ധരും ഭാരവാഹികളും"}
            </h2>
            <p className="text-base text-brand-slate max-w-2xl mx-auto leading-relaxed">
              {language === "en"
                ? "Our certified therapists and trust management team working seamlessly to deliver absolute care."
                : "അർഹരായ രോഗികൾക്ക് സൌജന്യ ചികിത്സയും പിന്തുണയും ലഭ്യമാക്കുന്ന ഞങ്ങളുടെ വിദഗ്ദ്ധരും ട്രസ്റ്റ് ഭാരവാഹികളും."}
            </p>
          </div>

          {/* Clinical Faculty Sub-Grid */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-black text-brand-dark text-center mb-8 tracking-tight">
              {language === "en" ? "Clinical Faculty" : "ചികിത്സാ വിദഗ്ദ്ധർ"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {clinicalFaculty.map((doc) => {
                const dName = isMalayalam ? doc.nameHindi : doc.name;
                const dRole = isMalayalam ? doc.roleHindi : doc.role;

                return (
                  <div 
                    key={doc.id}
                    className="rounded-2xl bg-white border border-brand-light p-8 hover-scale flex flex-col items-center justify-between text-center group shadow-xs hover:shadow-md smooth-transition"
                  >
                    <div className="flex flex-col items-center w-full">
                      <div className="h-28 w-28 rounded-full border-3 border-brand-slate overflow-hidden mb-4 bg-brand-light/30 shrink-0 shadow-inner relative smooth-transition group-hover:border-brand-dark">
                        {doc.imagePath ? (
                          <img 
                            src={doc.imagePath} 
                            alt={doc.name} 
                            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-brand-gray bg-brand-lightest/40 uppercase font-black text-xl select-none">
                            {doc.name.charAt(4)}
                          </div>
                        )}
                      </div>
                      
                      <h4 
                        className="font-display font-black text-lg text-brand-dark group-hover:text-brand-slate transition-colors duration-300"
                        onMouseEnter={() => handleSpeech(dName)}
                      >
                        {dName}
                      </h4>

                      <span className="text-xs font-bold uppercase text-brand-slate tracking-widest mt-1.5 block">
                        {dRole}
                      </span>
                      
                      {doc.phone && (
                        <div className="mt-4 pt-3.5 border-t border-brand-light/60 w-full flex flex-col items-center">
                          <span className="text-[10px] text-brand-slate uppercase font-black tracking-widest">
                            {language === "en" ? "Direct Contact:" : "നേരിട്ടുള്ള ഫോൺ നമ്പർ:"}
                          </span>
                          <a 
                            href={`tel:${doc.phone.replace(/\s+/g, '')}`}
                            className="font-display font-black text-sm text-brand-dark mt-0.5 hover:text-brand-slate transition-colors tracking-wide"
                          >
                            {doc.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trust Committee Sub-Grid */}
          <div>
            <h3 className="font-display text-2xl font-black text-brand-dark text-center mb-8 tracking-tight">
              {language === "en" ? "Trust Committee" : "കമ്മിറ്റി അംഗങ്ങൾ"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {trustOfficers.map((officer) => {
                const oName = isMalayalam ? officer.nameHindi : officer.name;
                const oRole = isMalayalam ? officer.roleHindi : officer.role;

                return (
                  <div 
                    key={officer.id}
                    className="rounded-2xl bg-white border border-brand-light p-6 hover-scale flex flex-col items-center justify-center text-center group shadow-xs hover:shadow-md smooth-transition"
                  >
                    <div className="h-10 w-10 rounded-xl bg-brand-slate/5 text-brand-slate flex items-center justify-center mb-3">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    
                    <h4 
                      className="font-display font-bold text-sm text-brand-dark group-hover:text-brand-slate transition-colors duration-300 leading-snug"
                      onMouseEnter={() => handleSpeech(oName)}
                    >
                      {oName}
                    </h4>

                    <span className="text-[10px] font-black uppercase text-brand-slate tracking-widest mt-1.5 block">
                      {oRole}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Elegant Wavy Section Divider (Light Background to White) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]" style={{ fill: "#FFFFFF" }}>
            <path d="M1200,0V120H0V0C67.81,23.09,144.29,15.48,214.34,31c79,20.83,161.88,61.84,241.82,78.65,82.26,17.34,168.06,16.33,250.45-.39,57.84-11.73-114-31.07-172-41.86C948.87,54.49,1040,31.33,1109.65,12.3,1142.95,3.3,1173.1-6.25,1200,0Z"></path>
          </svg>
        </div>
      </section>

      {/* ================= SECTION 8: CONTACT & LOCATION ================= */}
      <section id="contact" className="pt-24 pb-24 bg-white scroll-mt-16 relative overflow-hidden reveal-on-scroll">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between text-left">
              
              <div className="space-y-4">
                <span className="text-xs font-black uppercase tracking-widest text-brand-dark bg-brand-light px-3 py-1 rounded-full border border-brand-light/40 w-fit block">
                  {language === "en" ? "Connect Instantly" : "ഞങ്ങളുമായി ബന്ധപ്പെടാം"}
                </span>
                <h2 
                  className="font-display text-4xl sm:text-6xl font-black text-brand-dark leading-tight tracking-tight"
                  onMouseEnter={() => handleSpeech("Contact and Location")}
                >
                  {language === "en" ? "Contact & Location" : "സമ്പർക്കം & മേൽവിലാസം"}
                </h2>
                <p className="text-sm text-brand-slate leading-relaxed">
                  {language === "en"
                    ? "Reach out directly via phone, email, WhatsApp, or drop by our premium rehabilitation center in Edappal, Kerala."
                    : "സമ്പർക്ക ഫോണിലൂടെയോ വാട്സാപ്പിലൂടെയോ സലഫി മസ്ജിദിന് സമീപമുള്ള ഞങ്ങളുടെ എടപ്പാൾ ഫിസിയോതെറാപ്പി കേന്ദ്രത്തിലോ ബന്ധപ്പെടാവുന്നതാണ്."}
                </p>
              </div>

              <div className="space-y-4 py-4 border-y border-brand-light/60">
                <div className="flex items-start gap-3.5 text-sm">
                  <MapPin className="h-5 w-5 text-brand-slate shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-brand-dark block">{language === "en" ? "Registered NGO Address" : "രജിസ്റ്റർ ചെയ്ത വിലാസം"}</span>
                    <span className="text-brand-slate text-xs mt-1 block leading-relaxed">{clinicConfig.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm">
                  <Phone className="h-5 w-5 text-brand-slate shrink-0" />
                  <div>
                    <span className="font-bold text-brand-dark block">{language === "en" ? "Coordinator Phone" : "കോർഡിനേറ്റർ ഫോൺ"}</span>
                    <a href={`tel:${clinicConfig.phone}`} className="text-brand-slate text-xs mt-0.5 block hover:text-brand-dark transition-colors">{clinicConfig.phoneFormatted}</a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm">
                  <Mail className="h-5 w-5 text-brand-slate shrink-0" />
                  <div>
                    <span className="font-bold text-brand-dark block">{language === "en" ? "Official Email" : "ഇമെയിൽ വിലാസം"}</span>
                    <a href={`mailto:${clinicConfig.email}`} className="text-brand-slate text-xs mt-0.5 block hover:text-brand-dark transition-colors">{clinicConfig.email}</a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-brand-slate font-semibold leading-normal">
                  {language === "en"
                    ? "Need a fast slot or want to volunteer? Trigger a direct chat on WhatsApp with our desk coordinator."
                    : "കൂടുതൽ വിവരങ്ങൾ വേഗത്തിൽ അറിയാൻ താഴെയുള്ള വാട്സാപ്പ് ബട്ടൺ ക്ലിക്ക് ചെയ്ത് ഞങ്ങളുടെ കോർഡിനേറ്ററുമായി ബന്ധപ്പെടാവുന്നതാണ്."}
                </p>
                <a
                  href={`https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(clinicConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-fit h-13 px-6 rounded-xl bg-brand-dark hover:bg-brand-slate text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 smooth-transition shadow-md active:scale-95"
                >
                  <MessageCircle className="h-5.5 w-5.5 text-brand-light" />
                  <span>{language === "en" ? "Chat on WhatsApp" : "വാട്സാപ്പിൽ സന്ദേശം അയക്കാം"}</span>
                </a>
              </div>

            </div>

            <div className="lg:col-span-7">
              <div className="w-full h-full min-h-[400px] rounded-2xl border border-brand-light overflow-hidden shadow-sm relative bg-brand-lightest/30">
                <iframe
                  title="Care Village Edappal Google Map"
                  src={clinicConfig.googleMapsIframeUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Floating Scroll-Spy Sidebar Dots Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4 bg-white/40 border border-brand-light/40 backdrop-blur-md px-2.5 py-5 rounded-full shadow-lg">
        {scrollSections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="group relative flex items-center justify-center h-4 w-4"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(sec.id);
                if (target) {
                  const offset = 80;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
            >
              {isActive && (
                <span className="absolute h-5.5 w-5.5 rounded-full border border-brand-slate/40 animate-ping opacity-60" />
              )}
              <div 
                className={`h-2.5 w-2.5 rounded-full smooth-transition ${
                  isActive 
                    ? "bg-brand-dark scale-125 ring-2 ring-brand-slate ring-offset-2 ring-offset-white" 
                    : "bg-brand-gray/50 hover:bg-brand-slate group-hover:scale-110"
                }`}
              />
              <div className="absolute right-7 pointer-events-none opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 smooth-transition flex items-center">
                <div className="bg-brand-dark/95 backdrop-blur-md border border-brand-slate/20 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl whitespace-nowrap shadow-md">
                  {language === "en" ? sec.label : sec.labelMl}
                </div>
                <div className="h-1.5 w-1.5 bg-brand-dark border-r border-t border-brand-slate/20 rotate-45 -translate-x-1" />
              </div>
            </a>
          );
        })}
      </div>

    </div>
  );
}
