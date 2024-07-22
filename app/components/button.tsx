"use client";

import React, { useEffect, useState } from "react";

const Button = ({
  modal,
  children,
}: {
  modal: React.ReactElement;
  children: React.ReactNode;
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalIsOpen]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button
        className="rounded-lg bg-white border-2 border-gray-300 px-2 py-1"
        onClick={openModal}
      >
        {children}
      </button>
      {modalIsOpen && React.cloneElement(modal, { onClose: closeModal })}
    </div>
  );
};

export default Button;
