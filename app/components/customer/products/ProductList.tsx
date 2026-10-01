// ProductList.tsx

import { PrismaProduct } from "@/types";
import ProductCard from "@/components/customer/products/ProductCard";

export const ProductList = ({ products }: { products: PrismaProduct[] }) => {
  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-[minmax(0,1fr)_2rem] items-start gap-x-1">
      <ul className="mx-auto grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 min-w-0">
        {products.map((product) => (
          <li key={product.id} className="min-w-0">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <div className="flex pt-5 h-[35%] px-5 justify-center rounded-br-4xl rounded-md bg-brand-darkblue cursor-default">
        <p className="[writing-mode:vertical-lr] text-xl tracking-widest text-white font-accent">
          PRODUCTS
        </p>
      </div>
    </div>
  );
};
