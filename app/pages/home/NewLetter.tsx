"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { IoCheckmarkDone } from "react-icons/io5";
export default function NewLetter() {
  const [open, setOpen] = React.useState<boolean>(false);
const [email,setEmail] = useState<string>('')
const [nullemail,setnullEmail] = useState<boolean>(false)
const [sending,setSending] = useState<boolean>(false)
const [done,setDone] = useState<boolean>(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const subscribe = async () => {

    if(!email?.includes('@')){
     setnullEmail(true)
    }else{
      setSending(true)
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/subscription`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          email:email,
          timeStamp: new Date(),
          }),
        });
  
       
        setEmail('')
        setSending(false)
        setDone(true)
      handleClose()
      } catch (error) {
        setSending(false)
       alert(error)
      }
    }
   
    
  };
  return (
    <div className="mt-10 md:mt-24 bg-black  border-b border-gray-800">
      <div className=" px-5 md:px-0 md:w-10/12 m-auto py-14 lg:flex justify-between">
        <div className="text-white ">
          <h5 className="text-emerald-500 text-2xl font-semibold ">
            Stay Updated with the Latest Courses and Trends.
          </h5>
          <p>
            Subscribe to Our Daily Newsletter for Fresh Insights and Updates
          </p>
        </div>
        
       {done ?  <button
           
           className="border flex items-center border-white mt-6 lg:mt-0 text-white w-full lg:w-fit h-fit py-2 px-5 bg-emerald-500 "
         >
       SUBSCRIBED
       <IoCheckmarkDone className='ml-2 text-xl' />
         </button> :<button
          onClick={handleClickOpen}
          className="border border-white mt-6 lg:mt-0 text-white w-full lg:w-fit h-fit py-2 px-5 bg-black transition-colors hover:bg-emerald-500 hover:border-none outline-none ease-linear duration-150"
        >
      SUBSCRIBE
        </button>}
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          {/* <DialogContentText> */}
          <p>
            {/* To subscribe to this website, */}
             Please enter your email address here.
            We will send updates occasionally.
          </p>

          {/* </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            className="text-red-400"
            error={!email.includes('@') && nullemail ? true  : false}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={subscribe}>{sending?  'SENDING...' : 'SUBSCRIBE'}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
