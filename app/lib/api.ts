"use server";

import { prisma } from "@/db";
import { Product } from "@/generated/prisma/client";
import { Category } from "@/types";

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

export async function upsertProduct(id: number, product: Product) {
  const upsertProduct = await prisma.product.upsert({
    where: { id: id },
    update: product,
    create: product,
  });
  return upsertProduct;
}

export async function deleteProduct(id: number) {
  await prisma.product.delete({ where: { id: id } });
}

export async function getProduct(id: number) {
  return await prisma.product.findUnique({ where: { id: id } });
}

interface GetProductsOptions {
  page?: number;
  limit?: number;
  sort?: string;
  order?: string;
  expand?: string;
}
export async function getProducts(options: GetProductsOptions) {
  const { limit } = options;
  return await prisma.product.findMany({ take: limit });
}
