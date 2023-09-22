import React from "react";

const Services = () => {
  const ServiceJson = [
    {
      icon: "fa-solid fa-truck-fast",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel error odit quaerat consectetur maxime tempore dicta sit praesentium maiores ad!",
      title: "Title",
    },
    {
      icon: "fa-solid fa-truck-fast",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel error odit quaerat consectetur maxime tempore dicta sit praesentium maiores ad!",
      title: "Title",
    },
    {
      icon: "fa-solid fa-truck-fast",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel error odit quaerat consectetur maxime tempore dicta sit praesentium maiores ad!",
      title: "Title",
    },
    {
      icon: "fa-solid fa-truck-fast",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel error odit quaerat consectetur maxime tempore dicta sit praesentium maiores ad!",
      title: "Title",
    },
    {
      icon: "fa-solid fa-truck-fast",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel error odit quaerat consectetur maxime tempore dicta sit praesentium maiores ad!",
      title: "Title",
    },
    {
      icon: "fa-solid fa-truck-fast",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel error odit quaerat consectetur maxime tempore dicta sit praesentium maiores ad!",
      title: "Title",
    },
  ];
  return (
    <section className="my-[30px]">
      <Service serviceData={ServiceJson} />
    </section>
  );
};

export default Services;

const Service = ({ serviceData }) => {
  return (
    <div className="grid gap-[30px] grid-cols-2 md:grid-cols-3 ">
      {serviceData.map((ele, index) => {
        return (
          <article key={index} className="text-center border-2 border-gray-300 p-[30px] hover:scale-[1.1] duration-200 hover:shadow-md hover:shadow-gray-400">
            <p className="text-[2rem]"><i className={`${ele.icon}`}></i></p>
            <p className="text-[1.5rem]">{ele.title}</p>
            <p className="text-sm">{ele.text}</p>
          </article>
        );
      })}
    </div>
  );
};
