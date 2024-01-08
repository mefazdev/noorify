"use client";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
 

export default function Component() {
  const [data, setData] = useState<any[]>([]);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [wrong, setWrong] = useState<boolean>(false);
  const [verifying, setVerifying] = useState<boolean>(false);
  const [showPw, setShowPw] = useState<boolean>(false);
  const login = async () => {
    setVerifying(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PORT}/api/auth/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            serverUsername: data[0]?.username,
            serverPassword: data[0]?.password,
          }),
        }
      );
      if (res.ok) {
        // Redirect to the admin dashboard or another page
        window.location.href = "/admin/dashboard";
        setVerifying(false);
        // redirect('/admin/dashboard')
      } else {
        // Handle login error, e.g., show an error message
        setVerifying(false);
        setWrong(true);
      }
    } catch (error) {
      alert(error);
    }
  };

  const getData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/auth`, {});
      const { data } = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  // const create = async () => {
  //   try {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/auth`, {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: username,
  //         password: password,
  //       }),
  //     });
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  return (
    <div className="bg-white w-10/12 md:w-6/12 lg:w-4/12 p-8 rounded">
      {/* <h2 className="text-center">Logo</h2> */}

      <div className="mt-6">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Username"
          variant="outlined"
          size="small"
          value={username}
          error={wrong}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="mt-5"><TextField
          
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type={!showPw ? "password" : "text"}
          size="small"
          error={wrong}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> </div>
        
        <button
          onClick={() => setShowPw(!showPw)}
          className="text-right mt-1 text-sm   float-right"
        >
          {showPw ? "Hide Password" : "Show Password"}
        </button>
        <button
          disabled={!username && !password}
          className="mt-6 w-full bg-emerald-500 text-white rounded p-2"
          onClick={login}
        >
          {verifying ? "VERIFYING.." : "LOGIN"}
        </button>
      </div>
    </div>
  );
}
