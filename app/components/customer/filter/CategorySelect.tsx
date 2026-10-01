"use client";

import { useSearchParams } from "next/navigation";
import type { Category } from "@/types";
import { updateFilter } from "@/utils/updateFilter";

export default function CategorySelect( {categories}: {categories: Category[]} )
{
    const searchParams = useSearchParams();

    const category = searchParams.get("category");

    return(
        <>
        <label htmlFor="category-filter" className="sr-only"> Choose product category </label>

        <select id="category-filter" name="categoryId" defaultValue={category ?? ""} className="border p-2 w-full"> {/* {inputFieldStyle} */}
            <option value="" > Category... </option>

            {
                categories.map((category) => (

                <option key={category.id} value={category.slug}>
                    {category.name}
                </option>

                ))
            }
        </select>
        </>
    );
}