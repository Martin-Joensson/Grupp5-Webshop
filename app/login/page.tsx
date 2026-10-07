"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/customer/Button";
import Link from "next/link";

export default function LoginPage() {
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      return;
    }

    window.location.href = "/profile";
  }

  return (
    <main className="max-w-270 mx-auto my-27">
      <h1 className="font-heading my-4">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="border px-4 py-2 rounded border-secondary"
          name="email"
          type="email"
          placeholder="Email"
          required
        />

        <input
          className="border px-4 py-2 rounded border-secondary"
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <Button className="my-4" type="submit">
          Login
        </Button>

        {error && <p>{error}</p>}
      </form>
      <Link
        href="/register"
        className=" text-primary underline"
        aria-label="Register Account"
      >
        Register account 
      </Link>
    </main>
  );
}
