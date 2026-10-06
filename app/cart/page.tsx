import Link from "next/link";
import Image from "next/image";
import { getProduct } from "@/lib/api";
import { ProductWithIncludes } from "@/types";

export default async function CartPage() {
  const ids = [126, 145, 42];
  const productsInCart: ProductWithIncludes[] = [];
  for (const id of ids) {
    const product = await getProduct(id);
    if (product) {
      productsInCart.push(product);
    }
  }

  return (
    <main className="max-w-7xl w-full mx-auto">
      {/* Summary of the cart with total and subtotal pricing and buttons for going to checkout or back to product catalog. */}
      <section aria-label="Cart summary" className="mx-auto">
        <div className="text-5xl text-cyan-950 font-black text-center my-8">
          <p> Total: € 471 </p>
          <p> Subtotal: € 471 </p>
        </div>

        <div className="flex gap-4 justify-center my-8">
          <Link href="/" className="text-white bg-yellow-600 p-2 rounded-md">
            Back
          </Link>
          <button
            type="button"
            className="text-white bg-yellow-600 p-2 rounded-md"
          >
            Checkout
          </button>
        </div>
      </section>

      {/* Creates a list-item with an CartItem for each product in the shopping cart. */}
      <section aria-labelledby="cart-list-heading">
        <h1
          id="cart-list-heading"
          className="text-cyan-950 text-3xl font-black text-center my-4"
        >
          My cart
        </h1>

        <ul
          aria-label={`Shopping cart list with ${productsInCart.length} product(s)`}
          className="flex flex-col gap-6"
        >
          {productsInCart.map((cartProduct) => (
            <li
              key={cartProduct.id}
              aria-labelledby={`product-title-${cartProduct.id}`}
            >
              <CartItem product={cartProduct} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

// A component for products in the cart to be placed in a <li> in the <ul> that makes up the shopping cart.
function CartItem({ product }: { product: ProductWithIncludes }) {
  const quantity: number = 2;

  return (
    <article
      aria-labelledby={`product-title-${product.id}`}
      className="bg-white p-4 w-full flex gap-4 justify-between"
    >
      {/* Image and title of product */}
      <div className="flex items-center gap-4 w-72">
        <Image
          src={product.thumbnail}
          alt=""
          width={300}
          height={300}
          className="max-w-20 border"
        />
        <h2
          id={`product-title-${product.id}`}
          className="text-cyan-950 font-black text-center"
        >
          {product.title}
        </h2>
      </div>

      {/* The products discount */}
      <div className="flex items-center">
        <p>{product.discountPercentage?.toString()}% off</p>
      </div>

      <div className="flex gap-10 items-center">
        {/* Quantity input field */}
        <div className="grid">
          <label
            htmlFor={`quantity-${product.id}`}
            className="block text-center mbs-auto mbe-2"
          >
            Quantity (minimum 1)
          </label>
          <input
            type="number"
            id={`quantity-${product.id}`}
            name="quantity"
            min="1"
            defaultValue={quantity}
            className="block border p-2"
          />
        </div>

        {/* Pricing per product and total for all of this product */}
        <div>
          <p> Per product: €{product.price} </p>
          <p> For all products: €{product.price * quantity} </p>
        </div>

        {/* Remove from cart button */}
        <button
          type="button"
          className="bg-black text-white p-4 h-10 w-10 rounded-xl flex items-center"
        >
          x
        </button>
      </div>
    </article>
  );
}
