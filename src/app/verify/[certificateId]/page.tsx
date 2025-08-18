import internData from "@/data/internData.json";
import Link from "next/link";
import CertificateActions from "./CertificateActions";

interface Certificate {
  CertificateID: string;
  Name: string;
  "Internship Title": string;
  IssuedBy: string;
  "Start Date": string;
  "End Date": string;
  Skills: string[];
  "Verified On": string;
  Location: string;
  ProjectWork: string;
}

export default async function CertificateVerifyPage({
  params,
}: {
  params: Promise<{ certificateId: string }>;
}) {
  // Await params as required by Next.js 15
  const { certificateId } = await params;

  // Find certificate by ID
  const certificate: Certificate | undefined = (
    internData as Certificate[]
  ).find((cert) => cert.CertificateID === certificateId);

  if (!certificate) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              Certificate Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              No certificate found for ID: {certificateId}
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Certificate Details */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Profile Section */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={`/intern/images/IMG${certificateId}.jpg`}
                  alt={`Profile of ${certificate.Name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {certificate.Name}
              </h2>
              <p className="text-gray-600 text-sm">
                {certificate["Internship Title"]}
              </p>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mt-2">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-600">Issued By:</span>
                <span className="text-blue-600 font-medium">
                  {certificate.IssuedBy}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-600">Duration:</span>
                <span className="text-gray-800">
                  {certificate["Start Date"]} - {certificate["End Date"]}
                </span>
              </div>

              {/* <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-600">Grade:</span>
                <span className="text-gray-800">95.2%</span>
              </div> */}

              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-600">Location:</span>
                <span className="text-gray-800">{certificate.Location}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-600">
                  Certificate ID:
                </span>
                <span className="text-blue-600 font-medium">
                  {certificate.CertificateID}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-600">Verified On:</span>
                <span className="text-gray-800">
                  {certificate["Verified On"]}
                </span>
              </div>
            </div>

            {/* Project Work Section */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">
                Project Work:
              </h3>
              <p className="text-sm text-gray-600">{certificate.ProjectWork}</p>
            </div>
          </div>

          {/* Right Side - Certificate Display */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="relative">
              {/* Certificate PDF as Image Display */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden aspect-[3/4] mb-4">
                <iframe
                  src={`/intern/certificates/CER${certificateId}.pdf`}
                  className="w-full h-full"
                  title="Certificate PDF"
                />
              </div>

              {/* Action Buttons */}
              <CertificateActions
                certificateId={certificateId}
                certificateName={certificate.Name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
