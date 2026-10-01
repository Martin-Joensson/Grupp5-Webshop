

export default function FilterSection()
{
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
                    <label htmlFor="category-filter" className="sr-only"> Choose product category </label>

                    <select id="category-filter" name="categoryId" defaultValue="" className="border p-2 w-full">
                        <option value="" disabled > Category... </option>

                        <optgroup label="Clothing & Fashion">
                            <option value="8"> Men{`'`}s Shirts </option>
                            <option value="9"> Men{`'`}s Shoes </option>
                            <option value="10"> Men{`'`}s Watches </option>

                            <option value="20"> Woman{`'`}s Bags </option>
                            <option value="21"> Woman{`'`}s Dresses </option>
                            <option value="22"> Woman{`'`}s Jewellery </option>
                            <option value="23"> Woman{`'`}s Shoes </option>
                            <option value="24"> Woman{`'`}s Watches </option>

                            <option value="16"> Sunglasses </option>
                            <option value="18"> Tops </option>
                            <option value="1"> Beauty </option>
                            <option value="2"> Fragrance </option>
                            <option value="13"> Skin Care </option>
                        </optgroup>

                        <optgroup label="Electronics">
                            <option value="7" > Laptops </option>
                            <option value="14"> Smartphones </option>
                            <option value="17"> Tablets </option>
                            <option value="11"> Mobile Accessories </option>
                            <option value="25"> Gaming Hardware </option>
                        </optgroup>

                        <optgroup label="Home & Kitchen">
                            <option value="3"> Furniture </option>
                            <option value="5"> Home Decoration </option>
                            <option value="6"> Kitchen Accessories </option>
                            <option value="4"> Groceries </option>
                        </optgroup>

                        <optgroup label="Other">
                            <option value="15"> Sports Accessories </option>
                            <option value="19"> Vehicle </option>
                            <option value="12"> Motorcycle </option>
                        </optgroup>
                    </select>
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