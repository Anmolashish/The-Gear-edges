import Aboutpage2 from "@/app/aboutComponents/Aboutpage2";
import AboutPage1 from "../../aboutComponents/AboutPage1";

export const metadata = {
  title: "The gear edges - About",
  description:
    "This app is created for The gear edges and they are famously known for their product sold for gears",
};

export default function page() {
  return (
    <div>
      <AboutPage1 name="About us" />
      <Aboutpage2 />
    </div>
  );
}
