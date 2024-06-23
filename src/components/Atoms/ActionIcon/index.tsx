"use client";
import styles from "./styles.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ActionIconProps {
  imgSrc: string;
  href: string;
}

export default function ActionIcon(props: ActionIconProps) {
  const { href, imgSrc } = props;
  return (
    <Link
      href={href}
      target="_blank"
      className={`p-2 m-1 rounded-full transition duration-450 ${styles.iconOuter}`}
      onMouseLeave={(e) => e.currentTarget.classList.add(styles.bounce)}
    >
      <Image className={styles.image} src={imgSrc} alt="" />
    </Link>
  );
}
