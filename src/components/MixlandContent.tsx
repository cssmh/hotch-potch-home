export default function MislandContent() {
  return (
    <div className="w-full bg-[#282A37] rounded-lg max-w-[734px] mt-6 md:mt-0">
      {/* color ui */}
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="w-3 h-3 rounded-full bg-[#F23936]" />
        <div className="w-3 h-3 rounded-full bg-[#FABB18]" />
        <div className="w-3 h-3 rounded-full bg-[#45C646]" />
      </div>
      {/* content */}
      <div className="flex flex-col pb-5 mx-8">
        <p className="text-secondary/50 link-text font-medium">
          4 Blog Headlines Generated
        </p>
        <div className="w-full h-[1px] bg-[#313342] my-5" />
        <p className="desc-text text-secondary">
          Create original content that ranks for SEO
        </p>
        <div className="w-full h-[1px] bg-[#313342] my-5" />
        <p className="desc-text text-secondary">
          Any mechanical keyboard enthusiasts in design?
        </p>
        <div className="w-full h-[1px] bg-[#313342] my-5" />
        <p className="desc-text text-secondary">
          The More Important the Work, the More Important the Rest
        </p>
        <div className="w-full h-[1px] bg-[#313342] my-5" />
        <p className="desc-text text-secondary">
          How to design a product that can grow itself 10x in year
        </p>
        <div className="w-full h-[1px] bg-[#313342] my-5" />
        <p className="desc-text text-secondary">
          Any mechanical keyboard enthusiasts in design?
        </p>
      </div>
    </div>
  );
}
