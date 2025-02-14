"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage1() {
  const images = ["/Images/cogs-8941860.jpg", "/Images/next-image.jpg"];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 8 seconds

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div className="home-page-1">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="Background Image"
          width={1000}
          height={1000}
          className={`background-image ${index === imageIndex ? "active" : ""}`}
        />
      ))}

      <div className="home-page-main-data flex flex-column">
        <h1 className="home-page-heading">
          The Gear
          <br />
          <span>Edges</span>
        </h1>
        <p className="home-page-subline">
          Specialists in finest quality plastic/delrin gears.
        </p>
        <Link href={"/products"}>
          <button className="find-gears">Start Exploring</button>
        </Link>
      </div>
      <div className="under-overlay"></div>
    </div>
  );
}
