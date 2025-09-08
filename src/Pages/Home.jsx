import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";
import WhyChoose from "../Components/WhyChose/WhyChoose";
const Home = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Products headline="Best Selling Products" />
    </>
  );
};

export default Home;
