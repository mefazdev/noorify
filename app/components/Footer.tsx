import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdBusiness } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

import Image from "next/image";
export default function Footer() {
  return (
    <div className=" pt-16 md:pt-24   ">
      <div className=" px-8 md:px-0 md:w-10/12 m-auto pb-16 ">
        <div className="grid lg:grid-cols-4 gap-7">
          <div className="">
            <p>
              At Noorify, our one-on-one classes make learning Islam easy and
              accessible for everyone, fitting seamlessly into your
              schedule—whether you&apos;re a child or a parent. We cover key subjects
              like Quran reading (Tajweed), memorization (Hifz), and the
              practical understanding of Islamic teachings (Fiqh). Our courses are designed to offer quality education with the convenience of online learning, featuring free demo classes for all courses.
            </p>

            <div className="mt-3 flex">
              <a href="https://www.youtube.com/@NoorifyAcademy" target="_blank">
                <div className="bg-emerald-500 text-white border border-emerald-500  p-1.5 rounded w-fit hover:-translate-y-1 transition ease-in duration-100 hover:scale-105">
                  <FaYoutube className="text-lg" />
                </div>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100091635135740&mibextid=ZbWKwL"
                target="_blank"
              >
                <div className="ml-2 bg-emerald-500 text-white border border-emerald-500  p-1.5 rounded w-fit hover:-translate-y-1 transition ease-in duration-100 hover:scale-105">
                  <FaFacebook className="text-lg" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/noorifymadrasa?igsh=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                <div className="ml-2 bg-emerald-500 text-white border border-emerald-500  p-1.5 rounded w-fit hover:-translate-y-1 transition ease-in duration-100 hover:scale-105">
                  <FaInstagram className="text-lg" />
                </div>
              </a>
              <a href="" target="_blank">
                <div className="ml-2 bg-emerald-500 text-white border border-emerald-500  p-1.5 rounded w-fit hover:-translate-y-1 transition ease-in duration-100 hover:scale-105">
                  <FaXTwitter className="text-lg" />
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@noorify.online.ac?_t=8iZsL7whiVu&_r=1"
                target="_blank"
              >
                <div className="ml-2 bg-emerald-500 text-white border border-emerald-500  p-1.5 rounded w-fit hover:-translate-y-1 transition ease-in duration-100 hover:scale-105">
                  <FaTiktok className="text-lg" />
                </div>
              </a>
              <a
                href="whatsapp://send?phone=+971556923201"
                data-action="share/whatsapp/share"
              >
                <div className="ml-2 bg-emerald-500 text-white border border-emerald-500  p-1.5 rounded w-fit hover:-translate-y-1 transition ease-in duration-100 hover:scale-105">
                  <FaWhatsapp className="text-lg" />
                </div>
              </a>
            </div>
          </div>
          <div className="lg:flex justify-center">
            <div className="   font-semibold text-gray-">
              <h3 className="text-lg text-emerald-500 font-bold">
                Useful Links
              </h3>
              <Link href={"/"}>
                <p className="mt-2   transition ease-in duration-100 hover:scale-105 cursor-pointer">
                  Home
                </p>
              </Link>
              <Link href={"/pages/about"}>
                <p className="mt-2 ease-in duration-100 hover:scale-105 cursor-pointer">
                  About
                </p>
              </Link>
              <Link href={"/pages/courses"}>
                <p className="mt-2 ease-in duration-100 hover:scale-105 cursor-pointer">
                  Courses
                </p>
              </Link>
              <Link href={"/pages/blogs"}>
                <p className="mt-2 ease-in duration-100 hover:scale-105 cursor-pointer">
                  Blogs
                </p>
              </Link>
              <Link href={"/pages/contact"}>
                <p className="mt-2 ease-in duration-100 hover:scale-105 cursor-pointer">
                  Contact
                </p>
              </Link>
              <Link href={"/pages/register"}>
                <p className="mt-2 ease-in duration-100 hover:scale-105 cursor-pointer">
                  Register
                </p>
              </Link>
               
               <Link href={"/pages/privacy-policy"}>
                <p className="mt-2 ease-in duration-100 hover:scale-105 cursor-pointer">
               Privacy Policy
                </p>
              </Link><Link href={"/pages/terms"}>
                <p className="mt-2 ease-in duration-100 hover:scale-105 cursor-pointer">
                Terms & Conditions
                </p>
              </Link>
               <Link href={"/pages/data-deletion-request"}>
                <p className="mt-2 ease-in duration-100 hover:scale-105 cursor-pointer">
           Data Deletion Request
                </p>
              </Link>
            </div>
          </div>
          <div className=" lg:flex justify-center">
            <div className="md:m-aut mt-0 font-semibold text-gray-">
              <h3 className="text-lg text-emerald-500 font-bold">
                Get In Touch
              </h3>
              <div className="flex mt-2">
                <FaPhoneAlt />
                <p className="ml-1">+971 55 692 3201</p>
              </div>
              <div className="flex mt-2">
                <BiLogoGmail className="text-lg" />
                <p className="ml-1">noorifyacademy@gmail.com</p>
              </div>
              <div className="flex mt-2">
                <IoMdBusiness className="text-lg" />
                <p className="ml-1">
                  {" "}
                  Dubai, United Arab Emirates <br />
                </p>
              </div>
            </div>
          </div>
          <div className="m-auto">
            <div className="w-[200px] h-[150px]     relative hidden lg:grid">
              <Image
                src="/images/logo-1.png"
                alt="Best online Hifz Course, Tajweed Course, Quran Classes, Noorify Quran Class,GCC Quran Learning,Global Quran Academy"
                className="rounded object-cove"
                fill
              />
            </div>
            {/* <p className="text-emerald-500 font-bold text-3xl">LOGO</p> */}
          </div>
        </div>
      </div>

      <div className="border-t  py-4 border-gray-300">
        <div className="px-5 md:px-0 md:w-10/12 m-auto lg:flex">
          <p className="text-sm">© Noorify 2023. All Rights reserved</p>
          <a
            href="whatsapp://send?phone=+918606256402"
            data-action="share/whatsapp/share"
          >
            <p className="text-sm lg:ml-10">Developed by Booreact</p>
          </a>
        </div>
      </div>
    </div>
  );
}
