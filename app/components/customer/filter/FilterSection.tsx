"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, Suspense } from "react";
import type { Category } from "@/types";
import { updateFilterCustomer } from "@/utils/updateFilter";
import Search from "@/components/admin/Search";


interface SortOrderOptions {
    id: number;
    name: string; //what the user sees
    slug: string; //what the system uses
}

const sortingOptions: SortOrderOptions[] = [
    { id: 1, name: "Product title (A - Z)", slug: "title-asc" },
    { id: 2, name: "Product title (Z - A)", slug: "title-desc" },
    { id: 3, name: "Ratings (high - low)", slug: "rating-desc" },
    { id: 4, name: "Price (low - high)", slug: "price-asc" },
    { id: 5, name: "Price (high - low)", slug: "price-desc" },
    { id: 6, name: "Highest discount %", slug: "discount-percent-desc" },
    { id: 7, name: "Highest discount €", slug: "discount-euro-desc" },
]


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
                    <Suspense>
                        <Search />
                    </Suspense>
                </div>

                {/* Form group: Category select */}
                <div className="w-1/4">
                    <label htmlFor="category-filter" className="sr-only"> Choose product category </label>

                    <select id="category-filter" name="categoryId" defaultValue={category ?? ""} className={inputFieldStyle}
                        onChange={(event) => changeFilter(event, "category")}>
                        <option value="" > All Categories </option>

                        {
                            categories.map((category) => (

                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>

                            ))
                        }
                    </select>
                </div>

                {/* Form group: Sort order select */}
                <div className="w-1/4">
                    <label htmlFor="sorting-order" className="sr-only"> Choose sorting order </label>

                    <select id="sorting-order" name="sort-order" defaultValue="id-asc" className={inputFieldStyle}
                        onChange={(event) => changeFilter(event, "sortOrder")} >

                        <option value=""> Sort by... </option>
                        {
                            sortingOptions.map((option) => (
                                <option key={option.id} value={option.slug} >
                                    {option.name}
                                </option>
                            ))
                        }
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
    function changeFilter( event: ChangeEvent<HTMLSelectElement>, filter: "category" | "stock"  | "sortOrder" )
    {
        const params = updateFilterCustomer(
            searchParams,
            filter,
            event.currentTarget.value,
        );

        router.replace(`/?${params.toString()}`, { scroll: false });
    }
}