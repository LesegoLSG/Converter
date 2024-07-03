import React from "react";
import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

const DownloadText = ({ text }) => {
  //Download in pdf
  const downloadAsPDF = () => {
    const doc = new jsPDF();
    const lines = text.split("\n");
    lines.forEach((line, index) => {
      doc.text(line, 10, 10 + index * 10);
    });
    doc.save("document.pdf");
  };

  //   Download as word
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
      saveAs(blob, "document.docx");
    } catch (error) {
      console.error("Error creating Word document:", error);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center ">
      <button
        onClick={downloadAsPDF}
        className="bg-blue-600 text-white rounded-lg px-4 py-2"
      >
        Download as PDF
      </button>
      <button
        onClick={downloadAsWord}
        className="bg-blue-600 text-white rounded-lg px-4 py-2"
      >
        Download as Word
      </button>
    </div>
  );
};

export default DownloadText;
