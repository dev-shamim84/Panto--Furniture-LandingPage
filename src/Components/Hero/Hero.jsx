import BannerImg from "../../assets/banner.png";
import { IoIosSearch } from "react-icons/io";
import TollTip from "../Tooltip/TollTip";

const Hero = () => {
  return (
    <section
      className="h-screen relative bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div>
        <div className=" px-2 pt-20 md:pt-48 text-center md:w-1/2 mx-auto text-white space-y-4">
          <h1 className="text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug ">
            Make your interior more minimalistic & modern
          </h1>
          <p className="text-[19] font-normal lg:w-1/2 mx-auto">
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
          {/* search box */}
          {/* <div className="relative inline-block ">
            <input
              type="text"
              placeholder="Search Furniture"
              className="w-full md:w-80 bg-white/75 py-1 px-2 placeholder-gray-500 text-black focus:outline-none rounded-full border border-gray-300"
            />
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-amber-600 rounded-full p-2 cursor-pointer">
              <IoIosSearch />
            </div>
          </div> */}
        </div>
      </div>
      {/* bottom Blur Effect */}
      <div className="absolute bottom-0 inset-x-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm" />
      {/* hover button displaying for tolltip  */}
      <div>
        <TollTip />
      </div>
    </section>
  );
};

export default Hero;
