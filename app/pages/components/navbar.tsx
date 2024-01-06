"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import logo from '../../assets/images/logo.jpeg'
export default function Navbar() {

  const [collapse,setCollapse] = useState<boolean>(false)
  const pathname = usePathname()
  return (
    <div className="border-b py-4  font-nunit sticky top-0   shadow-md bg-white z-50 ">
      <div className="  w-11/12 m-auto grid lg:grid-cols-3 xl:grid-cols-2 justify-between ">
        {/* LEFT SIDE  */}
        <div className="flex col-span-2 xl:col-span-1   justify-between">
          {/* <p className="text-emerald-500">LOGO</p> */}
          <div className="w-10 lg:w-14 h-10 rounded ">
       <Image src={logo}  alt='Best online madrasa English, Dubai madrasa, Noorify madrasa' className="rounded"/>
       </div>
        {!collapse ? <CiMenuFries className="text-teal-600 font-sans text-2xl md:hidden"
          onClick={()=>setCollapse(true)}
          /> :  <TfiClose className='text-red-500 font-sans text-2xl md:hidden'   onClick={()=>setCollapse(false)}/>
        }
          
         
          <div className="hidden md:flex justify-between w-full ml-28 uppercase text-emerald-500 ">
            <Link href={'/'} className={`link ${pathname === '/' ? 'font-bold' : ''}`} ><p
            
            className="hover:scale-105 mt-1 transition ease-linear duration-100 cursor-pointer">
              Home
            </p></Link>
            <Link href={'/pages/about'} className={`link ${pathname === '/pages/about' ? 'font-bold' : ''}`}><p className="hover:scale-105 mt-1  transition ease-linear duration-100 cursor-pointer">
              About
            </p></Link>
            
            <Link href={'/pages/courses'} className={`link ${pathname === '/pages/courses' ? 'font-bold' : ''}`}><p className="hover:scale-105 mt-1 transition ease-linear duration-100 cursor-pointer">
              Courses
            </p></Link>
            <Link href={'/pages/blogs'} className={`link ${pathname === '/pages/blogs' ? 'font-bold' : ''}`}><p className="hover:scale-105 mt-1 transition ease-linear duration-100 cursor-pointer">
              Blogs
            </p></Link>

            <Link href={'/pages/contact'} className={`link ${pathname === '/pages/contact' ? 'font-bold' : ''}`}><p className="hover:scale-105 mt-1 transition ease-linear duration-100 cursor-pointer">
              Contact US
            </p></Link>
            <Link href={'/pages/register'}  ><button className="bg-emerald-500 mt-1  p-1 px-3 rounded-md text-white  lg:hidden">
              Register Now
            </button></Link>
          </div>
        </div>

        {/* <<<<<<<<<<<< RIGHT SIDE >>>>>>>>> */}
        <div className="hidden lg:grid ">
          <div className=" w-full ">
            <div className="float-right">
               
              <a href="whatsapp://send?phone=+971556923201" data-action="share/whatsapp/share"><button className=" border border-emerald-500 rounded-sm px-4 py-1 hover:scale-105  transition ease-linear duration-100 cursor-poin">
                Get Free Demo
              </button></a>
              <Link href={'/pages/register'}><button className="bg-emerald-500   p-1 px-3 rounded-sm text-white ml-4 hover:scale-105  transition ease-linear duration-100 cursor-poin">
                Register Now
              </button></Link>
            </div>
            {/* <button>Register Now</button> */}
          </div>
        </div>
      </div>

{/* {collapse ?  */}
  <div className={collapse ? '  bg-gray-900  md:invisible  text-white  border-y px-8 pt-4 pb-5 w-full absolute mt-3  transition-opacity ease-linear duration-200 opacity-90' : 'transition-opacity ease-out duration-500 delay-200 opacity-0  h-16 w-full absolute mt-3 invisible ' }>

    <div >
    <Link href={'/'} className={`link ${pathname === '/' ? 'text-emerald-400' : ''}`}><p className="mt-2  " onClick={()=>setCollapse(false)}>Home</p></Link>
    <Link href={'/pages/about'} className={`link ${pathname === '/pages/about' ? 'text-emerald-400' : ''}`}><p className="mt-2  " onClick={()=>setCollapse(false)}>About</p></Link>
    <Link href={'/pages/courses'} className={`link ${pathname === '/pages/courses' ? 'text-emerald-400' : ''}`}><p className="mt-2 " onClick={()=>setCollapse(false)}>Courses</p></Link>
    <Link href={'/pages/blogs'} className={`link ${pathname === '/pages/blogs' ? 'text-emerald-400' : ''}`}><p className="mt-2  " onClick={()=>setCollapse(false)}>Blogs</p></Link>
    <Link href={'/pages/contact'} className={`link ${pathname === '/pages/contact' ? 'text-emerald-400' : ''}`}><p className="mt-2  " onClick={()=>setCollapse(false)}>Contact Us</p></Link>
    <Link href={'/pages/register'} className={`link ${pathname === '/pages/register' ? 'text-emerald-400' : ''}`}><p className="mt-2 " onClick={()=>setCollapse(false)}>Register</p></Link>
    <a href="whatsapp://send?phone=+971556923201" data-action="share/whatsapp/share"><p className="mt-2 ">Get Free Demo</p>
</a>
 
              

    </div>
  </div>
    {/* //  : ''} */}
     </div>
  );
}
