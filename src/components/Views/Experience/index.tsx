import React from "react";
import ibm from "./ibm.svg";
import gs from "./gs.svg";
import tiktok from "./tiktok.svg";
import { ExperienceCard } from "../../Molecules/ExperienceCard";

export default function ExperienceView() {
  return (
    <div className="block p-12">
      <ExperienceCard
        imgSrc={tiktok}
        href="https://www.tiktok.com/"
        summary={{
          title: "Frontend Engineer",
          duration: "Dec. 2023 - present",
          skills: "Typescript, CSS, Figma",
        }}
        description="Establishing development standards in monorepo technology and ES6 to create tailored business solutions"
      />
      <ExperienceCard
        imgSrc={gs}
        href="https://www.goldmansachs.com/"
        summary={{
          title: "Software Engineer",
          duration: "July 2022 - Dec. 2023",
          skills: "Typescript, NextJS, Contentful",
        }}
        description="Frontend development with on micro-frontend architecture and SSG to produce progressive web applications"
      />
      <ExperienceCard
        imgSrc={ibm}
        href="https://www.ibm.com/"
        summary={{
          title: "Software Engineer",
          duration: "Aug. 2021 - June 2022",
          skills: "Perl, Docker, Redhat, openShift",
        }}
        description="Research + implementation of containerized application development for scalable data interfaces"
      />
      <ExperienceCard
        imgSrc={gs}
        href="https://www.goldmansachs.com/"
        summary={{
          title: "Engineering Summer Analyst",
          duration: "June 2021 - Aug. 2021",
          skills: "React, Java, MongoDB",
        }}
        description="Fullstack development of preference storage for personalized user experience"
      />
    </div>
  );
}
