import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

export interface SectionHero2Props {
  className?: string;
  leftimg: StaticImageData;
  heading: string;
  subHeading: string;
  btnText: string;
}

const SectionHero2: FC<SectionHero2Props> = ({
  className = "",
  leftimg,
  heading,
  subHeading,
  btnText,
}) => {
  const handleButtonClick = () => {
    // Handle button click logic here
    console.log("Button clicked");
  };

  return (
    <div
      className={`nc-SectionHero relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="flex-grow">
          <Image className="w-full" src={leftimg} alt="" />
        </div>
        <div className="w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            Get Expert Tips on Listing a Professional Advert
          </h2>
          {!!btnText && (
            <button
              className="btn-primary"
              onClick={handleButtonClick}
            >
              {btnText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionHero2;
