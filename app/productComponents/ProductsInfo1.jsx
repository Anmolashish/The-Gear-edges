import React from "react";

export default function HomePage5({ name, data }) {
  const { image, introduction, properties, applications, benifits } = data[0];
  return (
    <>
      <div className="home-page-5">
        <div className="home-page-5-image">
          <img src={image} alt="About the gear edges" />
        </div>
        <div className="home-page-5-text">
          <div className="text-div">
            <div className="about-page-4-heading">{name}</div>
            <div className="about-page-4-description">
              <span>{introduction}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-applications">
        <h1 className="about-page-4-heading">Applications</h1>
        <div className="about-page-4-description product-text">
          {applications}
        </div>
      </div>
    </>
  );
}
