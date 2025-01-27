"use client";

import React from "react";
import PerspectiveText from "../shared/PerspectiveText";

interface CustomButtonProps {
  children?: React.ReactNode;
  textLabel?: string;
  btnBgColor?: string;
  textColor?: string;
  borderColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  btnBgColor = "bg-transparent",
  textColor = "text-white",
  borderColor = "border border-gray-400",
  textLabel,
  ...attributes
}) => {
  return (
    <div
      className={`rounded-lg cursor-pointer relative flex justify-center items-center px-6 py-3 ${btnBgColor} ${borderColor}`}
      {...attributes}
    >
      {children ? (
        children
      ) : (
        <PerspectiveText label={textLabel} textColor={textColor} />
      )}
    </div>
  );
};

export default CustomButton;
