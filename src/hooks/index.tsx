"use client";
import { useLayoutEffect, useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setViewportWidth(getViewportWidth());
      setIsMobile(viewportWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewportWidth <= 768;
}
