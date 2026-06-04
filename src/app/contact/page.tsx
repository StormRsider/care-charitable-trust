"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useAccessibility } from "../../context/AccessibilityContext";
import { clinicConfig } from "../../data/clinicConfig";
import { servicesData } from "../../data/servicesData";
import { Mail, Phone, Clock, MessageSquare, Send, CheckCircle2, MapPin } from "lucide-react";

export default function Contact() {
  const { t, language } = useLanguage();
  const { speakText } = useAccessibility();
  
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("general");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Dynamic Open Status State
  const [isOpenNow, setIsOpenNow] = useState(true);

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  // Determine if clinic is currently open based on current local time
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 6 is Saturday, 1-5 is weekday
      const hour = now.getHours();

      if (day === 0) {
        // Sunday
        setIsOpenNow(false);
      } else if (day === 6) {
        // Saturday (9 AM - 4 PM)
        setIsOpenNow(hour >= 9 && hour < 16);
      } else {
        // Weekdays (9 AM - 7 PM)
        setIsOpenNow(hour >= 9 && hour < 19);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;

    setIsSubmitting(true);

    // Simulate clinical client-side mock submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setInquiryType("general");
      setMessage("");
    }, 1500);
  };

  const currentTimings = language === "en" ? clinicConfig.timings : clinicConfig.timingsHindi;

  return (
    <div className="w-full space-y-16 pb-20 pt-8 sm:pt-12">
      
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div 
          className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/50 dark:border-teal-900/40 px-3.5 py-1 text-xs font-bold text-teal-700 dark:text-teal-400"
          onMouseEnter={() => handleSpeech(t.contactTitle)}
        >
          <Mail className="h-3.5 w-3.5" />
          <span>{language === "en" ? "Immediate Clinical Assistance" : "त्वरित नैदानिक सहायता"}</span>
        </div>
        <h1 
          className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-stone-900 dark:text-white"
          onMouseEnter={() => handleSpeech(t.contactTitle)}
        >
          {t.contactTitle}
        </h1>
        <p 
          className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          onMouseEnter={() => handleSpeech(t.contactSubtitle)}
        >
          {t.contactSubtitle}
        </p>
      </section>

      {/* Main Content Info & Form Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Contact Details & Map (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-8 text-left">
            
            {/* Status & Contact listing Card */}
            <div className="rounded-2xl border border-border-color bg-white dark:bg-slate-800 p-6 space-y-6 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-teal-500/5 blur-xl -translate-y-6 translate-x-6" />
              
              {/* Dynamic Clinic Status */}
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-slate-700 pb-4">
                <span className="text-xs font-black uppercase tracking-wider text-stone-400">
                  {language === "en" ? "Operational Status" : "संचालन स्थिति"}
                </span>
                <span className={`inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full border ${
                  isOpenNow 
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/40"
                    : "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900/40"
                }`}>
                  <span className={`h-2 w-2 rounded-full ${isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`} />
                  {isOpenNow ? t.contactStatusOpen : t.contactStatusClosed}
                </span>
              </div>

              {/* Timing Schedule details */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="block text-[10px] font-black text-stone-400 uppercase tracking-widest leading-none">
                      {t.contactTimingsHeader}
                    </span>
                    <div className="text-xs font-semibold text-stone-750 dark:text-stone-200 space-y-1.5 pt-1.5">
                      <div className="flex justify-between gap-6" onMouseEnter={() => handleSpeech(`${currentTimings.weekdays} ${currentTimings.weekdaysTiming}`)}>
                        <span className="text-stone-450">{currentTimings.weekdays}</span>
                        <span className="font-extrabold">{currentTimings.weekdaysTiming}</span>
                      </div>
                      <div className="flex justify-between gap-6" onMouseEnter={() => handleSpeech(`${currentTimings.saturday} ${currentTimings.saturdayTiming}`)}>
                        <span className="text-stone-450">{currentTimings.saturday}</span>
                        <span className="font-extrabold">{currentTimings.saturdayTiming}</span>
                      </div>
                      <div className="flex justify-between gap-6" onMouseEnter={() => handleSpeech(`${currentTimings.sunday} ${currentTimings.sundayTiming}`)}>
                        <span className="text-stone-450">{currentTimings.sunday}</span>
                        <span className="font-extrabold text-orange-600 dark:text-orange-400">{currentTimings.sundayTiming}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Immediate Quick Actions */}
              <div className="pt-4 border-t border-stone-100 dark:border-slate-700/60 space-y-3">
                
                {/* Whatsapp */}
                <a
                  href={`https://wa.me/${clinicConfig.whatsappNumber}?text=${encodeURIComponent(clinicConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white transition-all shadow-xs"
                >
                  <MessageSquare className="h-4.5 w-4.5" />
                  <span>{t.contactWhatsAppBtn}</span>
                </a>

                {/* Call */}
                <a
                  href={`tel:${clinicConfig.phone}`}
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-teal-200/50 bg-teal-50 hover:bg-teal-100 text-teal-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-teal-400 dark:border-teal-900/40 text-xs font-bold transition-all"
                >
                  <Phone className="h-4.5 w-4.5" />
                  <span>{t.contactCallBtn} ({clinicConfig.phoneFormatted})</span>
                </a>

              </div>

            </div>

            {/* Address & Maps Box */}
            <div className="rounded-2xl border border-border-color bg-white dark:bg-slate-800 p-6 space-y-4 shadow-xs">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="block text-[10px] font-black text-stone-400 uppercase tracking-widest leading-none">
                    {language === "en" ? "Clinic Address" : "क्लिनिक का पता"}
                  </span>
                  <p 
                    className="text-xs font-semibold text-stone-750 dark:text-stone-200 leading-relaxed pt-1"
                    onMouseEnter={() => handleSpeech(clinicConfig.address)}
                  >
                    {clinicConfig.address}
                  </p>
                </div>
              </div>

              {/* Map Iframe */}
              <div className="w-full aspect-16/9 rounded-xl overflow-hidden border border-stone-200 dark:border-slate-700">
                <iframe
                  title="Care Physiotherapy Clinic Location Map"
                  src={clinicConfig.googleMapsIframeUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column - Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border-color bg-white dark:bg-slate-800 p-6 sm:p-8 shadow-xs text-left">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 
                      className="text-lg sm:text-xl font-black text-stone-900 dark:text-white"
                      onMouseEnter={() => handleSpeech(t.contactFormHeader)}
                    >
                      {t.contactFormHeader}
                    </h3>
                    <p 
                      className="text-xs text-stone-500 dark:text-stone-400"
                      onMouseEnter={() => handleSpeech(t.contactFormSub)}
                    >
                      {t.contactFormSub}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-400">
                        {t.contactName} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={language === "en" ? "Enter your full name" : "अपना पूरा नाम लिखें"}
                        className="w-full h-11 px-4.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-colors text-stone-850 dark:text-white"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-400">
                        {t.contactPhone} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={language === "en" ? "Enter phone number" : "फ़ोन नंबर दर्ज करें"}
                        className="w-full h-11 px-4.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-colors text-stone-850 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-400">
                        {t.contactEmail}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@domain.com"
                        className="w-full h-11 px-4.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-colors text-stone-850 dark:text-white"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-stone-400">
                        {t.contactService}
                      </label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full h-11 px-4.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-colors text-stone-850 dark:text-white"
                      >
                        <option value="general">{language === "en" ? "General Inquiry" : "सामान्य पूछताछ"}</option>
                        <option value="bpl-free">{language === "en" ? "NPO BPL Free Scheme" : "NPO ബിപിഎൽ സൗജന്യ പദ്ധതി"}</option>
                        {servicesData.map(s => (
                          <option key={s.id} value={s.id}>
                            {language === "en" ? s.title : s.titleHindi}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-stone-400">
                      {t.contactMessage} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={language === "en" ? "Write your message or inquiry here..." : "अपना संदेश या विवरण यहाँ लिखें..."}
                      rows={5}
                      className="w-full p-4.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-colors resize-none text-stone-850 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-xs font-bold text-white transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>{t.contactSending}</span>
                    ) : (
                      <>
                        <span>{t.contactBtnSend}</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>

                </form>
              ) : (
                /* Success visual celebration card */
                <div className="text-center py-12 space-y-6 animate-scale-up">
                  <div className="h-16 w-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-250/20 text-emerald-500 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 
                      className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white"
                      onMouseEnter={() => handleSpeech(t.contactSuccessTitle)}
                    >
                      {t.contactSuccessTitle}
                    </h3>
                    <p 
                      className="text-xs sm:text-sm text-stone-500 dark:text-stone-300 max-w-md mx-auto leading-relaxed"
                      onMouseEnter={() => handleSpeech(t.contactSuccessDesc)}
                    >
                      {t.contactSuccessDesc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-dashed border-stone-100 dark:border-slate-700 max-w-sm mx-auto space-y-4">
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                      {language === "en" ? "Trust Ticket Reference" : "ट्रस्ट टिकट संदर्भ"}
                    </p>
                    <div className="bg-stone-50 dark:bg-slate-900 rounded-xl px-4 py-2 text-xs font-mono font-black select-all text-teal-650 dark:text-teal-400 border border-border-color">
                      CCT-MSG-{Math.floor(100000 + Math.random() * 900000)}
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="h-10 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-teal-450 dark:border-teal-900/40 border border-teal-200/20 px-6 text-xs font-bold transition-all mt-4"
                  >
                    {language === "en" ? "Send Another Message" : "एक और संदेश भेजें"}
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
