import React from "react";
import Component from "./component";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashbaord | Admin",
  robots: "noindex,nofollow",
};
export default function page() {
  const adminUser = cookies().get("adminUser");
  if (adminUser?.value === "true") {
    return (
      <div className="pb-24">
        <Component />
      </div>
    );
  } else {
    redirect("/admin/Login");
  }
}
