// ProductList.tsx

import { Product } from "@/types";
import ProductCard from "@/components/customer/products/ProductCard";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-[minmax(0,1fr)_2rem] items-start">
      <ul className="customer-product-grid min-w-0">
        {products.map((product) => (
          <li key={product.id} className="flex min-w-0">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <div className="flex items-start pt-5 pb-20 px-5 justify-center rounded-br-3xl rounded-md bg-brand-darkblue">
        <span className="[writing-mode:vertical-rl] text-3xl font-bold tracking-widest text-white">
          PRODUCTS
        </span>
      </div>
    </div>
  );
};
