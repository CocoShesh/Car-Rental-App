import React, { useState } from "react";
import HeaderPage from "../header/HeaderPage";
import { cars, star } from "./Data";
import { Link } from "react-router-dom";
import ViewImage from "./ViewImage/ViewImage.jsx";
const Vehicle = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openViewImage, setOpenViewImage] = useState(false);
  const scrollToTop = () => {
    Navigate("/Contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectedImage = item => {
    setSelectedImage(item);
    setOpenViewImage(true);
  };

  return (
    <>
      <HeaderPage>
        <section className="absolute   top-[140px] 2xl:w-[1500px] w-full px-8 ">
          <h1 className="text-[42px] "> Vehicle models</h1>
          <p>
            <Link to="/">
              <span className="hover:text-orange-500 ease-in-out transition duration-500 cursor-pointer">
                Home
              </span>
            </Link>
            <span> / </span> Vechicle Models
          </p>
        </section>
      </HeaderPage>

      <section className="bg-white pt-3  px-5 my-10 flex items-center justify-center ">
        <section className="grid  sm:grid-cols-1 md:grid-cols-2   lg:grid-cols-3 2xl:mt-20 3xl:grid-cols-3 xl:grid-cols-3  gap-5   2xl:grid-cols-3  2xl:w-[1500px]  max-sm:w-full   ">
          {cars.map(item => {
            return (
              <section
                key={item.id}
                className="h-fit  py-8  px-5     rounded shadow shadow-gray-500"
              >
                <section className="relative">
                  <img
                    src={item.src}
                    alt={item.Name}
                    className="h-[300px] w-full mb-5  rounded-lg object-cover"
                    loading="lazy | eager"
                  />
                  <div
                    onClick={() => handleSelectedImage(item.src)}
                    className="w-fit h-fit px-3 flex gap-3  items-center py-2 absolute bottom-2 right-2 bg-black text-white rounded-sm cursor-pointer"
                  >
                    <img src="/icon-view-image.svg" alt="" /> View Image
                  </div>
                </section>
                <div className="flex justify-between text-black px-5 ">
                  <h1 className="text-[24px]"> {item.Name}</h1>
                  <h1 className="text-[28px] "> {item.rent_price}</h1>
                </div>
                <div className="flex items-center px-5 ">
                  {star.stars.map(starIcon => starIcon)}
                  <p className=" ml-auto text-[18px] font-sans">per day</p>
                </div>

                <div className="flex justify-between px-5 pt-10 text-[#777777] max-sm:w-full">
                  <div className="flex items-center gap-5">
                    <span>{item.icon} </span>{" "}
                    <p className="text-xl"> {item.model}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-5">
                      <p className="text-xl"> {item.rating}</p>{" "}
                      <span>{item.icon} </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between px-5 pt-10 text-[#777777]">
                  <div className="flex items-center gap-5">
                    <span>{item.manual} </span>{" "}
                    <p className="text-xl"> {item.type}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-5">
                      <p className="text-xl"> {item.gas}</p>{" "}
                      <span>{item.gas_icon} </span>
                    </div>
                  </div>
                </div>
                <section className="flex items-center justify-center">
                  <button
                    onClick={scrollToTop}
                    className="w-[300px] mx-5  max-md:w-full mt-10 text-white  h-[70px] font-extrabold text-[20px] font-[Poppins] shadow-xl cursor-pointer rounded-md bg-[#ff4d30] hover:scale-95 hover:opacity-90"
                  >
                    Book Ride
                  </button>
                </section>
              </section>
            );
          })}
        </section>
      </section>
      {openViewImage && (
        <ViewImage
          selectedImage={selectedImage}
          setOpenViewImage={setOpenViewImage}
        />
      )}
    </>
  );
};

export default Vehicle;
