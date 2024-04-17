import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./stle.css";
import { Drawer } from "antd";
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
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="w-full flex items-center 2xl:justify-center justify-between px-10 h-[100px]  ">
        <section className=" w-full 2xl:w-[1440px] flex justify-between">
          <section className="max-xl:flex max-xl:items-center max-xl:justify-between max-xl:w-full">
            <img
              src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png"
              alt=""
              className="w-[150px] h-full  object-contain  "
            />
            <GiHamburgerMenu
              onClick={showDrawer}
              className="max-xl:visible  xl:hidden text-3xl  text-black cursor-pointer"
            />
          </section>
          <ul className=" flex gap-5 max-xl:hidden">
            {list.map(item => {
              return (
                <li
                  key={item.id}
                  className=" hover:text-[#ff4d30] text-black transition duration-500 ease-in-out cursor-pointer  font-seif text-lg  leading-10 font-bold"
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          <section className="flex items-center gap-5 max-xl:hidden">
            <button className="font-bold w-[150px]  h-10  text-xl  rounded font-serif hover:text-[#ff4d30] transition duration-500 ease-in-out ">
              Sign In
            </button>
            <button className=" rounded shadow-xl w-[150px] h-[50px] bg-[#ff4d30] text-white font-bold text-lg font-serif">
              Register
            </button>
          </section>
        </section>
      </header>
      <Drawer placement="left" onClose={onClose} open={open} width={300}>
        <section className="px-10 tracking-wides mt-5">
          <ul>
            {list.map(item => (
              <li
                key={item.id}
                className=" hover:text-[#ff4d30] transition duration-500 ease-in-out cursor-pointer text-white font-seif text-xl  leading-10 font-bold  "
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className=" flex flex-col items-center  mt-[13rem]  ">
          <button className="font-bold w-[150px] h-[50px] bg-white text-black  text-xl mb-5 rounded font-serif shadow-xl ">
            {" "}
            Sign In
          </button>
          <button className=" rounded shadow-xl w-[150px] h-[50px] bg-[#ff4d30] text-white font-bold text-lg font-serif">
            Register
          </button>
        </section>
      </Drawer>
    </>
  );
}

export default Header;
