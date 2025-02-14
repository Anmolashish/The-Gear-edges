import HomeFooter from "../components/HomeFooter";
import HomePage1 from "../components/HomePage1";
import HomePage2 from "../components/HomePage2";
import HomePage3 from "../components/HomePage3";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="main-div">
      <HomePage1 />
      <HomePage2 />
      <HomePage3 />
    </div>
  );
}
