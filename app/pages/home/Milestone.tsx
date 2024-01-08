"use client";
import React, { useState } from "react";
import pc from "../../assets/images/student.jpg";
import { FaGlobeAmericas } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
import { GiFaceToFace } from "react-icons/gi";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
export default function Milestone() {
  const [didViewCountUp, setState] = useState<boolean>(false);

  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setState(true);
    }
  };
  return (
    <div
      className="mt-16 md:mt-16"
      style={{
        backgroundImage: `url(${pc.src})`,
        backgroundSize: "cover",

        backgroundPosition: "center",
      }}
    >
      <div
        className="h-full pt-16 md:pt-24  pb-16 md:pb-32"
        style={{ background: "rgba(0, 0, 0, 0.68)" }}
      >
        <div className="md:w-9/12 m-auto  ">
          <h4 className="text-white text-center font-bold text-xl md:text-3xl">
            Quick Overview
          </h4>

          <div className="border-t border-emerald-500 w-24 m-auto"></div>
          <div className="  gri grid-cols-  ">
            <div className="grid grid-cols-2 md:grid-cols-4    md:gap-7 mt-14">
              <div className="m-aut ">
                <FaGlobeAmericas className=" text-5xl md:text-6xl text-emerald-500 m-auto" />
                <ReactVisibilitySensor
                  scrollCheck={true}
                  onChange={onVisibilityChange}
                  delayedCall
                >
                  <h6 className="text-center text-white text-3xl md:text-4xl font-bold mt-3 font-sans">
                    <CountUp
                      start={0}
                      end={didViewCountUp ? 15 : 0}
                      duration={2}
                    />
                    +
                  </h6>
                </ReactVisibilitySensor>
                <p className="text-center text-white text-lg mt-2">Countries</p>
              </div>
              <div className="m-aut">
                <PiStudent className="text-5xl md:text-6xl text-emerald-500 m-auto" />
                <ReactVisibilitySensor
                  scrollCheck={true}
                  onChange={onVisibilityChange}
                  delayedCall
                >
                  <h6 className="text-center text-white text-3xl md:text-4xl font-bold mt-3 font-sans">
                    <CountUp
                      start={0}
                      end={didViewCountUp ? 1500 : 0}
                      duration={2}
                    />
                    +
                  </h6>
                </ReactVisibilitySensor>

                <p className="text-center text-white text-lg mt-2">Students</p>
              </div>
              <div className="m-aut mt-12 md:mt-0">
                <PiChalkboardTeacherLight className="text-5xl md:text-6xl text-emerald-500 m-auto" />
                <ReactVisibilitySensor
                  scrollCheck={true}
                  onChange={onVisibilityChange}
                  delayedCall
                >
                  <h6 className="text-center text-white text-3xl md:text-4xl font-bold mt-3 font-sans">
                    <CountUp
                      start={0}
                      end={didViewCountUp ? 130 : 0}
                      duration={2}
                    />
                    +
                  </h6>
                </ReactVisibilitySensor>
                <p className="text-center text-white text-lg mt-2">Tutors</p>
              </div>
              <div className="m-aut mt-12 md:mt-0">
                <IoBookSharp className="text-5xl md:text-6xl text-emerald-500 m-auto" />
                <ReactVisibilitySensor
                  scrollCheck={true}
                  onChange={onVisibilityChange}
                  delayedCall
                >
                  <h6 className="text-center text-white text-3xl md:text-4xl font-bold mt-3 font-sans">
                    <CountUp
                      start={0}
                      end={didViewCountUp ? 5 : 0}
                      duration={3}
                    />
                    +
                  </h6>
                </ReactVisibilitySensor>
                <p className="text-center text-white text-lg mt-2">Courses</p>
              </div>
            </div>

            <div className="grid px-5 lg:px-0 md:grid-cols-2  lg:grid-cols-4 gap-6 mt-16 md:mt-28">
              <div className="h-16   shadow-sm shadow-white rounded-full flex justify-center items-center hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
                <GiFaceToFace className="text-emerald-500 text-5xl " />
                <p className="text-white ml-3 text-lg">1:1 Sessions</p>
              </div>

              <div className="h-16    shadow-sm shadow-white rounded-full flex justify-center items-center hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
                <HiComputerDesktop className="text-emerald-500 text-4xl " />
                <p className="text-white ml-3 text-lg">Free Demo Courses</p>
              </div>
              <div className="h-16   shadow-sm shadow-white rounded-full flex justify-center items-center hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
                <GrLanguage className="text-emerald-500 text-4xl " />
                <p className="text-white ml-3 text-lg">Global Access</p>
              </div>

              <div className="h-16    shadow-sm shadow-white rounded-full flex justify-center items-center hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
                <FaFileInvoiceDollar className="text-emerald-500 text-4xl " />
                <p className="text-white ml-3 text-lg">100% Refund</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
