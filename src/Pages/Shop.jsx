import BannerImg from "../../src/assets/banner.png";
import Products from "../Components/Products/Products";
const Shop = () => {
  return (
    <section className="min-h-screen">
      <div
        className="w-full bg-center bg-cover h-[400px] flex justify-center items-center"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <h1 className="text-4xl text-white font-semibold ">
          Shop Our Products
        </h1>
      </div>
      <Products headline="What's Your Choices" />
    </section>
  );
};

export default Shop;
