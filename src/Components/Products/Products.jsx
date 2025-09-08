import { products } from "../../Utility/Product";
import ProductCard from "../Productgrid/ProductCard";
import { useState } from "react";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectCategory, setSelectCategory] = useState("Chair");
  const fiiterdCategory = products.filter(
    (product) => product.category === selectCategory
  );
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-4xl font-bold text-center my-8">
        <h2>{headline}</h2>
      </div>
      <div className="bg-[#F7F7F7] max-w-md mx-auto sm:rounded-full md:px-2.5 py-5 mb-5">
        <div className="flex flex-col sm:flex-row md:justify-between items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              onClick={() => setSelectCategory(category)}
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
        {fiiterdCategory.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Products;
