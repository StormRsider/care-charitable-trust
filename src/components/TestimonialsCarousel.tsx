"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useAccessibility } from "../context/AccessibilityContext";
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  UserRound, 
  HeartHandshake 
} from "lucide-react";

interface Testimonial {
  name: string;
  nameHindi: string;
  age: number;
  role: string;
  roleHindi: string;
  quote: string;
  quoteHindi: string;
  recoveryType: string;
  recoveryTypeHindi: string;
  costTier: string;
  costTierHindi: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Mr. Ramesh Kumar",
    nameHindi: "श्री रमेश कुमार",
    age: 62,
    role: "Retired School Teacher & Stroke Survivor",
    roleHindi: "सेवानिवृत्त शिक्षक एवं लकवा (स्ट्रोक) विजेता",
    quote: "After my severe stroke, I lost complete control of my left arm and leg. Private clinics were charging ₹1,500 per session. Care Clinic treated me under their free NGO scheme for 6 months. Today, I can walk independently and hold my grandkids. They gave me my dignity back.",
    quoteHindi: "गंभीर पक्षाघात (लकवा) के बाद, मैंने अपने बाएं हाथ और पैर का नियंत्रण पूरी तरह खो दिया था। निजी क्लीनिक प्रति सत्र ₹1,500 चार्ज कर रहे थे। केयर क्लिनिक ने एनजीओ योजना के तहत 6 महीने तक मेरा मुफ्त इलाज किया। आज मैं स्वतंत्र रूप से चल सकता हूं। उन्होंने मुझे मेरा सम्मान वापस दिया।",
    recoveryType: "Neurological Stroke Rehab",
    recoveryTypeHindi: "न्यूरोलॉजिकल स्ट्रोक पुनर्वास",
    costTier: "100% Free NGO Care Scheme",
    costTierHindi: "100% निःशुल्क एनजीओ योजना"
  },
  {
    name: "Miss Aisha Patel",
    nameHindi: "कु. आयशा पटेल",
    age: 19,
    role: "State Level Track Athlete",
    roleHindi: "राज्य स्तरीय धाविका (एथलीट)",
    quote: "A severe knee ligament sprain threatened to end my running season. Dr. Rohan at Care Trust put me on an intensive manual mobilization and strengthening routine. The subsidized rate of ₹100 per session was a blessing for my family. I am back on the track now, pain-free!",
    quoteHindi: "घुटने के लिगामेंट की गंभीर चोट ने मेरे रनिंग सीजन को खत्म करने की धमकी दी थी। केयर ट्रस्ट के डॉ. रोहन ने मुझे एक गहन व्यायाम और मजबूत बनाने की दिनचर्या में रखा। ₹100 प्रति सत्र की रियायती दर मेरे परिवार के लिए वरदान थी। मैं अब ट्रैक पर वापस आ गई हूं, वो भी बिना दर्द के!",
    recoveryType: "Sports Injury Rehab",
    recoveryTypeHindi: "खेल चोट पुनर्वास (स्पोर्ट्स रिहैब)",
    costTier: "Highly Subsidized Sports Tier",
    costTierHindi: "अत्यधिक रियायती खेल कोटा"
  },
  {
    name: "Mr. Gurpreet Singh",
    nameHindi: "श्री गुरप्रीत सिंह",
    age: 44,
    role: "Construction Worker",
    roleHindi: "निर्माण श्रमिक (मजदूर)",
    quote: "Chronic lower back pain meant I couldn't stand for more than 15 minutes, which meant no daily wage for my household. The therapists here used ultrasound and traction to realign my spine. They even taught me exercises to do during construction work. I am earning again.",
    quoteHindi: "पीठ के पुराने दर्द के कारण मैं 15 मिनट से अधिक खड़ा नहीं हो पाता था, जिसका मतलब था कि मेरे घर में कोई मजदूरी नहीं आ रही थी। यहाँ के डॉक्टरों ने अल्ट्रासाउंड और ट्रैक्शन का उपयोग करके मेरी रीढ़ को ठीक किया। मुझे व्यायाम भी सिखाए। मैं फिर से काम कर रहा हूँ।",
    recoveryType: "Chronic Pain Management",
    recoveryTypeHindi: "दीर्घकालिक दर्द प्रबंधन",
    costTier: "Waived Clinic Fee Tier",
    costTierHindi: "पूर्णतः माफ क्लिनिक शुल्क"
  }
];

export default function TestimonialsCarousel() {
  const { language } = useLanguage();
  const { reducedMotion, speakText } = useAccessibility();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  }, []);

  // Autoplay functionality, respecting reduced-motion
  useEffect(() => {
    if (reducedMotion) return; // Halt autoplay if reduced motion is requested
    
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext, reducedMotion]);

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  const activeTestimonial = testimonialsData[activeIndex];

  if (!activeTestimonial) return null;

  return (
    <div className="relative mx-auto max-w-4xl rounded-2xl bg-white dark:bg-slate-800 border border-border-color p-8 sm:p-12 shadow-md dark:shadow-teal-900/5 transition-all duration-300">
      
      {/* Absolute Quote Mark */}
      <Quote className="absolute left-6 top-6 h-12 w-12 text-teal-100 dark:text-teal-900/40 fill-teal-50 dark:fill-transparent stroke-[1]" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        
        {/* Cost Tier Badge */}
        <div className="flex items-center gap-1.5 rounded-full bg-teal-50 dark:bg-teal-950/50 px-3.5 py-1 text-xs font-bold text-teal-700 dark:text-teal-400 border border-teal-200/40 dark:border-teal-900/40 transition-colors">
          <HeartHandshake className="h-3.5 w-3.5" />
          <span onMouseEnter={() => handleSpeech(language === "en" ? activeTestimonial.costTier : activeTestimonial.costTierHindi)}>
            {language === "en" ? activeTestimonial.costTier : activeTestimonial.costTierHindi}
          </span>
        </div>

        {/* Testimonial Quote Text */}
        <p 
          className="text-base sm:text-lg font-medium italic text-stone-850 dark:text-stone-100 leading-relaxed max-w-3xl"
          onMouseEnter={() => handleSpeech(language === "en" ? activeTestimonial.quote : activeTestimonial.quoteHindi)}
        >
          &ldquo;{language === "en" ? activeTestimonial.quote : activeTestimonial.quoteHindi}&rdquo;
        </p>

        {/* Patient Profile */}
        <div className="flex items-center gap-3 pt-2 text-left">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 dark:bg-slate-700 text-stone-500 dark:text-stone-300 border border-border-color">
            <UserRound className="h-5 w-5" />
          </div>
          <div>
            <h5 
              className="text-sm font-bold text-stone-900 dark:text-white leading-tight"
              onMouseEnter={() => handleSpeech(language === "en" ? activeTestimonial.name : activeTestimonial.nameHindi)}
            >
              {language === "en" ? activeTestimonial.name : activeTestimonial.nameHindi}, {activeTestimonial.age} yrs
            </h5>
            <p className="text-xs text-stone-400 font-semibold">{language === "en" ? activeTestimonial.role : activeTestimonial.roleHindi}</p>
            <p className="text-[10px] text-teal-600 dark:text-teal-400 font-extrabold uppercase tracking-wide mt-0.5">
              💡 {language === "en" ? activeTestimonial.recoveryType : activeTestimonial.recoveryTypeHindi}
            </p>
          </div>
        </div>

      </div>

      {/* Manual Left/Right Arrows */}
      <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white hover:bg-stone-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-stone-600 dark:text-stone-300 border border-border-color shadow-sm active:scale-95 transition-all"
          title="Previous Testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white hover:bg-stone-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-stone-600 dark:text-stone-300 border border-border-color shadow-sm active:scale-95 transition-all"
          title="Next Testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="mt-8 flex justify-center gap-1.5">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === index ? "w-6 bg-teal-600 dark:bg-teal-500" : "w-1.5 bg-stone-200 dark:bg-slate-700"
            }`}
            title={`Slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
