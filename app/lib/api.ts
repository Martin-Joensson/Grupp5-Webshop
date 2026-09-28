"use server";

import { prisma } from "@/db";
import { Category, Product, ProductsResponse } from "@/types";

const DEFAULT_LIMIT = 6;

interface SimpleProduct {
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  categoryId: number;
  brand?: string;
  stock?: number;
}

export async function createCategory(category: Omit<Category, "id">) {
  await prisma.category.create({ data: category });
}

export async function getCategories() {
  return await prisma.category.findMany();
}

export async function createProduct(product: SimpleProduct) {
  await prisma.product.create({
    data: product,
  });
}

export async function updateProduct(id: number, product: SimpleProduct) {
  await prisma.product.update({
    where: { id: id },
    data: product,
  });
}

export async function deleteProduct(id: number) {
  await prisma.product.delete({ where: { id: id } });
}

export async function getProduct(id: number) {
  return await prisma.product.findUnique({ where: { id: id } });
}

interface GetProductsOptions {
  page?: number | string;
  limit?: number | string;
  sort?: string;
  order?: "asc" | "desc";
  expand?: string | string[];
  [key: string]: string | string[] | number | boolean | undefined;
}

export async function getProducts(
  options: GetProductsOptions = {},
): Promise<ProductsResponse> {
  const {
    limit = DEFAULT_LIMIT,
    page = 1,
    sort = "id",
    order = "asc",
  } = options;

  const total: number = await prisma.product.count();
  const pages: number = Math.ceil(total / Number(limit));

  const orderBy: Record<string, string> = {};
  orderBy[sort] = order;

  const dbProducts = await prisma.product.findMany({
    skip: (Number(page) - 1) * Number(limit),
    take: Number(limit),
    orderBy: orderBy,
  });

  const products: Product[] = [];

  Object.assign(products, dbProducts);
  return {
    products: products,
    total: total,
    limit: Number(limit),
    page: Number(page),
    pages: pages,
  };
}
