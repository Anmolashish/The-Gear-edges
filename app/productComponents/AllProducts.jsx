"use client";
import React, { useContext } from "react";
import Products from "../ProductContext/ProductsData";
import ProductPage1 from "./ProductPage1";

export default function AllProducts() {
  const { data } = useContext(Products);

  // Flatten all products from different categories
  const allData = data.flatMap((category) => category.items);

  return (
    <div>
      <ProductPage1
        categoryName="All Products"
        categoryDescription="Here's the list of all categories available in Steel's mangear."
        data={allData}
      />
    </div>
  );
}
