"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import formatDate from "../../../functions/formatDate";
export default function Component() {
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PORT}/api/register`,
        {}
      );
      const { data } = await res.json();
      setData(data);
      console.log(data[0]?.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
 
 <div className="px-5 lg:px-0 lg:w-10/12 m-auto mt-12">
        <h4 className="text-2xl font-bold">Registrations</h4>

        <div className="mt-6">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>

                  <TableCell>Name</TableCell>
                  <TableCell>Place</TableCell>
                  <TableCell>Whatsapp No</TableCell>
                  <TableCell>Course</TableCell>
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
                        {d?.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {d?.place}
                      </TableCell>{" "}
                      <TableCell>{d?.whatsApp}</TableCell>
                      <TableCell>
                        {d?.course?.map((c: any, i: any) => {
                          return <p key={i}>{c}</p>;
                        })}
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
   
    </div>
  );
}
