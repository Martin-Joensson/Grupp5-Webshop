"use server";
import { DEFAULT_LIMIT, getOrderBy } from "./utils";
import { prisma } from "@/db";

const API_URL = "http://localhost:4000";
import {
  ProductInclude,
  ProductOrderByWithRelationInput,
  ProductWhereInput,
} from "@/generated/prisma/models";
import { Category, PrismaProduct, ProductsResponse, Stats } from "@/types";

interface SimpleProduct {
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  categoryId: number;
  brand?: string;
  stock?: number;
}

interface ProductFilters {
  searchTerm?: string;
  category?: string;
  stock?: boolean;
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

export async function getJsonProducts(params: URLSearchParams) {
  return await fetch(`${API_URL}/products/?${params.toString()}`).then((res) =>
    res.json(),
  );
}

interface GetProductsOptions {
  page?: number | string;
  limit?: number | string;
  expand?: string[];
  orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[];
  filter?: ProductWhereInput;
}

interface GetProductsOptionsV2 {
  page?: number | string;
  limit?: number | string;
  expand?: string[];
  orderBy?: string;
  filter?: ProductFilters;
}

interface PrismaQuery {
  skip: number;
  take: number;
  orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[];
  include?: ProductInclude;
  where?: ProductWhereInput;
}

export async function getProducts(
  options: GetProductsOptionsV2 = {},
): Promise<ProductsResponse> {
  const {
    limit = DEFAULT_LIMIT,
    page = 1,
    orderBy,
    expand = [],
    filter = {},
  } = options;

  const sort = getOrderBy(orderBy);
  const queryFilters: ProductWhereInput = {};

  if (filter.category) {
    queryFilters.categoryId = Number(filter.category);
  }

  if (filter.searchTerm) {
    queryFilters.OR = [
      {
        title: {
          contains: filter.searchTerm,
          mode: "insensitive",
        },
      },
      {
        description: {
          contains: filter.searchTerm,
          mode: "insensitive",
        },
      },
    ];
  }

  if (filter.stock) {
    queryFilters.stock = {
      gt: 0,
    };
  }

  const total: number = await prisma.product.count({ where: queryFilters });
  const pages: number = Math.ceil(total / Number(limit));

  // Pagination and sorting
  const query: PrismaQuery = {
    skip: (Number(page) - 1) * Number(limit),
    take: Number(limit),
    orderBy: sort,
    where: queryFilters,
  };

  // Optionally include related records e.g. category, reviews.
  if (expand !== undefined && expand.length > 0) {
    query.include = Object.fromEntries(expand.map((entry) => [entry, true]));
  }

  // Fetch products.
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
