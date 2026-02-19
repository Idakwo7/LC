import React from "react";

interface FloatingDivProps {
  top: string;
  left: string;
  rotate: string;
  bgColor: string;
  title: string;
  description?: string;
  zIndex?: string;
  width?: string;
}

const FloatingDiv: React.FC<FloatingDivProps> = ({
  top,
  left,
  rotate,
  bgColor,
  title,
  description,
  zIndex = "auto",
  width = "696px"
}) => {
  return (
    <div
      className="absolute p-4 sm:p-6 lg:p-8 rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-[184.84px] sm:w-auto max-w-full"
      style={{
        top,
        left,
        transform: `rotate(${rotate})`,
        backgroundColor: bgColor,
        zIndex,
        width: width === "696px" ? "100%" : width,
        maxWidth: width
      }}
    >
      <h1 className="text-[18px] sm:text-[22px] lg:text-[28px] font-bold leading-[140%] -tracking-[0.53px]">
        {title}
      </h1>
      {description && (
        <p className="text-[14px] sm:text-[18px] lg:text-[26.7px] leading-[150%] -tracking-[0.53px] pt-2 lg:pt-3">
          {description}
        </p>
      )}
    </div>
  );
};

export default FloatingDiv;
