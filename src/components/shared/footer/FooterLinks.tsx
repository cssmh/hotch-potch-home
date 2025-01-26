import { footerLinks } from "@/constant";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 sm:flex gap-6 sm:justify-between">
      <div className="w-[100px] sm:w-[140px]">
        <p className="link-text text-secondary mb-3 md:mb-4 lg:mb-5 font-semibold">
          Company
        </p>
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          {footerLinks.company.map((link, idx) => (
            <Link
              href={link.link}
              key={idx}
              className="text-secondary mini-text hover:text-gradient-foreground color-transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[140px]">
        <p className="link-text text-secondary mb-3 md:mb-4 lg:mb-5 font-semibold">
          Help
        </p>
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          {footerLinks.help.map((link, idx) => (
            <Link
              href={link.link}
              key={idx}
              className="text-secondary mini-text hover:text-gradient-foreground color-transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[140px]">
        <p className="link-text text-secondary mb-3 md:mb-4 lg:mb-5 font-semibold">
          Resources
        </p>
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          {footerLinks.help.map((link, idx) => (
            <Link
              href={link.link}
              key={idx}
              className="text-secondary mini-text hover:text-gradient-foreground color-transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[140px]">
        <p className="link-text text-secondary mb-3 md:mb-4 lg:mb-5 font-semibold">
          Links
        </p>
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
          {footerLinks.help.map((link, idx) => (
            <Link
              href={link.link}
              key={idx}
              className="text-secondary mini-text hover:text-gradient-foreground color-transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
