 
import React from "react";
 
import Component from "./Component";
import Highlight from "@/app/Highlight";
 
 
export default async function page({params}:any) {

 
  return (
 <div>
  
 
     <div className="pt-10 lg:pt-16   border-gray-300 ">
      <Component/>
    </div>
    <Highlight/>
 </div>
  );
}
