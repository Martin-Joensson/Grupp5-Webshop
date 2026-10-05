import Link from "next/link";
import { Suspense } from "react";
import { Button } from "./components/customer/Button";
import { ProductList } from "@/components/customer/products/ProductList";
import FilterSection from "./components/customer/filter/FilterSection";
import type { Category } from "@/types";
import { getProducts, getCategories } from "@/lib/api";
import { Pagination } from "./components/customer/Pagination";
import { ProductsResponse } from "./types";
import { createUrlSearchParams } from "./lib/utils";
import LimitDropDown from "./components/customer/LimitDropDown";

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
  } = await searchParams;
  const urlParams = createUrlSearchParams(await searchParams);

  const { products, total, page, pages, limit }: ProductsResponse =
    await getProducts({
      page: currentPage,
      limit: currentLimit,
      expand: ["category"],
      filter: {
        category: { slug: category },
        title: { contains: search, mode: "insensitive" },
      },
    });

  const allCategories: Category[] = await getCategories();

  return (
    <div>
      <p className="bg-brand-offwhite text-brand-lightblue font-accent text-2xl">
        Nagare
      </p>
      <h1 className="text-3xl font-accent"> Webshop Home page </h1>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <div className="bg-brand-almostblack text-brand-offwhite">Color</div>
      <div className="bg-brand-golden text-brand-offwhite">Color</div>
      <div className="bg-brand-darkblue text-brand-offwhite">Color</div>
      <div className="bg-brand-lightblue text-brand-offwhite">Color</div>
      <div className="bg-brand-sand text-brand-offwhite">Color</div>
      <div className="bg-brand-offwhite text-brand-almostblack">Color</div>
      <div className="bg-brand-red text-brand-offwhite">Color</div>
      <div className="bg-brand-almostblack text-brand-offwhite">Color</div>

      <Button variant="primary">Click me</Button>

      <Button variant="primary">Click me</Button>

      {/* Temporay stuff above */}

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

      {/* Temporary links below */}
      <br />
      <Link href="/product/id" className="underline">
        {" "}
        Go to product details page{" "}
      </Link>
      <br />
      <Link href="/cart" className="underline">
        {" "}
        Go to Cart page{" "}
      </Link>
      <br />
      <Link href="/admin" className="underline">
        {" "}
        Go to Admin page{" "}
      </Link>
    </div>
  );
}
