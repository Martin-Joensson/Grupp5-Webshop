"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/customer/Button";
import Arrow from "@/design/assets/arrow.svg";
import { ProductWithIncludes } from "@/types";
import { toEurosString } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";

type ProductCardProps = Pick<
  ProductWithIncludes,
  "id" | "title" | "thumbnail" | "category" | "description" | "price"
> & {
  datePurchased?: string;
  purchasedPrice?: number;
};

export const ProductCard = ({
  id,
  title,
  thumbnail,
  category,
  description,
  price,
  datePurchased,
  purchasedPrice,
}: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);

  console.log(datePurchased, purchasedPrice);
  return (
    <article className="group glass flex flex-col h-full gap-2 rounded ">
      <Link href={`/product/${id}`}>
        <div className="relative w-full flex-none self-start h-auto aspect-4/5 overflow-hidden rounded-md  border-accent border rounded-tr-3xl">
          <Image
            src={thumbnail}
            alt={`Product details page for ${title}`}
            sizes="(max-width: 640px) 50vw, 25vw"
            loading="eager"

            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105 hover:cursor-pointer"
          />
        </div>
      </Link>

      <div className="flex-1 flex flex-col justify-between m-2 gap-4">
        <div className="flex flex-col gap-4">
          <div>
            {
              // If the heading is more than 25 characters it's likeley to overflow and a `title` is added
              // so that the entire product title can be seen by hovering over the title text.
              title.length > 25 &&
              <h3 id={`product-card-heading-${id}`} className="truncate text-lg font-bold font-heading text-dark" title={title}>
                {title}
              </h3>
              ||
              <h3 id={`product-card-heading-${id}`} className="truncate text-lg font-bold font-heading text-dark">
                {title}
              </h3>
            }

            <p aria-label="Product category" className="text-xs text-secondary">{category?.name}</p>
          </div>

          <p className="line-clamp-2 text-xs leading-4 text-primary">
            {description}
          </p>
        </div>

        {datePurchased ? (
          <div className="flex justify-between">
            <p>Bought before: {datePurchased}</p>

            {purchasedPrice !== undefined && (
              <p className="text-secondary">{toEurosString(purchasedPrice)}</p>
            )}
          </div>
        ) : null}

        <div className="mt-2 flex items-center justify-between">
          <p className="font-heading text-price">{toEurosString(price)}</p>

          <Button
            variant="primary"
            size="sm"
            iconSize="md"
            icon={<Arrow />}
            iconPosition="right"
            title="Add to cart"
            onClick={() =>
              addItem({
                id,
                title,
                thumbnail,
                price,
              })
            }
          />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
