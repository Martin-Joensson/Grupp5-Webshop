"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex flex-col mx-auto items-center gap-6 text-center">
      <div className="p-6 flex flex-col gap-24">
        <h1 className="text-6xl font-bold">404 Not Found</h1>
        <h2 className="text-4xl font-bold">
          Lost in NAGARE
          <br />
          ナガレの中で見失う
        </h2>
        <p>The page you are looking for isn&apos;t there</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => router.back()}
          className="rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
        >
          Back
        </button>

        <Link
          href="/"
          className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          To Products
        </Link>
      </div>
    </main>
  );
}
