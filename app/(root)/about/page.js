import Aboutpage2 from "@/aboutComponents/Aboutpage2";
import AboutPage1 from "../../../aboutComponents/AboutPage1";

export const metadata = {
  title: "The gear edges - About",
  description:
    "Gear Edge is an ISO 9001 certified manufacturer of high-precision custom gears. We specialize in close-tolerance gears for demanding applications. Contact us for your custom gear needs. ",
};

export default function page() {
  return (
    <div>
      <AboutPage1 name="About us" />
      <Aboutpage2 />
    </div>
  );
}
