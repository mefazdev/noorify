import { Metadata } from "next";
import Footer from "./components/Footer"
import Navbar from "./components/navbar"


// export const metadata: Metadata = {
//   title: "Noorify  Online Islamic Academy",
//   description:
//     "At Noorify, our one-on-one classes make learning about Islam easyfor everyone, fitting seamlessly into your schedule, whether you're a kid or a parent. Covering key subjects like proper Quran reading (Tajweed), memorization (Hifz), practical understanding of Islamic teachings (Fiqh), and more, we provide accessible and quality learning with free demo classes for all courses. Benefit from the expertise of the best teachers globally, ensuring the highest quality education. It's a wonderful opportunity for anyone worldwide looking to learn about Islamic knowledge online. Join us, and let's embark on a journey of simple, convenient, and enriching learning, guided by the best teachers in the world, right from the comfort of your own space. ",
 
// };
export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar/> 
   
        {children}
        <Footer/>  
      </section>
    )
  }