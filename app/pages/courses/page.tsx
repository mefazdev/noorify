import React from "react";
import Link from "next/link";
import Highlight from "@/app/Highlight";
import { Metadata } from "next";
import { courses } from "@/app/assets/courses";
export const metadata: Metadata = {
  title: "Courses | Noorify Online Islamic Academy",
  description:
    "At Noorify, our one-on-one classes make learning about Islam easyfor everyone, fitting seamlessly into your schedule, whether you're a kid or a parent. Covering key subjects like proper Quran reading (Tajweed), memorization (Hifz), practical understanding of Islamic teachings (Fiqh), and more, we provide accessible and quality learning with free demo classes for all courses. Benefit from the expertise of the best teachers globally, ensuring the highest quality education. It's a wonderful opportunity for anyone worldwide looking to learn about Islamic knowledge online. Join us, and let's embark on a journey of simple, convenient, and enriching learning, guided by the best teachers in the world, right from the comfort of your own space. ",
  keywords:
    "Madrasa Online, Quran Classes, Tajweed Course, Noorify Quran Class, Individual Quran Lessons, Expert Lady Quran Teacher, Free Demo Quran Class, Online Islamic Education, GCC Quran Learning, Global Quran Academy, Noorify madrasa, Online quran, Islamic studies, Best madrasa in the UAE, Global Online Quran, Online Tajweed, Online tution, Lady quran teacher, Dubai madrasa, Best Online islamic academy, Best Online islamic academy in Dubai",
};

export default function page() {
  const data = courses;
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

                        {/* <Link href={`/pages/course?data=${data}`}> */}
                        <Link
                          href={`/pages/course/${d?.slug}/${d?.description}`}
                        >
                          {" "}
                          <button className="text-white  bg-emerald-500 p-1 px-3 rounded   text-sm w-fit mt-8 transition ease-in  duration-300   group-hover:-translate-y-6">
                            More Info
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between">
                    <h4 className="text-lg font-semibold"> {d.name}</h4>
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
