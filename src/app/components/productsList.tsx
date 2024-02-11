import { getProducts } from "../api/getProducts";
import { ProductCard } from "./productCard";
import styles from "../styles/productList.module.css";

export const ProductsList = async () => {
  const products = await getProducts();
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard productRecord={product} />
      ))}
    </div>
  );
};
