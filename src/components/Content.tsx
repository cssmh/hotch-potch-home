import Image from "next/image";
import Link from "next/link";
import CustomButton from "./ui/CustomButton";

interface ContentProps {
  className?: string;
  imgSrc: string;
  heading: string;
  desc: string;
  imgStyle: string;
  blobStyle: string;
}

const Content: React.FC<ContentProps> = ({
  className,
  imgSrc,
  heading,
  desc,
  imgStyle,
  blobStyle,
}) => {
  return (
    <section className="main-container">
      <div className={`${className} relative 2xl:px-44`}>
        {/* blob blur */}
        <div
          className={`absolute w-[200px] h-[200px] md:w-[300px] xl:w-[400px] md:h-[300px] xl:h-[400px] rounded-full blur-3xl ${blobStyle}`}
        />
        <Image
          src={imgSrc}
          alt="Seo content written by ai"
          width={690}
          height={650}
          className={`relative z-10 ${imgStyle}`}
        />
        <div className="flex flex-col gap-4 lg:gap-7">
          <h2 className="sub-heading max-w-[497px] font-semibold xl:leading-tight 2xl:leading-tight">
            {heading}
          </h2>
          <p className="desc-text text-secondary/70 max-w-[487px]">{desc}</p>
          <div className="max-w-[180px] lg:max-w-[220px] mt-3">
            <Link href={"/"}>
              <CustomButton
                key={1}
                textLabel="Start 14 Days Free Trial"
                btnBgColor="primary-gradient"
                borderColor="border border-gradient"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
