import React, { useState } from "react";
import { PiCarProfileBold } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";
import { type, pickUp, dropOf } from "./CarData.jsx";
import Date from "./Date.jsx";

import "/public/font.css";

function BookingCar() {
  const [selectedPickUp, setSelectedPickUp] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedDropOff, setSelectedDropOff] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <section className="max-2xl:px-10 w-full 2xl:w-[1500px]" id="booking">
        <section className=" flex flex-col h-fit  max-sm:mt-10  text-gray-900  bg-[#ffffff] mb-5 custom-shadow rounded-lg   w-full   ">
          <h1 className="text-[24px] text-[#000000] font-bold mb-5 px-10 pt-10 max-sm:px-5">
            Book a car
          </h1>

          <form onSubmit={handleSubmit}>
            <section className="lg:flex max-sm:flex-col px-10 max-sm:px-5">
              <section className=" mb-5  sm:mr-2 w-full">
                <div className="flex   items-center gap-3 mb-2 sm:mb-4">
                  <PiCarProfileBold className="text-[27px] ml-2" /> Select Your
                  Car Type<span className="text-orange-500">*</span>
                </div>
                <select
                  className="select w-full  bg-white border-slate-300 border-2"
                  name="carType"
                  value={selectedCar}
                  required
                  onChange={e => setSelectedCar(e.target.value)}
                >
                  <option value="" defaultValue>
                    Select your car type
                  </option>
                  {type.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </section>

              <section className=" mb-5  sm:mr-2 w-full">
                <div className="flex   items-center gap-3 mb-2 sm:mb-4">
                  <HiLocationMarker className="text-[27px] ml-2" /> Pick-up
                  <span className="text-orange-500">*</span>
                </div>
                <select
                  className="select w-full  bg-white border-slate-300 border-2"
                  name="carType"
                  value={selectedPickUp}
                  onChange={e => setSelectedPickUp(e.target.value)}
                >
                  <option value="" defaultValue>
                    Select pick up location
                  </option>
                  {pickUp.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </section>

              <section className=" mb-5 sm:mr-2 w-full">
                <div className="flex   items-center gap-3 mb-2 sm:mb-4">
                  <HiLocationMarker className="text-[27px] ml-2" /> Drop-off
                  <span className="text-orange-500">*</span>
                </div>
                <select
                  className="select w-full  bg-white border-slate-300 border-2"
                  name="carType"
                  value={selectedDropOff}
                  onChange={e => setSelectedDropOff(e.target.value)}
                >
                  <option value="" defaultValue>
                    Select drop off location
                  </option>
                  {dropOf.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </section>
            </section>
            <Date
              selectedPickUp={selectedPickUp}
              selectedCar={selectedCar}
              selectedDropOff={selectedDropOff}
            />
          </form>
        </section>
      </section>
    </>
  );
}

export default BookingCar;
