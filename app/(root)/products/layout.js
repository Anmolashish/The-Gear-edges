/* eslint-disable @next/next/no-img-element */
import AboutPage1 from "@/app/aboutComponents/AboutPage1";
import ProductPage1 from "@/app/productComponents/ProductPage1";
import Link from "next/link";

export const metadata = {
  title: "Steel Mans Gears - Products",
  description:
    "This app is created for the Steel Mans gears and they are famously known for their product sold for gears",
};

export default function layout({ children }) {
  return (
    <div>
      <AboutPage1 name={"Products"} />
      <div className="product-page-1">
        <div className="products-category-container">
          <h1 className="product-page-heading">Category</h1>
          <small className="product-page-subline">
            All the categories present in the Steelmans gear
          </small>

          <div className="categories-section">
            <div className="product-category-selector">
              <div className="product-category-selector-text">
                <Link className="no-decoration" href={"/products"}>
                  All
                </Link>
              </div>
              <div className="product-category-selector-dropdown">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/material-rounded/24/FFFFFF/forward.png"
                  alt="expand-arrow--v1"
                />
              </div>
            </div>
            <div className="product-category-selector">
              <div className="product-category-selector-text">
                <Link className="no-decoration" href={"/products/gear-hobs"}>
                  Gear hobs
                </Link>
              </div>
              <div className="product-category-selector-dropdown">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/material-rounded/24/FFFFFF/forward.png"
                  alt="expand-arrow--v1"
                />
              </div>
            </div>
            <div className="product-category-selector">
              <div className="product-category-selector-text">
                <Link className="no-decoration" href={"/products/gear-cutters"}>
                  Gear cutters
                </Link>
              </div>
              <div className="product-category-selector-dropdown">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/material-rounded/24/FFFFFF/forward.png"
                  alt="expand-arrow--v1"
                />
              </div>
            </div>
            <div className="product-category-selector">
              <div className="product-category-selector-text">
                <Link
                  className="no-decoration"
                  href={"/products/spiral-bevel-cutters"}
                >
                  Spiral bevel cutters
                </Link>
              </div>
              <div className="product-category-selector-dropdown">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/material-rounded/24/FFFFFF/forward.png"
                  alt="expand-arrow--v1"
                />
              </div>
            </div>
            <div className="product-category-selector">
              <div className="product-category-selector-text">
                <Link
                  className="no-decoration"
                  href={"/products/straight-bevel-cutters"}
                >
                  Straight bevel cutters
                </Link>
              </div>
              <div className="product-category-selector-dropdown">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/material-rounded/24/FFFFFF/forward.png"
                  alt="expand-arrow--v1"
                />
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
