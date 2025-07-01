import { GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();

  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-red-600 pl-3">
        {t("education")}
      </h3>
      <div className=" p-4">
        <div className="flex items-start gap-3">
          <GraduationCap size={20} className="text-blue-700 mt-1" />
          <div>
            <h4 className="font-medium text-gray-900">{t("degree")}</h4>
            <p className="text-blue-700 text-sm">{t("university")}</p>
            <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
              <Calendar size={12} />
              <span>{t("year")}</span>
            </div>
            <p className="text-sm text-gray-800 mt-2">{t("educationNote")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
