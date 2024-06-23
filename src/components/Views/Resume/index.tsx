"use client";
import React from "react";
import styles from "./styles.module.css";
import { useViewportWidth } from "@/hooks";
import classNames from "classnames";

export default function ResumeView() {
  const isMobile = useViewportWidth();
  return (
    <div className={`${classNames("pb-3", { "pt-3": !isMobile })}`}>
      <iframe
        className={`block w-[90vw] min-h-[420px] h-auto ${styles.iframe}`}
        src="https://drive.google.com/file/d/1zz25UtiRIXxtJS8OL_u5D6ltqoNTjR71/preview"
        width="90%"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
