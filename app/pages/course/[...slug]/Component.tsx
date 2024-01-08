"use client";
import React from "react";
import Link from "next/link";
import { courses } from "../../../assets/courses";

export default function Component({ slug }: any) {
  function getObjectByName(slug: string) {
    return courses.find((item) => item.slug === slug);
  }
  const d = getObjectByName(slug);
  return (
    <div className="px-5 lg:px-0 lg:w-10/12 m-auto">
      <div className="w-fit">
        <h1 className="text-cente text-xl lg:text-3xl text-emerald-500 font-semibold">
          {d?.name}
        </h1>
        <div className="border-t w-11/12 m-auto  mt-1 border-gray-600"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-9 mt-12">
        <div>
          <div
            className=" h-56 lg:h-72 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${d?.image})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="shadow-md p-3 mt-3 rounded-lg">
            <p className="">{d?.description}</p>
          </div>
        </div>

        <div className="md:col-span-2  p-2 py-6 lg:py-0 lg:p-6 shadow-md">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
            {d?.features?.map((f: any, i: any) => {
              return (
                <div
                  key={i}
                  className="p-2 pl-4 h-fit  rounded-md shadow-sm border-l-4 border-emerald-400 bg-gray-50"
                >
                  <p> {f} </p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-10 md:mt-6 lg:mt-16 pb-4 ">
            <a
              href="whatsapp://send?phone=+971556923201"
              data-action="share/whatsapp/share"
            >
              <button className="m-auto w-full  border border-emerald-500 p-1.5 rounded-md px-4 shadow-sm hover:-translate-y-1 transition ease-in duration-150 hover:scale-105">
                Get A Free Demo
              </button>
            </a>
            <Link href={"/pages/register"}>
              <button className="m-auto   w-full bg-emerald-500 text-white p-1.5 rounded-md px-4 hover:-translate-y-1 transition ease-in duration-150 hover:scale-105 ">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
