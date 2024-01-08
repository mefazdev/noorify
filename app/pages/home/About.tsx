import Image from "next/image";
import React from "react";
import img from "../../assets/vectors/about.png";
export default function About() {
  return (
    <div className="bg-blue-50 py-12 md:py-24   ">
      <div className="px-5 md:px-0 md:w-10/12 m-auto">
        <div className=" grid lg:grid-cols-2 gap-10">
          <div className="order-last md:order-first">
            <h6 className=" text-xl md:text-2xl font-bold uppercase">
              About Noorify
            </h6>
            <div className="border-t w-20 border-black"></div>
            <p className="mt-4">
              At Noorify, our one-on-one classes make learning about Islam easy
              for everyone, fitting seamlessly into your schedule, whether
              you&apos;re a kid or a parent. Covering key subjects like proper
              Quran reading (Tajweed), memorization (Hifz), practical
              understanding of Islamic teachings (Fiqh), and more, we provide
              accessible and quality learning with free demo classes for all
              courses. Benefit from the expertise of the best teachers globally,
              ensuring the highest quality education. It&apos;s a wonderful
              opportunity for anyone worldwide looking to learn about Islamic
              knowledge online. Join us, and let&apos;s embark on a journey of
              simple, convenient, and enriching learning, guided by the best
              teachers in the world, right from the comfort of your own space.
            </p>
          </div>

          <div className="md:w-10/12 m-auto  ">
            <Image src={img} alt="Global Online quran " />
          </div>
        </div>
      </div>
    </div>
  );
}
