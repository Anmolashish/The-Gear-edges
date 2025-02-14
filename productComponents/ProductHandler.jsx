"use client";
import HomePage5 from "./ProductsInfo1";
import ProductPage1 from "./ProductPage1";
import { useContext, useEffect, useState } from "react";
import Products from "../ProductContext/ProductsData";

export default function ProductHandler({ slug }) {
  const { data } = useContext(Products);

  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    if (slug) {
      const matchedData = data.find((item) => item.slug === slug);
      setCurrentData(matchedData || null);
    }
  }, [slug]);

  if (!currentData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <HomePage5 data={currentData.textData} name={currentData.name} />
    </div>
  );
}
