import React from "react";
import Button from "../components/button";
import Modal1 from "../components/modal1";
import Modal2 from "../components/modal2";

const GreenPage = () => {
  return (
    <div className="bg-green-500 h-[200vh] p-4 overflow-hidden">
      <h1>GREEN</h1>
      <Button modal={<Modal1 />}>Modal 1</Button>
      <Button modal={<Modal2 />}>Modal 2</Button>
    </div>
  );
};

export default GreenPage;
