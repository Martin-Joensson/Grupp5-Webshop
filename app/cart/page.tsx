"use client";
import Link from "next/link";
import CartItem from "@/components/customer/cart/CartItem";
import { useCartStore } from "@/store/cartStore";
import { toEurosString } from "@/lib/utils";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const hasHydrated = useCartStore((state) => state.hasHydrated);
  const removeItem = useCartStore((state) => state.removeItem);
  const setQuantity = useCartStore((state) => state.setQuantity);

  if (!hasHydrated) {
    return (
      <main className="mx-auto flex min-h-96 max-w-7xl items-center justify-center px-6">
        <p className="text-primary">Loading cart...</p>
      </main>
    );
  }

  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const total = subtotal;

  if (items.length === 0) {
    return (
      <main className="mx-auto flex min-h-96 max-w-7xl flex-col items-center justify-center gap-6 px-6">
        <h1 className="text-3xl font-black text-cyan-950">My cart</h1>
        <p className="text-primary">Your cart is empty.</p>
        <Link href="/" className="rounded-md bg-yellow-600 p-2 text-white">
          Back to products
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6">
      <section aria-label="Cart summary" className="mx-auto text-center">
        <div className="my-8 text-4xl font-black text-cyan-950">
          <p>{toEurosString(total)}</p>
        </div>

        <div className="my-8 flex justify-center gap-4">
          <Link href="/" className="rounded-md bg-yellow-600 p-2 text-white">
            Back
          </Link>

          <button
            type="button"
            className="rounded-md bg-yellow-600 p-2 text-white"
          >
            Checkout
          </button>
        </div>
      </section>

      <section aria-labelledby="cart-list-heading">
        <h1
          id="cart-list-heading"
          className="my-4 text-center text-3xl font-black text-cyan-950"
        >
          My cart
        </h1>

        <ul
          aria-label={`Shopping cart list with ${items.length} product(s)`}
          className="flex flex-col gap-6"
        >
          {items.map((item) => (
            <li key={item.product.id}>
              <CartItem
                item={item}
                onQuantityChange={setQuantity}
                onRemove={removeItem}
              />
            </li>
          ))}
        </ul>
        <div className="my-8 flex justify-center gap-4">
          <Link href="/" className="rounded-md bg-yellow-600 p-2 text-white">
            Back
          </Link>

          <button
            type="button"
            className="rounded-md bg-yellow-600 p-2 text-white"
          >
            Checkout
          </button>
        </div>
      </section>
    </main>
  );
}
