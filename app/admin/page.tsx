import { FilterCard } from "@/components/admin/FilterCard";
import type { ProductsResponse, Stats } from "@/types";
import { ProductList } from "@/components/admin/ProductList";
import { SearchBar } from "@/components/admin/SearchBar";
import { Pagination } from "@/components/admin/Pagination";
import { createUrlSearchParams } from "@/lib/utils";
import { getAvailabilityStats, getCategories, getProducts } from "@/lib/api";
import { ProductWhereInput } from "@/generated/prisma/models";

import { getServerSession } from "next-auth";
import { authOptions } from "@/../auth";
import { redirect } from "next/navigation";
import { Category } from "@/generated/prisma/browser";

export default async function AdminHomePage({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | undefined;
  }>;
}) {
  const categories: Category[] = await getCategories();

  const stock = ["In Stock", "Low Stock", "Out of Stock"];

  const {
    total: totalStock,
    lowStock,
    outOfStock,
    inStock,
  }: Stats = await getAvailabilityStats();

  const {
    page: currentPage,
    category: categorySlug = "",
    stock: stockStatus,
    search = "",
  } = await searchParams;

  const urlParams = createUrlSearchParams(await searchParams);

  const selectedCategory = categories.find(
    (category) => category.slug === categorySlug,
  );

  const filter: ProductWhereInput = {};
  if (selectedCategory !== undefined) {
    filter.categoryId = selectedCategory?.id;
  }
  if (stockStatus !== undefined) {
    filter.availabilityStatus = stockStatus;
  }
  if (search !== undefined) {
    filter.title = { contains: search, mode: "insensitive" };
  }

  const { products, total, page, pages, limit }: ProductsResponse =
    await getProducts({
      page: currentPage,
      expand: ["category"],
      filter: filter,
    });

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <main className="max-w-7xl w-full mx-auto p-4 flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <FilterCard category="products" value={totalStock} />
        <FilterCard category="instock" value={inStock} />
        <FilterCard category="lowstock" value={lowStock} />
        <FilterCard category="outofstock" value={outOfStock} />
      </div>
      <SearchBar categories={categories} stock={stock} />
      <section className="rounded-lg border-gray-300 border overflow-hidden">
        <ProductList products={products} />
        <Pagination
          page={page}
          pages={pages}
          total={total}
          limit={limit}
          urlParams={urlParams}
        />
      </section>
    </main>
  );
}
