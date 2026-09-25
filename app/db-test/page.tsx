import { getProducts } from "@/lib/database";

export default async function DbTestPage() {
  const products = await getProducts({ limit: 8 });

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
