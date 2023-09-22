import React from "react";

const Location = () => {
  return (
    <section className="mx-auto my-[40px]">
      <p className="text-[1.3rem] my-[20px] font-medium">Find Us on Google maps:</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1940.4534442592847!2d77.68186558038!3d13.41809027082031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e58eb79d131d%3A0x47855ba6838608c4!2sSkandagiri%20Hills!5e0!3m2!1sen!2sin!4v1695378662402!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-2 border-gray-500 rounded-md overflow-hidden"></iframe>
    </section>
  );
};

export default Location;
