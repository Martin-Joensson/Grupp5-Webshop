import { ProductList } from "@/components/customer/products/ProductList";
import { getProducts } from "./lib/api";
import { Pagination } from "./components/customer/Pagination";
import Background from "@/design/assets/splash2.svg";
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
  const { page: currentPage, limit: currentLimit = DEFAULT_LIMIT } =
    await searchParams;
  const urlParams = createUrlSearchParams(await searchParams);

  const { products, total, page, pages, limit }: ProductsResponse =
    await getProducts({
      page: currentPage,
      limit: currentLimit,
      expand: ["category"],
    });

  return (
    <main className="min-h-screen">
      <Background className="fixed -inset-1 top-[30%] text-soft/40 rotate-40 " />
      <p className="bg-brand-offwhite text-brand-lightblue font-accent text-2xl">
        Nagare
      </p>
      <div className="flex flex-1 flex-col max-w-7xl mx-auto px-6">
        <h1 className="h1 text-primary self-center"> Nagare Webshop </h1>

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
