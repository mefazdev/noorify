import type { Metadata } from "next";

import "./globals.css";
import "./assets/css/app.css";

import { Nunito } from "next/font/google";
import GoogleAnalytics from "@/GoogleAnalytics";
 
const nunito = Nunito({
  // style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Noorify  Online Islamic Academy",
  description:
    "At Noorify, our one-on-one classes make learning about Islam easyfor everyone, fitting seamlessly into your schedule, whether you're a kid or a parent. Covering key subjects like proper Quran reading (Tajweed), memorization (Hifz), practical understanding of Islamic teachings (Fiqh), and more, we provide accessible and quality learning with free demo classes for all courses. Benefit from the expertise of the best teachers globally, ensuring the highest quality education. It's a wonderful opportunity for anyone worldwide looking to learn about Islamic knowledge online. Join us, and let's embark on a journey of simple, convenient, and enriching learning, guided by the best teachers in the world, right from the comfort of your own space. ",
    keywords:'Madrasa Online, Quran Classes, Tajweed Course, Noorify Quran Class, Individual Quran Lessons, Expert Lady Quran Teacher, Free Demo Quran Class, Online Islamic Education, GCC Quran Learning, Global Quran Academy, Noorify madrasa, Online quran, Islamic studies, Best madrasa in the UAE, Global Online Quran, Online Tajweed, Online tution, Lady quran teacher, Dubai madrasa, Best Online islamic academy, Best Online islamic academy in Dubai'
,
    openGraph: {
     images:'https://www.noorifyacademy.com/icon.jpeg',
     
    },  
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {children}
      </body>
    </html>
  );
}
