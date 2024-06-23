"use client";
import { useLayoutEffect, useState } from "react";

function getViewportWidth() {
  if (!(typeof window === "undefined")) {
    return Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
  }
  return Infinity;
}
export function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(getViewportWidth());

  useLayoutEffect(() => {
    const handleResize = () => {
      setViewportWidth(getViewportWidth());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewportWidth <= 768;
}
