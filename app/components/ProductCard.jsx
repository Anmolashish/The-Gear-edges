"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProductPopUp from "./ProductPopUp";

const truncateWords = (text, maxWords) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
};

const ProductCard = (props) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleViewMoreClick = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div className="product-card flex flex-column justify-space-between">
      <div className="product-image">
        <img src={props.image} alt="Gear Edge product image" />
      </div>
      <div className="product-data">
        <h2 className="product-category">{props.name}</h2>
        <p className="product-description">
          {truncateWords(props.description, 10)} {/* Limit to 10 words */}
        </p>
        <div className="product-rating">
          ★★★★★
          <span>({props.review})</span>
        </div>
        <button className="select-options-button" onClick={handleViewMoreClick}>
          VIEW MORE
        </button>
      </div>

      {/* Conditionally render the ProductPopUp */}
      {isPopUpOpen && (
        <ProductPopUp
          image={props.image}
          name={props.name}
          description={props.description}
          review={props.review}
          onClose={handleClosePopUp}
        />
      )}
    </div>
  );
};

export default ProductCard;
