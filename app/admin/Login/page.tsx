import React from "react";

import Component from "./Component";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login | Admin",
  robots: "noindex,nofollow",
};
export default function page() {
  return (
    <div className="h-screen bg-emerald-500 flex justify-center items-center">
      <Component />
    </div>
  );
} 
