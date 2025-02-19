import React, { FC, ReactNode } from "react";
// import Image from "next/image";
import Image, { StaticImageData } from "next/image";


export interface SectionHeroProps {
  className?: string;
  rightImg: StaticImageData; // Adjusted prop type for StaticImageData
  heading: ReactNode;
  subHeading: string;
  btnText: string;
}

const SectionHero: FC<SectionHeroProps> = ({
  className = "",
  rightImg,
  heading,
  subHeading,
  btnText,
}) => {
  return (
    <div
      className={`nc-SectionHero relative ${className}`} 
      data-nc-id="SectionHero"
      // style={{ marginTop: "-135px", border:"2px solid black", right:"4px" }} 
    >
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h2 className="text-3xl leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            {subHeading}
          </span>
          {!!btnText && <a href="/login" className="btn-primary">{btnText}</a>}
        </div>
        <div className="flex-grow">
          {/* Render image using next/image component */}
          <Image src={rightImg} alt="Right Image" />
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
