import React, { useEffect, useState } from "react";
import { Banner_Json } from "./Bannerjson";

const Banner = () => {
  const [data, setData] = useState(Banner_Json);
  const [Slideindex, setSlideIndex] = useState(0);

  const handleSlideChange = (newIndex) =>{
    if(newIndex < 0){
      setSlideIndex(data.length - 1);
    } else if(newIndex >= data.length){
      setSlideIndex(0);
    } else {
      setSlideIndex(newIndex)
    }
  }
  
  return (
    <section className="relative w-full h-[65vh]">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={data[Slideindex].image}
          alt={data[Slideindex].title}
        />

        <div className="absolute top-[30%] right-[10%] uppercase flex flex-col gap-3">
          <p className="font-medium">upto 50% off</p>
          <p className="text-[#EB1B3E] text-lg md:text-[2rem] font-semibold capitalize">
            {data[Slideindex].title}
          </p>
          <p className="text-sm max-w-[300px] normal-case">
            {data[Slideindex].desc}
          </p>
          <button className="max-w-[200px] px-[30px] py-[8px] bg-black text-white rounded-md uppercase">
            shop now
          </button>
        </div>
      </div>
      <button
        className="absolute top-[50%] left-[5%] text-xl bg-gray-300 px-[15px] py-[8px] rounded-full"
        onClick={() => handleSlideChange(Slideindex - 1)}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        className="absolute top-[50%] right-[5%] text-xl bg-gray-300 px-[15px] py-[8px] rounded-full"
        onClick={() => handleSlideChange(Slideindex + 1)}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </section>
  );
};

export default Banner;
