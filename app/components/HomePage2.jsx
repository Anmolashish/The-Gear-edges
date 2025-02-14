import Link from "next/link";
import ProductCard from "./ProductCard";
import InfrastructureCard from "./InfrastructureCard";

export default function HomePage2() {
  const data = [
    {
      id: 1,
      name: "Infrastructure",
      description: "Gear cutting and grinding equipments",
      image: "https://www.thegearedges.com/wp-content/uploads/2023/06/1-3.png",
      review: 4,
    },

    {
      id: 2,
      name: "Assembly",
      description: "Human and robotic collaboration",
      image:
        "https://www.thegearedges.com/wp-content/uploads/2017/03/IMG_1013-1-1536x2048-1.jpg",
      review: 1,
    },

    {
      id: 3,
      name: "Cleaning",
      description: "Parts washing, polishing and lubrication",
      image: "https://www.thegearedges.com/wp-content/uploads/2017/03/3-1.png",
      review: 3,
    },

    {
      id: 4,
      name: "Gear inspection",
      description: "Runnout, Backlash checks and testing",
      image: "https://www.thegearedges.com/wp-content/uploads/2017/03/4.png",
      review: 12,
    },
  ];
  return (
    <div className="home-page-2">
      <div className="featured-products-main-div">
        <div className="featured-page-header flex align-center justify-center flex-column ">
          <div className="featured-page-heading">INFRASTRUCTURE</div>
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
