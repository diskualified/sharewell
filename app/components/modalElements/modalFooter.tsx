import React from "react";

const ModalFooter = ({
  label,
  boxText,
}: {
  label: string;
  boxText: string;
}) => {
  return (
    <div className="flex p-6 flex-col items-start gap-[10px] self-stretch border-t-[1px] border-t-[#E5E7EB]">
      <p className="self-stretch text-[#4A4A52] text-center text-[14px] not-italic sm:font-normal font-medium leading-[140%]">
        {label}
      </p>
      <div className="flex py-4 px-[72px] sm:py-3 sm:px-[32px] justify-center items-center gap-2 self-stretch rounded-xl bg-[rgba(50,167,173,0.1)]">
        <p className="text-[rgba(41,43,46,0.20)] text-[16px] not-italic font-medium leading-[100%] md:font-normal sm:leading-[140%] md:uppercase">
          {boxText}
        </p>
      </div>
    </div>
  );
};

export default ModalFooter;
