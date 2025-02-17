import AboutPage1 from "@/aboutComponents/AboutPage1";
import HomePage2 from "@/components/HomePage2";
import InfrastucturePage from "@/components/InfrastucturePage";
import React from "react";

export const metadata = {
  title: "The gear edges - Infrastructure",
  description:
    "Explore Gear Edge's state-of-the-art infrastructure for gear assembly, cleaning, and inspection.  Our facilities ensure top-quality gear solutions. ",
};

export default function page() {
  return (
    <div>
      <AboutPage1 name="Infrastructure" />
      <HomePage2 />
    </div>
  );
}
