import { misLandBtnData } from "@/data";
import Link from "next/link";

export default function MislandBtn() {
  return (
    <div className="flex w-full md:max-w-[302px] flex-col gap-3">
      {misLandBtnData.map((btn, idx) => (
        <Link key={idx} href={btn.link}>
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
      ))}
    </div>
  );
}
