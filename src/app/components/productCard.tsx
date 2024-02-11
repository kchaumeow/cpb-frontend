import Link from "next/link";
import { ProductDTO } from "../../../types";
import styles from "../styles/productCard.module.css";
import ProductImage from "./productImage";
interface ProductCardProps {
  productRecord: ProductDTO;
}

export const ProductCard = ({ productRecord }: ProductCardProps) => {
  const urlId = encodeURIComponent(productRecord.product.id);
  return (
    <Link href={`/product/${urlId}`}>
      <div className={styles.productCard} role="gridcell">
        <ProductImage
          src={productRecord.images[0].src}
          width={200}
          height={200}
        />
        <div>
          <div
            className={styles.productCard__html}
            dangerouslySetInnerHTML={{ __html: productRecord.product.bodyHtml }}
          ></div>
          {"..."}
        </div>
      </div>
    </Link>
  );
};
