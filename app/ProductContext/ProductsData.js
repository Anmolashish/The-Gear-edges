"use client";
import { createContext } from "react";

const Products = createContext();

export function ProductsData({ children }) {
  const data = [
    {
      id: 1,
      name: "Gear hobs",
      slug: "gear-hobs",
      items: [
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
          name: "Involute spline hobs ",
          description:
            "Involute Spline Hobs for cutting all types of standard and non-standard involute splines as per DIN 5480, 5481 & 5482. These are manufactured in pressure angles 20o, 30o, 37.5o and 45o with or without shoulder clearances in single or multi-start designs",
          image: "https://steelmansgears.com/imgs/chamfer_hobs.jpg",
          review: 1,
        },

        {
          id: 3,
          name: "Straight spline hobs ",
          description:
            "Straight Spline Hobs are used for cutting parallel splines. These are manufactured with or without lugs, semi-topping and shoulder clearance types in Class 'AA' & 'A'. ",
          image: "https://steelmansgears.com/imgs/involute-gear-hobs-big.jpg",
          review: 3,
        },

        {
          id: 4,
          name: "Sprocket hobs ",
          description:
            "Sprocket Hobs are manufactured for chain sprocket tooth forms as per BS, JIS, DIN, ASA standards with non-topping or full-topping types in single or multi-start designs. ",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
        {
          id: 5,
          name: "Worm wheel hobs ",
          description:
            "Worm Wheel Hobs are manufactured in bore type and shank type in single or multi-start, topping or non-topping as per DIN, BS specifications or as per customer's requirement. ",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
        {
          id: 6,
          name: "Chamfer hobs ",
          description:
            "Chamfer Hobs are generally used for chamfering of entering end of ring gears. These are available in various types as per drawing of components.",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
        {
          id: 7,
          name: "Inserted blade gear hobs ",
          description:
            "Inserted Blade Gear Hobs are manufactured in the range 20 to 32 module having blades of HSS (M-2 or M-35) materials and body made of carton steel. After introducing these hobs, it has become the best import substitute to save money & time. Damaged Blades can also be replaced. ",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
        {
          id: 8,
          name: "Saw blade hobs ",
          description: "Ground and Unground. For hack saw blade and band saw",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
      ],
      description: "",
    },
    {
      id: 2,
      name: "Gear cutters",
      slug: "gear-cutters",
      items: [
        {
          id: 11,
          name: "Shaving Cutters",
          description:
            " These HSS cutters are supplied in conventional type, diagonal, plunge cut with a wide range of sizes according to the customer requirement. Cutters are designed with profiles to incorporate them with tip relief, depth crowning, lead crowning etc., on component",
          image:
            "https://steelmansgears.com/imgs/shank_type_shaper_cutters.jpg",
          review: 4,
        },

        {
          id: 12,
          name: "Disk type cutters ",
          description:
            " These shaper cutters have a disc shaped which have the general utility to give roughing or finish form to cut spur, helical & spline gear",
          image: "https://steelmansgears.com/imgs/chamfer_hobs.jpg",
          review: 1,
        },

        {
          id: 13,
          name: "Sharper cutters ",
          description:
            " Sharper cutters is used to cut internal gears of small diameter and spline holes. They can also be designed for external gears depending on the job. ",
          image: "https://steelmansgears.com/imgs/involute-gear-hobs-big.jpg",
          review: 3,
        },

        {
          id: 14,
          name: "Hub type sharper cutters ",
          description:
            "These cutters can be used for roughing & finishing external gears where it is not feasible to use external disc type cutters.",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
      ],
      description: "",
    },
    {
      id: 3,
      name: "Spiral bevel cutters",
      slug: "spiral-bevel-cutters",
      items: [
        {
          id: 21,
          name: "Pinion and crown wheel roughing blade ",
          description: `1. Cutter Diameter 
2. Point Width 
3. Whole Depth of the Gear or Pinion to be cut 
4. Type of cutter body used (i.e. RIDG Ac, Soft Body, etc) 
5. Pressure Angle of O.B & I.B Blades 
6. No. of blades per set 
7. Blade Edge Radius `,
          image:
            "https://steelmansgears.com/imgs/shank_type_shaper_cutters.jpg",
          review: 4,
        },

        {
          id: 22,
          name: "Crown wheel finishing blades ",
          description: `1. Cutter Diameter 
2. Point Width 
3. Pressure Angle of O.B & I.B Blades 
4. Blade Edge Radius `,
          image: "https://steelmansgears.com/imgs/chamfer_hobs.jpg",
          review: 1,
        },

        {
          id: 23,
          name: "Pinion finishing blades (concave & convex) ",
          description: `1. Point Width 
2. Type of cutter body used 
3. Point width of roughing Blades 
4. Pressure Angle 
5. Top Term Letter 
6. Blade Edge Radius 
7. No. of blades per Set `,
          image: "https://steelmansgears.com/imgs/involute-gear-hobs-big.jpg",
          review: 3,
        },

        {
          id: 24,
          name: "Oerlicon blanks ",
          description: `1. 7.5 x 9 x 95 mm 
2. 7.5 x 9 x 100 mm 
3. 13.5 x 17 x 110 mm 
Material: H.S.S AISI -M2, M35 `,
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },

        {
          id: 25,
          name: "Spiromatic blades ",
          description:
            " From Dia. 70 mm to 108 mm suitable for Oerlicon Spiral Bevel Gear Machines. Material: H.S.S AISI – M2 ",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
        {
          id: 26,
          name: "Curvex type blades  ",
          description: `1. Manufacture in both with Toprem and without Toprem, suitable for WMW Spiral Bevel Gear Machines 
2. 75 mm Dia - Set of 8 Blades 
3. 106 mm Dia. - Set of 10 Blades 
4. 150 mm Dia. Set of 12 Blades 
5. 212 mm Dia - Set of 16 Blades 
6. 300 mm Dia - Set of 18 Blades 
Material: H.S.S AISI – M2 `,
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
        {
          id: 27,
          name: "Rack shaper cutter ",
          description:
            "Suitable for MAG & Sunderland machines. Material: H.S.S AISI – M2 ",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
      ],
      description: "",
    },
    {
      id: 4,
      name: "Straight bevel cutters",
      slug: "straight-bevel-cutters",
      items: [
        {
          id: 31,
          name: "Segmented type straight bevel gear cutter  ",
          description: `(For Mass Production of Bevel Gears) 
1. Roughing, finishing & sompleting type suitable for 16",21" & 25" Diameter cutter bodies 
2. Deburring Tools 
Material: H.S.S AISI –M2 `,
          image:
            "https://steelmansgears.com/imgs/shank_type_shaper_cutters.jpg",
          review: 4,
        },

        {
          id: 32,
          name: "Pairs",
          description:
            "A pair of Straight bevel gear shaping generation cutter blades in type I to IV suitable for all types of machines, are supplied in module range 0.3 to 20 mm. Material: H.S.S AISI - M2, M35 ",
          image: "https://steelmansgears.com/imgs/chamfer_hobs.jpg",
          review: 1,
        },

        {
          id: 33,
          name: "Konvoid blades ",
          description: `1. ZFTK 250 X 5 Set OF 44 Blades 
2. ZFTK 500 X 10 Set of 56 Blades 
3. Russian Konovoid Blades Set of 36 Blades 
4. Klingelnberg Blades 
Set of 72 Blades 
Material: H.S.S AISI - M2, M35 `,
          image: "https://steelmansgears.com/imgs/involute-gear-hobs-big.jpg",
          review: 3,
        },

        {
          id: 34,
          name: "Coniflex blades  ",
          description:
            "Inserted Type Blades Suitable for cutting large Straight Gear. Material: H.S.S AISI – M2 ",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
      ],
      description: "",
    },
  ];

  return <Products.Provider value={{ data }}>{children}</Products.Provider>;
}

export default Products;
