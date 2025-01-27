import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <div className="section-padding px-4 md:px-10 xl:px-12 2xl:px-0 max-w-screen-xl mx-auto flex flex-col gap-8 md:gap-10 lg:gap-16 xl:gap-20 2xl:gap-24 pb-6 md:pb-8 lg:pb-12 xl:pb-14">
      <div className="w-full rounded-lg primary-gradient">
        <div className="flex flex-col sm:flex-row justify-between gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-5 py-5 sm:px-6 sm:py-5 md:px-7 md:py-6 lg:px-9 lg:py-7 2xl:px-12 2xl:py-8">
          <h3 className="text-lg md:text-xl lg:text-2xl text-secondary font-semibold">
            It will help you improve your writing <br /> & bring ideas more c
            learly.
          </h3>
          <button className="px-3 py-2.5 lg:px-4 lg:py-2 2xl:px-5 2xl:py-4 bg-white rounded-md text-primary link-text font-semibold">
            Get 14 days free trial
          </button>
        </div>
      </div>
      <FooterLinks />
    </div>
  );
}
