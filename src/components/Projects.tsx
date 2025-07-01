import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = {
    th: [
      {
        title: "เว็บไซต์ E-commerce",
        description:
          "เว็บไซต์ขายของออนไลน์ด้วย React และ Next.js รองรับการชำระเงินและจัดการสินค้า",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        github: "github.com/somchai/ecommerce-project",
        demo: "project-demo.com",
      },
      {
        title: "แอพบันทึกรายจ่าย",
        description:
          "แอปพลิเคชันสำหรับบันทึกและจัดการรายรับ-รายจ่าย พร้อมกราฟแสดงผล",
        technologies: ["React", "Chart.js", "Express.js", "MongoDB"],
        github: "github.com/somchai/expense-tracker",
        demo: "expense-app.com",
      },
    ],
    en: [
      {
        title: "E-commerce Website",
        description:
          "Online shopping website built with React and Next.js supporting payment processing and product management",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        github: "github.com/somchai/ecommerce-project",
        demo: "project-demo.com",
      },
      {
        title: "Expense Tracker App",
        description:
          "Application for recording and managing income-expenses with chart visualization",
        technologies: ["React", "Chart.js", "Express.js", "MongoDB"],
        github: "github.com/somchai/expense-tracker",
        demo: "expense-app.com",
      },
    ],
  };

  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-orange-600 pl-3">
        {t("projects")}
      </h3>
      <div className="space-y-4">
        {projects[language].map((project, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg border">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-900">{project.title}</h4>
              <div className="flex gap-2">
                <ExternalLink size={14} className="text-gray-600" />
                <Github size={14} className="text-gray-600" />
              </div>
            </div>
            <p className="text-sm text-gray-800 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div className="flex items-center gap-1">
                <Github size={12} />
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
