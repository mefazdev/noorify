"use client";
import Link from "next/link";
import React, { useEffect } from "react";

interface CourseProps {
  doc: any;
}

const Course: React.FC<CourseProps> = ({ doc }) => {
  useEffect(() => {
    import("aos").then((aos) => {
      aos.init({
        /* your configuration options */
      });
    });
  }, []);
  return (
    <div data-aos="fade-up-right">
     
      <div
    
        className="p-2 lg:p-4 mt-4 lg:mt-10  m-auto w-full lg:w-11/12   shadow-lg rounded-md group hover:-translate-y-1 duration-300 ease-linear"
      >
        <div
          className="w-full h-60 rounded-md relative"
          style={{
            backgroundImage: `url(${doc.image})`,
            backgroundSize: "cover",
          }}
        >
          <div
            style={{ background: "rgba(0, 0, 0, 0.68)" }}
            className="h-full flex items-center invisible group-hover:visible rounded-md p-6 pt-7 text-md  "
          >
            <div>
              <p className="text-white  -ml-3 transition ease-in  duration-300   group-hover:translate-x-2  ">
                {doc.description}
              </p>

              {/* <Link href={`/pages/course?data=${data}`}> */}
              <Link href={`/pages/course/${doc?.slug}/${doc?.description}`}>
                {" "}
                <button className="text-white  bg-emerald-500 p-1 px-3 rounded   text-sm w-fit mt-8 transition ease-in  duration-300   group-hover:-translate-y-6">
                  More Info
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-3 flex justify-between">
          <h4 className="text-lg font-semibold"> {doc.name}</h4>
          <div className="bg-emerald-500 text-white p-1 px-2.5 rounded-lg ">
            <p className="text-sm">{doc.level}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
