import React from "react";
import Header from "../../components/header/Header";
const HeaderPage = ({ children }) => {
  return (
    <>
      <section className=" relative  h-[250px] w-full  bg-header-overlay bg-cover">
        <section className="absolute  z-10 top-0 left-0 w-full h-[250px]   bg-[#f3f3f3d8]"></section>
        <section className=" absolute z-20 top-0 w-full flex items-center justify-center ">
          <Header />
          {children}
        </section>
      </section>
    </>
  );
};

export default HeaderPage;
