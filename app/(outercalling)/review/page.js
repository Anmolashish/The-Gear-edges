import React from "react";
import HomePage4 from "@/components/HomePage4";
import AboutPage1 from "@/aboutComponents/AboutPage1";
import HomePage3 from "@/components/HomePage3";
import ReviewPage from "@/components/ReviewPage";

export default function page() {
  return (
    <div>
      <AboutPage1 name="Reviews" />
      <ReviewPage />
    </div>
  );
}
