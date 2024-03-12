import React from "react";
import HeaderPage from "../header/HeaderPage";
import { cars, star } from "./Data";

const Vehicle = () => {
  return (
    <>
      <section className="relative ">
        <HeaderPage />
      </section>
      <section className="absolute  mx-10 top-[180px] z-10 ">
        <h1 className="text-[42px] "> Vehicle models</h1>
        <p>
          <a href="/">
            <span className="hover:text-orange-500 ease-in-out transition duration-500 cursor-pointer">
              Home
            </span>
          </a>
          <span> / </span> Vechicle Models
        </p>
      </section>
      <section className="bg-white pt-3 ">
        <section className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:mt-20 3xl:grid-cols-5 xl:grid-cols-3  gap-5 max-sm:mx-5 2xl:grid-cols-4  mx-10   ">
          {cars.map(item => {
            return (
              <section key={item.id} className="h-fit  pb-8  rounded shadow-lg">
                <img
                  src={item.src}
                  alt={item.Name}
                  className="h-[350px] w-full mb-5  rounded-t-lg"
                />

                <div className="flex justify-between text-black px-5 ">
                  <h1 className="text-[24px]"> {item.Name}</h1>
                  <h1 className="text-[28px] "> {item.rent_price}</h1>
                </div>
                <div className="flex items-center px-5 ">
                  {star.stars.map(starIcon => starIcon)}
                  <p className=" ml-auto text-[18px] font-sans">per day</p>
                </div>

                <div className="flex justify-between px-5 pt-10 text-[#777777]">
                  <div className="flex items-center gap-5">
                    <span>{item.icon} </span>{" "}
                    <p className="text-xl"> {item.model}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-5">
                      <p className="text-xl"> {item.rating}</p>{" "}
                      <span>{item.icon} </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between px-5 pt-10 text-[#777777]">
                  <div className="flex items-center gap-5">
                    <span>{item.manual} </span>{" "}
                    <p className="text-xl"> {item.type}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-5">
                      <p className="text-xl"> {item.gas}</p>{" "}
                      <span>{item.gas_icon} </span>
                    </div>
                  </div>
                </div>
                <button className="w-[300px] mx-5  mt-10 text-white  h-[70px] font-extrabold text-[20px] font-[Poppins] shadow-xl cursor-pointer rounded-md bg-[#ff4d30] hover:scale-95 hover:opacity-90">
                  {" "}
                  Book Ride
                </button>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Vehicle;
