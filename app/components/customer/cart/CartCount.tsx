"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import CartIcon from "@/design/assets/user.svg";

export default function CartCount() {
  const items = useCartStore((state) => state.items);
  const hasHydrated = useCartStore((state) => state.hasHydrated);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className=" font-medium transition-opacity hover:opacity-60"
      aria-label={`Cart with ${hasHydrated ? itemCount : 0} item(s)`}
    >
     
      <div className="relative w-15">
        
      <CartIcon className="relative text-accent w-15"/>

    
      {hasHydrated && itemCount > 0 && (
        <span className="absolute -right-4 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1 text-xs text-white">
          {itemCount}
        </span>
      )}
      </div>
    </Link>
  );
}
