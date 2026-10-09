"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/customer/Button";
import { toEurosString } from "@/lib/utils";
import type { CartItem as CartItemType } from "@/store/cartStore";

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
    <article aria-labelledby={`cart-item-heading${product.id}`} className="flex w-full flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4 md:w-72 hover:underline" aria-label={`Product page for ${product.title}`} >
        <Image
          src={product.thumbnail}
          alt=""
          width={80}
          height={80}
          className="object-contain border-2 border-primary rounded-xl"
        />

        <h2 id={`cart-item-heading${product.id}`} className="font-black text-cyan-950">{product.title}</h2>
      </div>
      {product.discountPercentage && (
        <p>{product.discountPercentage ?? 0}% off</p>
      )}

      <div className="flex flex-wrap items-center gap-6">
        <div className="flex-1 flex flex-row border-primary border rounded py-1">
          <Button
            variant="ghost"
            onClick={() => onQuantityChange(product.id, quantity - 1)}
            className="text-dark hover:bg-tertiary/30 hover:rounded-none"
            aria-hidden="true"
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
            className="w-12 text-center"
          />
          <Button
            variant="ghost"
            onClick={() => onQuantityChange(product.id, quantity + 1)}
            className="text-dark text-lg hover:bg-primary/30 hover:rounded-none"
            aria-hidden="true"
          >
            +
          </Button>
        </div>
        <div className="flex flex-col font-heading">
          {quantity > 1 && (
            <p
              aria-label={`Cost Per product: ${toEurosString(product.price)}`}
              className="text-secondary text-sm text-right"
            >
              {toEurosString(product.price)}
            </p>
          )}
          <p aria-label={`Cost for all products ${toEurosString(product.price * quantity)}`} className="text-dark text-lg">
            {toEurosString(product.price * quantity)}
          </p>
        </div>

        <Button
          variant="tertiary"
          size="sm"
          onClick={() => onRemove(product.id)}
          aria-label="Remove Item"
        >
          X
        </Button>
      </div>
    </article>
  );
}