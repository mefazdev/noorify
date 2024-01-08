import React from "react";
import { GiFaceToFace } from "react-icons/gi";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
export default function Features() {
  return (
    <div className=" mt-5 lg:mt-16 p-10">
      <div className="grid lg:grid-cols-5 gap-7">
        <div className="  shadow-md p-3 rounded-3xl hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
          <div className="bg-white   m-auto shadow-lg h-24 w-24 rounded-full flex justify-center items-center">
            <GiFaceToFace className="text-5xl text-emerald-500 " />
          </div>
          <p className="text-center mt-3  font-semibold ">
            Personalised 1:1 Sessions
          </p>
        </div>
        <div className="shadow-md p-3 rounded-3xl  hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
          <div className="bg-white   m-auto shadow-lg h-24 w-24 rounded-full flex justify-center items-center">
            <GrLanguage className="text-5xl text-emerald-500 " />
          </div>
          <p className="text-center mt-3  font-semibold ">Gloabal Accebility</p>
        </div>
        <div className="shadow-md p-3 rounded-3xl  hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
          <div className="bg-white   m-auto shadow-lg h-24 w-24 rounded-full flex justify-center items-center">
            <HiComputerDesktop className="text-5xl text-emerald-500 " />
          </div>
          <p className="text-center mt-3  font-semibold ">Free Course Demos</p>
        </div>
        <div className="shadow-md p-3 rounded-3xl  hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
          <div className="bg-white   m-auto shadow-lg h-24 w-24 rounded-full flex justify-center items-center">
            <IoLanguage className="text-5xl text-emerald-500 " />
          </div>
          <p className="text-center mt-3  font-semibold hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
            Diverse Language Options
          </p>
        </div>
        <div className="shadow-md p-3 rounded-3xl  hover:-translate-y-2 hover:scale-105 transition duration-200 ease-linear">
          <div className="bg-white   m-auto shadow-lg h-24 w-24 rounded-full flex justify-center items-center">
            <FaFileInvoiceDollar className="text-5xl text-emerald-500 " />
          </div>
          <p className="text-center mt-3  font-semibold ">100% Refund </p>
        </div>
      </div>
    </div>
  );
}
