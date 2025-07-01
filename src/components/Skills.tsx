import { useLanguage } from "@/contexts/LanguageContext";
import { translationsCV } from "@/data/translationsCV";

const Skills = () => {
  const { t, language } = useLanguage();

  return (
    <section className="mb-6" id="skills-section">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-green-600 pl-3">
        {t("skills")}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {translationsCV[
          language as keyof typeof translationsCV
        ].skillCategories.map((category, index) => (
          <div key={index} className="p-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-700">{category.icon}</span>
              <h4 className="font-medium text-gray-900">{category.title}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-1 rounded text-xs text-gray-800"
                >
                  - {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
