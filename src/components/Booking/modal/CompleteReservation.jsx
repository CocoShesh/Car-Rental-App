import React from "react";

const CompleteReservation = ({
  handleModal,
  reservationDetails,
  userInformation,
}) => {
  console.log("details", userInformation);
  return (
    <>
      <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10   bg-[#0000004b] text-black">
        <section
          data-aos="zoom-in"
          className="w-[35rem] lg:h-[38rem]  2xl:h-fit max-sm:h-[37rem] max-sm:overflow-auto   bg-white border text-black rounded-2xl max-sm:rounded-lg p-10  max-sm:px-5 max-sm:mx-5  flex flex-col "
        >
          <div className=" text-xl font-[500] ">
            <h1 className="text-[#b32510]  text-2xl ">Review Your Details </h1>
            <section className="mt-5 pl-5">
              {reservationDetails?.map((item, index) => {
                return (
                  <section className="flex items-center max-sm:flex-col max-sm:gap-2 ">
                    <section className="w-full">
                      <h1 key={index} className="text-[20px] ">
                        {item?.label}
                      </h1>
                    </section>
                    <section className="w-full max-sm:mb-3">
                      <p className="flex text-[18px] justify-start  items-start gap-2  text-[#696464] pl-5 max-sm:pl-0">
                        {item.value}
                      </p>
                    </section>
                  </section>
                );
              })}
            </section>
          </div>
          <div className=" text-xl  font-[500] mb-10 pl-5">
            {Object.entries(userInformation).map(([key, value], index) => {
              return (
                <section className="flex items-center   max-sm:flex-col max-sm:gap-2">
                  <section className="w-full  ">
                    <h1 key={index} className="text-[20px]  capitalize">
                      {key}:
                    </h1>
                  </section>
                  <section className="w-full max-sm:mb-3 ">
                    <p className="flex text-[18px] justify-start  items-start gap-2  text-[#696464] pl-5 max-sm:pl-0 ">
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
              onClick={handleModal}
            >
              Complete
            </button>
          </section>{" "}
        </section>
      </section>
    </>
  );
};

export default CompleteReservation;
