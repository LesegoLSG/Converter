import React from "react";
import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

const DownloadText = ({ text }) => {
  // Download in PDF
  const downloadAsPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    const maxLineWidth = pageWidth - margin * 2;
    const lines = text.split("\n");
    let verticalOffset = margin;

    lines.forEach((line) => {
      const splittedText = doc.splitTextToSize(line, maxLineWidth);
      splittedText.forEach((txt) => {
        doc.text(txt, margin, verticalOffset);
        verticalOffset += 10;
      });
    });

    doc.save("less-ego-converter.pdf");
  };

  // Download as Word
  const downloadAsWord = async () => {
    const doc = new Document({
      sections: [
        {
          children: text.split("\n").map(
            (line) =>
              new Paragraph({
                children: [new TextRun(line)],
              })
          ),
        },
      ],
    });

    try {
      const blob = await Packer.toBlob(doc);
      saveAs(blob, "less-ego-converter.docx");
    } catch (error) {
      console.error("Error creating Word document:", error);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center ">
      <button
        onClick={downloadAsPDF}
        className="bg-action text-white rounded-lg px-6 py-3 hover:scale-105 transform transition-transform m-1"
      >
        Download as PDF
      </button>
      <button
        onClick={downloadAsWord}
        className="bg-action text-white rounded-lg px-6 py-3 hover:scale-105 transform transition-transform m-1"
      >
        Download as Word
      </button>
    </div>
  );
};

export default DownloadText;
