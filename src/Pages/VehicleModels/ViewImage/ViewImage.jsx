import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ViewImage = ({ selectedImage, setOpenViewImage }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-[#000000ab] text-black">
        <section
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="w-fit h-fit  relative  p-10  mt-10 max-sm:px-5 flex "
        >
          <button
            onClick={() => setOpenViewImage(false)}
            className="absolute top-[-25px] max-sm:top-24  max-sm:right-5 right-10   w-fit h-fit bg-black text-white px-5 text-lg rounded-md py-2 hover:bg-white hover:text-black border-2 border-black transition duration-500 ease-in-out"
          >
            {" "}
            Close
          </button>
          <img
            src={selectedImage}
            alt=""
            className="rounded-xl object-contain h-[500px] w-[800px]"
          />
        </section>
      </section>
    </>
  );
};

export default ViewImage;
