import { ProductDTO } from "../../../types";

export async function getProducts(): Promise<ProductDTO[]> {
  return (await fetch(process.env.BACKEND_URL + "/products")).json();
}

export async function getProductById(id: string): Promise<{
  product: { id: string; bodyHtml: string };
  image: { productId: string; src: string };
}> {
  return (
    await fetch(
      process.env.BACKEND_URL +
        "/product-by-id?" +
        new URLSearchParams({ id: id })
    )
  ).json();
}
