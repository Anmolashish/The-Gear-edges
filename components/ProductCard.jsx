"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProductPopUp from "./ProductPopUp";
import Link from "next/link";

const truncateWords = (text, maxWords) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
};

// Utility function to create a slug
const createSlug = (name) => {
  return name
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, ""); // Remove special characters
};

const ProductCard = (props) => {
  // Generate the slug from the name prop
  const slug = createSlug(props.name);

  return (
    <div className="product-card flex flex-column justify-space-between">
      <div className="product-image">
        <Image
          width={300}
          height={150}
          src={props.image.trimEnd()}
          alt="Gear Edge product image"
        />
      </div>
      <div className="product-data">
        <h2 className="product-category">{props.name}</h2>

        <div className="product-rating">
          ★★★★★
          <span>({props.review})</span>
        </div>
        {/* Use the slug in the Link */}
        <Link href={`/products/${slug}`}>
          <button className="select-options-button">Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
