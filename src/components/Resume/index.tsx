"use client";
import React from "react";
import styles from "./styles.module.css";
import { useViewportWidth } from "@/hooks";
import classNames from "classnames";

export default function ResumeView() {
  const isMobile = useViewportWidth();
  return (
    <div className={classNames("pb-3", { "pt-3": !isMobile })}>
      <iframe
        className={styles.iframe}
        src="https://drive.google.com/file/d/1t5Gaa3m6WC2iWjaNyZVRnvkZH215l67i/preview"
        width="90%"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
