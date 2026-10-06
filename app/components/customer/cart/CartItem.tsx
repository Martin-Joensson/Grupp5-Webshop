"use client";

import Image from "next/image";
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
    <article className="flex w-full flex-col gap-4 bg-white p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4 md:w-72">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={80}
          height={80}
          className="border object-contain"
        />

        <h2 className="font-black text-cyan-950">{product.title}</h2>
      </div>

      <p>{product.discountPercentage ?? 0}% off</p>

      <div className="flex flex-wrap items-center gap-6">
        <div>
          <label
            htmlFor={`quantity-${product.id}`}
            className="mb-2 block text-center"
          >
            Quantity
          </label>

          <input
            type="number"
            id={`quantity-${product.id}`}
            min={minimumQuantity}
            value={quantity}
            onChange={(event) =>
              onQuantityChange(product.id, Number(event.target.value))
            }
            className="block w-24 border p-2"
          />
        </div>

        <div className="flex flex-col">
          <p aria-label="Cost Per product" className="text-secondary">
            {toEurosString(product.price)}
          </p>
          <p aria-label="Cost for all products" className="text-primary">
            {toEurosString(product.price * quantity)}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onRemove(product.id)}
          aria-label={`Remove ${product.title} from cart`}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white"
        >
          ×
        </button>
      </div>
    </article>
  );
}
