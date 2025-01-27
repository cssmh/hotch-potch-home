import ReviewCard from "./ReviewCard";

export default function CustomerReviews() {
  return (
    <div className=" bg-gradient-to-r from-[#171924] to-transparent pb-6 md:pb-8 lg:pb-12 xl:pb-14 border-b border-gray-800">
      <div className="section-padding main-container flex flex-col gap-8 md:gap-10 lg:gap-12 xl:gap-16">
        <div className="flex flex-col gap-4 lg:gap-5 xl:gap-7 items-center">
          <h2 className="sub-heading text-secondary text-center lg:leading-tight">
            What our customers say
          </h2>
          <p className="desc-text text-secondary/70 text-center">
            Read why thousands of marketers, writers, and <br /> entrepreneurs
            love us so much.
          </p>
        </div>
        <ReviewCard />
      </div>
    </div>
  );
}
