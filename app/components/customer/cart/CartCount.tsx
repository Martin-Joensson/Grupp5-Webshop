"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CartCount() {
  const items = useCartStore((state) => state.items);
  const hasHydrated = useCartStore((state) => state.hasHydrated);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="relative font-medium transition-opacity hover:opacity-60"
      aria-label={`Cart with ${hasHydrated ? itemCount : 0} item(s)`}
    >
      cart
      {hasHydrated && itemCount > 0 && (
        <span className="absolute -right-4 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-golden px-1 text-xs text-white">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
