import Exprience from "../Components/Expriencesection/Exprience";
import Hero from "../Components/Hero/Hero";
import Metarials from "../Components/Metarials/Metarials";
import Products from "../Components/Products/Products";
import WhyChoose from "../Components/WhyChose/WhyChoose";
const Home = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Products headline="Best Selling Products" />
      <Exprience />
      <Metarials />
    </>
  );
};

export default Home;
