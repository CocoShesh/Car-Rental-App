import React, { useState } from "react";
import { Modal } from "antd";
import ReserveInformation from "./modal/ReserveInformation";

const ReserveModal = ({ isModalOpen, setIsModalOpen, data }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title={
          <div className="header text-3xl font-[700] text-[#b52b29] max-sm:text-2xl">
            Complete Reservation
          </div>
        }
        visible={isModalOpen}
        width={800}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{
          // height: "500px"
          padding: 0,
          overflow: "scroll",
        }}
      >
        <ReserveInformation data={data} />
      </Modal>
    </>
  );
};

export default ReserveModal;
