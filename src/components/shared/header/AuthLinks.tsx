"use client";

import CustomButton from "@/components/ui/CustomButton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AuthLinks() {
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    function handleScroll() {
      setNavHeight(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex items-center gap-4 p-[2px] all-transition ${
        navHeight > 100 && "opacity-0 lg:opacity-100"
      }`}
    >
      <Link href={"/"}>
        <CustomButton
          key={1}
          textLabel="Sign in"
        />
      </Link>
      <Link href={"/"}>
        <CustomButton
          key={2}
          textLabel="Get started free"
          btnBgColor="primary-gradient"
          borderColor="border border-gradient"
        />
      </Link>
    </div>
  );
}
