import { Prisma } from "./generated/prisma/client";

export interface Stats {
  total: number;
  inStock: number;
  lowStock: number;
  outOfStock: number;
}

export interface ProductsResponse {
  products: ProductWithIncludes[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export type ProductWithIncludes = Prisma.ProductGetPayload<{
  include: { category: true; reviews: true };
}>;
