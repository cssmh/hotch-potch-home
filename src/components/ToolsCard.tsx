import { toolsData } from "@/data";
import Image from "next/image";

export default function ToolsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
      {toolsData.map((tool, idx) => (
        <div key={idx} className="px-5 py-7 bg-[#282A37] rounded-lg flex gap-4">
          <Image
            src={tool.icon}
            alt={tool.title}
            width={34}
            height={34}
            className="w-9 h-9"
          />
          <div className="flex flex-col lg:gap-2 xl:gap-3 2xl:gap-3.5">
            <p className="desc-text text-nowrap text-secondary">{tool.title}</p>
            <p className="mini-text text-secondary/70">{tool.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
