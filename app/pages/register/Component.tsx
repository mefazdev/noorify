"use client";
import {
  Alert,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import PhoneInput from "react-phone-number-input";

export default function Component() {
  const [course, setCourse] = useState<string[]>([]);
  const [phone, setPhone] = useState<string>();
  const [name, setName] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [nullcourse, setnullCourse] = useState<boolean>(false);
  const [nullphone, setnullPhone] = useState<boolean>(false);
  const [nullname, setnullName] = useState<boolean>(false);
  const [nullplace, setnullPlace] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [onAlert, setOnAlert] = useState<boolean>(false);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setCourse(typeof value === "string" ? value.split(",") : value);
  };
  const courses = [
    "Madrasa (English)",
    "Madrasa (Malayalam)",
    "Professional Course",
    "Foundation Course",
    "Hifz Course",
    "Tajweed Course",
    "Ladies Course",
    "Fiqh Practical",
    "Islamic Behavioral Formation",
    "Malayalam LSRW",
    "Spoken Arabic",
    "Calligraphy",
    "Arabic LSRW Course",
    "Spoken English",
    "Foreign Language Course",
    "Mehendi Class",
    "Other",
  ];

  const validate = () => {
    if (!name) {
      setnullName(true);
    } else if (!place) {
      setnullPlace(true);
    } else if (!phone) {
      setnullPhone(true);
    } else if (!course.length) {
      setnullCourse(true);
    } else {
      sendData();
    }
  };

  const sendData = async () => {
    setSending(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          place: place,
          whatsApp: phone,
          course: course,
          timeStamp: new Date(),
        }),
      });

      setSending(false);
      setName("");
      setCourse([]);
      setPhone("");
      setPlace("");
      setOnAlert(true);
    } catch (error) {
      setSending(false);
      alert(error);
    }
  };
  return (
    <div className="px-5 lg:px-0 lg:w-11/12 m-auto pt-6 lg:pt-12   ">
      <div className="bg-gray-50  rounded-xl lg:rounded-xl py-2   lg:py-5 relative shadow-sm ">
        <div className="bg-white  rounded-3xl invisible lg:visible   ml-3    px-2 p-1 w-fit text-sm lg:text-md absolute">
          <p>Home / Register</p>
        </div>

        <h1 className="text-center  text-xl lg:text-3xl text-gray-600 font-bold">
          Register
        </h1>
      </div>

      <div className="mt-10 lg:mt-24 lg:w-8/12 m-auto md:p-8 md:shadow-md pb-16">
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
            We&apos;ve received your registration and will be in touch shortly
            with further details.Get ready for an exciting learning journey
            ahead. Thank you.
          </Alert>
        ) : (
          ""
        )}
        <div className="grid md:grid-cols-2 gap-7">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            error={!name && nullname ? true : false}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Place"
            variant="outlined"
            error={!place && nullplace ? true : false}
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />

          <div className="phone__input bg-white outline-none flex rounded-sm relative  pt-3 border border-gray-300h-14">
            <PhoneInput
              name="phone "
              className="pl-2 "
              placeholder="Whatsapp No"
              value={phone}
              onChange={setPhone}
              required
              defaultCountry="IN"
              error={!phone && nullphone ? true : false}
            />
          </div>

          <FormControl fullWidth>
            <InputLabel id="demo-multiple-name-label">Course</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={course}
              onChange={handleChange}
              input={<OutlinedInput label="Course" />}
              error={!course?.length && nullcourse ? true : false}

              // MenuProps={MenuProps}
            >
              {courses.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  // style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="flex mt-10 lg:mt-16">
          {" "}
          <button
            className="m-auto hover:-translate-y- hover:scale-105 ease-linear duration-200 transition    shadow-md  w-full lg:w-6/12 bg-emerald-500 text-white p-2 rounded-md"
            onClick={validate}
          >
            {sending ? "Registering..." : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
}
