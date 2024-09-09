"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
 
import Image from "next/image";
export default function Navbar() {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [logOuting, setLogOuting] = useState<boolean>(false);
  const logOut = async () => {
    setLogOuting(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PORT}/api/auth/logout`,
        {}
      );

      if (res.ok) {
        // Redirect to the admin dashboard or another page
        window.location.href = "/admin/Login";
        setLogOuting(true);
       
      } else {
        // Handle login error, e.g., show an error message
        // console.error('Admin logout failed');
        setLogOuting(true);
      }
    } catch (error) {
      alert(error);
      setLogOuting(true);
    }
  };
  return (
    <div className="border-b py-4  font-nunit sticky top-0   shadow-md bg-emerald-500 text-white z-50 ">
      <div className="  w-11/12 m-auto grid lg:grid-cols-3 xl:grid-cols-2 justify-between ">
        <div className="flex col-span-2 xl:col-span-1   justify-between">
          <div className=" rounded">
            <Image
              src={'/images/logo-1.png'}
              alt="Best online madrasa Malayalam, Dubai madrasa, Noorify madrasa"
              className="rounded"
              height={80}
              width={150}
            />
          </div>
          <button
            onClick={logOut}
            className="md:hidden bg-red-500   p-1 px-3 rounded-sm text-white ml-4 hover:scale-105  transition ease-linear duration-100 cursor-poin"
          >
            {logOuting ? "Logouting..." : "Logout"}
          </button>
          {!collapse ? (
            <CiMenuFries
              className=" font-sans text-2xl md:hidden"
              onClick={() => setCollapse(true)}
            />
          ) : (
            <TfiClose
              className="text-red-500 font-sans text-2xl md:hidden"
              onClick={() => setCollapse(false)}
            />
          )}

          <div className="hidden md:flex justify-between w-full ml-28    ">
            <Link href={"/admin/dashboard/registrations"}>
              <p className="hover:scale-105 mt-1 transition ease-linear duration-100 cursor-pointer">
                Registrations
              </p>
            </Link>

            <Link href={"/admin/dashboard/feedbacks"}>
              <p className="hover:scale-105 mt-1 transition ease-linear duration-100 cursor-pointer">
                Feedbacks
              </p>
            </Link>
            <Link href={"/admin/dashboard/subscriptions"}>
              <p className="hover:scale-105 mt-1 transition ease-linear duration-100 cursor-pointer">
                Subscriptions
              </p>
            </Link>
            <Link href={"/admin/dashboard/messages"}>
              <p className="hover:scale-105 mt-1 transition ease-linear duration-100 cursor-pointer">
                Messages
              </p>
            </Link>
            <Link href={"/admin/dashboard/blog"}>
              <p className="hover:scale-105 mt-1 transition ease-linear duration-100 cursor-pointer">
                Blogs
              </p>
            </Link>

            <button
              onClick={logOut}
              className="lg:hidden bg-red-500   p-1 px-3 rounded-sm text-white ml-4 hover:scale-105  transition ease-linear duration-100 cursor-poin"
            >
              {logOuting ? "Logouting..." : "Logout"}
            </button>
          </div>
        </div>

        {/* <<<<<<<<<<<< RIGHT SIDE >>>>>>>>> */}
        <div className="hidden lg:grid ">
          <div className=" w-full ">
            <div className="float-right">
              <button
                onClick={logOut}
                className=" bg-red-500   p-1 px-3 rounded-sm text-white ml-4 hover:scale-105  transition ease-linear duration-100 cursor-poin"
              >
                {logOuting ? "Logouting..." : "Logout"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* {collapse ?  */}
      <div
        className={
          collapse
            ? "  bg-gray-900  md:invisible  text-white  border-y px-8 pt-4 pb-5 w-full absolute mt-3  transition-opacity ease-linear duration-200 opacity-90"
            : "transition-opacity ease-out duration-500 delay-200 opacity-0  h-16 w-full absolute mt-3 invisible "
        }
      >
        <div>
          <Link href={"/admin/dashboard/registrations"}>
            <p className="mt-2  " onClick={() => setCollapse(false)}>
              Registrations
            </p>
          </Link>
          <Link href={"/admin/dashboard/feedbacks"}>
            <p className="mt-2  " onClick={() => setCollapse(false)}>
              Feedbacks
            </p>
          </Link>
          <Link href={"/admin/dashboard/subscriptions"}>
            <p className="mt-2  " onClick={() => setCollapse(false)}>
              Subscriptions
            </p>
          </Link>
          <Link href={"/admin/dashboard/messages"}>
            <p className="mt-2  " onClick={() => setCollapse(false)}>
              Messages
            </p>
          </Link>
          <Link href={"/admin/dashboard/blog"}>
            <p className="mt-2  " onClick={() => setCollapse(false)}>
              Blogs
            </p>
          </Link>
        </div>
      </div>
      {/* //  : ''} */}
    </div>
  );
}
