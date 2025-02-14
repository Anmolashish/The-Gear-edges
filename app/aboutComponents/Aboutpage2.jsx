import AboutPage3 from "./AboutPage3";
import AboutPage4 from "./AboutPage4";

export default function Aboutpage2() {
  return (
    <div className="about-page-2">
      <div className="about-page-image">
        <img
          src="https://steelmansgears.com/imgs/1.png"
          alt="Steel mans gears"
        />
      </div>

      <div className="about-page-text">
        <div className="about-page-heading">
          At Steelman Gear Manufacturing, We Deliver High-Performance Gear
          Solutions Engineered for Precision, Reliability, and Innovation,
          Meeting the Toughest Industry Standards Across Automotive, Aerospace,
          and Industrial Applications
        </div>

        <div className="about-page-description">
          <span>
            At Steelman Gear Manufacturing, we are committed to delivering
            high-performance gear solutions that meet the stringent demands of
            industries worldwide. As an ISO certified gear manufacturer, we
            adhere to the highest international standards of quality and
            precision, ensuring that every gear we produce is of exceptional
            reliability and durability. Our expertise spans a broad range of
            gear types, from standard models to custom designs tailored for
            specific applications.
          </span>

          <span>
            From automotive to aerospace and industrial applications, Steelman’s
            gears are crafted with innovation and performance in mind, ensuring
            that your machinery operates at peak efficiency and delivers lasting
            results. With a dedication to customer satisfaction and engineering
            excellence, we’re here to provide gear solutions that meet the
            toughest standards and exceed your expectations.
          </span>
        </div>
      </div>
      <AboutPage3 />
      <AboutPage4 />
    </div>
  );
}
