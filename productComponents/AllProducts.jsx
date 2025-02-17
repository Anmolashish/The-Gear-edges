"use client";
import React, { useContext } from "react";
import Products from "../ProductContext/ProductsData";
import ProductPage1 from "./ProductPage1";

export default function AllProducts() {
  const allData = [
    {
      id: 1,
      name: "Plastic/ Delrin Gears",
      description:
        "Small and fine pitch gears are manufactured from Derlin/Plastic fully machined. ",
      review: "30",
      image:
        "https://www.thegearedges.com/wp-content/uploads/2024/07/image-1.jpg",
    },
    {
      id: 2,
      name: "Rack and Pinion",
      description:
        "Ground and machined form are manufactured in standard in Delrin, steel, aluminium alloys and casting materials in pitch configuration. ",
      review: "50",
      image: "/Images/1.jpg",
    },
    {
      id: 3,
      name: "Timing Pulleys",
      description:
        "Wide range of Timing Pulleys are manufactured in standard Derlin, aluminium alloys and casting materials in various pitch configuration.  ",
      review: "25",
      image:
        "https://www.thegearedges.com/wp-content/uploads/2016/11/Aluminum-pulleys.jpg ",
    },
    {
      id: 4,
      name: "Sprockets",
      description:
        "Sprockets are toothed wheels that work with chains to transmit power and motion. They are a fundamental part of many mechanical systems.  ",
      review: "30",
      image:
        "https://www.thegearedges.com/wp-content/uploads/2023/05/Sprockets.jpg ",
    },
    {
      id: 5,
      name: "Bar Stock",
      description:
        "Bar stock is made out of Delrin, steel and Aluminium in various pitch configuration. ",
      review: "10",
      image: "/Images/2.jpg",
    },
    {
      id: 6,
      name: "Poly V Pulleys",
      description:
        "Poly V pulleys are available in two different sections i.e. J, K, L, M type. ",
      review: "37",
      image: "/Images/3.jpg",
    },
    {
      id: 7,
      name: "Sheet metal pulleys",
      description:
        "Single V groove pulleys with welded and bolted hubs, double V groove pulley, split pulleys with welded hubs, ldler pulleys- flat and V type.  ",
      review: "44",
      image: "/Images/4.jpg",
    },
    {
      id: 8,
      name: "Bushes",
      description:
        "Taper lock bushes and Q.D. bushes are available in Delrin, steel and cast-iron material.  ",
      review: "5",
      image: "/Images/5.jpg",
    },
  ];

  return (
    <div>
      <ProductPage1
        categoryName="All Products"
        categoryDescription="Here's the list of all Product available Gear Edges"
        data={allData}
      />
    </div>
  );
}
