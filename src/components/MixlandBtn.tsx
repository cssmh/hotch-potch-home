import { misLandBtnData } from "@/data";
import Link from "next/link";

export default function MislandBtn() {
  return (
    <div className="flex flex-col gap-3">
      {misLandBtnData.map((btn, idx) => (
        <div key={idx} className="w-[290px] md:max-w-[302px]">
          <Link href={btn.link}>
            <div
              className={`rounded-lg cursor-pointer relative flex justify-start items-center px-6 py-3 ${
                idx === 0
                  ? "bg-gradient-to-r from-gradient to-gradient-foreground"
                  : "bg-transparent border border-[#282a37] hover:border-accent transition-all duration-700 ease-in"
              }`}
            >
              <span className="text-white">{btn.label}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
