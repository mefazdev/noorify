"use client";
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Courses from "./Courses";
import Milestone from "./Milestone";
import Feedback from "./Feedback";
import RegisterNow from "./RegisterNow";
import Blog from "./Blog";
import NewLetter from "./NewLetter";
import Navbar from "@/app/pages/components/navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Milestone />
      <Feedback />
      <RegisterNow />
      <Blog />

      <NewLetter />

      <Footer />
    </div>
  );
}
