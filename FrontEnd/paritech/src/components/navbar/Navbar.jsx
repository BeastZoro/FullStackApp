import React, { useContext, useState } from "react";
import NavHead from "./NavHead";
import NavbarLinks from "./NavJson";
import { CartContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ham_menu, setHamMenu] = useState(false);

  return (
    <nav className="z-[100] relative">
      <NavHead />

      <section className="sticky top-0 nav_body w-full bg-gray-800 h-[60px] mt-[15px]">
        <div className="relative nav_wrap container mx-auto h-full flex justify-start gap-[30px]">
          <div className="group cat_menu relative flex gap-[20px] items-center w-min h-full pl-[30px] pr-[40px] bg-[#eb1b3e] cursor-pointer">
            <p className="text-[1.5rem] text-white">
              <i className="fa-solid fa-bars"></i>
            </p>
            <h2 className="text-[1.2rem] text-white uppercase font-semibold">
              Categories
            </h2>

            <div className="hidden group-hover:block absolute top-[100%] left-0 w-full bg-gray-50">
              <ul className="border border-gray-400">
                {NavbarLinks.cat_menu.map((ele, index) => {
                  return (
                    <li
                      key={index}
                      className="cursor-pointer capitalize py-4 px-6 hover:bg-pink-200"
                    >
                      {ele}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <p
            className="hamburger z-10 absolute top-[20%] right-0 md:hidden text-gray-600 text-[1.5rem] cursor-pointer px-[20px]"
            onClick={() => setHamMenu(!ham_menu)}
          >
            <i className={`fa-solid ${ham_menu ? "fa-xmark" : "fa-bars"}`}></i>
          </p>

          <div
            className={`nav_links absolute top-0 ${
              ham_menu ? "right-[-10%]" : "right-[-100%]"
            } duration-500 w-[70%] md:static md:w-full md:h-fit h-[100vh]  bg-gray-200  md:bg-transparent`}
          >
            <ul className="flex-col md:h-[60px] md:flex md:flex-row md:items-center md:space-y-0 md:p-0 px-[50px] py-[100px] space-y-6 ">
              {NavbarLinks.nav_menu.map((ele, index) => {
                return (
                  <li
                    key={index}
                    className="group relative capitalize h-full px-3 text-black md:text-white flex gap-[5px] items-center text-sm font-medium cursor-pointer md:hover:bg-[#eb1b3e]"
                    onClick={() => setHamMenu(!ham_menu)}
                  >
                    <Link to={ele.link} className="h-full md:py-0 py-[20px] flex items-center">
                      <p>{ele.name}</p>
                    </Link>
                    <i
                      className={`${
                        ele.drop_menu && "fa-solid fa-chevron-down"
                      } text-xs`}
                    ></i>

                    {ele.drop_menu && (
                      <ul className="max-w-[120px] z-[20] hidden group-hover:block absolute top-[100%] left-0 bg-[#eb1b3e] w-full text-white">
                        {ele.drop_menu.map((ele, index) => {
                          return (
                            <Link to={ele} key={index}>
                              <li className="p-2">{ele}</li>
                            </Link>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
