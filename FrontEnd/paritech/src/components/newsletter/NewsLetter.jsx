import React, { useState } from "react";

const NewsLetter = () => {

    const [input, setInput] = useState('')

const handleSubmit = (e) =>{
  e.preventDefault()
}
  return (
    <section className="my-[50px] text-center">
      <h2 className="uppercase text-[1.5rem] font-semibold">Newsletter</h2>
      <p className="text-gray-600 capitalize">subscribe to our newsletter and get 10% off on your first purchase</p>

      <form className="px-[20px] my-[30px] max-w-[800px] mx-auto" onSubmit={handleSubmit}>
        <div className="w-full border border-black rounded-full flex justify-between overflow-hidden">
          <input type="email" 
            placeholder="Your email address"
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            className="w-[70%] py-[15px] border-none outline-none indent-[25px]" 
        />
          <button type="submit" className="w-[25%] text-sm md:text-[1.1rem] text-white uppercase font-medium bg-red-600  py-[15px] rounded-e-full">subscribe</button>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;
