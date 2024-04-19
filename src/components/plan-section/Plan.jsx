import React from "react";
import picker from "./data";
const Pick = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-32 max-sm:w-full max-sm:px-3 text-gray-900 ">
        <section className="text-center ">
          <h2 className="text-[24px]  mb-5"> Plan your trip now</h2>
          <h1 className="text-5xl font-[600]  "> Quick & easy car rental</h1>
        </section>

        <section className="lg:flex w-auto mx-20 text-center gap-20 mt-24 mb-44 max-sm:flex-col">
          {picker.map(items => {
            return (
              <section
                key={items.id}
                className="flex flex-col items-center justify-center"
              >
                <img src={items.src} alt={items.name} className="w-[300px]" />
                <h1 className="font-semibold">{items.name}</h1>
                <p className="w-[300px] mt-5 text-[#706f7b]  text-[16px] ">
                  {" "}
                  {items.content}
                </p>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Pick;
