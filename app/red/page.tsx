import React from "react";
import Button from "../components/button";
import Modal1 from "../components/modal1";
import Modal3 from "../components/modal3";

const RedPage = () => {
  return (
    <div className="bg-red-500 h-[200vh] p-4">
      <h1>RED</h1>
      <Button modal={<Modal1 />}>Modal 1</Button>
      <Button modal={<Modal3 />}>Modal 3</Button>
    </div>
  );
};

export default RedPage;
