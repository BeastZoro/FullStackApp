import React from "react";
import footLogo from "../../assets/Images/logo/logo2.png";
import footPay from '../../assets/Images/payments.png'

const Footer = () => {
  const FootLinks = [
    {
      title: "Information",
      links: ["About us", "Faq", "terms & conditions", "contact us", "help"],
    },
    {
      title: "customer service",
      links: [
        "payment methods",
        "money-back",
        "returns",
        "shopping",
        "privacy policy",
      ],
    },
  ];
  return (
    <footer className="bg-gray-900 text-white py-[30px]">
      <div className="foot_wrapper flex flex-wrap justify-around items-center">
        <div class="foot_head my-[20px]">
          <div class="logo_wrapper w-[300px]">
            <img
              src={footLogo}
              alt="foot_logo"
              className="w-full object-cover"
            />
          </div>
          <p className="max-w-[500px] lg:max-w-[300px] text-[.9rem] my-[10px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            molestias doloremque magni repudiandae veritatis magnam eveniet
            nobis quo facere atque
          </p>
          <p>Got question call us 24/7</p>
          <h3 className="text-[1.3rem] font-bold">+911234567890</h3>
        </div>

        <div class="foot_body flex gap-[30px]">
          {FootLinks.map((link, index) => {
            return (
              <article key={index} className="">
                <h3 className="text-[1.2rem] capitalize">{link.title}</h3>
                <ul className="flex flex-col ml-[20px] gap-[12px] my-[10px]">
                  {link.links.map((ele, index) => (
                    <li
                      key={index}
                      className=" cursor-pointer capitalize text-[.9rem]"
                    >
                      {ele}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
          <div class="get_touch">
            <h3 class="title text-[1.3rem]">Get in touch</h3>
            <p className="my-[10px] text-[.9rem]">
              No 342-London oxford street <br />
              012 united kingdom <br />
              [email protected] <br />
              +03212312412
            </p>
            <p class="social flex gap-[20px] text-[1.1rem]">
              <i class="cursor-pointer fa-brands fa-facebook"></i>
              <i class="cursor-pointer fa-brands fa-twitter"></i>
              <i class="cursor-pointer fa-brands fa-instagram"></i>
              <i class="cursor-pointer fa-brands fa-discord"></i>
            </p>
          </div>
        </div>
      </div>

      <hr className="border border-white w-full my-[40px]" />
      <div class="foot_tail flex flex-wrap gap-[20px] justify-around items-center my-[20px] text-[.9rem] px-[20px]">
        <p>
          copyright A &copy; 2020 <a href="#" className="text-white capitalize font-semibold">wpthemegrid</a>-All rights
          reserved.
        </p>

        <div class="foot_payment">
          <img src={footPay}  alt="footPayment" className="h-[25px]"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
