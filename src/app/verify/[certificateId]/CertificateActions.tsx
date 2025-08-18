"use client";

interface CertificateActionsProps {
  certificateId: string;
  certificateName: string;
}

export default function CertificateActions({
  certificateId,
  certificateName,
}: CertificateActionsProps) {
  const pdfPath = `/intern/certificates/CERINT2025${certificateId.slice(
    -5
  )}.pdf`;

  const handleViewCertificate = () => {
    // Open PDF in new window for full document view
    window.open(pdfPath, "_blank");
  };

  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={handleViewCertificate}
        className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
        View Certificate
      </button>
      <a
        href={pdfPath}
        download={`Certificate_${certificateName.replace(
          /\s+/g,
          "_"
        )}_${certificateId}.pdf`}
        className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors text-center font-medium">
        Download Certificate
      </a>
    </div>
  );
}
