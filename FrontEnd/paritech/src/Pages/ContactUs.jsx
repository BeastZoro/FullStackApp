import React, { useState } from "react";
import { Button } from "../components/Buttons/Button";

const ContactUs = () => {
  const [Inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  console.log(Inputs.name);
  return (
    <section className="my-[30px]">
      <h2 className="text-center text-[1.7rem] font-semibold">
        Have a question? We're here to help.
      </h2>
      <form
        className="max-w-[800px] mx-auto px-[20px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="text-gray-500 flex flex-col gap-[10px] my-[20px]">
          <label htmlFor="name" className="text-sm mx-[10px]">
            Full Name
          </label>
          <div className="rounded-md px-[10px] bg-slate-200 flex items-baseline">
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
              className="indent-[10px] py-[5px] outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="text-gray-500 flex flex-col gap-[10px] my-[20px]">
          <label htmlFor="email" className="text-sm mx-[10px]">
            Email
          </label>
          <div className="rounded-md px-[10px] bg-slate-200 flex items-baseline">
            <label htmlFor="name">
              <i class="fa-solid fa-envelope"></i>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={Inputs.email}
              onChange={(e) => handleChange(e)}
              placeholder="Email Address"
              className="indent-[10px] py-[5px] outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="text-gray-500 flex flex-col gap-[10px] my-[20px]">
          <label htmlFor="name" className="text-sm mx-[10px]">
            Subject
          </label>
          <div className="rounded-md px-[10px] bg-slate-200 flex items-baseline">
            <label htmlFor="subject">
              <i class="fa-solid fa-grip-lines"></i>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={Inputs.subject}
              onChange={(e) => handleChange(e)}
              placeholder="Subject"
              className="indent-[10px] py-[5px] outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="text-gray-500 flex flex-col gap-[10px] my-[20px]">
          <label htmlFor="message" className="text-sm mx-[10px]">
            Message
          </label>
          <div className="rounded-md px-[10px] bg-slate-200 flex items-baseline">
            <label htmlFor="message">
              <i class="fa-solid fa-message"></i>
            </label>
            <textarea
              type="text"
              id="subject"
              name="message"
              rows={8}
              value={Inputs.message}
              onChange={(e) => handleChange(e)}
              placeholder="Message"
              className="indent-[10px] py-[5px] outline-none bg-transparent resize-none"
            />
          </div>
        </div>

        <Button value={"Send Message"} />
      </form>
    </section>
  );
};

export default ContactUs;
