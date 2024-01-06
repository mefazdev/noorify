'use client'
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
 
  
  FaXTwitter,
} from "react-icons/fa6";
import { Alert, IconButton, TextField } from "@mui/material";
import Highlight from "@/app/Highlight";
import { IoCloseCircleOutline } from "react-icons/io5";
 
 

export default function Component() {


  const [name,setName]= useState<string>("")
  const [email,setEmail ]= useState<string>("")
  const [subject,setSubject ]= useState<string>("")
  const [message,setMessage ]= useState<string>("")
  const [nullname,setnullName]= useState<boolean>(false)
  const [nullemail,setnullEmail ]= useState<boolean>(false)
  const [nullsubject,setnullSubject ]= useState<boolean>(false)
  const [nullmessage,setnullMessage ]= useState<boolean>(false)
  const [sending,setSending ]= useState<boolean>(false)
  const [onAlert,setOnAlert ]= useState<boolean>(false)



const validate = ()=>{
  if(!name) {
    setnullName(true)
  }else if(!email){
  setnullEmail(true)
  }else if(!subject){
    setnullSubject(true)
  }else if(!message){
    setnullMessage(true)
  }else{
  send()
  }
}
  const send = async ()=>{
    setSending(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/contact`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email:email,
          subject:subject,
          message:message,
          timeStamp: new Date(),
        }),
      });

      setSending(false);
      setName(""); 
      setEmail("");
      setSubject("");
      setMessage('')
      setOnAlert(true)
    } catch (error) {
      setSending(false)
      alert(error)
    }
  }

  
  return (
  <div>
    <div  >
      <div className="px-5 lg:px-0 lg:w-11/12 m-auto pt-6 lg:pt-12   ">
        <div className="bg-gray-50  rounded-xl lg:rounded-xl py-2   lg:py-5 relative shadow-sm ">
          <div className="bg-white  rounded-3xl invisible lg:visible   ml-3    px-2 p-1 w-fit text-sm lg:text-md absolute">
            <p>Home / Contact</p>
          </div>

          <h1 className="text-center  text-xl lg:text-3xl text-gray-600 font-bold">
            Contact Us
          </h1>
        </div>

        <div className=" mt-10 lg:mt-24 lg:w-10/12 m-auto">
          <h5 className=" text-xl lg:text-2xl font-bold text-emerald-500">
            We Would Love to Hear From You
          </h5>
 
          <div className=" mt-7 lg:mt-12   m-auto grid md:grid-cols-2 gap-10 lg:gap-16 ">
            <div className="lg:w-10/12">
              <div className="flex border-b p-3 py-6 ">
                <FaLocationDot className="text-2xl text-gray-600" />
                <h6 className="ml-3">Dubai, United Arab Emirates</h6>
              </div>

              <div className="flex border-b p-3  py-6 ">
                <FaPhoneAlt className="text-2xl text-gray-600" />
                <h6 className="ml-3">+971 55 692 3201</h6>
              </div>

              <div className="flex border-b p-3 py-6   ">
                <BiLogoGmail className="text-2xl text-gray-600" />
                <h6 className="ml-3">noorifyacademy@gmail.com</h6>
              </div>

              <div className="mt-10">
                <h6 className="text-lg font-bold text-gray-700">Follow Us</h6>

                <div className="flex mt-2">
                <a href="https://www.facebook.com/profile.php?id=100091635135740&mibextid=ZbWKwL" target="_blank"><FaFacebook className="text-lg text-gray-700 hover:scale-105 hover:-translate-y-0.5 transition ease-linear duration-100 cursor-pointer" /></a>
                <a href="https://www.instagram.com/noorifymadrasa?igsh=OGQ5ZDc2ODk2ZA==" target="_blank"><FaInstagram className="text-lg text-gray-700 ml-3 hover:scale-105 hover:-translate-y-0.5 transition ease-linear duration-100 cursor-pointer" /></a>
                <a href="" target="_blank"><FaXTwitter className="text-lg text-gray-700 ml-3 hover:scale-105 hover:-translate-y-0.5 transition ease-linear duration-100 cursor-pointer" /></a>
                </div>
              </div>
            </div>

            <div className="lg:w-10/12 m-auto relative">
            {onAlert ? <Alert className="absolute z-50   w-full"
          action={
            <IconButton 
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOnAlert(false);
              }}
            >
              <IoCloseCircleOutline className='text-xl' />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
         We&apos;ve received your message!. Thank you
        </Alert> :''}
              <div>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  type="text"
                  error={!name && nullname ? true : false}
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
                <TextField
                  className="mt-6"
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  error={!email && nullemail? true : false}
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <TextField
                  className="mt-6"
                  fullWidth
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  type="text"
                  error={!subject && nullsubject? true : false}
                  value={subject}
                  onChange={(e)=>setSubject(e.target.value)}
                />
                <TextField
                  className="mt-6"
                  multiline
                  rows={3}
                  fullWidth
                  type="text"
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                  error={!message && nullmessage ? true : false}
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                />



                 <button className="bg-emerald-500 text-white w-full mt-4 p-3 hover:scale-105 transition ease-linear"
                onClick={validate}
                >
                 {sending ?'SENDING...' :' SEND'}
                </button>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Highlight/>
  </div>
  );
}
