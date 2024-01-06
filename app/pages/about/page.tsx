import React from "react";

 
import Serve from "./Serve";
import Intro from "./Intro";
import Features from "./Features";
import Highlight from "@/app/Highlight";
export default function page() {
  return (
    <div>
<div className="px-4 lg:px-0    ">
      <div className="lg:w-11/12 m-auto pt-4 lg:pt-12">
        <Intro/>

        <Features/>



<Serve/>
      </div>
  
    </div>
       <Highlight/>
    </div>
    
  );
}
