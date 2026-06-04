"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useAccessibility } from "../../context/AccessibilityContext";
import { outreachData } from "../../data/outreachData";
import { Heart, Tent, Sparkles, ShieldCheck, CheckCircle2, HelpingHand, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Outreach() {
  const { t, language } = useLanguage();
  const { speakText } = useAccessibility();

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  return (
    <div className="w-full space-y-16 pb-20 pt-8 sm:pt-12">
      
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div 
          className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/50 dark:border-teal-900/40 px-3.5 py-1 text-xs font-bold text-teal-700 dark:text-teal-400"
          onMouseEnter={() => handleSpeech(t.outreachTitle)}
        >
          <Tent className="h-3.5 w-3.5" />
          <span>{language === "en" ? "Grassroots Healthcare Integration" : "जमीनी स्तर पर स्वास्थ्य सेवा एकीकरण"}</span>
        </div>
        <h1 
          className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-stone-900 dark:text-white"
          onMouseEnter={() => handleSpeech(t.outreachTitle)}
        >
          {t.outreachTitle}
        </h1>
        <p 
          className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          onMouseEnter={() => handleSpeech(t.outreachSubtitle)}
        >
          {t.outreachSubtitle}
        </p>
      </section>

      {/* Numerical Impact Summary */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-stone-50 dark:bg-slate-900/40 border border-border-color rounded-2xl p-6">
          {Object.entries(outreachData.stats).map(([key, stat]) => {
            const label = language === "en" ? stat.label : stat.labelHindi;
            return (
              <div 
                key={key} 
                className="flex flex-col items-center text-center space-y-2 border-r border-stone-200/50 dark:border-slate-800 last:border-0 p-4"
              >
                <span className="text-3xl font-black text-teal-600 dark:text-teal-400 tracking-tight">
                  {stat.value}
                </span>
                <span 
                  className="text-xs font-bold text-stone-500 dark:text-stone-300 leading-snug"
                  onMouseEnter={() => handleSpeech(label)}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Initiatives Timeline */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10 border-b border-stone-200/40 dark:border-slate-800/40 pb-4">
          <h2 
            className="font-sans text-2xl font-black text-stone-900 dark:text-white"
            onMouseEnter={() => handleSpeech(language === "en" ? "Ongoing Outreach Camps" : "सक्रिय आउटरीच शिविर")}
          >
            {language === "en" ? "Ongoing Outreach Camps" : "सक्रिय आउटरीच शिविर"}
          </h2>
          <p className="text-xs text-stone-450 mt-1">
            {language === "en" ? "How we take therapeutic healing directly to underserved rural/urban sectors" : "कैसे हम सीधे चिकित्सा उपचार को पिछड़े क्षेत्रों में ले जाते हैं"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {outreachData.initiatives.map((init) => {
            const title = language === "en" ? init.title : init.titleHindi;
            const desc = language === "en" ? init.description : init.descriptionHindi;
            const sched = language === "en" ? init.schedule : init.scheduleHindi;
            const imp = language === "en" ? init.impactLabel : init.impactLabelHindi;

            return (
              <div 
                key={init.id}
                className="flex flex-col rounded-2xl bg-white dark:bg-slate-800 border border-border-color p-6 hover:shadow-lg transition-all group overflow-hidden relative justify-between"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-teal-500/5 blur-xl -translate-y-6 translate-x-6" />
                
                <div className="space-y-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 border border-teal-200/40">
                    <Tent className="h-5 w-5" />
                  </div>
                  
                  <h4 
                    className="text-base font-black text-stone-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
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

                <div className="mt-6 pt-4 border-t border-dashed border-stone-150 dark:border-slate-700 space-y-3">
                  <div className="text-[10px] font-bold text-stone-400 flex items-start gap-1.5 text-left">
                    <span className="text-teal-650 dark:text-teal-400 shrink-0">📅</span>
                    <span onMouseEnter={() => handleSpeech(sched)}>{sched}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-250/20 text-emerald-700 dark:text-emerald-400 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider">
                    <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                    <span onMouseEnter={() => handleSpeech(imp)}>{imp}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Free Eligibility Tiers */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10 border-b border-stone-200/40 dark:border-slate-800/40 pb-4">
          <h2 
            className="font-sans text-2xl font-black text-stone-900 dark:text-white"
            onMouseEnter={() => handleSpeech(language === "en" ? "Free Treatment Schemes (BPL)" : "मुफ्त इलाज योजना पात्रता (बीपीएल)")}
          >
            {language === "en" ? "Free Treatment Schemes (BPL)" : "मुफ्त इलाज योजना पात्रता (बीपीएल)"}
          </h2>
          <p className="text-xs text-stone-450 mt-1">
            {language === "en" ? "Eligibility criteria for receiving 100% sponsored clinical physiotherapy services" : "पूरी तरह से प्रायोजित नैदानिक फिजियोथेरेपी प्राप्त करने के नियम और पात्रता विवरण"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {outreachData.criteria.map((crit, idx) => {
            const label = language === "en" ? crit.label : crit.labelHindi;
            const detail = language === "en" ? crit.detail : crit.detailHindi;

            return (
              <div 
                key={idx}
                className="flex flex-col rounded-2xl bg-white dark:bg-slate-800 border border-border-color p-6 hover:shadow-lg transition-all text-left justify-between"
              >
                <div className="space-y-4">
                  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  
                  <h4 
                    className="text-sm font-extrabold text-stone-900 dark:text-white leading-snug"
                    onMouseEnter={() => handleSpeech(label)}
                  >
                    {label}
                  </h4>
                  
                  <p 
                    className="text-xs text-stone-500 dark:text-stone-300 leading-relaxed"
                    onMouseEnter={() => handleSpeech(detail)}
                  >
                    {detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100 dark:border-slate-700 text-[10px] font-bold text-teal-650 tracking-wider uppercase">
                  ⭐ Care Trust Guarantee
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Trust Integrity & Donation transparency */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-tr from-stone-900 to-teal-950 text-white p-8 text-left space-y-6 overflow-hidden relative shadow-xl">
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-teal-500/10 blur-xl translate-x-8 -translate-y-8" />
          
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h4 
                className="text-base font-extrabold text-orange-200 uppercase tracking-widest block"
                onMouseEnter={() => handleSpeech(t.outreachIntegrityTitle)}
              >
                {t.outreachIntegrityTitle}
              </h4>
              <p className="text-xs text-stone-450">
                Registered non-profit license: <span className="font-mono text-stone-200 select-all">NPO-REG-2024/98765-DL</span>
              </p>
            </div>
          </div>

          <p 
            className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl"
            onMouseEnter={() => handleSpeech(t.outreachIntegrityDesc)}
          >
            {t.outreachIntegrityDesc}
          </p>

          <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <span className="text-[11px] font-bold text-stone-400">
              {language === "en" ? "Interested in joining or funding our camps?" : "हमारे शिविरों में शामिल होने या दान देने में रुचि रखते हैं?"}
            </span>
            <Link
              href="/contact"
              className="flex h-10 items-center gap-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-xs font-bold text-white transition-all shadow-sm px-6"
            >
              <span>{language === "en" ? "Get in Touch" : "क्लिनिक से जुड़ें"}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
