import React from 'react';
import { MdGavel, MdPeople, MdSchool, MdPayment, MdSchedule, MdCopyright, MdWarning, MdBlock, MdBalance, MdEmail } from 'react-icons/md';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4   lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-gray-400 px-6 py-8 text-white">
          <div className="flex items-center space-x-3">
            <MdGavel className="text-3xl  " />
            <h1 className="text-2xl md:text-3xl font-bold   ">Terms & Conditions</h1>
          </div>
          <p className="mt-2 text-purple-100">
            Welcome to Noorify. By accessing or using our website and services, you agree to comply with these Terms & Conditions.
          </p>
          <p className="text-sm text-purple-100 mt-3">Last updated: 20 Aug, 2025</p>
        </div>

        {/* Content */}
        <div className="px-4 md:px-6 py-8 space-y-8">
          {/* Introduction */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-gray-700 font-medium">
              Please read these terms carefully before using our services.
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-blue-50 rounded-lg px-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdPeople className="mr-2 text-blue-600" />
              1. Eligibility
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                {/* <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span> */}
                <p className="text-gray-700">
               <span className='text-blue-500 mr-3'>•</span>   Noorify services are available to parents and students with access to the internet and video-conferencing tools (Zoom/Google Meet).
                </p>
              </div>
              <div className="flex items-start space-x-3">
                {/* <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span> */}
                <p className="text-gray-700">
                <span className='text-blue-500 mr-3'>•</span>     For students under 18, parents/guardians must provide consent and supervise their child&aapos;s use of our services.
                </p>
              </div>
            </div>
          </div>

          {/* Services Provided */}
          <div className="bg-green-50 rounded-lg px-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdSchool className="mr-2 text-green-600" />
              2. Services Provided
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                {/* <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span> */}
                <p className="text-gray-700">
                 <span className='text-green-500 mr-3'>•</span>    Noorify offers live, one-on-one and group Islamic education classes delivered online by qualified teachers.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                {/* <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span> */}
                <p className="text-gray-700">
                <span className='text-green-500 mr-3'>•</span>          Classes are scheduled in advance and conducted via approved platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Payments & Refunds */}
          <div className="bg-orange-50 rounded-lg px-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdPayment className="mr-2 text-orange-600" />
              3. Payments & Refunds
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-gray-800 mb-2">Payment Terms:</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Fees must be paid in advance to confirm enrollment</li>
                  <li>• Payment plans may be offered as per Noorify&apos;s policies</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-gray-800 mb-2">Refund Policy:</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Missed classes by students are generally non-refundable</li>
                  <li>• Teacher unavailability: replacement class or compensation provided</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Attendance & Responsibilities */}
          <div className="bg-purple-50 rounded-lg px-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdSchedule className="mr-2 text-purple-600" />
              4. Attendance & Responsibilities
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-gray-800 mb-2">Parent Responsibilities:</h4>
                <p className="text-gray-600 text-sm">Parents are responsible for ensuring students attend classes on time.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-gray-800 mb-2">Teacher Commitment:</h4>
                <p className="text-gray-600 text-sm">Noorify teachers will make reasonable efforts to deliver high-quality sessions.</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200 border-red-300 bg-red-50">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Conduct Policy:</h4>
                <p className="text-red-600 text-sm">Disruptive or inappropriate behavior may result in suspension of services without refund.</p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-indigo-50 rounded-lg px-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdCopyright className="mr-2 text-indigo-600" />
              5. Intellectual Property
            </h2>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <p className="text-gray-700">
                  <span className="font-semibold">Ownership:</span> All learning materials, videos, and resources provided by Noorify remain the intellectual property of Noorify.
                </p>
              </div>
              <div className="  p-4 rounded-lg border   border-red-300 bg-red-50">
                <p className="text-red-700">
                  <span className="font-semibold">Restrictions:</span> Users may not copy, share, or redistribute Noorify&apos;s content without prior written permission.
                </p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-yellow-50 rounded-lg px-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdWarning className="mr-2 text-yellow-600" />
              6. Limitation of Liability
            </h2>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <p className="text-gray-700">
                  Noorify provides education services with care and professionalism, but we are not responsible for how the knowledge is applied outside class.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <p className="text-gray-700">
                  Noorify is not liable for technical issues, internet disruptions, or third-party platform failures (e.g., Zoom/Google Meet outages).
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-red-50 rounded-lg px-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdBlock className="mr-2 text-red-600" />
              7. Termination
            </h2>
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <p className="text-gray-700">
                Noorify reserves the right to suspend or terminate services if fees are unpaid, policies are violated, or misconduct occurs.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-gray-100 rounded-lg px-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdBalance className="mr-2 text-gray-600" />
              8. Governing Law
            </h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-gray-700">
                These Terms & Conditions are governed by the laws of the <span className="font-semibold">United Arab Emirates (UAE)</span>. Any disputes will be subject to the jurisdiction of UAE courts.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg px-4 py-6 md:p-6 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 flex items-center justify-center">
              <MdEmail className="mr-2" />
              9. Contact Us
            </h3>
            <p className="text-gray-600 mb-4">
              For questions about these Terms & Conditions, please contact us at:
            </p>
            <a 
              href="mailto:support@noorify.com" 
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              <MdEmail />
              <span>support@noorify.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;