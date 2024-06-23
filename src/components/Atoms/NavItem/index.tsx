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
  const image = <Image src={plant} alt="logo" className={styles.iconOuter} />;
  return (
    <nav>
      <Link href={href} onClick={onClick}>
        <div className={`${styles.container} flex p-2 text-nowrap`}>
          {image}
          <div className="p-2 inline-block relative text-black cursor-pointer">
            {label}
          </div>
        </div>
      </Link>
    </nav>
  );
}
