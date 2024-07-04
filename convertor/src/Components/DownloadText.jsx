import React from "react";
import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

const DownloadText = ({ text }) => {
  // Function to download the text as a PDF
  const downloadAsPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth(); // Get the width of the PDF page
    const margin = 10; // Set the margin size
    const maxLineWidth = pageWidth - margin * 2; // Calculate the maximum line width
    const lines = text.split("\n"); // Split the text into lines
    let verticalOffset = margin; //Initialize the vertical offset

    lines.forEach((line) => {
      const splittedText = doc.splitTextToSize(line, maxLineWidth); // Split the line if it exceeds the maximum width
      splittedText.forEach((txt) => {
        doc.text(txt, margin, verticalOffset); // Add the text to the PDF
        verticalOffset += 10; // Increment the vertical offset
      });
    });

    doc.save("less-ego-converter.pdf");
  };

  // Function to download the text as a Word document
  const downloadAsWord = async () => {
    const doc = new Document({
      sections: [
        {
          children: text.split("\n").map(
            (line) =>
              new Paragraph({
                children: [new TextRun(line)], // Add the text as a paragraph in the Word document
              })
          ),
        },
      ],
    });

    try {
      const blob = await Packer.toBlob(doc); // Create a blob from the document
      saveAs(blob, "less-ego-converter.docx"); // Save the blob as a Word document with the specified filename
    } catch (error) {
      console.error("Error creating Word document:", error); // Log any errors that occur
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center ">
      {/* Button to download the text as a PDF */}
      <button
        onClick={downloadAsPDF}
        className="bg-action text-white rounded-lg px-6 py-3 hover:scale-105 transform transition-transform m-1"
      >
        Download as PDF
      </button>
      {/* Button to download the text as a Word document */}
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
