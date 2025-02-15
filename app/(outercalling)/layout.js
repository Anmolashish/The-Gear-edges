import HomeFooter from "@/components/HomeFooter";
import Navbar from "@/components/Navbar";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <HomeFooter />
    </div>
  );
}
