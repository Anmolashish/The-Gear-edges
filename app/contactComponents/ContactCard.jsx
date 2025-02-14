import React from "react";

export default function ContactCard(props) {
  return (
    <div className="contact-card">
      <div className="contact-icon">
        <img
          width="67"
          height="67"
          src={props.image}
          alt="external-call-messenger-flat-icons-inmotus-design-4"
        />
      </div>
      <span>
        <div className="contact-card-heading">{props.heading}</div>
        <div className="contact-card-description">{props.description}</div>
        <div className="contact-card-info">{props.info}</div>
      </span>
      <a href={props.link} className="no-decoration contact-card-button">
        <div>{props.button}</div>
      </a>
    </div>
  );
}
