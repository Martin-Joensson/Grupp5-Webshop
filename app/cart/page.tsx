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


  // Reusable button panel component with buttons to go back to previus page or to go to checkout.
  const ButtonPanel = () => {
    return (
      <div className="my-8 flex justify-center gap-2">
        <Button
          variant="outline"
          size="md"
          icon={<Arrow />}
          iconPosition="right"
          onClick={() => router.back()}
          aria-label="Back to previus page"
        >
          Back
        </Button>

        <Button
          variant="primary"
          size="md"
          icon={<Arrow />}
          iconPosition="right"
          onClick={() => console.log("to checkout clicked")}
          aria-label="Go to checkout"
        >
          Checkout
        </Button>
      </div>
    );
  };

  // What to render when shopping cart is still loading/hydrating
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


  // What to render if shopping cart is empty
  if (items.length === 0) {
    return (
      <main aria-labelledby="my-cart-heading" className="mx-auto flex min-h-96 max-w-7xl flex-col items-center justify-center gap-6 px-6">
        <h1 id="my-cart-heading" className="text-3xl text-dark">My cart</h1>
        <p className="text-primary">Your cart is empty.</p>
        <Link href="/" className="rounded-md bg-yellow-600 p-2 text-white">
          Back to products
        </Link>
      </main>
    );
  }


  const total = subtotal;
  const totalString: string = toEurosString(total);

  // What to render if the shopping cart contains 1 or more items
  return (
    <main aria-labelledby="cart-list-heading" className="mx-auto w-full max-w-7xl px-6">
      <Background aria-hidden className="fixed -z-10 -inset-1 top-[30%] left-[20%] text-soft/40 " />
      <section aria-label="Cart summary with back and checkout buttons" className="mx-auto text-center">
        <div className="my-8 text-4xl">
          <span aria-label={`Total price: ${totalString}`} className="block font-accent text-primary">{totalString}</span>
        </div>
        {ButtonPanel()}
      </section>

      <section aria-label="Products in my cart">
        <h1
          id="cart-list-heading"
          className="my-4 text-center text-3xl text-dark font-heading"
        >
          My Cart
        </h1>
        <ul
          aria-label={`Shopping cart list with ${items.length} different products`}
          className="flex flex-col gap-6"
        >
          {items.map((item) => (
            <li key={item.product.id} aria-labelledby={`cart-item-heading${item.product.id}`} >
              <CartItem
                item={item}
                onQuantityChange={setQuantity}
                onRemove={removeItem}
              />
            </li>
          ))}
          <span className="block text-right px-8 text-2xl text-primary font-heading">
            Total: {totalString}
          </span>
        </ul>
        {ButtonPanel()}
      </section>
    </main>
  );
}
