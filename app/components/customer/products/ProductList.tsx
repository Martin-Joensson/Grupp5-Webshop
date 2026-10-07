// ProductList.tsx

import { ProductWithIncludes } from "@/types";
import ProductCard from "@/components/customer/products/ProductCard";

export const ProductList = ({
  products,
}: {
  products: ProductWithIncludes[];
}) => {
  return (
    <div className="mx-auto grid w-full grid-cols-1 md:grid-cols-[minmax(0,1fr)_2rem] items-start gap-x-1">
      <ul className="mx-auto grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 min-w-0">
        {products.map((product) => (
          <li key={product.id} className="min-w-0">
            <ProductCard
              id={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
              category={product.category}
              description={product.description}
              price={product.price}
            />
          </li>
        ))}
      </ul>
      <div className="hidden pt-5 min-h-50 h-[35%] max-h-100 px-5 justify-center rounded-br-4xl rounded-md bg-brand-darkblue cursor-default md:flex">
        <p className="[writing-mode:vertical-lr] text-xl tracking-widest text-white font-accent">
          PRODUCTS
        </p>
      </div>
    </div>
  );
};
