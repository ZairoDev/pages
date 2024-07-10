"use client"; 
import React, { FC, ImgHTMLAttributes, useEffect, useRef, useState } from "react";
import checkInViewIntersectionObserver from "../../utils/isInViewPortIntersectionObserver";
import placeholderLarge from "../../images/placeholder-large.png";
import placeholderLargeH from "../../images/placeholder-large-h.png";

// Type definition for StaticImageData
interface StaticImageData {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
}

export interface NcImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  prevImageHorizontal?: boolean;
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = "",
  alt = "nc-imgs",
  src = "",
  prevImageHorizontal = false,
  className = "object-cover w-full h-full",
  ...args
}) => {
  const placeholderImage: StaticImageData = prevImageHorizontal
    ? placeholderLargeH
    : placeholderLarge;

  const [__src, set__src] = useState<string | StaticImageData>(placeholderImage);
  const _containerRef = useRef<HTMLDivElement | null>(null);

  const _checkInViewPort = () => {
    if (!_containerRef.current) return;
    checkInViewIntersectionObserver({
      target: _containerRef.current as HTMLElement,
      distanceFromEnd: 0,
      callback: _imageOnViewPort,
    });
  };

  const _imageOnViewPort = () => {
    if (!src) {
      _handleImageLoaded();
      return true;
    }
    const _imageEl = new Image();
    _imageEl.src = src;
    _imageEl.addEventListener("load", _handleImageLoaded);
    return true;
  };

  const _handleImageLoaded = () => {
    set__src(src);
  };

  useEffect(() => {
    set__src(placeholderImage);
    _checkInViewPort();
  }, [src, placeholderImage]);

  return (
    <div
      className={`nc-NcImage ${containerClassName}`}
      data-nc-id="NcImage"
      ref={_containerRef}
    >
      {__src ? (
        <img src={typeof __src === "string" ? __src : __src.src} className={className} alt={alt} {...args} />
      ) : (
        <div className={`${className} bg-neutral-200 dark:bg-neutral-6000`}></div>
      )}
    </div>
  );
};

export default NcImage;
