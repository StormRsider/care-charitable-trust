"use client";

import React from "react";
import { ServiceItem } from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";
import { useAccessibility } from "../context/AccessibilityContext";
import * as LucideIcons from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { language } = useLanguage();
  const { speakText } = useAccessibility();

  // Dynamically resolve Lucide Icon from string name
  const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Activity;

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  const title = language === "en" ? service.title : service.titleHindi;
  const description = language === "en" ? service.description : service.descriptionHindi;
  const billing = language === "en" ? service.billingType : service.billingTypeHindi;

  return (
    <div className="flex flex-col rounded-2xl bg-white border border-brand-light/60 shadow-xs hover-scale transition-all duration-300 overflow-hidden group p-6 text-left">
      
      {/* Top Graphic Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-lightest border border-brand-light/60 text-brand-dark group-hover:bg-brand-dark group-hover:text-white group-hover:scale-110 transition-all duration-300">
          <IconComponent className="h-6 w-6 stroke-[2]" />
        </div>
        <div>
          <h4 
            className="text-base sm:text-lg font-black text-brand-dark leading-tight group-hover:text-brand-slate transition-colors"
            onMouseEnter={() => handleSpeech(title)}
          >
            {title}
          </h4>
        </div>
      </div>

      {/* Description */}
      <div className="flex-1">
        <p 
          className="text-xs sm:text-sm text-brand-slate leading-relaxed"
          onMouseEnter={() => handleSpeech(description)}
        >
          {description}
        </p>
      </div>

    </div>
  );
}
