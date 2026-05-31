"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useAccessibility } from "../../context/AccessibilityContext";
import { teamData, TeamMember } from "../../data/teamData";
import { Heart, Users, Star, ClipboardCheck, Clock } from "lucide-react";

export default function Team() {
  const { t, language } = useLanguage();
  const { speakText } = useAccessibility();
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  const therapists = teamData.filter(m => !m.isVolunteer);
  const volunteers = teamData.filter(m => m.isVolunteer);

  const renderTeamGrid = (list: TeamMember[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {list.map((m) => {
          const name = language === "en" ? m.name : m.nameHindi;
          const role = language === "en" ? m.role : m.roleHindi;

          return (
            <div 
              key={m.id}
              className="rounded-2xl bg-white border border-brand-light p-6 hover-scale flex flex-col items-center text-center group"
            >
              <div className="flex flex-col items-center">
                <div className="h-28 w-28 rounded-full border-3 border-brand-slate overflow-hidden mb-4 bg-brand-light/30 shrink-0 shadow-inner relative smooth-transition group-hover:border-brand-dark">
                  <div className="absolute inset-0 flex items-center justify-center text-brand-gray bg-brand-lightest/40 uppercase font-black text-xl select-none">
                    {m.name.charAt(4)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-slate/20 to-brand-slate/10 group-hover:scale-105 transition-transform duration-500" />
                </div>

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
          onMouseEnter={() => handleSpeech(t.teamTitle)}
        >
          <Users className="h-3.5 w-3.5" />
          <span>{language === "en" ? "Qualified Medical Team" : "योग्य चिकित्सा टीम"}</span>
        </div>
        <h1 
          className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-stone-900 dark:text-white"
          onMouseEnter={() => handleSpeech(t.teamTitle)}
        >
          {t.teamTitle}
        </h1>
        <p 
          className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          onMouseEnter={() => handleSpeech(t.teamSubtitle)}
        >
          {t.teamSubtitle}
        </p>
      </section>

      {/* Core Therapists */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8 border-b border-stone-200/40 dark:border-slate-800/40 pb-4">
          <h2 
            className="font-sans text-2xl font-black text-stone-900 dark:text-white"
            onMouseEnter={() => handleSpeech(language === "en" ? "Clinical Therapists" : "नैदानिक फिजियोथेरेपिस्ट")}
          >
            {language === "en" ? "Clinical Therapists" : "नैदानिक फिजियोथेरेपिस्ट"}
          </h2>
          <p className="text-xs text-stone-450 mt-1">
            {language === "en" ? "Full-time certified practitioners on desk" : "क्लिनिक में पूर्णकालिक प्रमाणित विशेषज्ञ डॉक्टर"}
          </p>
        </div>
        {renderTeamGrid(therapists)}
      </section>

      {/* Volunteer Specialists */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8 border-b border-stone-200/40 dark:border-slate-800/40 pb-4">
          <h2 
            className="font-sans text-2xl font-black text-stone-900 dark:text-white"
            onMouseEnter={() => handleSpeech(t.teamVolunteerTitle)}
          >
            {t.teamVolunteerTitle}
          </h2>
          <p 
            className="text-xs text-stone-450 mt-1"
            onMouseEnter={() => handleSpeech(t.teamVolunteerSubtitle)}
          >
            {t.teamVolunteerSubtitle}
          </p>
        </div>
        {renderTeamGrid(volunteers)}
      </section>

      {/* Final note on integrity */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-stone-50 dark:bg-slate-900/40 border border-border-color p-8 text-center space-y-4">
          <Star className="h-7 w-7 text-teal-600 dark:text-teal-400 mx-auto" />
          <h4 
            className="text-base font-bold text-stone-900 dark:text-white"
            onMouseEnter={() => handleSpeech(language === "en" ? "Volunteering Surgeons & Integrity Statement" : "स्वयंसेवक सर्जनों और सत्यनिष्ठा का विवरण")}
          >
            {language === "en" ? "Volunteering Surgeons & Integrity Statement" : "स्वयंसेवक सर्जनों और सत्यनिष्ठा का विवरण"}
          </h4>
          <p 
            className="text-xs sm:text-sm text-stone-500 dark:text-stone-300 leading-relaxed max-w-xl mx-auto"
            onMouseEnter={() => handleSpeech(language === "en" ? "Our visiting consultants do not charge any fees for consultations held at the Care Charitable Trust. They dedicate their hours to help underprivileged community patients." : "हमारे स्वयंसेवक विशेषज्ञ डॉक्टर केयर क्लिनिक में परामर्श के लिए कोई शुल्क नहीं लेते हैं। वे वंचित रोगियों की सहायता के लिए अपना समय समर्पित करते हैं।")}
          >
            {language === "en"
              ? "All consulting orthopedists and neurologists provide diagnostics on a fully voluntary basis. Prior registration via our desk coordinator is required to avoid wait times on consultation days."
              : "सभी सलाहकार हड्डी रोग विशेषज्ञ और न्यूरोलॉजिस्ट पूरी तरह से स्वैच्छिक आधार पर निदान प्रदान करते हैं। परामर्श के दिनों में प्रतीक्षा समय से बचने के लिए हमारे डेस्क समन्वयक के माध्यम से पूर्व पंजीकरण आवश्यक है।"}
          </p>
        </div>
      </section>

    </div>
  );
}
