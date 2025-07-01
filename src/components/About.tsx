import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">
        {t("about")}
      </h3>
      <p className="text-gray-800 leading-relaxed text-sm">{t("aboutText")}</p>
    </section>
  );
};

export default About;
