import ComLogo from "./ComLogo";

export default function Company() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 section-padding main-container">
      <h3 className="text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-outfit font-medium text-center">
        Trusted by nearly 5000+ paying customers
      </h3>
      <ComLogo />
    </div>
  );
}
