"use client";
import React, { useEffect } from "react";

import madrasaE from "../../assets/images/courses/online-madrasa-english.jpg";
import madrasaM from "../../assets/images/courses/online-madrasa-malayalam.jpg";
import hifz from "../../assets/images/courses/hifz.jpg";
import tajweed from "../../assets/images/courses/thajweed.jpg";
import ladies from "../../assets/images/courses/ladies.jpg";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Link from "next/link";
export default function Courses() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = [
    {
      name: "Madrasa (English)",
      slug: "madrasa-english",
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
      // keyWord:'Best online madrasa English, Dubai madrasa, Noorify madrasa'
    },
    {
      name: "Madrasa (Malayalam)",
      slug: "madrasa-malayalam",
      description:
        "Free book delivery, expert teachers, individual attention, fun-oriented curriculum, convenient time slots, free demo.",
      image: madrasaM.src,
      level: "Level : 1-5",
      // keyWord:'Best online madrasa Malayalam, Dubai madrasa, Noorify madrasa',
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
      name: "Hifz Course",
      slug: "hifz-course",
      description:
        "Specialized program for the memorization of the Holy Quran with personalized guidance",
      image: hifz.src,
      level: "All Level",
      // keyWord:'Best online Hifz Course, Tajweed Course, Quran Classes, Noorify Quran Class,GCC Quran Learning,Global Quran Academy',
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
      slug: "tajweed-course",
      description:
        "In-depth study focusing on the proper pronunciation and recitation of Quranic verses.",
      image: tajweed.src,
      level: "All Level",
      // keyWord:'Best Tajweed Course Online, Quran Classes, Noorify Quran Class,GCC Quran Learning,Global Quran Academy,Global Online quran, Online Tajweed,Lady quran teacher ',

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
      slug: "ladies-course",
      description:
        "Tailored classes designed exclusively for female learners, providing a comfortable and inclusive learning environment.",
      image: ladies.src,
      level: "All Level",

      // keyWord:'Best Islamic ladies course online,Lady quran teacher, Best Online islamic academy, Expert Lady Quran Teacher ',

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
  ];

  useEffect(() => {
    import("aos").then((aos) => {
      aos.init({
        /* your configuration options */
      });
    });
  }, []);
  return (
    <div data-aos="fade-up" className=" px-4 md:px-0 md:w-10/12 m-auto  pt-10 md:pt-20">
      <h6 className=" text-xl md:text-3xl font-bold  text-center" >
        Popular Courses
      </h6>
      <div className="border-t w-14 border-black m-auto"></div>

      <div className="mt-10">
        <Carousel
          responsive={responsive}
          autoPlay
          draggable={true}
          showDots={true}
          infinite={true}
          keyBoardControl={true}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          {data?.map((d, i) => {
            const data = JSON.stringify(d);
            return (
              <div
                key={i}
                className="p-3 lg:p-4 mb-10 lg:mb-20  m-auto lg:w-11/12   shadow-lg rounded-md group"
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
                    <div className="">
                      <p className="text-white  -ml-3 transition ease-in  duration-300   group-hover:translate-x-2  ">
                        {d.description}{" "}
                      </p>

                      {/* <Link href={`/pages/course?data=${data}`}> */}
                      <Link href={`/pages/course/${d?.slug}/${d?.description}`}>
                        <button className="text-white  bg-emerald-500 p-1 px-3 rounded   text-sm w-fit mt-8 transition ease-in  duration-300   group-hover:-translate-y-6">
                          More Info
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex justify-between">
                  <h4 className="text-lg font-semibold">{d.name} </h4>
                  <div className="bg-emerald-500 text-white p-1 px-2.5 rounded-lg ">
                    <p className="text-sm">{d.level}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
