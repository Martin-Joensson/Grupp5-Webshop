import { getProducts, getStats } from "@/lib/api";

export default async function DbTestPage() {
  const productsResponse = await getProducts({ limit: 8, sort: "title" });
  const stats = await getStats();
  console.log(stats);
  const { products } = productsResponse;

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl">Database test page</h1>
      {products.map((product) => (
        <p
          key={product.id}
        >{`${product.title} ${product.brand} ${product.price} ${product.description}`}</p>
      ))}
    </div>
  );
}
