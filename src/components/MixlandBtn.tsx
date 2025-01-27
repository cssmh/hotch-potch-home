import { misLandBtnData } from "@/data";
import Link from "next/link";
import CustomButton from "./ui/CustomButton";

export default function MislandBtn() {
  return (
    <div className="flex flex-col gap-3">
      {misLandBtnData.map((btn, idx) => (
        <div key={idx} className="w-[290px] md:max-w-[302px]">
          <Link href={btn.link}>
            <CustomButton
              textLabel={btn.label}
              borderColor="border border-gray-400 hover:border-accent transition-all duration-700 ease-in"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
