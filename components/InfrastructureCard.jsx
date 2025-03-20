import Image from "next/image";
import React from "react";

export default function InfrastructureCard(props) {
  return (
    <div className="infrastructure-card">
      <div className="card-image">
        <Image width={300} height={300} src={props.image} alt={props.name} />
      </div>
    </div>
  );
}
