import Link from "next/link";
import styles from "./styles.module.css";
import plant from "./plant.svg";
import Image from "next/image";
interface NavItemProps {
  href: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default function NavItem({ href, label, onClick }: NavItemProps) {
  return (
    <nav>
      <Link href={href} onClick={onClick}>
        <div className="flex p-2 text-nowrap">
          <Image src={plant} alt="logo" />
          <div className={styles.navItem}>{label}</div>
        </div>
      </Link>
    </nav>
  );
}
