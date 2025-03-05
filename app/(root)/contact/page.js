import AboutPage1 from "@/aboutComponents/AboutPage1";
import ContactPage1 from "@/contactComponents/ContactPage1";
import ContactPage2 from "@/contactComponents/ContactPage2";
import "@/styles/contact-style.css";
import React from "react";

export const metadata = {
  title: "The gear edges - Contact",
  description:
    "Reach out to Gear Edge for inquiries about custom gear design, manufacturing, and engineering.  Our ISO certified team is ready to assist you.  Find our contact information here. ",
};

export default function page() {
  return (
    <div>
      <AboutPage1 name={"Contact"} />
      <ContactPage2 />
    </div>
  );
}
