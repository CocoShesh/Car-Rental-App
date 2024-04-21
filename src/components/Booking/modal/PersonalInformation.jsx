import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "../../../Schema/PersonalInfoSchema";
import { useForm } from "react-hook-form";
import { inputFields } from "../CarData";
import InputField from "../InputField";
import CompleteReservation from "./CompleteReservation";
const PersonalInformation = ({ reservationDetails }) => {
  const [openModal, setOpenModal] = useState(false);
  const [userInformation, setUserInformation] = useState([{}]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = data => {
    setUserInformation(data);
    setOpenModal(true);
  };

  const handleModal = () => {
    setOpenModal(prev => !prev);
  };

  return (
    <>
      <h1 className="text-[#ff4d30] font-extrabold text-xl uppercase mt-5">
        Personal Information
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="grid grid-cols-2 gap-5 px-3 max-sm:px-1 max-md:grid-cols-1  text-lg mt-5">
          {inputFields.slice(0, 4).map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              name={field.name}
              placeholder={field.placeholder}
              register={register}
              errors={errors}
            />
          ))}
        </section>
        <section className="flex flex-col px-3 text-lg mt-3 gap-5 max-sm:px-1">
          {inputFields.slice(4, 6).map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              name={field.name}
              placeholder={field.placeholder}
              register={register}
              errors={errors}
            />
          ))}
        </section>

        <section className="grid grid-cols-2 gap-5 px-3 mt-3 text-lg max-sm:px-1  max-md:grid-cols-1">
          {inputFields.slice(6, 8).map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              name={field.name}
              placeholder={field.placeholder}
              register={register}
              errors={errors}
            />
          ))}
        </section>

        <section className="flex max-sm:items-center max-sm:justify-center max-sm:mx-3  mt-5">
          <button
            type="submit"
            className="bg-[#fe3516] text-white w-[250px] h-[60px] text-[20px] mr-3 mt-5  max-sm:mr-0 max-sm:ml-0 max-sm:w-full  font-extrabold items shadow-lg ml-auto rounded-md hover:bg-[#ff5a3c] transition duration-300 ease-in-out"
          >
            Reserve Now
          </button>
        </section>
      </form>

      {openModal && (
        <CompleteReservation
          handleModal={handleModal}
          userInformation={userInformation}
          reservationDetails={reservationDetails}
        />
      )}
    </>
  );
};

export default PersonalInformation;
