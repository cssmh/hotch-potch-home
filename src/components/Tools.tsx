import ToolsCard from "./ToolsCard";

export default function Tools() {
  return (
    <div className="section-padding main-container pb-6 md:pb-8 lg:pb-12 xl:pb-14 flex flex-col gap-8 md:gap-10 lg:gap-12 xl:gap-16">
      <div className="flex flex-col gap-4 lg:gap-5 xl:gap-7 items-center">
        <h2 className="sub-heading text-secondary text-center">
          54 exciting writing tools
        </h2>
        <p className="desc-text text-secondary/70 text-center">
          AI engines take information from various sources and read <br /> them
          like a human would do.
        </p>
      </div>
      <ToolsCard />
      <p className="desc-text text-secondary text-center">
        See all 54 available tools
      </p>
    </div>
  );
}
