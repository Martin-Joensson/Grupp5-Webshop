"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartProduct = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage?: number;
  minimumOrderQuantity?: number;
};

export type CartItem = {
  product: CartProduct;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  hasHydrated: boolean;
  addItem: (product: CartProduct) => void;
  removeItem: (productId: number) => void;
  setQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      hasHydrated: false,

      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id,
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                product,
                quantity: product.minimumOrderQuantity ?? 1,
              },
            ],
          };
        }),

      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        })),

      setQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) => {
            if (item.product.id !== productId) {
              return item;
            }

            const minimum = item.product.minimumOrderQuantity ?? 1;

            return {
              ...item,
              quantity: Math.max(minimum, quantity),
            };
          }),
        })),

      clearCart: () => set({ items: [] }),

      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: "nagare-cart",
      partialize: (state) => ({
        items: state.items,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
