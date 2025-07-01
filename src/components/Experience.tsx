import { Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t, language } = useLanguage();

  const experiences = {
    th: [
      {
        title: "Freelance Frontend Developer",
        company: "งานอิสระ",
        period: "2023 - ปัจจุบัน",
        location: "Remote",
        responsibilities: [
          "พัฒนาเว็บไซต์ด้วย React และ Next.js สำหรับลูกค้าต่างๆ",
          "ปรับปรุง UI/UX ให้ responsive และใช้งานง่าย",
          "ทำงานร่วมกับ Backend Developer ในการเชื่อมต่อ API",
          "แก้ไขบั๊กและปรับปรุงประสิทธิภาพของเว็บไซต์",
        ],
      },
    ],
    en: [
      {
        title: "Freelance Frontend Developer",
        company: "Freelance",
        period: "2023 - Present",
        location: "Remote",
        responsibilities: [
          "Develop websites using React and Next.js for various clients",
          "Improve UI/UX to be responsive and user-friendly",
          "Collaborate with Backend Developers for API integration",
          "Fix bugs and improve website performance",
        ],
      },
    ],
  };

  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-purple-600 pl-3">
        {t("experience")}
      </h3>
      <div className="space-y-4">
        {experiences[language].map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-300 pl-4 pb-4">
            <div className="mb-2">
              <h4 className="font-medium text-gray-900">{exp.title}</h4>
              <p className="text-blue-700 text-sm font-medium">{exp.company}</p>
              <div className="flex items-center gap-4 text-xs text-gray-600 mt-1">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <ul className="text-sm text-gray-800 space-y-1">
              {exp.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
