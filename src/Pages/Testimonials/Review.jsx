import React from "react";
import HeaderPage from "../header/HeaderPage";
import Testimonials from "../../components/testimonials/Testimonials";
import { Link } from "react-router-dom";
const Review = () => {
  return (
    <>
      <HeaderPage>
        <section className="absolute  mx-10 top-[140px] 2xl:w-[1500px]  w-full px-8  select-none">
          <h1 className="text-[42px] ">Testimonials</h1>
          <p>
            <Link to="/">
              <span className="hover:text-orange-500 ease-in-out transition duration-500 cursor-pointer">
                Home
              </span>
            </Link>
            <span> / </span> Testimonials
          </p>
        </section>
      </HeaderPage>
      <Testimonials />
    </>
  );
};

export default Review;
