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
        language === "th" ? "Seereen-th-CV.pdf" : "Seereen-en-CV.pdf";
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
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex justify-center items-center m-4 gap-2">
        <div className="print:hidden gap-4">
          <LanguageToggle />
        </div>
        <div className="print:hidden gap-4">
          <Button
            onClick={handleExportPDF}
            disabled={isExporting}
            className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
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

      {/* Main content wrapper */}
      <div className="w-full h-full flex flex-col justify-center items-center m-4">
        {/* A4 sized container */}
        <div
          id="portfolio-content"
          className="bg-white rounded-lg ring-1 ring-black ring-opacity-5 p-8 animate-fade-in w-full"
          style={{
            width: "210mm",
            minHeight: "297mm",
            margin: "0 auto",
          }}
        >
          <Header />

          <div className="flex flex-row gap-6">
            {/* Main content column */}
            <div className="lg:w-2/3 space-y-6">
              <About />
              <Experience />
              <Projects />
            </div>
            {/* Sidebar content column */}
            <div className="lg:w-1/3 space-y-6">
              <Skills />
              <Education />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
