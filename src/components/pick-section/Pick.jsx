import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cars from "./data.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
const list = ["Model", "Mark", "Year", "Doors", "AC", "Transmission", "Fuel"];

function Pick() {
  const navigate = useNavigate();
  const [filterCar, setFilterCar] = useState("Audi A1 S-Line");
  const [loading, setLoading] = useState(true);

  const handleCarSelection = carName => {
    setFilterCar(carName);
  };

  const filteredCars = cars.filter(car => {
    if (filterCar === "Audi A1 S-Line") {
      return car.name === "Audi A1 S-Line";
    } else {
      return car.name === filterCar;
    }
  });

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [filterCar]);

  return (
    <>
      <section className="h-content flex flex-col items-center justify-center mb-44 w-full 2xl:w-[1600px]">
        <section className="mb-20 text-center">
          <h2 className="text-[24px] text-black"> Vehicle Models </h2>
          <h1 className="text-[48px] text-black">Our rental fleet</h1>
          <p className="w-[500px] text-[#706f7b] font-sans font-bold max-md:w-auto max-sm:px-3">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </section>

        <section
          data-aos="fade-right"
          className="xl:flex gap-20 justify-between w-full px-20 2xl:px-24 items-center max-sm:w-full   max-xl:flex-col max-sm:items-center max-sm:justify-center "
        >
          <section className="flex flex-col  items-center justify-center max-sm:w-full ">
            {cars.map(item => (
              <button
                key={item.id}
                onClick={() => handleCarSelection(item.name)}
                className={`w-[300px]  h-[70px]  font-bold  text-xl  first-letter: mb-2 text-left pl-5 hover:bg-orange-500 hover:text-white transition duration-500 ease-in-out  ${
                  filterCar === item.name
                    ? "bg-orange-500 text-white"
                    : " bg-[#E9E9E9] text-black"
                }`}
              >
                {item.name}
              </button>
            ))}
          </section>

          <section className="flex-col lg:w-screen  max-sm:ml-0  mt-20 items-center flex max-sm:w-full  mb-20 justify-center ">
            {loading ? (
              <div className="loader"> </div>
            ) : (
              filteredCars.map(image => (
                <img
                  data-aos="flip-up"
                  key={image.id}
                  src={image.src}
                  alt=""
                  className=" w-[600px] "
                  loading="lazy"
                />
              ))
            )}
          </section>

          <section
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            className=" xl:w-fit  max-xl:w-full h-[400px] flex items-center justify-center mb-5   "
          >
            {filteredCars.map(item => (
              <div key={item.id}>
                <div className="h-[50px] bg-[#ff4d30] w-[300px]  flex items-center justify-center px-5   text-white">
                  <h1 className="text-[28px]">{item.rent} </h1>{" "}
                  <span className="text-[16px] max-sm:text-center max-sm:text-[14px] font-bold  ml-3">
                    / rent per day
                  </span>
                </div>
                <section className="flex  border-x-2 border-b-2   border-slate-300">
                  <div className="flex-col text-center  font-bold">
                    {list.map((list, index) => {
                      return (
                        <div
                          key={index}
                          className="border-r-2  border-b-2 p-3  border-slate-300 text-slate-500"
                        >
                          {list}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex-col text-center w-full  font-bold text-stone-900">
                    <div className=" border-b-2 p-3  border-slate-300">
                      <p>{item.model}</p>
                    </div>
                    <div className=" border-b-2 p-3  border-slate-300">
                      <p>{item.mark}</p>
                    </div>
                    <div className=" border-b-2 p-3  border-slate-300">
                      {" "}
                      <p>{item.year}</p>
                    </div>
                    <div className=" border-b-2 p-3  border-slate-300">
                      <p>{item.Doors}</p>
                    </div>
                    <div className=" border-b-2 p-3  border-slate-300">
                      <p>{item.ac}</p>
                    </div>
                    <div className=" border-b-2 p-3  border-slate-300">
                      <p>{item.transmision}</p>
                    </div>
                    <div className=" border-b-2 p-3  border-slate-300">
                      <p>{item.fuel}</p>
                    </div>
                  </div>
                </section>
                <button className="w-full h-[50px] bg-orange-500 uppercase text-white shadow-xl cursor-pointer  transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:border hover:border-gray-500 ">
                  <Link to="booking" smooth={true} duration={500}>
                    {" "}
                    Reserve Now
                  </Link>
                </button>
              </div>
            ))}
          </section>
        </section>
      </section>
    </>
  );
}

export default Pick;
