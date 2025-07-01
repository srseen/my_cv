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
    <div className="w-full h-full relative">
      <div className="absolute right-16 top-14 z-50 print:hidden flex gap-4">
        <div className="hidden md:block">
          <LanguageToggle />
        </div>
        <Button
          onClick={handleExportPDF}
          disabled={isExporting}
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
        >
          {isExporting ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Download size={18} />
          )}
          {isExporting ? t("exporting") : t("exportPdf")}
        </Button>
      </div>
      <div className="absolute top-4 left-4 z-50 print:hidden md:hidden">
        <LanguageToggle />
      </div>

      {/* Main content wrapper */}
      <div className="flex flex-col justify-center items-center p-4 md:p-10">
        {/* A4 sized container */}
        <div
          id="portfolio-content"
          className="bg-white shadow-xl rounded-lg p-4 md:p-8 animate-fade-in w-full md:w-auto"
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
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
