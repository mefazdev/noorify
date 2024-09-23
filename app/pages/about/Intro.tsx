"use client";
import React, { useEffect } from "react";
import fam from "../../assets/vectors/fam.jpg";
import Image from "next/image";
import Link from "next/link";
export default function Intro() {
  useEffect(() => {
    import("aos").then((aos) => {
      aos.init({
        /* your configuration options */
      });
    });
  }, []);
  return (
    <div className=" bg-gray-100 p-5 lg:p-7">
      <div className="w-fit bg-white p-1 rounded-xl px-3">
        <h5
          className="text-gray-600 t
        xt-l  text-cente"
        >
          Home / About
        </h5>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 lg:gap-9 mt-12">
        <div data-aos="fade-right" className="mt-6 order-last lg:order-first">
          <h6 className=" text-emerald-500 text-xl">
            Let&apos;s Purify Together
          </h6>
          <p className="mt-2">
            Noorify Online Academy offers top-quality, one-on-one Islamic
            education for adults and children across the GCC (UAE, Saudi Arabia,
            Qatar, Kuwait, Oman, Bahrain) and other countries. Our courses
            include Quran reading (Tajweed), memorization (Hifz), and Islamic
            teachings (Fiqh), taught by expert global teachers. We specialize in
            personalized lessons that fit seamlessly into your schedule, whether
            you&apos;re a busy parent or student.
            <br />
            At Noorify, we are dedicated to providing the best online Islamic
            education in the GCC and worldwide. Our experienced instructors
            ensure the highest standard of learning, available from the comfort
            of your home. We also offer free demo classes to help you experience
            our premium service before enrolling.
            <br />
            Join Noorify today and begin your journey toward advanced Islamic
            knowledge with the personalized attention and premium quality
            trusted by students in the GCC and beyond. At Noorify, we believe in
            delivering the best Islamic education online. Our expert teachers
            ensure you get the highest standard of learning from the comfort of
            your home. We also offer free demo classes, so you can experience
            our premium service before enrolling. <br/>
            Join us at Noorify to start your journey toward expert-level Islamic
            knowledge with personalized attention and quality you can trust.
          </p>
          <div className="flex">
            <Link href={"/pages/register"} className="m-auto  w-fit">
              <button className="bg-emerald-500  mt-10 md:mt-2 text-white py-1 px-5 rounded-sm    hover:-translate-y-1    transition hover:scale-105 ease-linear duration-150 ">
                Join Now
              </button>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="bg-white rounded-r-full rounded-tr-md rounded-tl-full"
        >
          <div className="w-10/12 m-auto">
            <Image
              alt="Best online madrasa Malayalam, Dubai madrasa, Noorify madrasa"
              src={fam}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
