"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useAccessibility } from "../context/AccessibilityContext";
import { servicesData } from "../data/servicesData";
import { clinicalFaculty } from "../data/teamData";
import { 
  X, 
  User, 
  Calendar, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  ShieldAlert,
  Sparkles
} from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string; // Pre-fills the service selector
}

export default function AppointmentModal({ isOpen, onClose, preselectedServiceId }: AppointmentModalProps) {
  const { t, language } = useLanguage();
  const { speakText } = useAccessibility();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    a11yNeeds: "",
    serviceId: "",
    therapistId: "first-available",
    date: "",
    timeSlot: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [availableDates, setAvailableDates] = useState<Array<{ dateStr: string; label: string; labelHindi: string }>>([]);

  // Clear states on open/close
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSuccess(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        age: "",
        a11yNeeds: "",
        serviceId: preselectedServiceId || servicesData[0]?.id || "",
        therapistId: "first-available",
        date: "",
        timeSlot: ""
      });
      setFormErrors({});
      generateAvailableDates();
    }
  }, [isOpen, preselectedServiceId]);

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  // Generate next 6 open days (skipping Sundays)
  const generateAvailableDates = () => {
    const dates: Array<{ dateStr: string; label: string; labelHindi: string }> = [];
    let tempDate = new Date();
    
    while (dates.length < 6) {
      tempDate.setDate(tempDate.getDate() + 1);
      // Skip Sundays (0)
      if (tempDate.getDay() !== 0) {
        const dateString = tempDate.toISOString().split("T")[0];
        
        // English formatting
        const optionsEn: Intl.DateTimeFormatOptions = { weekday: "short", month: "short", day: "numeric" };
        const labelEn = tempDate.toLocaleDateString("en-US", optionsEn);

        // Hindi formatting
        const daysHindi = ["सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"];
        const dayName = daysHindi[tempDate.getDay() - 1] || "शनि";
        const dateNum = tempDate.getDate();
        const monthsHindi = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
        const monthName = monthsHindi[tempDate.getMonth()];
        const labelHi = `${dayName}, ${dateNum} ${monthName}`;

        dates.push({
          dateStr: dateString,
          label: labelEn,
          labelHindi: labelHi
        });
      }
    }
    setAvailableDates(dates);
    if (dates[0]) {
      setFormData(prev => ({ ...prev, date: dates[0].dateStr }));
    }
  };

  const validateStep = () => {
    const errors: Record<string, string> = {};
    if (step === 1) {
      if (!formData.name.trim()) errors.name = language === "en" ? "Name is required" : "नाम आवश्यक है";
      if (!formData.phone.trim()) {
        errors.phone = language === "en" ? "Phone is required" : "फ़ोन नंबर आवश्यक है";
      } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone)) {
        errors.phone = language === "en" ? "Invalid phone format" : "अमान्य फ़ोन प्रारूप";
      }
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = language === "en" ? "Invalid email address" : "अमान्य ईमेल पता";
      }
      if (!formData.age.trim()) {
        errors.age = language === "en" ? "Age is required" : "आयु आवश्यक है";
      }
    } else if (step === 2) {
      if (!formData.serviceId) errors.serviceId = language === "en" ? "Please select a service" : "कृपया एक सेवा चुनें";
    } else if (step === 3) {
      if (!formData.date) errors.date = language === "en" ? "Please select a date" : "कृपया एक तारीख चुनें";
      if (!formData.timeSlot) errors.timeSlot = language === "en" ? "Please select a time slot" : "कृपया एक समय चुनें";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
      handleSpeech(language === "en" ? `Proceeding to Step ${step + 1}` : `चरण ${step + 1} पर जा रहे हैं`);
    } else {
      handleSpeech(language === "en" ? "Please resolve form errors before proceeding" : "कृपया आगे बढ़ने से पहले फॉर्म त्रुटियों को ठीक करें");
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      setIsSuccess(true);
      handleSpeech(t.modalConfirmTitle + ". " + t.modalConfirmDesc);
    }
  };

  const timeSlots = [
    { value: "09:30 AM", label: "09:30 AM (Morning)", labelHindi: "सुबह 09:30" },
    { value: "11:00 AM", label: "11:00 AM (Morning)", labelHindi: "सुबह 11:00" },
    { value: "02:30 PM", label: "02:30 PM (Afternoon)", labelHindi: "दोपहर 02:30" },
    { value: "04:00 PM", label: "04:00 PM (Afternoon)", labelHindi: "दोपहर 04:00" },
    { value: "05:30 PM", label: "05:30 PM (Evening)", labelHindi: "शाम 05:30" },
    { value: "06:30 PM", label: "06:30 PM (Evening)", labelHindi: "शाम 06:30" }
  ];

  if (!isOpen) return null;

  const selectedService = servicesData.find(s => s.id === formData.serviceId);
  const selectedTherapist = clinicalFaculty.find(t => t.id === formData.therapistId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in transition-colors duration-300">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 dark:bg-black/80 backdrop-blur-xs" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-border-color shadow-2xl transition-all duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-stone-500 hover:text-stone-850 dark:text-stone-300 transition-colors"
          title="Close Modal"
          onMouseEnter={() => handleSpeech(t.galleryClose)}
        >
          <X className="h-4.5 w-4.5" />
        </button>

        {/* Form Body */}
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            
            {/* Step Counter Indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                <span>{t.modalTitle}</span>
                <span className="text-teal-600 dark:text-teal-400">{step} / 4</span>
              </div>
              <div className="mt-2 flex h-1.5 w-full rounded-full bg-stone-100 dark:bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-teal-600 dark:bg-teal-500 transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* Step Content */}
            <div className="min-h-[220px] transition-all">
              
              {/* STEP 1: Patient Profile */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-stone-900 dark:text-white flex items-center gap-1.5" onMouseEnter={() => handleSpeech(t.modalStep1)}>
                    <User className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    {t.modalStep1}
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <label className="block text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase">{t.contactName} *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className={`mt-1 block w-full rounded-xl border border-border-color bg-stone-50 dark:bg-slate-800 px-3 py-2 text-sm text-stone-900 dark:text-white focus:border-teal-500 focus:outline-hidden ${formErrors.name ? "border-red-500" : ""}`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && <span className="text-[10px] text-red-500 mt-1 block">{formErrors.name}</span>}
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase">{t.modalAge} *</label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                        className={`mt-1 block w-full rounded-xl border border-border-color bg-stone-50 dark:bg-slate-800 px-3 py-2 text-sm text-stone-900 dark:text-white focus:border-teal-500 focus:outline-hidden ${formErrors.age ? "border-red-500" : ""}`}
                        placeholder="45"
                        min="1"
                        max="120"
                      />
                      {formErrors.age && <span className="text-[10px] text-red-500 mt-1 block">{formErrors.age}</span>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase">{t.contactPhone} *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className={`mt-1 block w-full rounded-xl border border-border-color bg-stone-50 dark:bg-slate-800 px-3 py-2 text-sm text-stone-900 dark:text-white focus:border-teal-500 focus:outline-hidden ${formErrors.phone ? "border-red-500" : ""}`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {formErrors.phone && <span className="text-[10px] text-red-500 mt-1 block">{formErrors.phone}</span>}
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase">{t.modalA11yReq}</label>
                    <input
                      type="text"
                      value={formData.a11yNeeds}
                      onChange={(e) => setFormData(prev => ({ ...prev, a11yNeeds: e.target.value }))}
                      className="mt-1 block w-full rounded-xl border border-border-color bg-stone-50 dark:bg-slate-800 px-3 py-2 text-sm text-stone-900 dark:text-white focus:border-teal-500 focus:outline-hidden"
                      placeholder="e.g. Wheelchair assistance, ground floor booth"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Service & Specialist */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-base font-bold text-stone-900 dark:text-white flex items-center gap-1.5" onMouseEnter={() => handleSpeech(t.modalStep2)}>
                    <Sparkles className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    {t.modalStep2}
                  </h3>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase">{t.contactService} *</label>
                    <select
                      value={formData.serviceId}
                      onChange={(e) => setFormData(prev => ({ ...prev, serviceId: e.target.value }))}
                      className="mt-1 block w-full rounded-xl border border-border-color bg-stone-50 dark:bg-slate-800 px-3 py-2.5 text-sm text-stone-900 dark:text-white focus:border-teal-500 focus:outline-hidden"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.id}>
                          {language === "en" ? s.title : s.titleHindi}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase">{t.modalSelectTherapist}</label>
                    <select
                      value={formData.therapistId}
                      onChange={(e) => setFormData(prev => ({ ...prev, therapistId: e.target.value }))}
                      className="mt-1 block w-full rounded-xl border border-border-color bg-stone-50 dark:bg-slate-800 px-3 py-2.5 text-sm text-stone-900 dark:text-white focus:border-teal-500 focus:outline-hidden"
                    >
                      <option value="first-available">⭐ {t.modalFirstAvailable}</option>
                      {clinicalFaculty.map((td) => (
                        <option key={td.id} value={td.id}>
                          {language === "en" ? td.name : td.nameHindi} ({language === "en" ? td.role : td.roleHindi})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 3: Schedule Date & Time */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-base font-bold text-stone-900 dark:text-white flex items-center gap-1.5" onMouseEnter={() => handleSpeech(t.modalStep3)}>
                    <Calendar className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    {t.modalStep3}
                  </h3>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase mb-2">{t.modalSelectDate} *</label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableDates.map((item) => {
                        const isDateSelected = formData.date === item.dateStr;
                        return (
                          <button
                            type="button"
                            key={item.dateStr}
                            onClick={() => setFormData(prev => ({ ...prev, date: item.dateStr }))}
                            className={`flex flex-col items-center justify-center rounded-xl p-2.5 border text-center transition-all ${
                              isDateSelected
                                ? "bg-teal-600 border-teal-600 text-white dark:bg-teal-500 dark:border-teal-500"
                                : "border-border-color bg-stone-50 dark:bg-slate-800 hover:bg-stone-100 dark:hover:bg-slate-700 text-stone-800 dark:text-stone-200"
                            }`}
                            onMouseEnter={() => handleSpeech(language === "en" ? item.label : item.labelHindi)}
                          >
                            <span className="text-[10px] font-bold uppercase opacity-80">
                              {language === "en" ? item.label.split(",")[0] : item.labelHindi.split(",")[0]}
                            </span>
                            <span className="text-xs font-black mt-1">
                              {language === "en" ? item.label.split(" ")[1] + " " + item.label.split(" ")[2] : item.labelHindi.split(",")[1]}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase mb-2">{t.modalSelectTime} *</label>
                    <div className="grid grid-cols-2 gap-2 max-h-[140px] overflow-y-auto pr-1">
                      {timeSlots.map((ts) => {
                        const isTimeSelected = formData.timeSlot === ts.value;
                        return (
                          <button
                            type="button"
                            key={ts.value}
                            onClick={() => setFormData(prev => ({ ...prev, timeSlot: ts.value }))}
                            className={`flex items-center gap-2 rounded-xl p-2.5 border text-left transition-all ${
                              isTimeSelected
                                ? "bg-teal-600 border-teal-600 text-white dark:bg-teal-500 dark:border-teal-500"
                                : "border-border-color bg-stone-50 dark:bg-slate-800 hover:bg-stone-100 dark:hover:bg-slate-700 text-stone-850 dark:text-stone-200"
                            }`}
                            onMouseEnter={() => handleSpeech(language === "en" ? ts.label : ts.labelHindi)}
                          >
                            <Clock className={`h-4 w-4 ${isTimeSelected ? "text-white" : "text-teal-600 dark:text-teal-400"}`} />
                            <span className="text-xs font-bold">{language === "en" ? ts.value : ts.labelHindi}</span>
                          </button>
                        );
                      })}
                    </div>
                    {formErrors.timeSlot && <span className="text-[10px] text-red-500 mt-1 block">{formErrors.timeSlot}</span>}
                  </div>
                </div>
              )}

              {/* STEP 4: Review and Confirm */}
              {step === 4 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-base font-bold text-stone-900 dark:text-white flex items-center gap-1.5" onMouseEnter={() => handleSpeech(t.modalStep4)}>
                    <ShieldAlert className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    {t.modalStep4}
                  </h3>
                  
                  <div className="rounded-xl border border-border-color bg-stone-50 dark:bg-slate-800 p-4 space-y-3.5 text-xs transition-colors">
                    <div className="flex justify-between border-b border-stone-200/40 dark:border-stone-750 pb-2">
                      <span className="font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">{t.contactName}</span>
                      <span className="font-black text-stone-900 dark:text-white">{formData.name} ({formData.age} yrs)</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-200/40 dark:border-stone-750 pb-2">
                      <span className="font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">{t.contactPhone}</span>
                      <span className="font-bold text-stone-800 dark:text-stone-100">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-200/40 dark:border-stone-750 pb-2">
                      <span className="font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">{t.contactService}</span>
                      <span className="font-extrabold text-teal-700 dark:text-teal-400">
                        {selectedService ? (language === "en" ? selectedService.title : selectedService.titleHindi) : ""}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-stone-200/40 dark:border-stone-750 pb-2">
                      <span className="font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">{t.modalSelectTherapist}</span>
                      <span className="font-bold text-stone-800 dark:text-stone-100">
                        {formData.therapistId === "first-available" 
                          ? t.modalFirstAvailable 
                          : selectedTherapist 
                            ? (language === "en" ? selectedTherapist.name : selectedTherapist.nameHindi) 
                            : ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">{t.modalSelectDate} &amp; {t.modalSelectTime}</span>
                      <span className="font-black text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 px-2 py-0.5 rounded-md border border-teal-200/30">
                        {formData.date} @ {formData.timeSlot}
                      </span>
                    </div>
                  </div>

                  <p className="text-[10px] text-stone-500 leading-relaxed text-center">
                    ⚠️ {language === "en"
                      ? "This is a non-binding charitable scheduling request. Our desk administrator will contact you to finalize billing and physical cabin availability."
                      : "यह एक गैर-बाध्यकारी धर्मार्थ समय निर्धारण अनुरोध है। हमारे व्यवस्थापक बिलिंग और केबिन उपलब्धता को अंतिम रूप देने के लिए आपसे संपर्क करेंगे।"}
                  </p>
                </div>
              )}

            </div>

            {/* Navigation Button Footer */}
            <div className="mt-8 flex items-center justify-between gap-3 border-t border-border-color pt-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex h-11 items-center gap-1.5 rounded-xl border border-border-color px-4 text-xs font-bold text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  {t.modalBack}
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-11 items-center gap-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 px-5 text-xs font-bold text-white transition-all shadow-sm hover:shadow"
                >
                  {t.modalNext}
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex h-11 items-center gap-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 px-6 text-xs font-bold text-white transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <Check className="h-4 w-4" />
                  {t.modalSubmit}
                </button>
              )}
            </div>

          </form>
        ) : (
          /* SUCCESS STATE */
          <div className="p-8 text-center space-y-5 animate-fade-in">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-300/40">
              <Check className="h-8 w-8 stroke-[3]" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-xl font-black text-stone-900 dark:text-white" onMouseEnter={() => handleSpeech(t.modalConfirmTitle)}>
                {t.modalConfirmTitle}
              </h2>
              <p 
                className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed max-w-sm mx-auto"
                onMouseEnter={() => handleSpeech(t.modalConfirmDesc)}
              >
                {t.modalConfirmDesc}
              </p>
            </div>

            <div className="rounded-xl border border-dashed border-emerald-300 bg-emerald-50/20 dark:border-emerald-800 dark:bg-emerald-950/10 p-4 text-xs max-w-sm mx-auto text-emerald-850 dark:text-emerald-400 transition-colors">
              <p className="font-bold uppercase tracking-wider mb-1">
                {language === "en" ? "Registration Reference" : "पंजीकरण संदर्भ"}
              </p>
              <p className="font-mono text-base font-extrabold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">
                CARE-{Math.floor(1000 + Math.random() * 9000)}-PT
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full max-w-xs h-11 rounded-xl bg-stone-900 hover:bg-stone-850 dark:bg-slate-800 dark:hover:bg-slate-700 font-bold text-sm text-white dark:text-stone-100 transition-all shadow"
            >
              {t.modalClose}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
