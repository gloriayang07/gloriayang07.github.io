"use client";
import React from "react";
import styles from "./styles.module.css";
export default function HomeView() {
  return (
    <>
      <div className="flex">
        {/* <div className={styles.typewriter}>
            <h1>fullstack engineer with frontend emphasis</h1>
          </div> */}
      </div>
      <div className="">
        <span className={`float-right p-2 ${styles.fadeInBottom}`}>
          <div className={styles.shapeOutline}>
            <div className={styles.shapeOutline2}>
              <div className={styles.shapeOutline3}>
                <div className={styles.spin}>
                  <div className={styles.shape}>
                    <div className={styles.bd} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
        <div className={styles.bio}>
          <p>
            Hi! My name is Gloria and I am a software engineer based out of New
            York. I am deeply passionate about promoting equity and diversity in
            tech. Currently, I work at{" "}
            <span className="bold">Goldman Sachs as a frontend developer</span>.
            As a curious learner, I am always striving to learn the intricacies
            involved in web dev, from bundle configurations to building
            components.
          </p>
          <p>
            I studied
            <span className="bold">
              {" "}
              Linguistics and Computer Science at UCLA
            </span>
            . In studying the two fields together, I have learned how the
            seemingly independent concepts of language can be explored at a
            deeper level to relate to the logical foundation of computer science
            (fun fact: the two are WAY more intertwined than just NLP!).
          </p>
          <p>
            Outside of work, I am a volunteer programmer for the Endangered
            Language Alliance. We are working on digitizing archives to preserve
            less spoken languages and make them more accessible to all.
            Additionally, I am an avid climber, occasional boxer and amateur
            seamstress.
          </p>
          <p>Stay tuned to see what else I’m up to!</p>
        </div>
      </div>
    </>
  );
}
