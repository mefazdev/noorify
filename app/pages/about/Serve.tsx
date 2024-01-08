import React from "react";
import madrasa from "../../assets/images/courses/online-madrasa-malayalam.jpg";
import hifz from "../../assets/images/courses/hifz.jpg";
import ladies from "../../assets/images/courses/ladies.jpg";
import prof from "../../assets/images/courses/professional.jpg";
export default function Serve() {
  return (
    <div className="mt-16">
      <div className="w-fit m-auto p-2  text-lg lg:text-xl font-bold rounded-lg">
        <h5 className="tex-center">We Serve</h5>
        <div className="border-t border-gray-400 mt-1"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-7 lg:gap-10 mt-8 ">
        <div className="p-4   m-auto lg:w-11/12   shadow-lg rounded-md hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
          <div
            className="w-full h-60 rounded-md relative"
            style={{
              backgroundImage: `url(${madrasa.src})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <div className="mt-3 flex justify-between">
              <h4 className="text-lg font-semibold text-emerald-600">
                Individual Madrasa{" "}
              </h4>
              <div className="bg-emerald-500 text-white p-1 px-2 rounded-lg ">
                <p className="text-sm">One to One</p>
              </div>
            </div>
            <p className="mt-2">
              Free book delivery, expert teachers, individual attention,
              fun-oriented curriculum, convenient time slots, free demo
            </p>
          </div>
        </div>
        <div className="p-4 m-auto     lg:w-11/12 shadow-lg rounded-md hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
          <div
            className="w-full h-60 rounded-md"
            style={{
              backgroundImage: `url(${ladies.src})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <div className="mt-3 flex justify-between">
              <h4 className="text-lg font-semibold text-emerald-600">
                Ladies Course{" "}
              </h4>
              <div className="bg-emerald-500 text-white p-1 px-2.5 rounded-lg ">
                <p className="text-sm">One to One</p>
              </div>
            </div>
            <p className="mt-2">
              Tailored classes designed exclusively for female learners,
              providing a comfortable and inclusive learning environment.
            </p>
          </div>
        </div>

        <div className="p-4 m-auto  lg:w-11/12 shadow-lg rounded-md hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
          <div
            className="w-full h-60 rounded-md"
            style={{
              backgroundImage: `url(${hifz.src})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <div className="mt-3 flex justify-between">
              <h4 className="text-lg font-semibold text-emerald-600">
                Hifz Course{" "}
              </h4>
              <div className="bg-emerald-500 text-white p-1 px-2.5 rounded-lg ">
                <p className="text-sm">One to One</p>
              </div>
            </div>
            <p className="mt-2">
              Specialized program for the memorization of the Holy Quran with
              personalized guidance.
            </p>
          </div>
        </div>

        <div className="p-4 m-auto    lg:w-11/12 shadow-lg rounded-md hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
          <div
            className="w-full h-60 rounded-md"
            style={{
              backgroundImage: `url(${prof.src})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <div className="mt-3 flex justify-between">
              <h4 className="text-lg font-semibold text-emerald-600">
                Islamic Course for Professionals{" "}
              </h4>
              <div className="bg-emerald-500 text-white p-1 px-2 rounded-lg ">
                <p className="text-sm">One to One</p>
              </div>
            </div>
            <p className="mt-2">
              Tailored to Student&apos;s Needs, Language and Area-specific
              focus, Customized Curriculam, Convenient Time Slots
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
