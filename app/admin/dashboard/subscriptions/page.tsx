import React from "react";
import Component from "./component";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard | Admin",
  robots: "noindex,nofollow",
};
export default function page() {
  const adminUser = cookies().get("adminUser");
  if (adminUser?.value === "true") {
    return (
      <div>
        <div className="px-5 lg:px-0 lg:w-10/12 m-auto mt-12">
          <h4 className="text-2xl font-bold">Subscriptions</h4>

          <Component />
        </div>
      </div>
    );
  } else {
    redirect("/admin/Login");
  }
}
