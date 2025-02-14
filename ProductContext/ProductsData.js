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
          introduction: `
            <p class="introduction-text">
              Gears are mechanical components used to transmit motion and torque between machine parts. They come in various materials depending on their application, including metal, plastic, and composites. <strong>Plastic gears</strong> offer a range of benefits in specific applications, such as reduced weight, quality control in manufacturing, quieter operation, lower cost, and corrosion resistance.
            </p>
            <p class="introduction-text">
              <strong>Delrin gears</strong> are a specific type of plastic gears made from Delrin, a brand name for a type of acetal resin (polyoxymethylene, POM). Delrin is a high-performance thermoplastic known for its excellent strength, durability, and wear resistance. Delrin gears are widely used in applications requiring precision, low friction, and high load-bearing capacities.
            </p>
          `,
          properties: `
            <p class="properties-text">
              Delrin is produced by DuPont and is a highly versatile plastic with several attractive properties that make it ideal for gear manufacturing:
            </p>
            <ul class="properties-list">
              <li><strong>High Strength & Stiffness:</strong> Delrin has impressive tensile strength and rigidity, which allows it to handle higher loads and maintain shape during high-stress applications.</li>
              <li><strong>Low Friction:</strong> Delrin has a very low coefficient of friction, which helps minimize wear between meshing gears and reduces the need for lubrication.</li>
              <li><strong>Excellent Wear Resistance:</strong> Delrin resists wear and tear, making it ideal for long-lasting gear applications, especially in high-cycle situations.</li>
              <li><strong>Good Dimensional Stability:</strong> Delrin retains its shape even when exposed to temperature variations or external mechanical forces.</li>
              <li><strong>Chemical Resistance:</strong> It is resistant to many solvents, oils, and fuels, making it suitable for use in automotive, industrial, and food processing environments.</li>
              <li><strong>Low Moisture Absorption:</strong> Delrin has low moisture absorption, ensuring consistent performance even in humid or wet conditions.</li>
              <li><strong>Noise Reduction:</strong> Plastic gears, including Delrin, generally produce less noise compared to metal gears, which is beneficial for applications requiring quieter operations.</li>
            </ul>
          `,
          applications: `
            <p class="applications-text">
              Delrin gears are used in a variety of industries and applications, including:
            </p>
            <ul class="applications-list">
              <li><strong>Automotive:</strong> Used in powertrain systems, window regulators, wiper motors, seat adjusters, and other components.</li>
              <li><strong>Consumer Electronics:</strong> Found in devices such as printers, cameras, and home appliances.</li>
              <li><strong>Robotics:</strong> Delrin gears are commonly used in robots for precise motion and low friction.</li>
              <li><strong>Medical Equipment:</strong> Used in applications like pumps, dental equipment, and other small, high-precision devices.</li>
              <li><strong>Office Equipment:</strong> Found in printers, copiers, and fax machines where silent and reliable operation is crucial.</li>
              <li><strong>Toys and Hobbyist Gear Systems:</strong> Because they are cost-effective, Delrin gears are popular in small hobbyist projects such as remote-controlled vehicles and mechanical toys.</li>
            </ul>
          `,
          benifits: `
            <p class="benefits-text">
              Delrin gears offer numerous benefits, especially in non-metallic applications, including:
            </p>
            <ul class="benefits-list">
              <li><strong>Reduced Weight:</strong> Plastic gears, including Delrin, are much lighter than metal gears, which is crucial for weight-sensitive applications like consumer electronics or automotive systems.</li>
              <li><strong>Cost-Effective:</strong> Delrin gears are typically cheaper to manufacture compared to metal gears, especially in high-volume applications.</li>
              <li><strong>Corrosion Resistance:</strong> Unlike metal gears, Delrin gears do not corrode when exposed to moisture or certain chemicals, making them ideal for wet or humid environments.</li>
              <li><strong>Lower Power Consumption:</strong> Plastic gears reduce friction, leading to lower power consumption and more efficient energy transfer in some systems.</li>
              <li><strong>Self-Lubricating:</strong> Delrin’s low coefficient of friction helps reduce wear, and many Delrin gears are self-lubricating or require less lubrication than metal gears.</li>
            </ul>
          `,
        },
      ],
    },
  ];

  return <Products.Provider value={{ data }}>{children}</Products.Provider>;
}

export default Products;
