import React from "react";
import { GrLanguage } from "react-icons/gr";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { GiFaceToFace } from "react-icons/gi";
import { FaHeadSideVirus } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
export default function Highlight() {
  return (
    <div className=" py-6 mt-36 bg-black ">
      <div className="lg:w-10/12 m-auto grid   grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <div className="w-fit m-auto">
          <GiFaceToFace className="text-emerald-500 text-3xl m-auto " />
          <p className="text-emerald-500 mt-1 text-sm">1:1 One Sessions</p>
        </div>
        <div className="w-fit m-auto">
          <FaChalkboardTeacher className="text-emerald-400 text-3xl m-auto " />
          <p className="text-emerald-400 mt-1 text-sm">Expert Teachers</p>
        </div>
        <div className="w-fit m-auto">
          <IoIosTime className="text-emerald-400 text-3xl m-auto " />
          <p className="text-emerald-400 mt-1 text-sm">Flexible Time Slots</p>
        </div>
        <div className="w-fit m-auto  hidden lg:grid">
          <HiComputerDesktop className="text-emerald-400 text-3xl m-auto " />
          <p className="text-emerald-400 mt-1 text-sm">Free Course Demos</p>
        </div>
        <div className="w-fit m-auto hidden lg:grid  ">
          <FaHeadSideVirus className="text-emerald-400 text-3xl m-auto " />
          <p className="text-emerald-400 mt-1 text-sm">NLP-Based Teaching</p>
        </div> 
        <div className="w-fit m-auto  hidden lg:grid">
          <FaFileInvoiceDollar className="text-emerald-400 text-3xl m-auto " />
          <p className="text-emerald-400 mt-1 text-sm">100% Refund</p>
        </div>
      </div>
    </div>
  );
}
