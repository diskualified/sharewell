import React from "react";

const ModalItem = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className="relative flex pt-6 pr-6 pb-0 pl-6 items-center gap-[10px] self-stretch">
      <div className="flex flex-col items-start gap-1">
        <p className="w-[400px] text-[#4A4A52] text-[14px] not-italic font-normal leading-[140%]">
          {name}
        </p>
        <p className="w-[400px] text-purple text-[16px] not-italic font-[700] leading-[140%]">
          {description}
        </p>
      </div>
      <div className="w-[24px] h-[24px] absolute right-[30px] bottom-[19px]">
        <button className="text-gray-500 text-3xl font-light">&times;</button>
      </div>
    </div>
  );
};

export default ModalItem;
