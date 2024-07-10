import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

export interface SectionHeroGlobalPresenceProps {
  className?: string;
  leftimg: StaticImageData;
  heading: string;
  subHeading: string;
  btnText: string;
}

const SectionHeroGlobalPresence: FC<SectionHeroGlobalPresenceProps> = ({
  className = "",
  leftimg,
  heading,
  subHeading,
  btnText,
}) => {
  return (
    <div
      className={`nc-SectionHero relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="max-w-full">
          <h2 className="text-3xl leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
            {subHeading}
          </span>
          {/* Optional: Include a custom button */}
          {!!btnText && (
            <a
              href="/login"
              className="btn-primary"
            >
              {btnText}
            </a>
          )}
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={leftimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionHeroGlobalPresence;
