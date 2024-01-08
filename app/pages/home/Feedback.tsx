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
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
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
          // relation:relation,
          message: message,
          timeStamp: new Date(),
        }),
      });

      // const { data } = await res.json();
      // console.log(data);
      setSending(false);
      setOpen(false);
      setOnAlert(true);
    } catch (error) {}
  };

  const data = [
    {
      name: "Dr Jamsheedha",
      place: "Ajman, UAE",
      content:
        "Dr. Jamsheedha here. Delighted with Noorify Academy's impact on my third-grader, Jazin Badar Pariyarath. In two years, his religious studies and prayer performance have flourished. The faculty is outstanding, fostering a seamless parent-teacher relationship. Grateful for the dedicated team and looking forward to continued excellence.",
    },
    {
      name: "Shakira Jamsheer",
      place: "Kerala, India",
      content:
        "Noorify Academy ended my search for the perfect teacher for my daughter Fathima. After trying various classes without satisfaction, we found Sana Ma'am. She's now Fathima's favorite, teaching exceptionally well. Grateful to Noorify for connecting us with such an excellent educator.",
    },
    {
      name: "Ahmed Nachiyar ",
      place: "Muscat",
      content:
        "I am a 23 year old housewife. I searched long for affordable Arabic classes; Noorify stood out. Responsive, affordable fees, and a patient female teacher. Now, I'm motivated to learn more. In sha Allah! ✨❤️",
    },
    {
      name: "Sabiha Naaz",
      place: "Saudi Arabia.",
      content:
        "As a 30-year-old housewife learning Hifz in the ladies' batch, my experience with this Academy is excellent. Nishma Ma'am is a wonderful teacher, guiding me in Islamic studies. Joining this online education was a very good decision in my life. Thank you for the support!.",
    },
    {
      name: "Jameela Afsal",
      place: "Oman",
      content:
        "My kid Muhammed Nuaym truly enjoys your classes, showing a keen interest and benefiting from learning duas and Arabic alphabets. Alhamdulillah! We eagerly anticipate the introduction of Salah teachings and the inclusion of fundamental etiquettes. Thank you for your commitment to our child's future. Jazakallah khair! BarakaAllah feek. 😊",
    },
  ];
  return (
    <div className="mt-10 md:mt-24">
      <div className="md:w-10/12 px-5 md:p-0 m-auto   h-full">
        <h3 className=" text-xl md:text-3xl font-bold text-center">
          Client Reviews
        </h3>

        <div className="border-t w-16 m-auto mt-2 border-black"></div>
        <div className="lg:w-9/12 m-auto mt-10 md:mt-16   pb-3">
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
            // autoPlay={false}
            interval={4000}
            swipe={true}
            // indicators={false}
            animation="slide"
            navButtonsAlwaysVisible
            // cycleNavigation
            // stopAutoPlayOnHover={false}
          >
            {data?.map((d, i) => {
              return (
                <div key={i} className="transition ease-in-out   ">
                  <p className="md:text-lg text-gray-600  ">
                    {/* &quot; */}
                    {d?.content}
                    {/* &quot; */}
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
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
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
          {/* <TextField
            size="small"
            autoFocus
            margin="dense"
            id="name"
            label="Student / parent"
            type="text"
            fullWidth
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
          /> */}
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
      </Dialog>
    </div>
  );
}
