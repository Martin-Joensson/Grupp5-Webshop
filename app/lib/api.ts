"use server";

import { prisma } from "@/db";
import {
  ProductInclude,
  ProductOrderByWithRelationInput,
  ProductWhereInput,
} from "@/generated/prisma/models";
import { Category, PrismaProduct, ProductsResponse, Stats } from "@/types";

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
  expand?: string[];
  orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[];
  filter?: ProductWhereInput;
}

interface PrismaQuery {
  skip: number;
  take: number;
  orderBy: ProductOrderByWithRelationInput;
  include?: ProductInclude;
  where?: ProductWhereInput;
}

export async function getProducts(
  options: GetProductsOptions = {},
): Promise<ProductsResponse> {
  const {
    limit = DEFAULT_LIMIT,
    page = 1,
    orderBy = { id: "asc" },
    expand,
    filter,
  } = options;

  const total: number = await prisma.product.count({ where: filter });
  const pages: number = Math.ceil(total / Number(limit));

  const query: PrismaQuery = {
    skip: (Number(page) - 1) * Number(limit),
    take: Number(limit),
    orderBy: orderBy,
  };

  if (expand !== undefined && expand.length > 0) {
    query.include = Object.fromEntries(expand.map((entry) => [entry, true]));
  }

  if (filter !== undefined) {
    query.where = filter;
  }

  const dbProducts = await prisma.product.findMany(query);
  const products: PrismaProduct[] = [];
  Object.assign(products, dbProducts);

  return {
    products: products,
    total: total,
    limit: Number(limit),
    page: Number(page),
    pages: pages,
  };
}

// https://www.prisma.io/docs/orm/v7/reference/prisma-client-reference
// https://www.prisma.io/docs/orm/v7/reference/prisma-client-reference#filter-conditions-and-operators
