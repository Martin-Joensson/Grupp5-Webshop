
import type { Category } from "@/types";
import { getCategories } from "@/lib/api";
import CategorySelect from "./CategorySelect";


export default async function FilterSection()
{
    const allCategories: Category[] = await getCategories();

    return(
        <section className="mx-auto w-full max-w-5xl">
            <h2> Filter </h2>

            {/* Input field wrapper */}
            <form className="mb-3 py-3 flex justify-between items-center gap-3">

                {/* Form group: Search input */}
                <div className="w-1/3">
                    <label htmlFor="search-input" className="sr-only" > Search for products </label>
                    <input type="search" id="search-input" name="query" placeholder="Search Products..."
                        className="border p-2 w-full"/>
                </div>

                {/* Form group: Category select */}
                <div className="w-1/4">
                    <CategorySelect categories={allCategories} />
                </div>

                {/* Form group: Sort order select */}
                <div className="w-1/4">
                    <label htmlFor="sorting-order" className="sr-only"> Choose sorting order </label>

                    <select id="sorting-order" name="sort-order" defaultValue="id-asc" className="border p-2 w-full">
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
                    <label className="p-2">
                        <input type="checkbox" name="only-in-stock" />
                        <span> Only in stock </span>
                    </label>
                </div>

            </form>
        </section>
    );
}