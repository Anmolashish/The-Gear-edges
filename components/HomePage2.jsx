import Link from "next/link";
import ProductCard from "./ProductCard";
import InfrastructureCard from "./InfrastructureCard";

export default function HomePage2() {
  const data = [
    {
      id: 1,
      name: "Infrastructure",
      description: "Industrial automation gears",
      image: "/Images/image-1.jpg",
      review: 4,
    },

    {
      id: 2,
      name: "Assembly",
      description: "Gear assembly solutions",
      image: "/Images/image-2.jpg",
      review: 1,
    },

    {
      id: 3,
      name: "Cleaning",
      description: "Parts washing, polishing and lubrication",
      image: "/Images/image-3.jpg",
      review: 3,
    },

    {
      id: 4,
      name: "Gear inspection",
      description: "Runnout, Backlash checks and testing",
      image: "/Images/image-4.jpg",
      review: 12,
    },

    {
      id: 5,
      name: "Gear inspection",
      description: "Runnout, Backlash checks and testing",
      image: "/Images/image-5.jpg",
      review: 12,
    },

    {
      id: 6,
      name: "Gear inspection",
      description: "Runnout, Backlash checks and testing",
      image: "/Images/image-6.jpg",
      review: 12,
    },
  ];
  return (
    <div className="home-page-2">
      <div className="featured-products-main-div">
        <div className="featured-page-header flex align-center justify-center flex-column ">
          <small className="featured-page-subheading">
            The company has built a state of the art facility equipped with
            cutting edge machinery and technology
          </small>
        </div>

        <div className="featured-products flex">
          {data.map((element) => {
            return (
              <InfrastructureCard
                key={element.id}
                image={element.image}
                name={element.name}
                description={element.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
