"use client";
import Link from "next/link";
import { Button } from "@/components/customer/Button";
import Arrow from "@/design/assets/arrow.svg";
import { useRouter } from "next/navigation";
import CartItem from "@/components/customer/cart/CartItem";
import { useCartStore } from "@/store/cartStore";
import { toEurosString } from "@/lib/utils";
import Background from "@/design/assets/splash1.svg";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const hasHydrated = useCartStore((state) => state.hasHydrated);
  const removeItem = useCartStore((state) => state.removeItem);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const router = useRouter();

  const ButtonPanel = () => {
    return (
      <div className="my-8 flex justify-center gap-2">
        <Button
          variant="outline"
          size="md"
          icon={<Arrow />}
          iconPosition="right"
          onClick={() => router.back()}
        >
          Back
        </Button>

        <Button
          variant="primary"
          size="md"
          icon={<Arrow />}
          iconPosition="right"
          onClick={() => console.log("to checkout clicked")}
        >
          Checkout
        </Button>
      </div>
    );
  };

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
        <Background className="fixed -z-10 -inset-1 top-[30%] left-[20%] text-soft/40 " />
        <h1 className="text-3xl text-dark">My cart</h1>
        <p className="text-primary">Your cart is empty.</p>
        <Link href="/" className="rounded-md bg-yellow-600 p-2 text-white">
          Back to products
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6">
      <Background className="fixed -z-10 -inset-1 top-[30%] left-[20%] text-soft/40 " />
      <section aria-label="Cart summary" className="mx-auto text-center my-20">
        <div className="my-8 text-3xl sm:text-5xl md:text-7xl">
          <p className="font-accent text-primary">{toEurosString(total)}</p>
        </div>
        {ButtonPanel()}
      </section>

      <section aria-labelledby="cart-list-heading">
        <h1
          id="cart-list-heading"
          className="my-4 text-center text-3xl text-primary font-heading"
        >
          My Cart
        </h1>
        <ul
          aria-label={`Shopping cart list with ${items.length} product(s)`}
          className="flex flex-col gap-6 max-w-5xl m-auto"
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
          <li className="text-right px-8 text-2xl text-primary font-heading">
            Total: {toEurosString(total)}
          </li>
        </ul>
        {ButtonPanel()}
      </section>
    </main>
  );
}
