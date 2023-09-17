import React from "react";

const Options = () => {
  const OptionsJson = [
    {
      icon: "fa-solid fa-truck-fast",
      title: "Free shipping",
      desc: "orders over $100",
    },
    {
      icon: "fa-solid fa-arrow-rotate-left",
      title: "Free return",
      desc: "within 30 days",
    },
    {
      icon: "fa-solid fa-lock",
      title: "secure payment",
      desc: "100% secure payment",
    },
    {
      icon: "fa-solid fa-tag",
      title: "Best price",
      desc: "Guaranteed prices",
    },
  ];
  return (
    <section className="flex flex-wrap justify-around bg-slate-200 h-[200px] px-[20px]">
      {OptionsJson.map((ele, index) => {
        return <OptionCard key={index} feature={ele} />;
      })}
    </section>
  );
};

export default Options;

const OptionCard = ({ feature }) => {
  const { icon, title, desc } = feature;
  return(
    <article className="flex items-center gap-[10px] px-[20px]">
        <p className="text-[1.5rem]"><i className={icon}></i></p>
        <div>
            <p>{title}</p>
            <p>{desc}</p>
        </div>
    </article>
  )

}
