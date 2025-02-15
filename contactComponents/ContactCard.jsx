import React from "react";

export default function ContactCard(props) {
  return (
    <div className="contact-card">
      <span>
        <div className="contact-card-heading">{props.heading}</div>
        <small className="contact-card-description">{props.description}</small>
      </span>
      <a href={props.link} className="no-decoration contact-card-button">
        <div>{props.button}</div>
      </a>
    </div>
  );
}
