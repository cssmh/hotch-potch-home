"use client"
import { useState } from "react";
import { mixLandBtnData } from "@/data";

export default function MislandBtn() {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="flex w-full md:max-w-[302px] flex-col gap-3">
      {mixLandBtnData.map((btn, idx) => (
        <button key={idx}>
          <div
            onClick={() => setActiveButton(idx)}
            className={`rounded-lg cursor-pointer relative flex justify-start items-center px-6 py-3 ${
              activeButton === idx
                ? "bg-gradient-to-r from-gradient to-gradient-foreground"
                : "bg-transparent border border-[#282a37] hover:border-gradient-foreground transition-all duration-700 ease-in"
            }`}
          >
            <span className="text-white">{btn.label}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
