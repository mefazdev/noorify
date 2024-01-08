import Component from "./component";
import {cookies} from "next/headers";
import { redirect } from "next/navigation";
 
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blogs | Admin",
  robots:'noindex,nofollow'
  
  };
export default function page() {
  
  const adminUser = cookies().get("adminUser")
  if (adminUser ?.value === "true") {
    return(
    <div>
     <Component/>
    </div>
  )}else{
    redirect('/admin/Login')
  }
}
