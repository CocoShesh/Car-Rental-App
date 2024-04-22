import React, { useState, useEffect } from "react";
import CompleteReservation from "./CompleteReservation";
import { useModal } from "../../../context/HandleModalContext";

const ReviewDetails = ({
  handleModal,
  reservationDetails,
  userInformation,
}) => {
  const [showFullText, setShowFullText] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, [isCompleted]);

  const handleCompleted = () => {
    setIsCompleted(true);
  };

  return (
    <>
      {/* {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-[#0000004b]">
          <div className="loader"></div>
        </div>
      )} */}
      {/* {!isLoading && ( */}
      <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10   bg-[#0000004b] text-black">
        <section
          data-aos="zoom-in"
          className="w-[35rem] lg:h-[38rem]  overflow-auto 2xl:h-fit max-sm:h-[37rem] max-sm:overflow-auto select-none   bg-white border text-black rounded-2xl max-sm:rounded-lg p-10  max-sm:px-5 max-sm:mx-5  flex flex-col "
        >
          <div className=" text-xl font-[500] ">
            <h1 className="text-[#b32510]  text-2xl ">Review Your Details </h1>
            <section className="mt-5 pl-5 w-full ">
              {reservationDetails?.map((item, index) => {
                return (
                  <section className="flex items-center max-sm:flex-col max-sm:gap-2   w-full">
                    <section className="w-full">
                      <h1 key={index} className="text-[20px] ">
                        {item?.label}
                      </h1>
                    </section>
                    <section className="w-full max-sm:mb-3 ">
                      <p className="flex text-[18px] justify-start  items-start gap-2  text-[#696464] pl-5 max-sm:pl-0">
                        {item.value}
                      </p>
                    </section>
                  </section>
                );
              })}
            </section>
          </div>
          <div className=" text-xl  font-[500] mb-10 pl-5  ">
            {Object.entries(userInformation).map(([key, value], index) => {
              return (
                <section className="flex items-center   max-sm:flex-col max-sm:gap-2 ">
                  <section className="w-full  ">
                    <h1 key={index} className="text-[20px]  capitalize">
                      {key}:
                    </h1>
                  </section>
                  <section
                    className={`w-full max-sm:mb-3    ${
                      !showFullText ? "overflow-hidden text-ellipsis" : ""
                    }`}
                  >
                    <p
                      className="flex text-[18px] justify-start items-start gap-2 text-[#696464] pl-5 max-sm:pl-0 cursor-pointer "
                      onClick={() => setShowFullText(prev => !prev)}
                    >
                      {value}
                    </p>
                  </section>
                </section>
              );
            })}
          </div>
          <section className=" flex-col flex gap-5">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 text-xl px-4 rounded"
              onClick={handleModal}
            >
              Back
            </button>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 text-xl px-4 rounded"
              onClick={handleCompleted}
            >
              Complete
            </button>
          </section>{" "}
        </section>
      </section>
      {/* )} */}
      {isCompleted && <CompleteReservation handleCompleted={handleCompleted} />}
    </>
  );
};

export default ReviewDetails;
