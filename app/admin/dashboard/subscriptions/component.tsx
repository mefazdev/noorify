"use client";
 import formatDate from "@/app/functions/formatDate";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
export default function Component() {
    const [data, setData] = useState<any[]>([]);
 
  const getData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/subscription`, {});
      const { data } = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mt-6">

      
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>

            
            <TableCell>Email</TableCell>

            <TableCell>Date</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((d, i) => {
            const date = formatDate(new Date(d?.timeStamp));
            return (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data?.length - i}
                </TableCell>

                <TableCell component="th" scope="row">
                  {d?.email} <br/>
                  
                </TableCell>


                <TableCell component="th" scope="row">
                  {date}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>{" "}
  </div>
  )
}
