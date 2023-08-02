import { Divider } from "../HDivider";
import ActionIcon from "./ActionIcon";
import styles from "./styles.module.css";
import React from "react";
import linkedin from "./linkedin.svg";
import github from "./github.svg";
import mail from "./mail.svg";

export default function AppFooter() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="p-4">
          <Divider />
        </div>
        <div className="flex justify-center text-sm">Let's stay in touch!</div>
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
