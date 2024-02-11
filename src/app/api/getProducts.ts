import { ProductDTO } from "../../../types";

export async function getProducts(): Promise<ProductDTO[]> {
  return (await fetch(process.env.GET_PRODUCTS)).json();
}

export async function getProductById(
  id: string
): Promise<{
  product: { id: string; bodyHtml: string };
  image: { productId: string; src: string };
}> {
  return (
    await fetch(
      process.env.GET_PRODUCT_BY_ID + "?" + new URLSearchParams({ id: id })
    )
  ).json();
}
