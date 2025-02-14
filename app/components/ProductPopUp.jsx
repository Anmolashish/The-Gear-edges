import React from "react";

const ProductPopUp = ({ image, name, description, review, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="popup-image">
          <img src={image} alt={name} />
        </div>
        <div className="popup-text">
          <h2>{name}</h2>
          <p>{description}</p>
          <div className="popup-rating">
            ★★★★★
            <span>({review})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopUp;
