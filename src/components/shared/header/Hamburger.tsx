import { IoIosClose, IoIosMenu } from "react-icons/io";

interface HamburgerProps {
  mobileNavOpen: boolean;
  setMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger: React.FC<HamburgerProps> = ({
  mobileNavOpen,
  setMobileNavOpen,
}) => {
  return (
    <div
      onClick={() => setMobileNavOpen((prev) => !prev)}
      className={`${
        mobileNavOpen ? "border border-[#a374ff]" : "bg-[#a374ff]"
      } flex justify-center items-center w-9 h-9 md:w-10 md:h-10 rounded-full  color-transition relative z-50 cursor-pointer`}
    >
      {mobileNavOpen ? (
        <IoIosClose size={24} className="w-4 h-4 text-white" />
      ) : (
        <IoIosMenu size={24} className="w-4 h-4 text-white" />
      )}
    </div>
  );
};

export default Hamburger;
