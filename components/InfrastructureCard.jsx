import React from "react";

export default function InfrastructureCard(props) {
  return (
    <div className="infrastructure-card">
      <div className="card-image">
        <img src={props.image} alt="" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{props.name}</h2>
        <small className="card-text">{props.description}</small>
      </div>
    </div>
  );
}
