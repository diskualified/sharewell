import React from "react";

const ModalContent = ({ content }: { content: string }) => {
  return (
    <div className="flex pt-4 pr-6 pb-6 pl-6 flex-col justify-center items-start gap-4 self-stretch">
      <p className="self-stretch text-[#292B2E] text-[16px] sm:text-[14px] not-italic font-medium md:font-normal leading-[140%]">
        {content}
      </p>
    </div>
  );
};

export default ModalContent;
