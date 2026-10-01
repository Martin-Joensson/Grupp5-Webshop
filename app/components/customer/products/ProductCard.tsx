"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import type { Product } from "@/types";
import Arrow from "@/design/assets/arrow.svg";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group backdrop-blur-xs flex flex-col h-full gap-2">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full flex-none self-start h-auto aspect-4/5 overflow-hidden rounded-md bg-brand-offwhite/60 border-accent border rounded-tr-3xl">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105 hover:cursor-pointer"
          />
        </div>
      </Link>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <p className="truncate text-lg font-bold font-heading text-dark">
            {product.title}
          </p>

          <p className="text-xs text-secondary">{product.category?.name}</p>

          <p className="line-clamp-3 text-xs leading-4 text-primary">
            {product.description}
          </p>
        </div>

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
    </article>
  );
};

export default ProductCard;
