import React from "react";
import styles from "./styles.module.css";

interface ContainerProps {
  children: React.ReactNode;
}
export default function Container(props: ContainerProps) {
  return <div className={styles.container} {...props} />;
}
