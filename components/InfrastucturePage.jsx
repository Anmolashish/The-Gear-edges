 import ContactCard from "@/contactComponents/ContactCard";
import React from "react";
import "@/styles/contact-style.css";

export default function InfrastucturePage() {
  return (
    <div className="infrastructure-page">
      <div className="card-grid">
        <ContactCard
          heading={"RECENT POSTS"}
          image={
            "https://img.icons8.com/ios-filled/50/FFFFFF/circled-envelope.png"
          }
          description={`1. Assembly\n2. Cleaning\n3. Gear Inspection`}
          button={"Explore"}
          info={"sales@thegearedges.com"}
          link={"mailto:sales@thegearedges.com"}
        />
        <ContactCard
          heading={"ARCHIVES"}
          image={
            "https://img.icons8.com/ios-filled/50/FFFFFF/circled-envelope.png"
          }
          description={`1. July 2023\n2. June 2023\n3. March 2017`}
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
        {/* Add more ContactCard components here to fill the 3x3 grid */}
      </div>
    </div>
  );
}
