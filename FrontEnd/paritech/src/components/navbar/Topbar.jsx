import React from "react";

const Topbar = () => {

  const topbar_data = [
    {
      icon : 'fa-solid fa-location-dot',
      value : 'Store Location'
    },
    {
      icon : 'fa-regular fa-bell',
      value : 'Daily Deal'
    },
    {
      icon : 'fa-solid fa-user',
      value : 'My account'
    },
    {
      icon : 'fa-solid fa-power-off',
      value : 'Login'
    }
  ]

  
  return (
    <section className="my-[20px] topbar hidden justify-between text-[.9rem] md:flex">
      <div className="contacts flex gap-[30px] items-center">
        <p className="flex gap-2 items-center">
          <i className="fa-solid fa-headphones text-pink-600"></i>+911234567890
        </p>
        <p className="flex gap-2 items-center ">
          <i className="fa-regular fa-envelope text-pink-600"></i> [email protected]
        </p>
      </div>

      <div className="actions">
        <ul className="flex items-center gap-[10px]">
            {
              topbar_data.map((ele, index) =>{
                return(
                  <li key={index} className="cursor-pointer">
                    <i className={`${ele.icon} mx-[10px] text-pink-600`}></i>
                    {ele.value}
                  </li>
                )
              })
            }
        </ul>
      </div>
    </section>
  );
};

export default Topbar;
