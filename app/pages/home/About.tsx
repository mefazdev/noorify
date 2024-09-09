'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import img from "../../assets/vectors/about.png";
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
              At Noorify, our one-on-one classes make learning Islam easy and
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
              enriching learning, guided by the best teachers in the world.  
            </p>
          </div>

          <div className="md:w-10/12 m-auto  " data-aos="fade-left">
            <Image src={img} alt="Global Online quran " />
          </div>
        </div>
      </div>
    </div>
  );
}
