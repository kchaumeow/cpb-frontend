export type ProductDTO = {
  product: { id: string; bodyHtml: string };
  images: { productId: string; src: string; id: number }[];
};
