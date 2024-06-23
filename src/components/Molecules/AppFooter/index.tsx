import ActionIcon from "../../Atoms/ActionIcon";
import styles from "./styles.module.css";
import React from "react";
import linkedin from "./linkedin.svg";
import github from "./github.svg";
import mail from "./mail.svg";

export default function AppFooter() {
  return (
    <>
      <footer className={`bottom-0 ${styles.footer}`}>
        <div className="pb-4"></div>
        <div className="flex justify-center text-sm">
          Let&apos;s stay in touch!
        </div>
        <div className="flex justify-center">
          <ActionIcon
            imgSrc={linkedin}
            href="https://www.linkedin.com/in/gloriawyang"
          />
          <ActionIcon imgSrc={github} href="https://github.com/gloriayang07" />
          <ActionIcon imgSrc={mail} href="mailto:ygloria910@gmail.com" />
        </div>
      </footer>
    </>
  );
}
