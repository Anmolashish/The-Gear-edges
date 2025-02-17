import Image from "next/image";
import AboutPage3 from "./AboutPage3";
import AboutPage4 from "./AboutPage4";

export default function Aboutpage2() {
  return (
    <div className="about-page-2">
      <div className="about-page-image">
        <Image
          height={400}
          width={400}
          src="/Images/about.png"
          alt="Steel mans gears"
        />
      </div>

      <div className="about-page-text">
        <div className="about-page-heading">
          The unparallel standards of accuracy, quality and delivery commitments
          make The Gear Edges finest in the engineering world.
        </div>

        <div className="about-page-description">
          <span>
            The Gear Edges is well established manufacturer of finest quality
            International standard and custom design gears as per special
            applications. Our products have an edge over customers specially in
            Aerospace, Defence and modern Medical Industries.
          </span>

          <span>
            Wide range of various configurations, teeth number and custom sizes
            are available in Delrin, Steel, Aluminum and Brass. We give
            full/part assembly to customers.
          </span>
        </div>
      </div>
      <AboutPage3 />
      <AboutPage4 />
    </div>
  );
}
