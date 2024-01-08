import React from "react";
import Component from "./Component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Noorify Online Islamic Academy",
};
export default function page() {
  return (
    <div className="px-4  pb-36 lg:px-0 lg:w-11/12 m-auto pt-6 lg:pt-12">
      <Component />
    </div>
  );
}
