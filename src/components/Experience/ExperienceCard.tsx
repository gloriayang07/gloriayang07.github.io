import styles from "./styles.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ibm from "./ibm.svg";
import gs from "./gs.svg";
import { Divider } from "../VDivider";

interface ExpeirenceCardProps {
  imgSrc: string;
  href: string;
  summary: JSX.Element;
  description: JSX.Element;
}

export function ExperienceCard(props: ExpeirenceCardProps) {
  const { imgSrc, href, summary, description } = props;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardOuter}>
        <div className={styles.cardInner}>
          <div className="container">
            <div className="bg-white pt-4 ">
              <Link
                href={href}
                target="_blank"
                className="flex justify-content-between row"
              >
                <div className="col-12 col-sm-6 col-md-3 pb-4">
                  <div className="block"></div>
                  <Image src={imgSrc} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-3 pb-4 items-center flex">
                  {summary}
                </div>

                <div className="col pb-4 items-center flex">{description}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
