"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { useAccessibility } from "../../context/AccessibilityContext";
import { clinicConfig } from "../../data/clinicConfig";
import { Heart, Target, Compass, Award, ShieldAlert, ArrowRight, HelpingHand } from "lucide-react";

export default function About() {
  const { t, language } = useLanguage();
  const { speakText } = useAccessibility();

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  const timelineEvents = language === "en" ? [
    { year: "2018", title: "NGO Foundation", desc: "Care Charitable Trust was registered as a non-profit NGO with a focus on grassroots health checkups in Delhi NCR." },
    { year: "2020", title: "COVID Relief Response", desc: "Distributed oxygen concentrators, medical supplies, and launched telemedicine services for remote families during the height of the pandemic." },
    { year: "2022", title: "Dedicated Physiotherapy Wing", desc: "Recognizing high post-viral joint issues and stroke rehabilitation neglect, we opened our dedicated Dwarka clinic with 3 beds." },
    { year: "2024", title: "Subsidized Electrotherapy Expansion", desc: "Upgraded our clinic with professional imported SWD, IFT, and CPM machines, expanding our capacity to serve 40+ patients daily." },
    { year: "2026", title: "Mobile Rehabilitation Initiative", desc: "Launched our first mobile medical van to take clinical neuro-rehabilitation directly to rural bended stroke patients." }
  ] : [
    { year: "2018", title: "एनजीओ की स्थापना", desc: "केयर चैरिटेबल ट्रस्ट को दिल्ली एनसीआर में जमीनी स्तर पर स्वास्थ्य जांच पर ध्यान केंद्रित करने वाले एक गैर-लाभकारी एनजीओ के रूप में पंजीकृत किया गया था।" },
    { year: "2020", title: "कोविड राहत प्रतिक्रिया", desc: "महामारी के चरम के दौरान ऑक्सीजन कंसंट्रेटर, चिकित्सा आपूर्ति वितरित की और दूरदराज के परिवारों के लिए टेलीमेडिसिन सेवाएं शुरू कीं।" },
    { year: "2022", title: "समर्पित फिजियोथेरेपी विंग", desc: "वायरल के बाद जोड़ों की समस्याओं और पक्षाघात पुनर्वास की उपेक्षा को देखते हुए, हमने द्वारका में 3 बिस्तरों का क्लिनिक खोला।" },
    { year: "2024", title: "रियायती इलेक्ट्रोथेरेपी विस्तार", desc: "पेशेवर आयातित SWD, IFT और CPM मशीनों के साथ क्लिनिक को अपग्रेड किया, जिससे दैनिक 40+ रोगियों की सेवा करने की क्षमता का विस्तार हुआ।" },
    { year: "2026", title: "मोबाइल पुनर्वास पहल", desc: "ग्रामीण क्षेत्रों में घर पर पड़े लकवा रोगियों तक सीधे क्लिनिकल न्यूरो-पुनर्वास पहुंचाने के लिए पहली मोबाइल मेडिकल वैन शुरू की।" }
  ];

  return (
    <div className="w-full space-y-16 pb-20 pt-8 sm:pt-12">
      
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div 
          className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/50 dark:border-teal-900/40 px-3.5 py-1 text-xs font-bold text-teal-700 dark:text-teal-400"
          onMouseEnter={() => handleSpeech(t.heroTrustBadge)}
        >
          <HelpingHand className="h-3.5 w-3.5" />
          <span>{language === "en" ? "Our Mission & Story" : "हमारा उद्देश्य और कहानी"}</span>
        </div>
        <h1 
          className="font-sans text-4xl sm:text-5xl font-black tracking-tight text-stone-900 dark:text-white"
          onMouseEnter={() => handleSpeech(language === "en" ? "About Care Charitable Trust" : "केयर चैरिटेबल ट्रस्ट के बारे में")}
        >
          {language === "en" ? "About Care Charitable Trust" : "केयर चैरिटेबल ट्रस्ट के बारे में"}
        </h1>
        <p 
          className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          onMouseEnter={() => handleSpeech(language === "en" ? "Operating with clinical excellence and social integrity to bridge the health gap." : "स्वास्थ्य सेवाओं के अंतर को पाटने के लिए नैदानिक उत्कृष्टता और सामाजिक सत्यनिष्ठा के साथ संचालन।")}
        >
          {language === "en"
            ? "We are a registered non-profit organization operating a sliding-scale subsidy clinic where professional electrotherapy and manual treatments are made available to all layers of society."
            : "हम एक पंजीकृत गैर-लाभकारी संगठन हैं जो एक रियायती क्लिनिक का संचालन करते हैं जहाँ सभी वर्गों के लिए व्यावसायिक फिजियोथेरेपी उपचार उपलब्ध कराए जाते हैं।"}
        </p>
      </section>

      {/* Mission & Vision Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="relative rounded-2xl bg-white dark:bg-slate-800 border border-border-color p-8 hover:shadow-lg transition-all group overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-teal-500/5 blur-xl -translate-y-8 translate-x-8" />
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 border border-teal-200/40 mb-6 group-hover:scale-110 transition-transform">
              <Target className="h-6 w-6" />
            </div>
            <h3 
              className="text-xl font-bold text-stone-900 dark:text-white"
              onMouseEnter={() => handleSpeech(t.aboutMissionTitle)}
            >
              {t.aboutMissionTitle}
            </h3>
            <p 
              className="text-sm text-stone-500 dark:text-stone-300 leading-relaxed mt-4"
              onMouseEnter={() => handleSpeech(t.aboutMissionDesc)}
            >
              {t.aboutMissionDesc}
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-2xl bg-white dark:bg-slate-800 border border-border-color p-8 hover:shadow-lg transition-all group overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-emerald-500/5 blur-xl -translate-y-8 translate-x-8" />
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-650 dark:text-emerald-400 border border-emerald-200/40 mb-6 group-hover:scale-110 transition-transform">
              <Compass className="h-6 w-6" />
            </div>
            <h3 
              className="text-xl font-bold text-stone-900 dark:text-white"
              onMouseEnter={() => handleSpeech(t.aboutVisionTitle)}
            >
              {t.aboutVisionTitle}
            </h3>
            <p 
              className="text-sm text-stone-500 dark:text-stone-300 leading-relaxed mt-4"
              onMouseEnter={() => handleSpeech(t.aboutVisionDesc)}
            >
              {t.aboutVisionDesc}
            </p>
          </div>

        </div>
      </section>

      {/* Philosophy & Trust Details */}
      <section className="bg-stone-50/70 dark:bg-slate-900/50 border-y border-stone-200/40 dark:border-slate-800/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Block - Text */}
            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest block">
                  {language === "en" ? "How We Care" : "हम देखभाल कैसे करते हैं"}
                </span>
                <h2 
                  className="font-sans text-3xl font-extrabold tracking-tight text-stone-900 dark:text-white"
                  onMouseEnter={() => handleSpeech(t.aboutPhilosophyTitle)}
                >
                  {t.aboutPhilosophyTitle}
                </h2>
              </div>
              <p 
                className="text-sm text-stone-500 dark:text-stone-300 leading-relaxed"
                onMouseEnter={() => handleSpeech(t.aboutPhilosophyDesc)}
              >
                {t.aboutPhilosophyDesc}
              </p>
              
              <div className="pt-2 border-t border-dashed border-stone-200 dark:border-slate-700/60 mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-md bg-teal-500/10 flex items-center justify-center text-teal-600 shrink-0 mt-0.5">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-stone-900 dark:text-white">
                      {language === "en" ? "100% Ethical & Audited NGO" : "100% नैतिक एवं जांची गई एनजीओ"}
                    </h5>
                    <p className="text-xs text-stone-400 mt-0.5">
                      {language === "en" 
                        ? `Operating under NGO license: ${clinicConfig.ngoRegNumber}. Regular audits published annually.`
                        : `गैर-सरकारी संगठन लाइसेंस: ${clinicConfig.ngoRegNumber} के तहत संचालित। वार्षिक ऑडिट नियमित प्रकाशित।`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Block - Graphic Box */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md aspect-4/3 rounded-3xl bg-gradient-to-br from-stone-900 to-teal-950 text-white p-8 shadow-xl overflow-hidden flex flex-col justify-between group">
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-teal-500/10 blur-xl translate-x-8 -translate-y-8" />
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-emerald-500/10 blur-xl -translate-x-8 translate-y-8" />
                
                <div className="relative">
                  <ShieldAlert className="h-9 w-9 text-orange-400" />
                  <h4 
                    className="text-xl font-extrabold tracking-tight mt-4 text-orange-100"
                    onMouseEnter={() => handleSpeech(t.aboutWhyCharityTitle)}
                  >
                    {t.aboutWhyCharityTitle}
                  </h4>
                </div>

                <p 
                  className="relative text-xs sm:text-sm text-stone-300 leading-relaxed my-4"
                  onMouseEnter={() => handleSpeech(t.aboutWhyCharityDesc)}
                >
                  {t.aboutWhyCharityDesc}
                </p>

                <div className="relative border-t border-stone-800 pt-4 flex items-center justify-between text-[11px] font-bold text-stone-400">
                  <span>{language === "en" ? "Dwarka Community Service" : "द्वारका सामुदायिक सेवा"}</span>
                  <span className="text-teal-400">🟢 {language === "en" ? "Subsidized Clinic" : "रियायती दरें"}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Community & NGO Timeline */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest block">
            {language === "en" ? "Our Journey" : "हमारी यात्रा"}
          </span>
          <h2 
            className="font-sans text-3xl font-extrabold tracking-tight text-stone-900 dark:text-white"
            onMouseEnter={() => handleSpeech(language === "en" ? "Milestones of Care" : "सेवा के महत्वपूर्ण पड़ाव")}
          >
            {language === "en" ? "Milestones of Care" : "सेवा के महत्वपूर्ण पड़ाव"}
          </h2>
          <p 
            className="text-sm text-stone-500 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed"
            onMouseEnter={() => handleSpeech(language === "en" ? "How we grew from a small neighborhood screening cell to a fully-equipped physiotherapy clinic." : "कैसे हम एक छोटे पड़ोस के जांच शिविर से एक पूर्ण फिजियोथेरेपी क्लिनिक तक पहुंचे।")}
          >
            {language === "en"
              ? "Through continuous support from local doctors, well-wishers, and patient fees, our NGO trust has consistently expanded medical access to families in need."
              : "स्थानीय डॉक्टरों, शुभचिंतकों और मरीजों के सहयोग से, हमारे गैर-सरकारी संगठन ट्रस्ट ने जरूरतमंद परिवारों तक चिकित्सा पहुंच का लगातार विस्तार किया है।"}
          </p>
        </div>

        {/* Timeline block */}
        <div className="relative border-l border-stone-200 dark:border-slate-800 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-10 py-4">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline bubble dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-900 group-hover:scale-125 transition-transform duration-300" />
              
              <div className="space-y-1 text-left">
                <span className="text-xs font-black text-teal-600 dark:text-teal-400 tracking-wider block">
                  {evt.year}
                </span>
                <h4 
                  className="text-base font-bold text-stone-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors"
                  onMouseEnter={() => handleSpeech(evt.title)}
                >
                  {evt.title}
                </h4>
                <p 
                  className="text-xs sm:text-sm text-stone-500 dark:text-stone-300 leading-relaxed pt-1"
                  onMouseEnter={() => handleSpeech(evt.desc)}
                >
                  {evt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-teal-650 to-teal-800 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/5 blur-xl translate-x-8 -translate-y-8" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-black/10 blur-xl -translate-x-8 translate-y-8" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <Heart className="h-10 w-10 text-orange-400 mx-auto animate-pulse" />
            <h3 
              className="text-2xl sm:text-3xl font-black tracking-tight"
              onMouseEnter={() => handleSpeech(language === "en" ? "Support Our Charitable Trust" : "हमारे धर्मार्थ ट्रस्ट का समर्थन करें")}
            >
              {language === "en" ? "Support Our Charitable Trust" : "हमारे धर्मार्थ ट्रस्ट का समर्थन करें"}
            </h3>
            <p 
              className="text-sm sm:text-base text-teal-100 leading-relaxed"
              onMouseEnter={() => handleSpeech(language === "en" ? "Your contributions help us procure advanced mobility support aids and expand free rural checkup drives." : "आपका योगदान हमें उन्नत गतिशीलता सहायक साधन खरीदने और मुफ्त ग्रामीण शिविरों के विस्तार में मदद करता है।")}
            >
              {language === "en"
                ? "Every paid session and generous donation direct-funds completely free treatment for families holding low-income or Below Poverty Line certificates."
                : "प्रत्येक सशुल्क सत्र और उदार दान सीधे गरीबी रेखा से नीचे या कम आय प्रमाण पत्र वाले परिवारों के लिए पूरी तरह से मुफ्त चिकित्सा उपचार की सुविधा प्रदान करता है।"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/outreach"
                className="h-12 rounded-xl bg-white text-stone-900 hover:bg-stone-50 px-8 text-sm font-bold transition-all shadow-md text-center flex items-center justify-center"
              >
                {language === "en" ? "Learn About Free Schemes" : "मुफ्त योजनाओं की जानकारी लें"}
              </Link>
              <Link
                href="/contact"
                className="h-12 rounded-xl bg-teal-900/40 hover:bg-teal-900/60 border border-white/20 text-white px-7 text-sm font-bold transition-all text-center flex items-center justify-center gap-1.5"
              >
                <span>{language === "en" ? "Contact Trust Office" : "ट्रस्ट कार्यालय से संपर्क करें"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
