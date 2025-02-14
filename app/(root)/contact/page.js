import AboutPage1 from "@/app/aboutComponents/AboutPage1";
import ContactPage1 from "@/app/contactComponents/ContactPage1";
import ContactPage2 from "@/app/contactComponents/ContactPage2";
import "@/styles/contact-style.css";
import React from "react";

export const metadata = {
  title: "The gear edges - Contact",
  description:
    "This app is created for the The gear edges and they are famously known for their product sold for gears",
};

export default function page() {
  return (
    <div>
      <AboutPage1 name={"Contact us"} />
      <ContactPage2 />
    </div>
  );
}
