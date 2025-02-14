"use client";
import { createContext } from "react";

const Products = createContext();

export function ProductsData({ children }) {
  const data = [
    {
      id: 1,
      name: "Plastic/Delrin Gears",
      slug: "plastic-delrin-gears",
      textData: [
        {
          image:
            "https://www.thegearedges.com/wp-content/uploads/2024/07/image-1.jpg",
          introduction: `Gears are mechanical components used to transmit motion and torque between machine parts. They come in various materials depending on their application, including metal, plastic, and composites. Plastic gears offer a range of benefits in specific applications, such as reduced weight, quality control in manufacturing, quieter operation, lower cost, and corrosion resistance. 

Delrin gears are a specific type of plastic gears made from Delrin, a brand name for a type of acetal resin (polyoxymethylene, POM). Delrin is a high-performance thermoplastic known for its excellent strength, durability, and wear resistance. Delrin gears are widely used in applications requiring precision, low friction, and high load-bearing capacities. `,
          properties: `Delrin is produced by DuPont and is a highly versatile plastic with several attractive properties that make it ideal for gear manufacturing: 

High Strength & Stiffness: Delrin has impressive tensile strength and rigidity, which allows it to handle higher loads and maintain shape during high-stress applications. 

Low Friction: Delrin has a very low coefficient of friction, which helps minimize wear between meshing gears and reduces the need for lubrication. 

Excellent Wear Resistance: Delrin resists wear and tear, making it ideal for long-lasting gear applications, especially in high-cycle situations. 

Good Dimensional Stability: Delrin retains its shape even when exposed to temperature variations or external mechanical forces. 

Chemical Resistance: It is resistant to many solvents, oils, and fuels, making it suitable for use in automotive, industrial, and food processing environments. 

Low Moisture Absorption: Delrin has low moisture absorption, ensuring consistent performance even in humid or wet conditions. 

Noise Reduction: Plastic gears, including Delrin, generally produce less noise compared to metal gears, which is beneficial for applications requiring quieter operations. `,
          applications: `Delrin gears are used in a variety of industries and applications, including: 

Automotive: Used in powertrain systems, window regulators, wiper motors, seat adjusters, and other components. 

Consumer Electronics: Found in devices such as printers, cameras, and home appliances. 

Robotics: Delrin gears are commonly used in robots for precise motion and low friction. 

Medical Equipment: Used in applications like pumps, dental equipment, and other small, high-precision devices. 

Office Equipment: Found in printers, copiers, and fax machines where silent and reliable operation is crucial. 

Toys and Hobbyist Gear Systems: Because they are cost-effective, Delrin gears are popular in small hobbyist projects such as remote-controlled vehicles and mechanical toys. `,
          benifits: `Delrin gears offer numerous benefits, especially in non-metallic applications, including: 

Reduced Weight: Plastic gears, including Delrin, are much lighter than metal gears, which is crucial for weight-sensitive applications like consumer electronics or automotive systems. 

Cost-Effective: Delrin gears are typically cheaper to manufacture compared to metal gears, especially in high-volume applications. 

Corrosion Resistance: Unlike metal gears, Delrin gears do not corrode when exposed to moisture or certain chemicals, making them ideal for wet or humid environments. 

Lower Power Consumption: Plastic gears reduce friction, leading to lower power consumption and more efficient energy transfer in some systems. 

Self-Lubricating: Delrin’s low coefficient of friction helps reduce wear, and many Delrin gears are self-lubricating or require less lubrication than metal gears. `,
        },
      ],
    },
  ];

  return <Products.Provider value={{ data }}>{children}</Products.Provider>;
}

export default Products;
