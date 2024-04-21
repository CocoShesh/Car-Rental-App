import React from "react";

const InputField = ({ label, name, placeholder, register, errors }) => (
  <section>
    <label className="cursor-pointer" htmlFor={name}>
      {label} *
    </label>
    <br />
    <input
      type="text"
      id={name}
      placeholder={placeholder}
      className="w-full h-[60px] max-sm:placeholder:text-sm bg-[#dbdbdb] pl-5 rounded-md"
      {...register(name)}
    />
    {errors[name] && (
      <span className="block text-red-400 text-sm   ">
        {errors[name]?.message}
      </span>
    )}
  </section>
);

export default InputField;
