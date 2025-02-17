import Image from "next/image";
import React from "react";

export default function HomePage5({ name, data }) {
  const { image, introduction, properties, applications, benefits } = data[0];
  return (
    <>
      <div className="home-page-5">
        <div className="home-page-5-image">
          <Image height={400} width={400} src={image} alt={name} />
        </div>
        <div className="home-page-5-text">
          <div className="text-div">
            <div className="about-page-4-heading">{name}</div>
            <div
              className="about-page-4-description"
              dangerouslySetInnerHTML={{ __html: introduction }}
            ></div>
          </div>
        </div>
      </div>
      <div className="gap"></div>
      <div className="product-applications">
        <h1 className="about-page-4-heading">Applications</h1>
        <div
          className="about-page-4-description product-text"
          dangerouslySetInnerHTML={{ __html: applications }} // Render HTML content
        />
      </div>
      <div className="gap"></div>
      <div className="product-applications">
        <h1 className="about-page-4-heading">Properties</h1>
        <div
          className="about-page-4-description product-text"
          dangerouslySetInnerHTML={{ __html: properties }} // Render HTML content
        />
      </div>

      <div className="gap"></div>
      <div className="product-applications">
        <h1 className="about-page-4-heading">Benefits</h1>
        <div
          className="about-page-4-description product-text"
          dangerouslySetInnerHTML={{ __html: benefits }} // Render HTML content
        />
      </div>
    </>
  );
}
