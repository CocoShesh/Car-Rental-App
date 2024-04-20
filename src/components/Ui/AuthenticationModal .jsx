import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AuthenticationModal = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-[#0000004b] text-black">
        <section
          data-aos="zoom-in"
          className="w-[60rem] h-[38rem] max-sm:h-fit  2xl:h-fit 2xl:w-[75rem] border bg-white rounded-2xl p-10  max-sm:px-1 flex gap-10"
        >
          <section className="  bg-login bg-no-repeat h-full  max-sm:h-fit 2xl:h-auto bg-cover w-full max-lg:hidden "></section>
          {children}
        </section>
      </section>
    </>
  );
};

export default AuthenticationModal;
