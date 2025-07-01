"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { exportToPDF } from "@/utils/exportPdf";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";

const Portfolio = () => {
  const [isExporting, setIsExporting] = useState(false);
  const { t, language } = useLanguage();

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      const filename =
        language === "th" ? "สมชาย-ใจดี-CV.pdf" : "Somchai-Jaidee-CV.pdf";
      const result = await exportToPDF("portfolio-content", filename);
      if (result.success) {
        toast.success(t("exportSuccess"));
      } else {
        toast.error(t("exportError"));
      }
    } catch {
      toast.error(t("exportError"));
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 font-inter">
      <div className="max-w-4xl mx-auto px-4">
        {/* Controls */}
        <div className="flex justify-between items-center mb-4">
          <div data-language-toggle>
            <LanguageToggle />
          </div>
          <div data-export-button>
            <Button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
            >
              {isExporting ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Download size={18} />
              )}
              {isExporting ? t("exporting") : t("exportPdf")}
            </Button>
          </div>
        </div>

        {/* A4 sized container */}
        <div
          id="portfolio-content"
          className="bg-white shadow-xl rounded-lg p-8 animate-fade-in"
          style={{
            width: "210mm",
            minHeight: "297mm",
            margin: "0 auto",
          }}
        >
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <About />
              <Experience />
              <Projects />
            </div>
            <div className="space-y-6">
              <Skills />
              <Education />
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 pt-6 border-t border-gray-300 text-center">
            <p className="text-xs text-gray-600">
              {language === "th"
                ? `สร้างด้วย React และ TypeScript • อัพเดตล่าสุด: ${new Date().toLocaleDateString(
                    "th-TH"
                  )}`
                : `Built with React and TypeScript • Last updated: ${new Date().toLocaleDateString(
                    "en-US"
                  )}`}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
