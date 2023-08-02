import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import profile from "../../../public/prof.png";
import Image from "next/image";

export default function ResumeView() {
  return (
    <>
      <iframe
        className={styles.iframe}
        src="https://drive.google.com/file/d/1Wm1KffOPDGGJA7elp6n_58DdO6W7psgA/preview"
        width="90%"
        allow="autoplay"
      ></iframe>
    </>
  );
}
