import React from "react";

const ModalItem = ({
  name,
  description,
  option2 = false,
  option3 = false,
}: {
  name: string;
  description: string;
  option2?: boolean;
  option3?: boolean;
}) => {
  const nameStyle = option2
    ? "font-medium"
    : option3
    ? "text-purple sm:text-gray md:text-[16px] font-medium sm:font-normal md:uppercase"
    : "text-gray font-normal sm:font-medium md:font-normal";
  const descStyle = option2
    ? "text-gray sm:text-purple font-bold md:font-medium"
    : option3
    ? "text-gray font-medium sm:text-purple sm:font-semibold"
    : "font-bold text-purple";

  return (
    <div className="relative flex pt-6 pr-6 pb-0 pl-6 items-center gap-[10px] self-stretch">
      <div className="flex flex-col items-start gap-1">
        <p
          className={`${nameStyle} w-[400px] text-[14px] not-italic leading-[140%]`}
        >
          {name}
        </p>
        <p
          className={`${descStyle} w-[400px] text-[16px] not-italic leading-[140%]`}
        >
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
