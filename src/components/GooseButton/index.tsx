"use client";
import gooseHide from "./gooseHide.svg";
import gooseShow from "./gooseShow.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function GooseButton({
  hideGoose,
  onClick,
}: {
  hideGoose?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <div className={`flex p-2`}>
        <Image src={hideGoose ? gooseHide : gooseShow} alt="logo" />
        <button onClick={onClick} className="pl-2">
          {hideGoose ? "Show" : "Hide"} goose
        </button>
      </div>
    </>
  );
}
