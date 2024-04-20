import React from "react";

const AuthenticationModal = ({ children }) => {
  return (
    <>
      <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-[#0000004b] text-black">
        <section className="w-[60rem] h-[38rem]  border bg-white rounded-2xl p-10 flex gap-10">
          <section className="  bg-login bg-no-repeat h-full  bg-cover w-full max-lg:hidden "></section>
          {children}
        </section>
      </section>
    </>
  );
};

export default AuthenticationModal;
