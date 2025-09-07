import React from "react";

const TollTip = () => {
  return (
    <div className="absolute bottom-[160] left-24 group">
      <button className="relative bg-white/25 p-4 rounded-full border border-1 bg-white mt-3 text-xl ">
        <div className="absolute bottom-full hidden left-1/2 transform -translate-x-1/2 mb-3 p-2 rounded-lg bg-white/30 shadow-md group-hover:flex transition duration-500 ease-in space-x-2">
          <div className="size-6 bg-red-700 border rounded-full border-white"></div>
          <div className="size-6 bg-green-700 border rounded-full border-white"></div>
          <div className="size-6 bg-purple-700 border rounded-full border-white"></div>
        </div>
        {/* tooltip arrow  */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 -bottom-2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35 "></div>
      </button>
    </div>
  );
};

export default TollTip;
