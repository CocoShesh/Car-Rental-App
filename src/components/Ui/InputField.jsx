import React from "react";
import { MdOutlineAccountCircle, MdOutlineLockPerson } from "react-icons/md";

const InputField = ({ type, placeholder, icon }) => {
  return (
    <section className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-14 bg-[#f7f7f7] border border-[#81dbe1] rounded-lg pl-12 outline-none"
      />
      {icon === "email" && (
        <MdOutlineAccountCircle className="absolute top-3 left-2 text-3xl text-[#ff4c31]" />
      )}
      {icon === "password" && (
        <MdOutlineLockPerson className="absolute top-3 left-2 text-3xl text-[#ff4c31]" />
      )}
    </section>
  );
};

export default InputField;
