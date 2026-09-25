import Link from "next/link";
import { getProducts } from "./lib/database";

export default async function HomePage() {
  const products = await getProducts({ limit: 8 });

  return (
    <div>
      <h1 className="text-3xl"> Webshop Home page </h1>

      {/* Temporary links below */}
      <br />
      <Link href="/product/id" className="underline">
        Go to product details page
      </Link>
      <br />
      <Link href="/cart" className="underline">
        Go to Cart page
      </Link>
      <br />
      <Link href="/admin" className="underline">
        Go to Admin page
      </Link>

      {products.map((product) => (
        <p
          key={product.id}
        >{`${product.title} ${product.brand} ${product.price} ${product.description}`}</p>
      ))}
    </div>
  );
}
