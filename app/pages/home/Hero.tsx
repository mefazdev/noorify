"use client";
import React, { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import img3 from "../../assets/vectors/team3.png";
import two from "../../assets/vectors/2.png";
import three from "../../assets/vectors/3.png";
import globe from "../../assets/vectors/map.jpg";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";

export default function Hero() {
  const [view, setView] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setView(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className=" pb-16 md:pb-24  md:pt-9 px-4 md:px-0 relative  ">
        <div
          className="absolute  h-96 md:h-102 w-11/12 md:w-7/12   md:right-0 opacity-30 top-0"
          style={{
            backgroundImage: `url(${globe.src})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="grid md:grid-cols-2 ">
          {/* <<<<<< LEFT SiDE >>>>>>>>>>> */}
          <div className="flex items-center  justify-between order-last md:order-first ">
            <div
              style={{ marginLeft: "-420px" }}
              className="bg-gray-100 h-102 w-102 rounded-full  relative  hidden lg:grid  "
            >
              <div className="absolute right-9 top-24 pt-6 ">
                <a
                  href="whatsapp://send?phone=+971556923201"
                  data-action="share/whatsapp/share"
                >
                  <div className="h-6 w-6  bg-emerald-500 rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-linear duration-200">
                    <FaWhatsapp className="text-white" />
                  </div>
                </a>

                <a href="" target="_blank">
                  <div className="h-6 w-6 mt-2 bg-emerald-500 rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-linear duration-200">
                    <FaXTwitter className="text-white text-sm" />
                  </div>
                </a>
                <a href="https://www.youtube.com/@NoorifyAcademy" target="_blank">
                  <div className="h-6 w-6  mt-2 bg-emerald-500 rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-linear duration-200">
                    <FaYoutube className="text-white text-sm" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/noorifymadrasa?igsh=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                >
                  <div className="h-6 w-6 mt-2 bg-emerald-500 rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-linear duration-200">
                    <FaInstagram className="text-white text-sm" />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100091635135740&mibextid=ZbWKwL"
                  target="_blank"
                >
                  <div className="h-6 w-6 mt-2 bg-emerald-500 rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-linear duration-200">
                    <FaFacebookSquare className=" text-sm text-white" />
                  </div>
                </a>

                <a
                  href="https://www.tiktok.com/@noorify.online.ac?_t=8iZsL7whiVu&_r=1"
                  target="_blank"
                >
                  <div className="h-6 w-6 mt-2 bg-emerald-500 rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-linear duration-200">
                    <FaTiktok className=" text-sm text-white" />
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-6 m-auto md:m-auto  ">
              <h2
                className={
                  view
                    ? "ml-20 md:ml-9  font-extrabold text-center md:text-left text-xl md:text-2xl  -translate-x-10 transition    ease-linear duration-500 opacity-100"
                    : "opacity-0"
                }
              >
               
                <span
                  style={{ color: "75, 189, 138" }}
                  className="text-emerald-500 text-4xl md:text-8xl "
                >
                  Noorify{" "}
                </span>{" "}
                <br />
                Online Islamic Academy
              </h2>

              <p
                className={
                  view
                    ? "md:text-lg    text-center md:text-left  translate-y-1 transition duration-500 ease-linear "
                    : "opacity-0"
                }
              >
                Let&apos;s Purify Together :)
              </p>
              <div className="flex md:mt-2">
                <Link href={"/pages/register"} className="m-auto md:m-0 w-fit ">
                  <button
                    className={
                      view
                        ? "bg-emerald-500 mt-10 md:mt-4 text-white py-1 px-5 rounded-sm  m-auto md:m-0  hover:-translate-y-2  -translate-y-1 transition hover:scale-105 ease-linear duration-150 "
                        : "opacity-0"
                    }
                  >
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/*<<<<<<<<<<<<<<, RIGHT SIDE >>>>>>>>>>>>> */}
          <div className="relative ">
            {/* <div
              className="grid grid-cols-2 pt-10 lg:pt-5 lg:w-11/12   "
              
            >
<div className="md:w-full xl:w-72 z-40 mt-10 ">
                <Image src={three} alt="" />
              </div>

              <div className="md:w-full xl:w-72 z-40 mt-10 ">
                <Image src={two} alt="" />
              </div>
               <div className="md:w-full xl:w-72 z-40">
                <Image src={img3} alt="" />
              </div>
              <div className="md:w-full xl:w-72 z-40">
                <Image src={one} alt="" />
              </div>
             
              
              
            </div> */}

            <div className="  grid lg:grid-cols-2">
              <div className=" w-56 m-auto md:w-full  z-40 ">
                <Image src={img3} alt="" />
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-1   ">
                <div className="md:w-full xl:w-72 z-40 m-auto ">
                  <Image src={three} alt="" />
                </div>

                <div className="md:w-full xl:w-72 z-40 m-auto ">
                  <Image src={two} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="whatsapp://send?phone=+971556923201"
        data-action="share/whatsapp/share"
        className="fixed flex justify-center items-center w-10 md:w-12 h-10 md:h-12 bottom-8 md:bottom-16 right-10 md:right-16 bg-emerald-400 text-white rounded-full text-center text-2xl md:text-3xl
      shadow-lg z-50 
      "
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
