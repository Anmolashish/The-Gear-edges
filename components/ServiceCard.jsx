import React from "react";

export default function ServiceCard(props) {
  return (
    <>
      <div className="cards">
        <div className="cards-image">
          <img src={props.image} alt={props.name} width="50" />
        </div>
        <div className="cards-text">
          <div className="card-name">{props.name}</div>
          <div className="card-status">{props.description}</div>
        </div>
      </div>
    </>
  );
}
