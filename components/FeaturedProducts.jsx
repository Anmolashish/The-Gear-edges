import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import InfrastructureCard from "./InfrastructureCard";

export default function FeaturedProducts() {
  const data = [
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
  ];
  return (
    <div className="home-page-2">
      <div className="featured-products-main-div">
        <div className="featured-page-header flex align-center justify-center flex-column ">
          <div className="featured-page-heading">FEATURED PRODUCTS</div>
          <small className="featured-page-subheading">
            Here are the products that are most commmonly bought in the The gear
            edge
          </small>
        </div>

        <div className="featured-products flex">
          {data.map((element) => {
            return (
              <ProductCard
                key={element.id}
                name={element.name}
                description={element.description}
                review={element.review}
                image={element.image}
              />
            );
          })}
        </div>

        <div className="view-more-products">
          <Link href="/products">
            View more{" "}
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/FFFFFF/forward.png"
              alt="forward"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
