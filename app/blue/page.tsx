import React from "react";
import Button from "../components/button";
import Modal2 from "../components/modal2";
import Modal3 from "../components/modal3";

const BluePage = () => {
  return (
    <div className="bg-blue-500 h-[200vh] p-4">
      <h1>BLUE</h1>
      <Button modal={<Modal2 />}>Modal 2</Button>
      <Button modal={<Modal3 />}>Modal 3</Button>
    </div>
  );
};

export default BluePage;
