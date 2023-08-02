import React from "react";
import styles from "./styles.module.css";

export function Divider({ className }: { className?: string }) {
  return <div className={`${styles.divider} ${className}`} />;
}
