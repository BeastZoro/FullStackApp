import React from "react";

const OfferCard = ({ desc, image }) => {
  return (
    <div className="flex items-center gap-[10px] my-[20px]">
      <img src={image} alt="offer_image" />
      <div>
        <p className="text-sm my-[10px]">{desc}</p>
        <p className="w-fit text-white font-medium bg-[#EB1B3E] px-[15px] py-[6px] rounded-full">$44</p>
      </div>
    </div>
  );
};

export default OfferCard;
