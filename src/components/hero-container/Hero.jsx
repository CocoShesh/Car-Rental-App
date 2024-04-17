import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";

function Hero() {
  return (
    <>
      <div className="hero h-fit mb-20 mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-[100rem] ">
          <img
            src="	https://car-rental-ten.vercel.app/static/media/main-car.9b30faa59387879fa060.png"
            className="max-w-xl  max-sm:max-w-xs rounded-lg 2xl:max-w-3xl "
          />
          <div className="text-black pr-4 ml-10">
            <h2 className="font-bold text-2xl"> Plan your trip now</h2>
            <h1 className="font-bold text-6xl 2xl:text-8xl mb-7 mt-2 max-md:text-[52px] ">
              Save <span className="text-orange-500">big </span> with our car
              rental
            </h1>
            <p className="mb-10 text-[#706f7b] text-[16px] font-serif ">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <section className="flex gap-5   max-sm:items-center max-sm:justify-center max-sm:w-full">
              <button className="w-[200px] max-sm:w-full  h-[70px] rounded bg-[#ff4d30] text-white font-bold items-center justify-center gap-2 flex shadow-xl  ">
                Book Ride <AiOutlineCheckCircle className="mt-1 text-xl" />
              </button>
              <button className="w-[200px] max-sm:w-full  h-[70px]  text-[16px] rounded bg-black text-white font-bold items-center justify-center gap-2 flex shadow-xl hover:bg-white hover:text-black border-2 border-black transition duration-500 ease-in-out cursor-pointer">
                Learn More <FaGreaterThan className="mt-1" />
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
