"use client";

interface PrintButtonProps {
  certificateId: string;
}

export default function PrintButton({ certificateId }: PrintButtonProps) {
  const handlePrint = () => {
    // Extract the last 5 characters to match PDF filename format
    const pdfFilename = `CERINT2025${certificateId.slice(-5)}.pdf`;
    const pdfUrl = `/certificates/${pdfFilename}`;

    // Open PDF in new window and trigger print
    const printWindow = window.open(pdfUrl, "_blank");
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
      🖨️ Print Certificate
    </button>
  );
}
