import React from "react";
import ContactCard from "./ContactCard";

export default function ContactPage3() {
  const locationInfo = "183 Ajit Nagar, Patiala 147001 Punjab (INDIA)";
  const locationLink = `https://www.google.com/maps?q=${encodeURIComponent(
    locationInfo
  )}`;
  return (
    <div className="contact-page-3">
      {/* <ContactCard
        heading={"MAIL US"}
        image={
          "https://img.icons8.com/ios-filled/50/FFFFFF/circled-envelope.png"
        }
        description={"Get the latest news delivered straight to your inbox."}
        button={"Mail us"}
        info={"sales@thegearedges.com"}
        link={"mailto:sales@thegearedges.com"}
      /> */}

      <div className="contact-side-image">
        <img src="/Images/contact.png" alt="" />
      </div>

      <div className="form-container">
        <h1 className="section-title">Contact</h1>
        <form className="query-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Company name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your company name."
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Address</label>
            <input type="text" id="name" placeholder="Enter you Address here" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Description of component</label>
            <textarea
              id="message"
              placeholder="Enter description of component"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
