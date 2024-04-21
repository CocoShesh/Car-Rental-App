import React from "react";
import { PiWarningCircleFill } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";
import { Cars } from "../CarData";
import PersonalInformation from "./PersonalInformation";
const ReserveInformation = ({ data }) => {
  const { carType, pickUp, dropOff, pickUpDate, dropOffDate } = data;
  const selectedCar = Cars.find(car => car?.carName === carType);

  const reservationDetails = [
    { label: "Pick-Up Location:", value: pickUp },
    { label: "Drop Off Location:", value: dropOff },
    { label: "Pick-Up Date:", value: pickUpDate },
    { label: "Drop-Off Date:", value: dropOffDate },
  ];
  return (
    <div>
      <section className="p-5 w-auto h-auto bg-[#ffeae6] mx-1  ">
        <div className="flex gap-5 mb-5">
          <PiWarningCircleFill className="fill-[#ff4d30] text-3xl" />
          <p className="text-[#ff4d30] text-[19px] font-bold">
            Upon completing this reservation enquiry, you will receive:
          </p>
        </div>
        <p className="text-[17px] text-[#777777] ">
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </section>
      <section className="flex max-sm:flex-col justify-between border-b-2 ">
        <section className="pl-3 pt-3 ">
          {reservationDetails?.map((item, index) => {
            return (
              <>
                <h1 className="text-[20px] text-[#ff4d30]">{item?.label}</h1>
                <p className="flex text-[18px] items-center gap-2 pt-2 font-bold">
                  <HiLocationMarker className="text-[25px]" /> {item.value}
                </p>
              </>
            );
          })}
        </section>
        <section className="mt-4 max-sm:mt-10 max-sm:mx-5 ">
          <section className="flex gap-3  font-bold ">
            <h1 className="text-[18px]  text-black">Car -</h1>
            <p className=" text-[18px] text-[#ff4d30]  font-bold mr-32 max-sm:mr-0">
              {selectedCar?.carName}
            </p>
          </section>
          <img
            src={selectedCar?.src}
            alt={data?.carType}
            className="w-[400px] h-[300px] mt-20  max-sm:mt-0 mr-10 max-sm:object-contain"
          />
        </section>
      </section>
      <PersonalInformation reservationDetails={reservationDetails} />
    </div>
  );
};

export default ReserveInformation;
