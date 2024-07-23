import React, { useEffect, useState } from "react";

const ModalFooter = ({
  label,
  boxText,
  isUppercase = false,
  dynamicLabel = false,
  dynamicBoxText = false,
}: {
  label: string;
  boxText: string;
  isUppercase?: boolean;
  dynamicLabel?: boolean;
  dynamicBoxText?: boolean;
}) => {
  const upperStyle = isUppercase ? "md:uppercase" : "";
  const labelStyle = dynamicLabel ? "sm:font-normal md:font-medium" : "";
  const boxTextStyle = dynamicBoxText ? "md:font-normal" : "";
  const [newLabel, setLabel] = useState(label);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setLabel(label.slice(0, -1));
      } else {
        setLabel(label);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [label]);

  return (
    <div className="flex p-6 flex-col items-start gap-[10px] self-stretch border-t-[1px] border-t-[#E5E7EB]">
      <p
        className={`self-stretch text-[#4A4A52] text-center text-[14px] not-italic font-medium ${labelStyle} leading-[140%]`}
      >
        {newLabel}
      </p>
      <div className="flex py-4 px-[72px] sm:py-3 sm:px-[32px] justify-center items-center gap-2 self-stretch rounded-xl bg-[rgba(50,167,173,0.1)]">
        <p
          className={`font-roboto text-[rgba(41,43,46,0.20)] text-[16px] not-italic font-medium ${boxTextStyle} leading-[100%] md:font-normal sm:leading-[140%] ${upperStyle}`}
        >
          {boxText}
        </p>
      </div>
    </div>
  );
};

export default ModalFooter;
