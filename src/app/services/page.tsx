"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useAccessibility } from "../../context/AccessibilityContext";
import { servicesData } from "../../data/servicesData";
import ServiceCard from "../../components/ServiceCard";
import { Activity } from "lucide-react";

export default function Services() {
  const { t, language } = useLanguage();
  const { speakText } = useAccessibility();

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  return (
    <div className="w-full space-y-16 pb-20 pt-8 sm:pt-12 bg-background">
      
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div 
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-lightest border border-brand-light/60 px-3.5 py-1 text-xs font-bold text-brand-slate"
          onMouseEnter={() => handleSpeech(language === "en" ? "Subsidized Medical Rehabilitation" : "സബ്സിഡി പുനരധിവാസ ചികിത്സ")}
        >
          <Activity className="h-3.5 w-3.5 text-brand-slate" />
          <span>{language === "en" ? "Subsidized Medical Rehabilitation" : "സബ്സിഡി പുനരധിവാസ ചികിത്സ"}</span>
        </div>
        <h1 
          className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-brand-slate"
          onMouseEnter={() => handleSpeech(t.servicesTitle)}
        >
          {t.servicesTitle}
        </h1>
        <p 
          className="text-brand-slate/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium"
          onMouseEnter={() => handleSpeech(t.servicesSubtitle)}
        >
          {t.servicesSubtitle}
        </p>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
            />
          ))}
        </div>
      </section>

    </div>
  );
}
