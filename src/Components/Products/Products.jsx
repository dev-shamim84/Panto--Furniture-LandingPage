import { products } from "../../Utility/Product";
import ProductCard from "../Productgrid/ProductCard";
import { useState } from "react";
import btnIcon from "../../assets/button-icon.png";
const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectCategory, setSelectCategory] = useState("Chair");
  const [visiableProducs, setVisiableProducs] = useState(4);
  const fiiterdCategory = products.filter(
    (product) => product.category === selectCategory
  );
  const handleVisiableProducts = () => {
    setVisiableProducs((prev) => prev + 4);
  };
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-4xl font-bold text-center my-8">
        <h2>{headline}</h2>
      </div>
      <div className="bg-[#F7F7F7] max-w-md mx-auto sm:rounded-full md:px-2.5 py-5 mb-5">
        <div className="flex flex-col sm:flex-row md:justify-between items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              onClick={() => {
                setSelectCategory(category);
                setVisiableProducs(4);
              }}
              className={`py-1.5 sm:px-6 rounded-full hover:bg-amber-600 hover:text-white transition-colors cursor-pointer ${
                selectCategory === category
                  ? "bg-white text-amber-600"
                  : "text-black"
              }`}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center gap-6">
        {fiiterdCategory.slice(0, visiableProducs).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div>
        {visiableProducs < fiiterdCategory.length && (
          <div className="flex justify-center items-center my-5">
            <button
              onClick={handleVisiableProducts}
              className="flex gap-2 items-center text-base font-bold text-amber-600"
            >
              View All <img src={btnIcon} alt="btn-icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Products;
