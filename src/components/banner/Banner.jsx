import React from "react";

const Banner = () => {
  return (
    <>
      <section className="bg-[#2d2d2d] relative z-10 w-full h-[250px]  py-10 mb-20 flex flex-col  select-none items-center text-center justify-center max-sm:w-full max-sm:pl-5 max-sm:h-auto max-sm:text-center  ">
        <h1 className="text-white text-[48px] mb-2 max-sm:text-[34px] ">
          Save big with our cheap car rental!
        </h1>
        <p className="text-white text-[24px] max-sm:text-lg">
          Top Airports. Local Suppliers.{" "}
          <span className="text-orange-500">24/7 </span>Support.
        </p>
      </section>
    </>
  );
};

export default Banner;
