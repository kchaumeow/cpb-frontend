import styles from "./styles/page.module.css";
import { ProductsList } from "./components/productsList";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductsList />
    </main>
  );
}
