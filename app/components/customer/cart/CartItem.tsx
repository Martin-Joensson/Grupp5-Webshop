"use client";

import Image from "next/image";
import { Button } from "@/components/customer/Button";
import { toEurosString } from "@/lib/utils";
import type { CartItem as CartItemType } from "@/store/cartStore";
import Link from "next/link";

type CartItemProps = {
  item: CartItemType;
  onQuantityChange: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
};

export default function CartItem({
  item,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  const { product, quantity } = item;
  const minimumQuantity = product.minimumOrderQuantity ?? 1;

  return (
    <article className="relative flex w-full flex-col gap-4 p-4  md:flex-row md:items-center md:justify-between">
      <Link href={`/product/${product.id}`} className="flex items-center gap-4 ">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={80}
          height={80}
          className="object-contain border border-secondary rounded-xl"
        />

        <h2 className="font-black text-primary font-heading">
          {product.title}
        </h2>
      </Link>
      {product.discountPercentage && (
        <p>{product.discountPercentage ?? 0}% off</p>
      )}

      <div className="flex flex-wrap items-center gap-6 justify-end">
        <div className="grid w-full sm:grid-cols-[120px_minmax(0,1fr)_40px] items-center gap-10 sm:gap-4 md:w-auto md:grid-cols-[120px_minmax(140px,1fr)_40px]">
          {/* Quantity controls */}
          <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-secondary glass transition-all duration-250 hover:rounded-4xl">
            <Button
              variant="ghost"
              onClick={() => onQuantityChange(product.id, quantity - 1)}
              className="text-dark hover:bg-accent hover:text-light hover:rounded-none"
            >
              -
            </Button>

            <input
              aria-label="Quantity"
              type="number"
              id={`quantity-${product.id}`}
              min={minimumQuantity}
              value={quantity}
              onChange={(event) =>
                onQuantityChange(product.id, Number(event.target.value))
              }
              className="w-full min-w-0 text-center"
            />

            <Button
              variant="ghost"
              onClick={() => onQuantityChange(product.id, quantity + 1)}
              className="text-dark hover:bg-accent hover:text-light hover:rounded-none"
            >
              +
            </Button>
          </div>

          {/* Price */}
          <div className="flex min-w-0 flex-col items-end justify-center font-heading">
            {quantity > 1 && (
              <p className="text-secondary text-sm">
                {toEurosString(product.price)}
              </p>
            )}

            <p
              aria-label="Cost for all products"
              className="max-w-full text-right text-lg text-dark wrap-anywhere"
            >
              {toEurosString(product.price * quantity)}
            </p>
          </div>

          {/* Remove */}
          <Button
            variant="tertiary"
            size="sm"
            onClick={() => onRemove(product.id)}
            aria-label="Remove Item"
            className="w-10 sm:static absolute left-4 bottom-5"
          >
            X
          </Button>
        </div>
      </div>
    </article>
  );
}
