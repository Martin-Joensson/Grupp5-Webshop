"use server";

import { prisma } from "@/db";
import { Category, Product, ProductsResponse, Stats } from "@/types";

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

export async function getAvailabilityStats(): Promise<Stats> {
  const total = await prisma.product.count();
  const counts = await prisma.product.groupBy({
    by: ["availabilityStatus"],
    _count: true,
  });

  const keyMap = new Map([
    ["In Stock", "inStock"],
    ["Low Stock", "lowStock"],
    ["Out of Stock", "outOfStock"],
  ]);

  const entries = counts.map((group) => {
    const k = group.availabilityStatus;
    const v = group._count;
    return [keyMap.get(String(k)), v];
  });

  const stats = Object.fromEntries(entries);
  stats.total = total;

  return stats;
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
  expand?: string[];
  [key: string]: string | string[] | number | boolean | undefined;
}

interface DbQuery {
  skip: number;
  take: number;
  orderBy: Record<string, string>;
  include?: Record<string, boolean>;
}

export async function getProducts(
  options: GetProductsOptions = {},
): Promise<ProductsResponse> {
  const {
    limit = DEFAULT_LIMIT,
    page = 1,
    sort = "id",
    order = "asc",
    expand,
  } = options;

  const total: number = await prisma.product.count();
  const pages: number = Math.ceil(total / Number(limit));

  const orderBy: Record<string, string> = {};
  orderBy[sort] = order;

  const query: DbQuery = {
    skip: (Number(page) - 1) * Number(limit),
    take: Number(limit),
    orderBy: orderBy,
  };

  if (expand !== undefined && expand.length > 0) {
    query.include = Object.fromEntries(expand.map((entry) => [entry, true]));
  }

  const dbProducts = await prisma.product.findMany(query);

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
