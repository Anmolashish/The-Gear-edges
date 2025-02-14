import AboutPage1 from "@/aboutComponents/AboutPage1";
import ProductPage1 from "@/productComponents/ProductPage1";
import Link from "next/link";

export const metadata = {
  title: "The gear edges - Products",
  description:
    "This app is created for the The gear edges and they are famously known for their product sold for gears",
};

export default function layout({ children }) {
  return (
    <div>
      <AboutPage1 name={"Products"} />
      <div className="product-page-1">{children}</div>
    </div>
  );
}
