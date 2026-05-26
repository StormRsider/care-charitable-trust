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

  const renderTeamGrid = (list: TeamMember[], showVisiting: boolean) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((m) => {
          const name = language === "en" ? m.name : m.nameHindi;
          const role = language === "en" ? m.role : m.roleHindi;
          const spec = language === "en" ? m.spec : m.specHindi;
          const exp = language === "en" ? `${m.exp} ${t.teamExp}` : m.expHindi;
          const qual = language === "en" ? m.qualifications : m.qualificationsHindi;
          const bio = language === "en" ? m.bio : m.bioHindi;
          const vHours = language === "en" ? m.visitingHours : m.visitingHoursHindi;

          return (
            <div 
              key={m.id}
              className="flex flex-col rounded-2xl bg-white dark:bg-slate-800 border border-border-color hover:border-teal-500/30 dark:hover:border-teal-500/20 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              
              {/* Premium image fallback area */}
              <div className="aspect-square w-full relative overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50/50 dark:from-slate-850 dark:to-slate-900 border-b border-border-color flex flex-col items-center justify-center p-6 text-center">
                
                {!(failedImages[m.id] || !m.imagePath) ? (
                  <img
                    src={m.imagePath}
                    alt={name}
                    onError={() => setFailedImages(prev => ({ ...prev, [m.id]: true }))}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* Simulated high-fidelity avatar icon block */
                  <div className="h-28 w-28 rounded-full bg-white dark:bg-slate-800 border border-teal-200/50 dark:border-teal-900/60 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm relative group-hover:scale-105 transition-transform duration-300">
                    <Users className="h-12 w-12 stroke-[1.25]" />
                    
                    {/* Trust Verified Badge */}
                    <span className="absolute bottom-0 right-0 h-7 w-7 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white dark:border-slate-800 shadow-xs z-10">
                      <ClipboardCheck className="h-4 w-4" />
                    </span>
                  </div>
                )}

                {/* If the image loaded successfully, show a floating verified badge */}
                {!(failedImages[m.id] || !m.imagePath) && (
                  <span className="absolute bottom-4 right-4 h-7 w-7 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white dark:border-slate-800 shadow-xs z-10">
                    <ClipboardCheck className="h-4 w-4" />
                  </span>
                )}

                <div className="mt-6 space-y-1 relative z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-3 rounded-xl">
                  <h4 
                    className="text-base sm:text-lg font-black text-stone-900 dark:text-white"
                    onMouseEnter={() => handleSpeech(name)}
                  >
                    {name}
                  </h4>
                  <p 
                    className="text-xs text-stone-400 font-extrabold uppercase tracking-widest"
                    onMouseEnter={() => handleSpeech(role)}
                  >
                    {role}
                  </p>
                  <p 
                    className="text-xs text-teal-600 dark:text-teal-400 font-bold"
                    onMouseEnter={() => handleSpeech(spec)}
                  >
                    {spec}
                  </p>
                </div>

              </div>

              {/* Body Text */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  
                  {/* Credentials / Experience pills */}
                  <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                    <span className="bg-stone-50 dark:bg-slate-700 border border-border-color text-stone-700 dark:text-stone-300 px-2 py-0.5 rounded-md">
                      🎓 {qual}
                    </span>
                    <span className="bg-teal-50/60 dark:bg-teal-950/40 border border-teal-200/40 text-teal-700 dark:text-teal-400 px-2 py-0.5 rounded-md">
                      ⭐ {exp}
                    </span>
                  </div>

                  {/* License Info */}
                  <p className="text-[10px] font-semibold text-stone-400">
                    🔍 {t.teamVerifiedLicense}: <span className="font-mono text-stone-600 dark:text-stone-300 select-all">{m.regNumber}</span>
                  </p>

                  <p 
                    className="text-xs text-stone-500 dark:text-stone-300 leading-relaxed"
                    onMouseEnter={() => handleSpeech(bio)}
                  >
                    {bio}
                  </p>
                </div>

                {/* Visiting Hours (Volunteers only) */}
                {showVisiting && vHours && (
                  <div 
                    className="mt-2 p-3.5 rounded-xl bg-orange-50/50 dark:bg-slate-850 border border-orange-200/40 dark:border-orange-950/40 flex items-start gap-2.5 text-left"
                    onMouseEnter={() => handleSpeech(vHours)}
                  >
                    <Clock className="h-4.5 w-4.5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest leading-none">
                        {language === "en" ? "Visiting Consultation Hours" : "परामर्श का समय"}
                      </span>
                      <p className="text-xs font-bold text-stone-800 dark:text-stone-100 mt-1.5 leading-snug">
                        {vHours}
                      </p>
                    </div>
                  </div>
                )}

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
        {renderTeamGrid(therapists, false)}
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
        {renderTeamGrid(volunteers, true)}
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
