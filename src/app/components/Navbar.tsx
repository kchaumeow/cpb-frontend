import Link from "next/link";
import styles from "../styles/navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <h1>CPB</h1>
      </div>
      <div>
        <h1>Shopchik</h1>
      </div>
      <Link href={"/"}>
        <h1>Main page</h1>
      </Link>
    </div>
  );
}
