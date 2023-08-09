import React from "react";
import styles from "./styles.module.css";

export default function ResumeView() {
  return (
    <>
      <iframe
        className={styles.iframe}
        src="https://drive.google.com/file/d/1t5Gaa3m6WC2iWjaNyZVRnvkZH215l67i/preview"
        width="90%"
        allow="autoplay"
      ></iframe>
    </>
  );
}
