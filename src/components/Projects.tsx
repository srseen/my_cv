import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translationsCV } from "@/data/translationsCV";

const Projects = () => {
  const { t, language } = useLanguage();

  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-orange-600 pl-3">
        {t("projects")}
      </h3>
      <div className="space-y-4">
        {translationsCV[language].projectlist.map((project, index) => (
          <div key={index} className=" p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-900">{project.title}</h4>
            </div>
            <p className="text-sm text-gray-800 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies?.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-blue-700 px-2 py-1 text-xs"
                >
                  - {tech}
                </span>
              )) ?? null}
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div className="flex items-center gap-1">
                {project.github && <Github size={12} />}
                <span>{project.github}</span>
              </div>
              <div className="flex items-center gap-1">
                <ExternalLink size={12} />
                <span>{project.demo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
