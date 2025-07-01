import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "th" ? "en" : "th")}
      className="flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
    >
      <Globe size={16} />
      {language === "th" ? "EN" : "TH"}
    </button>
  );
};

export default LanguageToggle;
