import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";

const ModalHeader = ({
  title,
  subtitle,
  date,
  time,
  secretCool = false,
}: {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  secretCool?: boolean;
}) => {
  const [newSubtitle, setSubtitle] = useState(subtitle);

  useEffect(() => {
    const handleResize = () => {
      if (secretCool && window.innerWidth < 768) {
        const n = subtitle.lastIndexOf(" ");
        setSubtitle(subtitle.slice(0, n + 1) + "cool");
      } else {
        setSubtitle(subtitle);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [subtitle]);

  return (
    <div className="relative rounded-t-xl flex sm:h-[224px] h-[181px] justify-center items-center gap-[10px] self-stretch bg-purple md:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      <div className="flex flex-col items-start gap-3 absolute left-6 bottom-6 sm:left-12 sm:bottom-[43px]">
        <h1 className=" text-white w-[396px] text-[18px] sm:text-[32px] not-italic font-medium leading-[140%]">
          {title}
        </h1>
        <p className="text-white text-[14px] not-italic font-medium leading-[140%]">
          {newSubtitle}
        </p>
        <p className="text-white text-[14px] sm:text-[16px] not-italic font-medium leading-[140%]">
          {date}
          <br />
          {time}
        </p>
      </div>
      <div className="flex w-[204.7px] h-[204px] sm:w-[345px] sm:h-[343px] pt-[26.7px] pr-[23.44px] pb-[26.7px] pl-[23.1px] sm:pt-[45px] sm:pr-[38.5px] sm:pb-[45px] sm:pl-[40px] justify-center items-center absolute right-[-23.5px] bottom-[-44.5px] sm:right-[-38.5px] sm:bottom-[-74.5px]">
        <Image src={logo} alt="logo"></Image>
      </div>
    </div>
  );
};

export default ModalHeader;
