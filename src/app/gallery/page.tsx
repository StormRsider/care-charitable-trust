"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useAccessibility } from "../../context/AccessibilityContext";
import { galleryData, GalleryItem } from "../../data/galleryData";
import { Camera, Layers, Activity, Tent, Shield, Eye, X, ZoomIn } from "lucide-react";

export default function Gallery() {
  const { t, language } = useLanguage();
  const { speakText } = useAccessibility();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  const tabs = [
    { id: "all", label: t.galleryTabAll, icon: Layers },
    { id: "clinic", label: t.galleryTabClinic, icon: Shield },
    { id: "equipment", label: t.galleryTabEquipment, icon: Activity },
    { id: "rooms", label: t.galleryTabRooms, icon: Eye },
    { id: "camps", label: t.galleryTabCamps, icon: Tent }
  ];

  const filteredItems = activeTab === "all" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeTab);

  // Dynamically resolve category color profiles
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "clinic": return "from-teal-500 to-teal-700 bg-teal-500";
      case "equipment": return "from-emerald-500 to-emerald-700 bg-emerald-500";
      case "rooms": return "from-sky-500 to-sky-700 bg-sky-500";
      case "camps": return "from-orange-550 to-orange-700 bg-orange-500";
      default: return "from-stone-500 to-stone-700 bg-stone-500";
    }
  };

  return (
    <div className="w-full space-y-16 pb-20 pt-8 sm:pt-12">
      
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div 
          className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/50 dark:border-teal-900/40 px-3.5 py-1 text-xs font-bold text-teal-700 dark:text-teal-400"
          onMouseEnter={() => handleSpeech(t.galleryTitle)}
        >
          <Camera className="h-3.5 w-3.5" />
          <span>{language === "en" ? "Visual Transparency" : "दृश्य पारदर्शिता"}</span>
        </div>
        <h1 
          className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-stone-900 dark:text-white"
          onMouseEnter={() => handleSpeech(t.galleryTitle)}
        >
          {t.galleryTitle}
        </h1>
        <p 
          className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          onMouseEnter={() => handleSpeech(t.gallerySubtitle)}
        >
          {t.gallerySubtitle}
        </p>
      </section>

      {/* Tabs Filter Bar */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2.5 justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`h-10 rounded-xl px-4.5 text-xs font-bold transition-all flex items-center gap-2 border ${
                isActive 
                  ? "bg-teal-600 border-teal-600 text-white dark:bg-teal-500 dark:border-teal-500 shadow-sm"
                  : "bg-white border-border-color hover:bg-stone-50 text-stone-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-stone-300"
              }`}
              onMouseEnter={() => handleSpeech(tab.label)}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </section>

      {/* Gallery Cards Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const title = language === "en" ? item.title : item.titleHindi;
            const desc = language === "en" ? item.description : item.descriptionHindi;
            const hasImageFailed = failedImages[item.id] || !item.imagePath;

            return (
              <div 
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group rounded-2xl bg-white dark:bg-slate-800 border border-border-color overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer text-left flex flex-col justify-between"
              >
                
                {/* Image Area */}
                <div className="aspect-4/3 w-full relative overflow-hidden bg-stone-100 dark:bg-slate-900 border-b border-border-color flex items-center justify-center text-white text-center">
                  {!hasImageFailed ? (
                    <img 
                      src={item.imagePath} 
                      alt={title}
                      onError={() => setFailedImages(prev => ({ ...prev, [item.id]: true }))}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(item.category)} flex items-center justify-center p-6 text-white text-center`}>
                      {/* Subtle decorative mesh */}
                      <div className="absolute inset-0 bg-white/5 opacity-50 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                      
                      {/* Core Icon representing missing image */}
                      <div className="relative text-white/90 space-y-2 flex flex-col items-center">
                        <Camera className="h-10 w-10 stroke-[1.25]" />
                        <span className="text-[10px] font-black tracking-widest uppercase bg-black/25 px-2.5 py-0.5 rounded-full block border border-white/10">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Overlay hover effect */}
                  <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="h-11 w-11 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Footer Details */}
                <div className="p-5 space-y-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    Care Charitable Trust Project
                  </span>
                  <h4 
                    className="text-sm font-extrabold text-stone-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug"
                    onMouseEnter={() => handleSpeech(title)}
                  >
                    {title}
                  </h4>
                  <p 
                    className="text-xs text-stone-500 dark:text-stone-300 leading-relaxed"
                    onMouseEnter={() => handleSpeech(desc)}
                  >
                    {desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal Overlay */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close btn */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center backdrop-blur-xs transition-colors z-10"
              title={t.galleryClose}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Large Image Area */}
            <div className="aspect-video w-full relative overflow-hidden bg-stone-100 dark:bg-slate-900 border-b border-border-color flex items-center justify-center text-white text-center">
              {!(failedImages[selectedItem.id] || !selectedItem.imagePath) ? (
                <img 
                  src={selectedItem.imagePath} 
                  alt={language === "en" ? selectedItem.title : selectedItem.titleHindi}
                  onError={() => setFailedImages(prev => ({ ...prev, [selectedItem.id]: true }))}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(selectedItem.category)} flex items-center justify-center p-8 text-white text-center`}>
                  <div className="absolute inset-0 bg-white/5 opacity-50 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
                  
                  <div className="relative space-y-4 flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                      <Camera className="h-8 w-8 stroke-[1.25]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-black tracking-widest uppercase bg-black/30 px-3 py-1 rounded-full border border-white/10">
                        Category: {selectedItem.category}
                      </span>
                      <p className="text-[10px] text-white/50 pt-1 leading-none select-none">
                        {language === "en" ? "(Interactive Lightbox Mockup)" : "(इंटरैक्टिव लाइटबॉक्स मॉकअप)"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Info details */}
            <div className="p-6 space-y-4 text-left">
              <div className="space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400">
                  {language === "en" ? "Trust Gallery Asset" : "ट्रस्ट गैलरी संपत्ति"}
                </span>
                <h3 
                  className="text-lg font-black text-stone-900 dark:text-white leading-tight"
                  onMouseEnter={() => handleSpeech(language === "en" ? selectedItem.title : selectedItem.titleHindi)}
                >
                  {language === "en" ? selectedItem.title : selectedItem.titleHindi}
                </h3>
              </div>
              <p 
                className="text-xs sm:text-sm text-stone-500 dark:text-stone-300 leading-relaxed"
                onMouseEnter={() => handleSpeech(language === "en" ? selectedItem.description : selectedItem.descriptionHindi)}
              >
                {language === "en" ? selectedItem.description : selectedItem.descriptionHindi}
              </p>
              
              <div className="pt-4 border-t border-stone-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-stone-400">
                <span>{language === "en" ? "Edappal Clinic" : "എടപ്പാൾ ക്ലിനിക്"}</span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-teal-650 hover:underline"
                >
                  {t.galleryClose}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
