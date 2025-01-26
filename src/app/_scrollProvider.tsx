"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

interface ScrollProviderProps {
  children: React.ReactNode;
}

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <div ref={container}>{children}</div>;
};

export default ScrollProvider;
