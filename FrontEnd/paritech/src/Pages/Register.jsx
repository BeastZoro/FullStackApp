import React, { useState } from "react";
import { Button } from "../components/Buttons/Button";

const Register = () => {
  const [passType, setPassType] = useState(true);
  const [Inputs, setInputs] = useState({
    password: "",
    email: "",
    name: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  return (
    <section className="my-[40px]">
      <div className="login_wrap max-w-[400px] mx-auto shadow-md shadow-gray-500 py-[30px] px-[20px]">
        <h2 className="text-center text-[1.5rem] font-semibold my-[20px]">
          Create an account with
        </h2>
        <div className="social_btns flex flex-col gap-[20px] my-[20px]">
          <div className="facebook flex justify-between  w-[300px] items-center bg-blue-800 max-w-[400px] mx-auto py-[8px] px-[20px] text-white rounded-lg font-medium cursor-pointer active:scale-[0.9] duration-300">
            <p>
              <i className="fa-brands fa-square-facebook text-[1.5rem]"></i>
            </p>
            <p>Login with facebook</p>
          </div>

          <div className="facebook flex justify-between w-[300px] items-center bg-white-800 max-w-[400px] mx-auto py-[8px] px-[20px] text-black rounded-lg font-medium cursor-pointer active:scale-[0.9] duration-300 shadow-md shadow-gray-500">
            <p>
              <i className="fa-brands fa-google text-[1.5rem]"></i>
            </p>
            <p>Login with Google</p>
          </div>
        </div>

        <p className="text-center">or Login with with email</p>

        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="text-gray-500 flex flex-col gap-[10px] my-[20px]">
            <label htmlFor="name" className="text-sm mx-[10px]">
              Full Name
            </label>
            <div className="rounded-md px-[10px] border-2 border-gray-600 flex items-baseline">
              <label htmlFor="name">
                <i className="fa-solid fa-user"></i>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={Inputs.name}
                onChange={(e) => handleChange(e)}
                placeholder="Full name"
                className="indent-[10px] py-[5px] outline-none"
              />
            </div>
          </div>

          <div className="text-gray-500 flex flex-col gap-[10px] my-[20px]">
            <label htmlFor="email" className="text-sm mx-[20px]">
              Email Address
            </label>
            <div className="rounded-md px-[10px] border-2 border-gray-600 flex items-baseline">
              <label htmlFor="name">
                <i className="fa-solid fa-envelope"></i>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={Inputs.email}
                onChange={(e) => handleChange(e)}
                placeholder="Email Address"
                className="indent-[10px] py-[5px] outline-none w-full"
              />
            </div>
          </div>
          <div className="text-gray-500 flex flex-col gap-[10px] my-[20px]">
            <label htmlFor="email" className="text-sm mx-[20px]">
              Password
            </label>
            <div className="rounded-md px-[10px] border-2 border-gray-600 flex items-baseline">
              <label htmlFor="password">
                <i className="fa-solid fa-lock"></i>
              </label>
              <input
                type={`${passType ? "password" : "text"}`}
                id="password"
                name="password"
                value={Inputs.password}
                onChange={(e) => handleChange(e)}
                placeholder="Choose Password"
                className="indent-[10px] py-[5px] outline-none w-full"
              />
              <p onClick={() => setPassType(!passType)}>
                <i
                  className={`fa-solid ${
                    !passType ? "fa-eye" : "fa-eye-slash"
                  }`}
                ></i>
              </p>
            </div>

            <div className="remember_me flex gap-[20px] capitalize font-medium">
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember">I accept the terms of use</label>
            </div>

            <Button value={"signup"} />

            <p className="my-[10px]">
              Already have an account ?{" "}
              <span className="font-bold text-blue-600">SIGN IN</span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
