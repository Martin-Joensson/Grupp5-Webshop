"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/customer/Button";
import Arrow from "@/design/assets/arrow.svg";
import { ProductWithIncludes } from "@/types";
import { toEurosString } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";

type ProductCardProps = Pick<
  ProductWithIncludes,
  "id" | "title" | "thumbnail" | "category" | "description" | "price"
>;

export const ProductCard = ({
  id,
  title,
  thumbnail,
  category,
  description,
  price,
}: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  return (
    <article className="group backdrop-blur-xs flex flex-col h-full gap-2">
      <Link href={`/product/${id}`}>
        <div className="relative w-full flex-none self-start h-auto aspect-4/5 overflow-hidden rounded-md bg-brand-offwhite/60 border-accent border rounded-tr-3xl">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105 hover:cursor-pointer"
          />
        </div>
      </Link>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <p className="truncate text-lg font-bold font-heading text-dark">
            {title}
          </p>

          <p className="text-xs text-secondary">{category?.name}</p>

          <p className="line-clamp-3 text-xs leading-4 text-primary">
            {description}
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <p className="font-heading text-price">{toEurosString(price)}</p>

          <Button
            variant="primary"
            size="sm"
            icon={<Arrow />}
            iconPosition="right"
            aria-label={`Add ${title} to cart`}
            onClick={() =>
              addItem({
                id,
                title,
                thumbnail,
                price,
              })
            }
          />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
