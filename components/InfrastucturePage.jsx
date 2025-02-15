import ContactCard from "@/contactComponents/ContactCard";
import React from "react";
import "@/styles/contact-style.css";

export default function InfrastucturePage() {
  return (
    <div className="infrastructure-page">
      <ContactCard
        heading={"RECENT POSTS"}
        image={
          "https://img.icons8.com/ios-filled/50/FFFFFF/circled-envelope.png"
        }
        description={`1. Assembly
        2. Cleaning
        3. Gear Inspection`}
        button={"Explore"}
        info={"sales@thegearedges.com"}
        link={"mailto:sales@thegearedges.com"}
      />

      <ContactCard
        heading={"ARCHIVES"}
        image={
          "https://img.icons8.com/ios-filled/50/FFFFFF/circled-envelope.png"
        }
        description={`1. July 2023
        2. June 2023
        3. March 2017`}
        button={"Explore"}
        info={"sales@thegearedges.com"}
        link={"mailto:sales@thegearedges.com"}
      />
      <ContactCard
        heading={"CATEGORIES"}
        image={
          "https://img.icons8.com/ios-filled/50/FFFFFF/circled-envelope.png"
        }
        description={`Uncategorized`}
        button={"Explore"}
        info={"sales@thegearedges.com"}
        link={"mailto:sales@thegearedges.com"}
      />
    </div>
  );
}
