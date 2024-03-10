import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { DatePicker, Space } from "antd";
import { Button, Modal } from "antd";

import CompleteReservation from "./modal/CompleteReservation";
import dayjs from "dayjs";

const Date = ({ selectedPickUp, selectedCar, selectedDropOff }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPickOffDate, setSelectedPickOffDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="lg:flex gap-3 justify-between max-sm:flex-col mb-10 px-10 max-sm:px-5 items-center mt-5   text-gray-900 ">
        <section className="w-full ">
          <div className="flex items-center gap-3 max-sm:mx-3">
            <AiOutlineCalendar /> Pick-up Date
            <span className="text-orange-500"> *</span>
          </div>

          <Space direction="vertical ">
            <DatePicker
              className="w-full h-[50px]   bg-white border-slate-300 border-2 mt-3 mb-5 font-bold max-md:mb-5"
              value={selectedDate ? dayjs(selectedDate) : null} // Parse selectedDate using dayjs
              onChange={(_, dateString) => setSelectedDate(dateString)}
            />
          </Space>
        </section>
        <section className="w-full ">
          <div className="flex items-center gap-3 max-sm:mx-3 ">
            <AiOutlineCalendar /> Drop off Date
            <span className="text-orange-500"> *</span>
          </div>
          <Space direction="vertical">
            <DatePicker
              className="w-full  mt-3 h-[50px] bg-white border-slate-300 border-2  mb-5 font-bold text-black"
              value={selectedPickOffDate ? dayjs(selectedPickOffDate) : null} // Parse selectedDate using dayjs
              onChange={(_, dateString) => setSelectedPickOffDate(dateString)}
            />
          </Space>
        </section>
        <section className="flex w-full items-center">
          <button
            onClick={showModal}
            className="w-full mt-4 h-[50px] bg-orange-500 text-white  font-bold text-[20px] rounded-md shadow-lg"
          >
            Search
          </button>
        </section>
      </section>
      <Modal
        title={<div className="header">Complete Reservation</div>}
        visible={isModalOpen}
        width={800}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{
          height: "500px",
          padding: 0,
          overflow: "scroll",
        }}
      >
        <CompleteReservation
          selectedPickUp={selectedPickUp}
          selectedCar={selectedCar}
          selectedDropOff={selectedDropOff}
          selectedDate={selectedDate}
          selectedPickOffDate={selectedPickOffDate}
        />
      </Modal>
    </>
  );
};

export default Date;
