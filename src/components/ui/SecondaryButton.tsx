import { FaCirclePlay } from "react-icons/fa6";

export default function SecondaryButton() {
  return (
    <div className="w-full hover:bg-gradient-to-r from-gradient to-gradient-foreground h-10 flex items-center justify-center rounded-md group cursor-pointer">
      <div className="secondary-btn bg-primary rounded-md flex items-center justify-center">
        <button className="flex-center gap-2">
          <FaCirclePlay
            size={18}
            className="text-white group-hover:text-gradient-foreground"
          />
          <p className="link-text font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-gradient to-gradient-foreground">
            Watch a demo
          </p>
        </button>
      </div>
    </div>
  );
}
