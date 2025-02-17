import AboutPage1 from "@/aboutComponents/AboutPage1";
import ProductPage1 from "@/productComponents/ProductPage1";
import Link from "next/link";

export const metadata = {
  title: "The gear edges - Products",
  description:
    "Gear Edge offers custom solutions tailored to your specifications. Such as rack and pinion systems, pulleys, bushes and many more. ",
};

export default function layout({ children }) {
  return (
    <div>
      <AboutPage1 name={"Products"} />
      <div className="product-page-1">{children}</div>
    </div>
  );
}
