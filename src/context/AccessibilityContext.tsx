"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export type TextSize = "normal" | "large" | "extra";

interface AccessibilityContextType {
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  speechActive: boolean;
  toggleSpeechActive: () => void;
  speakText: (text: string) => void;
  stopSpeaking: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const [textSize, setTextSizeState] = useState<TextSize>("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [speechActive, setSpeechActive] = useState(false);

  // Initialize settings from localStorage on client mount
  useEffect(() => {
    const savedSize = localStorage.getItem("a11y-text-size") as TextSize | null;
    if (savedSize) setTextSizeState(savedSize);

    const savedContrast = localStorage.getItem("a11y-high-contrast") === "true";
    setHighContrast(savedContrast);
    if (savedContrast) {
      document.documentElement.classList.add("high-contrast");
    }

    const savedMotion = localStorage.getItem("a11y-reduced-motion") === "true";
    setMotionState(savedMotion);
  }, []);

  const setMotionState = (savedMotion: boolean) => {
    setReducedMotion(savedMotion);
    if (savedMotion) {
      document.documentElement.classList.add("reduced-motion");
    }
  };

  useEffect(() => {
    const savedSpeech = localStorage.getItem("a11y-speech") === "true";
    setSpeechActive(savedSpeech);
  }, []);

  const setTextSize = (size: TextSize) => {
    setTextSizeState(size);
    localStorage.setItem("a11y-text-size", size);
  };

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem("a11y-high-contrast", String(newValue));
    document.documentElement.classList.toggle("high-contrast", newValue);
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem("a11y-reduced-motion", String(newValue));
    document.documentElement.classList.toggle("reduced-motion", newValue);
  };

  const toggleSpeechActive = () => {
    const newValue = !speechActive;
    setSpeechActive(newValue);
    localStorage.setItem("a11y-speech", String(newValue));
    if (!newValue) {
      stopSpeaking();
    }
  };

  const speakText = (text: string) => {
    if (!speechActive || typeof window === "undefined" || !window.speechSynthesis) return;

    // Stop currently speaking voices
    window.speechSynthesis.cancel();

    if (!text || text.trim() === "") return;

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set appropriate voice rate and language
    utterance.rate = 0.95;
    if (language === "ml") {
      utterance.lang = "ml-IN";
    } else {
      utterance.lang = "en-IN"; // Good friendly Indian-English accent or standard english
    }

    // Attempt to match language-specific voice in the browser list
    const voices = window.speechSynthesis.getVoices();
    if (language === "ml") {
      const mlVoice = voices.find(v => v.lang.includes("ml-IN") || v.lang.includes("ml"));
      if (mlVoice) utterance.voice = mlVoice;
    } else {
      const enVoice = voices.find(v => v.lang.includes("en-IN") || v.lang.includes("en-US") || v.lang.includes("en-GB"));
      if (enVoice) utterance.voice = enVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  // Set class on root element to handle global typography sizing
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("text-size-normal", "text-size-large", "text-size-extra");
    if (textSize === "large") {
      root.classList.add("text-size-large");
    } else if (textSize === "extra") {
      root.classList.add("text-size-extra");
    } else {
      root.classList.add("text-size-normal");
    }
  }, [textSize]);

  return (
    <AccessibilityContext.Provider
      value={{
        textSize,
        setTextSize,
        highContrast,
        toggleHighContrast,
        reducedMotion,
        toggleReducedMotion,
        speechActive,
        toggleSpeechActive,
        speakText,
        stopSpeaking
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
}
