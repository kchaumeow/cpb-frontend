import styles from "./styles/page.module.css";
import { ProductsList } from "./components/productsList";
import { getProducts } from "./api/getProducts";

export default async function Home() {
  const products = await getProducts();
  return (
    <main className={styles.main}>
      <ProductsList products={products} />
    </main>
  );
}
