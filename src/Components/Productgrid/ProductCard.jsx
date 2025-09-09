import { HiPlus } from "react-icons/hi";
import { getImageUrl } from "../../Utility/Imageurl.js";
import Rating from "../Rating/Rating";
import { useOutletContext } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { name, category, price, imageUrl, rating } = product;
  const { handleAddToCart } = useOutletContext();
  return (
    <div>
      <div className="bg-[#FaFaFa]">
        <img src={getImageUrl(`${imageUrl}`)} alt="" />
      </div>
      <div className="p-6 bg-white dark:bg-black shadow-sm">
        <h4 className="text-base mb-2">{category}</h4>
        <h3 className="font-semibold text-xl mb-2">{name}</h3>
        <Rating rating={rating} />
        <div className="mt-5 flex justify-between items-center">
          <p className="text-black dark:text-white font-bold">
            <sup>$</sup>
            <span className="ml-1">{price}</span>
          </p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-black text-white p-2 rounded-full"
          >
            <HiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
