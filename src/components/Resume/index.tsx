import React from "react";
import styles from "./styles.module.css";

export default function ResumeView() {
  return (
    <>
      <iframe
        className={styles.iframe}
        src="https://docs.google.com/document/d/e/2PACX-1vTkl0QdcNDjT_PF4bo2kJkwf8N4iRnRyWB4Xkvy2Yyy8xl5ze1lmrHIwDvwt7Mx3KezcHvPgaMFWSLD/pub?embedded=true"
        width="90%"
        allow="autoplay"
      ></iframe>
    </>
  );
}
