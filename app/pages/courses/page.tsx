"use client";
import React from "react";
import madrasaE from "../../assets/images/courses/online-madrasa-english.jpg";
import madrasaM from "../../assets/images/courses/online-madrasa-malayalam.jpg";
import foundation from "../../assets/images/courses/foundation.jpg";
import hifz from "../../assets/images/courses/hifz.jpg";
import ladies from "../../assets/images/courses/ladies.jpg";
import practical from "../../assets/images/courses/practical.jpg";
import professional from "../../assets/images/courses/professional.jpg";
import thajweed from "../../assets/images/courses/thajweed.jpg";
import behavior from "../../assets/images/courses/behavior.png";
import malayalam from "../../assets/images/courses/malayalam.jpg";
import arabic from "../../assets/images/courses/arabic.jpeg";
import spokenArabic from "../../assets/images/courses/spoken-arabic.jpg";
import spokenEnglish from "../../assets/images/courses/spoken-english.jpeg";
import forign from "../../assets/images/courses/forign.jpg";
import caligraphy from "../../assets/images/courses/caligraphy.jpg";
import mehandi from "../../assets/images/courses/mehandi.jpg";
import Link from "next/link";
import Highlight from "@/app/Highlight";
export default function page() {
  const data = [
    {
      name: "Madrasa (English)",
      description:
        "Free book delivery, expert teachers, individual attention, fun-oriented curriculum, convenient time slots, free demo",
      image: madrasaE.src,
      level: "Level : 1-5",
      features: [
        "For 5 to 14 Ages",
        "Duration : 40 Minutes/ Session (Mon-Fri)",
        "Free Book Delivery",
        "Expert Teachers",
        "Individual Attention",
        "Fun-oriented Curriculam",
        "Convenient Time Slots",
        "Free Demo",
      ],
    },
    {
      name: "Madrasa (Malayalam)",
      description:
        "Free book delivery, expert teachers, individual attention, fun-oriented curriculum, convenient time slots, free demo.",
      image: madrasaM.src,
      level: "Level : 1-5",
      features: [
        "For 5 to 14 Ages",
        "Duration : 40 Minutes/ Session (Mon-Fri)",
        "Free Book Delivery",
        "Expert Teachers",
        "Individual Attention",
        "Fun-oriented Curriculam",
        "Convenient Time Slots",
        "Free Demo",
      ],
    },
    {
      name: "Professional Course",
      description:
        "Tailored to Student's Needs, Language and Area-specific focus, Customized Curriculam, Convenient Time Slots",
      image: professional.src,
      level: "All Level",
      features: [
        "For  All Ages",
        "Tailored to Student's Needs",
        "Language and Area-specific focus",
        "Convenient Time Slots",
        "Customized Curriculam",
        "NLP-based teaching",
        "Free Demo",
        "100% Refund Guarantee",
      ],
    },
    {
      name: "Foundation Course",
      description:
        "Comprehensive introductory course covering fundamental principles and knowledge in Islamic studies",
      image: foundation.src,
      level: "All Level",
      features: [
        "For  All Ages",
        "Personalized 1:1 sessions",
        "Expert Teachers",
        "Convenient Time Slots",
        "Global accessibility",
        "NLP-based teaching",
        "Free Demo",
        "100% Refund Guarantee",
      ],
    },
    {
      name: "Hifz Course",
      description:
        "Specialized program for the memorization of the Holy Quran with personalized guidance",
      image: hifz.src,
      level: "All Level",
      features: [
        "For  All Ages",
        "Personalized 1:1 sessions",
        "Expert Teachers",
        "Convenient Time Slots",
        "Global accessibility",
        "NLP-based teaching",
        "Free Demo",
        "100% Refund Guarantee",
      ],
    },
    {
      name: "Tajweed Course",
      description:
        "In-depth study focusing on the proper pronunciation and recitation of Quranic verses.",
      image: thajweed.src,
      level: "All Level",
      features: [
        "For  All Ages",
        "Personalized 1:1 sessions",
        "Expert Teachers",
        "Convenient Time Slots",
        "Global accessibility",
        "NLP-based teaching",
        "Free Demo",
        "100% Refund Guarantee",
      ],
    },

    {
      name: "Ladies Course",
      description:
        "Tailored classes designed exclusively for female learners, providing a comfortable and inclusive learning environment.",
      image: ladies.src,
      level: "All Level",
      features: [
        "For  All Ages",
        "Personalized 1:1 sessions",
        "Expert Teachers",
        "Convenient Time Slots",
        "Global accessibility",
        "NLP-based teaching",
        "Free Demo",
        "100% Refund Guarantee",
      ],
    },
    {
      name: "Fiqh Practical",
      description:
        "Practical application of Islamic jurisprudence in daily life, emphasizing real-world scenarios.",
      image: practical.src,
      level: "All Level",
      features: [
        "For  All Ages",
        "Personalized 1:1 sessions",
        "Expert Teachers",
        "Convenient Time Slots",
        "Global accessibility",
        "NLP-based teaching",
        "Free Demo",
        "100% Refund Guarantee",
      ],
    },
    {
      name: "Islamic Behavioral Formation",
      description:
        "Course dedicated to nurturing positive Islamic behavior and character development.",
      image: behavior.src,
      level: "All Level",
      features: [
        "For  All Ages",
        "Personalized 1:1 sessions",
        "Expert Teachers",
        "Convenient Time Slots",
        "Global accessibility",
        "NLP-based teaching",
        "Free Demo",
        "100% Refund Guarantee",
      ],
    },
    {
      name: "Malayalam LSRW",
      description:
        "Language program specifically catering to Malayalam-speaking individuals, facilitating a deeper understanding of Islamic teachings.",
      image: malayalam.src,
      level: "All Level",
      features: [
        "For  All Ages",
        "Personalized 1:1 sessions",
        "Expert Teachers",
        "Convenient Time Slots",
        "Global accessibility",
        "NLP-based teaching",
        "Free Demo",
        "100% Refund Guarantee",
      ],
    },
    {
      name: "Spoken Arabic",
      description:
        " Conversational Arabic course for practical communication, emphasizing spoken language skills.",
      image: spokenArabic.src,
      level: "All Level",
      features: [
        "For  All Ages",
        "Personalized 1:1 sessions",
        "Expert Teachers",
        "Convenient Time Slots",
        "Global accessibility",
        "NLP-based teaching",
        "Free Demo",
        "100% Refund Guarantee",
      ],
    },
    {
      name: "Calligraphy",
      description:
        "Artistic course focusing on Arabic calligraphy, blending language and visual expression.",
      image: caligraphy.src,
      level: "All Level",
      features: [
        "For  All Ages",
        "Personalized 1:1 sessions",
        "Expert Teachers",
        "Convenient Time Slots",
        "Global accessibility",
        "NLP-based teaching",
        "Free Demo",
        "100% Refund Guarantee",
      ],
    },
    {
      name: "Arabic LSRW Course",
      description:
        "Comprehensive language course covering Listening, Speaking, Reading, and Writing in Arabic.",
      image: arabic.src,
      level: "All Level",
      features: [
        "For  All Ages",
        "Personalized 1:1 sessions",
        "Expert Teachers",
        "Convenient Time Slots",
        "Global accessibility",
        "NLP-based teaching",
        "Free Demo",
        "100% Refund Guarantee",
      ],
    },
    {
      name: "Spoken English",
      description:
        "Practical English language course focusing on conversational skills.",
      image: spokenEnglish.src,
      level: "All Level",
      features: [
        "For  All Ages",
        "Personalized 1:1 sessions",
        "Expert Teachers",
        "Convenient Time Slots",
        "Global accessibility",
        "NLP-based teaching",
        "Free Demo",
        "100% Refund Guarantee",
      ],
    },
    {
      name: "Foreign Language Course",
      description: "Explore the world through language diversity!",
      image: forign.src,
      level: "All Level",
      features: [
        "Languages: Spanish, Korean, Chinese, German, French, Japanese, Italian, Russian",
        "Trainer: Expert language instructor",
        "Approach: Individual attention, Practice oriented",
        "Sessions: Whatsapp and live classes",
        
        "Free Demo",
        
      ],
    },
    {
      name: "Mehendi Class",
      description: "Join us for a vibrant Mehendi learning experience!",
      image: mehandi.src,
      level: "All Level",
      features: [
        "Focus: Individual attention",
        "PApproach: Practical oriented",
        "Guarantee:  100% result",
        "Support: 24/7 Doubt clearing sessions",
        "Perks: Free henna delivery",
        "Platforms: Whatsapp and live classes",
        "Instructor: Expert lady trainer"
        
      ],
    },
  ];
  return (
    <div>
      
      <div>
        <div className="px-5 lg:px-0 lg:w-11/12 m-auto pt-6 lg:pt-16 ">
          <div className="bg-gray-50  rounded-xl lg:rounded-3xl py-2   lg:py-6 relative shadow-sm ">
            <div className="bg-white  rounded-3xl invisible lg:visible   ml-3    px-2 p-1 w-fit text-sm lg:text-md absolute">
              <p>Home / Courses</p>
            </div>

            <h1 className="text-center text-xl lg:text-3xl text-gray-600 font-bold">
              Courses
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mt-8">
            {data.map((d, i) => {
              const data = JSON.stringify(d);

              return (
                <div
                  key={i}
                  className="p-4 mt-4 lg:mt-10  m-auto w-full lg:w-11/12   shadow-lg rounded-md group"
                >
                  <div
                    className="w-full h-60 rounded-md relative"
                    style={{
                      backgroundImage: `url(${d.image})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      style={{ background: "rgba(0, 0, 0, 0.68)" }}
                      className="h-full flex items-center invisible group-hover:visible rounded-md p-6 pt-7 text-md  "
                    >
                      <div>
                        <p className="text-white  -ml-3 transition ease-in  duration-300   group-hover:translate-x-2  ">
                          {d.description}
                        </p>

                        <Link href={`/pages/course?data=${data}`}>
                          <button className="text-white  bg-emerald-500 p-1 px-3 rounded   text-sm w-fit mt-8 transition ease-in  duration-300   group-hover:-translate-y-6">
                            More Info
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between">
                    <h4
                      className="text-lg font-semibold"
                      onClick={() => console.log(data, "data")}
                    >
                      {" "}
                      {d.name}
                    </h4>
                    <div className="bg-emerald-500 text-white p-1 px-2.5 rounded-lg ">
                      <p className="text-sm">{d.level}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Highlight />  
    </div>
  );
}
