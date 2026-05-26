"use client";

import React from "react";
import { useAccessibility, TextSize } from "../context/AccessibilityContext";
import { useLanguage } from "../context/LanguageContext";
import { 
  X, 
  Type, 
  Eye, 
  Volume2, 
  VolumeX, 
  Sparkles 
} from "lucide-react";

interface AccessibilityWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessibilityWidget({ isOpen, onClose }: AccessibilityWidgetProps) {
  const { t } = useLanguage();
  const {
    textSize,
    setTextSize,
    highContrast,
    toggleHighContrast,
    reducedMotion,
    toggleReducedMotion,
    speechActive,
    toggleSpeechActive,
    speakText
  } = useAccessibility();

  if (!isOpen) return null;

  const handleSpeech = (text: string) => {
    speakText(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/40 dark:bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Drawer Body */}
      <div className="relative z-10 flex h-full w-full max-w-sm flex-col bg-white dark:bg-slate-900 shadow-2xl p-6 transition-colors duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-border-color">
          <div className="flex items-center gap-2 text-brand-dark dark:text-brand-light">
            <Eye className="h-5 w-5" />
            <h3 
              className="text-base font-bold text-stone-900 dark:text-white"
              onMouseEnter={() => handleSpeech(t.a11yTitle)}
            >
              {t.a11yTitle}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-stone-50 dark:hover:bg-slate-800 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
            title="Close Panel"
            onMouseEnter={() => handleSpeech(t.galleryClose)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Options */}
        <div className="flex-1 overflow-y-auto py-6 space-y-8">
          
          {/* Text Size Scale */}
          <div className="space-y-3">
            <label 
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400"
              onMouseEnter={() => handleSpeech(t.a11yTextSize)}
            >
              <Type className="h-4 w-4 text-brand-dark dark:text-brand-light" />
              {t.a11yTextSize}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["normal", "large", "extra"] as TextSize[]).map((size) => {
                const isActive = textSize === size;
                const label = size === "normal" ? t.a11yNormal : size === "large" ? t.a11yLarge : t.a11yExtraLarge;
                return (
                  <button
                    key={size}
                    onClick={() => setTextSize(size)}
                    className={`flex flex-col items-center justify-center rounded-xl p-3 border font-semibold text-xs transition-all ${
                      isActive
                        ? "bg-brand-dark border-brand-dark text-white dark:bg-brand-slate dark:border-brand-slate"
                        : "border-border-color bg-stone-50 dark:bg-slate-800 hover:bg-stone-100 dark:hover:bg-slate-700 text-stone-800 dark:text-stone-200"
                    }`}
                    onMouseEnter={() => handleSpeech(label)}
                  >
                    <span className={size === "normal" ? "text-xs font-bold" : size === "large" ? "text-sm font-bold" : "text-base font-extrabold"}>A</span>
                    <span className="mt-1 font-semibold text-[10px]">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-border-color bg-stone-50 dark:bg-slate-800 transition-colors">
            <div className="space-y-1">
              <label 
                className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5"
                onMouseEnter={() => handleSpeech(t.a11yContrast)}
              >
                {t.a11yContrast}
              </label>
              <p 
                className="text-xs text-stone-400"
                onMouseEnter={() => handleSpeech(highContrast ? t.a11yHighContrast : t.a11yDefaultContrast)}
              >
                {highContrast ? t.a11yHighContrast : t.a11yDefaultContrast}
              </p>
            </div>
            <button
              onClick={toggleHighContrast}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-hidden ${
                highContrast ? "bg-brand-dark dark:bg-brand-slate" : "bg-stone-300 dark:bg-slate-700"
              }`}
            >
              <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ${
                highContrast ? "translate-x-5" : "translate-x-0"
              }`} />
            </button>
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-border-color bg-stone-50 dark:bg-slate-800 transition-colors">
            <div className="space-y-1">
              <label 
                className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5"
                onMouseEnter={() => handleSpeech(t.a11yReducedMotion)}
              >
                <Sparkles className="h-3.5 w-3.5 text-brand-dark dark:text-brand-light" />
                {t.a11yReducedMotion}
              </label>
              <p 
                className="text-xs text-stone-400"
                onMouseEnter={() => handleSpeech(reducedMotion ? t.a11yReducedMotionOn : t.a11yReducedMotionOff)}
              >
                {reducedMotion ? t.a11yReducedMotionOn : t.a11yReducedMotionOff}
              </p>
            </div>
            <button
              onClick={toggleReducedMotion}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-hidden ${
                reducedMotion ? "bg-brand-dark dark:bg-brand-slate" : "bg-stone-300 dark:bg-slate-700"
              }`}
            >
              <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ${
                reducedMotion ? "translate-x-5" : "translate-x-0"
              }`} />
            </button>
          </div>

          {/* Voice Assistant / Screen Reader */}
          <div className="p-4 rounded-xl border border-border-color bg-stone-50 dark:bg-slate-800 space-y-3 transition-colors">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <label 
                  className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5"
                  onMouseEnter={() => handleSpeech(t.a11ySpeech)}
                >
                  {speechActive ? <Volume2 className="h-4 w-4 text-brand-dark dark:text-brand-light animate-pulse" /> : <VolumeX className="h-4 w-4" />}
                  {t.a11ySpeech}
                </label>
                <p 
                  className="text-xs text-stone-400"
                  onMouseEnter={() => handleSpeech(speechActive ? t.a11ySpeechOn : t.a11ySpeechOff)}
                >
                  {speechActive ? t.a11ySpeechOn : t.a11ySpeechOff}
                </p>
              </div>
              <button
                onClick={toggleSpeechActive}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-hidden ${
                  speechActive ? "bg-brand-dark dark:bg-brand-slate" : "bg-stone-300 dark:bg-slate-700"
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ${
                  speechActive ? "translate-x-5" : "translate-x-0"
                }`} />
              </button>
            </div>
            {speechActive && (
              <p 
                className="text-[10px] text-brand-dark dark:text-brand-light leading-normal border-t border-brand-light/30 pt-2 font-medium"
                onMouseEnter={() => handleSpeech(t.a11ySpeechTip)}
              >
                ℹ️ {t.a11ySpeechTip}
              </p>
            )}
          </div>

        </div>

        {/* Footer info */}
        <div className="border-t border-border-color pt-4 text-center">
          <p className="text-[10px] text-stone-400">
            Care Charitable Trust A11y Engine v1.0
          </p>
        </div>

      </div>
    </div>
  );
}
