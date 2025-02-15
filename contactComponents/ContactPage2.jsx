import React from "react";
import ContactPage3 from "./ContactPage3";
import Link from "next/link";

export default function ContactPage2() {
  return (
    <div className="contact-page-2">
      {/* <div className="flex justify-center items-center h-screen">
        <iframe
          title="Google Map"
          className="contact-map-location"
          style={{
            border: "2px solid white",
            borderRadius: "30px",
            backgroundColor: "white",
            color: "#3bceff",
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=183+Ajit+Nagar,+Patiala+147001+Punjab+(INDIA)&output=embed"
        >
          Map here
        </iframe>
      </div> */}
      {/* 
      <div className="contact-description-text">
        <h1 className="contact-page-2-title">
          Contact The Gear Edges
          <small>We are here to help</small>
        </h1>
        <div className="contact-page-2-description">
          <p>
            We are here to assist you with any questions, inquiries, or support
            needs you may have. Whether you need more information about our
            services, require assistance with a specific issue, or simply want
            to get in touch, our team is ready to help.
          </p>
          <p>
            Feel free to reach out to us through our contact form, email, or
            phone, and we will respond as soon as possible. Your satisfaction is
            our priority, and we look forward to assisting you!
          </p>
        </div>
      </div> */}

      <ContactPage3 />
      <div className="contact-description-text">
        <div className="contact-page-description">
          <p>
            Have a question? Check out our <Link href={"/"}>FAQ</Link> for quick
            answers.
          </p>
          <p>
            Still need help? Fill out our{" "}
            <Link href={"/contact"}>Quick Query Form </Link> and we’ll assist
            you!
          </p>
        </div>
      </div>
      <div className="contact-social-media">
        <div className="social-icon">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios-filled/50/010153/facebook-new.png"
            alt="facebook-new"
          />
        </div>
        <div className="social-icon">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/stamp/50/010153/twitterx.png"
            alt="twitterx"
          />
        </div>
        <div className="social-icon">
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios-glyphs/50/010153/google-plus.png"
            alt="google-plus"
          />
        </div>
      </div>
    </div>
  );
}
