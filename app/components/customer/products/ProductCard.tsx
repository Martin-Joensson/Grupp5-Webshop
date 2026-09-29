"use client";
import Image from "next/image";
import { Button } from "@/components/Button";
import Arrow from "@/design/assets/arrow.svg";
import { Product } from "@/types";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group backdrop-blur-xs flex flex-col flex-1">
      <div className="relative aspect-4/5 overflow-hidden rounded-md bg-brand-offwhite/60 border-accent border rounded-tr-3xl">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div>
        <div className="pt-3">
          <p className="truncate text-lg font-bold font-heading text-dark">
            {product.title}
          </p>

          <p className="mt-0.5 text-[10px] text-secondary">
            {product.category?.name}
          </p>

          <p className="mt-1 line-clamp-3 text-[10px] leading-4 text-primary">
            {product.description}
          </p>

          <div className="mt-2 flex items-center justify-between">
            <p className="font-heading text-price">€ {product.price}</p>

            <Button
              variant="primary"
              size="sm"
              icon={<Arrow />}
              iconPosition="right"
              onClick={() => console.log("button clicked")}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
