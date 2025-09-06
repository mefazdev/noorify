// 'use client'
// import React from 'react';
// import { 
//   FaGraduationCap, 
//   FaUsers, 
//   FaLightbulb, 
//   FaHeart,
//   FaArrowRight,
//   FaGlobe,
//   FaLaptop,
//   FaHeadset,
//   FaCode
// } from 'react-icons/fa';

// const CareerPage = () => {
//   const benefits = [
//     {
//       icon: FaLaptop,
//       title: "Remote-First Culture",
//       description: "Work from anywhere with flexible hours and modern equipment provided."
//     },
//     {
//       icon: FaGraduationCap,
//       title: "Learning & Development",
//       description: "Annual learning budget and access to our platform courses for personal growth."
//     },
//     {
//       icon: FaHeart,
//       title: "Work Your Way",
//       description: "Enjoy flexible schedules and remote-friendly options that support work-life balance."
//     },
//     {
//       icon: FaGlobe,
//       title: "Global Impact",
//       description: "Make a difference in education worldwide while working with diverse, talented teams."
//     }
//   ];

//   const values = [
//     {
//       icon: FaGraduationCap,
//       title: "Education First",
//       description: "We believe quality education should be accessible to everyone, everywhere."
//     },
//     {
//       icon: FaUsers,
//       title: "Collaboration",
//       description: "We work together, support each other, and celebrate collective achievements."
//     },
//     {
//       icon: FaLightbulb,
//       title: "Innovation",
//       description: "We embrace new ideas and technologies to enhance the learning experience."
//     },
//     {
//       icon: FaHeart,
//       title: "Empathy",
//       description: "We understand our students' needs and create solutions with genuine care."
//     }
//   ];

//   const handleApply = () => {
//     // Replace this URL with your actual Google Form URL
//     const googleFormUrl = "https://forms.gle/hJmtjQ1jhAGZF2Yz8";  
//     window.open(googleFormUrl, '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-emerald-500 to-gray-500 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="text-center">
//             <h1 className="text-3xl md:text-6xl font-bold mb-6">
//               Join Our Mission
//             </h1>
//             <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
//               Help us transform education and empower learners worldwide at Noorify Academy
//             </p>
//             <div className="flex flex-wrap gap-4 gap-y-2 md:gap-0 md:flex-row    justify-center md:space-x-8 text-sm md:text-base">
//               <div className="flex items-center    ">
//                 <FaUsers className="mr-2" />
//                 <span>50+ Team Members</span>
//               </div>
//               <div className="flex items-center ">
//                 <FaGlobe className="mr-2" />
//                 <span>Remote-First</span>
//               </div>
//               <div className="flex items-center  ">
//                 <FaGraduationCap className="mr-2" />
//                 <span>200+ Students</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Company Values */}
//       <section className="py-10 md:py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Values
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               These principles guide everything we do and shape our company culture
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
//                   <value.icon className="text-2xl" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
//                 <p className="text-gray-600">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
//               Why Work With Us?
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               We offer comprehensive benefits and a supportive environment for your growth
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {benefits.map((benefit, index) => (
//               <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
//                 <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4">
//                   <benefit.icon className="text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
//                   <p className="text-gray-600">{benefit.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Apply Section */}
//       <section className="py-10 md:py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
//               Join Our Team
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               We&spos;re always looking for passionate educators, developers, and innovators who want to make a difference in education
//             </p>
//           </div>
          
//           <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 py-8 md:p-12">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-6">
//                 <FaUsers className="text-3xl" />
//               </div>
//               <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
//                 Ready to Shape the Future of Education?
//               </h3>
//               <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//                 Whether you&spos;re a teacher, developer, designer, or education enthusiast, we&spos;d love to hear from you. 
//                 Submit your application and let&spos;s explore how you can contribute to our mission.
//               </p>
//             </div>
            
//             {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <div className="text-center p-4">
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-3">
//                   <FaGraduationCap className="text-xl" />
//                 </div>
//                 <h4 className="font-semibold text-gray-900 mb-2">Education Roles</h4>
//                 <p className="text-sm text-gray-600">Curriculum designers, instructors, and educational consultants</p>
//               </div>
//               <div className="text-center p-4">
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
//                   <FaCode className="text-xl" />
//                 </div>
//                 <h4 className="font-semibold text-gray-900 mb-2">Technical Roles</h4>
//                 <p className="text-sm text-gray-600">Developers, designers, and technical specialists</p>
//               </div>
//               <div className="text-center p-4">
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-3">
//                   <FaHeadset className="text-xl" />
//                 </div>
//                 <h4 className="font-semibold text-gray-900 mb-2">Support Roles</h4>
//                 <p className="text-sm text-gray-600">Student success, operations, and administrative positions</p>
//               </div>
//             </div>
//              */}
//             <div className="text-center">
//               <button
//                 onClick={() => handleApply()}
//                 className="bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center text-lg"
//               >
//                 Apply Now
//                 <FaArrowRight className="ml-3" />
//               </button>
//               <p className="text-sm text-gray-500 mt-4">
//                 We&apos;ll review your application and get back to you within 1-2 weeks
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       {/* <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Don't See the Perfect Role?
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             We're always looking for talented individuals who share our passion for education. 
//             Send us your resume and let's start a conversation.
//           </p>
//           <button
//             onClick={() => handleApply()}
//             className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
//           >
//             Send Your Resume
//             <FaArrowRight className="ml-2" />
//           </button>
//         </div>
//       </section> */}

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-gray-400">
//          Noorify Academy. Building the future of education together.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CareerPage;



'use client'
import React, { useState } from 'react';
import { 
  FaGraduationCap, 
  FaUsers, 
  FaLightbulb, 
  FaHeart,
  FaArrowRight,
  FaGlobe,
  FaLaptop,
  FaHeadset,
  FaCode,
  FaWhatsapp,
  FaCheckCircle
} from 'react-icons/fa';

const CareerPage = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const benefits = [
    {
      icon: FaLaptop,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and modern equipment provided."
    },
    {
      icon: FaGraduationCap,
      title: "Learning & Development",
      description: "Annual learning budget and access to our platform courses for personal growth."
    },
    {
      icon: FaHeart,
      title: "Work Your Way",
      description: "Enjoy flexible schedules and remote-friendly options that support work-life balance."
    },
    {
      icon: FaGlobe,
      title: "Global Impact",
      description: "Make a difference in education worldwide while working with diverse, talented teams."
    }
  ];

  const values = [
    {
      icon: FaGraduationCap,
      title: "Education First",
      description: "We believe quality education should be accessible to everyone, everywhere."
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "We work together, support each other, and celebrate collective achievements."
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We embrace new ideas and technologies to enhance the learning experience."
    },
    {
      icon: FaHeart,
      title: "Empathy",
      description: "We understand our students' needs and create solutions with genuine care."
    }
  ];

  const handleApply = () => {
    if (!termsAccepted) {
      alert("Please accept the terms and conditions before applying.");
      return;
    }
    
    // Replace this URL with your actual Google Form URL
    const googleFormUrl = "https://forms.gle/hJmtjQ1jhAGZF2Yz8";  
    window.open(googleFormUrl, '_blank');
    setIsApplied(true);
  };

  const handleJoinWhatsApp = () => {
    const whatsappUrl = "https://chat.whatsapp.com/DkeiVkuJRNr3Zq49NCVIBA?mode=ems_copy_t";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-gray-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Join Our Mission
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
              Help us transform education and empower learners worldwide at Noorify Academy
            </p>
            <div className="flex flex-wrap gap-4 gap-y-2 md:gap-0 md:flex-row justify-center md:space-x-8 text-sm md:text-base">
              <div className="flex items-center">
                <FaUsers className="mr-2" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center">
                <FaGlobe className="mr-2" />
                <span>Remote-First</span>
              </div>
              <div className="flex items-center">
                <FaGraduationCap className="mr-2" />
                <span>200+ Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <value.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive benefits and a supportive environment for your growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <benefit.icon className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re always looking for passionate educators, developers, and innovators who want to make a difference in education
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 py-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-6">
                <FaUsers className="text-3xl" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Shape the Future of Education?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you&apos;re a teacher, developer, designer, or education enthusiast, we&apos;d love to hear from you. 
                Follow the steps below to join our mission.
              </p>
            </div>
            
            {/* Application Steps */}
            <div className="max-w-2xl mx-auto">
              {/* Step 1: Terms and Conditions */}
              <div className="mb-8 p-6 bg-white rounded-lg border-2 border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Accept Terms & Conditions</h4>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                        I agree to the{' '}
                        <span className="text-blue-600 underline cursor-pointer">
                          terms and conditions
                        </span>{' '}
                        and understand that by applying, I consent to being contacted for recruitment purposes. 
                        I acknowledge that all information provided will be kept confidential and used solely for hiring decisions.
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Submit Application */}
              <div className="mb-8 p-6 bg-white rounded-lg border-2 border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Submit Your Application</h4>
                    <p className="text-gray-600 mb-4">Fill out our application form with your details and experience.</p>
                    <button
                      onClick={handleApply}
                      disabled={!termsAccepted}
                      className={`py-3 px-6 rounded-lg font-semibold transition-all duration-200 inline-flex items-center ${
                        termsAccepted 
                          ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {isApplied ? (
                        <>
                          <FaCheckCircle className="mr-2" />
                          Application Submitted
                        </>
                      ) : (
                        <>
                          Apply Now
                          <FaArrowRight className="ml-2" />
                        </>
                      )}
                    </button>
                    {!termsAccepted && (
                      <p className="text-sm text-red-500 mt-2">Please accept the terms and conditions to proceed</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 3: Join WhatsApp Group */}
              <div className="p-6 bg-white rounded-lg border-2 border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Join Our WhatsApp Group</h4>
                    <p className="text-gray-600 mb-4">
                      After submitting your application, join our WhatsApp group to receive updates and interview invitations. 
                      <strong className="text-green-600"> Interview invitations for selected teachers will be sent through this WhatsApp group.</strong>
                    </p>
                    <button
                      onClick={handleJoinWhatsApp}
                      className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center"
                    >
                      <FaWhatsapp className="mr-2 text-xl" />
                      Join WhatsApp Group
                    </button>
                    <p className="text-sm text-gray-500 mt-2">
                      You&apos;ll receive interview notifications and important updates here
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                We&apos;ll review your application and get back to you within 1-2 weeks through WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Noorify Academy. Building the future of education together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CareerPage;