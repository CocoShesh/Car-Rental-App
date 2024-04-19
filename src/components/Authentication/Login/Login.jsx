import React from "react";
import { MdOutlineAccountCircle, MdOutlineLockPerson } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

const icons = [
  "/logos/facebook.png",
  "/logos/instagram.png",
  "/logos/gmail.png",
  "/logos/tik-tok.png",
];
const Login = ({ handleOpen }) => {
  return (
    <>
      <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-[#0000004b] text-black">
        <section className="w-[60rem] h-[38rem]  border bg-white rounded-2xl p-10 max-sm:p-0 max-sm:pt-5 flex gap-10">
          <section className="  bg-login bg-no-repeat h-full  bg-cover w-full max-lg:hidden "></section>
          <section className="   w-full px-5 flex flex-col gap-5 ">
            <section className="flex justify-between">
              <img
                src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png"
                alt=""
                className="w-[100px]"
              />
              <IoIosClose
                onClick={handleOpen}
                className="text-2xl cursor-pointer hover:text-[#ff4c30]"
              />
            </section>
            <section className="mt-5">
              <h1 className=" text-2xl font-bold "> Welcome Back!</h1>
              <h2 className="text-[#686464]">
                Please enter login details below
              </h2>
            </section>
            <section className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-14 bg-[#f7f7f7] border border-[#81dbe1] rounded-lg pl-12 outline-none"
              />
              <MdOutlineAccountCircle className="absolute top-3 left-2 text-3xl text-[#ff4c31]" />
            </section>
            <section className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full h-14 bg-[#f7f7f7] border border-[#81dbe1]  rounded-lg  pl-12 outline-none "
              />
              <MdOutlineLockPerson className="absolute top-3 left-2 text-3xl text-[#ff4c31]" />
            </section>
            <span className="text-sm text-[#686464a6] cursor-pointer ml-1 font-medium hover:text-[#ff4c31]">
              Forgot Password?
            </span>
            <button className="w-full h-fit py-3 bg-[#ff4e33] text-white text-xl font-medium rounded-lg hover:bg-[#ff4e33d3]">
              Login
            </button>
            <span className="text-center text-sm mt-[-5px] text-[#686464a6]">
              No account yet?
              <span className="text-[#007bfc] underline cursor-pointer">
                Register
              </span>
            </span>

            <span className="text-center text-sm text-[#686464a6]">
              Or Login With
            </span>
            <section className="flex gap-10 items-center justify-center">
              {icons.map((icons, index) => {
                return (
                  <section
                    key={index}
                    className=" p-2 rounded-xl h-fit w-fit border border-[#81dbe12f] shadow cursor-pointer"
                  >
                    <img src={icons} alt="facebook" className="w-8 h-8" />
                  </section>
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Login;
