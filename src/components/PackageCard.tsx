import { packageData } from "@/data";

export default function PackageCard() {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center gap-6">
      {packageData.map((card, idx) => (
        <div
          key={idx}
          className="p-8 rounded-lg bg-[#282A37] flex flex-col gap-5 md:gap-6 xl:gap-7 lg:max-w-[330px] h-[420px] md:h-[420px] lg:h-[480px] xl:h-[510px] 2xl:h-[554px] relative"
        >
          <p className="link-text text-white">{card.title}</p>
          <div className="flex flex-col gap-2 md:gap-3 xl:gap-4">
            <div className="flex items-end">
              <h2 className="sub-heading text-white">{card.price}</h2>
              <span className="font-outfit desc-text ">/month</span>
            </div>
            <p className="w-3/4 mini-text text-secondary/70">{card.maxTeam}</p>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 xl:gap-4">
            <p className="link-text font-bold">{card.subTitle}</p>
            <div className="flex flex-col gap-2 lg:gap-3">
              {card.included.map((inc, idx) => (
                <p
                  key={idx}
                  className="text-secondary/70 font-medium link-text"
                >
                  {inc}
                </p>
              ))}
            </div>
          </div>
          <div className="absolute bottom-7 w-[80%] mx-auto">
            <button className="border-[#12141D] hover:border-none border rounded-lg py-3.5 w-full font-medium link-text hover:bg-gradient-to-r from-gradient to-gradient-foreground">
              Get started
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
