   
import React from "react";
 
import Component from "./Component";
import Highlight from "@/app/Highlight";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Regsiter | Noorify Online Islamic Academy",
  description:
    "At Noorify, our one-on-one classes make learning about Islam easyfor everyone, fitting seamlessly into your schedule, whether you're a kid or a parent. Covering key subjects like proper Quran reading (Tajweed), memorization (Hifz), practical understanding of Islamic teachings (Fiqh), and more, we provide accessible and quality learning with free demo classes for all courses. Benefit from the expertise of the best teachers globally, ensuring the highest quality education. It's a wonderful opportunity for anyone worldwide looking to learn about Islamic knowledge online. Join us, and let's embark on a journey of simple, convenient, and enriching learning, guided by the best teachers in the world, right from the comfort of your own space. ",
    keywords:'Madrasa Online, Quran Classes, Tajweed Course, Noorify Quran Class, Individual Quran Lessons, Expert Lady Quran Teacher, Free Demo Quran Class, Online Islamic Education, GCC Quran Learning, Global Quran Academy, Noorify madrasa, Online quran, Islamic studies, Best madrasa in the UAE, Global Online Quran, Online Tajweed, Online tution, Lady quran teacher, Dubai madrasa, Best Online islamic academy, Best Online islamic academy in Dubai'

  };
export default function page() {
  

  return (
   <div>
     <div className=" pb-24 lg:pb-32">
<Component/>
    </div>
    <Highlight/>
   </div>
  );
}
