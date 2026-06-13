"use client";

import React, { createContext, useContext } from "react";

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
  const textSize: TextSize = "normal";
  const highContrast = false;
  const reducedMotion = false;
  const speechActive = false;

  const setTextSize = () => {};
  const toggleHighContrast = () => {};
  const toggleReducedMotion = () => {};
  const toggleSpeechActive = () => {};
  const speakText = () => {};
  const stopSpeaking = () => {};

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
