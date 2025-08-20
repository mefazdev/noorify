import React from 'react';
import { MdEmail, MdDelete, MdSecurity, MdSchedule } from 'react-icons/md';

const DataDeletionRequest = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-gray-400 px-4 md:px-6 py-8 text-white">
          <div className="flex items-center space-x-3">
            <MdDelete className="text-3xl  " />
            <h1 className="text-2xl   md:text-3xl font-bold">Data Deletion Request</h1>
          </div>
          <p className="mt-2 text-blue-100">
            At Noorify, we respect your privacy and give you full control over your personal data.
          </p>
        </div>

        {/* Content */}
        <div className="px-4 md:px-6 py-8 space-y-8">
          {/* Introduction */}
          <div className="text-gray-700">
            <p className="md:text-lg">
              If you wish to delete your account and personal information from our records, please follow the steps below:
            </p>
          </div>

          {/* How to Request */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:flex items-center">
              <MdEmail className="mr-2 mb-2 md:mb-0 text-blue-60  text-center md:text-left" />
              How to Request Data Deletion
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <p className="text-gray-700">
                  Send an email to <a href="mailto:support@noorify.com" className="text-blue-600 hover:underline font-medium">support@noorify.com</a> with the subject line: "Data Deletion Request."
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <p className="text-gray-700 font-medium mb-2">Include the following details in your email:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Full Name</li>
                    <li>Registered Email Address</li>
                    <li>Phone Number (if provided during registration)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* What Will Be Deleted */}
          <div className="bg-red-50 rounded-lg p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">What Will Be Deleted</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Your personal profile details (name, email, phone, etc.)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Class records and progress reports</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Communication history with Noorify</span>
              </li>
            </ul>
          </div>

          {/* What We May Retain */}
          <div className="bg-yellow-50 rounded-lg p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdSecurity className="mr-2 text-yellow-600" />
              What We May Retain
            </h2>
            <p className="text-gray-700 mb-3">Some data may need to be retained for:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Legal, tax, or financial record-keeping as required by UAE law</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Security, fraud prevention, or dispute resolution</span>
              </li>
            </ul>
          </div>

          {/* Processing Timeline */}
          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdSchedule className="mr-2 text-green-600" />
              Processing Timeline
            </h2>
            <p className="text-gray-700">
              We will process your request within <span className="font-semibold text-green-700">7 working days</span> and confirm once your data has been deleted.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">For any questions, please contact us at:</p>
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

export default DataDeletionRequest;