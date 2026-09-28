import { FilterCard } from "../components/FilterCard";
import type { Category, ProductsResponse, Stats } from "../types";
import { ProductList } from "@/components/ProductList";
import { SearchBar } from "../components/SearchBar";
import { Pagination } from "../components/Pagination";
import { createUrlSearchParams } from "../lib/utils";
import { getAvailabilityStats, getCategories, getProducts } from "@/lib/api";
import { ProductWhereInput } from "@/generated/prisma/models";

const defaultLimit = "6";
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

  // we use the fetch() method to get the products from the API
  // in this fetch we sort using _sort and _order and we limit the number of products using _limit
  // we also use _expand to get the relational category data
  // we can use the other destructed variables like page, total and so on to create pagination or show info
  const {
    page: currentPage = "1",
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

  console.log(filter);

  const { products, total, page, pages, limit }: ProductsResponse =
    await getProducts({
      page: currentPage,
      expand: ["category"],
      filter: filter,
    });

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
