import { useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Productlist from "../components/Productlist";

function Homepage() {
  let { category } = useParams();
  return (
    <>
      <HeroSection />
      <Productlist category={category} />
    </>
  );
}

export default Homepage;
