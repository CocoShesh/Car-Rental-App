import React from "react";
import { IoIosClose } from "react-icons/io";
import AuthenticationModal from "../../Ui/AuthenticationModal ";
import SocialIcons from "../../Ui/SocialIcons";
import InputField from "../../Ui/InputField";
import { useModal } from "../../../context/HandleModalContext";

const Login = () => {
  const { handleOpenRegister, handleOpenLogin } = useModal();
  return (
    <>
      <AuthenticationModal>
        <section className="   w-full px-5 flex flex-col gap-5 ">
          <section className="flex justify-between">
            <img
              src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png"
              alt=""
              className="w-[100px]"
            />
            <IoIosClose
              onClick={handleOpenLogin}
              className="text-2xl cursor-pointer hover:text-[#ff4c30]"
            />
          </section>
          <section className="mt-5">
            <h1 className=" text-2xl font-bold "> Welcome Back!</h1>
            <h2 className="text-[#686464]">Please enter login details below</h2>
          </section>
          <InputField type="email" placeholder="Email" icon="email" />

          <InputField type="password" placeholder="Password" icon="password" />

          <span className="text-sm text-[#686464a6] cursor-pointer ml-1 font-medium hover:text-[#ff4c31]">
            Forgot Password?
          </span>
          <button className="w-full h-fit py-3 bg-[#ff4e33] text-white text-xl font-medium rounded-lg  transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:border hover:border-gray-500 ">
            Login
          </button>
          <span className="text-center text-sm mt-[-5px] text-[#686464a6]">
            No account yet?{" "}
            <span
              onClick={() => {
                handleOpenRegister();
                handleOpenLogin(false);
              }}
              className="text-[#007bfc] underline cursor-pointer"
            >
              Register
            </span>
          </span>

          <span className="text-center text-sm text-[#686464a6]">
            Or Login With
          </span>
          <SocialIcons />
        </section>
      </AuthenticationModal>
    </>
  );
};

export default Login;
