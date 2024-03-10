import React from "react";
import profile from "./data.jsx";
const Testimonials = () => {
  return (
    <>
      <section className="h-[850px] bg-[#f8f8f8] pt-28 w-full mb-10 max:sm:w-full max-sm:h-auto">
        <section className="flex flex-col items-center justify-center  text-black ">
          <h2 className="text-[22px]"> Reviewed by People</h2>
          <h1 className="text-[45px]  font-[700] max-sm:text-center">
            Client's Testimonials
          </h1>
          <p className="w-[680px] text-[#706f7b] font-serif text-center mt-3 max-sm:w-auto max-sm:mx-5 max-md:text-center ">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </section>
        <section className="flex gap-5 items-center justify-center  px-5 mt-20 max-sm:w-full  max-sm:flex-col max-sm:mx-0 max-sm:mx-auto ">
          {profile.map(items => {
            return (
              <section
                key={items.id}
                className="w-[350px] h-[400px] bg-white  shadow-xl  flex flex-col justify-between rounded-lg p-8  text-black max-sm:w-object-fit  max-sm:h-auto max-sm:w-auto"
              >
                <blockquote className="text-[24px] font-sans font-semibold">
                  <q> {items.qoute} </q>{" "}
                </blockquote>
                <section className=" flex gap-5 items-center max-sm:mt-10">
                  <img
                    src={items.src}
                    alt={items.name}
                    className="w-[70px] h-[70px] rounded-full"
                  />
                  <section className="flex justify-between w-full ">
                    <section>
                      <p> {items.name}</p>
                      <p className="font-serif f"> {items.status}</p>
                    </section>
                    <section>
                      {" "}
                      <img src={items.image} alt="qoutation" />
                    </section>
                  </section>
                </section>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Testimonials;
