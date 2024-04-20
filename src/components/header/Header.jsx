import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "antd";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import { useModal } from "../../context/HandleModalContext";
const list = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/About",
  },
  {
    id: 3,
    name: "Vehicle Models",
    path: "/Vehicle-Models",
  },
  {
    id: 4,
    name: "Testimonials",
    path: "/Testimonials",
  },
  {
    id: 5,
    name: "Our Team",
    path: "/Our-Team",
  },
  {
    id: 6,
    name: "Contact",
    path: "/Contact",
  },
];

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { isOpenRegister, handleOpenRegister, isOpenLogin, handleOpenLogin } =
    useModal();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="w-full flex items-center 2xl:justify-center justify-between lg:px-10  max-lg:px-5  h-[100px]  ">
        <section className=" w-full 2xl:w-[1500px] flex justify-between items-centern">
          <section className="max-xl:flex max-xl:items-center max-xl:justify-between max-xl:w-full">
            <Link to="/">
              <img
                src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png"
                alt=""
                className="w-[150px] h-full  object-contain  "
              />{" "}
            </Link>
            <GiHamburgerMenu
              onClick={showDrawer}
              className="max-xl:visible  xl:hidden text-3xl  text-black cursor-pointer"
            />
          </section>
          <ul className=" flex items-center gap-5 max-xl:hidden">
            {list.map(item => {
              return (
                <li
                  key={item.id}
                  className={` ${
                    location.pathname === item.path
                      ? "text-[#ff4d30]"
                      : "text-black"
                  } hover:text-[#ff4d30]  transition duration-500 ease-in-out cursor-pointer   text-lg  leading-10 font-semibold`}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          <section className="flex items-center gap-5 max-xl:hidden">
            <button
              onClick={handleOpenLogin}
              className="font-semibold w-[150px]  h-10  text-black text-xl  rounded  hover:text-[#ff4d30] transition duration-500 ease-in-out "
            >
              Sign In
            </button>
            <button
              onClick={handleOpenRegister}
              className=" rounded shadow-xl w-[150px] h-[50px] bg-[#ff4d30] text-white font-semibold text-lg "
            >
              Register
            </button>
          </section>
        </section>
      </header>
      <Drawer placement="left" onClose={onClose} open={open} width={300}>
        <section className=" flex flex-col justify-between h-full pb-10">
          <section className="px-10 tracking-wides mt-5">
            <ul>
              {list.map(item => (
                <li
                  key={item.id}
                  className={` ${
                    location.pathname === item.path
                      ? "text-[#ff4d30]"
                      : "text-white"
                  } hover:text-[#ff4d30] transition duration-500 ease-in-out cursor-pointer   text-xl  leading-10 font-semibold  `}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section className=" flex flex-col items-center  mt-[13rem]  ">
            <button
              onClick={() => {
                handleOpenLogin();
                onClose();
              }}
              className="font-semibold w-[150px] h-[50px] bg-white text-black  text-xl mb-5 rounded  shadow-xl "
            >
              {" "}
              Sign In
            </button>
            <button
              onClick={() => {
                handleOpenRegister();
                onClose();
              }}
              className=" rounded shadow-xl w-[150px] h-[50px] bg-[#ff4d30] text-white font-semibold text-lg "
            >
              Register
            </button>
          </section>
        </section>
      </Drawer>

      {isOpenLogin && <Login />}
      {isOpenRegister && <Register />}
      {}
    </>
  );
}

export default Header;
