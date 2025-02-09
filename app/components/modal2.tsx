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
          title="Modal 2"
          subtitle="Lorem Ipsum is fun"
          date="Friday, Jun 04, 2023"
          time="09:00pm - 09:30pm PST"
        />
        <ModalItem
          name="Lorem Ipsum"
          description="Lorem Ipsum"
          option2={true}
        />
        <ModalContent
          content={
            "Lorem Ipsum is simply dummy cillum dolore eu fugiat nulla pariatur. cillum dolore eu fugiat nulla pariatur."
          }
          dynamicWeight={true}
        />
        <ModalFooter
          label="Lorem Ipsum is simply dummy text."
          boxText="Lorem Ipsum"
        />
      </div>
    </div>
  );
};

export default Modal;
