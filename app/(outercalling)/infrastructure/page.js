import AboutPage1 from "@/aboutComponents/AboutPage1";
import HomePage2 from "@/components/HomePage2";
import InfrastucturePage from "@/components/InfrastucturePage";
import React from "react";

export default function page() {
  return (
    <div>
      <AboutPage1 name="Infrastructure" />
      <HomePage2 />
    </div>
  );
}
