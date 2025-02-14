import Aboutpage2 from "@/app/aboutComponents/Aboutpage2";
import AboutPage1 from "../../aboutComponents/AboutPage1";

export const metadata = {
  title: "Steel Mans Gears - About",
  description:
    "This app is created for the Steel Mans gears and they are famously known for their product sold for gears",
};

export default function page() {
  return (
    <div>
      <AboutPage1 name="About us" />
      <Aboutpage2 />
    </div>
  );
}
