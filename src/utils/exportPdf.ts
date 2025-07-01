import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const exportToPDF = async (
  elementId: string,
  filename: string = "portfolio-cv.pdf"
) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error("Element not found");
    }

    // Hide the export button and language toggle temporarily
    const exportButton = document.querySelector(
      "[data-export-button]"
    ) as HTMLElement;
    const languageToggle = document.querySelector(
      "[data-language-toggle]"
    ) as HTMLElement;

    if (exportButton) exportButton.style.display = "none";
    if (languageToggle) languageToggle.style.display = "none";

    // Wait a bit for DOM to update
    await new Promise((resolve) => setTimeout(resolve, 100));

    const canvas = await html2canvas(element, {
      scale: 3, // Increased scale for better quality
      useCORS: true,
      logging: false,
      allowTaint: true,
      backgroundColor: "#ffffff",
      width: element.scrollWidth,
      height: element.scrollHeight,
      onclone: (clonedDoc) => {
        // Force dark colors in the cloned document
        const clonedElement = clonedDoc.getElementById(elementId);
        if (clonedElement) {
          // Apply dark colors to all text elements
          const allElements = clonedElement.querySelectorAll("*");
          allElements.forEach((el: Element) => {
            const styles = window.getComputedStyle(el);
            const htmlEl = el as HTMLElement;

            // Force dark text colors
            if (styles.color) {
              if (
                styles.color.includes("gray-900") ||
                styles.color.includes("gray-800") ||
                styles.color.includes("text-gray-900") ||
                styles.color.includes("text-gray-800")
              ) {
                htmlEl.style.color = "#000000 !important";
              } else if (
                styles.color.includes("gray-700") ||
                styles.color.includes("text-gray-700")
              ) {
                htmlEl.style.color = "#1f2937 !important";
              } else if (
                styles.color.includes("gray-600") ||
                styles.color.includes("text-gray-600")
              ) {
                htmlEl.style.color = "#374151 !important";
              } else if (
                styles.color.includes("blue") ||
                styles.color.includes("text-blue")
              ) {
                htmlEl.style.color = "#1e40af !important";
              }
            }

            // Force dark border colors
            if (styles.borderColor && styles.borderColor.includes("gray")) {
              htmlEl.style.borderColor = "#374151 !important";
            }

            // Ensure background colors are preserved
            if (
              styles.backgroundColor &&
              styles.backgroundColor.includes("gray-100")
            ) {
              htmlEl.style.backgroundColor = "#f3f4f6 !important";
            }
          });

          // Specifically target common text classes
          const textElements = clonedElement.querySelectorAll(
            "h1, h2, h3, h4, h5, h6, p, span, div, li"
          );
          textElements.forEach((el: Element) => {
            const htmlEl = el as HTMLElement;
            if (
              !htmlEl.style.color ||
              htmlEl.style.color === "rgb(107, 114, 128)" ||
              htmlEl.style.color === "rgb(156, 163, 175)" ||
              htmlEl.style.color === "rgb(75, 85, 99)"
            ) {
              htmlEl.style.color = "#1f2937 !important";
              htmlEl.style.fontWeight = htmlEl.style.fontWeight || "normal";
            }
          });

          // Force dark colors for headers
          const headers = clonedElement.querySelectorAll("h1, h2, h3, h4");
          headers.forEach((header) => {
            (header as HTMLElement).style.color = "#000000 !important";
            (header as HTMLElement).style.fontWeight = "bold !important";
          });

          // Force blue colors to be darker
          const blueElements = clonedElement.querySelectorAll(
            '[class*="blue"], [class*="text-blue"]'
          );
          blueElements.forEach((el) => {
            (el as HTMLElement).style.color = "#1e40af !important";
          });
        }
      },
    });

    // Show the buttons again
    if (exportButton) exportButton.style.display = "flex";
    if (languageToggle) languageToggle.style.display = "flex";

    const imgData = canvas.toDataURL("image/png", 1.0);

    // A4 width in mm
    const a4Width = 210;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Calculate dimensions to fit A4
    const imgWidth = a4Width;
    const imgHeight = (canvas.height * a4Width) / canvas.width;

    // Add the image to PDF
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    pdf.save(filename);

    return { success: true };
  } catch (error) {
    console.error("Error exporting PDF:", error);
    return { success: false, error };
  }
};
