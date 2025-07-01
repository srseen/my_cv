import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="text-center mb-8 border-b border-gray-300 pb-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("name")}</h1>
      <h2 className="text-xl text-blue-700 font-medium mb-4">
        {t("position")}
      </h2>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-gray-700" />
          <span>{t("email")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-gray-700" />
          <span>{t("phone")}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-700" />
          <span>{t("location")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Github size={16} className="text-gray-700" />
          <span>github.com/somchai</span>
        </div>
        <div className="flex items-center gap-2">
          <Linkedin size={16} className="text-gray-700" />
          <span>linkedin.com/in/somchai</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
