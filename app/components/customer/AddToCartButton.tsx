"use client";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/customer/Button";
import Arrow from "@/design/assets/arrow.svg";

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
      icon={<Arrow />}
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
