"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, Suspense } from "react";

import { updateFilterCustomer } from "@/utils/updateFilter";
import { sortingOptions } from "@/lib/utils";
import Search from "@/components/admin/Search";
import { Category } from "@/generated/prisma/browser";

// Component function for the entiry Filter section
export default function FilterSection({
  categories,
}: {
  categories: Category[];
}) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const stockParam = searchParams.get("stock");
  const router = useRouter();

  const inputFieldStyle: string =
    "w-full px-3 py-2 border border-gray-300 rounded-md bg-white";

  return (
    <section
      className="mx-auto w-full"
      aria-labelledby="filter-section-heading"
    >
      <h2 id="filter-section-heading" className="h3">
        {" "}
        Filter{" "}
      </h2>

      {/* Input field wrapper */}
      <form
        className="mb-3 py-3 flex justify-between items-center gap-3"
        onSubmit={(event) => event.preventDefault()}
      >
        {/* Form group: Search input */}
        <div className="w-1/3">
          <Suspense fallback={<div>Loading...</div>}>
            <Search />
          </Suspense>
        </div>

        {/* Form group: Category select */}
        <div className="w-1/4">
          <label htmlFor="category-filter" className="sr-only">
            {" "}
            Choose product category{" "}
          </label>

          <select
            id="category-filter"
            name="categoryId"
            defaultValue={categoryParam ?? ""}
            className={inputFieldStyle}
            onChange={(event) => changeFilter(event, "category")}
          >
            <option value=""> All Categories </option>

            {categories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Form group: Sort order select */}
        <div className="w-1/4">
          <label htmlFor="sorting-order" className="sr-only">
            {" "}
            Choose sorting order{" "}
          </label>

          <select
            id="sorting-order"
            name="sort-order"
            defaultValue="id-asc"
            className={inputFieldStyle}
            onChange={(event) => changeFilter(event, "sort")}
          >
            <option value=""> Sort by... </option>
            {sortingOptions.map((option) => (
              <option key={option.id} value={option.slug}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* Form group: Only in stock checkbox */}
        <div>
          <label htmlFor="stock-filter" className="sr-only">
            {" "}
            Choose by stock{" "}
          </label>

          <select
            id="stock-filter"
            value={stockParam ?? ""}
            onChange={(event) => changeFilter(event, "stock")}
            className="w-full sm:w-auto p-2 border border-gray-300  hover:bg-gray-200 active:bg-gray-300 rounded-md"
          >
            <option value=""> All products </option>
            <option value="in-stock"> Only in stock </option>
          </select>
        </div>
      </form>
    </section>
  );
  // End of TSX return and main part off FilterSection component

  // Function for handling a change to the category filter field.
  // Reused function from "app/components/admin/SearchBar.tsx"
  function changeFilter(
    event: ChangeEvent<HTMLSelectElement>,
    filter: "category" | "stock" | "sort",
  ) {
    const params = updateFilterCustomer(
      searchParams,
      filter,
      event.currentTarget.value,
    );

    router.replace(`/?${params.toString()}`, { scroll: false });
  }
}

