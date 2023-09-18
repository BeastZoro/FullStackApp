import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import limitedImg1 from "../../assets/Images/limitedoffer/modal1.png";
import limitedImg2 from "../../assets/Images/limitedoffer/modal2.png";
import limitedImg3 from "../../assets/Images/limitedoffer/modal3.png";
import limitedImg4 from "../../assets/Images/limitedoffer/modal4.png";

const Limited = () => {
  const offerImages = [limitedImg1, limitedImg2, limitedImg3, limitedImg4];
  const OfferTime = new Date(2023, 11, 30, 12, 0, 0);

  const [Slideindex, setSlideIndex] = useState(0);

  const handleSlideChange = (newIndex) => {
    if (newIndex < 0) {
      setSlideIndex(offerImages.length - 1);
    } else if (newIndex >= offerImages.length) {
      setSlideIndex(0);
    } else {
      setSlideIndex(newIndex);
    }
  };
  return (
    <section className="mx-auto max-w-[1200px] flex-col md:flex md:flex-row items-center justify-center">
      <article className="md:w-[50%] relative flex overflow-hidden h-[550px]">

            <img
              src={offerImages[Slideindex]}
              alt="limitedoffimg"
              className="w-full h-full object-cover"
            />
  
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
      </article>
      <article className="md:w-[50%] h-[550px] bg-[#FFE393] flex flex-col items-center justify-center gap-[15px]  text-center p-[20px]">
        <p className="uppercase text-sm">Deal of the day</p>
        <h2 className="capitalize text-[1.3rem] font-medium">
          beautiful dress for women
        </h2>
        <p className="mx-auto text-sm max-w-[300px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
          nihil?
        </p>
        <h3 className="my-[10px] font-bold text-[1.5rem] text-red-600">
          $1200
          <sub className="line-through font-medium text-gray-600">$1300</sub>
        </h3>
        <CountDown OfferTime={OfferTime} />
      </article>
    </section>
  );
};

export default Limited;

const CountDown = ({ OfferTime }) => {
  const handleTimeCounter = () => {
    const now = new Date().getTime();
    const difference = OfferTime - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };
  const [CountTimer, SetCountTime] = useState(handleTimeCounter());

  useEffect(() => {
    const interval = setInterval(() => {
      SetCountTime(handleTimeCounter());
    }, 1000);

    return () => clearInterval(interval);
  }, [OfferTime]);

  return (
    <article className="flex justify-center items-center gap-[20px] capitalize my-[10px]">
      <div>
        <p className="text-[1.3rem] font-semibold my-[10px]">{CountTimer.days}</p>
        <p>days</p>
      </div>
      <div>
        <p className="text-[1.3rem] font-semibold my-[10px]">{CountTimer.hours}</p>
        <p>hours</p>
      </div>
      <div>
        <p className="text-[1.3rem] font-semibold my-[10px]">{CountTimer.minutes}</p>
        <p>minutes</p>
      </div>
      <div>
        <p className="text-[1.3rem] font-semibold my-[10px]">{CountTimer.seconds}</p>
        <p>minutes</p>
      </div>
    </article>
  );
};

