import MixlandBtn from "./MixlandBtn";
import MixlandContent from "./MixlandContent";


export default function Mixland() {
  return (
    <div className="section-padding main-container pb-6 md:pb-8 lg:pb-12 xl:pb-14 flex flex-col gap-6 md:gap-10 lg:gap-12 xl:gap-16 ">
      <h2 className="sub-heading text-secondary text-center lg:leading-tight">
        Mixland helps you <br />
        build beautiful website
      </h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12 items-center md:items-start md:justify-center">
        <MixlandBtn />
        <MixlandContent />
      </div>
    </div>
  );
}
