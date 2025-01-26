import AuthLinks from "./AuthLinks";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="main-container flex-center gap-5 py-4 lg:py-6 2xl:py-8 fixed top-0 left-0 lg:static w-full border-b border-gray-800 lg:border-transparent bg-primary lg:bg-transparent z-50">
      <div className="flex items-center gap-5 2xl:gap-7">
        <Logo />
        <NavLink />
      </div>
      {/* btn */}
      <div className="flex-center gap-5">
        <div className="hidden md:block">
          <AuthLinks />
        </div>
        {/* mobile nav */}
        <div className="block lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
