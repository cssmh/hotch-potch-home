import Link from "next/link";
import CustomButton from "./ui/CustomButton";
import SecondaryButton from "./ui/SecondaryButton";

export default function Banner() {
  return (
    <section className="flex items-center justify-center lg:min-h-[60vh] relative section-padding pb-6 md:pb-8 lg:pb-12 xl:pb-14 overflow-hidden border-b border-gray-800">
      <div className="relative flex items-start justify-center main-container ">
        <div className="bg-[#a136f214] w-[200px] h-[200px] md:w-[300px] xl:w-[400px] md:h-[300px] xl:h-[400px] rounded-full blur-2xl absolute top-0 md:-top-8 xl:-top-14" />
        <div className="backdrop-blur-xl flex flex-col gap-4 md:gap-5 lg:gap-7 xl:gap-10 max-w-[510px]">
          <h1 className="heading text-secondary text-center font-medium 2xl:leading-[66px] flex flex-col justify-center items-center">
            Write better <br /> content for your <br />
            <span className="text-transparent bg-clip-text secondary-gradient flex flex-col gap-1 w-fit">
              Facebook Ads
              <div className="w-full h-1 secondary-gradient" />
            </span>
          </h1>
          <p className="desc-text text-secondary/60 text-center">
            Artificial intelligence writting tool helps you create blogs, <br />{" "}
            social media websites and much more.
          </p>
          <div className="md:mt-1.5 max-w-[214px] mx-auto flex flex-col gap-3">
            <Link href={"/"}>
              <CustomButton
                key={2}
                textLabel="Get started free"
                btnBgColor="primary-gradient"
                borderColor="border border-gradient hover:border-accent"
                hoverColor1="bg-primary"
                hoverColor2="bg-[#FFC947]"
                hoverColor3="accent-gradient"
              />
            </Link>
            <Link href={"#"}>
              <SecondaryButton />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
