import React from "react";
import HeaderPage from "../header/HeaderPage";
import employees from "./data.js";
import { Link } from "react-router-dom";
const Team = () => {
  return (
    <>
      <HeaderPage>
        <section className="absolute  mx-10 top-[140px]   2xl:w-[1500px] w-full px-8  ">
          <h1 className="text-[42px] ">Our Team</h1>
          <p>
            <Link to="/">
              <span className="hover:text-orange-500 ease-in-out transition duration-500 cursor-pointer">
                Home
              </span>
            </Link>
            <span> / </span> Our Team
          </p>
        </section>
      </HeaderPage>
      <section className="flex items-center justify-center">
        <section className="grid lg:grid-cols-3  lg:px-20 gap-10   2xl:w-[1600px]  w-full bg-white pt-32 sm:grid-cols-1 md:grid-cols-2 place-content-center sm:px-3">
          {employees.map(employee => {
            return (
              <section
                key={employee.id}
                className="shadow-lg flex flex-col items-center justify-center w-auto rounded-t-lg"
              >
                <div className="">
                  <img
                    src={employee.src}
                    alt={employee.Name}
                    className=" object-cover rounded-full"
                  />
                </div>
                <div className="text-center pt-5 py-10 text-black bg-white rounded-b-xl ">
                  <h1 className="text-[25px]"> {employee.Name}</h1>
                  <p className="text-[16px] text-[#777777] font-[Poppins]">
                    {" "}
                    {employee.Position}
                  </p>
                </div>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default Team;
