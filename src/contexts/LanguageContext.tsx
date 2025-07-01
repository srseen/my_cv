"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
  language: "th" | "en";
  setLanguage: (lang: "th" | "en") => void;
  t: (key: string) => string;
}

const translations = {
  th: {
    name: "สมชาย ใจดี",
    position: "Junior Frontend Developer",
    email: "somchai.jaidee@email.com",
    phone: "+66 89 123 4567",
    location: "กรุงเทพมหานคร",
    about: "เกี่ยวกับฉัน",
    aboutText:
      "Junior Frontend Developer ที่สำเร็จการศึกษาปริญญาตรี สาขาวิศวกรรมเคมี จากมหาวิทยาลัยสงขลานครินทร์ แต่ได้ย้ายสายมาเขียนเว็บเพราะความชอบและความหลงใหลในการเขียนโค้ด ศึกษาด้วยตนเองอย่างต่อเนื่อง มีเป้าหมายที่จะพัฒนาตนเองให้เป็น Fullstack Developer ที่สามารถทำงานได้หลากหลาย",
    skills: "ความสามารถ",
    experience: "ประสบการณ์การทำงาน",
    projects: "โปรเจคที่น่าสนใจ",
    education: "การศึกษา",
    degree: "ปริญญาตรี สาขาวิศวกรรมเคมี",
    university: "มหาวิทยาลัยสงขลานครินทร์",
    educationNote:
      "เกรดเฉลี่ย 3.2 | ย้ายสายมาเขียนเว็บเพราะความชอบและศึกษาด้วยตนเอง",
    exportPdf: "ส่งออก PDF",
    exporting: "กำลังส่งออก...",
    exportSuccess: "ส่งออก PDF สำเร็จ!",
    exportError: "เกิดข้อผิดพลาดในการส่งออก PDF",
  },
  en: {
    name: "Somchai Jaidee",
    position: "Junior Frontend Developer",
    email: "somchai.jaidee@email.com",
    phone: "+66 89 123 4567",
    location: "Bangkok, Thailand",
    about: "About Me",
    aboutText:
      "Junior Frontend Developer who graduated with a Bachelor's degree in Chemical Engineering from Prince of Songkla University. Transitioned to web development due to passion and self-taught programming skills. Continuously learning with the goal of becoming a versatile Fullstack Developer capable of handling various projects.",
    skills: "Skills",
    experience: "Work Experience",
    projects: "Featured Projects",
    education: "Education",
    degree: "Bachelor's Degree in Chemical Engineering",
    university: "Prince of Songkla University",
    educationNote:
      "GPA 3.2 | Transitioned to web development through self-study and passion",
    exportPdf: "Export PDF",
    exporting: "Exporting...",
    exportSuccess: "PDF exported successfully!",
    exportError: "Error exporting PDF",
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"th" | "en">("th");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["th"]] || key
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
