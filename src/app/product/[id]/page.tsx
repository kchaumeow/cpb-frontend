import { getProductById } from "@/app/api/getProducts";
export default async function ({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id);
  const product = await getProductById(id);
  return (
    <div>
      <div>{product.product.id}</div>
      <img src={product.image.src} alt={product.image.productId} />
    </div>
  );
}
