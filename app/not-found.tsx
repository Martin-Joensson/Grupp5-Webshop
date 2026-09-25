"use client";

import { Button } from "./components/Button";
import Arrow from "@/design/assets/arrow.svg";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex flex-col bg-[url('/splash3.svg')] bg-cover w-full mx-auto items-center gap-6 text-center">
      <div className="p-4 flex flex-col gap-11 text-primary">
        <h1>404 Not Found</h1>
        <h2 className="leading-tight">
          Lost in NAGARE
          <br />
          <span className="font-accent text-2xl font-bold text-secondary">
            ナガレの中で見失う
          </span>
        </h2>
        <p className="text-tertiary">
          The page you are looking for isn&apos;t there
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          size="lg"
          icon={<Arrow />}
          iconPosition="right"
          onClick={() => router.back()}
        >
          Back
        </Button>

        <Button
          variant="primary"
          size="lg"
          icon={<Arrow />}
          iconPosition="right"
          onClick={() => router.push("/")}
        >
          To Products
        </Button>
      </div>
    </main>
  );
}
