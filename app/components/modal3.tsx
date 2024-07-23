"use client";

import React from "react";
import ModalHeader from "./modalElements/modalHeader";
import ModalFooter from "./modalElements/modalFooter";
import ModalContent from "./modalElements/modalContent";
import ModalItem from "./modalElements/modalItem";
const Modal = ({ onClose }: { onClose?: () => void }) => {
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose!();
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleClickOutside}
      ></div>
      <div className="flex sm:w-[640px] w-[339px] flex-col items-center rounded-xl bg-white z-20">
        <ModalHeader
          title="Modal 3"
          subtitle="Lorem Ipsum is wack"
          date="Wednesday, Jun 21, 2023"
          time="07:00pm - 07:30pm EST"
          secretCool={true}
        />
        <ModalItem
          name="Lorem Ipsum"
          description="Lorem Ipsum"
          option3={true}
        />
        <ModalContent
          content={
            "Lorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
          }
        />
        <ModalFooter
          label="Lorem Ipsum is simply dummy text."
          boxText="Lorem Ipsum"
          dynamicBoxText={true}
        />
      </div>
    </div>
  );
};

export default Modal;
