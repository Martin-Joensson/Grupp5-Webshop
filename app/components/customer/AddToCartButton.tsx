"use client";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/customer/Button";

type AddButtonProps = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
};

export function AddToCartButton({
  id,
  title,
  thumbnail,
  price,
}: AddButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  return (
    <Button
      variant="primary"
      iconPosition="right"
      onClick={() =>
        addItem({
          id,
          title,
          thumbnail,
          price,
        })
      }
    >
      Add to Cart
    </Button>
  );
}
