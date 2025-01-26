import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/assets/icons/logo.svg"
        alt="Logo"
        width={100}
        height={41}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        quality={80}
        priority={true}
        className="w-20 h-8 2xl:w-24 2xl:h-10 relative -left-4 sm:-left-0"
      />
    </Link>
  );
};

export default Logo;
