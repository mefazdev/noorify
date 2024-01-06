"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import formatDate from "@/app/functions/formatDate";

export default function Component() {
  const [data, setData] = useState<any[]>([]);
  const getData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_PORT}/api/publishedBlog`,
        {}
      );
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
    <div>
      <div className="bg-gray-50  rounded-xl lg:rounded-xl py-2   lg:py-5 relative shadow-sm ">
        <div className="bg-white  rounded-3xl invisible lg:visible   ml-3    px-2 p-1 w-fit text-sm lg:text-md absolute">
          <p>Home / Blogs</p>
        </div>

        <h1  className="text-center  text-xl lg:text-3xl text-gray-600 font-bold">
          Blogs
        </h1>
      </div>
      <div className=" mt-10 lg:mt-24 lg:w-10/12 m-auto  ">
        {data?.map((d, i) => {
          const publishedAt = formatDate(new Date(d?.publishedAt));
          return (
            <div  key={i} className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-9 border-b pb-8 mt-10">
              <div className="h-full">
                <img src={d?.image} alt="Best Islamic ladies course online,Lady quran teacher, Best Online islamic academy, Expert Lady Quran Teacher" />
              </div>

              <div className="lg:col-span-2">
                <h2 className="font-sans font-semibold lg:font-bold  lg:text-xl  ">
                  {d?.title}
                </h2>
                <h5 className=" text-sm lg:text-md text-gray-500 mt-2">
                  {publishedAt} | Admin
                </h5>
                <div
                  dangerouslySetInnerHTML={{ __html: d?.content.slice(0, 600) }}
                />
                <Link href={`/pages/blog/${d?.slug}`}>
                  <button className="text-sm lg:text-base font-bold mt-2 lg:mt-3">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
