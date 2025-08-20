import React from 'react';
import { MdPrivacyTip, MdInfo, MdShare, MdSecurity, MdCookie, MdPerson, MdChildCare, MdEmail } from 'react-icons/md';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4  lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-gray-400 px-6 py-8 text-white">
          <div className="flex items-center space-x-3">
            <MdPrivacyTip className="text-3xl" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          <p className="mt-2 text-green-100">
            At Noorify, we value your trust and are committed to protecting your privacy.
          </p>
          <p className="text-sm text-green-100 mt-3">Last updated:  Aug 20, 2025</p>
        </div>

        {/* Content */}
        <div className="px-4 md:px-6 py-8 space-y-8">
          {/* Introduction */}
          <div className="text-gray-700">
            <p className="md:text-lg">
              This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-blue-50 rounded-lg p-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdInfo className="mr-2 text-blue-600 hidden md:block" />
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">When you use Noorify, we may collect:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Personal Details:</h4>
                  <p className="text-gray-600 text-sm">Name, email, phone number, and billing information.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Student Details:</h4>
                  <p className="text-gray-600 text-sm">Age, language level, and learning preferences (provided by parents).</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Payment Information:</h4>
                  <p className="text-gray-600 text-sm">Processed securely through trusted third-party payment gateways.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Usage Data:</h4>
                  <p className="text-gray-600 text-sm">Website visits, browser type, cookies, and interactions with our platform.</p>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-green-50 rounded-lg p-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xlfont-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Deliver our educational services</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Communicate with you regarding classes, updates, and support</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Process payments securely</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Improve our website, services, and student experience</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Comply with legal or regulatory requirements</span>
              </li>
            </ul>
          </div>

          {/* Data Sharing & Security */}
          <div className="bg-purple-50 rounded-lg p-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdShare className="mr-2 text-purple-600" />
              3. Data Sharing & Security
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <p className=" font-semibold text-red-600 mb-2">
                  ✗ We do not sell or rent your personal data.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <p className="text-gray-700 font-semibold mb-2">Information is only shared with:</p>
                <ul className="space-y-1 text-gray-600 ml-4">
                  <li>• Qualified Noorify teachers (to conduct classes)</li>
                  <li>• Payment gateways (for secure transactions)</li>
                  <li>• Authorities if required by UAE law</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <p className="text-gray-700">
                  <MdSecurity className="inline mr-2 text-purple-600" />
                  We implement strict security measures to protect your data against unauthorized access.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies & Tracking */}
          <div className="bg-orange-50 rounded-lg p-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdCookie className="mr-2 text-orange-600" />
              4. Cookies & Tracking
            </h2>
            <p className="text-gray-700">
              Our website uses cookies and analytics tools to improve user experience. You can disable cookies in your browser settings, but some features may not work properly.
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-indigo-50 rounded-lg p-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xlfont-semibold text-gray-800 mb-4 flex items-center">
              <MdPerson className="mr-2 text-indigo-600" />
              5. Your Rights
            </h2>
            <p className="text-gray-700 mb-4">As a Noorify user, you have the right to:</p>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white p-4 rounded-lg border border-indigo-200 text-center">
                <div className="text-indigo-600 text-2xl mb-2">👁️</div>
                <p className="text-sm font-medium text-gray-800">Access and review your data</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-indigo-200 text-center">
                <div className="text-indigo-600 text-2xl mb-2">✏️</div>
                <p className="text-sm font-medium text-gray-800">Request corrections to your information</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-indigo-200 text-center">
                <div className="text-indigo-600 text-2xl mb-2">🗑️</div>
                <p className="text-sm font-medium text-gray-800">Request account or data deletion</p>
              </div>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-pink-50 rounded-lg p-4 py-6 md:p-6">
            <h2 className="text-xl md:text-2xlfont-semibold text-gray-800 mb-4 flex items-center">
              <MdChildCare className="mr-2 text-pink-600" />
              6. Children's Privacy
            </h2>
            <p className="text-gray-700">
              Our services are designed for children under the supervision of their parents/guardians. Parents are responsible for providing consent and monitoring their child's usage of Noorify.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gray-100 rounded-lg p-4 py-6 md:p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center justify-center">
              <MdEmail className="mr-2" />
              7. Contact Us
            </h3>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or how your data is handled, please contact us:
            </p>
            <a 
              href="mailto:support@noorify.com" 
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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

export default PrivacyPolicy;