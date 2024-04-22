import React, { useState } from "react";
import { PiCarProfileBold } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";
import { type, pickUp, dropOf } from "./CarData.js";
import { AiOutlineCalendar } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reserveCarSchema } from "../../Schema/ReserveCarSchema.js";
import ReserveModal from "./ReserveModal.jsx";
function BookingCar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(reserveCarSchema),
    carType: "",
    pickUp: "",
    dropOff: "",
    pickUpDate: "",
    dropOffDate: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };
  const onSubmit = booking => {
    showModal();
    setData(booking);
  };

  return (
    <>
      <section
        className=" lg:px-10 w-full 2xl:w-[1600px]  pt-10 max-sm:pt-0"
        id="booking"
      >
        <section className=" flex flex-col h-fit  max-sm:mt-10  text-gray-900  bg-[#ffffff] mb-5 custom-shadow rounded-lg   w-full   ">
          <h1 className="text-[24px] text-[#000000] font-bold mb-5 px-10 pt-10 max-sm:px-5">
            Book a car
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <section className="lg:flex max-sm:flex-col px-10 max-sm:px-5 font-[600]">
              <section className=" mb-5  sm:mr-2 w-full">
                <div className="flex   items-center gap-3 mb-2 sm:mb-4">
                  <PiCarProfileBold className="text-[27px] ml-2" /> Select Your
                  Car Type<span className="text-orange-500">*</span>
                </div>
                <select
                  className="select w-full  bg-white  border-slate-300 border-2"
                  name="carType"
                  {...register("carType")}
                >
                  <option value="" defaultValue className="text-gray-500 ">
                    Select your car type
                  </option>
                  {type.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors?.carType && (
                  <span className="block text-red-400 text-sm ml-3  text-left  ">
                    {errors?.carType?.message}
                  </span>
                )}
              </section>

              <section className=" mb-5  sm:mr-2 w-full">
                <div className="flex   items-center gap-3 mb-2 sm:mb-4">
                  <HiLocationMarker className="text-[27px] ml-2" /> Pick-up
                  <span className="text-orange-500">*</span>
                </div>
                <select
                  className="select w-full  bg-white border-slate-300 border-2"
                  name="pickUp"
                  {...register("pickUp")}
                >
                  <option value="" defaultValue className="text-gray-500">
                    Select pick up location
                  </option>
                  {pickUp.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors?.pickUp && (
                  <span className="block text-red-400 text-sm text-left  ml-3">
                    {errors?.pickUp?.message}
                  </span>
                )}
              </section>

              <section className=" mb-5 sm:mr-2 w-full">
                <div className="flex   items-center gap-3 mb-2 sm:mb-4">
                  <HiLocationMarker className="text-[27px] ml-2" /> Drop-off
                  <span className="text-orange-500">*</span>
                </div>
                <select
                  className="select w-full  bg-white border-slate-300 border-2"
                  name="dropOff"
                  {...register("dropOff")}
                >
                  <option value="" defaultValue className="text-gray-500">
                    Select drop off location
                  </option>
                  {dropOf.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>{" "}
                {errors?.dropOff && (
                  <span className="block text-red-400 text-sm text-left  ml-3">
                    {errors?.dropOff?.message}
                  </span>
                )}
              </section>
            </section>
            <section className="lg:flex gap-3 font-[600] justify-between max-sm:flex-col  mb-10 px-10 max-sm:px-5 items-center mt-5   text-gray-900 ">
              <section className="w-full  ">
                <div className="flex items-center gap-3 max-sm:mx-2">
                  <AiOutlineCalendar /> Pick-up Date
                  <span className="text-orange-500"> *</span>
                </div>
                <input
                  type="date"
                  {...register("pickUpDate")}
                  defaultValue={"mm / dd / yyyy"}
                  className="w-full  mt-3 h-[50px] bg-white border-slate-300 border-2  text-sm   font-bold text-black rounded-lg px-5"
                />
                {errors?.pickUpDate && (
                  <span className="block text-red-400 text-sm text-left  ml-3">
                    {errors?.pickUpDate?.message}
                  </span>
                )}
              </section>
              <section className="w-full font-[600] max-lg:mt-5">
                <div className="flex items-center gap-3 max-sm:mx-2 ">
                  <AiOutlineCalendar /> Drop off Date
                  <span className="text-orange-500"> *</span>
                </div>
                <input
                  type="date"
                  {...register("dropOffDate")}
                  defaultValue={"mm / dd / yyyy"}
                  className="w-full  mt-3 h-[50px] bg-white border-slate-300 border-2  font-bold text-black rounded-lg text-sm px-5"
                />
                {errors?.dropOffDate && (
                  <span className="block text-red-400 text-sm text-left ml-3">
                    {errors?.dropOffDate?.message}
                  </span>
                )}
              </section>
              <section className="flex w-full mt-9 items-center">
                <button
                  type="submit"
                  className="w-full  h-[50px] bg-orange-500 text-white  font-bold text-[20px] rounded-md shadow-lg  transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:border hover:border-gray-500"
                >
                  Search
                </button>
              </section>
            </section>
          </form>
        </section>
      </section>
      <ReserveModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        data={data}
      />
    </>
  );
}

export default BookingCar;
