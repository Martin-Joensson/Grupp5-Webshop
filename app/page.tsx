import { Suspense } from "react";
import Background from "@/design/assets/splash2.svg";

import type { ProductsResponse } from "@/types";
import { getProducts, getCategories, GetProductsOptions } from "@/lib/api";
import { createUrlSearchParams, orderBy } from "./lib/utils";

import { ProductList } from "@/components/customer/products/ProductList";
import { Pagination } from "./components/customer/Pagination";
import LimitDropDown from "./components/customer/LimitDropDown";
import FilterSection from "@/components/customer/FilterSection";
import { Category } from "./generated/prisma/browser";

const DEFAULT_LIMIT = 12;

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{
    [key: string]: string | undefined;
  }>;
}) {
  const {
    page: currentPage,
    limit: currentLimit = DEFAULT_LIMIT,
    category,
    search,
    sort,
    stock,
  } = await searchParams;
  const urlParams = createUrlSearchParams(await searchParams);
  const apiQuery: GetProductsOptions = {
    page: currentPage,
    limit: currentLimit,
    expand: ["category"],
    filter: {
      category: { slug: category },
      title: { contains: search, mode: "insensitive" },
      stock: { gte: stock ? 1 : 0 },
    },
  };
  if (orderBy(sort)) {
    apiQuery.orderBy = orderBy(sort);
  }

  const { products, total, page, pages, limit }: ProductsResponse =
    await getProducts(apiQuery);

  const allCategories: Category[] = await getCategories();

  return (
    <main className="min-h-screen">
      <Background className="fixed -z-10 -inset-1 top-[30%] text-soft/40 rotate-40 " />
      <p className="bg-brand-offwhite text-brand-lightblue font-accent text-2xl">
        Nagare
      </p>
      <div className="flex flex-1 flex-col max-w-7xl mx-auto px-6">
        <h1 className="h1 text-primary self-center"> Nagare Webshop </h1>

        <Suspense>
          {/* Add skeleton filter section as fallback */}
          <FilterSection categories={allCategories} />
        </Suspense>

        <div className="flex justify-center items-center gap-4">
          {pages > 1 && (
            <Pagination
              page={page}
              pages={pages}
              total={total}
              limit={limit}
              urlParams={urlParams}
            />
          )}
          <LimitDropDown currentLimit={Number(currentLimit)} />
        </div>
        <ProductList products={products} />
        <div className="flex justify-center items-center gap-4">
          {pages > 1 && (
            <Pagination
              page={page}
              pages={pages}
              total={total}
              limit={limit}
              urlParams={urlParams}
            />
          )}
          <LimitDropDown currentLimit={Number(currentLimit)} />
        </div>
      </div>
    </main>
  );
}
