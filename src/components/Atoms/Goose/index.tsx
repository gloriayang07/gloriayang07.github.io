import styles from "./styles.module.css";
export default function Goose({ hideGoose }: { hideGoose: boolean }) {
  return (
    <div hidden={hideGoose} className={`absolute bottom-[15%] ${styles.path}`}>
      <div
        className={`w-[50px] h-[80px] bg-no-repeat bg-cover z-50 fixed bottom-5% ${styles.goose}`}
      />
    </div>
  );
}
