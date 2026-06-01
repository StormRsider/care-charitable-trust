"use client";
 
import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useAccessibility } from "../../context/AccessibilityContext";
import { clinicalFaculty, trustOfficers, TeamMember } from "../../data/teamData";
import { Heart, Users, Star, ShieldCheck, Activity } from "lucide-react";
 
export default function Team() {
  const { t, language } = useLanguage();
  const { speakText } = useAccessibility();
 
  const handleSpeech = (text: string) => {
    speakText(text);
  };
 
  const therapists = clinicalFaculty;
  const trustees = trustOfficers;
 
  const renderTeamGrid = (list: TeamMember[], showPics: boolean) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center">
        {list.map((m) => {
          const name = language === "en" ? m.name : m.nameHindi;
          const role = language === "en" ? m.role : m.roleHindi;
 
          return (
            <div 
              key={m.id}
              className="rounded-2xl bg-white border border-brand-light p-6 hover-scale flex flex-col items-center text-center group shadow-xs hover:shadow-md smooth-transition"
            >
              <div className="flex flex-col items-center">
                {showPics ? (
                  <div className="h-28 w-28 rounded-full border-3 border-brand-slate overflow-hidden mb-4 bg-brand-light/30 shrink-0 shadow-inner relative smooth-transition group-hover:border-brand-dark">
                    {m.imagePath ? (
                      <img 
                        src={m.imagePath} 
                        alt={m.name} 
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-brand-gray bg-brand-lightest/40 uppercase font-black text-xl select-none">
                        {m.name.charAt(4)}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-10 w-10 rounded-xl bg-brand-slate/5 text-brand-slate flex items-center justify-center mb-3">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                )}
 
                <h4 
                  className="font-display font-black text-base text-brand-dark group-hover:text-brand-slate transition-colors duration-300"
                  onMouseEnter={() => handleSpeech(name)}
                >
                  {name}
                </h4>
 
                <span className="text-xs font-bold uppercase text-brand-slate tracking-widest mt-1.5 block">
                  {role}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
 
  return (
    <div className="w-full space-y-16 pb-20 pt-8 sm:pt-12">
      
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div 
          className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/50 dark:border-teal-900/40 px-3.5 py-1 text-xs font-bold text-teal-700 dark:text-teal-400"
          onMouseEnter={() => handleSpeech("Qualified Medical Team")}
        >
          <Users className="h-3.5 w-3.5" />
          <span>{language === "en" ? "Qualified Medical Team" : "കെയർ വില്ലേജ് പ്രവർത്തകർ"}</span>
        </div>
        <h1 
          className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-stone-900 dark:text-white"
          onMouseEnter={() => handleSpeech("Meet Our Team")}
        >
          {language === "en" ? "Meet Our Team" : "ഞങ്ങളുടെ ടീം"}
        </h1>
        <p 
          className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          onMouseEnter={() => handleSpeech("Executive members and clinical therapists dedicated to community rehabilitation")}
        >
          {language === "en" 
            ? "Executive members and clinical therapists dedicated to community rehabilitation."
            : "നിർധന രോഗികൾക്ക് സൗജന്യ ചികിത്സയും മികച്ച പുനരധിവാസവും നൽകാൻ പ്രതിജ്ഞാബദ്ധരായ ഭാരവാഹികളും ചികിത്സാ വിദഗ്ദ്ധരും."}
        </p>
      </section>
 
      {/* Core Therapists */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8 border-b border-stone-200/40 dark:border-slate-800/40 pb-4">
          <h2 
            className="font-sans text-2xl font-black text-stone-900 dark:text-white"
            onMouseEnter={() => handleSpeech("Clinical Therapists")}
          >
            {language === "en" ? "Clinical Therapists" : "ചികിത്സാ വിദഗ്ദ്ധർ"}
          </h2>
          <p className="text-xs text-stone-450 mt-1">
            {language === "en" ? "Full-time certified practitioners on desk" : "ക്ലിനിക്കിൽ സേവനമനുഷ്ഠിക്കുന്ന സാക്ഷ്യപ്പെടുത്തിയ ഡോക്ടർമാർ"}
          </p>
        </div>
        {renderTeamGrid(therapists, true)}
      </section>
 
      {/* Trust Committee */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8 border-b border-stone-200/40 dark:border-slate-800/40 pb-4">
          <h2 
            className="font-sans text-2xl font-black text-stone-900 dark:text-white"
            onMouseEnter={() => handleSpeech("Trust Committee")}
          >
            {language === "en" ? "Trust Committee" : "കമ്മിറ്റി അംഗങ്ങൾ"}
          </h2>
          <p className="text-xs text-stone-450 mt-1">
            {language === "en" ? "Executive members governing the charity wing" : "ജീവകാരുണ്യ പ്രവർത്തനങ്ങൾക്ക് നേതൃത്വം നൽകുന്ന കമ്മിറ്റി ഭാരവാഹികൾ"}
          </p>
        </div>
        {renderTeamGrid(trustees, false)}
      </section>
 
      {/* Final note on integrity */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-stone-50 dark:bg-slate-900/40 border border-border-color p-8 text-center space-y-4">
          <Star className="h-7 w-7 text-teal-600 dark:text-teal-400 mx-auto" />
          <h4 
            className="text-base font-bold text-stone-900 dark:text-white"
            onMouseEnter={() => handleSpeech("Charitable Integrity Statement")}
          >
            {language === "en" ? "Charitable Integrity Statement" : "ജീവകാരുണ്യ നയം"}
          </h4>
          <p 
            className="text-xs sm:text-sm text-stone-500 dark:text-stone-300 leading-relaxed max-w-xl mx-auto"
            onMouseEnter={() => handleSpeech("All services are fully supported by donations from well-wishers and our noble patrons.")}
          >
            {language === "en"
              ? "All consulting therapists and trust executives serve purely on a non-profit voluntary basis. Our rehabilitation clinical care is 100% free of charge to all patients, funded entirely by public contributions and kind sponsors."
              : "കെയർ ചാരിറ്റബിൾ ട്രസ്റ്റിന് കീഴിലുള്ള ചികിത്സകളും സേവനങ്ങളും തികച്ചും സൗജന്യമാണ്. കാരുണ്യമനസ്കരുടെയും സ്പോൺസർമാരുടെയും ഉദാരമായ സംഭാവനകൾ കൊണ്ടാണ് ഈ സുപ്രധാന സംരംഭം മുന്നോട്ട് പോകുന്നത്."}
          </p>
        </div>
      </section>
 
    </div>
  );
}
