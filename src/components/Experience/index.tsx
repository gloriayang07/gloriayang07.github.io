import { Heading } from "../Heading";
import styles from "./styles.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ibm from "./ibm.svg";
import gs from "./gs.svg";
import { Divider } from "../VDivider";
import { ExperienceCard } from "./ExperienceCard";

export default function ExperienceView() {
  return (
    <div className="block p-12">
      {/* <img className={styles.img} src="https://picsum.photos/id/1022/200/200" /> */}
      {/* <div className={styles.cardOuter}>
        <div className={styles.cardInner}>
          <Link href="https://www.goldmansachs.com/" target="_blank">
            <Image src={gs} alt="" />

            <h2>July 2022 - present</h2>
            <h2>Software Engineer</h2>
            <div>Typescript, NextJS, Contentful</div>
          </Link>
        </div>
      </div> */}

      {/* <Link href="https://www.ibm.com/" className={styles.card2}>
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
      </Link> */}
      <ExperienceCard
        imgSrc={gs}
        href="https://www.goldmansachs.com/"
        summary={
          <div>
            <h2 className="bold">Software Engineer</h2>
            <h2 className="italic">July 2022 - present</h2>
            <h2 className="">Typescript, NextJS, Contentful</h2>
          </div>
        }
        description={
          <h2>
            Working on micro-frontend architecture and SSG to produce
            progressive web applications
          </h2>
        }
      />
      <ExperienceCard
        imgSrc={ibm}
        href="https://www.ibm.com/"
        summary={
          <div>
            <h2 className="bold">Software Engineer</h2>
            <h2 className="italic">Aug. 2021 - June 2022</h2>
            <h2 className="text-nowrap">Perl, Docker, Redhat, openShift</h2>
          </div>
        }
        description={
          <h2>
            Research + implementation of containerized application development
            for scalable data interfaces
          </h2>
        }
      />
      <ExperienceCard
        imgSrc={gs}
        href="https://www.goldmansachs.com/"
        summary={
          <div>
            <h2 className="bold">Engineering Summer Analyst</h2>
            <h2 className="italic">June 2021 - Aug. 2021</h2>
            <h2 className="text-nowrap">React, Java, MongoDB</h2>
          </div>
        }
        description={
          <h2>
            Fullstack development of preference storage for personalized user
            experience
          </h2>
        }
      />
    </div>
  );
}
