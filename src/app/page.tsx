import Banner from "@/components/Banner";
import Company from "@/components/Company";
import Content from "@/components/Content";

export default function Home() {
  return (
    <main className="mobile-nav-margin overflow-hidden">
      <div className="relative">
        {/* blur elements */}
        <div className="absolute -right-[100px] -bottom-[100px] w-[200px] h-[200px] rounded-full bg-[#f2369114] blur-3xl hidden md:block" />
        <div className="absolute -left-[150px] bottom-[100px] w-[200px] h-[200px] rounded-full bg-[#ffce7317] blur-3xl hidden md:block" />
        <Banner />
      </div>
      <Company />
      <div className="section-padding flex flex-col gap-8 xl:gap-0 pb-8 md:pb-5 lg:pb-0">
        <Content
          key={1}
          className="flex flex-col md:flex-row items-center justify-evenly"
          imgSrc="/assets/images/trial/trial-img-1.webp"
          heading="Create content efficiently and quickly with great AI writing tools"
          desc="150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc."
          imgStyle="-right-7 md:-right-0 md:-left-8 lg:-left-12 xl:-left-16 2xl:-left-20 md:h-[350px] lg:h-[450px] xl:h-[530px] 2xl:h-[650px] md:object-contain xl:object-none"
          blobStyle="left-[100px] lg:left-[200px] xl:left-[280px] 2xl:left-[350px] top-0 bg-[#a136f214]"
        />
        <Content
          key={2}
          className="flex flex-col md:flex-row-reverse items-center justify-evenly"
          imgSrc="/assets/images/trial/trial-img-2.webp"
          heading="Create content efficiently and quickly with great AI writing tools"
          desc="150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc."
          imgStyle="-right-0 md:-right-8 lg:-right-12 xl:-right-16 2xl:-right-20 md:h-[350px] lg:h-[450px] xl:h-[530px] 2xl:h-[650px] md:object-contain xl:object-none"
          blobStyle="right-[100px] lg:right-[240px] xl:right-[300px] 2xl:right-[400px] -top-5 md:top-0 2xl:top-10 bg-[#366bf215]"
        />
      </div>
    </main>
  );
}
