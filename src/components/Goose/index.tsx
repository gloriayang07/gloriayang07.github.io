import styles from "./styles.module.css";
export default function Goose({ hideGoose }: { hideGoose: boolean }) {
  return (
    <div hidden={hideGoose} className={styles.path}>
      <div className={styles.goose} />
    </div>
  );
}
