import React from "react";

const CompleteReservation = ({ handleCompleted }) => {
  return (
    <>
      <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 bg-[#0000004b] text-black">
        <section
          data-aos="zoom-in"
          className="w-[35rem] lg:h-fit overflow-auto 2xl:h-fit max-sm:h-[37rem] max-sm:overflow-auto select-none bg-white border text-black rounded-2xl max-sm:rounded-lg p-10 max-sm:px-5 max-sm:mx-5 flex flex-col"
        >
          <div className="text-xl font-[500] mb-5 pl-5">
            <p>Thank you for completing your reservation!</p>
            <p>We will send a message to your email shortly.</p>
          </div>

          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 text-xl px-4 rounded"
            onClick={() => {
              handleCompleted();
              window.location.reload(true);
            }}
          >
            Close
          </button>
        </section>
      </section>
    </>
  );
};

export default CompleteReservation;
