import { Code, Database, Server, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: <Code size={18} />,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
    },
    {
      icon: <Server size={18} />,
      title: "Backend",
      skills: ["Express.js", "Nest.js", "Node.js"],
    },
    {
      icon: <Database size={18} />,
      title: "Database",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      icon: <Package size={18} />,
      title: "Tools",
      skills: ["Docker", "Git", "VS Code", "Postman"],
    },
  ];

  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-green-600 pl-3">
        {t("skills")}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
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
