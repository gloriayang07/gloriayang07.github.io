"use client";
import React from "react";
import styles from "./styles.module.css";
import profile from "./profile.png";
import Image from "next/image";
import { useViewportWidth } from "@/hooks";
import classNames from "classnames";

export default function HomeView() {
  const isMobile = useViewportWidth();

  return (
    <>
      <div className="row">
        <span
          className={classNames(
            `flex col-12 col-md-5 p-0 ${styles.fadeInBottom}`,
            {
              [styles.divider]: !isMobile,
            }
          )}
        >
          <div className="flex items-center">
            <Image className={styles.profile} src={profile} alt="" />
          </div>
        </span>
        <div
          className={`flex col-12 col-md-7 p-3 z-0 text-base items-center ${styles.bio}`}
        >
          <div>
            <p className="pb-4">
              Hi! My name is Gloria and I am a software engineer based out of
              New York. I am deeply passionate about promoting equity and
              diversity in tech. Currently, I work at{" "}
              <span className="bold">TikTok as a frontend engineer</span>. As a
              curious learner, I am always striving to learn the intricacies
              involved in web dev, from bundle configurations to building
              components.
            </p>
            <p className="pb-4">
              I studied
              <span className="bold">
                {" "}
                Linguistics and Computer Science at UCLA
              </span>
              . In studying the two fields together, I have learned how the
              seemingly independent concepts of language can be explored at a
              deeper level to relate to the logical foundation of computer
              science (fun fact: the two are WAY more intertwined than just
              NLP!).
            </p>
            <p className="pb-4">
              Outside of work, I am a volunteer programmer for the Endangered
              Language Alliance. We are working on digitizing archives to
              preserve less spoken languages and make them more accessible to
              all. Additionally, I am an avid climber, occasional boxer and
              amateur seamstress.
            </p>
            <p>Stay tuned to see what else I'm up to!</p>
          </div>
        </div>
      </div>
    </>
  );
}
