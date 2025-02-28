import Image from "next/image";
import React from "react";

export default function HomePage5({ name, data }) {
  const { image, introduction } = data[0];
  return (
    <div className="home-page-5">
      <div className="about-page-4-heading">{name}</div>
      <div className="home-page-5-image">
        <img src={image} alt={name} />
      </div>
      <div
        className="about-page-4-description"
        dangerouslySetInnerHTML={{ __html: introduction }}
      ></div>
    </div>
  );
}
