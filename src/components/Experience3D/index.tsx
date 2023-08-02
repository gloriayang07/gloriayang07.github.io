import { Heading } from "../Heading";
import styles from "./styles.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ibm from "./ibm.svg";
import gs from "./gs.svg";

export default function ExperienceView() {
  return (
    <div className={styles.bg}>
      <Link
        href="https://www.goldmansachs.com/"
        target="_blank"
        className={styles.card1}
      >
        <Image src={gs} alt="" />

        <h2>July 2022 - present</h2>
        <h2>Software Engineer</h2>
        <div>Typescript, NextJS, Contentful</div>
      </Link>
      <Link href="https://www.ibm.com/" className={styles.card2}>
        <Image src={ibm} alt="" />
        <h2>Aug. 2021 - June 2022</h2>
        <h2>Back-end Developer</h2>
        <div>Perl, Docker, Redhat, openShift</div>
      </Link>

      <Link
        href="https://www.goldmansachs.com/"
        target="_blank"
        className={styles.card3}
      >
        <Image src={gs} alt="" />

        <h2>June 2021 - Aug. 2021</h2>
        <h2>Engineering Summer Analyst</h2>
        <div>React, Java, MongoDB</div>
      </Link>
    </div>
  );
}
