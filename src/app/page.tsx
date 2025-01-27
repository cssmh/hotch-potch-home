import Banner from "@/components/Banner";
import Company from "@/components/Company";

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
    </main>
  );
}
