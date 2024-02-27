import React from "react";

const Stats = () => {
  return (
    <div className="absolute z-20 -bottom-14 md:-bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-5 text-white ">
      <div className="w-28 h-28 md:w-40 md:h-40 bg-sky-900 shadow-xl rounded flex justify-center items-center flex-col p-1 text-center ">
        <p className="text-xl  md:text-4xl font-extrabold">{10}+</p>
        <p className="text-sm md:text-base">Years of Excellence</p>
      </div>
      <div className="w-28 h-28 md:w-40 md:h-40 bg-sky-900 shadow-xl rounded flex justify-center items-center flex-col p-1 text-center">
        <p className="text-xl  md:text-4xl font-extrabold">{4.5}</p>
        <p> Star Reviews</p>
      </div>
      <div className="w-28 h-28 md:w-40 md:h-40 bg-sky-900 shadow-xl rounded flex justify-center items-center flex-col p-1 text-center">
        <p className="text-xl  md:text-4xl font-extrabold">{100}+</p>
        <p>Happy Clients</p>
      </div>
    </div>
  );
};

export default Stats;
