import type { Metadata } from "next";

import "./globals.css";
import "./assets/css/app.css";

import { Nunito } from "next/font/google";
import GoogleAnalytics from "@/GoogleAnalytics";
import Script from "next/script";
 
const nunito = Nunito({
  // style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Noorify  Online Islamic Academy",
  description:
    "At Noorify, our one-on-one classes make learning Islam easy and accessible for everyone, fitting seamlessly into your schedule—whether you're a child or a parent. We cover key subjects like Quran reading (Tajweed), memorization (Hifz), and the practical understanding of Islamic teachings (Fiqh). Our courses are designed to offer quality education with the convenience of online learning, featuring free demo classes for all courses. Benefit from the expertise of top global teachers, ensuring the highest standard of Islamic education from the comfort of your own space. This is a wonderful opportunity for anyone worldwide looking to deepen their Islamic knowledge online. Join us and embark on a journey of simple, convenient, and enriching learning, guided by the best teachers in the world.",
    keywords:'Online Quran Kids, Madrasa Online, Quran Classes, Tajweed Course, Noorify Quran Class, Individual Quran Lessons, Expert Lady Quran Teacher, Free Demo Quran Class, Online Islamic Education, GCC Quran Learning, Global Quran Academy, Noorify madrasa, Online quran, Islamic studies, Best madrasa in the UAE, Global Online Quran, Online Tajweed, Online tution, Lady quran teacher, Dubai madrasa, Best Online islamic academy, Best Online islamic academy in Dubai, Premium Madrasa, Islamic Classes GCC, Quran Tutors UAE, Kids Quran Lessons, GCC Quran Academy, Islamic Education Online, Quran Classes Dubai, Quran Hifz Kids, Tajweed for Kids'
,
    openGraph: {
     images:'https://www.noorifyacademy.com/logo.png',
     
    },  
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"      
        />
        </head>
      <body className={nunito.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {children}
        <Script
            src="https://unpkg.com/aos@2.3.1/dist/aos.js"
            strategy="beforeInteractive" // or "afterInteractive" or "lazyOnload"
          />
          <Script id="aos-init" strategy="lazyOnload" />
      </body>
     
    </html>
  );
}
