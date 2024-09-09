'use client'
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
        <h5 className="text-gray-600 t
        xt-l  text-cente">Home / About</h5>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 lg:gap-9 mt-12">
        <div data-aos="fade-right" className="mt-6 order-last lg:order-first">
          <h6 className=" text-emerald-500 text-xl">
            Let&apos;s Purify Together
          </h6>
          <p className="mt-2">
            At Noorify, our one-on-one classes make learning Islam easy and
            accessible for everyone, fitting seamlessly into your
            schedule—whether you&apos;re a child or a parent. We cover key subjects
            like Quran reading (Tajweed), memorization (Hifz), and the practical
            understanding of Islamic teachings (Fiqh). Our courses are designed
            to offer quality education with the convenience of online learning,
            featuring free demo classes for all courses. Benefit from the
            expertise of top global teachers, ensuring the highest standard of
            Islamic education from the comfort of your own space. This is a
            wonderful opportunity for anyone worldwide looking to deepen their
            Islamic knowledge online. Join us and embark on a journey of simple,
            convenient, and enriching learning, guided by the best teachers in
            the world.
          </p>
          <div className="flex">
            <Link href={"/pages/register"} className="m-auto  w-fit">
              <button className="bg-emerald-500  mt-10 md:mt-2 text-white py-1 px-5 rounded-sm    hover:-translate-y-1    transition hover:scale-105 ease-linear duration-150 ">
                Join Now
              </button>
            </Link>
          </div>
        </div>

        <div data-aos="fade-left" className="bg-white rounded-r-full rounded-tr-md rounded-tl-full">
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
