import Link from "next/link";
import ProductCard from "./ProductCard";

export default function HomePage2() {
  const data = [
    {
      id: 1,
      name: "Involute Gear Hobs",
      description:
        " Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi topping profiles. ",
      image: "https://steelmansgears.com/imgs/involute-gear-hobs-big.jpg",
      review: 4,
    },

    {
      id: 2,
      name: "Chamfer Hobs ",
      description:
        " Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi topping profiles. ",
      image: "https://steelmansgears.com/imgs/chamfer_hobs.jpg",
      review: 1,
    },

    {
      id: 3,
      name: "Sharper Cutters ",
      description:
        " Sharper cutters is used to cut internal gears of small diameter and spline holes. They can also be designed for external gears depending on the job. ",
      image: "https://steelmansgears.com/imgs/shank_type_shaper_cutters.jpg",
      review: 3,
    },

    {
      id: 4,
      name: "Inserted Blade Gear Hobs ",
      description:
        " Inserted Blade Gear Hobs are manufactured in the range 20 to 32 module having blades of HSS (M-2 or M-35) materials and body made of carton steel. ",
      image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
      review: 12,
    },
  ];
  return (
    <div className="home-page-2">
      <div className="featured-products-main-div">
        <div className="featured-page-header flex align-center ">
          <div className="featured-page-heading">FEATURED PRODUCTS</div>
          <div
            className="vertical-divider"
            style={{ backgroundColor: "white", height: "25px" }}
          ></div>
          <div className="featured-categories ">
            <Link className="no-decoration" href={"/products"}>
              <div className="featured-category">ALL</div>
            </Link>
            <Link className="no-decoration" href={"/products/gear-hobs"}>
              <div className="featured-category">GEAR HOBS</div>
            </Link>

            <Link className="no-decoration" href={"/products/gear-cutters"}>
              <div className="featured-category">GEAR CUTTERS</div>
            </Link>

            <Link
              className="no-decoration"
              href={"/products/spiral-bevel-cutters"}
            >
              <div className="featured-category">SPIRAL BEVEL GEAR CUTTERS</div>
            </Link>

            <Link
              className="no-decoration"
              href={"/products/straight-bevel-cutters"}
            >
              <div className="featured-category">
                STRAIGHT BEVEL GEARS CUTTERS{" "}
              </div>
            </Link>
          </div>
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

          <div className="search-more-outer-div">
            <Link className="no-decoration search-more" href={"/products"}>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ios/50/FFFFFF/add.png"
                alt="add"
              />
              Click here to search more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
