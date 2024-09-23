"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import img from "../../assets/vectors/about.png";
import Link from "next/link";
export default function About() {
  useEffect(() => {
    import("aos").then((aos) => {
      aos.init({
        /* your configuration options */
      });
    });
  }, []);
  return (
    <div className="bg-blue-50 py-12 md:py-24   ">
      <div className="px-5 md:px-0 md:w-10/12 m-auto">
        <div className=" grid lg:grid-cols-2 gap-10">
          <div data-aos="fade-right" className="order-last md:order-first">
            <h6 className=" text-xl md:text-2xl font-bold uppercase">
              About Noorify
            </h6>
            <div className="border-t w-20 border-black"></div>
            <p className="mt-4">
              {/* At Noorify, our one-on-one classes make learning Islam easy and
              accessible for everyone, fitting seamlessly into your
              schedule—whether you&apos;re a child or a parent. We cover key
              subjects like Quran reading (Tajweed), memorization (Hifz), and
              the practical understanding of Islamic teachings (Fiqh). Our
              courses are designed to offer quality education with the
              convenience of online learning, featuring free demo classes for
              all courses. Benefit from the expertise of top global teachers,
              ensuring the highest standard of Islamic education from the
              comfort of your own space. This is a wonderful opportunity for
              anyone worldwide looking to deepen their Islamic knowledge online.
              Join us and embark on a journey of simple, convenient, and
              enriching learning, guided by the best teachers in the world.   */}
              Noorify Online Academy offers top-quality, one-on-one Islamic
              education for adults and children across the GCC (UAE, Saudi
              Arabia, Qatar, Kuwait, Oman, Bahrain) and other countries. Our
              courses include Quran reading (Tajweed), memorization (Hifz), and
              Islamic teachings (Fiqh), taught by expert global teachers. We
              specialize in personalized lessons that fit seamlessly into your
              schedule, whether you&apos;re a busy parent or student.
              <br /> 
              At Noorify, we are dedicated to providing the best online Islamic
              education in the GCC and worldwide. Our experienced instructors
              ensure the highest standard of learning, available from the
              comfort of your home. We also offer free demo classes to help you
              experience our premium service before enrolling.
              <br />
            </p>

            <div className="flex">
              <Link href={"/pages/about"} className="m-auto">
                <button className="shadow  m-auto mt-4  rounded-full p-2 px-6 hover:bg-emerald-600 hover:text-white transition duration-300 ease-linear hover:translate-x-1">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="md:w-10/12 m-auto  " data-aos="fade-left">
            <Image src={img} alt="Global Online quran " />
          </div>
        </div>
      </div>
    </div>
  );
}
