import { Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translationsCV } from "@/data/translationsCV";

const Experience = () => {
  const { t, language } = useLanguage();

  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-purple-600 pl-3">
        {t("experience")}
      </h3>
      <div className="space-y-4">
        {translationsCV[language].experiencelist.map((exp, index) => (
          <div key={index} className=" pl-4 pb-4">
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
                  <span>{exp.locationCompany}</span>
                </div>
              </div>
            </div>
            <ul className="text-sm text-gray-800 space-y-1">
              {exp.responsibilities?.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2">
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
