import React from "react";
import styles from "./styles.module.css";

interface ContainerProps {
  children: React.ReactNode;
}
export default function Container(props: ContainerProps) {
  return (
    <div
      className={`w-full px-16 pt-12 flex justify-center items-center ${styles.container}`}
      {...props}
    />
  );
}
