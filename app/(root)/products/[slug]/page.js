import ProductHandler from "@/productComponents/ProductHandler";
import React from "react";

export default function page({ params }) {
  return (
    <div className="product">
      <ProductHandler slug={params.slug} />
    </div>
  );
}
