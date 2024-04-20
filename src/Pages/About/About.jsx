import React from "react";
import Plan from "../../components/plan-section/Plan";
import HeaderPage from "../header/HeaderPage";
const About = () => {
  return (
    <>
      <HeaderPage>
        <section className="absolute  mx-10 top-[140px]  2xl:w-[1500px] w-full px-8">
          <h1 className="text-[42px] "> About</h1>
          <p>
            <a href="/">
              <span className="hover:text-orange-500 ease-in-out transition duration-500 cursor-pointer">
                Home
              </span>
            </a>
            <span> / </span> About
          </p>
        </section>
      </HeaderPage>

      {/* <section className="lg:px-10 justify-center items-center flex  w-full  gap-10 bg-white  h-fit pt-44  max-md:flex-col max-md:w-full  max-md:items-center max-md:justify-center">
        <img
          src="	https://car-rental-ten.vercel.app/static/media/about-main.ed0137841dc67d61ec95.jpg"
          alt=""
          className="w-[400px] h-auto object-cover "
        />
        <section className="w-[500px] h-auto text-black mb-5 max-md:w-auto max-md:mx-5 ">
          <h2 className="text-[22px]">About Company</h2>
          <h1 className="text-[42px] leading-[3.5rem]">
            You start the engine and your adventure begins
          </h1>
          <p className="text-[#706f7b] font-serif mt-5">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <section className="flex gap-10 mt-10 ">
            <section>
              <img src="/public/images/broom.png" alt="" />
              <section className="flex gap-4 mt-5">
                <h1 className="text-[42px]"> 20</h1>
                <span className="text-[#706f7b] font-serif">Car Types</span>
              </section>
            </section>
            <section>
              <img src="/public/images/tower.png" alt="" />
              <section className="flex gap-4 mt-5">
                <h1 className="text-[42px]">85</h1>
                <span className="text-[#706f7b] font-serif">
                  Rental Outlets
                </span>
              </section>
            </section>
            <section>
              <img src="/public/images/parking.png" alt="" />
              <section className="flex gap-4 mt-5">
                <h1 className="text-[42px]">75</h1>
                <p className="text-[#706f7b] font-serif">Repair Shop</p>
              </section>
            </section>
          </section>
        </section>
      </section> */}
      <section className="pt-44">
        <Plan />
      </section>
    </>
  );
};

export default About;
