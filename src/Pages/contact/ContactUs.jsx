import React from "react";
import HeaderPage from "../header/HeaderPage";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbLocation } from "react-icons/tb";
import Location from "../location/Location";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <>
      <HeaderPage>
        <section className="absolute mx-7  top-[140px] 2xl:w-[1500px] w-full px-8">
          <h1 className="text-[42px]">Contact</h1>
          <p>
            <Link to="/">
              <span className="hover:text-orange-500 ease-in-out transition duration-500 cursor-pointer">
                Home
              </span>
            </Link>
            <span> / </span> Contact
          </p>
        </section>
      </HeaderPage>
      <section
        className="bg-white flex gap-[150px] py-32 px-20 items-center justify-center select-none  text-black  max-lg:flex-col max-md:w-full max-md:px-5"
        style={{
          backgroundImage:
            "url(https://car-rental-ten.vercel.app/static/media/bg-contact.c178c6db0f988d408d94.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "30%",
        }}
      >
        <section className="w-[450px] max-md:w-auto max-md:mx-2 ">
          <section>
            <h1 className="text-[42px] mb-5">Need additional information?</h1>
            <p className="text-[#706f7b] text-[16px]  mb-10 text-justify font-medium">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
          </section>
          <div className="flex items-center gap-5 mb-3  max-md:w-auto">
            <span>
              <BiPhoneCall className="text-[25px]" />
            </span>
            <p> (123) 456-7869</p>
          </div>
          <div className="flex items-center gap-5  mb-3 ">
            <span>
              <AiOutlineMail className="text-[25px]" />
            </span>
            <p> CarRentalInfo@gmail.com</p>
          </div>

          <div className="flex items-center gap-5 mb-3 ">
            <span>
              <TbLocation className="text-[25px]" />
            </span>
            <p> Taguig, City</p>
          </div>
        </section>
        <section className=" w-[600px]  max-md:w-auto">
          <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="Name">Full Name *</label> <br />
            <input
              type="text"
              id="Name"
              required
              placeholder="E.g: Jhon Doe"
              className="w-full h-[50px] bg-[#f2f2f2] mt-3 mb-5 pl-5"
            />
            <br />
            <label htmlFor="Email">Email *</label> <br />
            <input
              type="email"
              id="Email"
              required
              placeholder="E.g: example@gmail.com"
              className="w-full h-[50px] bg-[#f2f2f2] mt-3 mb-5 pl-5"
            />{" "}
            <br />
            <label htmlFor="About">Tell us about it *</label> <br />
            <textarea
              placeholder="Write Here..."
              id="About"
              cols="40"
              rows="10"
              required
              className="w-full h-[200px] bg-[#f2f2f2] mt-3 mb-5 p-5"
            ></textarea>
            <button
              type="submit"
              className=" flex items-center justify-center gap-5 text-[20px rounded-lg shadow-xl bg-[#ff4d30] w-full h-[70px] text-white  transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:border hover:border-gray-500 "
            >
              <HiOutlineMailOpen className="text-[25px]" /> Send Message
            </button>{" "}
          </form>
        </section>
      </section>
      <Location />
    </>
  );
};

export default ContactUs;
