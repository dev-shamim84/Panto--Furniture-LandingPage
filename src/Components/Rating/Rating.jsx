import { IoStarSharp } from "react-icons/io5";
import { MdStarHalf } from "react-icons/md";
const Rating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1;
        return starIndex <= rating ? (
          <IoStarSharp key={index} className="text-yellow-500" />
        ) : (
          <MdStarHalf key={index} className="text-gray-400" />
        );
      })}
    </div>
  );
};

export default Rating;
