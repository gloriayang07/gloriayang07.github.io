"use client";
import gooseHide from "./gooseHide.svg";
import gooseShow from "./gooseShow.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function GooseButton({
  className,
  onClick,
}: {
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const [hideGoose, setHideGoose] = useState(false);

  useEffect(() => {
    const gooseState = localStorage.getItem("goose");
    if (gooseState !== undefined) {
      setHideGoose(gooseState === "true");
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem("goose", (!hideGoose).toString());
    setHideGoose(!hideGoose);
  };

  return (
    <>
      <div className={`${className} flex p-2`}>
        <Image src={hideGoose ? gooseHide : gooseShow} alt="logo" />
        <button onClick={onClick} className="pl-2">
          {hideGoose ? "Show" : "Hide"} goose
        </button>
      </div>
    </>
  );
}
