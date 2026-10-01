"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, Suspense } from "react";
import type { Category } from "@/types";
import { updateFilter } from "@/utils/updateFilter";
import Search from "@/components/admin/Search";


// Component function for the entiry Filter section
export default function FilterSection( {categories}: {categories: Category[]} )
{
    const searchParams = useSearchParams();
    const category = searchParams.get("category");
    const stockParam = searchParams.get("stock");
    const router = useRouter();

    const inputFieldStyle: string = "w-full px-3 py-2 border border-gray-300 rounded-md"; //"border p-2 w-full";

    return(
        <section className="mx-auto w-full max-w-5xl">
            <h2> Filter </h2>

            {/* Input field wrapper */}
            <form className="mb-3 py-3 flex justify-between items-center gap-3">

                {/* Form group: Search input */}
                <div className="w-1/3">
                    {/* <label htmlFor="search-input" className="sr-only" > Search for products </label>
                    <input type="search" id="search-input" name="query" placeholder="Search Products..."
                        className={inputFieldStyle} /> */}

                    <Suspense>
                        <Search />
                    </Suspense>
                </div>

                {/* Form group: Category select */}
                <div className="w-1/4">
                    <label htmlFor="category-filter" className="sr-only"> Choose product category </label>

                    <select id="category-filter" name="categoryId" defaultValue={category ?? ""} onChange={(event) => changeFilter(event, "category")}
                        className={inputFieldStyle}>
                        <option value="" > Category... </option>

                        {
                            categories.map((category) => (

                            <option key={category.id} value={category.slug}>
                                {category.name}
                            </option>

                            ))
                        }
                    </select>
                </div>

                {/* Form group: Sort order select */}
                <div className="w-1/4">
                    <label htmlFor="sorting-order" className="sr-only"> Choose sorting order </label>

                    <select id="sorting-order" name="sort-order" defaultValue="id-asc" className={inputFieldStyle} >
                        <option value="id-asc"> Sort by... </option>
                        <option value="title-asc"> Product title (A - Z) </option>
                        <option value="rating-desc"> Ratings (high - low) </option>
                        <option value="price-asc"> Price (low - high) </option>
                        <option value="price-desc"> Price (high - low) </option>
                        <option value="discount-percent-desc"> Highest discount % </option>
                    </select>
                </div>

                {/* Form group: Only in stock checkbox */}
                <div>
                    {/* <label className="p-2">
                        <input type="checkbox" name="only-in-stock" onChange={(event) => changeStockFilter(event, "stock")} />
                        <span> Only in stock </span>
                    </label> */}
                    <label htmlFor="only-in-stock" className="sr-only"> Choose by stock </label>
                    <select id="stock-filter" value={stockParam ?? ""} onChange={(event) => changeFilter(event, "stock")}
                        className="w-full sm:w-auto p-2 border border-gray-300  hover:bg-gray-200 active:bg-gray-300 rounded-md" >
                        <option value=""> All products </option>
                        <option value="In Stock"> Only in stock </option>
                    </select>
                </div>

            </form>
        </section>
    );
    // End of TSX return and main part fo FilterSection component


    // Function for handling a change to the category filter field.
    // Reused function from "app/components/admin/SearchBar.tsx"
    function changeFilter( event: ChangeEvent<HTMLSelectElement>, filter: "category" | "stock" )
    {
        const params = updateFilter(
            searchParams,
            filter,
            event.currentTarget.value,
        );

        router.replace(`/?${params.toString()}`);
    }

    // Function for handling a change to the Only in stock input checkbox.
    /* function changeStockFilter( event: ChangeEvent<HTMLInputElement>, filter: "category" | "stock" )
    {
        console.log(event);

        const params = updateFilter(
            searchParams,
            filter,
            event.currentTarget.value,
        );

        router.replace(`/?${params.toString()}`);
    } */
}