import styles from "./styles.module.css";

interface HeadingProps {
  children: React.ReactNode;
}
export function Heading(props: HeadingProps) {
  return <div className={styles.heading} {...props} />;
}
