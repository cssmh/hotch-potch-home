export default function TrialCta() {
  return (
    <div className="w-full rounded-lg primary-gradient">
      <div className="flex flex-col sm:flex-row justify-between gap-4 md:gap-6 lg:gap-8 xl:gap-10 px-5 py-5 sm:px-6 sm:py-5 md:px-7 md:py-6 lg:px-9 lg:py-7 2xl:px-12 2xl:py-8">
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-secondary font-semibold">
          It will help you improve your writing <br /> & bring ideas more c
          learly.
        </h3>

        <button className="px-3 py-2.5 lg:px-4 lg:py-3 2xl:px-5 2xl:py-[18px] bg-white rounded-md text-primary link-text font-semibold">
          Get 14 days free trial
        </button>
      </div>
    </div>
  );
}
