import FooterLinks from "./FooterLinks";
import TrialCta from "./TrialCta";

export default function Footer() {
  return (
    <div className="section-padding main-container flex flex-col gap-8 md:gap-10 lg:gap-16 xl:gap-20 2xl:gap-24 pb-6 md:pb-8 lg:pb-12 xl:pb-14">
      <TrialCta />
      <FooterLinks />
    </div>
  );
}
