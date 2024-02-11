import { ProductCard } from "./productCard";
import styles from "../styles/productList.module.css";
import { ProductDTO } from "../../../types";

export const ProductsList = ({ products }: { products: ProductDTO[] }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard productRecord={product} key={product.product.id} />
      ))}
    </div>
  );
};
