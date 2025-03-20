"use client";
import { createContext } from "react";

const Products = createContext();

export function ProductsData({ children }) {
  // introduction properties applications benefits
  const data = [
    //Delrin Gears
    {
      id: 1,
      name: "Delrin Gears",
      slug: "delrin-gears",
      textData: [
        {
          image: "/Images/prod1.jpg",
          introduction: `
            <p class="introduction-text">
              Small and fine pitch gears are manufactured from Derlin fully machined. 
            </p>
          `,
        },
      ],
    },
    //Rack and Pinion
    {
      id: 2,
      name: "Rack and Pinion",
      slug: "rack-and-pinion",
      textData: [
        {
          image: "/Images/1.jpg", // Replace with actual image URL
          introduction: `
            <p class="introduction-text">
              Ground and machined form are manufactured in standard in Delrin, steel, aluminium alloys and casting materials in pitch configuration. 
            </p>
          `,
        },
      ],
    },
    // Timing Pulleys
    {
      id: 3,
      name: "Timing Pulleys",
      slug: "timing-pulleys",
      textData: [
        {
          image: "/Images/prod3.jpg",
          introduction: `
            <p class="introduction-text">
              Wide range of Timing Pulleys are manufactured in standard Derlin, aluminium alloys and casting materials in various pitch configuration.
            </p>
          `,
        },
      ],
    },
    // Sprockets
    {
      id: 4,
      name: "Sprockets",
      slug: "sprockets",
      textData: [
        {
          image: "/Images/prod4.jpg",
          introduction: `
            <p class="introduction-text">
              Sprockets are toothed wheels that work with chains to transmit power and motion. They are a fundamental part of many mechanical systems. 
            </p>
           
          `,
        },
      ],
    },
    // Bar Stock
    {
      id: 5,
      name: "Bar Stock",
      slug: "bar-stock",
      textData: [
        {
          image: "/Images/2.jpg",
          introduction: `
            <p class="introduction-text">
              Bar stock is made out of Delrin, steel and Aluminium in various pitch configuration.
            </p>
          `,
        },
      ],
    },
    // Poly V Pulleys
    {
      id: 6,
      name: "Poly V Pulleys",
      slug: "poly-v-pulleys",
      textData: [
        {
          image: "/Images/3.jpg",
          introduction: `
            <p class="introduction-text">
              Poly V pulleys are available in two different sections i.e. J, K, L, M type. 
            </p>
        
          `,
        },
      ],
    },
    // Sheet Metal Pulleys
    {
      id: 7,
      name: "Sheet Metal Pulleys",
      slug: "sheet-metal-pulleys",
      textData: [
        {
          image: "/Images/4.jpg",
          introduction: `
            <p class="introduction-text">
              Single V groove pulleys with welded and bolted hubs, double V groove pulley, split pulleys with welded hubs, ldler pulleys- flat and V type.
            </p>
          `,
        },
      ],
    },
    // Bushes
    {
      id: 8,
      name: "Bushes",
      slug: "bushes",
      textData: [
        {
          image: "/Images/5.jpg",
          introduction: `
            <p class="introduction-text">
              Taper lock bushes and Q.D. bushes are available in Delrin, steel and cast-iron material.
            </p>
          `,

          // properties: `
          //   <ul class="properties-list">
          //     <li><strong>Load and Speed:</strong> The load and speed of the system will significantly influence the choice of material and design.
          //     </li>
          //     <li><strong>Operating Environment:</strong> Temperature, humidity, and exposure to contaminants can affect bushing performance and material selection.
          //     </li>
          //     <li><strong>Lubrication Requirements:</strong> The type of lubrication needed will depend on the bushing material and the specific application.
          //     </li>
          //     <li><strong>Cost and Availability:</strong> The cost and availability of the bushing should also be considered, balancing performance with practicality.
          //     </li>
          //   </ul>
          // `,
          // applications: `
          //   <p class="applications-text">
          //     Bushings are used in a wide variety of industries and applications, including:
          //   </p>
          //   <ul class="applications-list">
          //     <li><strong>Automotive Industry:</strong> In the automotive industry, bushings are used in various components such as suspension systems, engine mounts, and steering systems. They help reduce vibrations, noise, and provide alignment between moving parts.
          //     </li>
          //     <li><strong>Industrial Machinery:</strong> Bushings are used in a wide range of industrial machines to support rotating parts, reduce friction, and absorb wear. They can be found in conveyors, pumps, motors, and gearboxes.
          //     </li>
          //     <li><strong>Aerospace:</strong> In aerospace applications, bushings are used in aircraft systems where high performance and reliability are critical. They are used in landing gears, actuators, and control systems to reduce friction and wear during operation.
          //     </li>
          //     <li><strong>Marine:</strong> Marine bushings are used in boats and ships to reduce friction in various moving parts, such as propeller shafts, rudders, and pulleys.
          //     </li>
          //     <li><strong>Construction Equipment:</strong> Heavy-duty construction machinery, such as excavators, cranes, and bulldozers, use bushings to absorb shocks, reduce wear, and improve the performance of moving parts under high-load conditions.
          //     </li>
          //     <li><strong>Consumer Goods:</strong> Bushings are used in various consumer goods, such as appliances, power tools, and furniture to provide smooth motion and reduce wear.
          //     </li>
          //   </ul>
          // `,
          // benefits: `
          //   <ul class="benefits-list">
          //     <li><strong>Wear Resistance:</strong> Bushings help to reduce the wear and tear of parts that experience friction, extending the lifespan of mechanical components.
          //     </li>
          //     <li><strong>Low Friction:</strong> Bushings provide a smooth, low-friction surface that reduces energy loss and wear between moving parts.
          //     </li>
          //     <li><strong>Shock Absorption:</strong> Rubber and composite bushings can absorb shocks and vibrations, reducing noise and providing smoother operation.
          //     </li>
          //     <li><strong>Cost-Effective:</strong> Bushings are relatively inexpensive compared to other types of bearings and are easy to replace when worn.
          //     </li>
          //     <li><strong>Versatility:</strong> Bushings come in various materials and configurations, making them suitable for a wide range of applications.
          //     </li>
          //     <li><strong>Maintenance-Free Options:</strong> Self-lubricating bushings can operate without external lubrication, reducing maintenance requirements.
          //     </li>
          //   </ul>
          // `,
        },
      ],
    },
  ];
  return <Products.Provider value={{ data }}>{children}</Products.Provider>;
}

export default Products;
