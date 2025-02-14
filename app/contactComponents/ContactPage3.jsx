import React from "react";
import ContactCard from "./ContactCard";

export default function ContactPage3() {
  const locationInfo = "183 Ajit Nagar, Patiala 147001 Punjab (INDIA)";
  const locationLink = `https://www.google.com/maps?q=${encodeURIComponent(
    locationInfo
  )}`;
  return (
    <div className="contact-page-3">
      <ContactCard
        heading={"CALL US"}
        image={
          "https://img.icons8.com/external-flat-icons-inmotus-design/67/FFFFFF/external-call-messenger-flat-icons-inmotus-design-4.png"
        }
        description={"Operating hours: Monday to friday, 9 to 6pm"}
        button={"Call us"}
        info={"tel: +91 - 175 - 7961320"}
        link={"tel:+911234567890"}
      />
      <ContactCard
        heading={"MAIL US"}
        image={
          "https://img.icons8.com/ios-filled/50/FFFFFF/circled-envelope.png"
        }
        description={"Get the latest news delivered straight to your inbox."}
        button={"Mail us"}
        info={"sales@steelmans.com"}
        link={"mailto:sales@steelmans.com"}
      />
      <ContactCard
        heading={"LOCATE US"}
        image={"https://img.icons8.com/ios-filled/50/FFFFFF/near-me.png"}
        description={
          "Feel free to visit us for any inquiries or to discuss orders!"
        }
        button={"Locate"}
        info={"183 Ajit Nagar, Patiala 147001 Punjab (INDIA) "}
        link={locationLink}
      />
    </div>
  );
}
