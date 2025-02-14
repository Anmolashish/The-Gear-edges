"use client";
import { useContext, useEffect, useState } from "react";
import Products from "../ProductContext/ProductsData";
import ProductPage1 from "./ProductPage1";

export default function ProductHandler(props) {
  const { data } = useContext(Products);

  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    if (props.slug) {
      const matchedData = data.find((item) => item.slug === props.slug);
      setCurrentData(matchedData || null);
    }
  }, [props.slug]);

  if (!currentData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ProductPage1
        categoryName={currentData.name}
        categoryDescription={currentData.description}
        data={currentData.items}
      />
    </div>
  );
}
