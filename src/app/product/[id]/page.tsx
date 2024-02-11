import { getProductById } from "@/app/api/getProducts";
import ProductImage from "@/app/components/productImage";
import styles from "../../styles/productPage.module.css";
export default async function ({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id);
  const product = await getProductById(id);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.productCard__img}>
          <ProductImage src={product.image.src} width={600} height={600} />
        </div>
        <div className={styles.info}>
          <h3>
            <strong>id: </strong>
            {product.product.id}
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: product.product.bodyHtml }}
          ></div>
        </div>
      </div>
    </div>
  );
}
