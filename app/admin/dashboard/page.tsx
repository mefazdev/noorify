 import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {cookies} from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard | Admin",
  robots:'noindex,nofollow'
  
  };
export default function page() {
  const adminUser = cookies().get("adminUser")
  if (adminUser ?.value === "true") {
  return (
    <div>
      <div className="px-5 lg:px-0 lg:w-10/12 m-auto mt-12">
        <h4 className="text-2xl font-bold text-center">DASHBOARD</h4>
 
        <div className="mt-16 grid grid-cols-2 gap-7 lg:w-8/12 m-auto">
          <Link href={"/admin/dashboard/registrations"}>
            <div className="border-t border-gray-100 shadow-md w-fi p-5 py-10 cursor-pointer hover:scale-105 transition duration-200 ease-linear">
              <div className="flex items-center justify-center">
                <p className="text-lg font-semibold">Registrations</p>
                <FaArrowRightLong className="ml-4" />
              </div>
            </div>
          </Link>
          <Link href={"/admin/dashboard/feedbacks"}>
            <div className="border-t border-gray-100 shadow-md w-fi p-5 py-10 cursor-pointer hover:scale-105 transition duration-200 ease-linear">
              <div className="flex items-center justify-center">
                <p className="text-lg font-semibold">Feedbacks</p>
                <FaArrowRightLong className="ml-4" />
              </div>
            </div>
          </Link>
          <Link href={"/admin/dashboard/subscriptions"}>
            <div className="border-t border-gray-100 shadow-md w-fi p-5 py-10 cursor-pointer hover:scale-105 transition duration-200 ease-linear">
              <div className="flex items-center justify-center">
                <p className="text-lg font-semibold">Subscriptions</p>
                <FaArrowRightLong className="ml-4" />
              </div>
            </div>
          </Link>{" "}
        
          <Link href={"/admin/dashboard/messages"}>
            <div className="border-t border-gray-100 shadow-md w-fi p-5 py-10 cursor-pointer hover:scale-105 transition duration-200 ease-linear">
              <div className="flex items-center justify-center">
                <p className="text-lg font-semibold">Messages</p>
                <FaArrowRightLong className="ml-4" />
              </div>
            </div>
          </Link>
          <Link href={"/admin/dashboard/blog"}><div className="border-t border-gray-100 shadow-md w-fi p-5 py-10 cursor-pointer hover:scale-105 transition duration-200 ease-linear">
            <div className="flex items-center justify-center">
              <p className="text-lg font-semibold">Blog</p>
              <FaArrowRightLong className="ml-4" />
            </div>
          </div></Link>
        </div>
      </div>
    </div>
  );}else{
    redirect('/admin/Login')
  }
}
