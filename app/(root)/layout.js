import HomeFooter from "../components/HomeFooter";
import HomePage4 from "../components/HomePage4";
import Navbar from "../components/Navbar";
export const metadata = {
  title: "Steel Mans Gears - Home",
  description:
    "This app is created for the Steel Mans gears and they are famously known for their product sold for gears",
};
export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <HomePage4 />
      <HomeFooter />
    </div>
  );
}
