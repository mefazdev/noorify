"use client";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  TextField,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import Carousel from "react-material-ui-carousel";

export default function Feedback() {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  // const [relation, setRelation] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nullname, setnullName] = useState<boolean>(false);
  const [nullcountry, setnullCountry] = useState<boolean>(false);
  const [nullmessage, setnullMessage] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);

  const [onAlert, setOnAlert] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validate = () => {
    if (!name) {
      setnullName(true);
    } else if (!country) {
      setnullCountry(true);
    } else if (!message) {
      setnullMessage(true);
    } else {
      sendFeedback();
    }
  };

  const sendFeedback = async () => {
    setSending(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/feedback`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          country: country,

          message: message,
          timeStamp: new Date(),
        }),
      });

      setSending(false);
      setOpen(false);
      setOnAlert(true);
    } catch (error) {}
  };

  const doc = [
    {
      name: "Sunaina Riyas",
      designation: "Food vlogger,  UAE",
      time: "3 weeks ago",
      text: `One of the best online islamic Academy as my son is studying with
              them past 4 years, well trained teachers, flexible class timing,
              teachers teach in a very creative way, my son is very curious to
              join every single day.They don’t give any homework which is the
              best part. Specially people Abroad must try this online classes
              it’s very very good. It’s really hassle free for us as well as
              kids.`,
    },
    {
      name: "Jamsheeda Badar",
      designation: "Doctor,  UAE ",
      time: "3 hours ago",
      text: "Dr. Jamsheeda here… Delighted with Noorify Academy’s impact on my fourth grader , Jazin Badar Pariyarath … In 3 years his religlious knowledge and prayer performance have flourished… The faculty is outstanding, too friendly to kids.. Grateful for their dedicated team and looking forward to continued excellence.",
    },
    {
      name: "Shahnaz sana",
      designation: "Homemaker, UAE",
      time: "4 weeks ago",
      text: "My son nahyan,he is 6 year old and now it’s almost 3 month he is studying online classes with Noorify islamic academy,myself and my son enjoys his online classes, teacher is friendly safeeda and he enjoys his Arabic classes,happy to be with Noorify classes",
    },
  ];

  useEffect(() => {
    import("aos").then((aos) => {
      aos.init({
        /* your configuration options */
      });
    });
  }, []);
  return (
    <div data-aos="fade-right" className="mt-10 md:mt-24 ">
      <div className="md:w-9/12 px-5 md:p-0 m-auto   h-full">
        <div className="flex justify-between items-center">
          <div>
            <h3 className=" text-xl md:text-3xl font-bold text-center">
              Client Reviews
            </h3>
            <div className="border-t  m-auto mt-2 border-black"></div>
          </div>

          <a
            href="https://g.co/kgs/tz1qKk4"
            target="_blank"
            className="w-fit flex items-center gap-1 border p-1 lg:p-2 px-2 lg:px-4 border-emerald-500 rounded hover:bg-emerald-500 hover:text-white transition-all duration-300 ease-linear   "
          >
            View More
          </a>
        </div>

        <div className=" m-auto mt-10 md:mt-16   pb-3">
          <Carousel
            interval={4000}
            swipe={true}
            animation="slide"
            navButtonsAlwaysVisible
            // autoPlay={false}
          >
            {doc.map((d) => (
              <div key={d.name} className="min-h-[350px]  ">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="p-1 bg-white w-fit rounded-full border">
                      <div className="relative h-24 w-24 ">
                        <Image
                          src={"/images/women.png"}
                          alt="Online Quran Kids"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h5 className=" text-lg lg:text-xl font-bold">
                        {d.name}
                      </h5>
                      <h6  >{d.designation}</h6>
                    </div>
                  </div>

                  <div className="relative h-16 w-16 hidden md:grid">
                    <Image
                      src={"/images/google.png"}
                      alt="Premium Madrasa"
                      fill
                      className="object-cove  "
                    />
                  </div>
                </div>

                <div className="mt-4 w-full lg:w-fit flex justify-between items-center">
                  <div>
                  <div className="flex">
                    <MdOutlineStar className="text-[#FFD700] text-2xl lg:text-3xl" />
                    <MdOutlineStar className="text-[#FFD700] text-2xl lg:text-3xl" />{" "}
                    <MdOutlineStar className="text-[#FFD700] text-2xl lg:text-3xl" />{" "}
                    <MdOutlineStar className="text-[#FFD700] text-2xl lg:text-3xl" />{" "}
                    <MdOutlineStar className="text-[#FFD700] text-2xl lg:text-3xl" />
                  </div>
                  <h6 className=" text-center   text-gray-600"> {d.time}</h6>
                  </div>

                  <div className="relative h-12 w-12 md:hidden ">
                    <Image
                      src={"/images/google.png"}
                      alt="Premium Madrasa"
                      fill
                      className="object-cove  "
                    />
                  </div>
                </div>
                <p className=" mt-6 lg:mt-3 text-lg">{d.text}</p>
              </div>
            ))}
          </Carousel>

          <a
            href="https://g.co/kgs/tz1qKk4"
            target="_blank"
            className="w-fit  m-auto mt-6 flex items-center gap-2 border p-2 px-4 border-gray-200 rounded shadow transition-all duration-200 ease-linear hover:scale-105"
          >
            <Image
              src={"/images/google.png"}
              alt="Islamic Classes GCC"
              height={30}
              width={30}
            />{" "}
            Add Your Feedback{" "}
          </a>
        </div>
      </div>
      {/* <div className="lg:w-9/12 m-auto mt-10 md:mt-16   pb-3">
          {onAlert ? (
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOnAlert(false);
                  }}
                >
                  <IoCloseCircleOutline className="text-xl" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Thank you for taking the time to share your thoughts!
            </Alert>
          ) : (
            ""
          )}
          <Carousel
        
            interval={4000}
            swipe={true}
          
            animation="slide"
            navButtonsAlwaysVisible
          
          >
            {data?.map((d, i) => {
              return (
                <div key={i} className="transition ease-in-out   ">
                  <p className="md:text-lg text-gray-600  ">
              
                    {d?.content}
                  
                  </p>
                  <p className=" mt-6 md:mt-16 text-lg font-bold text-center">
                    {d?.name}{" "}
                  </p>
                  <p className="text-center text-md text-gray-600 ">
                    {d?.place}
                  </p>
                </div>
              );
            })}
          </Carousel>

          <div className="bg-gray-100 p-2 mt-10  lg:mt-20 lg:flex justify-between">
            <p className="hidden lg:grid">
              Your feedback matters! Share your thoughts to help us improve.
              Join us in shaping a better experience for everyone
            </p>
            <p className="lg:hidden">
              Your feedback matters! Share your thoughts to help us improve.
            </p>

            <div className="flex">
              <button
                onClick={handleClickOpen}
                className="border m-auto  mt-2   lg:mt-0 border-emerald-300 py-0.5 px-3 rounded-md hover:bg-emerald-500 hover:text-white hover:-translate-y-0.5 transition ease-linear duration-200 "
              >
                Add
              </button>
            </div>
          </div>
        </div> */}
      {/* <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            size="small"
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            error={!name && nullname ? true : false}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            size="small"
            autoFocus
            margin="dense"
            id="name"
            label="Country"
            type="text"
            fullWidth
            error={!country && nullcountry ? true : false}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Feedback"
            type="text"
            fullWidth
            multiline
            rows={2}
            error={!message && nullmessage ? true : false}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={validate}>{sending ? "SENDING..." : "SEND"}</Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
