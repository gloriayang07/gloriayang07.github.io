import styles from "./styles.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ExpeirenceCardProps {
  imgSrc: string;
  href: string;
  description: string;
  summary: {
    title: string;
    duration: string;
    skills: string;
  };
}

export function ExperienceCard(props: ExpeirenceCardProps) {
  const { imgSrc, href, summary, description } = props;
  return (
    <div className={`pb-[4rem] ${styles.cardContainer}`}>
      <div className={`relative ${styles.cardOuter}`}>
        <div className={`${styles.cardInner}`}>
          <div className="container">
            <div className="bg-white pt-4 ">
              <Link
                href={href}
                target="_blank"
                className="flex justify-content-between row"
              >
                <div className="col-12 col-sm-6 col-md-3 pb-4">
                  <div className="block"></div>
                  <Image src={imgSrc} width={200} alt="" />
                </div>
                <div className="col-12 col-sm-6 col-md-3 pb-4 items-center flex">
                  <div>
                    <h2 className="bold">{summary.title}</h2>
                    <h2 className="italic">{summary.duration}</h2>
                    <h2 className="text-nowrap">{summary.skills}</h2>
                  </div>
                </div>
                <div className="col pb-4 items-center flex">
                  <h2>{description}</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
