"use client";

import React, { MutableRefObject } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import PerspectiveText from "../shared/PerspectiveText";

interface CustomButtonProps {
  children?: React.ReactNode;
  hoverColor1?: string;
  hoverColor2?: string;
  hoverColor3?: string;
  textLabel?: string;
  btnBgColor?: string;
  textColor?: string;
  borderColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  hoverColor1 = "bg-[#FFC947]",
  hoverColor2 = "bg-gradient-foreground",
  hoverColor3 = "bg-gradient-to-r from-gradient to-gradient-foreground",
  btnBgColor = "bg-transparent",
  textColor = "text-white",
  borderColor = "border border-gray-400",
  textLabel,
  ...attributes
}) => {
  const circle = useRef(null);
  const timeline: MutableRefObject<gsap.core.Timeline> = useRef(
    gsap.timeline({ paused: true })
  );
  let timeoutId: string | number | NodeJS.Timeout | null | undefined = null;
  useEffect(() => {
    if (timeline.current) {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current
        .to(
          circle.current,
          {
            top: "-170%",
            width: "240%",
            height: "250%",
            duration: 0.4,
            ease: "power3.in",
          },
          "enter"
        )
        .to(
          circle.current,
          { top: "-295%", width: "125%", height: "100%", duration: 0.4 },
          "exit"
        );
    }
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline?.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline?.current?.play();
    }, 300);
  };

  return (
    <div
      className={`rounded-lg cursor-pointer relative flex justify-center items-center px-6 py-3 customButton ${btnBgColor} ${borderColor}`}
      style={{ overflow: "hidden" }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      {...attributes}
    >
      {children ? (
        children
      ) : (
        <PerspectiveText label={textLabel} textColor={textColor} />
      )}

      <div
        ref={circle}
        className="w-full h-[150%] absolute rounded-[50%] top-[102%]"
      >
        <div
          className={`${hoverColor1} w-full h-full rounded-[50%] absolute top-0`}
        />
        <div
          className={`${hoverColor2} w-full h-full rounded-[50%] absolute top-7`}
        />
        <div
          className={`${hoverColor3} w-full h-full rounded-[50%] absolute top-16`}
        />
      </div>
    </div>
  );
};

export default CustomButton;
