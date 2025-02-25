import React from "react";
import ServiceCard from "./ServiceCard";

export default function HomePage3() {
  const data = [
    {
      id: 1,
      name: "Manufacturing",
      description:
        "We specialize in manufacturing high-precision gears tailored to your exact specifications. Utilizing advanced CNC machining, gear grinding, and hobbing equipment, we produce spur gears, helical gears, bevel gears, worm gears, and more.  ",
      image: "https://img.icons8.com/dotty/100/FFFFFF/manufacturing.png",
    },
    {
      id: 2,
      name: "Maintenance",
      description:
        "Our experienced technicians diagnose and repair gearbox failures, restoring them to peak operating condition. We offer customized maintenance schedules to extend the lifespan of your gear systems and minimize downtime. ",
      image: "https://img.icons8.com/dotty/100/FFFFFF/work.png",
    },
    {
      id: 3,
      name: "Rapid gear production ",
      description:
        "We understand the critical nature of gear failures. Our rapid production capabilities enable us to manufacture replacement gears quickly, minimizing operational disruptions. We offer expedited prototyping services to accelerate product development",
      image: "https://img.icons8.com/ios/120/FFFFFF/gears--v1.png",
    },
    {
      id: 4,
      name: "Gear inspection",
      description:
        "We employ state-of-the-art gear inspection equipment to verify gear accuracy and quality. This includes profile, lead, pitch, and runout measurements. We provide detailed inspection reports and certifications to ensure compliance with industry standards.",
      image: "https://img.icons8.com/ios/150/FFFFFF/inspection.png",
    },
    {
      id: 5,
      name: "Assembly",
      description:
        "We assemble complete gearboxes to customer specifications, ensuring proper alignment and lubrication. We perform rigorous testing and validation procedures to ensure the performance and reliability of assembled gear systems.",
      image:
        "https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/100/FFFFFF/external-assembly-line-smart-devices-smashingstocks-mixed-smashing-stocks-2.png",
    },
    {
      id: 6,
      name: "Cleaning",
      description:
        "We offer specialized cleaning services to remove contaminants, debris, and corrosion from gears and gearboxes. For sensitive applications, we provide precision cleaning services to meet stringent cleanliness requirements.",
      image: "https://img.icons8.com/ios-filled/150/FFFFFF/service.png",
    },
  ];
  return (
    <div className="home-page-3">
      <div className="testimonial-main-div flex justify-center flex-column width-100 align-center">
        <div className="testimonial-heading">Our Services</div>
        <div className="scroll">
          <ul className="services-section flex justify-center align-center">
            <li className="services-div">Manufacturing</li>
            <li className="services-div">Maintainance</li>
            <li className="services-div">Cleaning</li>
            <li className="services-div">Assembling</li>
            <li className="services-div">Rapid gear Production</li>
            <li className="services-div">Gear Inspection</li>
          </ul>

          <ul
            className="services-section flex justify-center align-center"
            aria-hidden="true"
          >
            <li className="services-div">Manufacturing</li>
            <li className="services-div">Maintainance</li>
            <li className="services-div">Cleaning</li>
            <li className="services-div">Assembling</li>
            <li className="services-div">Rapid gear Production</li>
            <li className="services-div">Gear Inspection</li>
          </ul>
        </div>

        <div className="services-cards">
          {data.map((data) => {
            return (
              <ServiceCard
                key={data.id}
                name={data.name}
                description={data.description}
                image={data.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
