"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { translationsCV } from "../data/translationsCV";

interface LanguageContextType {
  language: "th" | "en";
  setLanguage: (lang: "th" | "en") => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"th" | "en">("th");

  const t = (key: string): string => {
    return (
      translationsCV[language][key as keyof (typeof translationsCV)["th"]] ||
      key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
