import React from "react";
import { IoIosClose } from "react-icons/io";
import AuthenticationModal from "../../Ui/AuthenticationModal ";
import InputField from "../../Ui/InputField";
import SocialIcons from "../../Ui/SocialIcons";
const Register = ({ handleOpenRegister, handleOpenLogin }) => {
  return (
    <>
      <AuthenticationModal>
        <section className="w-full px-5 flex flex-col gap-5 overflow-scroll">
          <section className="flex justify-between">
            <img
              src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png"
              alt=""
              className="w-[100px]"
            />
            <IoIosClose
              onClick={handleOpenRegister}
              className="text-2xl cursor-pointer hover:text-[#ff4c30]"
            />
          </section>
          <section className="mt-5">
            <h1 className="text-2xl font-bold">Register</h1>
            <h2 className="text-[#686464]">
              Please enter Register details below
            </h2>
          </section>
          <InputField type="text" placeholder="FullName" icon="email" />
          <InputField type="email" placeholder="Email" icon="email" />
          <InputField type="password" placeholder="Password" icon="password" />
          <InputField
            type="password"
            placeholder="Confirm Password"
            icon="password"
          />
          <button className="w-full h-fit py-3 bg-[#ff4e33] text-white text-xl font-medium rounded-lg hover:bg-[#ff4e33d3]">
            Register
          </button>
          <span className="text-center text-sm mt-[-5px] text-[#686464a6]">
            Already have an account?{" "}
            <span
              className="text-[#007bfc] underline cursor-pointer"
              onClick={() => {
                handleOpenLogin();
                handleOpenRegister(false);
              }}
            >
              Login
            </span>
          </span>
          <span className="text-center text-sm text-[#686464a6]">
            Or Register With
          </span>
          <SocialIcons />
        </section>
      </AuthenticationModal>
    </>
  );
};

export default Register;
